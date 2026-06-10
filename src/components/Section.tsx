import { type PropsWithChildren } from 'react';

interface SectionProps extends PropsWithChildren {
  className?: string;
  id?: string;
}

export default function Section({ children, className = '', id }: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 lg:py-24 ${className}`}
    >
      {children}
    </section>
  );
}
