import type { Variants } from 'framer-motion';

export const customEase = [0.16, 1, 0.3, 1] as const; // Premium out-expo bezier
export const springEase = { type: 'spring' as const, stiffness: 200, damping: 22 };

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 }, // Gentler 16px shift instead of 24px
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: customEase }, // Increased to 0.8s for smooth flow
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: customEase },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 }, // Gentler 20px shift instead of 30px
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: customEase },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: customEase },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 }, // Gentler 0.96 scale instead of 0.92
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: customEase },
  },
};

export const wordRevealContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.03 },
  },
};

export const wordRevealItem: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: customEase },
  },
};

export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: customEase },
  },
};

export const pageTransition: Variants = {
  initial: { opacity: 0, y: 8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: customEase }, // Extended for seamless page switching
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.3, ease: customEase },
  },
};

export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -4,
    transition: { type: 'spring', stiffness: 200, damping: 18 },
  },
};

export const shimmerVariants: Variants = {
  rest: { x: '-100%' },
  hover: {
    x: '100%',
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
};
