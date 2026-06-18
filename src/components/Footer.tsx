import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';
import { SITE } from '../data/site';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const iconMap: Record<string, typeof Github> = { Github, Linkedin, Twitter, Mail };

export default function Footer() {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="relative z-10 border-t bg-[rgba(13,13,13,0.35)] backdrop-blur-sm"
      style={{ borderColor: 'var(--color-border)' }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2 group">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center border"
                style={{
                  backgroundColor: 'var(--color-surface-alt)',
                  borderColor: 'var(--color-border)',
                }}
              >
                <span className="font-display font-bold text-sm text-[var(--color-foreground)]">K</span>
              </div>
              <span className="font-display font-bold text-lg text-[var(--color-foreground)]">
                {SITE.name.split(' ')[0]}
              </span>
            </Link>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed">
              {SITE.hero.subtitle}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--color-muted)]">
              Pages
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`inline-flex items-center text-sm transition-all duration-300 group ${
                      location.pathname === link.path
                        ? 'text-primary font-medium'
                        : 'text-[var(--color-muted)] hover:text-primary'
                    }`}
                  >
                    <span className={`h-[1.5px] bg-primary transition-all duration-300 mr-0 ${
                      location.pathname === link.path
                        ? 'w-3 mr-1.5'
                        : 'w-0 group-hover:w-3 group-hover:mr-1.5'
                    }`} />
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--color-muted)]">
              Connect
            </h4>
            <div className="flex flex-wrap gap-2">
              {SITE.socials.map((social: { icon: string; label: string; href: string }) => {
                const Icon = iconMap[social.icon];
                return Icon ? (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors duration-200"
                    style={{
                      backgroundColor: 'var(--color-surface-alt)',
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-muted)',
                    }}
                    whileHover={{ y: -4, scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  >
                    <Icon size={16} />
                  </motion.a>
                ) : null;
              })}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--color-muted)]">
              Contact
            </h4>
            <div className="space-y-2">
              <a
                href={`mailto:${SITE.email}`}
                className="block text-sm text-[var(--color-muted)] hover:text-primary transition-colors"
              >
                {SITE.email}
              </a>
              <p className="text-sm text-[var(--color-muted)]">
                {SITE.location}
              </p>
            </div>
          </div>
        </div>

        <div
          className="mt-10 pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderColor: 'var(--color-border)' }}
        >
          <p className="text-xs text-[var(--color-muted)]">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-[var(--color-muted)]">
            <span>Built with</span>
            <Heart size={12} className="text-red-400 fill-red-400" />
            <span>React + Three.js</span>
          </div>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 border rounded-lg flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
            style={{
              backgroundColor: 'var(--color-surface-alt)',
              borderColor: 'var(--color-border)',
              color: 'var(--color-muted)',
            }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
