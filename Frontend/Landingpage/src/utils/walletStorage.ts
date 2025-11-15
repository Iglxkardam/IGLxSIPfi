/**
 * Wallet-Aware Storage Utility
 * Manages wallet-specific data in localStorage to prevent data mixing between wallets
 * 
 * All data is stored with wallet address as a key prefix to ensure complete isolation
 */

/**
 * Get wallet-specific storage key
 */
export function getWalletStorageKey(walletAddress: string | undefined, key: string): string {
  if (!walletAddress) {
    return `temp_${key}`; // Temporary key for non-connected state
  }
  return `wallet_${walletAddress.toLowerCase()}_${key}`;
}

/**
 * Get wallet-specific data from localStorage
 */
export function getWalletData<T>(
  walletAddress: string | undefined,
  key: string,
  defaultValue: T
): T {
  try {
    const storageKey = getWalletStorageKey(walletAddress, key);
    const stored = localStorage.getItem(storageKey);
    
    if (!stored) return defaultValue;
    
    const parsed = JSON.parse(stored);
    
    // Convert date strings back to Date objects if needed
    return deserializeDates(parsed);
  } catch (error) {
    console.error(`Error loading wallet data for key "${key}":`, error);
    return defaultValue;
  }
}

/**
 * Set wallet-specific data in localStorage
 */
export function setWalletData<T>(
  walletAddress: string | undefined,
  key: string,
  value: T
): void {
  try {
    const storageKey = getWalletStorageKey(walletAddress, key);
    localStorage.setItem(storageKey, JSON.stringify(value));
  } catch (error) {
    console.error(`Error saving wallet data for key "${key}":`, error);
  }
}

/**
 * Remove wallet-specific data from localStorage
 */
export function removeWalletData(walletAddress: string | undefined, key: string): void {
  try {
    const storageKey = getWalletStorageKey(walletAddress, key);
    localStorage.removeItem(storageKey);
  } catch (error) {
    console.error(`Error removing wallet data for key "${key}":`, error);
  }
}

/**
 * Clear all data for a specific wallet
 */
export function clearWalletData(walletAddress: string): void {
  try {
    const prefix = `wallet_${walletAddress.toLowerCase()}_`;
    const keysToRemove: string[] = [];
    
    // Find all keys for this wallet
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(prefix)) {
        keysToRemove.push(key);
      }
    }
    
    // Remove all wallet-specific keys
    keysToRemove.forEach(key => localStorage.removeItem(key));
    
    console.log(`Cleared ${keysToRemove.length} items for wallet ${walletAddress}`);
  } catch (error) {
    console.error('Error clearing wallet data:', error);
  }
}

/**
 * Clear temporary (non-wallet) data
 */
export function clearTempData(): void {
  try {
    const keysToRemove: string[] = [];
    
    // Find all temporary keys
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('temp_')) {
        keysToRemove.push(key);
      }
    }
    
    // Remove all temporary keys
    keysToRemove.forEach(key => localStorage.removeItem(key));
  } catch (error) {
    console.error('Error clearing temp data:', error);
  }
}

/**
 * Migrate old non-wallet-specific data to wallet-specific keys
 */
export function migrateToWalletStorage(
  walletAddress: string,
  oldKeys: string[]
): void {
  try {
    oldKeys.forEach(oldKey => {
      const oldData = localStorage.getItem(oldKey);
      if (oldData) {
        const newKey = getWalletStorageKey(walletAddress, oldKey);
        localStorage.setItem(newKey, oldData);
        localStorage.removeItem(oldKey);
      }
    });
  } catch (error) {
    console.error('Error migrating to wallet storage:', error);
  }
}

/**
 * Helper to deserialize dates in nested objects
 */
function deserializeDates<T>(obj: any): T {
  if (obj === null || obj === undefined) return obj;
  
  if (Array.isArray(obj)) {
    return obj.map(item => deserializeDates(item)) as T;
  }
  
  if (typeof obj === 'object') {
    const result: any = {};
    
    for (const key in obj) {
      const value = obj[key];
      
      // Check if it's a date string (ISO format)
      if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(value)) {
        result[key] = new Date(value);
      } else if (key === 'timestamp' || key === 'createdAt' || key === 'updatedAt') {
        // Common date field names
        result[key] = new Date(value);
      } else if (typeof value === 'object') {
        result[key] = deserializeDates(value);
      } else {
        result[key] = value;
      }
    }
    
    return result as T;
  }
  
  return obj;
}

/**
 * Get all wallet addresses that have stored data
 */
export function getAllWalletAddresses(): string[] {
  const addresses = new Set<string>();
  
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('wallet_')) {
        const match = key.match(/^wallet_([^_]+)_/);
        if (match && match[1]) {
          addresses.add(match[1]);
        }
      }
    }
  } catch (error) {
    console.error('Error getting wallet addresses:', error);
  }
  
  return Array.from(addresses);
}

/**
 * Hook for React components to use wallet-specific storage
 */
export function useWalletStorage<T>(
  walletAddress: string | undefined,
  key: string,
  defaultValue: T
): [T, (value: T) => void, () => void] {
  const getData = () => getWalletData(walletAddress, key, defaultValue);
  
  const setData = (value: T) => {
    setWalletData(walletAddress, key, value);
  };
  
  const removeData = () => {
    removeWalletData(walletAddress, key);
  };
  
  return [getData(), setData, removeData];
}
