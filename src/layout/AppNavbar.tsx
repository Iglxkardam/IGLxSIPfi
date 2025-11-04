import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaWallet, FaHistory } from 'react-icons/fa';

type Page = 'landing' | 'dca' | 'portfolio' | 'transactions';

interface AppNavbarProps {
  currentPage: 'dca' | 'portfolio' | 'transactions';
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
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => setCurrentPage('landing')}
            className="flex items-center space-x-2.5 text-xl font-bold text-white hover:opacity-90 transition-opacity"
          >
            <img src="/igl-sipfi-logo.svg" alt="IGL" className="w-12 h-12 hover:scale-110 transition-transform" />
            <span className="tracking-tight"></span>
          </button>

          {/* Navigation */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage('dca')}
              className={`flex items-center space-x-2 px-5 py-2 rounded-lg transition-all duration-200 font-medium ${
                isActive('dca')
                  ? 'bg-white/5 text-white backdrop-blur-md border border-white/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <FaChartLine className="text-base" />
              <span>DCA</span>
            </button>

            <button
              onClick={() => setCurrentPage('portfolio')}
              className={`flex items-center space-x-2 px-5 py-2 rounded-lg transition-all duration-200 font-medium ${
                isActive('portfolio')
                  ? 'bg-white/5 text-white backdrop-blur-md border border-white/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <FaWallet className="text-base" />
              <span>Portfolio</span>
            </button>

            <button
              onClick={() => setCurrentPage('transactions')}
              className={`flex items-center space-x-2 px-5 py-2 rounded-lg transition-all duration-200 font-medium ${
                isActive('transactions')
                  ? 'bg-white/5 text-white backdrop-blur-md border border-white/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <FaHistory className="text-base" />
              <span>Transactions</span>
            </button>
          </div>

          {/* Connect Wallet Button */}
          <div className="flex items-center">
            <button className="flex items-center space-x-2 px-5 py-2.5 bg-white/5 backdrop-blur-md border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/30 transition-all duration-200">
              <FaWallet className="text-base" />
              <span>Connect Wallet</span>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};