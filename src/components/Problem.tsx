import React from 'react';
import { Section } from './Section';
import { Card } from './Card';
import { AnimatedSection } from './AnimatedSection';
import { FaFrown, FaSadCry, FaRedoAlt } from 'react-icons/fa';

export const Problem: React.FC = () => {
  const problems = [
    {
      icon: <FaFrown className="text-6xl text-red-500" />,
      title: 'Buy High (FOMO)',
      description: 'Everyone is talking about crypto. You buy at the peak. Price crashes next day.',
    },
    {
      icon: <FaSadCry className="text-6xl text-red-500" />,
      title: 'Panic Sell',
      description: 'Market dips 20%. Fear takes over. You sell at a loss to protect your investment.',
    },
    {
      icon: <FaRedoAlt className="text-6xl text-red-500" />,
      title: 'Repeat & Lose',
      description: 'The cycle continues. Emotions override logic. Your portfolio bleeds money.',
    },
  ];

  return (
    <Section className="bg-gray-50">
      <AnimatedSection direction="fade">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Why Most Crypto Investors Lose Money
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mt-4"></div>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8">
        {problems.map((problem, index) => (
          <AnimatedSection key={index} direction="up" delay={index * 0.2}>
            <Card className="text-center border-l-4 border-red-500 h-full">
              <div className="mb-4 flex justify-center">{problem.icon}</div>
              <h3 className="text-2xl font-bold text-red-600 mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
};
