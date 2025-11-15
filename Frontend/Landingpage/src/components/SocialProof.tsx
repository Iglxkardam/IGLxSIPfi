import React from 'react';
import { Section } from './Section';
import { AnimatedSection } from './AnimatedSection';
import { FaQuoteLeft } from 'react-icons/fa';

export const SocialProof: React.FC = () => {
  const stats = [
    { value: '2.5M+', label: 'Trading Volume' },
    { value: '500+', label: 'Active Users' },
    { value: '12%', label: 'Avg. Returns' },
    { value: '99.9%', label: 'Uptime' },
  ];

  const testimonials = [
    {
      name: 'Rahul M.',
      role: 'Early Adopter',
      content: 'Finally, a DCA platform that just works. No wallet hassle, clean interface, and AI actually helps.',
      avatar: 'R',
    },
    {
      name: 'Priya S.',
      role: 'Crypto Investor',
      content: 'The forced HODL feature saved me during the last dip. Best decision I made was enabling vault lock.',
      avatar: 'P',
    },
    {
      name: 'Amit K.',
      role: 'Tech Professional',
      content: 'Being able to verify every transaction on-chain gives me confidence. True transparency.',
      avatar: 'A',
    },
  ];

  return (
    <Section className="bg-gradient-to-b from-black to-gray-900">
      {/* Stats */}
      <AnimatedSection direction="fade">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-white/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection direction="fade">
        <div className="text-center mb-16">
          <span className="text-sm text-white/50 uppercase tracking-wider mb-4 block">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Users Say</span>
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <AnimatedSection key={index} direction="up" delay={index * 0.15}>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all h-full">
              <FaQuoteLeft className="text-2xl text-blue-400/50 mb-4" />
              <p className="text-white/80 mb-6 leading-relaxed text-sm italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-white/50 text-xs">{testimonial.role}</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
};
