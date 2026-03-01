import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../data/projects';
import { SITE } from '../data/site';
import { Meta } from '../seo/Meta';
import { staggerContainer, fadeInUp, pageTransition } from '../utils/motionVariants';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [showAll, setShowAll] = useState(false);

  // Extract unique categories
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    PROJECTS.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    // Simplify to major categories
    const cats = ['All', 'Frontend', 'Backend', 'Mobile'];
    return cats;
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return PROJECTS;
    const tagMap: Record<string, string[]> = {
      'Frontend': ['React', 'TypeScript', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Vite', 'HTML5 Canvas', 'Animations'],
      'Backend': ['Flask', 'Python', 'Java', 'PHP', 'MySQL', 'MongoDB', 'Firebase', 'Node.js', 'AppScript'],
      'Mobile': ['Flutter', 'Dart', 'React Native'],
    };
    const matchTags = tagMap[activeFilter] || [];
    return PROJECTS.filter((p) => p.tags.some((t) => matchTags.includes(t)));
  }, [activeFilter]);

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <Meta
        title={`Projects - ${SITE.name}`}
        description="A curated collection of my technical work"
        path="/projects"
      />

      {/* Hero Header */}
      <div className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern-light dark:bg-hero-pattern-dark opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeInUp}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight mb-4">
                <span className="text-slate-900 dark:text-white">My </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-cyan">Projects</span>
              </h1>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                A curated collection of my technical work, ranging from complex full-stack
                web applications to experimental frontend interfaces.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Section className="!pt-0">
        {/* Filter Pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => { setActiveFilter(tag); setShowAll(false); }}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === tag
                  ? 'bg-cyan-gradient text-white shadow-lg shadow-primary/25'
                  : 'bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary'
              }`}
            >
              {tag === 'All' ? 'All Projects' : tag}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          {visibleProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + idx * 0.08 }}
              className="h-full"
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        {filteredProjects.length > 6 && !showAll && (
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-8 py-4 border border-dashed border-slate-300 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-400 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all hover:-translate-y-1"
            >
              <span className="material-symbols-outlined text-base">add_circle</span>
              Load More Projects
            </button>
          </motion.div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-600 mb-4 block">folder_off</span>
            <h3 className="text-xl font-semibold text-slate-600 dark:text-slate-400">
              No projects found
            </h3>
            <p className="text-slate-500 mt-2">
              Try a different filter or check back soon!
            </p>
          </motion.div>
        )}
      </Section>
    </motion.div>
  );
}
