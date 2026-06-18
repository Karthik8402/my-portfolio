import React, { useState, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

export default function ProjectCard3D({ id, title, description, image, tags, featured = false }: ProjectCardProps) {
  const reducedMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Track normalized pointer offset inside the card [-0.5, 0.5]
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // Spring configuration for rotation and card state
  const [props, set] = useSpring(() => ({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
    shadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
    config: { stiffness: 80, damping: 20 }
  }));

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Position of pointer inside card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize coordinates to range [-0.5, 0.5]
    const normalizedX = (x / rect.width) - 0.5;
    const normalizedY = (y / rect.height) - 0.5;

    setCoords({ x: normalizedX, y: normalizedY });

    // RotateX: derived from Y deviation (up/down tilting)
    // RotateY: derived from X deviation (left/right tilting)
    const rotateXVal = -normalizedY * 12; // Max 6 degrees in either direction
    const rotateYVal = normalizedX * 14;  // Max 7 degrees in either direction
    
    set({
      transform: `perspective(1000px) rotateX(${rotateXVal}deg) rotateY(${rotateYVal}deg) translateZ(16px)`,
      shadow: '0px 20px 50px var(--glow-accent)',
    });
  };

  const handleMouseLeave = () => {
    setCoords({ x: 0, y: 0 });
    set({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
      shadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
    });
  };

  // Touch Support
  const handleTouchStart = () => {
    if (reducedMotion) return;
    set({
      transform: 'perspective(1000px) rotateX(-4deg) rotateY(4deg) translateZ(12px)',
      shadow: '0px 15px 30px var(--glow-accent)',
    });
  };

  const handleTouchEnd = () => {
    set({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
      shadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
    });
  };

  // Inner Layer Parallax Offsets
  const imgParallax = reducedMotion ? '' : `translate3d(${coords.x * 6}px, ${coords.y * 6}px, 0)`;
  const titleParallax = reducedMotion ? '' : `translate3d(${coords.x * 3}px, ${coords.y * 3}px, 0)`;
  const tagsParallax = reducedMotion ? '' : `translate3d(${coords.x * 1.5}px, ${coords.y * 1.5}px, 0)`;

  return (
    <div className="h-full w-full" style={{ perspective: '1000px' }}>
      <animated.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="h-full rounded-2xl overflow-hidden flex flex-col cursor-pointer transition-all duration-300 relative select-none"
        style={{
          transform: reducedMotion ? 'none' : props.transform,
          boxShadow: props.shadow,
          backgroundColor: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
        }}
      >
        <Link to={`/projects/${id}`} className="flex flex-col h-full w-full">
          {/* Card Header/Image Container */}
          <div className="relative h-56 overflow-hidden w-full">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />
            <div
              className="w-full h-full transition-transform duration-300 ease-out"
              style={{ transform: imgParallax, transformOrigin: 'center' }}
            >
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = `https://placehold.co/600x400/18181b/2563EB?text=${title.split(' ').join('+')}`;
                }}
              />
            </div>

            {featured && (
              <div className="absolute top-3 right-3 z-20 pointer-events-none">
                <span className="px-3 py-1 bg-zinc-900/90 backdrop-blur-sm rounded-full text-xs font-bold text-primary shadow-sm border border-primary/20">
                  Featured
                </span>
              </div>
            )}
          </div>

          {/* Card Body content */}
          <div className="p-5 lg:p-6 flex flex-col flex-grow relative z-20">
            <animated.h3
              className="text-base lg:text-lg font-display font-bold text-[var(--color-foreground)] transition-colors mb-2 line-clamp-1"
              style={{ transform: titleParallax }}
            >
              {title}
            </animated.h3>

            <p className="text-sm text-[var(--color-muted)] line-clamp-2 leading-relaxed mb-4 flex-grow">
              {description}
            </p>

            {/* Tags section */}
            <animated.div
              className="flex flex-wrap gap-1.5 mb-4"
              style={{ transform: tagsParallax }}
            >
              {tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs font-mono rounded-md border"
                  style={{
                    backgroundColor: 'var(--color-surface-alt)',
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-muted)',
                  }}
                >
                  {tag}
                </span>
              ))}
              {tags.length > 4 && (
                <span className="px-2 py-0.5 text-xs font-mono text-[var(--color-muted)]">
                  +{tags.length - 4}
                </span>
              )}
            </animated.div>

            {/* Footer view action */}
            <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: 'var(--color-border)' }}>
              <span className="text-xs font-medium text-primary flex items-center gap-1">
                View Details
                <ArrowRight size={12} />
              </span>
            </div>
          </div>
        </Link>
      </animated.div>
    </div>
  );
}
