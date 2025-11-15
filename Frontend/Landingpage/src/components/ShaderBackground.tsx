
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ShaderBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const uniformsRef = useRef<any>();

  useEffect(() => {
    let camera: THREE.Camera;
    let scene: THREE.Scene;
    let renderer: THREE.WebGLRenderer;
    let uniforms: any;
    let texture: THREE.Texture;
    const container = containerRef.current;
    if (!container) return;

    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin('anonymous');
    loader.load(
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/982762/noise.png',
      function (tex: THREE.Texture) {
        texture = tex;
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.minFilter = THREE.LinearFilter;
        init();
        animate(performance.now());
      }
    );

    function init() {
      camera = new THREE.Camera();
      camera.position.z = 1;
      scene = new THREE.Scene();
  const geometry = new THREE.PlaneGeometry(2, 2);
      uniforms = {
        u_time: { type: 'f', value: 1.0 },
        u_resolution: { type: 'v2', value: new THREE.Vector2() },
        u_noise: { type: 't', value: texture },
        u_mouse: { type: 'v2', value: new THREE.Vector2() },
      };
      uniformsRef.current = uniforms;
      const material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: `
          void main() {
            gl_Position = vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float u_time;
          uniform vec2 u_resolution;
          uniform sampler2D u_noise;
          uniform vec2 u_mouse;
          void main() {
            gl_FragColor = vec4(0.2, 0.3, 0.4, 1.0); // Replace with your shader
          }
        `,
      });
  // Removed material.extensions.derivatives (not needed for most shaders)
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      rendererRef.current = renderer;
      if (container) {
        container.appendChild(renderer.domElement);
      }
      onWindowResize();
      window.addEventListener('resize', onWindowResize, false);
      document.addEventListener('pointermove', onPointerMove);
    }

    function onWindowResize() {
      if (!rendererRef.current || !uniformsRef.current) return;
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      uniformsRef.current.u_resolution.value.x = rendererRef.current.domElement.width;
      uniformsRef.current.u_resolution.value.y = rendererRef.current.domElement.height;
    }

    function onPointerMove(e: PointerEvent) {
      if (!uniformsRef.current) return;
      const ratio = window.innerHeight / window.innerWidth;
      uniformsRef.current.u_mouse.value.x = (e.pageX - window.innerWidth / 2) / window.innerWidth / ratio;
      uniformsRef.current.u_mouse.value.y = (e.pageY - window.innerHeight / 2) / window.innerHeight * -1;
      e.preventDefault();
    }

    function animate(delta: number) {
      animationRef.current = requestAnimationFrame(animate);
      render(delta);
    }

    function render(delta: number) {
      if (!uniformsRef.current || !rendererRef.current || !scene || !camera) return;
      uniformsRef.current.u_time.value = -10000 + delta * 0.0005;
      rendererRef.current.render(scene, camera);
    }

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', onWindowResize);
      document.removeEventListener('pointermove', onPointerMove);
      if (rendererRef.current && rendererRef.current.domElement && container) {
        container.removeChild(rendererRef.current.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}
      id="container"
    />
  );
};

export default ShaderBackground;
