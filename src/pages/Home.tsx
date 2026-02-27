import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { Download } from 'lucide-react';
import { SITE } from '../data/site';
import { Meta } from '../seo/Meta';
import { staggerContainer, fadeInUp, pageTransition } from '../utils/motionVariants';

// Raw SVG paths matching the Stitch template exactly (from 1. Home Page.html lines 179-184)
const GithubSVG = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinSVG = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export default function Home() {
  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit" className="flex-1">
      <Meta
        title={`${SITE.name} - ${SITE.roles[0]}`}
        description={SITE.hero.subtitle}
        path="/"
      />

      {/* Hero — fills full viewport minus navbar (80px) */}
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column */}
            <div className="lg:col-span-8">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-5"
              >
                {/* Available Badge */}
                <motion.div variants={fadeInUp}>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
                    </span>
                    Available for work
                  </div>
                </motion.div>

                {/* Name */}
                <motion.div variants={fadeInUp} className="space-y-1">
                  <h2 className="text-2xl md:text-3xl font-display font-medium text-slate-500 dark:text-slate-400">
                    Hi, I'm
                  </h2>
                  <h1 className="text-6xl md:text-7xl lg:text-9xl font-display font-extrabold tracking-tight leading-none">
                    <span className="text-slate-900 dark:text-white">Karthik</span>{' '}
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-cyan">Kumar</span>
                  </h1>
                </motion.div>

                {/* Role — Typewriter */}
                <motion.div variants={fadeInUp}>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 text-xl md:text-2xl font-display text-slate-600 dark:text-slate-300">
                    <span className="opacity-60">{SITE.experience}</span>
                    <span className="hidden md:inline text-primary opacity-40">|</span>
                    <span className="font-semibold text-slate-800 dark:text-white min-h-[1.5em]">
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
                </motion.div>

                {/* Subtitle */}
                <motion.div variants={fadeInUp}>
                  <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                    {SITE.hero.subtitle}
                  </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div variants={fadeInUp}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to={SITE.hero.ctaPrimary.href}
                      className="group relative px-8 py-4 bg-primary rounded-xl font-semibold text-white shadow-lg shadow-primary/25 overflow-hidden transition-all hover:scale-105 hover:shadow-primary/40 focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark inline-flex items-center gap-2"
                    >
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer-btn" />
                      <span>View Projects</span>
                      <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                    <a
                      href={SITE.hero.ctaSecondary.href}
                      download
                      className="group px-8 py-4 rounded-xl font-semibold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary transition-all hover:bg-slate-100 dark:hover:bg-slate-800/50 flex items-center justify-center gap-2"
                    >
                      <Download size={18} />
                      Download Resume
                    </a>
                  </div>
                </motion.div>

                {/* Connect — small bordered boxes with raw SVG, matching Stitch template exactly */}
                <motion.div variants={fadeInUp}>
                  <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <span>Connect:</span>
                    <div className="flex gap-2">
                      <a
                        href={SITE.socials.find((s: { icon: string }) => s.icon === 'Github')?.href || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-colors bg-white dark:bg-slate-800/50 text-slate-600 dark:text-slate-400"
                        aria-label="GitHub"
                      >
                        <GithubSVG />
                      </a>
                      <a
                        href={SITE.socials.find((s: { icon: string }) => s.icon === 'Linkedin')?.href || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-colors bg-white dark:bg-slate-800/50 text-slate-600 dark:text-slate-400"
                        aria-label="LinkedIn"
                      >
                        <LinkedinSVG />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Column — Code Visual */}
            <div className="hidden lg:block lg:col-span-4 relative">
              <motion.div
                className="relative w-full aspect-square"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-slate-700 dark:border-slate-600 rounded-lg transform rotate-12 opacity-40" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-primary/30 rounded-lg transform -rotate-6" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-900 dark:to-black rounded-xl border border-slate-700 shadow-2xl flex items-center justify-center overflow-hidden">
                  <div className="text-xs font-mono text-primary/80 p-4 leading-relaxed opacity-80">
                    &lt;Developer&gt;<br />
                    {'  '}name: "Karthik";<br />
                    {'  '}stack: ["React",<br />
                    {'    '}"Node", "Java"];<br />
                    {'  '}status: "Ready";<br />
                    &lt;/Developer&gt;
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
}