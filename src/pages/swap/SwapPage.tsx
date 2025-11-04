import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExchangeAlt, FaChevronDown, FaCog, FaArrowDown } from 'react-icons/fa';
import { StarfieldBackground } from '../../components';

interface Token {
  symbol: string;
  name: string;
  icon: string;
  balance: string;
}

const tokens: Token[] = [
  { symbol: 'ETH', name: 'Ethereum', icon: '⟠', balance: '2.5431' },
  { symbol: 'BTC', name: 'Bitcoin', icon: '₿', balance: '0.0847' },
  { symbol: 'USDC', name: 'USD Coin', icon: '$', balance: '1,250.00' },
  { symbol: 'USDT', name: 'Tether', icon: '₮', balance: '3,500.00' },
];

export const SwapPage: React.FC = () => {
  const [fromToken, setFromToken] = useState<Token>(tokens[0]);
  const [toToken, setToToken] = useState<Token>(tokens[2]);
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [showFromTokens, setShowFromTokens] = useState(false);
  const [showToTokens, setShowToTokens] = useState(false);
  const [slippage, setSlippage] = useState('0.5');

  // Hide ALL cursors completely on swap page
  React.useEffect(() => {
    const style = document.createElement('style');
    style.id = 'swap-page-cursor-style';
    style.innerHTML = `
      body, body * {
        cursor: none !important;
      }
      .swap-page-container, .swap-page-container * {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);
    return () => {
      const styleElement = document.getElementById('swap-page-cursor-style');
      if (styleElement) {
        document.head.removeChild(styleElement);
      }
    };
  }, []);

  const handleSwapTokens = () => {
    const temp = fromToken;
    setFromToken(toToken);
    setToToken(temp);
    const tempAmount = fromAmount;
    setFromAmount(toAmount);
    setToAmount(tempAmount);
  };

  const handleFromAmountChange = (value: string) => {
    // Only allow numbers and decimal point
    const regex = /^[0-9]*\.?[0-9]*$/;
    
    if (regex.test(value) || value === '') {
      setFromAmount(value);
      // Mock conversion rate
      if (value && !isNaN(parseFloat(value))) {
        const rate = fromToken.symbol === 'ETH' ? 2000 : 1;
        setToAmount((parseFloat(value) * rate).toFixed(2));
      } else {
        setToAmount('');
      }
    }
  };

  return (
    <div 
      className="min-h-screen pt-20 pb-8 px-4 relative swap-page-container"
      style={{
        cursor: 'none',
        background: '#000',
        backgroundImage: `
          radial-gradient(circle at top right, rgba(121, 68, 154, 0.13), transparent),
          radial-gradient(circle at 20% 80%, rgba(41, 196, 255, 0.13), transparent)
        `
      }}
    >
      <StarfieldBackground />
      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header - Responsive */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6 sm:mb-8"
        >
          <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
            <FaExchangeAlt className="text-gray-300 text-2xl sm:text-3xl" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Token Swap
            </h1>
          </div>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg px-4">
            Swap tokens instantly with best rates
          </p>
        </motion.div>

        {/* Swap Interface - Larger & More Transparent */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-transparent backdrop-blur-sm rounded-2xl border-0 p-4 sm:p-5 max-w-xl mx-auto"
        >
          {/* Swap/Buy Tabs and Settings */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2 bg-white/5 rounded-lg p-1">
              <button className="px-4 py-2 text-sm font-medium text-white bg-white/10 rounded-md">
                Swap
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white">
                Buy
              </button>
            </div>
            <button className="p-2.5 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-all duration-200">
              <FaCog className="text-gray-400 hover:text-white text-base" />
            </button>
          </div>

          {/* From Token Section - Larger */}
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-400">Sell</span>
              <span className="text-sm text-gray-400">Balance: {fromToken.balance}</span>
            </div>
            
            <div className="bg-white/[0.03] backdrop-blur-sm rounded-xl border border-white/[0.08] p-4 hover:border-white/[0.12] transition-colors">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={fromAmount}
                  onChange={(e) => handleFromAmountChange(e.target.value)}
                  placeholder="0"
                  className="flex-1 min-w-0 bg-transparent border-none outline-none text-white text-2xl sm:text-3xl font-semibold placeholder-gray-600"
                />
                
                <button
                  onClick={() => setShowFromTokens(!showFromTokens)}
                  className="flex items-center bg-white/[0.08] hover:bg-white/[0.12] px-3 py-2 rounded-xl border border-white/[0.15] transition-all duration-200 gap-2 flex-shrink-0"
                >
                  <span className="text-lg text-white brightness-150">{fromToken.icon}</span>
                  <span className="text-white font-semibold text-sm">{fromToken.symbol}</span>
                  <FaChevronDown className="text-gray-400 text-xs" />
                </button>
              </div>

              {showFromTokens && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-4 space-y-2 max-h-60 overflow-y-auto scrollable-area"
                >
                  {tokens.filter(t => t.symbol !== toToken.symbol).map((token) => (
                    <button
                      key={token.symbol}
                      onClick={() => {
                        setFromToken(token);
                        setShowFromTokens(false);
                      }}
                      className="w-full flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-all duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl text-white brightness-150">{token.icon}</span>
                        <div className="text-left">
                          <p className="text-white font-semibold text-sm">{token.symbol}</p>
                          <p className="text-gray-400 text-xs">{token.name}</p>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm">{token.balance}</p>
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          {/* Swap Arrow Button - Centered */}
          <div className="flex justify-center -my-2 relative z-20">
            <button
              onClick={handleSwapTokens}
              className="p-2 bg-transparent hover:bg-white/[0.08] rounded-full transition-all duration-200"
            >
              <FaArrowDown className="text-gray-400 hover:text-white text-base transition-colors" />
            </button>
          </div>

          {/* To Token Section - Larger */}
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-400">Buy</span>
              <span className="text-sm text-gray-400">Balance: {toToken.balance}</span>
            </div>
            
            <div className="bg-white/[0.03] backdrop-blur-sm rounded-xl border border-white/[0.08] p-4 hover:border-white/[0.12] transition-colors">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={toAmount}
                  readOnly
                  placeholder="0"
                  className="flex-1 min-w-0 bg-transparent border-none outline-none text-white text-2xl sm:text-3xl font-semibold placeholder-gray-600"
                />
                
                <button
                  onClick={() => setShowToTokens(!showToTokens)}
                  className="flex items-center bg-white/[0.08] hover:bg-white/[0.12] px-3 py-2 rounded-xl border border-white/[0.15] transition-all duration-200 gap-2 flex-shrink-0"
                >
                  <span className="text-lg text-white brightness-150">{toToken.icon}</span>
                  <span className="text-white font-semibold text-sm">{toToken.symbol}</span>
                  <FaChevronDown className="text-gray-400 text-xs" />
                </button>
              </div>

              {showToTokens && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-4 space-y-2 max-h-60 overflow-y-auto scrollable-area"
                >
                  {tokens.filter(t => t.symbol !== fromToken.symbol).map((token) => (
                    <button
                      key={token.symbol}
                      onClick={() => {
                        setToToken(token);
                        setShowToTokens(false);
                      }}
                      className="w-full flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-all duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl text-white brightness-150">{token.icon}</span>
                        <div className="text-left">
                          <p className="text-white font-semibold text-sm">{token.symbol}</p>
                          <p className="text-gray-400 text-xs">{token.name}</p>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm">{token.balance}</p>
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          {/* Swap Details - Larger */}
          {fromAmount && toAmount && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-3 mb-4 space-y-2"
            >
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Rate</span>
                <span className="text-white">1 {fromToken.symbol} ≈ {(parseFloat(toAmount) / parseFloat(fromAmount)).toFixed(2)} {toToken.symbol}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Slippage</span>
                <span className="text-white">{slippage}%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Network Fee</span>
                <span className="text-white">~$2.50</span>
              </div>
            </motion.div>
          )}

          {/* Swap Button - Larger */}
          <button
            disabled={!fromAmount || !toAmount}
            className="w-full py-4 bg-white/[0.08] hover:bg-white/[0.12] disabled:bg-white/[0.03] disabled:cursor-not-allowed text-white font-semibold text-base rounded-xl transition-all duration-200 border border-white/[0.12] hover:border-white/[0.2] disabled:border-white/[0.05]"
          >
            {!fromAmount || !toAmount ? 'Enter Amount' : 'Swap Tokens'}
          </button>

          {/* Expand Chart */}
          <button className="w-full mt-3 flex items-center justify-center space-x-2 text-gray-400 hover:text-white text-sm py-2 transition-colors">
            <span>👁️</span>
            <span>Expand Chart</span>
          </button>
        </motion.div>

        {/* Recent Swaps - Larger & Transparent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 bg-transparent backdrop-blur-sm rounded-xl border-0 p-4 sm:p-5 max-w-xl mx-auto"
        >
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3.5 bg-white/[0.03] rounded-lg border border-white/[0.08] hover:border-white/[0.12] transition-colors cursor-default">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  <span className="text-xl text-white brightness-150">⟠</span>
                  <span className="text-sm text-gray-400">→</span>
                  <span className="text-xl text-white brightness-150">$</span>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">ETH → USDC</p>
                  <p className="text-gray-400 text-xs">2 hours ago</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white font-medium text-sm">1.5 ETH</p>
                <p className="text-green-400 text-xs">Completed</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-3.5 bg-white/[0.03] rounded-lg border border-white/[0.08] hover:border-white/[0.12] transition-colors cursor-default">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  <span className="text-xl text-white brightness-150">₿</span>
                  <span className="text-sm text-gray-400">→</span>
                  <span className="text-xl text-white brightness-150">⟠</span>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">BTC → ETH</p>
                  <p className="text-gray-400 text-xs">1 day ago</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white font-medium text-sm">0.05 BTC</p>
                <p className="text-green-400 text-xs">Completed</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
