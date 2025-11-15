import React, { useEffect, useRef, useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  animate?: boolean;
}

export const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '', animate = true }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !animate) {
      if (containerRef.current) {
        containerRef.current.textContent = text;
      }
      return;
    }

    setIsAnimating(true);
    const glitches = '`┬íΓäó┬ú┬óΓê₧┬º┬╢ΓÇó┬¬┬║ΓÇôΓëá├Ñ├ƒΓêé╞Æ┬⌐╦ÖΓêå╦Ü┬¼ΓÇª├ªΓëê├ºΓêÜΓê½╦£┬╡ΓëñΓëÑ├╖/?ΓûæΓûÆΓûô<>/'.split('');
    const element = containerRef.current;
    
    // Split text into characters
    const chars = text.split('');
    element.innerHTML = '';
    
    // Create span for each character with staggered animation
    chars.forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.setAttribute('data-text', char);
      span.style.display = 'inline-block';
      span.style.position = 'relative';
      span.className = 'glitch-char';
      
      // Set CSS custom properties for animation
      const animationDuration = Math.random() * 0.5 + 0.3;
      span.style.setProperty('--count', String(animationDuration));
      span.style.animationDelay = `${index * 0.03}s`;
      
      // Set random glitch characters
      for (let g = 0; g < 10; g++) {
        span.style.setProperty(
          `--char-${g}`,
          `"${glitches[Math.floor(Math.random() * glitches.length)]}"`
        );
      }
      
      element.appendChild(span);
    });

    // Stop animation after completion
    const totalDuration = chars.length * 30 + 500; // 30ms per char + 500ms buffer
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, totalDuration);

    return () => {
      clearTimeout(timer);
      if (element) {
        element.textContent = text;
      }
    };
  }, [text, animate]);

  return (
    <div 
      ref={containerRef} 
      className={`${className} ${isAnimating ? 'animating' : ''}`}
      style={{ 
        display: 'inline-block',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word'
      }}
    >
      {text}
    </div>
  );
};
