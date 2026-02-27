import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import { SITE } from '../data/site';
import { Meta } from '../seo/Meta';
import { staggerContainer, fadeInUp, pageTransition } from '../utils/motionVariants';

export default function About() {

  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <Meta title={`About - ${SITE.name}`} description={SITE.about.bio} path="/about" />

      <Section>
        {/* Page Header — NO pill badge, matching template */}
        <motion.div className="mb-16" variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={fadeInUp}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight mb-4">
              <span className="text-slate-900 dark:text-white">About </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-cyan">Me</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              Get to know the developer behind the code.
            </p>
          </motion.div>
        </motion.div>

        {/* Main Content — Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          {/* Left Column — Bio */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              <p>
                Hello! I'm <span className="font-semibold text-slate-900 dark:text-white">Karthik Kumar</span>, a passionate Full-Stack Developer currently
                pursuing my MCA in Salem, TN. My journey into the world of technology
                began with a curiosity about how things work on the web, which has since
                evolved into a dedicated career path building robust and scalable
                applications.
              </p>
              <p>
                I specialize in creating seamless web experiences using{' '}
                <span className="text-primary font-medium">React</span> for dynamic
                front-ends and robust back-ends powered by{' '}
                <span className="text-primary font-medium">Java</span> and{' '}
                <span className="text-primary font-medium">Python</span>. I have a
                particular fondness for{' '}
                <span className="text-orange-500 font-medium">Firebase</span> for rapid prototyping and real-time
                database needs.
              </p>
              <p>
                When I'm not coding, I'm constantly learning new technologies, contributing
                to open-source projects, or optimizing algorithms. I believe in writing clean,
                maintainable code and designing user interfaces that are both intuitive and
                accessible.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 hover:-translate-y-1"
              >
                Let's Talk
                <ArrowRight size={18} />
              </Link>
              <a
                href={SITE.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white rounded-xl font-bold shadow-sm hover:border-primary dark:hover:border-primary transition-all duration-200 hover:-translate-y-1"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Right Column — Tech Stack Card (matching Stitch template pic 3/4 exactly) */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative group sticky top-28">
              {/* Glow border effect — matching the purple/cyan glow in template pic 3 */}
              <div className="absolute -inset-[1px] bg-gradient-to-b from-primary/40 via-purple-500/30 to-accent-cyan/40 rounded-2xl blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative glass-card rounded-2xl overflow-hidden">
                {/* macOS dots header */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-slate-200 dark:border-slate-700/50">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">tech-stack.json</span>
                  <span className="text-xs text-slate-400">&lt;/&gt;</span>
                </div>

                {/* Content — 3 categories matching template: frontend, backend, database */}
                <div className="p-6 space-y-6">
                  {/* Frontend */}
                  <div className="group/skill">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-mono text-sm text-slate-700 dark:text-slate-300">
                        "frontend"
                      </span>
                      <span className="font-mono text-sm font-bold text-primary">
                        90%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden mb-3">
                      <motion.div
                        className="h-full rounded-full bg-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: '90%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                      />
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {['React', 'Tailwind', 'HTML/CSS'].map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-0.5 text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded border border-slate-200 dark:border-slate-700 hover:border-primary/30 hover:text-primary transition-colors duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Backend */}
                  <div className="group/skill">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-mono text-sm text-slate-700 dark:text-slate-300">
                        "backend"
                      </span>
                      <span className="font-mono text-sm font-bold text-primary">
                        85%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden mb-3">
                      <motion.div
                        className="h-full rounded-full bg-purple-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: '85%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                      />
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {['Java', 'Python', 'Node.js'].map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-0.5 text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded border border-slate-200 dark:border-slate-700 hover:border-primary/30 hover:text-primary transition-colors duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Database */}
                  <div className="group/skill">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-mono text-sm text-slate-700 dark:text-slate-300">
                        "database"
                      </span>
                      <span className="font-mono text-sm font-bold text-primary">
                        80%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden mb-3">
                      <motion.div
                        className="h-full rounded-full bg-accent-cyan"
                        initial={{ width: 0 }}
                        whileInView={{ width: '80%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                      />
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {['Firebase', 'MySQL', 'MongoDB'].map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-0.5 text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded border border-slate-200 dark:border-slate-700 hover:border-primary/30 hover:text-primary transition-colors duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700/50 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                    </span>
                    Open to collaboration
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Education & Experience Timeline — matching dark template pic 1 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-10">
            <span className="w-8 h-1 bg-gradient-to-r from-primary to-accent-cyan rounded-full" />
            <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white">
              Education & Experience
            </h2>
          </div>

          <div className="timeline-line space-y-12 pl-16 relative">
            {SITE.about.timeline?.map((item: { year: string; title: string; institution: string; description: string }, idx: number) => (
              <motion.div
                key={idx}
                className="relative group"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
              >
                {/* Circle icon — exactly aligns with line at left 23px */ }
                <div className="absolute -left-16 top-0 w-12 h-12 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center bg-white dark:bg-surface-dark group-hover:border-primary group-hover:bg-primary/5 transition-all duration-200 z-10">
                  <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 group-hover:text-primary transition-colors duration-200 text-xl">
                    {item.title.includes('Bachelor') || item.title.includes('Master') ? 'school' : item.title.includes('Open') ? 'search' : 'code'}
                  </span>
                </div>

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.institution}</p>
                    <p className="mt-2 text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{item.description}</p>
                  </div>
                  <span className="font-mono text-sm bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full text-slate-600 dark:text-slate-400 shrink-0 border border-slate-200 dark:border-slate-700">
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
