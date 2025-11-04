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
          <span className="flex items-center space-x-1 text-green-600 bg-green-100 px-3 py-1 rounded-full text-xs font-medium">
            <FaCheckCircle />
            <span>Completed</span>
          </span>
        );
      case 'processing':
        return (
          <span className="flex items-center space-x-1 text-blue-600 bg-blue-100 px-3 py-1 rounded-full text-xs font-medium">
            <FaClock />
            <span>Processing</span>
          </span>
        );
      case 'pending':
        return (
          <span className="flex items-center space-x-1 text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full text-xs font-medium">
            <FaClock />
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
      <StarfieldBackground />
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center">
              <FaHistory className="text-white text-xl" />
            </div>
            <h1 className="text-3xl font-bold text-white">
              Transaction History
            </h1>
          </div>
          <p className="text-gray-400 text-lg">
            View all your DCA transactions and activities
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg mb-6"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FaFilter className="text-gray-400" />
              <span className="font-semibold text-white">Filter:</span>
            </div>
            
            <div className="flex space-x-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  filter === 'all'
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('buy')}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  filter === 'buy'
                    ? 'bg-green-500 text-white shadow-lg'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                Buys
              </button>
              <button
                onClick={() => setFilter('sell')}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  filter === 'sell'
                    ? 'bg-red-500 text-white shadow-lg'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
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
          className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg overflow-hidden"
        >
          <div className="p-6 border-b border-white/10">
            <h2 className="text-xl font-bold text-white">Recent Transactions</h2>
          </div>
          
          <div className="p-6">
            <div className="space-y-4">
              {filteredTransactions.map((transaction) => (
                <motion.div
                  key={transaction.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      transaction.type === 'buy'
                        ? 'bg-gradient-to-br from-green-400 to-green-500'
                        : 'bg-gradient-to-br from-red-400 to-red-500'
                    }`}>
                      {transaction.type === 'buy' ? (
                        <FaArrowDown className="text-white text-xl" />
                      ) : (
                        <FaArrowUp className="text-white text-xl" />
                      )}
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-white">{transaction.asset}</h3>
                      <p className="text-sm text-gray-400">
                        {transaction.type === 'buy' ? 'Bought' : 'Sold'} {transaction.amount}
                      </p>
                      <p className="text-xs text-gray-500">{transaction.date}</p>
                    </div>
                  </div>

                  <div className="text-right space-y-2">
                    <p className="font-semibold text-white">{transaction.value}</p>
                    {getStatusBadge(transaction.status)}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="p-6 border-t border-white/10 flex items-center justify-center">
            <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg">
              Load More
            </button>
          </div>
        </motion.div>

        {/* Transaction Summary */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6"
        >
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg">
            <h3 className="text-sm font-medium text-gray-400 mb-2">Total Invested</h3>
            <p className="text-2xl font-bold text-white">$11,205.00</p>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg">
            <h3 className="text-sm font-medium text-gray-400 mb-2">Total Transactions</h3>
            <p className="text-2xl font-bold text-white">24</p>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg">
            <h3 className="text-sm font-medium text-gray-400 mb-2">Avg. Transaction</h3>
            <p className="text-2xl font-bold text-white">$467.71</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};