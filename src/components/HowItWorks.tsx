import React from 'react';
import { Section } from './Section';
import { Card } from './Card';
import { AnimatedSection } from './AnimatedSection';
import { FaMoneyBillWave, FaRobot, FaChartLine, FaCreditCard, FaComments, FaChartBar } from 'react-icons/fa';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '1',
      icon: <FaMoneyBillWave className="text-6xl text-accent" />,
      title: 'Deposit',
      description: 'Deposit ₹10,000 INR with credit card or bank transfer',
      visual: <FaCreditCard className="text-7xl text-primary" />,
    },
    {
      number: '2',
      icon: <FaRobot className="text-6xl text-secondary" />,
      title: 'Tell AI Your Plan',
      description: 'Natural language: "Invest ₹1,000 in BTC monthly"',
      visual: <FaComments className="text-7xl text-secondary" />,
    },
    {
      number: '3',
      icon: <FaChartLine className="text-6xl text-accent" />,
      title: 'Relax & Grow',
      description: 'Smart contracts automate everything. Watch your portfolio grow.',
      visual: <FaChartBar className="text-7xl text-accent" />,
    },
  ];

  return (
    <Section id="how-it-works" className="bg-gradient-to-b from-white to-blue-50">
      <AnimatedSection direction="fade">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            3 Steps to Start Building Wealth
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8 relative">
        {/* Connection lines for desktop */}
        <div className="hidden md:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-30 z-0"></div>

        {steps.map((step, index) => (
          <AnimatedSection key={index} direction="up" delay={index * 0.2}>
            <Card className="relative z-10 text-center h-full">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-xl shadow-lg">
              {step.number}
            </div>
            
            <div className="mb-4 mt-4 flex justify-center">{step.icon}</div>
            
            <h3 className="text-2xl font-bold text-dark mb-3">
              {step.title}
            </h3>
            
            <p className="text-gray-600 mb-6">
              {step.description}
            </p>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 flex justify-center">
              {step.visual}
            </div>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
};
