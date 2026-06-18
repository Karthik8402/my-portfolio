import { useEffect, useRef, useState } from 'react';

export default function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const dotPos = useRef({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(hover: none)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) {
        setIsVisible(true);
        // Instant position on first load so it doesn't slide in from off-screen
        dotPos.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, input, textarea, [role="button"], [class*="cursor-pointer"]');
      setIsHovering(!!interactive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    let raf: number;
    const animate = () => {
      // Smooth position lerping
      dotPos.current.x += (pos.current.x - dotPos.current.x) * 0.25;
      dotPos.current.y += (pos.current.y - dotPos.current.y) * 0.25;

      if (dotRef.current) {
        const scale = isClicking ? 0.8 : 1.0;
        dotRef.current.style.transform = `translate(${dotPos.current.x}px, ${dotPos.current.y}px) scale(${scale})`;
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
    <div
      ref={dotRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        width: isHovering ? 18 : 8,
        height: isHovering ? 18 : 8,
        marginLeft: isHovering ? -9 : -4,
        marginTop: isHovering ? -9 : -4,
        borderRadius: '50%',
        backgroundColor: isHovering ? '#00FFFF' : '#2563EB',
        boxShadow: isHovering
          ? '0 0 12px #00FFFF, 0 0 24px rgba(0, 255, 255, 0.6)'
          : '0 0 6px rgba(37, 99, 235, 0.7)',
        opacity: isVisible ? 1 : 0,
        transition: 'width 0.2s cubic-bezier(0.16, 1, 0.3, 1), height 0.2s cubic-bezier(0.16, 1, 0.3, 1), margin 0.2s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s ease, box-shadow 0.25s ease, opacity 0.3s ease',
      }}
      aria-hidden="true"
    />
  );
}
