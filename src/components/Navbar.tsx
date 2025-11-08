import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 glass shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo with Favicon */}
        <Link 
          to="/" 
          className="group flex items-center gap-3 text-2xl font-bold relative z-50"
          onClick={() => setMobileOpen(false)}
        >
          <img 
            src="/favicon.svg" 
            alt="Logo" 
            className="w-10 h-10 transition-transform group-hover:scale-110"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden gap-8 md:flex items-center">
          {links.map(l => (
            <NavLink 
              key={l.to} 
              to={l.to}
              className={({ isActive }) => 
                `relative text-sm font-medium transition-all group ${
                  isActive 
                    ? 'text-brand-500' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-brand-500'
                }`
              }
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-500 transition-all group-hover:w-full" />
            </NavLink>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden relative z-50">
          <ThemeToggle />
          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-40"
            onClick={() => setMobileOpen(false)}
          />
          
          {/* Menu */}
          <div className="fixed top-[72px] left-0 right-0 glass md:hidden z-40 border-t border-gray-200 dark:border-gray-800 max-h-[calc(100vh-72px)] overflow-y-auto">
            <div className="p-6 space-y-2">
              {links.map(l => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `block py-4 px-4 text-lg font-medium rounded-xl transition-all ${
                      isActive
                        ? 'bg-brand-500 text-white'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </div>
        </>
      )}
    </header>
  );
}
