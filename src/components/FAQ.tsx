import React, { useState } from 'react';
import { Section } from './Section';
import { AnimatedSection } from './AnimatedSection';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'What is SIP in crypto?',
      answer: 'SIP (Systematic Investment Plan) in crypto means investing a fixed amount at regular intervals (e.g., monthly). This strategy, also known as Dollar-Cost Averaging, helps reduce the risk of bad timing and removes emotional decision-making from investing.',
    },
    {
      question: 'Do I need a crypto wallet?',
      answer: 'No! IGL Finance uses Account Abstraction technology (powered by Abstract blockchain), which means you can invest without ever touching a crypto wallet, seed phrases, or MetaMask. We handle all the complexity behind the scenes.',
    },
    {
      question: 'What tokens can I invest in?',
      answer: 'Currently, we support major cryptocurrencies like Bitcoin (BTC), Ethereum (ETH), and select stablecoins. Our AI can recommend portfolio allocations based on your risk tolerance and investment goals.',
    },
    {
      question: 'Can I withdraw anytime?',
      answer: 'Yes! You can withdraw your funds anytime unless you opted for the "Forced HODL" feature with a time-lock. Time-locks are optional and help build investment discipline by preventing panic selling during market dips.',
    },
    {
      question: 'Is this available in India?',
      answer: 'Yes! IGL Finance is designed specifically for Indian investors. You can deposit funds in INR using credit cards, debit cards, UPI, or bank transfers. We handle currency conversion automatically.',
    },
    {
      question: 'How is this different from Coinbase recurring buy?',
      answer: 'Unlike Coinbase: (1) We use on-chain AI (not centralized GPT), (2) No wallet setup needed, (3) Natural language interface, (4) Optional forced HODL to build discipline, (5) Full transparency with all operations on-chain and auditable.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq">
      <AnimatedSection direction="fade">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Questions? We&apos;ve Got Answers.
          </h2>
        </div>
      </AnimatedSection>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <AnimatedSection key={index} direction="up" delay={index * 0.1}>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <span className="text-lg font-semibold text-dark pr-8">
                {faq.question}
              </span>
              {openIndex === index ? (
                <FaChevronUp className="text-primary flex-shrink-0" />
              ) : (
                <FaChevronDown className="text-primary flex-shrink-0" />
              )}
            </button>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
};
