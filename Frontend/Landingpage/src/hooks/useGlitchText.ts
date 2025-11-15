import { useEffect } from 'react';

export const useGlitchText = (elementRef: React.RefObject<HTMLElement>, trigger: boolean) => {
  useEffect(() => {
    if (!elementRef.current || !trigger) return;

    const glitches = '`┬íΓäó┬ú┬óΓê₧┬º┬╢ΓÇó┬¬┬║ΓÇôΓëá├Ñ├ƒΓêé╞Æ┬⌐╦ÖΓêå╦Ü┬¼ΓÇª├ªΓëê├ºΓêÜΓê½╦£┬╡ΓëñΓëÑ├╖/?ΓûæΓûÆΓûô<>/'.split('');
    const element = elementRef.current;
    const text = element.textContent || '';
    
    // Split text into characters
    const chars = text.split('');
    element.innerHTML = '';
    
    // Create span for each character
    chars.forEach((char) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.display = 'inline-block';
      span.style.position = 'relative';
      span.className = 'glitch-char';
      
      // Set CSS custom properties for animation
      span.style.setProperty('--count', String(Math.random() * 5 + 1));
      
      // Set random glitch characters
      for (let g = 0; g < 10; g++) {
        span.style.setProperty(
          `--char-${g}`,
          `"${glitches[Math.floor(Math.random() * glitches.length)]}"`
        );
      }
      
      element.appendChild(span);
    });

    // Cleanup
    return () => {
      if (element) {
        element.textContent = text;
      }
    };
  }, [elementRef, trigger]);
};
