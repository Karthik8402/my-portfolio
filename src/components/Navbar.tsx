import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Track scroll for navbar bg
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileOpen]);

  // Theme toggle
  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
  };

  return (
    <header
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${
        scrolled
          ? 'nav-glass'
          : 'backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 bg-white/70 dark:bg-background-dark/70'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12 h-20">
        {/* Logo — "K" letter box */}
        <Link
          to="/"
          className="flex-shrink-0 cursor-pointer group relative z-50"
          onClick={() => setMobileOpen(false)}
        >
          <div className="w-10 h-10 rounded-lg bg-slate-900 dark:bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:border-primary transition-colors">
            <span className="font-display font-bold text-xl text-primary">K</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden gap-8 md:flex items-center">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-primary'
                    : 'text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Right side: Theme Toggle + Mobile Menu */}
        <div className="flex items-center gap-3 relative z-50">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400"
            aria-label="Toggle theme"
          >
            <span className="material-symbols-outlined text-xl block dark:hidden">dark_mode</span>
            <span className="material-symbols-outlined text-xl hidden dark:block">light_mode</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors md:hidden text-slate-900 dark:text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav — Animated Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-40"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-20 left-0 right-0 md:hidden z-40 nav-glass max-h-[calc(100vh-80px)] overflow-y-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="p-6 space-y-2">
                {links.map((l, idx) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                  >
                    <NavLink
                      to={l.to}
                      className={({ isActive }) =>
                        `block py-4 px-4 text-lg font-medium rounded-xl transition-all ${
                          isActive
                            ? 'bg-primary/10 text-primary border border-primary/20'
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                        }`
                      }
                    >
                      {l.label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
