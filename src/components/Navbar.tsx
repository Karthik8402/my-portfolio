import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
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
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.theme = isDark ? 'dark' : 'light';
    setDark(isDark);
  };

  return (
    <header
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${
        scrolled ? 'glass-nav shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12 h-16 lg:h-20">
        <Link
          to="/"
          className="flex-shrink-0 relative z-50 group"
          onClick={() => setMobileOpen(false)}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-lg" />
            <div className="relative w-9 h-9 lg:w-10 lg:h-10 rounded-lg bg-zinc-900 dark:bg-white flex items-center justify-center border border-zinc-700 dark:border-zinc-200">
              <span className="font-display font-bold text-lg text-white dark:text-zinc-900">K</span>
            </div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `relative px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-primary'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/50'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 bg-primary/10 dark:bg-primary/5 rounded-lg"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{l.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2 relative z-50">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-400"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors md:hidden text-zinc-900 dark:text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-40"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.div
              className="fixed top-16 left-0 right-0 md:hidden z-40 glass-nav border-b border-zinc-200 dark:border-zinc-800 max-h-[calc(100vh-64px)] overflow-y-auto"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="p-4 space-y-1">
                {links.map((l, idx) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                  >
                    <NavLink
                      to={l.to}
                      className={({ isActive }) =>
                        `block py-3.5 px-4 text-base font-medium rounded-xl transition-all ${
                          isActive
                            ? 'bg-primary/10 text-primary border border-primary/20'
                            : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white'
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
