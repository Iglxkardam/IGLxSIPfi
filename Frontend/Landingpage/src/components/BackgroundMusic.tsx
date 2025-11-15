import React, { useEffect, useRef, useState } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

export const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set initial volume
    audio.volume = 0.3;

    // Auto-play on user interaction
    const handleUserInteraction = () => {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.log('Audio autoplay prevented:', error);
      });
      
      // Remove listeners after first interaction
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };

    // Add listeners for user interaction
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, []);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      audio.muted = false;
      setIsMuted(false);
    } else {
      audio.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <>
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src="/background-music.mp3"
        loop
        preload="auto"
      />

      {/* Music Control Button */}
      {isPlaying && (
        <button
          onClick={toggleMute}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-lg shadow-purple-500/50 transition-all duration-300 transform hover:scale-110 active:scale-95 group"
          aria-label={isMuted ? 'Unmute music' : 'Mute music'}
        >
          {isMuted ? (
            <FaVolumeMute className="text-white text-xl" />
          ) : (
            <FaVolumeUp className="text-white text-xl" />
          )}
          
          {/* Pulsing ring animation when unmuted */}
          {!isMuted && (
            <span className="absolute inset-0 rounded-full bg-purple-500/50 animate-ping opacity-75"></span>
          )}
        </button>
      )}
    </>
  );
};
