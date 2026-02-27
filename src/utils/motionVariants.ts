import type { Variants } from 'framer-motion';

// Snappier ease for 60fps feel
export const customEase = [0.16, 1, 0.3, 1] as const;

// ── Container with staggered children ──
export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

// ── Fade in + rise ──
export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: customEase },
    },
};

// ── Scale in ──
export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, ease: customEase },
    },
};

// ── Fade in from left ──
export const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.45, ease: customEase },
    },
};

// ── Fade in from right ──
export const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.45, ease: customEase },
    },
};

// ── Word-by-word reveal ──
export const wordRevealContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.04,
        },
    },
};

export const wordRevealItem: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.35, ease: customEase },
    },
};

// ── Section entrance (triggered by scroll) ──
export const sectionReveal: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: customEase },
    },
};

// ── Page transition — snappier ──
export const pageTransition: Variants = {
    initial: { opacity: 0, y: 8 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, ease: customEase },
    },
    exit: {
        opacity: 0,
        y: -8,
        transition: { duration: 0.2, ease: customEase },
    },
};
