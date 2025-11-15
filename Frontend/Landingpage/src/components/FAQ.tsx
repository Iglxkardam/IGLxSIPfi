import React, { useState } from 'react';
import { Section } from './Section';
import { AnimatedSection } from './AnimatedSection';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'What is DCA and why does it work?',
      answer: 'Dollar-Cost Averaging (DCA) means investing fixed amounts at regular intervals. This removes the need to time the market and reduces the impact of volatility by spreading purchases across different price points.',
    },
    {
      question: 'Do I need a crypto wallet?',
      answer: 'No. We use Abstract\'s account abstraction technology. Sign in with email or social accounts - we handle the complexity of keys and wallets behind the scenes.',
    },
    {
      question: 'How does the AI make decisions?',
      answer: 'Galadriel AI runs directly on-chain, analyzing market indicators like RSI, moving averages, and volume. It adjusts your DCA entry points for optimal execution - all transparent and verifiable.',
    },
    {
      question: 'Can I withdraw my funds anytime?',
      answer: 'Yes, unless you enable optional vault locking for forced discipline. Vault locks are entirely optional and help prevent emotional panic selling during market downturns.',
    },
    {
      question: 'What are the fees?',
      answer: 'We charge a small platform fee (2% on profits) plus standard blockchain gas fees. Early access users get 3 months free. No hidden charges - all fees transparent on-chain.',
    },
    {
      question: 'Is my investment safe?',
      answer: 'Your funds are held in non-custodial smart contracts. You maintain full control. All code is audited and open-source. Every transaction is verifiable on the Abstract blockchain explorer.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" className="bg-black">
      <AnimatedSection direction="fade">
        <div className="text-center mb-20">
          <span className="text-sm text-white/50 uppercase tracking-wider mb-4 block">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Common <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Questions</span>
          </h2>
        </div>
      </AnimatedSection>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <AnimatedSection key={index} direction="up" delay={index * 0.05}>
            <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm hover:bg-white/10 transition-all">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex justify-between items-center gap-4"
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-blue-400">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-white/60 leading-relaxed text-sm border-t border-white/10 pt-4">
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
