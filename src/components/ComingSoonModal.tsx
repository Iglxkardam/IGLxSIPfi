import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRocket, FaTimes } from 'react-icons/fa';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ComingSoonModal: React.FC<ComingSoonModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative overflow-hidden"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 animate-gradient"></div>
              
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
              >
                <FaTimes className="text-2xl" />
              </button>

              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Animated rocket icon */}
                <motion.div
                  animate={{ 
                    y: [-10, 10, -10],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                  className="mb-6 flex justify-center"
                >
                  <div className="bg-gradient-primary p-6 rounded-full">
                    <FaRocket className="text-5xl text-white" />
                  </div>
                </motion.div>

                {/* Title with gradient text */}
                <h2 className="text-4xl font-bold mb-4">
                  <span className="text-gradient">Coming Soon!</span>
                </h2>

                {/* Description */}
                <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                  We&apos;re working hard to bring you the best crypto SIP experience.
                </p>

                {/* Launch date */}
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-4 mb-6">
                  <p className="text-sm text-gray-500 mb-1">Expected Launch</p>
                  <p className="text-2xl font-bold text-primary">November 2025</p>
                </div>

                {/* Features list */}
                <div className="text-left space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-600">Testnet launching soon</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-600">Early access for waitlist members</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-600">3 months fee-free for early users</p>
                  </div>
                </div>

                {/* Social links */}
                <p className="text-sm text-gray-500 mb-4">
                  Follow our journey on{' '}
                  <a 
                    href="https://www.linkedin.com/in/iglxkardam/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:underline"
                  >
                    LinkedIn
                  </a>
                  {' '}or{' '}
                  <a 
                    href="https://x.com/Jhod869800" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:underline"
                  >
                    Twitter
                  </a>
                </p>

                {/* Close button */}
                <button
                  onClick={onClose}
                  className="w-full bg-gradient-primary text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-105"
                >
                  Got it!
                </button>
              </div>

              {/* Decorative elements */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
                className="absolute -top-20 -right-20 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"
              ></motion.div>
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl"
              ></motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
