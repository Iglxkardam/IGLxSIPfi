import React from 'react';
import { Section } from './Section';
import { Card } from './Card';
import { AnimatedSection } from './AnimatedSection';
import { FaWallet, FaBrain, FaCalendarAlt, FaLock, FaComments, FaSearch } from 'react-icons/fa';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <FaWallet className="text-5xl text-primary" />,
      title: 'NO WALLET NEEDED',
      description: 'No MetaMask, no seed phrases, no confusion',
      badge: 'Account Abstraction',
    },
    {
      icon: <FaBrain className="text-5xl text-secondary" />,
      title: 'ON-CHAIN AI',
      description: '100% decentralized AI (Galadriel) - not GPT-4',
      badge: 'Fully Trustless',
    },
    {
      icon: <FaCalendarAlt className="text-5xl text-accent" />,
      title: 'AUTOMATED DCA',
      description: 'Dollar-cost averaging removes emotional decisions',
      badge: 'Proven Strategy',
    },
    {
      icon: <FaLock className="text-5xl text-primary" />,
      title: 'FORCED HODL',
      description: 'Optional time-locks prevent panic selling',
      badge: 'Build Discipline',
    },
    {
      icon: <FaComments className="text-5xl text-secondary" />,
      title: 'NATURAL LANGUAGE',
      description: 'Talk to AI like a human, no technical jargon',
      badge: 'AI-Powered',
    },
    {
      icon: <FaSearch className="text-5xl text-accent" />,
      title: 'TRANSPARENT',
      description: 'Every transaction on blockchain. Fully auditable.',
      badge: 'Open Source',
    },
  ];

  return (
    <Section id="features">
      <AnimatedSection direction="fade">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Built Different. <span className="text-gradient">Built Better.</span>
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <AnimatedSection key={index} direction="up" delay={index * 0.1}>
            <Card className="text-center h-full">
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            
            <h3 className="text-xl font-bold text-dark mb-3">
              {feature.title}
            </h3>
            
            <p className="text-gray-600 mb-4 leading-relaxed">
              {feature.description}
            </p>
            
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full">
              <span className="text-sm font-semibold text-primary">
                {feature.badge}
              </span>
            </div>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
};
