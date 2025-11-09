import { useRef, useEffect } from "react";
import { Github, Linkedin, Twitter, Mail, type LucideIcon } from "lucide-react";
import { SITE } from "../data/site";
import { motion, type Transition } from "framer-motion";
import { useLocation, Link } from "react-router-dom";

const iconMap: Record<string, LucideIcon> = { Github, Linkedin, Twitter, Mail };

const socialColors: Record<string, { color: string; glow: string }> = {
  Github: { color: "#171515", glow: "0 0 20px rgba(23, 21, 21, 0.6)" },
  Linkedin: { color: "#0A66C2", glow: "0 0 20px rgba(10, 102, 194, 0.6)" },
  Twitter: { color: "#1DA1F2", glow: "0 0 20px rgba(29, 161, 242, 0.6)" },
  Mail: { color: "#EA4335", glow: "0 0 20px rgba(234, 67, 53, 0.6)" },
};

const linkHoverAnimation: {
  whileHover: Record<string, string | number>;
  transition: Transition;
} = {
  whileHover: { scale: 1.1, color: "#7c3aed", letterSpacing: "0.05em" },
  transition: { type: "spring", stiffness: 300 },
};

const MotionLink = motion.create(Link);

export default function Footer() {
  const location = useLocation();

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
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-3">{SITE.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {SITE.experience} | {SITE.roles[0]}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              {SITE.location}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {links.map((link) => (
                <li key={link.path}>
                  <MotionLink
                    to={link.path}
                    key={`${link.path}-${location.pathname}`}
                    className="block text-gray-600 dark:text-gray-400"
                    {...linkHoverAnimation}
                  >
                    {link.label}
                  </MotionLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Connect icons */}
          <div>
            <h4 className="font-semibold mb-3">Connect</h4>
            <div className="flex gap-6">
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
                    className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer 
                      bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors duration-300"
                    whileHover={{
                      scale: 1.2,
                      rotate: 10,
                      boxShadow: colors.glow,
                    }}
                    transition={{ duration: 0.3 }}
                    onMouseEnter={e => {
                      e.currentTarget.style.backgroundColor = colors.color;
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.backgroundColor = "";
                      e.currentTarget.style.color = "";
                    }}
                  >
                    <Icon size={22} />
                  </motion.a>
                ) : null;
              })}
            </div>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
