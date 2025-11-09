import { Github, Linkedin, Twitter, Mail, type LucideIcon } from "lucide-react";
import { SITE } from "../data/site";
import { motion, type Transition } from "framer-motion";
import { useLocation, Link } from "react-router-dom";

const iconMap: Record<string, LucideIcon> = { Github, Linkedin, Twitter, Mail };

const linkHoverAnimation: {
  whileHover: Record<string, string | number>;
  transition: Transition;
} = {
  whileHover: { scale: 1.1, color: "#7c3aed", letterSpacing: "0.05em" },
  transition: { type: "spring", stiffness: 300 },
};

const iconHoverAnimation = {
  whileHover: { scale: 1.2, rotate: 10 },
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

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-3">{SITE.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {SITE.experience} | {SITE.roles[0]} | {" "}
              <span className="font-semibold">{SITE.location}</span>
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
              {SITE.socials.map((social) => {
                const Icon = iconMap[social.icon];
                return Icon ? (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer 
                               bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                    {...iconHoverAnimation}
                    transition={{ duration: 0.3 }}
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
