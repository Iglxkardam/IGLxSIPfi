import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaComments, FaTrash } from 'react-icons/fa';
import { getAllConversations, deleteConversation, getCurrentChatId, type ChatConversation } from '../utils/chatStorage';

interface ChatHistorySidebarProps {
  onSelectChat?: (chatId: string) => void;
  onNewChat?: () => void;
  onToggle?: (isOpen: boolean) => void;
  currentChatId?: string | null;
  onSidebarToggle?: (isOpen: boolean) => void;
  walletAddress?: string | undefined; // Add wallet address prop
}

export const ChatHistorySidebar: React.FC<ChatHistorySidebarProps> = ({ 
  onSelectChat, 
  onNewChat,
  onToggle,
  currentChatId,
  onSidebarToggle,
  walletAddress
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState<ChatConversation[]>([]);
  const [activeChatId, setActiveChatId] = useState<string | null>(currentChatId || null);

  // Load chat history when wallet changes or currentChatId changes
  useEffect(() => {
    loadChatHistory();
    setActiveChatId(currentChatId || getCurrentChatId(walletAddress));
  }, [currentChatId, walletAddress]); // Re-load when wallet changes

  const loadChatHistory = () => {
    const conversations = getAllConversations(walletAddress);
    setChatHistory(conversations);
  };

  const handleToggle = (newState: boolean) => {
    setIsOpen(newState);
    if (onToggle) {
      onToggle(newState);
    }
    if (onSidebarToggle) {
      onSidebarToggle(newState);
    }
  };

  const handleChatSelect = (chatId: string) => {
    setActiveChatId(chatId);
    if (onSelectChat) {
      onSelectChat(chatId);
    }
    setIsOpen(false);
    if (onSidebarToggle) onSidebarToggle(false); // <-- close sidebar in parent
  };

  const handleNewChat = () => {
    if (onNewChat) {
      onNewChat();
    }
    loadChatHistory(); // Refresh list after creating new chat
    setIsOpen(false);
    if (onSidebarToggle) onSidebarToggle(false); // <-- close sidebar in parent
  };

  const handleDeleteChat = (e: React.MouseEvent, chatId: string) => {
    e.stopPropagation(); // Prevent chat selection when clicking delete
    
    if (window.confirm('Delete this conversation?')) {
      deleteConversation(chatId, walletAddress);
      loadChatHistory(); // Refresh the list
      
      // If deleted chat was active, notify parent
      if (activeChatId === chatId && onNewChat) {
        onNewChat();
      }
    }
  };

  const formatTimestamp = (date: Date): string => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) return 'Today';
    if (days === 1) return 'Yesterday';
    if (days < 7) return `${days}d ago`;
    if (days < 30) return `${Math.floor(days / 7)}w ago`;
    
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
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
        className="fixed left-0 top-0 h-screen w-[280px] sm:w-[320px] md:w-[360px] lg:w-[420px] bg-transparent pointer-events-none pt-20 sm:pt-24 overflow-hidden z-40"
        initial={false}
        animate={{
          x: isOpen ? 0 : '-100%',
        }}
        transition={{ 
          duration: 0.4, 
          ease: [0.4, 0, 0.2, 1]
        }}
      >
        <div className="h-full w-full overflow-y-auto overflow-x-hidden pointer-events-auto px-3 sm:px-4">
          {/* New Chat Button */}
          <div className="mb-6">
            <button
              onClick={handleNewChat}
              className="w-full flex items-center justify-center space-x-2 bg-white/5 hover:bg-white/10 text-white rounded-xl px-4 py-3 transition-colors duration-200"
            >
              <FaPlus className="text-lg" />
              <span className="font-semibold text-sm">New Chat</span>
            </button>
          </div>

          {/* Chat History Title */}
          <div className="mb-4 pb-3">
            <div className="flex items-center space-x-2 text-white/90">
              <FaComments className="text-lg" />
              <h2 className="text-sm font-bold uppercase tracking-wide">Chat History</h2>
            </div>
          </div>

          {/* Chat History List */}
          <ul className="space-y-2 mb-8">
            {chatHistory.length === 0 ? (
              <div className="text-center py-8 text-gray-400 text-sm">
                No conversations yet.<br />Start a new chat!
              </div>
            ) : (
              chatHistory.map((chat) => (
                <li
                  key={chat.id}
                  className="list-none"
                >
                  <div
                    onClick={() => handleChatSelect(chat.id)}
                    className={`w-full text-left block backdrop-blur-sm rounded-lg p-2 sm:p-3 transition-all duration-200 group relative cursor-pointer ${
                      activeChatId === chat.id 
                        ? 'bg-white/[0.12] border border-blue-500/30' 
                        : 'bg-white/[0.03] hover:bg-white/[0.08] border border-transparent'
                    }`}
                  >
                    <div className="flex flex-col space-y-0.5 sm:space-y-1 pr-8">
                      <h3 className="text-white/90 font-semibold text-xs sm:text-sm line-clamp-1">
                        {chat.title}
                      </h3>
                      <p className="text-gray-400 text-[10px] sm:text-xs line-clamp-1">
                        {chat.preview}
                      </p>
                      <p className="text-gray-500 text-[10px] sm:text-xs">
                        {formatTimestamp(chat.updatedAt)}
                      </p>
                    </div>
                    
                    {/* Delete Button */}
                    <button
                      onClick={(e) => handleDeleteChat(e, chat.id)}
                      className="absolute right-2 top-2 p-1.5 rounded-md bg-red-500/0 hover:bg-red-500/20 text-red-400/0 group-hover:text-red-400 transition-all duration-200 opacity-0 group-hover:opacity-100"
                      title="Delete conversation"
                    >
                      <FaTrash className="text-xs" />
                    </button>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </motion.div>

      {/* Hamburger Label/Button - Left Side, Responsive */}
      <label
        htmlFor="hamburger"
        className="fixed top-[72px] left-4 z-50 flex items-center justify-center h-10 w-10 cursor-pointer bg-transparent hover:bg-white/5 rounded-lg transition-colors duration-200"
      >
        {/* Hamburger Icon */}
        <div className="relative w-5 h-4 flex flex-col justify-center items-center">
          <motion.span
            className="absolute w-full h-0.5 bg-white/80"
            animate={{
              top: isOpen ? '50%' : '0%',
              rotate: isOpen ? 45 : 0,
              translateY: isOpen ? '-50%' : '0%'
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          />
          <motion.span
            className="absolute w-full h-0.5 bg-white/80 top-1/2 -translate-y-1/2"
            animate={{
              opacity: isOpen ? 0 : 1,
              width: isOpen ? 0 : '100%'
            }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          />
          <motion.span
            className="absolute w-full h-0.5 bg-white/80"
            animate={{
              bottom: isOpen ? '50%' : '0%',
              rotate: isOpen ? -45 : 0,
              translateY: isOpen ? '50%' : '0%'
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          />
        </div>
      </label>

    </>
  );
};
