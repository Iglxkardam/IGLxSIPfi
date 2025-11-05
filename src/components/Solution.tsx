import React from 'react';
import { Section } from './Section';
import { Card } from './Card';
import { AnimatedSection } from './AnimatedSection';
import { FaCheckCircle, FaCog, FaWallet, FaChartLine, FaShieldAlt } from 'react-icons/fa';

export const Solution: React.FC = () => {
  const benefits = [
    {
      icon: <FaCog className="text-4xl text-primary" />,
      title: 'Set it & forget it',
      description: 'Automate your investments and let the system work for you',
    },
    {
      icon: <FaWallet className="text-4xl text-secondary" />,
      title: 'No wallet complexity',
      description: 'No MetaMask, no seed phrases, no technical hassles',
    },
    {
      icon: <FaChartLine className="text-4xl text-accent" />,
      title: 'Dollar-cost averaging',
      description: 'Invest fixed amounts regularly to reduce timing risk',
    },
    {
      icon: <FaShieldAlt className="text-4xl text-primary" />,
      title: 'Forced HODL (optional lock)',
      description: 'Lock funds to prevent emotional panic selling',
    },
  ];

  return (
    <Section>
      <AnimatedSection direction="fade">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Discipline Beats Emotion.<br />
            <span className="text-gradient">Automation Beats Discipline.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            IGL SIPfi automates what mutual fund SIPs do for stocks - but for crypto
          </p>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Flow illustration */}
        <AnimatedSection direction="left" delay={0.2} className="order-2 md:order-1">
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="text-center space-y-6 py-8">
              <div className="flex items-center justify-center gap-4">
                <div className="text-4xl">👤</div>
                <div className="text-2xl">→</div>
                <div className="text-4xl">🤖</div>
              </div>
              <div className="text-2xl font-bold">↓</div>
              <div className="text-4xl">📝</div>
              <div className="text-sm text-gray-600">Smart Contract</div>
              <div className="text-2xl font-bold">↓</div>
              <div className="text-4xl">💰</div>
              <div className="text-sm text-gray-600">Monthly Investment</div>
              <div className="text-2xl font-bold">↓</div>
              <div className="text-4xl">📈</div>
              <div className="text-sm font-bold text-accent">Growth!</div>
            </div>
          </Card>
        </AnimatedSection>

        {/* Right: Benefits */}
        <div className="order-1 md:order-2 space-y-6">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={index} direction="right" delay={0.3 + index * 0.15}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">{benefit.icon}</div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <FaCheckCircle className="text-accent" />
                    <h3 className="text-xl font-bold text-dark">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </Section>
  );
};
