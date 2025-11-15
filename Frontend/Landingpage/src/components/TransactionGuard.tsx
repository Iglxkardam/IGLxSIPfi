import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { isValidAddress } from '../utils/security';

export interface TransactionData {
  to: string;
  value: string;
  data?: string;
  from?: string;
}

interface TransactionGuardProps {
  transaction: TransactionData;
  onConfirm: () => void;
  onCancel: () => void;
  isOpen: boolean;
}

/**
 * TransactionGuard - Shows security warnings before signing transactions
 * Prevents users from blindly signing malicious transactions
 */
export const TransactionGuard: React.FC<TransactionGuardProps> = ({
  transaction,
  onConfirm,
  onCancel,
  isOpen,
}) => {
  const [understood, setUnderstood] = useState(false);
  const [countdown, setCountdown] = useState(5);

  React.useEffect(() => {
    if (isOpen && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, countdown]);

  // Basic safety check
  const safety = {
    safe: isValidAddress(transaction.to),
    critical: false,
    warnings: [] as string[]
  };

  if (!isValidAddress(transaction.to)) {
    safety.warnings.push('Invalid recipient address format');
    safety.critical = true;
  }

  const value = parseFloat(transaction.value);
  if (value > 10) {
    safety.warnings.push('Large transaction amount detected');
  }

  if (transaction.data && transaction.data.length > 1000) {
    safety.warnings.push('Complex contract interaction detected');
  }

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[99999] flex items-center justify-center p-4"
        onClick={(e) => e.target === e.currentTarget && onCancel()}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-gradient-to-br from-gray-900 to-black border-2 border-red-500 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        >
          {/* Security Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="text-6xl">🛡️</div>
            <div>
              <h2 className="text-3xl font-bold text-white">Transaction Security Check</h2>
              <p className="text-gray-400">Review carefully before proceeding</p>
            </div>
          </div>

          {/* Safety Status */}
          <div className={`p-4 rounded-lg mb-6 ${
            safety.safe 
              ? 'bg-yellow-900/30 border border-yellow-500/50' 
              : 'bg-red-900/30 border border-red-500/50'
          }`}>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{safety.critical ? '🚨' : '⚠️'}</span>
              <h3 className="text-xl font-bold text-white">
                {safety.critical ? 'CRITICAL RISK DETECTED' : 'Review Required'}
              </h3>
            </div>
            {safety.warnings.length > 0 && (
              <ul className="space-y-2 mt-4">
                {safety.warnings.map((warning: string, i: number) => (
                  <li key={i} className="text-yellow-300 flex items-start gap-2">
                    <span>⚠️</span>
                    <span>{warning}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Transaction Details */}
          <div className="bg-black/50 border border-gray-700 rounded-lg p-6 mb-6 space-y-4">
            <h3 className="text-lg font-bold text-white mb-4">Transaction Details:</h3>
            
            <div>
              <label className="text-gray-400 text-sm">To Address:</label>
              <div className="text-white font-mono bg-gray-800 p-3 rounded mt-1 break-all">
                {transaction.to}
              </div>
            </div>

            <div>
              <label className="text-gray-400 text-sm">Value:</label>
              <div className="text-white font-mono bg-gray-800 p-3 rounded mt-1">
                {transaction.value} ETH
              </div>
            </div>

            {transaction.data && (
              <div>
                <label className="text-gray-400 text-sm">Contract Data:</label>
                <div className="text-white font-mono bg-gray-800 p-3 rounded mt-1 text-xs break-all max-h-32 overflow-y-auto">
                  {transaction.data}
                </div>
              </div>
            )}
          </div>

          {/* Security Checklist */}
          <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold text-white mb-4">Security Checklist:</h3>
            <div className="space-y-3">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={understood}
                  onChange={(e) => setUnderstood(e.target.checked)}
                  className="mt-1"
                />
                <span className="text-gray-300 text-sm">
                  I have verified the recipient address is correct
                </span>
              </label>
              <div className="text-gray-400 text-sm pl-7">
                ✓ Always double-check addresses character by character
              </div>
              <div className="text-gray-400 text-sm pl-7">
                ✓ This transaction cannot be reversed once confirmed
              </div>
              <div className="text-gray-400 text-sm pl-7">
                ✓ Only sign transactions you fully understand
              </div>
            </div>
          </div>

          {/* Warning Banner */}
          {safety.critical && (
            <div className="bg-red-900/50 border-2 border-red-500 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🚨</span>
                <div>
                  <p className="text-red-300 font-bold">CRITICAL WARNING</p>
                  <p className="text-red-200 text-sm">
                    This transaction has been flagged as potentially dangerous. 
                    Proceeding may result in loss of funds.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={onCancel}
              className="flex-1 px-6 py-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors"
            >
              ❌ Cancel (Recommended)
            </button>
            <button
              onClick={onConfirm}
              disabled={!understood || countdown > 0}
              className={`flex-1 px-6 py-4 font-semibold rounded-lg transition-colors ${
                !understood || countdown > 0
                  ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                  : safety.critical
                  ? 'bg-red-600 hover:bg-red-700 text-white'
                  : 'bg-yellow-600 hover:bg-yellow-700 text-white'
              }`}
            >
              {countdown > 0 
                ? `⏳ Wait ${countdown}s` 
                : `${safety.critical ? '⚠️' : '✓'} Proceed Anyway`
              }
            </button>
          </div>

          {/* Educational Footer */}
          <div className="mt-6 pt-6 border-t border-gray-700">
            <p className="text-gray-400 text-sm text-center">
              💡 <strong>Security Tip:</strong> Never sign transactions from unknown sources. 
              Always verify addresses and amounts before confirming.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TransactionGuard;
