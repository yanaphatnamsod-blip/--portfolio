import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  speed: number;
  opacity: number;
  color: string;
}

const COLORS = ['#B600A8', '#7621B0', '#BE4C00', '#D7E2EA'];
const PARTICLE_COUNT = 36;

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = parent.clientWidth;
    let height = parent.clientHeight;
    let particles: Particle[] = [];

    function createParticle(randomY = true): Particle {
      return {
        x: Math.random() * width,
        y: randomY ? Math.random() * height : height + 10,
        radius: 1 + Math.random() * 2.2,
        speed: 0.15 + Math.random() * 0.35,
        opacity: 0.2 + Math.random() * 0.5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      };
    }

    function setup() {
      width = parent!.clientWidth;
      height = parent!.clientHeight;
      canvas!.width = width;
      canvas!.height = height;
      particles = Array.from({ length: PARTICLE_COUNT }, () => createParticle(true));
    }

    setup();

    // Respect reduced-motion: draw one static frame, skip the animation loop.
    if (prefersReducedMotion) {
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      });
      return;
    }

    let animationFrameId: number;

    function draw() {
      ctx!.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.y -= p.speed;
        if (p.y < -10) {
          Object.assign(p, createParticle(false));
        }
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx!.fillStyle = p.color;
        ctx!.globalAlpha = p.opacity;
        ctx!.fill();
      }
      ctx!.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(draw);
    }

    draw();

    function handleResize() {
      setup();
    }
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
