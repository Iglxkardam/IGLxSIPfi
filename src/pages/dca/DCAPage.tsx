import React, { useState, useEffect, useRef } from 'react';
import { FaPaperPlane, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ChatHistorySidebar } from '../../components';
import { TypingText } from '../../components/TypingText';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface DCAPageProps {
  onSidebarToggle?: (isOpen: boolean) => void;
}

export const DCAPage: React.FC<DCAPageProps> = ({ onSidebarToggle }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Handle sidebar toggle
  const handleSidebarToggle = (isOpen: boolean) => {
    if (onSidebarToggle) {
      onSidebarToggle(isOpen);
    }
  };

  // Handle chat history selection
  const handleSelectChat = (chatId: string) => {
    // TODO: Load chat history from backend/storage
    console.log('Selected chat:', chatId);
    // For now, just clear and show a sample message
    setMessages([{
      id: Date.now().toString(),
      text: `Loading chat history #${chatId}...`,
      sender: 'ai',
      timestamp: new Date()
    }]);
    setIsExpanded(true);
  };

  // Handle new chat
  const handleNewChat = () => {
    setMessages([]);
    setIsExpanded(false);
    setInputMessage('');
  };

  // Auto-scroll to bottom when messages change
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Starfield canvas background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    // Narrow types so nested functions can use them without null checks
    const canvasEl = canvas as HTMLCanvasElement;
    const ctx = context as CanvasRenderingContext2D;

    // Configurable values (from provided script)
    const STAR_COLOR = '#fff';
    const STAR_SIZE = 5;
    const STAR_MIN_SCALE = 0.2;
    const OVERFLOW_THRESHOLD = 50;
    let scale = window.devicePixelRatio || 1;

    let width = 0;
    let height = 0;

    let stars: { x: number; y: number; z: number }[] = [];

    let pointerX: number | null = null;
    let pointerY: number | null = null;

    const velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 };

    let touchInput = false;

    const STAR_COUNT = () => (window.innerWidth + window.innerHeight) / 8;

    function generate() {
      stars = [];
      for (let i = 0; i < STAR_COUNT(); i++) {
        stars.push({ x: 0, y: 0, z: STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE) });
      }
    }

    function placeStar(star: { x: number; y: number; z: number }) {
      star.x = Math.random() * width;
      star.y = Math.random() * height;
    }

    function recycleStar(star: { x: number; y: number; z: number }) {
      let direction = 'z';

      const vx = Math.abs(velocity.x), vy = Math.abs(velocity.y);

      if (vx > 1 || vy > 1) {
        let axis: 'h' | 'v';

        if (vx > vy) {
          axis = Math.random() < vx / (vx + vy) ? 'h' : 'v';
        } else {
          axis = Math.random() < vy / (vx + vy) ? 'v' : 'h';
        }

        if (axis === 'h') {
          direction = velocity.x > 0 ? 'l' : 'r';
        } else {
          direction = velocity.y > 0 ? 't' : 'b';
        }
      }

      star.z = STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE);

      if (direction === 'z') {
        star.z = 0.1;
        star.x = Math.random() * width;
        star.y = Math.random() * height;
      } else if (direction === 'l') {
        star.x = -OVERFLOW_THRESHOLD;
        star.y = height * Math.random();
      } else if (direction === 'r') {
        star.x = width + OVERFLOW_THRESHOLD;
        star.y = height * Math.random();
      } else if (direction === 't') {
        star.x = width * Math.random();
        star.y = -OVERFLOW_THRESHOLD;
      } else if (direction === 'b') {
        star.x = width * Math.random();
        star.y = height + OVERFLOW_THRESHOLD;
      }
    }

    function resize() {
      scale = window.devicePixelRatio || 1;
      width = window.innerWidth * scale;
      height = window.innerHeight * scale;

      canvasEl.width = width;
      canvasEl.height = height;

      stars.forEach(placeStar);
    }

    function update() {
      velocity.tx *= 0.96;
      velocity.ty *= 0.96;

      velocity.x += (velocity.tx - velocity.x) * 0.8;
      velocity.y += (velocity.ty - velocity.y) * 0.8;

      for (const star of stars) {
        star.x += velocity.x * star.z;
        star.y += velocity.y * star.z;

        star.x += (star.x - width / 2) * velocity.z * star.z;
        star.y += (star.y - height / 2) * velocity.z * star.z;
        star.z += velocity.z;

        if (
          star.x < -OVERFLOW_THRESHOLD ||
          star.x > width + OVERFLOW_THRESHOLD ||
          star.y < -OVERFLOW_THRESHOLD ||
          star.y > height + OVERFLOW_THRESHOLD
        ) {
          recycleStar(star);
        }
      }
    }

    function render() {
  ctx.clearRect(0, 0, width, height);

      for (const star of stars) {
  ctx.beginPath();
  ctx.lineCap = 'round';
  ctx.lineWidth = STAR_SIZE * star.z * scale;
  ctx.globalAlpha = 0.5 + 0.5 * Math.random();
  ctx.strokeStyle = STAR_COLOR;

  ctx.beginPath();
  ctx.moveTo(star.x, star.y);

        let tailX = velocity.x * 2;
        let tailY = velocity.y * 2;

        if (Math.abs(tailX) < 0.1) tailX = 0.5;
        if (Math.abs(tailY) < 0.1) tailY = 0.5;

  ctx.lineTo(star.x + tailX, star.y + tailY);

  ctx.stroke();
      }
    }

    function step() {
      update();
      render();
      rafId = requestAnimationFrame(step);
    }

    function movePointer(x: number, y: number) {
      if (typeof pointerX === 'number' && typeof pointerY === 'number') {
        const ox = x - pointerX;
        const oy = y - pointerY;

        velocity.tx = velocity.tx + (ox / (80 * scale)) * (touchInput ? 1 : -1);
        velocity.ty = velocity.ty + (oy / (80 * scale)) * (touchInput ? 1 : -1);
      }

      pointerX = x;
      pointerY = y;
    }

    function onMouseMove(e: MouseEvent) {
      touchInput = false;
      movePointer(e.clientX, e.clientY);
    }

    function onTouchMove(e: TouchEvent) {
      touchInput = true;
      if (e.touches && e.touches[0]) {
        movePointer(e.touches[0].clientX, e.touches[0].clientY);
      }
      e.preventDefault();
    }

    function onMouseLeave() {
      pointerX = null;
      pointerY = null;
    }

    // Init
    generate();
    resize();

    let rafId = requestAnimationFrame(step);

    // Attach listeners to window so UI elements above canvas still receive pointer events
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onMouseLeave);
    document.addEventListener('mouseleave', onMouseLeave);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onMouseLeave);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Expand the chat on first message
    if (!isExpanded) {
      setIsExpanded(true);
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: messages.length === 0 
          ? 'Hello! I\'m your IGL AI Agent. I can help you set up Dollar Cost Averaging strategies for crypto investments. What would you like to know?'
          : 'I understand you want to explore DCA strategies. Let me help you create a personalized investment plan. What\'s your risk tolerance and preferred investment amount?',
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <motion.div 
      className="min-h-screen pt-16 relative"
      style={{
        background: '#000',
        backgroundImage: `
          radial-gradient(circle at top right, rgba(121, 68, 154, 0.13), transparent),
          radial-gradient(circle at 20% 80%, rgba(41, 196, 255, 0.13), transparent)
        `
      }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      {/* Chat History Sidebar */}
      <ChatHistorySidebar 
        onSelectChat={handleSelectChat}
        onNewChat={handleNewChat}
        onToggle={handleSidebarToggle}
      />

      {/* Canvas starfield background - sits behind the page content */}
      <canvas
        ref={canvasRef}
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100vw', 
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'none'
        }}
        aria-hidden="true"
      />
      <div className="w-full flex flex-col relative z-10" style={{ height: 'calc(100vh - 64px)' }}>
        {/* Chat Container - Full page with messages area */}
        <div className="flex-1 bg-transparent overflow-hidden flex flex-col relative">
          {/* Centered Initial State - Show when no messages */}
          {messages.length === 0 && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ 
                  opacity: 0, 
                  scale: 0.8,
                  y: -50,
                  transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
                }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className="w-full max-w-4xl px-8"
              >
                {/* Header in center - Responsive */}
                <motion.div 
                  className="flex items-center justify-center mb-4 relative px-4"
                  initial={{ x: 0 }}
                  animate={{
                    x: [0, 0, -48, -42]
                  }}
                  transition={{
                    duration: 2.2,
                    delay: 0.5,
                    times: [0, 0.9, 0.94, 1],
                    ease: [0.22, 1, 0.16, 1]
                  }}
                >
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    {/* Logo Animation - Physics-based Curved Trajectory */}
                    <motion.div
                      className="relative z-20"
                      initial={{ y: 0, x: 0 }}
                      style={{ willChange: 'transform' }}
                    >
                      {/* Y-axis (vertical) - Gravity effect */}
                      <motion.div
                        animate={{ 
                          y: [0, -100, 0, -8, 0],
                        }}
                        transition={{ 
                          duration: 2.2,
                          delay: 0.5,
                          times: [0, 0.45, 0.75, 0.88, 1],
                          ease: [0.22, 1, 0.36, 1]
                        }}
                      >
                        {/* X-axis (horizontal) - Linear motion */}
                        <motion.div
                          animate={{ 
                            x: [0, 85],
                          }}
                          transition={{ 
                            duration: 2.2,
                            delay: 0.5,
                            ease: "linear"
                          }}
                        >
                          {/* Rotation and squash */}
                          <motion.div
                            animate={{
                              rotate: [0, 360],
                              scaleY: [1, 1.1, 1, 0.65, 1.05, 1],
                              scaleX: [1, 0.95, 1, 1.35, 0.98, 1],
                            }}
                            transition={{
                              duration: 2.2,
                              delay: 0.5,
                              times: [0, 0.3, 0.6, 0.75, 0.88, 1],
                              ease: [0.22, 1, 0.36, 1]
                            }}
                          >
                            <img src="/igl-sipfi-logo.svg" alt="IGL" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                    
                    {/* Text with "IGL" being pushed and squashed */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white flex items-center">
                      <motion.span
                        className="inline-block origin-top"
                        initial={{ scaleY: 1, opacity: 1, y: 0, x: 0, rotate: 0 }}
                        animate={{
                          scaleY: [1, 1, 0.4, 0.1, 0],
                          scaleX: [1, 1, 1.3, 1.4, 1.2],
                          opacity: [1, 1, 0.7, 0.3, 0],
                          y: [0, 0, 15, 35, 55],
                          x: [0, 0, -8, -16, -22],
                          rotate: [0, 0, 3, 6, 10]
                        }}
                        transition={{
                          duration: 2.2,
                          delay: 0.5,
                          times: [0, 0.75, 0.82, 0.9, 1],
                          ease: [0.22, 1, 0.36, 1]
                        }}
                        style={{ 
                          transformOrigin: 'center top',
                          display: 'inline-block',
                          filter: 'blur(0px)'
                        }}
                      >
                        IGL
                      </motion.span>
                      <motion.span 
                        className="ml-1 sm:ml-2 inline-block"
                        initial={{ x: 0, scale: 1 }}
                        animate={{
                          x: [0, 0, -10, 0],
                          scale: [1, 1, 0.96, 1]
                        }}
                        transition={{
                          duration: 2.2,
                          delay: 0.5,
                          times: [0, 0.9, 0.94, 1],
                          ease: [0.22, 1, 0.76, 0.12]
                        }}
                      >
                        AI Agent
                      </motion.span>
                    </h1>
                  </div>
                </motion.div>
                <p className="text-gray-300 text-xs sm:text-sm mb-6 sm:mb-8 text-center px-4">
                  DCA strategies, Trade crypto, Market analysis, BTC/ETH, and more...
                </p>

                {/* Search Box with Double Border - Responsive */}
                <div className="relative w-full">
                  {/* Outer border */}
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-white/10 via-white/5 to-white/10 p-[1px]">
                    <div className="absolute inset-[1px] rounded-2xl sm:rounded-3xl bg-gradient-to-r from-white/5 via-white/3 to-white/5 p-[1px]">
                      <div className="w-full h-full rounded-2xl sm:rounded-3xl bg-black/20"></div>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="relative bg-white/[0.01] backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-sm px-4 sm:px-6 py-3 sm:py-4">
                    <form onSubmit={handleSendMessage}>
                      <div className="relative mb-2 sm:mb-3">
                        <input
                          type="text"
                          value={inputMessage}
                          onChange={(e) => setInputMessage(e.target.value)}
                          placeholder="Ask AI anything..."
                          className="w-full px-4 sm:px-6 py-3 sm:py-4 pr-12 sm:pr-14 text-sm sm:text-base bg-transparent border-none focus:outline-none text-white placeholder-gray-400"
                        />
                        <button
                          type="submit"
                          disabled={!inputMessage.trim()}
                          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-emerald-400 text-white rounded-lg sm:rounded-xl hover:bg-emerald-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
                        >
                          <FaPaperPlane className="text-xs sm:text-sm" />
                        </button>
                      </div>
                      {/* Bottom toolbar - Responsive */}
                      <div className="flex items-center space-x-2 sm:space-x-4 pt-2 overflow-x-auto">
                        <button type="button" className="flex items-center space-x-1.5 sm:space-x-2 px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm text-gray-300 hover:text-white whitespace-nowrap">
                          <span className="w-4 h-4 sm:w-5 sm:h-5 bg-blue-400/20 rounded-full"></span>
                          <span>IGL Agent</span>
                        </button>
                        <button type="button" className="flex items-center space-x-1.5 sm:space-x-2 px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm text-gray-400 hover:text-white whitespace-nowrap">
                          <span>🌐</span>
                          <span>DeepSearch</span>
                        </button>
                        <button type="button" className="flex items-center space-x-1.5 sm:space-x-2 px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm text-gray-400 hover:text-white whitespace-nowrap">
                          <span>💡</span>
                          <span>Think</span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {/* Chat Messages - Responsive */}
          <div 
            className="flex-1 overflow-y-auto bg-transparent flex justify-center px-2 sm:px-4"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(255,255,255,0.2) transparent',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <div className="w-full max-w-4xl py-4 px-2 sm:p-6 space-y-3 sm:space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    duration: 0.3,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                {message.sender === 'user' ? (
                  // User message - compact with border, responsive
                  <div className="flex items-start space-x-2 sm:space-x-3 max-w-[85%] sm:max-w-xs md:max-w-md lg:max-w-lg flex-row-reverse space-x-reverse">
                    {/* User Avatar */}
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-white/5 backdrop-blur-sm border border-white/5">
                      <FaUser className="text-emerald-400 text-xs sm:text-sm" />
                    </div>
                    
                    {/* User Message Bubble */}
                    <div className="px-3 py-2 sm:px-4 sm:py-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/5 text-white">
                      <p className="text-xs sm:text-sm leading-relaxed break-words">{message.text}</p>
                      <p className="text-[10px] sm:text-xs mt-1 text-gray-400">
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ) : (
                  // AI message - full width with transparent border, responsive
                  <div className="flex items-start space-x-2 sm:space-x-3 w-full">
                    {/* AI Avatar */}
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-white/5 backdrop-blur-sm border border-white/10">
                      <img src="/igl-sipfi-logo.svg" alt="IGL" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
                    </div>
                    
                    {/* AI Message Bubble - Full Width */}
                    <div className="flex-1 px-3 py-2 sm:px-4 sm:py-3 rounded-2xl bg-transparent text-white">
                      <p className="text-xs sm:text-sm leading-relaxed break-words">
                        <TypingText 
                          text={message.text} 
                          className=""
                          speed={150}
                        />
                      </p>
                      <p className="text-[10px] sm:text-xs mt-1 text-gray-400">
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <img src="/igl-sipfi-logo.svg" alt="IGL" className="w-8 h-8 object-contain" />
                    </div>
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 shadow-sm">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {/* Invisible element for auto-scroll */}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Form - Fixed at bottom (only show when messages exist) */}
          {messages.length > 0 && (
            <motion.div 
              className="py-4 px-6 bg-transparent flex-shrink-0 z-10 flex justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            >
              <div className="w-full max-w-4xl">
                <motion.div 
                  className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 shadow-sm p-4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
                >
                  <form onSubmit={handleSendMessage}>
                    <div className="relative mb-3">
                      <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        placeholder="Ask me about DCA strategies, investment plans, or crypto markets..."
                        className="w-full px-5 py-4 text-base bg-transparent border-none focus:outline-none text-white placeholder-gray-400"
                      />
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={!inputMessage.trim() || isTyping}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-emerald-400 text-white rounded-xl hover:bg-emerald-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
                      >
                        <FaPaperPlane className="text-sm" />
                      </motion.button>
                    </div>
                    {/* Bottom toolbar */}
                    <div className="flex items-center space-x-4 pt-1">
                      <button type="button" className="flex items-center space-x-2 px-3 py-1 text-sm text-gray-300 hover:text-white">
                        <span className="w-4 h-4 bg-blue-400/20 rounded-full"></span>
                        <span>IGL Agent</span>
                      </button>
                      <button type="button" className="flex items-center space-x-1.5 px-3 py-1 text-sm text-gray-400 hover:text-white">
                        <span>🌐</span>
                        <span>DeepSearch</span>
                      </button>
                      <button type="button" className="flex items-center space-x-1.5 px-3 py-1 text-sm text-gray-400 hover:text-white">
                        <span>💡</span>
                        <span>Think</span>
                      </button>
                    </div>
                  </form>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};