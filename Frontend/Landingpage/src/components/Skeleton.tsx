import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  animation?: 'pulse' | 'wave' | 'none';
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  variant = 'rectangular',
  width = '100%',
  height = '20px',
  animation = 'pulse',
}) => {
  const variantClasses = {
    text: 'rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
  };

  const animationClasses = {
    pulse: 'animate-pulse',
    wave: 'animate-shimmer',
    none: '',
  };

  return (
    <div
      className={`bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 ${variantClasses[variant]} ${animationClasses[animation]} ${className}`}
      style={{ width, height }}
    />
  );
};

export const CardSkeleton: React.FC = () => (
  <div className="bg-black/50 backdrop-blur-lg border border-purple-500/30 rounded-2xl p-6 space-y-4">
    <Skeleton height="32px" width="60%" />
    <Skeleton height="16px" width="100%" />
    <Skeleton height="16px" width="90%" />
    <Skeleton height="16px" width="80%" />
    <div className="flex gap-4 mt-6">
      <Skeleton height="44px" width="120px" variant="rectangular" />
      <Skeleton height="44px" width="120px" variant="rectangular" />
    </div>
  </div>
);

export const TableSkeleton: React.FC<{ rows?: number }> = ({ rows = 5 }) => (
  <div className="space-y-3">
    {Array.from({ length: rows }).map((_, i) => (
      <div key={i} className="flex items-center gap-4 p-4 bg-black/30 rounded-lg">
        <Skeleton variant="circular" width="40px" height="40px" />
        <div className="flex-1 space-y-2">
          <Skeleton height="16px" width="30%" />
          <Skeleton height="12px" width="50%" />
        </div>
        <Skeleton height="24px" width="80px" />
      </div>
    ))}
  </div>
);

export const ChartSkeleton: React.FC = () => (
  <div className="bg-black/50 backdrop-blur-lg border border-purple-500/30 rounded-2xl p-6">
    <Skeleton height="24px" width="40%" className="mb-6" />
    <div className="flex items-end gap-2 h-64">
      {Array.from({ length: 12 }).map((_, i) => (
        <Skeleton
          key={i}
          width="100%"
          height={`${Math.random() * 80 + 20}%`}
          variant="rectangular"
        />
      ))}
    </div>
  </div>
);

export const WalletSkeleton: React.FC = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="space-y-6"
  >
    <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-6 space-y-4">
      <Skeleton height="20px" width="40%" />
      <Skeleton height="48px" width="100%" />
      <div className="flex gap-4">
        <Skeleton height="36px" width="100px" />
        <Skeleton height="36px" width="100px" />
      </div>
    </div>
    <CardSkeleton />
    <CardSkeleton />
  </motion.div>
);

export const PageSkeleton: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black p-8 space-y-8">
    <Skeleton height="48px" width="300px" className="mb-8" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
    <ChartSkeleton />
    <TableSkeleton />
  </div>
);
