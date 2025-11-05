import React, { useState } from 'react';
import { Section } from './Section';
import { AnimatedSection } from './AnimatedSection';
import { Button } from './Button';
import { FaGift } from 'react-icons/fa';
import { ComingSoonModal } from './ComingSoonModal';

export const CTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Show coming soon modal instead
    setIsModalOpen(true);
    setEmail('');
  };

  return (
    <Section gradient className="text-white">
      <AnimatedSection direction="fade">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Invest Smarter?
          </h2>
          
          <p className="text-xl md:text-2xl mb-10 opacity-90">
            Join the waitlist for early access
          </p>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 rounded-lg text-dark text-lg focus:outline-none focus:ring-4 focus:ring-accent"
            />
            <Button type="submit" variant="primary" size="lg">
              Join Waitlist
            </Button>
          </div>
        </form>

          <div className="flex items-center justify-center gap-2 text-lg opacity-90">
            <FaGift className="text-accent text-2xl" />
            <span>Early users get 3 months fee-free</span>
          </div>
        </div>
      </AnimatedSection>

      {/* Coming Soon Modal */}
      <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Section>
  );
};
