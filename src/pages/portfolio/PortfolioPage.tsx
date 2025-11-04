import React from 'react';
import { motion } from 'framer-motion';
import { FaWallet, FaChartLine, FaArrowUp, FaCog } from 'react-icons/fa';
import { StarfieldBackground } from '../../components';

export const PortfolioPage: React.FC = () => {
  return (
    <div 
      className="min-h-screen pt-20 pb-8 px-4 relative"
      style={{
        background: '#000',
        backgroundImage: `
          radial-gradient(circle at top right, rgba(121, 68, 154, 0.13), transparent),
          radial-gradient(circle at 20% 80%, rgba(41, 196, 255, 0.13), transparent)
        `
      }}
    >
      <StarfieldBackground />
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header - Responsive */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6 sm:mb-8"
        >
          <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
              <FaWallet className="text-white text-base sm:text-xl" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Portfolio Overview
            </h1>
          </div>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg px-4">
            Track your DCA investments and performance
          </p>
        </motion.div>

        {/* Portfolio Stats */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          <div className="bg-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 shadow-lg">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-base sm:text-lg">$</span>
              </div>
              <FaArrowUp className="text-green-400 text-xl sm:text-2xl" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">Total Value</h3>
            <p className="text-2xl sm:text-3xl font-bold text-white">$12,847.50</p>
            <p className="text-xs sm:text-sm text-green-400 font-medium">+15.3% (+$1,642.50)</p>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 shadow-lg">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                <FaChartLine className="text-white text-base sm:text-lg" />
              </div>
              <span className="text-blue-300 text-xs sm:text-sm font-medium bg-blue-500/20 px-2 py-1 rounded-lg">Monthly</span>
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">DCA Amount</h3>
            <p className="text-2xl sm:text-3xl font-bold text-white">$500</p>
            <p className="text-xs sm:text-sm text-gray-400">Next investment in 12 days</p>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 shadow-lg">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-base sm:text-lg">⏱️</span>
              </div>
              <FaCog className="text-purple-400 text-lg sm:text-xl" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">Active Plans</h3>
            <p className="text-2xl sm:text-3xl font-bold text-white">3</p>
            <p className="text-xs sm:text-sm text-gray-400">BTC, ETH, SOL strategies</p>
          </div>
        </motion.div>

        {/* Holdings */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg overflow-hidden mb-8"
        >
          <div className="p-4 sm:p-6 border-b border-white/10">
            <h2 className="text-lg sm:text-xl font-bold text-white">Your Holdings</h2>
          </div>
          
          <div className="p-4 sm:p-6">
            <div className="space-y-3 sm:space-y-4">
              {/* Bitcoin */}
              <div className="flex items-center justify-between p-3 sm:p-4 bg-white/5 rounded-lg sm:rounded-xl border border-orange-500/10">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-base sm:text-lg">₿</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm sm:text-base">Bitcoin</h3>
                    <p className="text-xs sm:text-sm text-gray-400">0.1847 BTC</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-white text-sm sm:text-base">$7,230.50</p>
                  <p className="text-xs sm:text-sm text-green-400">+12.5%</p>
                </div>
              </div>

              {/* Ethereum */}
              <div className="flex items-center justify-between p-3 sm:p-4 bg-white/5 rounded-lg sm:rounded-xl border border-blue-500/10">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-base sm:text-lg">Ξ</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm sm:text-base">Ethereum</h3>
                    <p className="text-xs sm:text-sm text-gray-400">2.54 ETH</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-white text-sm sm:text-base">$4,320.25</p>
                  <p className="text-xs sm:text-sm text-green-400">+18.2%</p>
                </div>
              </div>

              {/* Solana */}
              <div className="flex items-center justify-between p-3 sm:p-4 bg-white/5 rounded-lg sm:rounded-xl border border-purple-500/10">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-base sm:text-lg">◎</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm sm:text-base">Solana</h3>
                    <p className="text-xs sm:text-sm text-gray-400">65.2 SOL</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-white text-sm sm:text-base">$1,296.75</p>
                  <p className="text-xs sm:text-sm text-green-400">+22.1%</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Performance Chart Placeholder */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg overflow-hidden"
        >
          <div className="p-4 sm:p-6 border-b border-white/10">
            <h2 className="text-lg sm:text-xl font-bold text-white">Performance Overview</h2>
          </div>
          
          <div className="p-4 sm:p-6">
            <div className="h-48 sm:h-64 bg-white/5 rounded-lg sm:rounded-xl flex items-center justify-center border border-white/10">
              <div className="text-center">
                <FaChartLine className="text-3xl sm:text-4xl text-blue-400 mx-auto mb-3 sm:mb-4" />
                <p className="text-gray-300 font-medium text-sm sm:text-base">Performance Chart</p>
                <p className="text-xs sm:text-sm text-gray-400">Coming Soon</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};