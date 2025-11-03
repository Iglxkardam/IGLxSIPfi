import React, { useState } from 'react';
import { Section } from './Section';
import { Card } from './Card';
import { AnimatedSection } from './AnimatedSection';
import { FaLinkedin, FaHammer } from 'react-icons/fa';
import { Button } from './Button';
import { ComingSoonModal } from './ComingSoonModal';

export const SocialProof: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Section className="bg-gradient-to-br from-blue-50 to-purple-50">
      <AnimatedSection direction="fade">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Building in Public
          </h2>
        </div>
      </AnimatedSection>

      <AnimatedSection direction="up" delay={0.3}>
        <Card gradient className="max-w-3xl mx-auto text-center">
        <div className="mb-6 flex justify-center">
          <FaHammer className="text-6xl" />
        </div>
        
        <h3 className="text-3xl font-bold mb-4">Currently in Development</h3>
        
        <p className="text-xl mb-4 opacity-90">
          Testnet launching: November 2025
        </p>
        
        <p className="text-lg mb-8 opacity-80">
          Follow the journey on LinkedIn
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://www.linkedin.com/in/iglxkardam/" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" size="lg">
              <FaLinkedin className="mr-2 text-xl" />
              Follow Updates
            </Button>
          </a>
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => setIsModalOpen(true)}
          >
            Learn More
          </Button>
        </div>
        </Card>
      </AnimatedSection>

      {/* Coming Soon Modal */}
      <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Section>
  );
};
