import React, { useEffect, useRef, useState } from 'react';

interface CustomCursorProps {
  theme?: 'landing' | 'app';
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ theme = 'app' }) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const mouseRef = useRef({ x: 0, y: 0 });
  const oldPosRef = useRef({ x: 0, y: 0 });
  const prevAngleRef = useRef(0);

  // Theme colors
  const themeColors = {
    landing: {
      gradient: ['#8B5CF6', '#3B82F6', '#1E40AF'], // Purple to Blue
      lightning: ['#8B5CF6', '#6366F1', '#3B82F6'], // Purple lightning
      glow: '#8B5CF6'
    },
    app: {
      gradient: ['#10b981', '#3b82f6', '#8b5cf6'], // Emerald to Purple
      lightning: ['#7C3AED', '#2DD4BF', '#10B981'], // Purple-Teal-Emerald
      glow: '#3b82f6'
    }
  };

  const colors = themeColors[theme];

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';
    // Hide cursor on all interactive elements
    const style = document.createElement('style');
    style.innerHTML = `
      * {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    const calculateAngle = (
      prevPos: { x: number; y: number },
      newPos: { x: number; y: number }
    ): number => {
      const radians = Math.atan2(
        newPos.x - prevPos.x,
        -(newPos.y - prevPos.y)
      );
      const degree = radians * (180 / Math.PI);
      
      if (newPos.x - prevPos.x === 0 || newPos.y - prevPos.y === 0) {
        return prevAngleRef.current;
      }
      
      return degree;
    };

    const updateCursor = (newPos: { x: number; y: number }, angle: number) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${newPos.x}px`;
        cursorRef.current.style.top = `${newPos.y}px`;
        cursorRef.current.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.pageX, y: e.pageY };
      
      const degreesToRotate = calculateAngle(oldPosRef.current, mouseRef.current);
      prevAngleRef.current = degreesToRotate;
      
      updateCursor(mouseRef.current, degreesToRotate);
      oldPosRef.current = { x: mouseRef.current.x, y: mouseRef.current.y };
      
      // Show cursor on first move
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const handleMouseDown = () => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 300);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      // Restore default cursor
      document.body.style.cursor = 'auto';
      if (style && style.parentNode) {
        document.head.removeChild(style);
      }
      // Remove cursor: none from all elements
      const resetStyle = document.createElement('style');
      resetStyle.innerHTML = `
        * {
          cursor: auto !important;
        }
      `;
      document.head.appendChild(resetStyle);
      setTimeout(() => {
        if (resetStyle && resetStyle.parentNode) {
          document.head.removeChild(resetStyle);
        }
      }, 100);
      
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <div
      ref={cursorRef}
      className={`cursor fixed pointer-events-none z-[9999] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        width: '40px',
        height: '40px',
        willChange: 'transform',
      }}
    >
      {/* Click effect - Lightning rings */}
      {isClicked && (
        <>
          <div className="absolute inset-0 animate-ping">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="20"
                cy="20"
                r="18"
                stroke="url(#lightningGradient)"
                strokeWidth="3"
                fill="none"
                opacity="0.8"
              />
            </svg>
          </div>
          <div className="absolute inset-0 animate-ping" style={{ animationDelay: '0.05s' }}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="20"
                cy="20"
                r="15"
                stroke="url(#lightningGradient)"
                strokeWidth="2"
                fill="none"
                opacity="0.6"
              />
            </svg>
          </div>
        </>
      )}

      {/* Cursor design - Arrow/Pointer shape */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`transition-transform duration-150 ${isClicked ? 'scale-90' : 'scale-100'}`}
      >
        {/* Outer glow */}
        <circle
          cx="20"
          cy="20"
          r="18"
          fill="url(#cursorGlow)"
          opacity={isClicked ? "0.8" : "0.3"}
          className="transition-opacity duration-150"
        />
        
        {/* Click lightning effect */}
        {isClicked && (
          <>
            <circle
              cx="20"
              cy="20"
              r="15"
              stroke="url(#lightningGradient)"
              strokeWidth="2"
              fill="none"
              opacity="0.9"
            />
            <circle
              cx="20"
              cy="20"
              r="12"
              stroke="url(#lightningGradient)"
              strokeWidth="1.5"
              fill="none"
              opacity="0.7"
            />
          </>
        )}
        
        {/* Main cursor shape - arrow pointer */}
        <path
          d="M20 5 L20 35 M20 5 L15 12 M20 5 L25 12"
          stroke="url(#cursorGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Center dot */}
        <circle
          cx="20"
          cy="20"
          r={isClicked ? "4" : "3"}
          fill="url(#cursorGradient)"
          className="transition-all duration-150"
        />
        
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="cursorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.gradient[0]} />
            <stop offset="50%" stopColor={colors.gradient[1]} />
            <stop offset="100%" stopColor={colors.gradient[2]} />
          </linearGradient>
          <linearGradient id="lightningGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.lightning[0]} />
            <stop offset="50%" stopColor={colors.lightning[1]} />
            <stop offset="100%" stopColor={colors.lightning[2]} />
          </linearGradient>
          <radialGradient id="cursorGlow">
            <stop offset="0%" stopColor={colors.glow} stopOpacity="0.6" />
            <stop offset="100%" stopColor={colors.gradient[2]} stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};
