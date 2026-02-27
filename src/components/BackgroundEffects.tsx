import { memo } from 'react';

/**
 * Shared background effects matching the Stitch template.
 * Every page uses the same radial blobs + CSS particle floaters.
 */
function BackgroundEffectsRaw() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-hero-pattern-light dark:bg-hero-pattern-dark opacity-60" />
      <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-primary/20 rounded-full blur-[120px] dark:bg-primary/10 animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30rem] h-[30rem] bg-purple-500/10 rounded-full blur-[100px] dark:bg-purple-500/10" />
      <div className="particle" />
      <div className="particle" />
      <div className="particle" />
      <div className="particle" />
      <div className="particle" />
    </div>
  );
}

export const BackgroundEffects = memo(BackgroundEffectsRaw);
