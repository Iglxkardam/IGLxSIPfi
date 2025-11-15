import React from 'react';

interface IGLLogoProps {
  className?: string;
  size?: number;
}

export const IGLLogo: React.FC<IGLLogoProps> = ({ className = '', size = 64 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Circle */}
      <circle 
        cx="100" 
        cy="100" 
        r="80" 
        stroke="url(#blueGradient)" 
        strokeWidth="3" 
        fill="none"
      />
      
      {/* Triangle */}
      <path 
        d="M 100 30 L 160 160 L 40 160 Z" 
        stroke="url(#blueGradient)" 
        strokeWidth="3" 
        fill="none"
      />
      
      {/* Lock */}
      <rect 
        x="90" 
        y="100" 
        width="20" 
        height="25" 
        rx="2"
        stroke="url(#blueGradient)" 
        strokeWidth="2" 
        fill="none"
      />
      <path 
        d="M 87 100 L 87 90 Q 87 82 100 82 Q 113 82 113 90 L 113 100" 
        stroke="url(#blueGradient)" 
        strokeWidth="2" 
        fill="none"
      />
      
      {/* Curved lines */}
      <path 
        d="M 30 70 Q 50 100 30 130" 
        stroke="url(#blueGradient)" 
        strokeWidth="2.5" 
        fill="none"
        strokeLinecap="round"
      />
      <path 
        d="M 170 70 Q 150 100 170 130" 
        stroke="url(#blueGradient)" 
        strokeWidth="2.5" 
        fill="none"
        strokeLinecap="round"
      />
      <path 
        d="M 50 40 Q 100 50 150 40" 
        stroke="url(#blueGradient)" 
        strokeWidth="2.5" 
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Sun icon */}
      <circle 
        cx="175" 
        cy="35" 
        r="8" 
        stroke="#FCD34D" 
        strokeWidth="2" 
        fill="none"
      />
      <line x1="175" y1="20" x2="175" y2="25" stroke="#FCD34D" strokeWidth="2" strokeLinecap="round"/>
      <line x1="175" y1="45" x2="175" y2="50" stroke="#FCD34D" strokeWidth="2" strokeLinecap="round"/>
      <line x1="160" y1="35" x2="165" y2="35" stroke="#FCD34D" strokeWidth="2" strokeLinecap="round"/>
      <line x1="185" y1="35" x2="190" y2="35" stroke="#FCD34D" strokeWidth="2" strokeLinecap="round"/>
      
      {/* Gradient definition */}
      <defs>
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#93C5FD" />
        </linearGradient>
      </defs>
    </svg>
  );
};
