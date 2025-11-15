/**
 * TypeScript types and interfaces for Abstract Global Wallet integration
 */

export interface User {
  id: string;
  email?: string;
  walletAddress: string;
  balance: number;
  createdAt: Date;
  lastLogin: Date;
}

export interface Wallet {
  address: string;
  balance: string; // in ETH/native token
  chainId: number;
  isConnected: boolean;
}

export interface DepositEvent {
  id: string;
  txHash: string;
  fromAddress: string;
  toAddress: string;
  amount: string;
  tokenContract: string; // 0x0 for native token
  tokenSymbol?: string;
  chainId: number;
  confirmations: number;
  requiredConfirmations: number;
  status: 'pending' | 'confirmed' | 'failed';
  timestamp: Date;
  blockNumber?: number;
}

export interface Transaction {
  id: string;
  type: 'deposit' | 'withdrawal' | 'swap';
  amount: string;
  tokenSymbol: string;
  status: 'pending' | 'completed' | 'failed';
  txHash: string;
  timestamp: Date;
}

export interface AGWLoginOptions {
  email?: string;
  socialProvider?: 'google' | 'apple' | 'twitter';
  chainId: number;
}

export interface AGWWalletState {
  address: string | null;
  balance: string;
  connected: boolean;
  loading: boolean;
  error: string | null;
}

export interface WebhookPayload {
  event: 'deposit' | 'withdrawal';
  txHash: string;
  toAddress: string;
  fromAddress: string;
  amount: string;
  tokenContract: string;
  chainId: number;
  confirmations: number;
  blockNumber: number;
  timestamp: number;
  signature: string; // HMAC signature for verification
}

export interface BalanceResponse {
  address: string;
  balance: string;
  pendingBalance: string;
  pendingDeposits: number;
  lastUpdated: Date;
}

export interface SimulateDepositRequest {
  address: string;
  amount: string;
  tokenContract?: string;
  txHash?: string;
}
