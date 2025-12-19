import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Code2,
  Sparkles,
  Database,
  Coffee,
  Layout,
  FileCode,
  Atom,
} from "lucide-react";
import Section from "../components/Section";
import { SITE } from "../data/site";
import { Meta } from "../seo/Meta";
import { useMobile } from "../hooks/useMobile";

const socialIcons = {
  Github,
  Linkedin,
  Mail,
};

export default function Home() {
  const isMobile = useMobile();

  return (
    <>
      <Meta
        title={`${SITE.name} - ${SITE.roles[0]}`}
        description={SITE.hero.subtitle}
        path="/"
      />

      <Section className="min-h-screen flex items-center relative overflow-hidden">
        {/* Animated Background Gradient Orbs */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 -left-20 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                              linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2 w-full">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 50 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.8 : 0.6 }}
          >
            {/* Badge with pop animation */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass rounded-full border border-brand-500/20 cursor-pointer hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={isMobile ? {} : {
                scale: 1.05,
                boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)",
              }}
              transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Available for work
              </span>
            </motion.div>

            {/* Headline with scale and glow on hover */}
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading leading-tight mb-8 cursor-pointer tracking-tight"
              initial={{ opacity: 1, scale: 0.95 }}
              whileHover={isMobile ? {} : {
                scale: 1.02,
                textShadow: "0 0 30px rgba(99, 102, 241, 0.3)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="block mb-2 text-gray-900 dark:text-white">Hi, I'm</span>
              <span className="gradient-text block">{SITE.name}</span>
            </motion.h1>

            {/* Typewriter Roles with Experience */}
            <div className="text-xl md:text-3xl mb-8 font-medium h-12 flex items-center gap-3 font-heading">
              <span className="text-gray-500 dark:text-gray-400">
                {SITE.experience} |
              </span>
              <span className="text-brand-500">
                <Typewriter
                  options={{
                    strings: SITE.roles,
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 80,
                  }}
                />
              </span>
            </div>

            {/* Paragraph with light scale glow on hover */}
            <motion.p
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-xl cursor-pointer"
              whileHover={isMobile ? {} : { scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {SITE.hero.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10 w-full sm:w-auto">
              <Link
                to={SITE.hero.ctaPrimary.href}
                className="group flex items-center justify-center gap-2 px-8 h-14 gradient-bg text-white rounded-xl font-medium shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/40 transition-all hover:scale-105 w-full sm:w-auto min-w-[160px]"
              >
                {SITE.hero.ctaPrimary.label}
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <a
                href={SITE.resumeUrl}
                download
                className="flex items-center justify-center gap-2 px-8 h-14 glass rounded-xl font-medium hover:scale-105 transition-all border border-gray-200 dark:border-gray-800 w-full sm:w-auto min-w-[160px]"
              >
                <Download size={20} />
                Resume
              </a>
            </div>

            {/* Social Links with pop animation */}
            <div className="flex items-center gap-4">
              <span className="text-base text-gray-500 dark:text-gray-500">
                Connect:
              </span>
              {SITE.socials.slice(0, 3).map((social: { icon: string; label: string; href: string }) => {
                const Icon =
                  socialIcons[social.icon as keyof typeof socialIcons];
                return Icon ? (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass rounded-xl border border-transparent hover:border-brand-500/20 cursor-pointer transition-colors hover:bg-white dark:hover:bg-gray-800"
                    initial={{ scale: 1 }}
                    whileHover={isMobile ? {} : {
                      scale: 1.1,
                      rotate: 5,
                      boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)",
                    }}
                    transition={{ duration: 0.2 }}
                    aria-label={social.label}
                  >
                    <Icon size={20} className="text-brand-500" />
                  </motion.a>
                ) : null;
              })}
            </div>
          </motion.div>

          {/* 3D Visual Section - Tech Galaxy */}
          <motion.div
            initial={{ opacity: 0, scale: isMobile ? 0.95 : 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-[500px] h-[500px] flex items-center justify-center">
              {/* Central Core */}
              <div className="absolute z-20 w-24 h-24 bg-gradient-to-br from-brand-500 to-purple-600 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(99,102,241,0.5)] animate-pulse">
                <Atom size={48} className="text-white animate-spin-slow" />
              </div>

              {/* Orbit 1 - React & Frontend */}
              <div className="absolute w-[200px] h-[200px] border border-brand-500/30 rounded-full animate-spin-slow">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-900 p-2 rounded-full border border-cyan-500/20 dark:border-cyan-500/50 shadow-lg dark:shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                  <Code2 size={20} className="text-cyan-600 dark:text-cyan-400" />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-900 p-2 rounded-full border border-purple-500/20 dark:border-purple-500/50 shadow-lg dark:shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                  <Layout size={20} className="text-purple-600 dark:text-purple-500" />
                </div>
              </div>

              {/* Orbit 2 - Backend & Data */}
              <div className="absolute w-[350px] h-[350px] border border-purple-500/20 rounded-full animate-reverse-spin">
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white dark:bg-gray-900 p-3 rounded-full border border-red-500/20 dark:border-red-500/50 shadow-lg dark:shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                  <Coffee size={24} className="text-red-600 dark:text-red-500" />
                </div>
                <div className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white dark:bg-gray-900 p-3 rounded-full border border-pink-500/20 dark:border-pink-500/50 shadow-lg dark:shadow-[0_0_15px_rgba(236,72,153,0.3)]">
                  <Database size={24} className="text-pink-600 dark:text-pink-500" />
                </div>
              </div>

              {/* Orbit 3 - Tools & Languages */}
              <div className="absolute w-[500px] h-[500px] border border-cyan-500/10 rounded-full animate-spin-slower">
                <div className="absolute top-10 right-20 bg-white dark:bg-gray-900 p-3 rounded-full border border-yellow-500/20 dark:border-yellow-500/50 shadow-lg dark:shadow-[0_0_15px_rgba(234,179,8,0.3)]">
                  <FileCode size={24} className="text-yellow-600 dark:text-yellow-500" />
                </div>
                <div className="absolute bottom-10 left-20 bg-white dark:bg-gray-900 p-3 rounded-full border border-gray-200 dark:border-white/50 shadow-lg dark:shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                  <Github size={24} className="text-gray-900 dark:text-white" />
                </div>
              </div>

              {/* Floating Particles */}
              <motion.div
                className="absolute top-0 right-0 text-brand-500"
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Sparkles size={24} />
              </motion.div>
              <motion.div
                className="absolute bottom-0 left-0 text-purple-500"
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <Sparkles size={24} />
              </motion.div>
            </div>

            <style>{`
              @keyframes spin-slow {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
              @keyframes reverse-spin {
                from { transform: rotate(360deg); }
                to { transform: rotate(0deg); }
              }
              @keyframes spin-slower {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
              .animate-spin-slow { animation: spin-slow 20s linear infinite; }
              .animate-reverse-spin { animation: reverse-spin 25s linear infinite; }
              .animate-spin-slower { animation: spin-slower 30s linear infinite; }
            `}</style>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
