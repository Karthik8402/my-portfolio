import { PropsWithChildren } from 'react';

interface SectionProps extends PropsWithChildren {
  className?: string;
}

export default function Section({ children, className = '' }: SectionProps) {
  return (
    <section className={`mx-auto max-w-6xl px-6 py-16 ${className}`}>
      {children}
    </section>
  );
}
