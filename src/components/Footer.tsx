import { Github, Linkedin, Twitter, Mail, type LucideIcon } from 'lucide-react';
import { SITE } from '../data/site';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useMobile } from '../hooks/useMobile';

const iconMap: Record<string, LucideIcon> = { Github, Linkedin, Twitter, Mail };

const MotionLink = motion.create(Link);

export default function Footer() {
  const location = useLocation();
  const isMobile = useMobile();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 py-12 lg:py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
              Karthik <span className="text-primary">Kumar</span>
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {SITE.experience} | {SITE.roles[0]}
              <br />
              Based in {SITE.location}
            </p>
          </div>

          {/* Spacer (hidden on smaller screens) */}
          <div className="hidden lg:block" />

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <MotionLink
                    to={link.path}
                    key={`${link.path}-${location.pathname}`}
                    className="hover:text-primary transition-colors"
                    whileHover={isMobile ? {} : { x: 5 }}
                  >
                    {link.label}
                  </MotionLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Connect
            </h4>
            <div className="flex gap-3">
              {SITE.socials.map((social: { icon: string; label: string; href: string }) => {
                const Icon = iconMap[social.icon];
                return Icon ? (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all"
                    whileHover={isMobile ? {} : { y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                ) : null;
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Built with</span>
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="w-2 h-2 rounded-full bg-purple-500" />
            <span className="w-2 h-2 rounded-full bg-accent-cyan" />
          </div>
        </div>
      </div>
    </footer>
  );
}
