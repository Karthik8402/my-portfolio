import { memo } from 'react';

function BackgroundEffectsRaw() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-hero-pattern-light dark:bg-hero-pattern-dark opacity-60" />

      <div className="absolute top-[-15%] left-[-5%] w-[45rem] h-[45rem] bg-primary/15 dark:bg-primary/10 rounded-full blur-[150px] animate-pulse-slow" />
      <div className="absolute bottom-[-15%] right-[-5%] w-[35rem] h-[35rem] bg-accent-purple/10 dark:bg-accent-purple/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[40%] right-[20%] w-[20rem] h-[20rem] bg-accent-cyan/8 dark:bg-accent-cyan/8 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '4s' }} />

      <div className="absolute top-[15%] left-[10%] w-1 h-1 bg-primary/40 rounded-full animate-float-slow" />
      <div className="absolute top-[35%] right-[15%] w-1.5 h-1.5 bg-accent-cyan/40 rounded-full animate-float-slow" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[60%] left-[20%] w-1 h-1 bg-accent-purple/40 rounded-full animate-float-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[80%] right-[25%] w-1.5 h-1.5 bg-primary/30 rounded-full animate-float-slow" style={{ animationDelay: '3s' }} />
      <div className="absolute top-[25%] left-[60%] w-1 h-1 bg-accent-cyan/30 rounded-full animate-float-slow" style={{ animationDelay: '4s' }} />
    </div>
  );
}

export const BackgroundEffects = memo(BackgroundEffectsRaw);
