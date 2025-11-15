// Utility functions for performance optimization
import { useCallback, useEffect, useRef } from 'react';

// Debounce function for API calls
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for scroll events
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Custom hook for debounced value
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = React.useState<T>(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Custom hook for throttled callback
export function useThrottle<T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): T {
  const throttledCallbackRef = useRef<T>();
  const lastRunRef = useRef<number>(Date.now());

  useEffect(() => {
    throttledCallbackRef.current = callback;
  }, [callback]);

  return useCallback(
    ((...args) => {
      const now = Date.now();
      if (now - lastRunRef.current >= delay) {
        throttledCallbackRef.current?.(...args);
        lastRunRef.current = now;
      }
    }) as T,
    [delay]
  );
}

// Detect low-end devices for performance adjustments
export function isLowEndDevice(): boolean {
  const navigator = window.navigator as any;
  
  // Check device memory (if available)
  if (navigator.deviceMemory && navigator.deviceMemory < 4) {
    return true;
  }

  // Check number of CPU cores
  if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
    return true;
  }

  // Check if mobile device
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
  return isMobile;
}

// Check network speed
export function getNetworkSpeed(): 'slow' | 'medium' | 'fast' {
  const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
  
  if (!connection) return 'medium';

  const effectiveType = connection.effectiveType;
  
  if (effectiveType === 'slow-2g' || effectiveType === '2g') return 'slow';
  if (effectiveType === '3g') return 'medium';
  return 'fast';
}

// Lazy load images with intersection observer
export function lazyLoadImage(img: HTMLImageElement): void {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLImageElement;
        target.src = target.dataset.src || '';
        target.classList.add('loaded');
        observer.unobserve(target);
      }
    });
  });

  observer.observe(img);
}

// Request idle callback wrapper
export function runWhenIdle(callback: () => void): void {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(callback);
  } else {
    setTimeout(callback, 1);
  }
}

// Memory usage monitor (for development)
export function monitorMemory(): void {
  if (process.env.NODE_ENV === 'development' && 'memory' in performance) {
    const memory = (performance as any).memory;
    console.log({
      usedJSHeapSize: `${(memory.usedJSHeapSize / 1048576).toFixed(2)} MB`,
      totalJSHeapSize: `${(memory.totalJSHeapSize / 1048576).toFixed(2)} MB`,
      jsHeapSizeLimit: `${(memory.jsHeapSizeLimit / 1048576).toFixed(2)} MB`,
    });
  }
}

// React import for hooks
import React from 'react';
