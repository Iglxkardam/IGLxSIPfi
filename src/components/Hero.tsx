import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaPlay, FaRobot, FaDollarSign, FaChartLine, FaLock } from 'react-icons/fa';
import { Button } from './Button';
import { ComingSoonModal } from './ComingSoonModal';

interface HeroProps {
  onStartInvesting?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartInvesting }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleStartInvesting = () => {
    if (onStartInvesting) {
      onStartInvesting();
    } else {
      setIsModalOpen(true);
    }
  };
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero animate-gradient">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear" 
          }}
          className="absolute top-20 left-10 opacity-10"
        >
          <FaRobot className="text-6xl text-white" />
        </motion.div>
        <motion.div
          animate={{ 
            y: [-20, 20, -20],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute top-40 right-20 opacity-10"
        >
          <FaDollarSign className="text-5xl text-accent" />
        </motion.div>
        <motion.div
          animate={{ 
            y: [20, -20, 20],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute bottom-40 left-20 opacity-10"
        >
          <FaChartLine className="text-5xl text-accent" />
        </motion.div>
        <motion.div
          animate={{ 
            rotate: [0, 360],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "linear" 
          }}
          className="absolute bottom-20 right-10 opacity-10"
        >
          <FaLock className="text-5xl text-white" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Stop Timing the Market.<br />
            <span className="text-accent">Let AI Do It For You.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Invest in crypto systematically with AI-powered automation. No wallet needed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="primary" 
              size="lg" 
              className="shadow-2xl"
              onClick={handleStartInvesting}
            >
              <FaRocket className="mr-2" />
              Start Investing
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setIsModalOpen(true)}
            >
              <FaPlay className="mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Phone mockup */}
          <motion.div
            animate={{ 
              y: [-10, 10, -10],
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="mb-12"
          >
            <div className="relative mx-auto w-64 h-96 bg-white rounded-3xl shadow-2xl p-4 border-8 border-gray-800">
              <div className="bg-gradient-to-br from-primary to-secondary h-full rounded-2xl flex items-center justify-center text-white text-center p-6">
                <div>
                  <FaChartLine className="text-5xl mb-4 mx-auto" />
                  <div className="text-lg font-bold">IGL SIPfi</div>
                  <div className="text-xs opacity-80 mt-2">Smart Crypto Investing</div>
                  <div className="mt-6 space-y-2">
                    <div className="bg-white/20 rounded-lg p-2 text-xs">Monthly Auto-Invest</div>
                    <div className="bg-white/20 rounded-lg p-2 text-xs">AI-Powered DCA</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6 text-white/80 text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="text-accent">✓</span>
              <span>Built on Abstract</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent">✓</span>
              <span>Powered by Galadriel AI</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent">✓</span>
              <span>Secured by Chainlink</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Coming Soon Modal */}
      <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
