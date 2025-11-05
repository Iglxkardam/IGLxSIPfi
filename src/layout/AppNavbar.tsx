import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaWallet, FaHistory, FaExchangeAlt } from 'react-icons/fa';

type Page = 'landing' | 'dca' | 'portfolio' | 'transactions' | 'swap';

interface AppNavbarProps {
  currentPage: 'dca' | 'portfolio' | 'transactions' | 'swap';
  setCurrentPage: (page: Page) => void;
  sidebarOpen?: boolean;
}

export const AppNavbar: React.FC<AppNavbarProps> = ({ currentPage, setCurrentPage, sidebarOpen = false }) => {
  const isActive = (page: Page) => {
    return currentPage === page;
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm"
      animate={{
        marginLeft: sidebarOpen ? '360px' : '0px'
      }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo - Responsive */}
          <button 
            onClick={() => setCurrentPage('landing')}
            className="flex items-center space-x-1.5 sm:space-x-2.5 text-lg sm:text-xl font-bold text-white hover:opacity-90 transition-opacity"
          >
            <img src="/igl-sipfi-logo.svg" alt="IGL" className="w-10 h-10 sm:w-12 sm:h-12 hover:scale-110 transition-transform" />
            <span className="tracking-tight"></span>
          </button>

          {/* Navigation - Responsive */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            <button
              onClick={() => setCurrentPage('dca')}
              className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-5 py-1.5 sm:py-2 rounded-lg transition-all duration-200 font-medium text-xs sm:text-base ${
                isActive('dca')
                  ? 'bg-white/5 text-white backdrop-blur-md border border-white/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <FaChartLine className="text-sm sm:text-base" />
              <span className="hidden sm:inline">DCA</span>
            </button>

            <button
              onClick={() => setCurrentPage('portfolio')}
              className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-5 py-1.5 sm:py-2 rounded-lg transition-all duration-200 font-medium text-xs sm:text-base ${
                isActive('portfolio')
                  ? 'bg-white/5 text-white backdrop-blur-md border border-white/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <FaWallet className="text-sm sm:text-base" />
              <span className="hidden sm:inline">Portfolio</span>
            </button>

            <button
              onClick={() => setCurrentPage('transactions')}
              className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-5 py-1.5 sm:py-2 rounded-lg transition-all duration-200 font-medium text-xs sm:text-base ${
                isActive('transactions')
                  ? 'bg-white/5 text-white backdrop-blur-md border border-white/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <FaHistory className="text-sm sm:text-base" />
              <span className="hidden sm:inline">Transactions</span>
            </button>

            <button
              onClick={() => setCurrentPage('swap')}
              className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-5 py-1.5 sm:py-2 rounded-lg transition-all duration-200 font-medium text-xs sm:text-base ${
                isActive('swap')
                  ? 'bg-white/5 text-white backdrop-blur-md border border-white/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <FaExchangeAlt className="text-sm sm:text-base" />
              <span className="hidden sm:inline">Swap</span>
            </button>
          </div>

          {/* Connect Wallet Button - Responsive */}
          <div className="flex items-center">
            <button className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-5 py-1.5 sm:py-2.5 bg-white/5 backdrop-blur-md border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/30 transition-all duration-200 text-xs sm:text-base">
              <FaWallet className="text-sm sm:text-base" />
              <span className="hidden sm:inline">Connect Wallet</span>
              <span className="sm:hidden">Connect</span>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};