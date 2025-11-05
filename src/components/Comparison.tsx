import React from 'react';
import { Section } from './Section';
import { AnimatedSection } from './AnimatedSection';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

export const Comparison: React.FC = () => {
  const comparisons = [
    {
      feature: 'Wallet Setup',
      traditional: false,
      iglFinance: true,
      traditionalText: 'Required',
      iglText: 'Not needed',
    },
    {
      feature: 'Discipline',
      traditional: false,
      iglFinance: true,
      traditionalText: 'Manual',
      iglText: 'Automated',
    },
    {
      feature: 'Complexity',
      traditional: false,
      iglFinance: true,
      traditionalText: 'High',
      iglText: 'Simple',
    },
    {
      feature: 'Emotional Trading',
      traditional: false,
      iglFinance: true,
      traditionalText: 'Yes',
      iglText: 'Prevented',
    },
    {
      feature: 'Indian Rupees',
      traditional: 'partial',
      iglFinance: true,
      traditionalText: 'Sometimes',
      iglText: 'Native',
    },
  ];

  return (
    <Section>
      <AnimatedSection direction="fade">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            IGL SIPfi vs Traditional Exchanges
          </h2>
        </div>
      </AnimatedSection>

      <AnimatedSection direction="up" delay={0.3}>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-primary text-white font-bold">
              <div>Feature</div>
              <div className="text-center">Traditional</div>
              <div className="text-center">IGL SIPfi</div>
            </div>

            {/* Rows */}
            {comparisons.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 gap-4 p-6 ${
                index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
              }`}
            >
              <div className="font-semibold text-dark">{item.feature}</div>
              
              <div className="text-center flex flex-col items-center gap-2">
                {item.traditional === false ? (
                  <>
                    <FaTimesCircle className="text-2xl text-red-500" />
                    <span className="text-sm text-gray-600">{item.traditionalText}</span>
                  </>
                ) : item.traditional === 'partial' ? (
                  <>
                    <span className="text-2xl">🟡</span>
                    <span className="text-sm text-gray-600">{item.traditionalText}</span>
                  </>
                ) : (
                  <>
                    <FaCheckCircle className="text-2xl text-accent" />
                    <span className="text-sm text-gray-600">{item.traditionalText}</span>
                  </>
                )}
              </div>
              
              <div className="text-center flex flex-col items-center gap-2">
                {item.iglFinance === true ? (
                  <>
                    <FaCheckCircle className="text-2xl text-accent" />
                    <span className="text-sm text-gray-600">{item.iglText}</span>
                  </>
                ) : (
                  <>
                    <FaTimesCircle className="text-2xl text-red-500" />
                    <span className="text-sm text-gray-600">{item.iglText}</span>
                  </>
                )}
              </div>
            </div>
          ))}
          </div>
        </div>
      </AnimatedSection>
    </Section>
  );
};
