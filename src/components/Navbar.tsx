import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Custom IGL Logo - Crown + Shield representing Leadership & Control */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gradient-primary p-2 rounded-xl shadow-lg">
                <svg 
                  width="36" 
                  height="36" 
                  viewBox="0 0 100 100" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:scale-110 transition-transform"
                >
                  {/* Shield Base - Control & Security */}
                  <path 
                    d="M50 10 L80 25 L80 50 C80 70 65 85 50 95 C35 85 20 70 20 50 L20 25 Z" 
                    fill="white" 
                    opacity="0.9"
                  />
                  
                  {/* Crown - Leadership */}
                  <path 
                    d="M35 35 L40 45 L50 40 L60 45 L65 35 L65 50 L35 50 Z" 
                    fill="#10B981" 
                    opacity="0.9"
                  />
                  <circle cx="35" cy="35" r="3" fill="#FCD34D" />
                  <circle cx="50" cy="38" r="3" fill="#FCD34D" />
                  <circle cx="65" cy="35" r="3" fill="#FCD34D" />
                  
                  {/* Chart Line - Growth */}
                  <path 
                    d="M32 70 L40 65 L48 68 L56 60 L68 63" 
                    stroke="#1E40AF" 
                    strokeWidth="3" 
                    fill="none" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="32" cy="70" r="2.5" fill="#1E40AF" />
                  <circle cx="40" cy="65" r="2.5" fill="#1E40AF" />
                  <circle cx="48" cy="68" r="2.5" fill="#1E40AF" />
                  <circle cx="56" cy="60" r="2.5" fill="#1E40AF" />
                  <circle cx="68" cy="63" r="2.5" fill="#8B5CF6" />
                </svg>
              </div>
            </div>
            
            {/* Brand Name */}
            <div className="flex flex-col">
              <span className={`text-2xl font-bold transition-colors ${
                isScrolled ? 'text-gradient' : 'text-white'
              }`}>
                IGL SIPfi
              </span>
              <span className={`text-xs font-medium transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-white/80'
              }`}>
                Automated Crypto Investing
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`font-medium transition-colors hover:text-primary ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.name}
              </motion.a>
            ))}
            
            <motion.a
              href="https://www.linkedin.com/in/iglxkardam/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-gradient-primary text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Connect
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 bg-white rounded-b-2xl shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 text-gray-700 font-medium hover:bg-gray-50 hover:text-primary transition-colors rounded-lg"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://www.linkedin.com/in/iglxkardam/"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 px-6 py-2.5 bg-gradient-primary text-white font-semibold rounded-lg text-center shadow-lg"
              >
                Connect
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
