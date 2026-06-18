import { useEffect, useRef, useState } from 'react';

export default function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

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
      const interactive = target.closest('a, button, input, textarea, [role="button"]');
      setIsHovering(!!interactive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    let raf: number;
    const animate = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.15;

      if (ringRef.current) {
        const scale = (isHovering ? 1.8 : 1) * (isClicking ? 0.85 : 1);
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) scale(${scale})`;
      }

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isHovering, isVisible, isClicking]);

  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
    return null;
  }

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: 4,
          height: 4,
          marginLeft: -2,
          marginTop: -2,
          borderRadius: '50%',
          backgroundColor: '#2563EB',
          boxShadow: '0 0 6px rgba(37, 99, 235, 0.5)',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s',
        }}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          width: 32,
          height: 32,
          marginLeft: -16,
          marginTop: -16,
          borderRadius: '50%',
          border: `1px solid rgba(37, 99, 235, ${isHovering ? 0.5 : 0.2})`,
          backgroundColor: isHovering ? 'rgba(37, 99, 235, 0.04)' : 'transparent',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s, border-color 0.3s, background-color 0.3s',
          backdropFilter: 'blur(2px)',
        }}
        aria-hidden="true"
      />
    </>
  );
}
