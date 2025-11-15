/**
 * Hook to manage wallet-specific storage and auto-cleanup on wallet changes
 */

import { useEffect, useRef } from 'react';
import { useAccount } from 'wagmi';
import { initializeStorageManager, migrateOldStorageToWallet, cleanupOldStorage, getStorageStats } from '../utils/storageManager';

export function useWalletStorageManager() {
  const { address, isConnected } = useAccount();
  const previousAddress = useRef<string | undefined>(undefined);
  const hasMigrated = useRef(false);

  useEffect(() => {
    // Initialize storage manager with current wallet
    initializeStorageManager(address);

    // If wallet just connected for the first time, try migration
    if (isConnected && address && !hasMigrated.current) {
      // Check if old global storage exists
      const hasOldData = 
        localStorage.getItem('igl_chat_conversations') ||
        localStorage.getItem('transactions');
      
      if (hasOldData) {
        console.log('[WalletStorage] Detected old global storage, migrating...');
        migrateOldStorageToWallet(address);
        
        // Clean up old keys after successful migration
        setTimeout(() => {
          cleanupOldStorage();
        }, 1000);
      }
      
      hasMigrated.current = true;
    }

    // Log storage stats when wallet changes (dev mode)
    if (previousAddress.current !== address) {
      const stats = getStorageStats();
      console.log('[WalletStorage] Storage stats:', stats);
      console.log(`[WalletStorage] Active wallet: ${address || 'none'}`);
    }

    previousAddress.current = address;
  }, [address, isConnected]);

  return {
    currentWallet: address,
    isConnected
  };
}
