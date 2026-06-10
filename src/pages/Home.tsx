import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { Download, ArrowRight, ChevronDown, Github, Linkedin, Twitter, ExternalLink, Sparkles } from 'lucide-react';
import { SITE } from '../data/site';
import { Meta } from '../seo/Meta';
import { staggerContainer, fadeInUp, pageTransition, customEase } from '../utils/motionVariants';
import { useMobile } from '../hooks/useMobile';

const socialIconMap: Record<string, typeof Github> = { Github, Linkedin, Twitter };

const techStack = [
  { name: 'React', color: 'text-primary' },
  { name: 'TypeScript', color: 'text-blue-500' },
  { name: 'Java', color: 'text-orange-500' },
  { name: 'Python', color: 'text-yellow-500' },
  { name: 'FastAPI', color: 'text-emerald-500' },
  { name: 'Tailwind', color: 'text-cyan-400' },
];

export default function Home() {
  const isMobile = useMobile();
  const [firstName, ...restName] = SITE.name.split(' ');
  const lastName = restName.join(' ');

  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit" className="flex-1">
      <Meta
        title={`${SITE.name} - ${SITE.roles[0]}`}
        description={SITE.hero.subtitle}
        path="/"
      />

      <div className="min-h-[calc(100vh-64px)] lg:min-h-[calc(100vh-80px)] flex items-center justify-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            <div className="lg:col-span-7">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-6"
              >
                <motion.div variants={fadeInUp}>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 dark:bg-primary/5 border border-primary/20 text-primary text-sm font-medium">
                    <Sparkles size={14} />
                    <span>Available for work</span>
                    <span className="relative flex h-2 w-2 ml-1">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                    </span>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="space-y-2">
                  <h2 className="text-lg md:text-xl font-medium text-slate-500 dark:text-slate-400">
                    Hi, I'm
                  </h2>
                  <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight leading-none">
                    <span className="text-slate-900 dark:text-white">{firstName}</span>{' '}
                    <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-cyan to-accent-purple">
                      {lastName || firstName}
                    </span>
                  </h1>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-lg md:text-xl font-display text-slate-600 dark:text-slate-400">
                    <span className="text-sm font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                      {SITE.experience}
                    </span>
                    <span className="hidden sm:inline text-primary/40">|</span>
                    <span className="font-semibold text-slate-800 dark:text-white min-h-[1.5em]">
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

                <motion.div variants={fadeInUp}>
                  <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                    {SITE.hero.subtitle}
                  </p>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <div className="flex flex-wrap items-center gap-2">
                    {techStack.map((tech) => (
                      <span
                        key={tech.name}
                        className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-mono rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 ${tech.color}`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to={SITE.hero.ctaPrimary.href}
                      className="group relative px-8 py-3.5 bg-slate-900 dark:bg-white rounded-xl font-semibold text-white dark:text-slate-900 shadow-lg shadow-slate-900/20 dark:shadow-white/10 overflow-hidden transition-all hover:scale-[1.02] hover:shadow-xl inline-flex items-center justify-center gap-2"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative z-10 flex items-center gap-2">
                        View Projects
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                    <a
                      href={SITE.hero.ctaSecondary.href}
                      download
                      className="group px-8 py-3.5 rounded-xl font-semibold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary transition-all hover:bg-slate-100 dark:hover:bg-slate-800/50 flex items-center justify-center gap-2"
                    >
                      <Download size={16} />
                      Download Resume
                      <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                    <span className="font-medium">Find me on</span>
                    <div className="flex gap-2">
                      {SITE.socials
                        .filter((s: { icon: string }) => s.icon !== 'Mail' && s.icon !== 'Email')
                        .map((social: { icon: string; label: string; href: string }) => {
                          const Icon = socialIconMap[social.icon];
                          return Icon ? (
                            <a
                              key={social.label}
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all bg-white dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 hover:bg-primary/5 dark:hover:bg-primary/5 hover:-translate-y-0.5"
                              aria-label={social.label}
                            >
                              <Icon size={16} />
                            </a>
                          ) : null;
                        })}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <div className="hidden lg:block lg:col-span-5 relative">
              <motion.div
                className="relative w-full aspect-square max-w-md mx-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3, ease: customEase }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-accent-purple/10 to-accent-cyan/20 rounded-full blur-3xl animate-pulse-slow" />

                <div className="relative w-full aspect-square flex items-center justify-center">
                  <div className="absolute w-72 h-72 border border-slate-200 dark:border-slate-700 rounded-2xl rotate-12 opacity-40" />
                  <div className="absolute w-72 h-72 border border-primary/30 rounded-2xl -rotate-6" />
                  <div className="relative w-64 h-64 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-soft-lg dark:shadow-glow-lg overflow-hidden">
                    <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-100 dark:border-slate-800">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      <span className="ml-2 text-xs font-mono text-slate-400">hello.js</span>
                    </div>
                    <div className="p-4 font-mono text-xs leading-relaxed">
                      <div className="text-purple-500">const</div>
                      <div className="text-slate-800 dark:text-slate-200">
                        <span className="text-blue-500">developer</span> = {'{'}
                      </div>
                      <div className="pl-3 text-slate-800 dark:text-slate-200">
                        <span className="text-purple-500">name</span>: <span className="text-emerald-500">'{firstName}'</span>,
                      </div>
                      <div className="pl-3 text-slate-800 dark:text-slate-200">
                        <span className="text-purple-500">role</span>: <span className="text-emerald-500">'{SITE.roles[0]}'</span>,
                      </div>
                      <div className="pl-3 text-slate-800 dark:text-slate-200">
                        <span className="text-purple-500">status</span>: <span className="text-emerald-500">'active'</span>,
                      </div>
                      <div className="pl-3 text-slate-800 dark:text-slate-200">
                        <span className="text-purple-500">stack</span>: [<span className="text-blue-400">'React'</span>, <span className="text-blue-400">'Java'</span>, <span className="text-blue-400">'Python'</span>],
                      </div>
                      <div className="text-slate-800 dark:text-slate-200">{'}'}</div>
                      <div className="mt-2 text-primary animate-pulse">{'// > ready to build 🚀'}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>

        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.div
            animate={isMobile ? {} : { y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <ChevronDown size={20} className="text-slate-400 dark:text-slate-500" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
