import { useParams, Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Github, Clock, AlertCircle, CheckCircle2, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { SITE } from '../data/site';
import { Meta } from '../seo/Meta';
import { pageTransition, fadeInUp, staggerContainer } from '../utils/motionVariants';
import ParticleBackground from '../components/ParticleBackground';

const techCategories: Record<string, { tags: string[]; color: string }> = {
  Frontend: { tags: ['React', 'TypeScript', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Vite', 'HTML5 Canvas', 'Animations', 'Framer Motion', 'CSS3', 'HTML5', 'Vanilla JavaScript', 'Parallax', 'Flutter', 'Dart', 'Provider', 'Google Fonts'], color: 'border-l-blue-500 bg-blue-950/20' },
  Backend: { tags: ['Flask', 'FastAPI', 'Python', 'Java', 'PHP', 'Node.js', 'AppScript', 'Express', 'MVC Architecture', 'Console Application', 'HashMap', 'Scanner', 'DecimalFormat'], color: 'border-l-green-500 bg-green-950/20' },
  'AI / Data': { tags: ['Google Gemini AI', 'RAG', 'MCP', 'PyTorch', 'spaCy', 'AI Assistant', 'OOP', 'LangGraph', 'ChromaDB'], color: 'border-l-purple-500 bg-purple-950/20' },
  'Database': { tags: ['Firebase', 'MongoDB', 'MySQL', 'Firestore', 'PostgreSQL', 'Supabase', 'Google Sign-In'], color: 'border-l-emerald-500 bg-emerald-950/20' },
  'Tools': { tags: ['Docker', 'Git', 'GitHub', 'Vercel', 'Azure', 'Web Development'], color: 'border-l-slate-500 bg-zinc-900/40' },
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl md:text-2xl font-bold font-display text-[var(--color-foreground)] mb-5 flex items-center gap-3">
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
          <div className="text-6xl mb-4 opacity-20 text-[var(--color-foreground)]">&#8854;</div>
          <h2 className="text-2xl font-display font-bold text-[var(--color-foreground)] mb-2">Project not found</h2>
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
    <motion.div className="relative isolate" variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <Meta
        title={`${project.title} - ${SITE.name}`}
        description={project.description}
        path={`/projects/${project.id}`}
      />
      <ParticleBackground />

      <div className="relative z-10">
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
                  className="text-sm text-[var(--color-muted)] hover:text-primary transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li className="flex items-center">
                <span className="mx-1 text-zinc-500">/</span>
              </li>
              <li>
                <span className="text-sm font-medium text-[var(--color-foreground)]">
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
              <p className="text-base lg:text-lg text-[var(--color-muted)] max-w-2xl">
                {project.description}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex gap-3 shrink-0">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-bold shadow-lg hover:-translate-y-0.5 transition-all"
                  style={{
                    boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)',
                  }}
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
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border text-sm font-bold shadow-sm hover:border-primary transition-all hover:-translate-y-0.5"
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-foreground)',
                  }}
                >
                  <Github size={16} />
                  View Code
                </a>
              )}
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full h-56 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl shadow-primary/5 mb-12 relative group border"
            style={{ borderColor: 'var(--color-border)' }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              onError={(e) => {
                e.currentTarget.src = `https://placehold.co/1200x600/18181b/2563EB?text=${project.title.split(' ').join('+')}`;
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
                    <p key={idx} className="text-[var(--color-foreground)] leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {detail.duration && (
                  <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm"
                       style={{ backgroundColor: 'var(--color-surface-alt)', color: 'var(--color-muted)' }}>
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
                      className="glass-panel p-5 rounded-xl border-l-4 border-l-primary hover:shadow-glow transition-all duration-300"
                      initial={prefersReduced ? {} : { opacity: 0, x: -12 }}
                      whileInView={prefersReduced ? {} : { opacity: 1, x: 0 }}
                      whileHover={prefersReduced ? {} : { y: -3 }}
                      viewport={{ once: true }}
                      transition={{
                        default: { delay: idx * 0.06, duration: 0.35 },
                        y: { type: 'spring', stiffness: 350, damping: 22 },
                      }}
                    >
                      <h3 className="font-bold text-[var(--color-foreground)] mb-1.5 flex items-center gap-2">
                        <span className="text-primary">{feature.title}</span>
                      </h3>
                      <p className="text-sm text-[var(--color-muted)] leading-relaxed">
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
                      className="rounded-xl overflow-hidden border"
                      style={{ borderColor: 'var(--color-border)' }}
                      initial={prefersReduced ? {} : { opacity: 0, y: 10 }}
                      whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08, duration: 0.35 }}
                    >
                      <div className="flex gap-3 items-start p-4 bg-red-950/20 border-b"
                           style={{ borderBottomColor: 'var(--color-border)' }}>
                        <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
                        <p className="text-sm font-semibold text-[var(--color-foreground)] leading-snug">
                          {challenge.problem}
                        </p>
                      </div>
                      <div className="flex gap-3 items-start p-4 bg-green-950/10">
                        <CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" />
                        <p className="text-sm text-green-300 leading-relaxed">
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
                      <span className="text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-2 block">
                        {category}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md text-xs font-medium border"
                            style={{
                              backgroundColor: 'var(--color-surface-alt)',
                              borderColor: 'var(--color-border)',
                              color: 'var(--color-foreground)',
                            }}
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
              <div className="glass-panel p-6 rounded-2xl sticky top-24 space-y-5">
                <h3 className="text-base font-bold font-display text-[var(--color-foreground)] pb-3 border-b"
                    style={{ borderColor: 'var(--color-border)' }}>
                  Technologies
                </h3>
                <div className="space-y-5">
                  {activeTechCategories.map(({ category, tags }) => (
                      <div key={category}>
                      <span className="text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-2 block">
                        {category}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md text-xs font-medium border"
                            style={{
                              backgroundColor: 'var(--color-surface-alt)',
                              borderColor: 'var(--color-border)',
                              color: 'var(--color-foreground)',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {detail.duration && (
                  <div className="pt-4 border-t" style={{ borderColor: 'var(--color-border)' }}>
                    <span className="text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wider block mb-1">
                      Duration
                    </span>
                    <span className="text-sm font-medium text-[var(--color-foreground)] flex items-center gap-1.5">
                      <Clock size={14} className="text-primary" />
                      {detail.duration}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
               style={{ borderColor: 'var(--color-border)' }}>
            {prevProject ? (
              <Link
                to={`/projects/${prevProject.id}`}
                className="group glass-panel p-4 rounded-xl flex items-center gap-4 hover:border-primary/30 hover:shadow-glow transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-zinc-500 group-hover:bg-primary/10 group-hover:text-primary transition-all shrink-0"
                     style={{ backgroundColor: 'var(--color-surface-alt)' }}>
                  <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
                </div>
                <div className="min-w-0">
                  <span className="block text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wider">Previous</span>
                  <span className="block text-sm font-bold text-[var(--color-foreground)] group-hover:text-primary transition-colors truncate mt-0.5">
                    {prevProject.title}
                  </span>
                </div>
              </Link>
            ) : <div className="hidden sm:block" />}

            {nextProject ? (
              <Link
                to={`/projects/${nextProject.id}`}
                className="group glass-panel p-4 rounded-xl flex items-center justify-between gap-4 hover:border-primary/30 hover:shadow-glow transition-all duration-300"
              >
                <div className="min-w-0 text-left">
                  <span className="block text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wider">Next</span>
                  <span className="block text-sm font-bold text-[var(--color-foreground)] group-hover:text-primary transition-colors truncate mt-0.5">
                    {nextProject.title}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-zinc-500 group-hover:bg-primary/10 group-hover:text-primary transition-all shrink-0"
                     style={{ backgroundColor: 'var(--color-surface-alt)' }}>
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ) : <div className="hidden sm:block" />}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
