import { Github, Linkedin, Twitter, Mail, type LucideIcon } from "lucide-react";
import { SITE } from "../data/site";
import { motion, type Transition } from "framer-motion";

const iconMap: Record<string, LucideIcon> = { Github, Linkedin, Twitter, Mail };

const linkHoverAnimation: {
  whileHover: Record<string, any>;
  transition: Transition;
} = {
  whileHover: { scale: 1.1, color: "#7c3aed", letterSpacing: "0.05em" },
  transition: { type: "spring", stiffness: 300 },
};

const iconHoverAnimation = {
  whileHover: { scale: 1.2, opacity: 0, transition: { duration: 0.3 } },
};

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-3">{SITE.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {SITE.roles[0]} based in{" "}
              <span className="font-semibold">{SITE.location}</span>
            </p>
          </div>

          {/* Quick Links with framer-motion */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["/", "/about", "/projects", "/contact"].map((path, i) => (
                <li key={i}>
                  <motion.a
                    href={path}
                    className="text-gray-600 dark:text-gray-400 block"
                    whileHover="whileHover"
                    animate="initial"
                    variants={{
                      whileHover: linkHoverAnimation.whileHover,
                      initial: {
                        scale: 1,
                        color: "inherit",
                        letterSpacing: "normal",
                      },
                    }}
                    transition={linkHoverAnimation.transition}
                  >
                    {path === "/"
                      ? "Home"
                      : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Connect icons with framer-motion */}
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
                    whileHover={iconHoverAnimation.whileHover}
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
