import { useParams, Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Github, Clock, AlertCircle, CheckCircle2, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { SITE } from '../data/site';
import { Meta } from '../seo/Meta';
import { pageTransition, fadeInUp, staggerContainer } from '../utils/motionVariants';

const techCategories: Record<string, { tags: string[]; color: string }> = {
  Frontend: { tags: ['React', 'TypeScript', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Vite', 'HTML5 Canvas', 'Animations', 'Framer Motion', 'CSS3', 'HTML5', 'Vanilla JavaScript', 'Parallax', 'Flutter', 'Dart', 'Provider', 'Google Fonts'], color: 'border-l-blue-500 bg-blue-50/50 dark:bg-blue-900/10' },
  Backend: { tags: ['Flask', 'FastAPI', 'Python', 'Java', 'PHP', 'Node.js', 'AppScript', 'Express', 'MVC Architecture', 'Console Application', 'HashMap', 'Scanner', 'DecimalFormat'], color: 'border-l-green-500 bg-green-50/50 dark:bg-green-900/10' },
  'AI / Data': { tags: ['Google Gemini AI', 'RAG', 'MCP', 'PyTorch', 'spaCy', 'AI Assistant', 'OOP', 'LangGraph', 'ChromaDB'], color: 'border-l-purple-500 bg-purple-50/50 dark:bg-purple-900/10' },
  'Database': { tags: ['Firebase', 'MongoDB', 'MySQL', 'Firestore', 'PostgreSQL', 'Supabase', 'Google Sign-In'], color: 'border-l-emerald-500 bg-emerald-50/50 dark:bg-emerald-900/10' },
  'Tools': { tags: ['Docker', 'Git', 'GitHub', 'Vercel', 'Azure', 'Web Development'], color: 'border-l-slate-500 bg-slate-50/50 dark:bg-slate-800/50' },
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl md:text-2xl font-bold font-display text-slate-900 dark:text-white mb-5 flex items-center gap-3">
      <span className="block w-1 h-6 rounded-full bg-gradient-to-b from-primary to-accent-cyan" />
      {children}
    </h2>
  );
}

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const prefersReduced = useReducedMotion();

  const projectIndex = PROJECTS.findIndex((p) => p.id === id);
  const project = PROJECTS[projectIndex];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center px-6">
          <div className="text-6xl mb-4 opacity-20">⊘</div>
          <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-2">Project not found</h2>
          <Link to="/projects" className="text-primary hover:underline inline-flex items-center gap-1">
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const prevProject = projectIndex > 0 ? PROJECTS[projectIndex - 1] : null;
  const nextProject = projectIndex < PROJECTS.length - 1 ? PROJECTS[projectIndex + 1] : null;
  const detail = project.detail;

  const activeTechCategories = Object.entries(techCategories)
    .map(([category, { tags }]) => ({
      category,
      tags: tags.filter((t) => project.tags.includes(t)),
    }))
    .filter((c) => c.tags.length > 0);

  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <Meta
        title={`${project.title} - ${SITE.name}`}
        description={project.description}
        path={`/projects/${project.id}`}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8 lg:py-12 relative z-10">

        <motion.nav
          aria-label="Breadcrumb"
          className="flex mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.05 }}
        >
          <ol className="inline-flex items-center space-x-2">
            <li>
              <Link
                to="/projects"
                className="text-sm text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-white transition-colors"
              >
                Projects
              </Link>
            </li>
            <li className="flex items-center">
              <span className="mx-1 text-slate-400">/</span>
            </li>
            <li>
              <span className="text-sm font-medium text-slate-900 dark:text-white">
                {project.title}
              </span>
            </li>
          </ol>
        </motion.nav>

        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold tracking-tight mb-3">
              <span className="gradient-text-duo">
                {project.title}
              </span>
            </h1>
            <p className="text-base lg:text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              {project.description}
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex gap-3 shrink-0">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold shadow-lg hover:shadow-glow transition-all hover:-translate-y-0.5"
              >
                <Sparkles size={16} />
                Live Demo
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white text-sm font-bold shadow-sm hover:border-primary dark:hover:border-primary transition-all hover:-translate-y-0.5"
              >
                <Github size={16} />
                View Code
              </a>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full h-56 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl shadow-primary/5 mb-12 relative group"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            onError={(e) => {
              e.currentTarget.src = `https://placehold.co/1200x600/0f172a/38bdf8?text=${project.title.split(' ').join('+')}`;
            }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">
            <motion.section
              initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
              whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4 }}
            >
              <SectionHeading>About the Project</SectionHeading>
              <div className="space-y-4">
                {detail.about.map((paragraph, idx) => (
                  <p key={idx} className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              {detail.duration && (
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm">
                  <Clock size={14} />
                  {detail.duration}
                </div>
              )}
            </motion.section>

            <motion.section
              initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
              whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              <SectionHeading>Key Features</SectionHeading>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {detail.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="glass-card p-5 rounded-xl border-l-4 border-l-primary hover:shadow-glow transition-all duration-300"
                    initial={prefersReduced ? {} : { opacity: 0, x: -12 }}
                    whileInView={prefersReduced ? {} : { opacity: 1, x: 0 }}
                    whileHover={prefersReduced ? {} : { y: -3 }}
                    viewport={{ once: true }}
                    transition={{
                      default: { delay: idx * 0.06, duration: 0.35 },
                      y: { type: 'spring', stiffness: 350, damping: 22 },
                    }}
                  >
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1.5 flex items-center gap-2">
                      <span className="text-primary">{feature.title}</span>
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
              whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              <SectionHeading>Challenges & Solutions</SectionHeading>
              <div className="space-y-4">
                {detail.challenges.map((challenge, idx) => (
                  <motion.div
                    key={idx}
                    className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/60"
                    initial={prefersReduced ? {} : { opacity: 0, y: 10 }}
                    whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.35 }}
                  >
                    <div className="flex gap-3 items-start p-4 bg-red-50/60 dark:bg-red-900/10 border-b border-red-100 dark:border-red-900/20">
                      <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                        {challenge.problem}
                      </p>
                    </div>
                    <div className="flex gap-3 items-start p-4 bg-green-50/40 dark:bg-green-900/10">
                      <CheckCircle2 size={18} className="text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                      <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed">
                        <span className="font-semibold">Solution: </span>{challenge.solution}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section
              className="lg:hidden"
              initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
              whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4 }}
            >
              <SectionHeading>Technologies</SectionHeading>
              <div className="space-y-4">
                {activeTechCategories.map(({ category, tags }) => (
                  <div key={category}>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">
                      {category}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          <div className="hidden lg:block lg:col-span-1">
            <div className="glass-card p-6 rounded-2xl sticky top-24 space-y-5">
              <h3 className="text-base font-bold font-display text-slate-900 dark:text-white pb-3 border-b border-slate-200 dark:border-slate-700">
                Technologies
              </h3>
              <div className="space-y-5">
                {activeTechCategories.map(({ category, tags }) => (
                    <div key={category}>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">
                      {category}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-xs font-medium border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {detail.duration && (
                <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                    Duration
                  </span>
                  <span className="text-sm font-medium text-slate-900 dark:text-white flex items-center gap-1.5">
                    <Clock size={14} className="text-primary" />
                    {detail.duration}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.id}`}
              className="group glass-card p-4 rounded-xl flex items-center gap-4 border border-slate-200 dark:border-slate-800 hover:border-primary/30 dark:hover:border-primary/30 hover:shadow-glow transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 group-hover:bg-primary/10 group-hover:text-primary transition-all shrink-0">
                <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
              </div>
              <div className="min-w-0">
                <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Previous</span>
                <span className="block text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors truncate mt-0.5">
                  {prevProject.title}
                </span>
              </div>
            </Link>
          ) : <div className="hidden sm:block" />}

          {nextProject ? (
            <Link
              to={`/projects/${nextProject.id}`}
              className="group glass-card p-4 rounded-xl flex items-center justify-between gap-4 border border-slate-200 dark:border-slate-800 hover:border-primary/30 dark:hover:border-primary/30 hover:shadow-glow transition-all duration-300"
            >
              <div className="min-w-0 text-left">
                <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Next</span>
                <span className="block text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors truncate mt-0.5">
                  {nextProject.title}
                </span>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 group-hover:bg-primary/10 group-hover:text-primary transition-all shrink-0">
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ) : <div className="hidden sm:block" />}
        </div>
      </div>
    </motion.div>
  );
}
