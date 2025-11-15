import React from 'react';
import { Section } from './Section';
import { AnimatedSection } from './AnimatedSection';
import { FaCreditCard, FaComments, FaChartBar } from 'react-icons/fa';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: <FaCreditCard className="text-5xl text-blue-400" />,
      title: 'Connect & Fund',
      description: 'Sign in with email or wallet. Deposit USDC or onboard fiat via supported ramps.',
      detail: 'No seed phrases. Account abstraction handles custody.',
    },
    {
      number: '02',
      icon: <FaComments className="text-5xl text-purple-400" />,
      title: 'Define Strategy',
      description: 'Tell AI your investment plan in plain English. It creates optimized DCA parameters.',
      detail: '"Buy $100 BTC weekly when RSI < 40"',
    },
    {
      number: '03',
      icon: <FaChartBar className="text-5xl text-pink-400" />,
      title: 'Auto-Execute',
      description: 'Smart contracts execute trades automatically. AI monitors 24/7 and adjusts to market conditions.',
      detail: 'Non-custodial. Transparent. Verifiable on-chain.',
    },
  ];

  return (
    <Section id="how-it-works" className="bg-black">
      <AnimatedSection direction="fade">
        <div className="text-center mb-20">
          <span className="text-sm text-white/50 uppercase tracking-wider mb-4 block">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Start Trading in <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">3 Simple Steps</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mt-4">
            From signup to automated DCA in under 5 minutes
          </p>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8 relative">
        {/* Connection line */}
        <div className="hidden md:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>

        {steps.map((step, index) => (
          <AnimatedSection key={index} direction="up" delay={index * 0.2}>
            <div className="relative z-10 text-center h-full">
              <div className="mb-6 relative inline-block">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/20 flex items-center justify-center text-white/50 font-mono text-sm backdrop-blur-sm">
                  {step.number}
                </div>
              </div>
              
              <div className="mb-6 flex justify-center">{step.icon}</div>
              
              <h3 className="text-2xl font-bold text-white mb-3">
                {step.title}
              </h3>
              
              <p className="text-white/60 mb-4 leading-relaxed text-sm">
                {step.description}
              </p>
              
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <p className="text-white/40 text-xs italic">{step.detail}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
};
