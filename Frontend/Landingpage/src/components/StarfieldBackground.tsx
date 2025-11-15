import React, { useEffect, useRef } from 'react';

interface StarfieldBackgroundProps {
  optimized?: boolean; // If true, uses reduced star count for better performance
}

export const StarfieldBackground: React.FC<StarfieldBackgroundProps> = ({ optimized = true }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const canvasEl = canvas as HTMLCanvasElement;
    const ctx = context as CanvasRenderingContext2D;

    // Configurable values
    const STAR_COLOR = '#fff';
    const STAR_SIZE = 5;
    const STAR_MIN_SCALE = 0.2;
    const OVERFLOW_THRESHOLD = 50;
    let scale = window.devicePixelRatio || 1;

    let width = 0;
    let height = 0;

    let stars: { x: number; y: number; z: number }[] = [];

    let pointerX: number | null = null;
    let pointerY: number | null = null;

    const velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 };

    let touchInput = false;

    // Star count based on optimization setting
    const STAR_COUNT = () => optimized 
      ? Math.min((window.innerWidth + window.innerHeight) / 12, 150) // Optimized: fewer stars for better performance
      : (window.innerWidth + window.innerHeight) / 8; // Full quality: more stars

    function generate() {
      stars = [];
      for (let i = 0; i < STAR_COUNT(); i++) {
        stars.push({ x: 0, y: 0, z: STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE) });
      }
    }

    function placeStar(star: { x: number; y: number; z: number }) {
      star.x = Math.random() * width;
      star.y = Math.random() * height;
    }

    function recycleStar(star: { x: number; y: number; z: number }) {
      let direction = 'z';

      const vx = Math.abs(velocity.x), vy = Math.abs(velocity.y);

      if (vx > 1 || vy > 1) {
        let axis: 'h' | 'v';

        if (vx > vy) {
          axis = Math.random() < vx / (vx + vy) ? 'h' : 'v';
        } else {
          axis = Math.random() < vy / (vx + vy) ? 'v' : 'h';
        }

        if (axis === 'h') {
          direction = velocity.x > 0 ? 'l' : 'r';
        } else {
          direction = velocity.y > 0 ? 't' : 'b';
        }
      }

      star.z = STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE);

      if (direction === 'z') {
        star.z = 0.1;
        star.x = Math.random() * width;
        star.y = Math.random() * height;
      } else if (direction === 'l') {
        star.x = -OVERFLOW_THRESHOLD;
        star.y = height * Math.random();
      } else if (direction === 'r') {
        star.x = width + OVERFLOW_THRESHOLD;
        star.y = height * Math.random();
      } else if (direction === 't') {
        star.x = width * Math.random();
        star.y = -OVERFLOW_THRESHOLD;
      } else if (direction === 'b') {
        star.x = width * Math.random();
        star.y = height + OVERFLOW_THRESHOLD;
      }
    }

    function resize() {
      scale = window.devicePixelRatio || 1;
      width = window.innerWidth * scale;
      height = window.innerHeight * scale;

      canvasEl.width = width;
      canvasEl.height = height;

      stars.forEach(placeStar);
    }

    function update() {
      velocity.tx *= 0.96;
      velocity.ty *= 0.96;

      velocity.x += (velocity.tx - velocity.x) * 0.8;
      velocity.y += (velocity.ty - velocity.y) * 0.8;

      for (const star of stars) {
        star.x += velocity.x * star.z;
        star.y += velocity.y * star.z;

        star.x += (star.x - width / 2) * velocity.z * star.z;
        star.y += (star.y - height / 2) * velocity.z * star.z;
        star.z += velocity.z;

        if (
          star.x < -OVERFLOW_THRESHOLD ||
          star.x > width + OVERFLOW_THRESHOLD ||
          star.y < -OVERFLOW_THRESHOLD ||
          star.y > height + OVERFLOW_THRESHOLD
        ) {
          recycleStar(star);
        }
      }
    }

    function render() {
      ctx.clearRect(0, 0, width, height);

      for (const star of stars) {
        ctx.beginPath();
        ctx.lineCap = 'round';
        ctx.lineWidth = STAR_SIZE * star.z * scale;
        ctx.globalAlpha = 0.5 + 0.5 * Math.random();
        ctx.strokeStyle = STAR_COLOR;

        ctx.beginPath();
        ctx.moveTo(star.x, star.y);

        let tailX = velocity.x * 2;
        let tailY = velocity.y * 2;

        if (Math.abs(tailX) < 0.1) tailX = 0.5;
        if (Math.abs(tailY) < 0.1) tailY = 0.5;

        ctx.lineTo(star.x + tailX, star.y + tailY);

        ctx.stroke();
      }
    }

    function step() {
      update();
      render();
      rafId = requestAnimationFrame(step);
    }

    function movePointer(x: number, y: number) {
      if (typeof pointerX === 'number' && typeof pointerY === 'number') {
        const ox = x - pointerX;
        const oy = y - pointerY;

        velocity.tx = velocity.tx + (ox / (80 * scale)) * (touchInput ? 1 : -1);
        velocity.ty = velocity.ty + (oy / (80 * scale)) * (touchInput ? 1 : -1);
      }

      pointerX = x;
      pointerY = y;
    }

    // Throttle mouse movement updates for better performance
    let mouseMoveTimeout: number | undefined;
    function onMouseMove(e: MouseEvent) {
      touchInput = false;
      if (!mouseMoveTimeout) {
        mouseMoveTimeout = window.setTimeout(() => {
          movePointer(e.clientX, e.clientY);
          mouseMoveTimeout = undefined;
        }, 16); // ~60fps
      }
    }

    function onTouchMove(e: TouchEvent) {
      touchInput = true;
      if (e.touches && e.touches[0]) {
        if (!mouseMoveTimeout) {
          mouseMoveTimeout = window.setTimeout(() => {
            if (e.touches && e.touches[0]) {
              movePointer(e.touches[0].clientX, e.touches[0].clientY);
            }
            mouseMoveTimeout = undefined;
          }, 16);
        }
      }
      e.preventDefault();
    }

    function onMouseLeave() {
      pointerX = null;
      pointerY = null;
    }

    // Init
    generate();
    resize();

    let rafId = requestAnimationFrame(step);

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onMouseLeave);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onMouseLeave);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none'
      }}
      aria-hidden="true"
    />
  );
};
