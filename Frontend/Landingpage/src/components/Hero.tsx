import React, { useState, useCallback, memo } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaChartLine } from 'react-icons/fa';
import { Button } from './Button';
import { ComingSoonModal } from './ComingSoonModal';

interface HeroProps {
  onStartInvesting?: () => void;
}

export const Hero: React.FC<HeroProps> = memo(({ onStartInvesting }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleStartInvesting = useCallback(() => {
    if (onStartInvesting) {
      onStartInvesting();
    } else {
      setIsModalOpen(true);
    }
  }, [onStartInvesting]);
  
  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);
  
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-black to-purple-900/10" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      {/* Animated gradient orbs */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 backdrop-blur-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            AI-Powered Decentralized Exchange
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
            Intelligent DCA Strategies<br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Powered by On-Chain AI
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed">
            The first decentralized exchange combining AI-driven market analysis with automated dollar-cost averaging. 
            Built on Abstract, secured by blockchain.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              variant="primary" 
              size="lg"
              onClick={handleStartInvesting}
              className="bg-white text-black hover:bg-white/90 font-semibold group shadow-2xl"
            >
              Get Early Access
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="border-white/20 text-white hover:bg-white/5 backdrop-blur-sm"
            >
              <FaChartLine className="mr-2" />
              View Demo
            </Button>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto"
          >
            {[
              { value: '$2.5M+', label: 'Total Volume' },
              { value: '500+', label: 'Active Users' },
              { value: '12%', label: 'Avg. Returns' },
              { value: '24/7', label: 'AI Monitoring' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-8 text-white/40 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <span className="text-xs font-bold">AB</span>
              </div>
              <span>Abstract Network</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <span className="text-xs font-bold">AI</span>
              </div>
              <span>Galadriel AI</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <span className="text-xs font-bold">CL</span>
              </div>
              <span>Chainlink Oracles</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Coming Soon Modal */}
      <ComingSoonModal isOpen={isModalOpen} onClose={handleModalClose} />
    </div>
  );
});

Hero.displayName = 'Hero';
