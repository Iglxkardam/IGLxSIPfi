import React from 'react';
import { Section } from './Section';
import { AnimatedSection } from './AnimatedSection';
import { FaFrown, FaSadCry, FaRedoAlt } from 'react-icons/fa';

export const Problem: React.FC = () => {
  const problems = [
    {
      icon: <FaFrown className="text-5xl text-red-400/80" />,
      title: 'Emotional Trading',
      description: 'FOMO drives buying at peaks. Fear triggers panic selling at lows. Human psychology works against profitable trading.',
    },
    {
      icon: <FaSadCry className="text-5xl text-red-400/80" />,
      title: 'Timing the Market',
      description: 'Even professionals struggle to predict short-term movements. Retail traders lose 80% trying to time entries and exits.',
    },
    {
      icon: <FaRedoAlt className="text-5xl text-red-400/80" />,
      title: 'Inconsistent Strategy',
      description: 'No systematic approach. Random buy/sell decisions. Poor risk management. The recipe for capital destruction.',
    },
  ];

  return (
    <Section className="bg-gradient-to-b from-black via-gray-900 to-black">
      <AnimatedSection direction="fade">
        <div className="text-center mb-20">
          <span className="text-sm text-white/50 uppercase tracking-wider mb-4 block">The Challenge</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why 90% of Traders <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Fail</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mt-4">
            Traditional trading relies on emotion and guesswork. The market punishes this approach relentlessly.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6">
        {problems.map((problem, index) => (
          <AnimatedSection key={index} direction="up" delay={index * 0.2}>
            <div className="text-center p-8 rounded-2xl bg-red-500/5 border border-red-500/20 h-full backdrop-blur-sm">
              <div className="mb-6 flex justify-center">{problem.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">
                {problem.title}
              </h3>
              <p className="text-white/60 leading-relaxed text-sm">
                {problem.description}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
};
