import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, BookOpen, Terminal, Briefcase, GraduationCap, Star, ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import { SITE } from '../data/site';
import { SKILLS } from '../data/skills';
import { Meta } from '../seo/Meta';
import { staggerContainer, fadeInUp, pageTransition, customEase } from '../utils/motionVariants';
import ParticleBackground from '../components/ParticleBackground';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const timelineIconMap: Record<string, any> = {
  Brain,
  BookOpen,
  Terminal,
  Briefcase,
  GraduationCap,
};

function SkillBar({ name, level, delay = 0 }: { name: string; level: number; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-[var(--color-foreground)]">{name}</span>
        <span className="text-xs font-mono text-primary">{level}%</span>
      </div>
      <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent-cyan"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: customEase }}
        />
      </div>
    </div>
  );
}

function SkillCategory({ category, items, index }: { category: string; items: { name: string; level: number }[]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: customEase }}
      className="glass-panel rounded-2xl p-6 space-y-4 flex flex-col justify-between"
    >
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">
          {category}
        </h3>
        <div className="space-y-4">
          {items.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={index * 0.05} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  const bioParagraphs = SITE.about.bio.split('\n\n');

  return (
    <motion.div className="relative isolate" variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <Meta title={`About - ${SITE.name}`} description={SITE.about.bio} path="/about" />
      <ParticleBackground />

      <Section className="relative z-10">
        {/* Page Header */}
        <motion.div className="mb-12 lg:mb-16" variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={fadeInUp}>
            <div className="section-label mb-4">
              <Star size={12} />
              About Me
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight mb-4">
              <span className="text-[var(--color-foreground)]">Discover My </span>
              <span className="gradient-text-duo">Journey</span>
            </h1>
            <p className="text-lg text-[var(--color-muted)] max-w-2xl">
              A quick snapshot of my experience, skills, and the work I love building.
            </p>
          </motion.div>
        </motion.div>

        {/* Top Grid: Bio Text & Quick Info Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <motion.div
            className="lg:col-span-8 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: customEase }}
          >
            <div className="space-y-5 text-base md:text-lg leading-relaxed text-[var(--color-foreground)] opacity-90">
              {bioParagraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {SITE.about.interests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1.5 text-xs font-mono rounded-full border transition-all duration-300 hover:border-primary hover:text-primary"
                  style={{
                    backgroundColor: 'var(--color-surface-alt)',
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-muted)',
                  }}
                >
                  {interest}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 text-sm"
              >
                Let's Talk
                <ArrowRight size={16} />
              </Link>
              <a
                href={SITE.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-6 py-3 border rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5 text-sm"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-foreground)',
                }}
              >
                <Download size={16} />
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Sidebar Quick Info card */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: customEase }}
          >
            <div className="glass-panel p-6 rounded-2xl sticky top-24 space-y-6 shadow-soft-lg">
              <h3 className="text-base font-bold font-display text-[var(--color-foreground)] pb-3 border-b"
                  style={{ borderColor: 'var(--color-border)' }}>
                Quick Details
              </h3>
              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-xs text-[var(--color-muted)] uppercase tracking-wider block mb-1">Location</span>
                  <span className="text-[var(--color-foreground)] font-semibold">{SITE.location}</span>
                </div>
                <div>
                  <span className="text-xs text-[var(--color-muted)] uppercase tracking-wider block mb-1">Email</span>
                  <a href={`mailto:${SITE.email}`} className="text-primary hover:underline font-semibold block truncate">{SITE.email}</a>
                </div>
                <div>
                  <span className="text-xs text-[var(--color-muted)] uppercase tracking-wider block mb-1">Experience</span>
                  <span className="text-[var(--color-foreground)] font-semibold">{SITE.experience}</span>
                </div>
                <div>
                  <span className="text-xs text-[var(--color-muted)] uppercase tracking-wider block mb-1">Preferred Role</span>
                  <span className="text-[var(--color-foreground)] font-semibold">{SITE.roles[0]}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technical Skills Grid Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: customEase }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-1 rounded-full bg-gradient-to-r from-primary to-accent-cyan" />
            <h2 className="text-2xl md:text-3xl font-display font-bold text-[var(--color-foreground)]">
              Technical Skills
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {SKILLS.map((cat, idx) => (
              <SkillCategory key={cat.category} category={cat.category} items={cat.items} index={idx} />
            ))}
          </div>
        </motion.div>

        {/* Education & Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: customEase }}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-1 rounded-full bg-gradient-to-r from-primary to-accent-cyan" />
            <h2 className="text-2xl md:text-3xl font-display font-bold text-[var(--color-foreground)]">
              Education & Experience
            </h2>
          </div>

          <div className="relative pl-10 sm:pl-14 space-y-10">
            <div className="absolute left-[19px] sm:left-[23px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-accent-cyan/50 to-transparent" />
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {SITE.about.timeline?.map((item: any, idx: number) => {
              const IconComponent = timelineIconMap[item.icon] || Briefcase;
              return (
                <motion.div
                  key={idx}
                  className="relative group"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.45, delay: idx * 0.08, ease: customEase }}
                >
                  <div
                    className="absolute -left-10 sm:-left-14 top-0.5 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 z-10"
                    style={{
                      backgroundColor: 'var(--color-surface)',
                      borderColor: 'var(--color-border)',
                    }}
                  >
                    <IconComponent size={16} className="text-[var(--color-muted)] group-hover:text-primary transition-colors duration-300" />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[var(--color-foreground)] group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[var(--color-muted)] mt-0.5">{item.institution}</p>
                      <p className="mt-2 text-[var(--color-muted)] leading-relaxed text-sm">{item.description}</p>
                    </div>
                    <span
                      className="font-mono text-xs px-3 py-1 rounded-full shrink-0 border"
                      style={{
                        backgroundColor: 'var(--color-surface-alt)',
                        borderColor: 'var(--color-border)',
                        color: 'var(--color-muted)',
                      }}
                    >
                      {item.year}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Section>
    </motion.div>
  );
}
