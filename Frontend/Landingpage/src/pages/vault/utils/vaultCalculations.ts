import { LockedAsset } from '../types/vault.types';

export const calculateTimeRemaining = (unlockDate: number): { 
  days: number; 
  hours: number; 
  minutes: number; 
  seconds: number;
  isExpired: boolean;
} => {
  const now = Date.now();
  const diff = unlockDate - now;
  
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
  }
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  return { days, hours, minutes, seconds, isExpired: false };
};

export const calculateProgress = (lockDate: number, unlockDate: number): number => {
  const now = Date.now();
  const total = unlockDate - lockDate;
  const elapsed = now - lockDate;
  
  if (elapsed >= total) return 100;
  if (elapsed <= 0) return 0;
  
  return (elapsed / total) * 100;
};

export const calculateCurrentYield = (asset: LockedAsset): number => {
  const now = Date.now();
  const elapsed = now - asset.lockDate;
  const total = asset.unlockDate - asset.lockDate;
  
  if (elapsed >= total) return asset.totalYield;
  if (elapsed <= 0) return 0;
  
  return (elapsed / total) * asset.totalYield;
};

export const formatTimeRemaining = (unlockDate: number): string => {
  const { days, hours, minutes, isExpired } = calculateTimeRemaining(unlockDate);
  
  if (isExpired) return 'Unlocked';
  if (days > 0) return `${days}d ${hours}h`;
  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
};

export const getStatusColor = (status: LockedAsset['status']): string => {
  switch (status) {
    case 'locked':
      return 'blue';
    case 'unlocking':
      return 'yellow';
    case 'unlocked':
      return 'green';
    default:
      return 'gray';
  }
};

export const getAPYColor = (apy: number): string => {
  if (apy >= 20) return 'text-green-400';
  if (apy >= 10) return 'text-blue-400';
  if (apy >= 5) return 'text-purple-400';
  return 'text-gray-400';
};
