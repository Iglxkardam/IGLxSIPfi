import React, { useMemo, memo } from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = memo(({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}) => {
  const initialPosition = useMemo(() => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 60 };
      case 'down':
        return { opacity: 0, y: -60 };
      case 'left':
        return { opacity: 0, x: -60 };
      case 'right':
        return { opacity: 0, x: 60 };
      case 'fade':
        return { opacity: 0 };
      default:
        return { opacity: 0, y: 60 };
    }
  }, [direction]);

  const finalPosition = useMemo(() => {
    switch (direction) {
      case 'up':
      case 'down':
        return { opacity: 1, y: 0 };
      case 'left':
      case 'right':
        return { opacity: 1, x: 0 };
      case 'fade':
        return { opacity: 1 };
      default:
        return { opacity: 1, y: 0 };
    }
  }, [direction]);

  const transition = useMemo(() => ({
    duration: 0.7,
    delay: delay,
    ease: [0.25, 0.46, 0.45, 0.94],
  }), [delay]);

  const viewport = useMemo(() => ({ once: true, amount: 0.2 }), []);

  return (
    <motion.div
      className={className}
      initial={initialPosition}
      whileInView={finalPosition}
      viewport={viewport}
      transition={transition}
    >
      {children}
    </motion.div>
  );
});

AnimatedSection.displayName = 'AnimatedSection';
