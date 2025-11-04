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

  useEffect(() => {
    isMountedRef.current = true;
    
    // Reset state when text changes
    setDisplayedText('');
    setIsTypingComplete(false);

    const words = text.split(' ');
    let currentWordIndex = 0;

    const typeNextWord = () => {
      if (!isMountedRef.current) return;
      
      if (currentWordIndex < words.length) {
        setDisplayedText(prev => {
          const separator = prev ? ' ' : '';
          return prev + separator + words[currentWordIndex];
        });
        currentWordIndex++;
        setTimeout(typeNextWord, speed);
      } else {
        setIsTypingComplete(true);
        if (onComplete) {
          onComplete();
        }
      }
    };

    // Start typing after a brief delay
    const startTimeout = setTimeout(typeNextWord, 100);

    return () => {
      isMountedRef.current = false;
      clearTimeout(startTimeout);
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
