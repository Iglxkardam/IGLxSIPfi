import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">IGL SIPfi</h3>
            <p className="text-white/60 mb-4">Automated Crypto Investing</p>
            <div className="flex gap-4">
              <a href="https://x.com/Jhod869800" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-blue-400 transition-colors text-xl">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com/in/iglxkardam/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-blue-400 transition-colors text-xl">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Iglxkardam" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-blue-400 transition-colors text-xl">
                <FaGithub />
              </a>
              <a href="https://discord.com/users/iglxkardam" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-blue-400 transition-colors text-xl">
                <FaDiscord />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold mb-4 text-white">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  IGL SIP
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4 text-white">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://iglxkardam.vercel.app" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="https://github.com/Iglxkardam" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="mailto:sachinkardam5581@gmail.com" className="text-white/60 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Disclaimer
              </a>
            </div>
            <div className="text-sm text-white/60">
              Built with ❤️ in India 🇮🇳
            </div>
          </div>
          <div className="text-center mt-4 text-sm text-white/60">
            © {currentYear} IGL SIPfi. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
