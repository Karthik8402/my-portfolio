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
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        display: ['Archivo', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: {
          DEFAULT: "#2563EB",
          dark: "#1d4ed8",
          light: "#60a5fa",
        },
        "background-light": "#FAFAFA",
        "background-dark": "#09090B",
        "surface-light": "#FFFFFF",
        "surface-dark": "#18181B",
        "accent-blue": "#2563EB",
        "accent-purple": "#7c3aed",
        "accent-cyan": "#06b6d4",
        "accent-pink": "#ec4899",
        "muted-light": "#E8ECF0",
        "muted-dark": "#27272A",
        "border-light": "#E4E4E7",
        "border-dark": "#3F3F46",
      },
      boxShadow: {
        'glow': '0 0 20px rgba(37, 99, 235, 0.3)',
        'glow-lg': '0 0 40px rgba(37, 99, 235, 0.2)',
        'glow-purple': '0 0 20px rgba(124, 58, 237, 0.3)',
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
        'inner-glow': 'inset 0 0 20px rgba(37, 99, 235, 0.05)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'spin-slower': 'spin 12s linear infinite',
        'scale-in': 'scale-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
        'drift': 'drift 20s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-20px) translateX(10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
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
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(10px, -10px) rotate(5deg)' },
          '50%': { transform: 'translate(-5px, 5px) rotate(-3deg)' },
          '75%': { transform: 'translate(15px, -5px) rotate(4deg)' },
        },
      },
    },
  },
  plugins: [],
}
