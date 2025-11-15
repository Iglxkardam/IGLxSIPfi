import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHistory, FaFilter, FaCheckCircle, FaClock, FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { StarfieldBackground } from '../../components';

interface Transaction {
  id: string;
  type: 'buy' | 'sell';
  asset: string;
  amount: string;
  value: string;
  date: string;
  status: 'completed' | 'pending' | 'processing';
}

export const TransactionPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'buy' | 'sell'>('all');

  const transactions: Transaction[] = [
    {
      id: '1',
      type: 'buy',
      asset: 'Bitcoin (BTC)',
      amount: '0.0125',
      value: '$487.50',
      date: '2025-11-01 14:32',
      status: 'completed'
    },
    {
      id: '2',
      type: 'buy',
      asset: 'Ethereum (ETH)',
      amount: '0.18',
      value: '$306.00',
      date: '2025-11-01 14:30',
      status: 'completed'
    },
    {
      id: '3',
      type: 'buy',
      asset: 'Solana (SOL)',
      amount: '4.5',
      value: '$89.50',
      date: '2025-11-01 14:28',
      status: 'processing'
    },
    {
      id: '4',
      type: 'buy',
      asset: 'Bitcoin (BTC)',
      amount: '0.0125',
      value: '$462.50',
      date: '2025-10-01 14:32',
      status: 'completed'
    },
    {
      id: '5',
      type: 'buy',
      asset: 'Ethereum (ETH)',
      amount: '0.18',
      value: '$289.00',
      date: '2025-10-01 14:30',
      status: 'completed'
    }
  ];

  const filteredTransactions = transactions.filter(tx => 
    filter === 'all' || tx.type === filter
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return (
          <span className="flex items-center space-x-1 text-green-600 bg-green-100 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium">
            <FaCheckCircle className="text-[10px] sm:text-xs" />
            <span className="hidden sm:inline">Completed</span>
            <span className="sm:hidden">Done</span>
          </span>
        );
      case 'processing':
        return (
          <span className="flex items-center space-x-1 text-blue-600 bg-blue-100 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium">
            <FaClock className="text-[10px] sm:text-xs" />
            <span className="hidden sm:inline">Processing</span>
            <span className="sm:hidden">Proc</span>
          </span>
        );
      case 'pending':
        return (
          <span className="flex items-center space-x-1 text-yellow-600 bg-yellow-100 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium">
            <FaClock className="text-[10px] sm:text-xs" />
            <span>Pending</span>
          </span>
        );
      default:
        return null;
    }
  };

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
      <StarfieldBackground optimized={true} />
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header - Responsive */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6 sm:mb-8"
        >
          <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center">
              <FaHistory className="text-white text-base sm:text-xl" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Transaction History
            </h1>
          </div>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg px-4">
            View all your DCA transactions and activities
          </p>
        </motion.div>

        {/* Filters - Responsive */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-transparent backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border-0 mb-4 sm:mb-6"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <FaFilter className="text-gray-400 text-sm sm:text-base" />
              <span className="font-semibold text-white text-sm sm:text-base">Filter:</span>
            </div>
            
            <div className="flex space-x-2 w-full sm:w-auto">
              <button
                onClick={() => setFilter('all')}
                className={`flex-1 sm:flex-none px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm transition-all duration-200 border ${
                  filter === 'all'
                    ? 'bg-white/[0.12] text-white border-white/[0.2]'
                    : 'bg-white/[0.03] text-gray-400 hover:bg-white/[0.08] border-white/[0.08]'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('buy')}
                className={`flex-1 sm:flex-none px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm transition-all duration-200 border ${
                  filter === 'buy'
                    ? 'bg-green-500/20 text-green-400 border-green-500/30'
                    : 'bg-white/[0.03] text-gray-400 hover:bg-white/[0.08] border-white/[0.08]'
                }`}
              >
                Buys
              </button>
              <button
                onClick={() => setFilter('sell')}
                className={`flex-1 sm:flex-none px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm transition-all duration-200 border ${
                  filter === 'sell'
                    ? 'bg-red-500/20 text-red-400 border-red-500/30'
                    : 'bg-white/[0.03] text-gray-400 hover:bg-white/[0.08] border-white/[0.08]'
                }`}
              >
                Sells
              </button>
            </div>
          </div>
        </motion.div>

        {/* Transactions List */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-transparent backdrop-blur-sm rounded-2xl border-0 overflow-hidden"
        >
          <div className="p-4 sm:p-6 border-b border-white/[0.08]">
            <h2 className="text-lg sm:text-xl font-bold text-white">Recent Transactions</h2>
          </div>
          
          <div className="p-4 sm:p-6">
            <div className="space-y-3 sm:space-y-4">
              {filteredTransactions.map((transaction) => (
                <motion.div
                  key={transaction.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center justify-between p-3 sm:p-4 bg-white/[0.03] rounded-lg sm:rounded-xl border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-200"
                >
                  <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                      transaction.type === 'buy'
                        ? 'bg-gradient-to-br from-green-400 to-green-500'
                        : 'bg-gradient-to-br from-red-400 to-red-500'
                    }`}>
                      {transaction.type === 'buy' ? (
                        <FaArrowDown className="text-white text-base sm:text-xl" />
                      ) : (
                        <FaArrowUp className="text-white text-base sm:text-xl" />
                      )}
                    </div>
                    
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-white text-sm sm:text-base truncate">{transaction.asset}</h3>
                      <p className="text-xs sm:text-sm text-gray-400">
                        {transaction.type === 'buy' ? 'Bought' : 'Sold'} {transaction.amount}
                      </p>
                      <p className="text-[10px] sm:text-xs text-gray-500">{transaction.date}</p>
                    </div>
                  </div>

                  <div className="text-right space-y-1 sm:space-y-2 flex-shrink-0 ml-2">
                    <p className="font-semibold text-white text-sm sm:text-base">{transaction.value}</p>
                    {getStatusBadge(transaction.status)}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="p-4 sm:p-6 border-t border-white/[0.08] flex items-center justify-center">
            <button className="px-4 sm:px-6 py-2 sm:py-3 bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.12] hover:border-white/[0.2] text-white text-sm sm:text-base rounded-xl transition-all duration-200 font-medium">
              Load More
            </button>
          </div>
        </motion.div>

        {/* Transaction Summary - Responsive */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6"
        >
          <div className="bg-white/[0.03] backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/[0.08] hover:border-white/[0.12] transition-all">
            <h3 className="text-xs sm:text-sm font-medium text-gray-400 mb-1 sm:mb-2">Total Invested</h3>
            <p className="text-xl sm:text-2xl font-bold text-white">$11,205.00</p>
          </div>

          <div className="bg-white/[0.03] backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/[0.08] hover:border-white/[0.12] transition-all">
            <h3 className="text-xs sm:text-sm font-medium text-gray-400 mb-1 sm:mb-2">Total Transactions</h3>
            <p className="text-xl sm:text-2xl font-bold text-white">24</p>
          </div>

          <div className="bg-white/[0.03] backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/[0.08] hover:border-white/[0.12] transition-all">
            <h3 className="text-xs sm:text-sm font-medium text-gray-400 mb-1 sm:mb-2">Avg. Transaction</h3>
            <p className="text-xl sm:text-2xl font-bold text-white">$467.71</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
