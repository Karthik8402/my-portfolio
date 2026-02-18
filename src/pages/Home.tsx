import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { ArrowRight, Download, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import Section from '../components/Section';
import { SITE } from '../data/site';
import { Meta } from '../seo/Meta';
import { useMobile } from '../hooks/useMobile';
import { staggerContainer, fadeInUp, pageTransition } from '../utils/motionVariants';
import { lazy, Suspense } from 'react';

const ParticleField = lazy(() => import('../components/canvas/ParticleField'));

const socialIcons = { Github, Linkedin, Mail };

export default function Home() {
  const isMobile = useMobile();

  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <Meta
        title={`${SITE.name} - ${SITE.roles[0]}`}
        description={SITE.hero.subtitle}
        path="/"
      />

      <div className="relative min-h-screen overflow-hidden flex items-center justify-center">
        {/* Canvas Particle Background - Full Screen */}
        {!isMobile && (
          <div className="absolute inset-0 z-0">
            <Suspense fallback={null}>
              <ParticleField />
            </Suspense>
          </div>
        )}

        {/* Subtle grid overlay - Full Screen */}
        <div className="absolute inset-0 -z-10 opacity-[0.04] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, var(--color-border) 1px, transparent 1px),
                                linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        {/* Radial gradient glow */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />
        </div>

        {/* Content Section */}
        <Section className="z-10 relative">
          <div className="w-full max-w-4xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {/* Available Badge */}
              <motion.div variants={fadeInUp}>
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-sm">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
                  </span>
                  <span className="text-sm font-medium text-text-secondary">
                    Available for work
                  </span>
                </div>
              </motion.div>

              {/* Headline */}
              <motion.div variants={fadeInUp}>
                <h1 className="text-hero font-bold font-heading leading-[1.05] mb-6 tracking-tight">
                  <span className="block text-text-primary">Hi, I'm</span>
                  <span className="gradient-text block">{SITE.name}</span>
                </h1>
              </motion.div>

              {/* Typewriter Roles */}
              <motion.div variants={fadeInUp}>
                <div className="text-xl md:text-2xl lg:text-3xl mb-8 font-medium flex items-center gap-3 font-heading">
                  <span className="text-text-muted">
                    {SITE.experience} |
                  </span>
                  <span className="text-accent">
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
                <p className="text-lg md:text-xl text-text-secondary mb-10 leading-relaxed max-w-2xl">
                  {SITE.hero.subtitle}
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div variants={fadeInUp}>
                <div className="flex flex-wrap gap-4 mb-10">
                  <Link
                    to={SITE.hero.ctaPrimary.href}
                    className="group flex items-center justify-center gap-2 px-8 h-14 gradient-bg text-white rounded-xl font-medium shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all hover:scale-105"
                  >
                    {SITE.hero.ctaPrimary.label}
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                  <a
                    href={SITE.hero.ctaSecondary.href}
                    download
                    className="flex items-center justify-center gap-2 px-8 h-14 rounded-xl font-medium hover:scale-105 transition-all border border-[var(--color-border)] hover:border-accent/40 bg-bg-surface/50 backdrop-blur-sm text-text-primary"
                  >
                    <Download size={20} />
                    {SITE.hero.ctaSecondary.label}
                  </a>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={fadeInUp}>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-text-muted">Connect:</span>
                  {SITE.socials.slice(0, 3).map((social: { icon: string; label: string; href: string }) => {
                    const Icon = socialIcons[social.icon as keyof typeof socialIcons];
                    return Icon ? (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl border border-[var(--color-border)] bg-bg-surface/50 backdrop-blur-sm hover:border-accent/40 transition-all text-text-secondary hover:text-accent"
                        whileHover={isMobile ? {} : { scale: 1.1, y: -2 }}
                        transition={{ duration: 0.2 }}
                        aria-label={social.label}
                      >
                        <Icon size={18} />
                      </motion.a>
                    ) : null;
                  })}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <span className="text-xs text-text-muted font-medium tracking-widest uppercase">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ChevronDown size={20} className="text-accent/60" />
            </motion.div>
          </motion.div>
        </Section>
      </div>
    </motion.div>
  );
}