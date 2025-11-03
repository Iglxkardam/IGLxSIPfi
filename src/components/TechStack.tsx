import React from 'react';
import { Section } from './Section';
import { Card } from './Card';
import { AnimatedSection } from './AnimatedSection';

export const TechStack: React.FC = () => {
  const technologies = [
    {
      name: 'Abstract Blockchain',
      description: 'Account abstraction for walletless UX',
      logo: (
        <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" fill="#00D395"/>
          <path d="M35 55 L50 35 L65 55 L50 65 Z" fill="white" stroke="white" strokeWidth="2"/>
          <path d="M35 55 L50 45 L65 55" stroke="white" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      ),
      bgColor: 'bg-green-50',
    },
    {
      name: 'Galadriel AI',
      description: 'On-chain AI inference',
      logo: (
        <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" fill="#2563EB"/>
          <circle cx="35" cy="40" r="6" fill="#F472B6"/>
          <circle cx="65" cy="40" r="6" fill="#F472B6"/>
          <path d="M30 55 C35 45, 45 45, 50 50 C55 45, 65 45, 70 55" stroke="#F472B6" strokeWidth="3" fill="none" strokeLinecap="round"/>
          <circle cx="50" cy="65" r="4" fill="white"/>
        </svg>
      ),
      bgColor: 'bg-blue-50',
    },
    {
      name: 'Chainlink',
      description: 'Automated monthly execution',
      logo: (
        <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" fill="#375BD2"/>
          <path d="M35 30 L50 20 L65 30 L70 50 L65 70 L50 80 L35 70 L30 50 Z" fill="#2A5ADA" stroke="#375BD2" strokeWidth="2"/>
          <circle cx="40" cy="42" r="4" fill="#FFC107"/>
          <circle cx="50" cy="35" r="4" fill="#FFC107"/>
          <circle cx="60" cy="42" r="4" fill="#FFC107"/>
          <line x1="40" y1="42" x2="50" y2="35" stroke="#FFC107" strokeWidth="2"/>
          <line x1="50" y1="35" x2="60" y2="42" stroke="#FFC107" strokeWidth="2"/>
        </svg>
      ),
      bgColor: 'bg-blue-50',
    },
    {
      name: 'Uniswap',
      description: 'Decentralized swaps',
      logo: (
        <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" fill="#FFE9F3"/>
          <path d="M 35 45 Q 35 25 50 30 Q 52 28 55 35 L 58 45" stroke="#FF007A" strokeWidth="5" fill="none" strokeLinecap="round"/>
          <circle cx="35" cy="45" r="8" fill="#FF007A"/>
          <circle cx="58" cy="45" r="6" fill="#FF007A"/>
          <path d="M 40 55 Q 50 70 60 55" stroke="#FF007A" strokeWidth="4" fill="none" strokeLinecap="round"/>
          <circle cx="40" cy="55" r="6" fill="#FF007A"/>
          <circle cx="60" cy="55" r="8" fill="#FF007A"/>
        </svg>
      ),
      bgColor: 'bg-pink-50',
    },
  ];

  return (
    <Section id="tech-stack" className="bg-gray-50">
      <AnimatedSection direction="fade">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Powered by Best-in-Class Web3 Infrastructure
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-4 gap-6">
        {technologies.map((tech, index) => (
          <AnimatedSection key={index} direction="up" delay={index * 0.15}>
            <Card className="text-center group h-full">
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {tech.logo}
              </div>
              
              <h3 className="text-xl font-bold text-dark mb-2">
                {tech.name}
              </h3>
              
              <p className="text-sm text-gray-600">
                {tech.description}
              </p>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
};
