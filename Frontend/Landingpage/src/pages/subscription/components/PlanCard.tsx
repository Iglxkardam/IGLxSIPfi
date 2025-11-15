import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaCrown, FaBolt, FaStar, FaLayerGroup } from 'react-icons/fa';
import { SubscriptionPlan, PLAN_COLORS } from '../config/subscriptionConfig';
import { PlanType } from '../services/contractService';

interface PlanCardProps {
  plan: SubscriptionPlan;
  currentPlan?: PlanType;
  onSelect: (plan: SubscriptionPlan) => void;
  isLoading?: boolean;
}

export const PlanCard: React.FC<PlanCardProps> = ({
  plan,
  currentPlan,
  onSelect,
  isLoading = false,
}) => {
  const isCurrentPlan = currentPlan === plan.planType;
  const colors = PLAN_COLORS[plan.planType];
  
  // Determine if this is a downgrade
  const planValue = { [PlanType.FREE]: 0, [PlanType.MONTHLY]: 1, [PlanType.YEARLY]: 2 };
  const currentValue = currentPlan !== undefined ? planValue[currentPlan] : 0;
  const targetValue = planValue[plan.planType];
  const isDowngrade = targetValue < currentValue;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      className={`relative w-full max-w-md mx-auto rounded-xl p-1 border ${
        plan.popular ? 'border-purple-500 shadow-lg shadow-purple-500/20' : 'border-white/20'
      } bg-white/5`}
    >
      {/* Popular Badge */}
      {plan.badge && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-1 rounded-full text-xs font-bold text-white shadow-lg">
            {plan.badge}
          </div>
        </div>
      )}

      {/* Current Plan Badge */}
      {isCurrentPlan && (
        <div className="absolute -top-3 right-4 z-20">
          <div className="bg-green-500 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg flex items-center gap-1">
            <FaCrown className="w-3 h-3" />
            Current
          </div>
        </div>
      )}

      <div className="relative rounded-xl border border-white/10 bg-black/60 p-6">
        {/* Top glass gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-48 rounded-[inherit]"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 40%, rgba(0,0,0,0) 100%)',
          }}
        />

        {/* Header */}
        <div className="mb-6 relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/20 to-white/10 border border-white/30 flex items-center justify-center flex-shrink-0 shadow-lg">
              {plan.icon === 'layers' && <FaLayerGroup className="w-6 h-6 text-white" />}
              {plan.icon === 'zap' && <FaBolt className="w-6 h-6 text-white" />}
              {plan.icon === 'star' && <FaStar className="w-6 h-6 text-white" />}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{plan.name}</h3>
              <p className="text-sm text-gray-400">{plan.description}</p>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="mb-6 relative z-10">
          <div className="flex items-end gap-2">
            <span className="text-4xl font-extrabold tracking-tight text-white">
              {plan.price}
            </span>
            {plan.period && (
              <span className="pb-2 text-sm text-white/80">{plan.period}</span>
            )}
          </div>
          {plan.originalPrice && (
            <div className="mt-1 flex items-center gap-2">
              <span className="text-lg line-through text-gray-400">
                {plan.originalPrice}
              </span>
              <span className="text-sm text-green-400 font-semibold">
                Save {Math.round((1 - parseFloat(plan.price.slice(1)) / parseFloat(plan.originalPrice.slice(1))) * 100)}%
              </span>
            </div>
          )}
        </div>

        {/* CTA Button */}
        <button
          className={`w-full font-semibold py-3 px-4 rounded-lg transition-all duration-200 relative z-10 ${
            isCurrentPlan
              ? 'bg-green-600 text-white cursor-default'
              : isDowngrade
              ? 'bg-white/5 text-white/40 border border-white/10 cursor-not-allowed'
              : plan.planType === PlanType.FREE
              ? 'bg-white/10 text-white border border-white/30 hover:bg-white/20 hover:border-white/50'
              : `bg-gradient-to-r ${colors.gradient} text-white hover:opacity-90 hover:shadow-lg`
          } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={() => !isCurrentPlan && !isDowngrade && !isLoading && onSelect(plan)}
          disabled={isCurrentPlan || isDowngrade || isLoading}
        >
          {isLoading
            ? 'Processing...'
            : isCurrentPlan
            ? 'Current Plan'
            : isDowngrade
            ? 'Cannot Downgrade'
            : plan.planType === PlanType.FREE
            ? 'Free Plan'
            : 'Upgrade Now'}
        </button>

        {/* Downgrade Notice */}
        {isDowngrade && !isCurrentPlan && (
          <p className="mt-2 text-xs text-center text-yellow-400/80 relative z-10">
            Wait for current plan to expire
          </p>
        )}

        {/* Features */}
        <div className="mt-6 space-y-3 relative z-10">
          <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
            Features
          </p>
          <ul className="space-y-2">
            {plan.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm text-gray-300"
              >
                <FaCheckCircle className="h-4 w-4 mt-0.5 text-green-400 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};
