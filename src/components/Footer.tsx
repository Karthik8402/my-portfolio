import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';
import { SITE } from '../data/site';
import { Link, useLocation } from 'react-router-dom';

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
    <footer className="relative z-10 border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-background-dark/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-slate-900 dark:bg-white flex items-center justify-center">
                <span className="font-display font-bold text-sm text-white dark:text-slate-900">K</span>
              </div>
              <span className="font-display font-bold text-lg text-slate-900 dark:text-white">
                {SITE.name.split(' ')[0]}
              </span>
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              {SITE.hero.subtitle}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
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
                        : 'text-slate-500 dark:text-slate-400 hover:text-primary'
                    }`}
                  >
                    <span className={`w-0 h-[1.5px] bg-primary transition-all duration-300 mr-0 ${
                      location.pathname === link.path
                        ? 'w-3 mr-1.5'
                        : 'group-hover:w-3 group-hover:mr-1.5'
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
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
              Connect
            </h4>
            <div className="flex flex-wrap gap-2">
              {SITE.socials.map((social: { icon: string; label: string; href: string }) => {
                const Icon = iconMap[social.icon];
                return Icon ? (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all duration-200"
                  >
                    <Icon size={16} />
                  </a>
                ) : null;
              })}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
              Contact
            </h4>
            <div className="space-y-2">
              <a
                href={`mailto:${SITE.email}`}
                className="block text-sm text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
              >
                {SITE.email}
              </a>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {SITE.location}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400 dark:text-slate-500">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500">
            <span>Built with</span>
            <Heart size={12} className="text-red-400 fill-red-400" />
            <span>using React + Tailwind</span>
          </div>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all duration-200"
            aria-label="Scroll to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
