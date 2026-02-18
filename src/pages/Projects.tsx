import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Sparkles } from 'lucide-react';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../data/projects';
import { SITE } from '../data/site';
import { Meta } from '../seo/Meta';
import { staggerContainer, fadeInUp, pageTransition } from '../utils/motionVariants';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  // Extract unique tags from all projects
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    PROJECTS.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return ['All', ...Array.from(tags).sort()];
  }, []);

  // Filter projects based on active tag
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return PROJECTS;
    return PROJECTS.filter((p) => p.tags.includes(activeFilter));
  }, [activeFilter]);

  const featured = filteredProjects.filter((p) => p.featured);
  const other = filteredProjects.filter((p) => !p.featured);

  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <Meta
        title={`Projects - ${SITE.name}`}
        description="A showcase of my recent work and projects"
        path="/projects"
      />

      <Section>
        {/* Header */}
        <motion.div
          className="mb-12"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-4">
              <FolderGit2 className="text-accent" size={32} />
              <h1 className="text-h1 font-bold font-heading">Projects</h1>
            </div>
            <div className="w-20 h-1 gradient-bg mb-4" />
            <p className="text-lg text-text-secondary max-w-2xl">
              A curated selection of projects showcasing my expertise in modern
              web development
            </p>
          </motion.div>
        </motion.div>

        {/* Filter Tags */}
        <motion.div
          className="flex flex-wrap gap-2 mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {allTags.slice(0, 12).map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all border ${
                activeFilter === tag
                  ? 'bg-accent/10 text-accent border-accent/30'
                  : 'bg-bg-surface text-text-muted border-[var(--color-border)] hover:text-text-secondary hover:border-accent/20'
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Featured Projects */}
        {featured.length > 0 && (
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-8">
              <h2 className="text-2xl font-semibold font-heading">Featured Projects</h2>
              <Sparkles className="text-amber-400" size={20} />
            </div>
            <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
              {featured.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="h-full"
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Other Projects */}
        {other.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-2 mb-8">
              <FolderGit2 className="text-accent" size={20} />
              <h2 className="text-2xl font-semibold font-heading">More Projects</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {other.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="h-full"
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <FolderGit2 className="mx-auto text-text-muted mb-4" size={64} />
            <h3 className="text-xl font-semibold text-text-secondary">
              No projects found
            </h3>
            <p className="text-text-muted mt-2">
              Try a different filter or check back soon!
            </p>
          </motion.div>
        )}
      </Section>
    </motion.div>
  );
}
