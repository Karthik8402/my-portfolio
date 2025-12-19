import { useRef, useEffect } from "react";
import { Github, Linkedin, Twitter, Mail, type LucideIcon } from "lucide-react";
import { SITE } from "../data/SITE.1";
import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { useMobile } from "../hooks/useMobile";

const iconMap: Record<string, LucideIcon> = { Github, Linkedin, Twitter, Mail };

const socialColors: Record<string, { color: string; glow: string }> = {
  Github: { color: "#171515", glow: "0 0 20px rgba(23, 21, 21, 0.6)" },
  Linkedin: { color: "#0A66C2", glow: "0 0 20px rgba(10, 102, 194, 0.6)" },
  Twitter: { color: "#1DA1F2", glow: "0 0 20px rgba(29, 161, 242, 0.6)" },
  Mail: { color: "#EA4335", glow: "0 0 20px rgba(234, 67, 53, 0.6)" },
};

const MotionLink = motion.create(Link);

export default function Footer() {
  const location = useLocation();
  const isMobile = useMobile();

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  // --- Ensure immediate reset on theme change ---
  const iconRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  // Replace this with your actual dark mode variable; for demo purpose, use `window.matchMedia`.
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  useEffect(() => {
    // Reset all inline styles on theme change
    iconRefs.current.forEach(ref => {
      if (ref) {
        ref.style.backgroundColor = "";
        ref.style.color = "";
        ref.style.borderColor = "";
      }
    });
  // Add dark mode state here if using context or other state instead of prefersDark.
  }, [prefersDark]); 

  return (
    <footer className="relative bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] [mask-image:linear-gradient(0deg,transparent,black)]" />
      
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-3 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-heading bg-gradient-to-r from-brand-500 to-purple-500 bg-clip-text text-transparent inline-block">
              {SITE.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs">
              {SITE.experience} | {SITE.roles[0]}
              <br />
              Based in {SITE.location}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 font-heading">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {links.map((link) => (
                <li key={link.path}>
                  <MotionLink
                    to={link.path}
                    key={`${link.path}-${location.pathname}`}
                    className="inline-block text-gray-600 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
                    whileHover={isMobile ? {} : { x: 5 }}
                  >
                    {link.label}
                  </MotionLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Connect icons */}
          <div>
            <h4 className="font-semibold mb-4 font-heading">Connect</h4>
            <div className="flex gap-4">
              {SITE.socials.map((social, idx) => {
                const Icon = iconMap[social.icon];
                const colors = socialColors[social.icon];
                return colors ? (
                  <motion.a
                    ref={el => { iconRefs.current[idx] = el; }}
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center justify-center w-10 h-10 rounded-xl cursor-pointer 
                      bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 shadow-sm border border-gray-200 dark:border-gray-700"
                    whileHover={isMobile ? {} : {
                      scale: 1.1,
                      rotate: 5,
                      boxShadow: colors.glow,
                    }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={e => {
                      if (!isMobile) {
                        e.currentTarget.style.backgroundColor = colors.color;
                        e.currentTarget.style.color = "#fff";
                        e.currentTarget.style.borderColor = colors.color;
                      }
                    }}
                    onMouseLeave={e => {
                      if (!isMobile) {
                        e.currentTarget.style.backgroundColor = "";
                        e.currentTarget.style.color = "";
                        e.currentTarget.style.borderColor = "";
                      }
                    }}
                  >
                    <Icon size={20} />
                  </motion.a>
                ) : null;
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              Built with 
              <span className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-cyan-500" title="React" />
                <span className="w-2 h-2 rounded-full bg-sky-500" title="Tailwind CSS" />
                <span className="w-2 h-2 rounded-full bg-purple-500" title="Vite" />
              </span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
