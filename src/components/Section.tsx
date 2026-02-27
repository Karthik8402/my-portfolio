import { type PropsWithChildren } from 'react';

interface SectionProps extends PropsWithChildren {
  className?: string;
}

export default function Section({ children, className = '' }: SectionProps) {
  return (
    <section className={`mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 lg:py-24 ${className}`}>
      {children}
    </section>
  );
}
