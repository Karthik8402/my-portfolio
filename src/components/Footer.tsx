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

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="relative border-t border-[var(--color-border)] pt-16 pb-8 overflow-hidden bg-bg">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, var(--color-border) 1px, transparent 1px),
                            linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(0deg, transparent, black)',
          WebkitMaskImage: 'linear-gradient(0deg, transparent, black)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-3 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-heading gradient-text inline-block">
              {SITE.name}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
              {SITE.experience} | {SITE.roles[0]}
              <br />
              Based in {SITE.location}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 font-heading text-text-primary">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {links.map((link) => (
                <li key={link.path}>
                  <MotionLink
                    to={link.path}
                    key={`${link.path}-${location.pathname}`}
                    className="inline-block text-text-secondary hover:text-accent transition-colors"
                    whileHover={isMobile ? {} : { x: 5 }}
                  >
                    {link.label}
                  </MotionLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Connect */}
          <div>
            <h4 className="font-semibold mb-4 font-heading text-text-primary">Connect</h4>
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
                    className="flex items-center justify-center w-10 h-10 rounded-xl cursor-pointer bg-bg-surface text-text-secondary border border-[var(--color-border)] hover:border-accent/50 hover:text-accent transition-colors"
                    whileHover={isMobile ? {} : { scale: 1.1, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                ) : null;
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-muted">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              Built with
              <span className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-accent" title="React" />
                <span className="w-2 h-2 rounded-full bg-sky-500" title="Tailwind CSS" />
                <span className="w-2 h-2 rounded-full bg-violet-500" title="Vite" />
              </span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
