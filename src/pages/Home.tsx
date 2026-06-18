import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { Download, ArrowRight, ChevronDown, Github, Linkedin, Twitter } from 'lucide-react';
import { SITE } from '../data/site';
import { Meta } from '../seo/Meta';
import { staggerContainer, fadeInUp, pageTransition } from '../utils/motionVariants';
import HeroCanvas from '../components/HeroCanvas';
import { useReducedMotion } from '../hooks/useReducedMotion';

const socialIconMap: Record<string, typeof Github> = { Github, Linkedin, Twitter };

export default function Home() {
  const [firstName, ...restName] = SITE.name.split(' ');
  const lastName = restName.join(' ');
  const reducedMotion = useReducedMotion();

  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit" className="flex-1">
      <Meta
        title={`${SITE.name} - ${SITE.roles[0]}`}
        description={SITE.hero.subtitle}
        path="/"
      />

      <div
        id="hero-section"
        className="min-h-[calc(100vh-64px)] lg:min-h-[calc(100vh-80px)] flex items-center justify-center relative overflow-hidden bg-background"
      >
        {/* Hero 3D GLSL Canvas - Centered on mobile, positioned on the right side on desktop */}
        <motion.div
          className="hero-canvas-container absolute inset-y-0 right-0 z-0 w-full lg:w-[50%] pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reducedMotion ? 0.3 : 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <HeroCanvas />
        </motion.div>

        <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-background/10 via-transparent to-background" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-8">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-6"
              >
                <motion.div variants={fadeInUp} className="stagger-item">
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono tracking-wider uppercase shadow-[0_0_15px_rgba(16,185,129,0.05)]">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span>Available for work</span>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="space-y-2 stagger-item">
                  <span className="text-sm font-mono tracking-widest uppercase text-primary font-bold">
                    Hi, I'm
                  </span>
                  <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight leading-none text-white">
                    {firstName}{' '}
                    <span className="block mt-2 shimmer-text">
                      {lastName || firstName}
                    </span>
                  </h1>
                </motion.div>

                <motion.div variants={fadeInUp} className="stagger-item">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 text-lg md:text-xl font-display text-zinc-400">
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded-md shadow-[0_0_15px_rgba(6,182,212,0.05)] uppercase tracking-wider self-start sm:self-auto">
                      {SITE.experience}
                    </span>
                    <span className="hidden sm:inline text-zinc-800">|</span>
                    <span className="font-semibold text-white min-h-[1.5em] flex items-center">
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

                <motion.div variants={fadeInUp} className="stagger-item">
                  <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed font-sans font-light">
                    {SITE.hero.subtitle}
                  </p>
                </motion.div>

                <motion.div variants={fadeInUp} className="stagger-item">
                  <div className="flex flex-col sm:flex-row gap-4 mt-2">
                    <Link
                      to={SITE.hero.ctaPrimary.href}
                      className="group relative px-8 py-4 bg-primary hover:bg-primary/95 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] inline-flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.5)]"
                    >
                      <span>View Projects</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                    <a
                      href={SITE.hero.ctaSecondary.href}
                      download
                      className="group px-8 py-4 rounded-xl font-semibold border border-zinc-800 bg-zinc-900/40 text-zinc-300 hover:text-white hover:bg-zinc-900/80 hover:border-zinc-700 transition-all duration-300 inline-flex items-center justify-center gap-2"
                    >
                      <Download size={16} className="text-zinc-400 group-hover:text-white transition-colors duration-300" />
                      Download Resume
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="stagger-item">
                  <div className="flex items-center gap-4 text-sm mt-4 text-zinc-400">
                    <span className="font-mono text-xs uppercase tracking-wider text-zinc-500">Find me on</span>
                    <div className="flex gap-2.5">
                      {SITE.socials
                        .filter((s: { icon: string }) => s.icon !== 'Mail' && s.icon !== 'Email')
                        .map((social: { icon: string; label: string; href: string }) => {
                          const Icon = socialIconMap[social.icon];
                          return Icon ? (
                            <motion.a
                              key={social.label}
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 rounded-xl border border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors duration-300"
                              whileHover={{ y: -3, scale: 1.05 }}
                              whileTap={{ scale: 0.97 }}
                              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                              aria-label={social.label}
                            >
                              <Icon size={16} />
                            </motion.a>
                          ) : null;
                        })}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>
            <ChevronDown size={20} className="text-[var(--color-muted)]" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
