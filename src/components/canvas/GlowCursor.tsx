import { useEffect, useRef, useState, useCallback } from 'react';

interface TrailDot {
  x: number;
  y: number;
  alpha: number;
}

export default function GlowCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const trail = useRef<TrailDot[]>([]);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const drawTrail = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize canvas to window
    if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Add current position to trail
    trail.current.push({ x: pos.current.x, y: pos.current.y, alpha: 0.4 });

    // Keep trail short for performance
    if (trail.current.length > 20) {
      trail.current.shift();
    }

    // Draw connecting trail line
    if (trail.current.length > 2) {
      ctx.beginPath();
      ctx.moveTo(trail.current[0].x, trail.current[0].y);

      for (let i = 1; i < trail.current.length; i++) {
        const dot = trail.current[i];
        ctx.lineTo(dot.x, dot.y);
      }

      ctx.strokeStyle = 'rgba(56, 189, 248, 0.08)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Draw trail dots
    for (let i = 0; i < trail.current.length; i++) {
      const dot = trail.current[i];
      const progress = i / trail.current.length;
      const size = progress * 3;
      const alpha = progress * 0.25;

      ctx.beginPath();
      ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(56, 189, 248, ${alpha})`;
      ctx.fill();
    }

    // Fade trail
    trail.current.forEach((dot) => {
      dot.alpha *= 0.92;
    });
    trail.current = trail.current.filter((dot) => dot.alpha > 0.01);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(hover: none)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, input, textarea, [role="button"], .cursor-pointer');
      setIsHovering(!!interactive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    let raf: number;
    const animate = () => {
      // Lerp ring position
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12;

      const hoverScale = isHovering ? 1.6 : 1;
      const clickScale = isClicking ? 0.85 : 1;
      const scale = hoverScale * clickScale;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) scale(${scale})`;
      }

      drawTrail();
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', handleResize);
    };
  }, [isHovering, isVisible, isClicking, drawTrail]);

  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
    return null;
  }

  return (
    <>
      {/* Trail canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9997]"
        style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.3s' }}
        aria-hidden="true"
      />

      {/* Inner dot — instant follow */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: 6,
          height: 6,
          marginLeft: -3,
          marginTop: -3,
          borderRadius: '50%',
          backgroundColor: '#38bdf8',
          boxShadow: '0 0 8px rgba(56, 189, 248, 0.5)',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s',
        }}
        aria-hidden="true"
      />

      {/* Outer ring — lerp follow with scale on hover/click */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          width: 40,
          height: 40,
          marginLeft: -20,
          marginTop: -20,
          borderRadius: '50%',
          border: `1.5px solid rgba(56, 189, 248, ${isHovering ? 0.6 : 0.3})`,
          backgroundColor: isHovering ? 'rgba(56, 189, 248, 0.06)' : 'transparent',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s, border-color 0.3s, background-color 0.3s, width 0.3s, height 0.3s',
          mixBlendMode: 'screen',
        }}
        aria-hidden="true"
      />
    </>
  );
}
