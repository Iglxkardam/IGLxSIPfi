import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaCheckCircle, FaExclamationCircle, FaLayerGroup, FaBolt, FaStar } from 'react-icons/fa';
import { PlanType } from '../services/contractService';
import { getPlanByType } from '../config/subscriptionConfig';

interface SubscriptionStatusProps {
  planType: PlanType;
  expiryTimestamp: bigint;
  hasAccess: boolean;
  isExpired: boolean;
  timeRemaining: string;
}

export const SubscriptionStatus: React.FC<SubscriptionStatusProps> = ({
  planType,
  expiryTimestamp,
  hasAccess,
  isExpired,
  timeRemaining,
}) => {
  const plan = getPlanByType(planType);

  if (planType === PlanType.FREE) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-gray-900 to-black border border-white/20 rounded-xl p-6 mb-8"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/20 to-white/10 border border-white/30 flex items-center justify-center flex-shrink-0 shadow-lg">
            <FaLayerGroup className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-1">Free Plan</h3>
            <p className="text-gray-400 text-sm">
              Upgrade to unlock full DCA features
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-gradient-to-br from-gray-900 to-black border ${
        isExpired ? 'border-red-500/50' : 'border-green-500/50'
      } rounded-xl p-6 mb-8`}
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br from-white/20 to-white/10 border border-white/30 flex items-center justify-center flex-shrink-0 shadow-lg ${
            isExpired ? 'opacity-50' : ''
          }`}
        >
          {plan?.icon === 'zap' && <FaBolt className="w-6 h-6 text-white" />}
          {plan?.icon === 'star' && <FaStar className="w-6 h-6 text-white" />}
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-bold text-white">{plan?.name} Plan</h3>
            {hasAccess && !isExpired && (
              <div className="flex items-center gap-1 text-green-400 text-sm">
                <FaCheckCircle className="w-4 h-4" />
                <span className="font-semibold">Active</span>
              </div>
            )}
            {isExpired && (
              <div className="flex items-center gap-1 text-red-400 text-sm">
                <FaExclamationCircle className="w-4 h-4" />
                <span className="font-semibold">Expired</span>
              </div>
            )}
          </div>

          {/* Status Info */}
          <div className="space-y-2">
            {!isExpired && expiryTimestamp > 0n && (
              <div className="flex items-center gap-2 text-gray-300">
                <FaClock className="w-4 h-4 text-blue-400" />
                <span className="text-sm">{timeRemaining}</span>
              </div>
            )}

            {isExpired && (
              <p className="text-sm text-red-400">
                Your subscription has expired. Renew to continue accessing DCA
                features.
              </p>
            )}

            {!isExpired && hasAccess && (
              <p className="text-sm text-gray-400">
                Full access to all DCA features and automation
              </p>
            )}
          </div>

          {/* Expiry Date */}
          {expiryTimestamp > 0n && (
            <div className="mt-3 pt-3 border-t border-white/10">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">
                  {isExpired ? 'Expired on' : 'Expires on'}:
                </span>
                <span className="text-white font-medium">
                  {new Date(Number(expiryTimestamp) * 1000).toLocaleDateString(
                    'en-US',
                    {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    }
                  )}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
