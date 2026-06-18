import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard3D';
import { PROJECTS } from '../data/projects';
import { SITE } from '../data/site';
import { Meta } from '../seo/Meta';
import { staggerContainer, fadeInUp, pageTransition, customEase } from '../utils/motionVariants';
import ParticleBackground from '../components/ParticleBackground';

const filterTabs = [
  { key: 'All', label: 'All Projects' },
  { key: 'Frontend', label: 'Frontend' },
  { key: 'Backend', label: 'Backend' },
  { key: 'Mobile', label: 'Mobile' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return PROJECTS;
    const tagMap: Record<string, string[]> = {
      'Frontend': ['React', 'TypeScript', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Vite', 'HTML5 Canvas', 'Animations', 'Framer Motion', 'CSS3', 'HTML5'],
      'Backend': ['Flask', 'FastAPI', 'Python', 'Java', 'PHP', 'MySQL', 'MongoDB', 'Firebase', 'Node.js', 'AppScript', 'PostgreSQL', 'Supabase', 'LangGraph'],
      'Mobile': ['Flutter', 'Dart', 'React Native'],
    };
    const matchTags = tagMap[activeFilter] || [];
    return PROJECTS.filter((p) => p.tags.some((t) => matchTags.includes(t)));
  }, [activeFilter]);

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <motion.div className="relative isolate" variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <Meta
        title={`Projects - ${SITE.name}`}
        description="A curated collection of my technical work"
        path="/projects"
      />
      <ParticleBackground />

      <div className="relative z-10 pt-16 lg:pt-20">
        <div className="relative z-10 py-16 lg:py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <motion.div variants={staggerContainer} initial="hidden" animate="visible">
              <motion.div variants={fadeInUp}>
                <div className="section-label mb-4 justify-center inline-flex">
                  <Sparkles size={12} />
                  My Work
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight mb-4">
                  <span className="text-[var(--color-foreground)]">Featured </span>
                  <span className="gradient-text-duo">Projects</span>
                </h1>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <p className="text-base lg:text-lg text-[var(--color-muted)] max-w-2xl mx-auto">
                  A curated collection of my technical work, ranging from complex full-stack
                  web applications to experimental frontend interfaces.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <Section className="relative z-10 !pt-0">
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => { setActiveFilter(tab.key); setShowAll(false); }}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 border ${
                activeFilter === tab.key
                  ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20'
                  : 'bg-[var(--color-surface)] border-[var(--color-border)] text-[var(--color-muted)] hover:border-primary hover:text-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: customEase }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch"
          >
            {visibleProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.06, duration: 0.4, ease: customEase }}
                className="h-full"
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length > 6 && !showAll && (
          <motion.div
            className="flex justify-center mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-6 py-3 border border-dashed rounded-xl text-sm transition-all hover:-translate-y-0.5"
              style={{
                borderColor: 'var(--color-border)',
                color: 'var(--color-muted)',
              }}
            >
              Load More Projects ({filteredProjects.length - 6} remaining)
            </button>
          </motion.div>
        )}

        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-4xl mb-4 opacity-20 text-[var(--color-foreground)]">&#8854;</div>
            <h3 className="text-lg font-semibold text-[var(--color-muted)]">
              No projects found
            </h3>
            <p className="text-sm text-[var(--color-muted)] mt-1">
              Try a different filter or check back soon!
            </p>
          </motion.div>
        )}
      </Section>
    </motion.div>
  );
}
