import { useParams, Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { PROJECTS } from '../data/projects';
import { SITE } from '../data/site';
import { Meta } from '../seo/Meta';
import { pageTransition, fadeInUp, staggerContainer } from '../utils/motionVariants';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const prefersReduced = useReducedMotion();

  const projectIndex = PROJECTS.findIndex((p) => p.id === id);
  const project = PROJECTS[projectIndex];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-600 mb-4 block">folder_off</span>
          <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-2">Project not found</h2>
          <Link to="/projects" className="text-primary hover:underline">â† Back to Projects</Link>
        </div>
      </div>
    );
  }

  const prevProject = projectIndex > 0 ? PROJECTS[projectIndex - 1] : null;
  const nextProject = projectIndex < PROJECTS.length - 1 ? PROJECTS[projectIndex + 1] : null;
  const detail = project.detail;

  // Respect prefers-reduced-motion for all hover/animation values
  const hoverLift   = prefersReduced ? {} : { y: -6, scale: 1.02 };
  const hoverTap    = prefersReduced ? {} : { scale: 0.97 };
  const hoverSlide  = prefersReduced ? {} : { x: 6 };
  const hoverScale  = prefersReduced ? {} : { scale: 1.08 };
  const hoverGlow   = prefersReduced ? {} : { y: -3 };

  // Group technologies by category
  const techCategories: Record<string, { tags: string[]; color: string; bgClass: string }> = {
    Frontend: {
      tags: project.tags.filter(t => ['React', 'TypeScript', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Vite', 'HTML5 Canvas', 'Animations', 'Flutter', 'Dart', 'Framer Motion', 'Google Fonts', 'Provider', 'CSS3', 'HTML5', 'Vanilla JavaScript', 'Parallax'].includes(t)),
      color: 'text-blue-600 dark:text-blue-300',
      bgClass: 'bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800',
    },
    Backend: {
      tags: project.tags.filter(t => ['Flask', 'Python', 'Java', 'PHP', 'Node.js', 'AppScript', 'Express', 'MVC Architecture', 'Vanilla JavaScript', 'HashMap', 'Scanner', 'DecimalFormat', 'Console Application'].includes(t)),
      color: 'text-green-600 dark:text-green-300',
      bgClass: 'bg-green-50 dark:bg-green-900/20 border-green-100 dark:border-green-800',
    },
    'AI / Data': {
      tags: project.tags.filter(t => ['Google Gemini AI', 'RAG', 'MCP', 'PyTorch', 'spaCy', 'AI Assistant', 'OOP'].includes(t)),
      color: 'text-purple-600 dark:text-purple-300',
      bgClass: 'bg-purple-50 dark:bg-purple-900/20 border-purple-100 dark:border-purple-800',
    },
    Database: {
      tags: project.tags.filter(t => ['Firebase', 'MongoDB', 'MySQL', 'Firestore', 'Google Sign-In'].includes(t)),
      color: 'text-emerald-600 dark:text-emerald-300',
      bgClass: 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-100 dark:border-emerald-800',
    },
    Tools: {
      tags: project.tags.filter(t => ['Web Development'].includes(t)),
      color: 'text-slate-600 dark:text-slate-300',
      bgClass: 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700',
    },
  };

  const activeTechCategories = Object.entries(techCategories).filter(([, v]) => v.tags.length > 0);

  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <Meta
        title={`${project.title} - ${SITE.name}`}
        description={project.description}
        path={`/projects/${project.id}`}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8 lg:py-12 relative z-10">

        {/* Breadcrumb */}
        <motion.nav
          aria-label="Breadcrumb"
          className="flex mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.05 }}
        >
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                to="/projects"
                className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-white transition-colors duration-200"
              >
                Projects
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
                <span className="ml-1 text-sm font-medium text-slate-900 md:ml-2 dark:text-white">
                  {project.title}
                </span>
              </div>
            </li>
          </ol>
        </motion.nav>

        {/* Hero Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold tracking-tight mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-cyan">
                {project.title}
              </span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              {project.description}
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex gap-4 shrink-0">
            {project.links.live && (
              <motion.a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold shadow-lg transition-shadow duration-300 hover:shadow-primary/40 hover:shadow-xl will-change-transform"
                whileHover={hoverGlow}
                whileTap={hoverTap}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <span className="material-symbols-outlined text-lg">rocket_launch</span>
                Live Demo
              </motion.a>
            )}
            {project.links.github && (
              <motion.a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white text-sm font-bold shadow-sm hover:border-primary dark:hover:border-primary transition-[border-color,box-shadow] duration-200 hover:shadow-md will-change-transform"
                whileHover={hoverGlow}
                whileTap={hoverTap}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <span className="material-symbols-outlined text-lg">code</span>
                View Code
              </motion.a>
            )}
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="w-full h-64 md:h-96 lg:h-[32rem] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 mb-12 relative group"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          {/* Gradient overlay â€” fades in on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
          {/* Subtle shimmer border on hover */}
          <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 group-hover:ring-primary/40 transition-all duration-500 z-20 pointer-events-none" />
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover will-change-transform transform group-hover:scale-105 transition-transform duration-700 ease-out"
            onError={(e) => {
              e.currentTarget.src = `https://placehold.co/1200x600/0f172a/38bdf8?text=${project.title.split(' ').join('+')}`;
            }}
          />
        </motion.div>

        {/* Main Content â€” 2+1 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* â”€â”€ Left Content â”€â”€ */}
          <div className="lg:col-span-2 space-y-12">

            {/* About */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
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
            </motion.section>

            {/* Key Features */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              <SectionHeading>Key Features</SectionHeading>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {detail.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="group/card glass-card p-5 rounded-xl border-l-4 border-l-primary cursor-default will-change-transform"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={hoverLift}
                    viewport={{ once: true }}
                    transition={{
                      default: { delay: idx * 0.06, duration: 0.35 },
                      y: { type: 'spring', stiffness: 350, damping: 22 },
                      scale: { type: 'spring', stiffness: 350, damping: 22 },
                    }}
                    style={{ boxShadow: 'none' }}
                  >
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-xl transition-transform duration-300 group-hover/card:rotate-12 group-hover/card:scale-110">
                        {feature.icon}
                      </span>
                      <span className="group-hover/card:text-primary transition-colors duration-200">
                        {feature.title}
                      </span>
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                    {/* Bottom accent line that grows on hover */}
                    <div className="mt-3 h-px bg-gradient-to-r from-primary/60 to-accent-cyan/40 scale-x-0 group-hover/card:scale-x-100 origin-left transition-transform duration-300" />
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Challenges & Solutions */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              <SectionHeading>Challenges & Solutions</SectionHeading>
              <div className="space-y-5">
                {detail.challenges.map((challenge, idx) => (
                  <motion.div
                    key={idx}
                    className="group/ch challenge-card rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/60 will-change-transform"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={hoverSlide}
                    viewport={{ once: true }}
                    transition={{
                      default: { delay: idx * 0.08, duration: 0.35 },
                      x: { type: 'spring', stiffness: 350, damping: 28 },
                    }}
                  >
                    {/* Problem row */}
                    <div className="flex gap-3 items-start p-4 bg-red-50/60 dark:bg-red-900/10 border-b border-red-100 dark:border-red-900/20 group-hover/ch:bg-red-50 dark:group-hover/ch:bg-red-900/20 transition-colors duration-300">
                      <span className="flex-shrink-0 mt-0.5 w-7 h-7 rounded-full bg-red-100 dark:bg-red-900/40 flex items-center justify-center">
                        <span className="material-symbols-outlined text-red-500 text-sm">priority_high</span>
                      </span>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                        {challenge.problem}
                      </p>
                    </div>
                    {/* Solution row */}
                    <div className="flex gap-3 items-start p-4 bg-green-50/40 dark:bg-green-900/10 group-hover/ch:bg-green-50 dark:group-hover/ch:bg-green-900/20 transition-colors duration-300">
                      <span className="flex-shrink-0 mt-0.5 w-7 h-7 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center">
                        <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-sm">check_circle</span>
                      </span>
                      <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed">
                        <span className="font-semibold">Solution: </span>{challenge.solution}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Technologies Used (mobile only) */}
            <motion.section
              className="lg:hidden"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4 }}
            >
              <SectionHeading>Technologies Used</SectionHeading>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium border border-slate-200 dark:border-slate-700 cursor-default will-change-transform"
                    whileHover={hoverScale}
                    transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.section>
          </div>

          {/* â”€â”€ Right Sidebar â”€â”€ */}
          <div className="hidden lg:block lg:col-span-1 space-y-8">
            <div className="glass-sidebar p-6 rounded-2xl sticky top-28">
              <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">
                Technologies Used
              </h3>
              <div className="space-y-5">
                {activeTechCategories.map(([category, { tags, color, bgClass }]) => (
                  <div key={category}>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">
                      {category}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <motion.span
                          key={tag}
                          className={`px-3 py-1 rounded-md text-xs font-medium border cursor-default will-change-transform ${color} ${bgClass}`}
                          whileHover={hoverScale}
                          transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Duration */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Duration</span>
                <span className="text-sm font-medium text-slate-900 dark:text-white">{detail.duration}</span>
              </div>
            </div>
          </div>
        </div>

        {/* â”€â”€ Prev / Next Navigation â”€â”€ */}
        <div className="mt-20 pt-10 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center gap-4">
          {prevProject ? (
            <motion.div whileHover={prefersReduced ? {} : { x: -3 }} transition={{ type: 'spring', stiffness: 300, damping: 25 }} className="will-change-transform">
              <Link
                to={`/projects/${prevProject.id}`}
                className="group flex items-center gap-4 text-left"
              >
                <div className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 group-hover:border-primary group-hover:text-primary group-hover:bg-primary/5 transition-all duration-200">
                  <span className="material-symbols-outlined transition-transform duration-200 group-hover:-translate-x-1">arrow_back</span>
                </div>
                <div>
                  <span className="block text-xs text-slate-500">Previous Project</span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-200">
                    {prevProject.title}
                  </span>
                </div>
              </Link>
            </motion.div>
          ) : (
            <div />
          )}

          {nextProject ? (
            <motion.div whileHover={prefersReduced ? {} : { x: 3 }} transition={{ type: 'spring', stiffness: 300, damping: 25 }} className="will-change-transform">
              <Link
                to={`/projects/${nextProject.id}`}
                className="group flex items-center gap-4 text-right"
              >
                <div>
                  <span className="block text-xs text-slate-500">Next Project</span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-200">
                    {nextProject.title}
                  </span>
                </div>
                <div className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 group-hover:border-primary group-hover:text-primary group-hover:bg-primary/5 transition-all duration-200">
                  <span className="material-symbols-outlined transition-transform duration-200 group-hover:translate-x-1">arrow_forward</span>
                </div>
              </Link>
            </motion.div>
          ) : (
            <div />
          )}
        </div>
      </div>
    </motion.div>
  );
}

// â”€â”€ Reusable animated section heading â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-6 flex items-center gap-3">
      <motion.span
        className="block h-1 rounded-full bg-gradient-to-r from-primary to-accent-cyan"
        initial={{ width: 0 }}
        whileInView={{ width: 32 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      />
      {children}
    </h2>
  );
}

