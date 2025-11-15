import { useState, useEffect } from 'react';
import { useAccount, usePublicClient, useWriteContract } from 'wagmi';
import {
  getUserSubscription,
  getUSDCBalance,
  formatUSDC,
  getTimeRemaining,
  PlanType,
  formatExpiryDate,
  getPlanName,
  SUBSCRIPTION_CONTRACT_ADDRESS,
  USDC_TOKEN_ADDRESS,
  SUBSCRIPTION_PLAN_ABI,
  ERC20_ABI,
} from '../services/contractService';

interface SubscriptionData {
  planType: PlanType;
  expiryTimestamp: bigint;
  hasAccess: boolean;
  isExpired: boolean;
}

interface UseSubscriptionReturn {
  // Wallet connection
  isConnected: boolean;
  address: string | undefined;
  
  // Subscription status
  subscription: SubscriptionData | null;
  planName: string;
  expiryFormatted: string;
  timeRemaining: string;
  hasAccess: boolean;
  
  // Balance
  usdcBalance: string;
  
  // Actions
  purchasePlan: (planType: PlanType) => Promise<void>;
  
  // Loading and error states
  isLoading: boolean;
  isPurchasing: boolean;
  error: string | null;
  
  // Refresh function
  refetch: () => Promise<void>;
}

// Cache for subscription data per address
const subscriptionCache = new Map<string, {
  data: SubscriptionData;
  balance: string;
  timestamp: number;
}>();

const CACHE_DURATION = 30000; // 30 seconds

export function useSubscription(): UseSubscriptionReturn {
  const { address, isConnected } = useAccount();
  
  const [subscription, setSubscription] = useState<SubscriptionData | null>(null);
  const [usdcBalance, setUsdcBalance] = useState('0');
  const [isLoading, setIsLoading] = useState(false);
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch subscription data
  const publicClient = usePublicClient();

  const fetchSubscriptionData = async () => {
    if (!address || !isConnected || !publicClient) {
      setSubscription(null);
      setUsdcBalance('0');
      return;
    }

    // Check cache first
    const cached = subscriptionCache.get(address.toLowerCase());
    const now = Date.now();
    
    if (cached && (now - cached.timestamp) < CACHE_DURATION) {
      console.log('[useSubscription] Using cached data for:', address);
      setSubscription(cached.data);
      setUsdcBalance(cached.balance);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      console.log('[useSubscription] Fetching data for address:', address);
      console.log('[useSubscription] Using USDC contract:', await import('../services/contractService').then(m => m.USDC_TOKEN_ADDRESS));
      console.log('[useSubscription] Using publicClient:', publicClient);
      
      // Fetch subscription and balance using wagmi's publicClient
      const [sub, balance] = await Promise.all([
        getUserSubscription(address, publicClient as any),
        getUSDCBalance(address, publicClient as any),
      ]);

      const formattedBalance = formatUSDC(balance);
      setSubscription(sub);
      setUsdcBalance(formattedBalance);
      
      // Cache the result
      subscriptionCache.set(address.toLowerCase(), {
        data: sub,
        balance: formattedBalance,
        timestamp: now,
      });
      
      console.log('[useSubscription] Fetched data:', {
        plan: getPlanName(sub.planType),
        hasAccess: sub.hasAccess,
        isExpired: sub.isExpired,
        balanceRaw: balance.toString(),
        balanceFormatted: formattedBalance,
        balanceNumber: parseFloat(formattedBalance),
      });
    } catch (err) {
      console.error('Error fetching subscription data:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch subscription data');
    } finally {
      setIsLoading(false);
    }
  };

  const { writeContractAsync } = useWriteContract();

  // Purchase plan function
  const purchasePlan = async (planType: PlanType) => {
    if (!address || !isConnected) {
      setError('Please connect your wallet');
      return;
    }

    if (planType === PlanType.FREE) {
      setError('Cannot purchase free plan');
      return;
    }

    setIsPurchasing(true);
    setError(null);

    try {
      // Plan prices
      const prices: Record<PlanType, bigint> = {
        [PlanType.FREE]: BigInt(0),
        [PlanType.MONTHLY]: BigInt(2_000000), // $2 with 6 decimals
        [PlanType.YEARLY]: BigInt(20_000000), // $20 with 6 decimals
      };
      const price = prices[planType];
      
      console.log('[useSubscription] Step 1: Approving USDC:', price.toString());
      
      // Step 1: Approve USDC spending
      const approveHash = await writeContractAsync({
        address: USDC_TOKEN_ADDRESS as `0x${string}`,
        abi: ERC20_ABI,
        functionName: 'approve',
        args: [SUBSCRIPTION_CONTRACT_ADDRESS as `0x${string}`, price],
      });
      
      console.log('[useSubscription] Approve tx hash:', approveHash);
      
      // Wait for approval to be mined
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      console.log('[useSubscription] Step 2: Purchasing plan:', planType);
      
      // Step 2: Purchase the plan
      const purchaseHash = await writeContractAsync({
        address: SUBSCRIPTION_CONTRACT_ADDRESS as `0x${string}`,
        abi: SUBSCRIPTION_PLAN_ABI,
        functionName: 'purchasePlan',
        args: [planType],
      });
      
      console.log('[useSubscription] Purchase tx hash:', purchaseHash);
      
      // Wait for purchase to be mined
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Refresh data
      await fetchSubscriptionData();
    } catch (err) {
      console.error('Error purchasing subscription:', err);
      
      // Handle user rejection gracefully
      if (err instanceof Error) {
        if (err.message.includes('user rejected') || err.message.includes('User rejected')) {
          setError('Transaction cancelled');
        } else {
          setError(err.message);
        }
      } else {
        setError('Failed to purchase subscription');
      }
      
      throw err;
    } finally {
      setIsPurchasing(false);
    }
  };

  // Fetch on mount and when address changes
  useEffect(() => {
    if (address && isConnected) {
      fetchSubscriptionData();
    }
  }, [address, isConnected]);

  // Calculate derived values
  const planName = subscription ? getPlanName(subscription.planType) : 'No Plan';
  const expiryFormatted = subscription ? formatExpiryDate(subscription.expiryTimestamp) : '';
  const timeRemaining = subscription ? getTimeRemaining(subscription.expiryTimestamp) : '';
  const hasAccess = subscription?.hasAccess || false;

  return {
    isConnected,
    address,
    subscription,
    planName,
    expiryFormatted,
    timeRemaining,
    hasAccess,
    usdcBalance,
    purchasePlan,
    isLoading,
    isPurchasing,
    error,
    refetch: fetchSubscriptionData,
  };
}
