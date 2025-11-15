import React, { useState, useEffect, useRef } from 'react';

interface TypingTextProps {
  text: string;
  className?: string;
  speed?: number; // milliseconds per word
  onComplete?: () => void;
}

export const TypingText: React.FC<TypingTextProps> = ({ 
  text, 
  className = '', 
  speed = 100,
  onComplete 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const isMountedRef = useRef(true);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    isMountedRef.current = true;
    
    // Reset state when text changes
    setDisplayedText('');
    setIsTypingComplete(false);

    const words = text.split(' ');
    let currentWordIndex = 0;
    let lastUpdateTime = performance.now();

    const typeNextWord = (currentTime: number) => {
      if (!isMountedRef.current) return;
      
      // Throttle updates based on speed
      if (currentTime - lastUpdateTime >= speed) {
        if (currentWordIndex < words.length) {
          setDisplayedText(prev => {
            const separator = prev ? ' ' : '';
            return prev + separator + words[currentWordIndex];
          });
          currentWordIndex++;
          lastUpdateTime = currentTime;
        } else {
          setIsTypingComplete(true);
          if (onComplete) {
            onComplete();
          }
          return;
        }
      }
      
      // Continue animation
      if (currentWordIndex < words.length) {
        animationFrameRef.current = requestAnimationFrame(typeNextWord);
      }
    };

    // Start typing with requestAnimationFrame for better performance
    animationFrameRef.current = requestAnimationFrame(typeNextWord);

    return () => {
      isMountedRef.current = false;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [text, speed, onComplete]);

  // Show typing animation
  return (
    <span className={className}>
      {displayedText}
      {!isTypingComplete && (
        <span className="inline-block w-0.5 h-4 bg-emerald-400 ml-1 animate-pulse" style={{ verticalAlign: 'middle' }} />
      )}
    </span>
  );
};
