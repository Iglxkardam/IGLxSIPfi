/**
 * Storage Manager
 * Centralized manager for all wallet-specific data with auto-cleanup on wallet change
 */

import { clearTempData } from './walletStorage';

let currentWalletAddress: string | undefined = undefined;

/**
 * Initialize storage manager with wallet address
 * Clears data when wallet changes
 */
export function initializeStorageManager(walletAddress: string | undefined): void {
  // If wallet changed (including disconnect), clear temp data
  if (currentWalletAddress !== walletAddress) {
    console.log(`[StorageManager] Wallet changed: ${currentWalletAddress} → ${walletAddress}`);
    
    // Clear temporary data when switching wallets
    if (currentWalletAddress !== undefined) {
      clearTempData();
    }
    
    currentWalletAddress = walletAddress;
  }
}

/**
 * Get current wallet address
 */
export function getCurrentWallet(): string | undefined {
  return currentWalletAddress;
}

/**
 * Migrate old global data to wallet-specific storage
 * Call this once when user first connects wallet after upgrade
 */
export function migrateOldStorageToWallet(walletAddress: string): void {
  const migrationKey = `migrated_${walletAddress.toLowerCase()}`;
  
  // Check if already migrated
  if (localStorage.getItem(migrationKey)) {
    return;
  }
  
  console.log(`[StorageManager] Migrating old storage to wallet-specific for ${walletAddress}`);
  
  try {
    // Migrate chat conversations
    const oldChats = localStorage.getItem('igl_chat_conversations');
    if (oldChats) {
      const newKey = `wallet_${walletAddress.toLowerCase()}_chat_conversations`;
      localStorage.setItem(newKey, oldChats);
      console.log(`[StorageManager] Migrated chat conversations`);
    }
    
    // Migrate current chat ID
    const oldCurrentChat = localStorage.getItem('igl_current_chat_id');
    if (oldCurrentChat) {
      const newKey = `wallet_${walletAddress.toLowerCase()}_current_chat_id`;
      localStorage.setItem(newKey, oldCurrentChat);
      console.log(`[StorageManager] Migrated current chat ID`);
    }
    
    // Migrate transactions
    const oldTxs = localStorage.getItem('transactions');
    if (oldTxs) {
      const newKey = `wallet_${walletAddress.toLowerCase()}_transactions`;
      localStorage.setItem(newKey, oldTxs);
      console.log(`[StorageManager] Migrated transactions`);
    }
    
    // Mark as migrated
    localStorage.setItem(migrationKey, 'true');
    
    console.log(`[StorageManager] Migration complete for ${walletAddress}`);
  } catch (error) {
    console.error('[StorageManager] Migration failed:', error);
  }
}

/**
 * Clean up old global storage keys after migration
 * Only call this after confirming migration was successful
 */
export function cleanupOldStorage(): void {
  const keysToRemove = [
    'igl_chat_conversations',
    'igl_current_chat_id',
    'transactions'
  ];
  
  keysToRemove.forEach(key => {
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key);
      console.log(`[StorageManager] Removed old global key: ${key}`);
    }
  });
}

/**
 * Get storage statistics
 */
export function getStorageStats(): {
  totalKeys: number;
  walletSpecificKeys: number;
  tempKeys: number;
  globalKeys: number;
  uniqueWallets: number;
} {
  let totalKeys = 0;
  let walletSpecificKeys = 0;
  let tempKeys = 0;
  let globalKeys = 0;
  const wallets = new Set<string>();
  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key) continue;
    
    totalKeys++;
    
    if (key.startsWith('wallet_')) {
      walletSpecificKeys++;
      const match = key.match(/^wallet_([^_]+)_/);
      if (match && match[1]) {
        wallets.add(match[1]);
      }
    } else if (key.startsWith('temp_')) {
      tempKeys++;
    } else {
      globalKeys++;
    }
  }
  
  return {
    totalKeys,
    walletSpecificKeys,
    tempKeys,
    globalKeys,
    uniqueWallets: wallets.size
  };
}
