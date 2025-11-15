import React from 'react';
import { Section } from './Section';
import { AnimatedSection } from './AnimatedSection';
import { FaWallet, FaBrain, FaCalendarAlt, FaLock, FaComments, FaSearch } from 'react-icons/fa';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <FaBrain className="text-4xl text-blue-400" />,
      title: 'On-Chain AI Analysis',
      description: 'Real-time market intelligence powered by Galadriel AI - fully decentralized, no centralized APIs',
      badge: 'Trustless',
    },
    {
      icon: <FaCalendarAlt className="text-4xl text-purple-400" />,
      title: 'Automated DCA',
      description: 'Set your strategy once, let AI execute optimal buy orders based on market conditions',
      badge: 'Smart Execution',
    },
    {
      icon: <FaWallet className="text-4xl text-pink-400" />,
      title: 'Account Abstraction',
      description: 'No wallet setup needed - trade directly with email or social accounts via smart contract wallets',
      badge: 'Seamless UX',
    },
    {
      icon: <FaLock className="text-4xl text-blue-400" />,
      title: 'Self-Custody',
      description: 'Your keys, your coins. Optional vault locking prevents emotional panic selling',
      badge: 'Full Control',
    },
    {
      icon: <FaComments className="text-4xl text-purple-400" />,
      title: 'Natural Language Interface',
      description: 'Interact with the protocol using plain English - AI understands your intent and executes trades',
      badge: 'Intuitive',
    },
    {
      icon: <FaSearch className="text-4xl text-pink-400" />,
      title: 'Fully Transparent',
      description: 'Every transaction on blockchain, open-source contracts, real-time auditable on Abstract explorer',
      badge: 'Verifiable',
    },
  ];

  return (
    <Section id="features" className="bg-black">
      <AnimatedSection direction="fade">
        <div className="text-center mb-20">
          <span className="text-sm text-white/50 uppercase tracking-wider mb-4 block">Core Features</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Built for the Future of <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">DeFi Trading</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mt-4">
            Combining cutting-edge AI technology with battle-tested trading strategies
          </p>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <AnimatedSection key={index} direction="up" delay={index * 0.1}>
            <div className="h-full p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
              <div className="mb-6">{feature.icon}</div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-white/60 mb-4 leading-relaxed text-sm">
                {feature.description}
              </p>
              
              <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                <span className="text-xs font-medium text-white/70">
                  {feature.badge}
                </span>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
};
