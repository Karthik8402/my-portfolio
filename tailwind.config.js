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
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: "#38bdf8",
        "primary-dark": "#0ea5e9",
        "background-light": "#f8fafc",
        "background-dark": "#020617",
        "surface-light": "#ffffff",
        "surface-dark": "#0f172a",
        "accent-cyan": "#22d3ee",
        "accent-glow": "#38bdf8",
      },
      backgroundImage: {
        'hero-pattern-dark': "radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.1) 0%, rgba(2, 6, 23, 0) 50%)",
        'hero-pattern-light': "radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.05) 0%, rgba(248, 250, 252, 0) 50%)",
        'grid-pattern': "linear-gradient(to right, rgba(148, 163, 184, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.05) 1px, transparent 1px)",
        'cyan-gradient': "linear-gradient(135deg, #0ea5e9 0%, #22d3ee 100%)",
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 20px rgba(56, 189, 248, 0.3)',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer-btn': 'shimmer 1.5s infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)', opacity: '0.3' },
          '50%': { transform: 'translateY(-20px) translateX(10px)', opacity: '0.8' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}
