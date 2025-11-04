import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaComments } from 'react-icons/fa';

interface ChatHistory {
  id: string;
  title: string;
  timestamp: Date;
  preview: string;
}

interface ChatHistorySidebarProps {
  onSelectChat?: (chatId: string) => void;
  onNewChat?: () => void;
  onToggle?: (isOpen: boolean) => void;
}

export const ChatHistorySidebar: React.FC<ChatHistorySidebarProps> = ({ 
  onSelectChat, 
  onNewChat,
  onToggle 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (newState: boolean) => {
    setIsOpen(newState);
    if (onToggle) {
      onToggle(newState);
    }
  };

  // Sample chat history data
  const chatHistory: ChatHistory[] = [
    {
      id: '1',
      title: 'Bitcoin DCA Strategy',
      timestamp: new Date('2025-11-03'),
      preview: 'Discussed monthly BTC investment plan...'
    },
    {
      id: '2',
      title: 'Ethereum Investment',
      timestamp: new Date('2025-11-02'),
      preview: 'Set up weekly ETH purchases...'
    },
    {
      id: '3',
      title: 'Portfolio Diversification',
      timestamp: new Date('2025-11-01'),
      preview: 'Analyzed risk tolerance and...'
    },
    {
      id: '4',
      title: 'Market Analysis',
      timestamp: new Date('2025-10-30'),
      preview: 'Reviewed current crypto trends...'
    },
    {
      id: '5',
      title: 'Solana DCA Setup',
      timestamp: new Date('2025-10-28'),
      preview: 'Configured SOL investment strategy...'
    }
  ];

  const handleChatSelect = (chatId: string) => {
    if (onSelectChat) {
      onSelectChat(chatId);
    }
    setIsOpen(false);
  };

  const handleNewChat = () => {
    if (onNewChat) {
      onNewChat();
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Input (hidden checkbox) */}
      <input
        type="checkbox"
        id="hamburger"
        className="hidden"
        checked={isOpen}
        onChange={(e) => handleToggle(e.target.checked)}
      />

      {/* Drawer List - Left Side, Responsive */}
      <motion.div
        className="fixed left-0 top-0 h-screen w-[280px] sm:w-[320px] md:w-[360px] lg:w-[420px] bg-transparent pointer-events-none pt-20 sm:pt-24 transition-transform duration-500 ease-in-out overflow-hidden z-40"
        style={{
          transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
        }}
        initial={false}
      >
        <div className="h-full w-full overflow-y-auto overflow-x-hidden pointer-events-auto px-3 sm:px-4">
          {/* New Chat Button */}
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: isOpen ? 0 : '-100%', opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.45, delay: 0 }}
            className="mb-6"
          >
            <button
              onClick={handleNewChat}
              className="w-full flex items-center justify-center space-x-2 bg-white/[0.03] hover:bg-white/[0.08] backdrop-blur-sm text-white rounded-xl px-4 py-3 transition-all duration-200"
            >
              <FaPlus className="text-lg" />
              <span className="font-semibold text-sm">New Chat</span>
            </button>
          </motion.div>

          {/* Chat History Title */}
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: isOpen ? 0 : '-100%', opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="mb-4 pb-3"
          >
            <div className="flex items-center space-x-2 text-white/90">
              <FaComments className="text-lg" />
              <h2 className="text-sm font-bold uppercase tracking-wide">Chat History</h2>
            </div>
          </motion.div>

          {/* Chat History List */}
          <ul className="space-y-2 mb-8">
            {chatHistory.map((chat, index) => (
              <motion.li
                key={chat.id}
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: isOpen ? 0 : '-100%', opacity: isOpen ? 1 : 0 }}
                transition={{ 
                  duration: 0.45, 
                  delay: 0.08 * (index + 2),
                  ease: [0.29, 1.4, 0.44, 0.96]
                }}
                className="list-none"
              >
                <button
                  onClick={() => handleChatSelect(chat.id)}
                  className="w-full text-left block bg-white/[0.03] hover:bg-white/[0.08] backdrop-blur-sm rounded-lg p-2 sm:p-3 transition-all duration-200"
                >
                  <div className="flex flex-col space-y-0.5 sm:space-y-1">
                    <h3 className="text-white/90 font-semibold text-xs sm:text-sm">
                      {chat.title}
                    </h3>
                    <p className="text-gray-400 text-[10px] sm:text-xs line-clamp-1">
                      {chat.preview}
                    </p>
                    <p className="text-gray-500 text-[10px] sm:text-xs">
                      {chat.timestamp.toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </button>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Hamburger Label/Button - Left Side, Responsive */}
      <label
        htmlFor="hamburger"
        className="fixed top-3 sm:top-4 left-3 sm:left-4 z-50 flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 cursor-pointer bg-transparent backdrop-blur-sm rounded-lg transition-all duration-200"
      >
        {/* Hamburger Icon */}
        <div className="relative w-5 h-4 sm:w-6 sm:h-5 flex flex-col justify-center items-center">
          <motion.span
            className="absolute w-full h-0.5 bg-white"
            animate={{
              top: isOpen ? '50%' : '0%',
              rotate: isOpen ? 45 : 0,
              translateY: isOpen ? '-50%' : '0%'
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="absolute w-full h-0.5 bg-white top-1/2 -translate-y-1/2"
            animate={{
              opacity: isOpen ? 0 : 1,
              width: isOpen ? 0 : '100%'
            }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="absolute w-full h-0.5 bg-white"
            animate={{
              bottom: isOpen ? '50%' : '0%',
              rotate: isOpen ? -45 : 0,
              translateY: isOpen ? '50%' : '0%'
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </label>

    </>
  );
};
