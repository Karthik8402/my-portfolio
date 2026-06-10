import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Download, Code2, Briefcase, GraduationCap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import { SITE } from '../data/site';
import { SKILLS } from '../data/skills';
import { Meta } from '../seo/Meta';
import { staggerContainer, fadeInUp, pageTransition, customEase } from '../utils/motionVariants';

function SkillBar({ name, level, delay = 0 }: { name: string; level: number; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{name}</span>
        <span className="text-xs font-mono text-primary">{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: customEase }}
        />
      </div>
    </div>
  );
}

function SkillCategory({ category, items, index }: { category: string; items: { name: string; level: number; icon?: React.ComponentType<{ size?: number; className?: string }> }[]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: customEase }}
      className="glass-card rounded-2xl p-6 space-y-4"
    >
      <h3 className="text-sm font-bold uppercase tracking-wider text-primary">
        {category}
      </h3>
      <div className="space-y-3">
        {items.map((skill) => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={index * 0.1} />
        ))}
      </div>
    </motion.div>
  );
}

export default function About() {
  const bioParagraphs = SITE.about.bio.split('\n\n');

  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <Meta title={`About - ${SITE.name}`} description={SITE.about.bio} path="/about" />

      <Section>
        <motion.div className="mb-12 lg:mb-16" variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/5 border border-primary/20 text-primary text-xs font-medium mb-4">
              <Star size={12} />
              About Me
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight mb-4">
              <span className="text-slate-900 dark:text-white">Discover My </span>
              <span className="gradient-text-duo">Journey</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              A quick snapshot of my experience, skills, and the work I love building.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <motion.div
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: customEase }}
          >
            <div className="space-y-5 text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              {bioParagraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {SITE.about.interests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1.5 text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full border border-slate-200 dark:border-slate-700 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-200"
                >
                  {interest}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] hover:-translate-y-0.5 text-sm"
              >
                Let's Talk
                <ArrowRight size={16} />
              </Link>
              <a
                href={SITE.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white rounded-xl font-semibold shadow-sm hover:border-primary dark:hover:border-primary transition-all duration-200 hover:-translate-y-0.5 text-sm"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.15, ease: customEase }}
          >
            <div className="glass-card rounded-2xl overflow-hidden sticky top-24 flex flex-col h-[520px] lg:h-[580px]">
              <div className="flex items-center gap-1.5 px-5 py-3.5 border-b border-slate-200 dark:border-slate-700/50 shrink-0">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs font-mono text-slate-500 dark:text-slate-400">skills.json</span>
              </div>
              <div className="p-5 space-y-4 overflow-y-auto skills-scrollbar flex-1">
                {SKILLS.map((cat, idx) => (
                  <SkillCategory key={cat.category} category={cat.category} items={cat.items} index={idx} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: customEase }}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-1 rounded-full bg-gradient-to-r from-primary to-accent-cyan" />
            <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white">
              Education & Experience
            </h2>
          </div>

          <div className="relative pl-10 sm:pl-14 space-y-10">
            <div className="absolute left-[19px] sm:left-[23px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-accent-cyan/50 to-transparent" />
            {SITE.about.timeline?.map((item: { year: string; title: string; institution: string; description: string }, idx: number) => (
              <motion.div
                key={idx}
                className="relative group"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.35, delay: idx * 0.08, ease: customEase }}
              >
                <div className="absolute -left-10 sm:-left-14 top-0.5 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center bg-white dark:bg-surface-dark group-hover:border-primary group-hover:bg-primary/5 transition-all duration-200 z-10">
                  {item.title.toLowerCase().includes('bachelor') || item.title.toLowerCase().includes('master') || item.title.toLowerCase().includes('mca') || item.title.toLowerCase().includes('b.sc') ? (
                    <GraduationCap size={16} className="text-slate-500 dark:text-slate-400 group-hover:text-primary transition-colors" />
                  ) : item.title.toLowerCase().includes('training') ? (
                    <Code2 size={16} className="text-slate-500 dark:text-slate-400 group-hover:text-primary transition-colors" />
                  ) : (
                    <Briefcase size={16} className="text-slate-500 dark:text-slate-400 group-hover:text-primary transition-colors" />
                  )}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">{item.institution}</p>
                    <p className="mt-2 text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{item.description}</p>
                  </div>
                  <span className="font-mono text-xs bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full text-slate-600 dark:text-slate-400 shrink-0 border border-slate-200 dark:border-slate-700">
                    {item.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>
    </motion.div>
  );
}
