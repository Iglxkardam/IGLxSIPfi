import React from 'react';
import { Section } from './Section';
import { AnimatedSection } from './AnimatedSection';
import { FaBolt, FaShieldAlt, FaRobot, FaLock } from 'react-icons/fa';

export const Solution: React.FC = () => {
  const benefits = [
    {
      icon: <FaBolt className="text-4xl text-blue-400" />,
      title: 'Automated Execution',
      description: 'Smart contracts execute your strategy 24/7. No manual intervention. No missed opportunities.',
    },
    {
      icon: <FaRobot className="text-4xl text-purple-400" />,
      title: 'AI-Driven Intelligence',
      description: 'On-chain AI analyzes market conditions and adjusts entry points for optimal DCA performance.',
    },
    {
      icon: <FaLock className="text-4xl text-pink-400" />,
      title: 'Forced Discipline',
      description: 'Optional vault locking prevents emotional panic selling during market volatility.',
    },
    {
      icon: <FaShieldAlt className="text-4xl text-blue-400" />,
      title: 'Non-Custodial Security',
      description: 'Your keys, your crypto. All operations transparent and verifiable on Abstract blockchain.',
    },
  ];

  return (
    <Section className="bg-gradient-to-b from-black to-gray-900">
      <AnimatedSection direction="fade">
        <div className="text-center mb-20">
          <span className="text-sm text-white/50 uppercase tracking-wider mb-4 block">The Solution</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Systematic Investing, <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Automated</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mt-4">
            Remove emotion. Add discipline. Let AI and smart contracts handle the execution.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {benefits.map((benefit, index) => (
          <AnimatedSection key={index} direction="up" delay={index * 0.15}>
            <div className="flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div className="flex-shrink-0 mt-1">{benefit.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
};
