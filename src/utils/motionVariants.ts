import type { Variants } from 'framer-motion';

// Custom ease curve — snappy entrance
export const customEase = [0.22, 1, 0.36, 1] as const;

// ── Container with staggered children ──
export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

// ── Fade in + rise ──
export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: customEase },
    },
};

// ── Scale in ──
export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: customEase },
    },
};

// ── Fade in from left ──
export const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: customEase },
    },
};

// ── Fade in from right ──
export const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: customEase },
    },
};

// ── Word-by-word reveal ──
export const wordRevealContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.06,
        },
    },
};

export const wordRevealItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: customEase },
    },
};

// ── Section entrance (triggered by scroll) ──
export const sectionReveal: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: customEase },
    },
};

// ── Page transition ──
export const pageTransition: Variants = {
    initial: { opacity: 0, y: 12 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: customEase },
    },
    exit: {
        opacity: 0,
        y: -12,
        transition: { duration: 0.3, ease: customEase },
    },
};
