import { PlanType } from '../services/contractService';

export interface SubscriptionPlan {
  id: string;
  name: string;
  planType: PlanType;
  description: string;
  price: string;
  priceUSDC: string; // In USDC (with decimals)
  period?: string;
  originalPrice?: string;
  badge?: string;
  features: string[];
  popular?: boolean;
  icon: string;
}

// Subscription plans matching the smart contract
export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'free',
    name: 'Free',
    planType: PlanType.FREE,
    description: 'Basic access to explore the platform',
    price: 'Free',
    priceUSDC: '0',
    features: [
      'Limited DCA Features',
      'View Portfolio',
      'Basic Analytics',
      'Community Access',
    ],
    icon: 'layers',
  },
  {
    id: 'monthly',
    name: 'Monthly',
    planType: PlanType.MONTHLY,
    description: 'Perfect for regular traders',
    price: '$2',
    priceUSDC: '2',
    period: '/month',
    badge: 'Popular',
    popular: true,
    features: [
      'Full DCA Access',
      'Automated Strategies',
      'Advanced Analytics',
      'Portfolio Tracking',
      'Priority Support',
      '30-Day Access',
    ],
    icon: 'zap',
  },
  {
    id: 'yearly',
    name: 'Yearly',
    planType: PlanType.YEARLY,
    description: 'Best value for committed users',
    price: '$20',
    priceUSDC: '20',
    period: '/year',
    originalPrice: '$24',
    features: [
      'All Monthly Features',
      '365-Day Access',
      'Save 17% annually',
      'Extended DCA Strategies',
      'Premium Analytics',
      'VIP Support',
      'Early Feature Access',
    ],
    icon: 'star',
  },
];

// Plan duration in seconds (matching contract)
export const PLAN_DURATIONS = {
  [PlanType.FREE]: 0, // No expiry
  [PlanType.MONTHLY]: 30 * 24 * 60 * 60, // 30 days
  [PlanType.YEARLY]: 365 * 24 * 60 * 60, // 365 days
};

// Plan colors for UI
export const PLAN_COLORS = {
  [PlanType.FREE]: {
    gradient: 'from-gray-600 to-gray-800',
    border: 'border-gray-500',
    bg: 'bg-gray-900/50',
  },
  [PlanType.MONTHLY]: {
    gradient: 'from-purple-600 to-blue-600',
    border: 'border-purple-500',
    bg: 'bg-purple-900/20',
  },
  [PlanType.YEARLY]: {
    gradient: 'from-yellow-500 to-orange-600',
    border: 'border-yellow-500',
    bg: 'bg-yellow-900/20',
  },
};

// Contract prices (in USDC with 6 decimals)
export const PLAN_PRICES = {
  [PlanType.FREE]: '0',
  [PlanType.MONTHLY]: '2',
  [PlanType.YEARLY]: '20',
};

// Helper function to get plan by type
export const getPlanByType = (planType: PlanType): SubscriptionPlan | undefined => {
  return SUBSCRIPTION_PLANS.find((plan) => plan.planType === planType);
};

// Helper function to get plan by id
export const getPlanById = (id: string): SubscriptionPlan | undefined => {
  return SUBSCRIPTION_PLANS.find((plan) => plan.id === id);
};
