import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = true,
  gradient = false 
}) => {
  const baseStyles = 'rounded-2xl p-6 transition-all duration-300';
  const hoverStyles = hover ? 'hover:shadow-2xl hover:-translate-y-2' : '';
  const backgroundStyles = gradient 
    ? 'bg-gradient-to-br from-primary to-secondary text-white' 
    : 'bg-white shadow-lg';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className={`${baseStyles} ${hoverStyles} ${backgroundStyles} ${className}`}
    >
      {children}
    </motion.div>
  );
};
