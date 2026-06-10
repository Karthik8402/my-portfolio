/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: {
          DEFAULT: "#38bdf8",
          dark: "#0ea5e9",
          light: "#7dd3fc",
        },
        "background-light": "#f8fafc",
        "background-dark": "#020617",
        "surface-light": "#ffffff",
        "surface-dark": "#0f172a",
        "accent-cyan": "#22d3ee",
        "accent-purple": "#a855f7",
        "accent-pink": "#ec4899",
        "accent-glow": "#38bdf8",
      },
      backgroundImage: {
        'hero-pattern-dark': "radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.1) 0%, rgba(2, 6, 23, 0) 50%)",
        'hero-pattern-light': "radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.05) 0%, rgba(248, 250, 252, 0) 50%)",
        'grid-pattern': "linear-gradient(to right, rgba(148, 163, 184, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.05) 1px, transparent 1px)",
        'cyan-gradient': "linear-gradient(135deg, #0ea5e9 0%, #22d3ee 100%)",
        'primary-gradient': "linear-gradient(135deg, #38bdf8 0%, #a855f7 100%)",
        'warm-gradient': "linear-gradient(135deg, #38bdf8 0%, #22d3ee 50%, #a855f7 100%)",
      },
      backgroundSize: {
        'grid': '40px 40px',
        '200': '200% 200%',
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 20px rgba(56, 189, 248, 0.3)',
        'glow-lg': '0 0 40px rgba(56, 189, 248, 0.2)',
        'glow-purple': '0 0 20px rgba(168, 85, 247, 0.3)',
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'gradient-slow': 'gradient 12s ease infinite',
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'shimmer-btn': 'shimmer 1.5s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-gentle': 'bounce-gentle 2s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'scale-in': 'scale-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-20px) translateX(10px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
