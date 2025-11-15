import React, { useState } from 'react';
import { Section } from './Section';
import { AnimatedSection } from './AnimatedSection';
import { Button } from './Button';
import { FaRocket } from 'react-icons/fa';
import { ComingSoonModal } from './ComingSoonModal';

export const CTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
    setEmail('');
  };

  return (
    <Section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <AnimatedSection direction="fade">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Start Your DCA Journey Today
          </h2>
          
          <p className="text-xl md:text-2xl mb-10 text-white/90">
            Join early adopters building wealth with AI-powered strategies
          </p>

          <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-white/50 bg-white"
              />
              <Button type="submit" size="lg" className="bg-black text-white hover:bg-gray-900 font-semibold px-8">
                <FaRocket className="mr-2" />
                Get Started
              </Button>
            </div>
          </form>

          <div className="text-white/80 text-sm">
            🎉 Early access users get <span className="font-bold text-white">3 months free</span>
          </div>
        </div>
      </AnimatedSection>

      <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Section>
  );
};
