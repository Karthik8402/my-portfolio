import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  Code2, 
  Rocket, 
  Zap,
  Sparkles,
  Terminal,
  Database,
  Globe
} from 'lucide-react';
import Section from '../components/Section';
import { SITE } from '../data/site';
import { Meta } from '../seo/Meta';

const socialIcons = {
  Github,
  Linkedin,
  Mail
};

export default function Home() {
  return (
    <>
      <Meta 
        title={`${SITE.name} - ${SITE.role}`}
        description={SITE.hero.subtitle}
        path="/"
      />

      <Section className="min-h-screen flex items-center relative overflow-hidden">
        {/* Animated Background Gradient Orbs */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 -left-20 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                             linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2 w-full">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass rounded-full border border-brand-500/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Zap size={16} className="text-brand-500 fill-brand-500" />
              <span className="text-sm font-medium bg-gradient-to-r from-brand-500 to-purple-500 bg-clip-text text-transparent">
                Available for work
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="block mb-2">Hi, I'm</span>
              <span className="gradient-text block">
                {SITE.name}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4 font-light">
              {SITE.role}
            </p>

            <p className="text-base md:text-lg text-gray-500 dark:text-gray-500 mb-8 leading-relaxed max-w-xl">
              {SITE.hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                to={SITE.hero.ctaPrimary.href}
                className="group flex items-center gap-2 px-8 py-4 gradient-bg text-white rounded-xl font-medium shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/40 transition-all hover:scale-105"
              >
                {SITE.hero.ctaPrimary.label}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={SITE.resumeUrl}
                download
                className="flex items-center gap-2 px-8 py-4 glass rounded-xl font-medium hover:scale-105 transition-all border border-gray-200 dark:border-gray-800"
              >
                <Download size={20} />
                Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500 dark:text-gray-500">Connect:</span>
              {SITE.socials.slice(0, 3).map(social => {
                const Icon = socialIcons[social.icon as keyof typeof socialIcons];
                return Icon ? (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass rounded-xl hover:scale-110 transition-all hover:text-brand-500 border border-transparent hover:border-brand-500/20"
                    whileHover={{ y: -3 }}
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                ) : null;
              })}
            </div>
          </motion.div>

          {/* 3D Visual Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square max-w-[500px] mx-auto">
              {/* Main Circle with Gradient Border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-500 via-purple-500 to-pink-500 p-1 animate-glow">
                <div className="w-full h-full glass rounded-full flex items-center justify-center relative overflow-hidden">
                  {/* Center Icon */}
                  <div className="relative z-10">
                    <Code2 size={120} className="text-brand-500" strokeWidth={1.5} />
                  </div>
                  
                  {/* Concentric Circles */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 border border-brand-500/20 rounded-full animate-pulse" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1/2 h-1/2 border border-purple-500/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  </div>
                </div>
              </div>
              
              {/* Floating Tech Icons - Top Right */}
              <motion.div
                className="absolute -top-4 -right-4 glass rounded-2xl p-4 shadow-xl border border-brand-500/20"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Rocket size={32} className="text-brand-500" />
              </motion.div>
              
              {/* Floating Tech Icons - Bottom Left */}
              <motion.div
                className="absolute -bottom-4 -left-4 glass rounded-2xl p-4 shadow-xl border border-purple-500/20"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Terminal size={32} className="text-purple-500" />
              </motion.div>
              
              {/* Floating Tech Icons - Right Center */}
              <motion.div
                className="absolute top-1/2 -right-8 -translate-y-1/2 glass rounded-2xl p-4 shadow-xl border border-pink-500/20"
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Database size={32} className="text-pink-500" />
              </motion.div>

              {/* Floating Tech Icons - Left Center */}
              <motion.div
                className="absolute top-1/3 -left-8 glass rounded-2xl p-4 shadow-xl border border-cyan-500/20"
                animate={{ x: [0, -8, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <Globe size={32} className="text-cyan-500" />
              </motion.div>

              {/* Floating Sparkles */}
              <motion.div
                className="absolute top-10 right-20"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Sparkles size={20} className="text-yellow-500 fill-yellow-500" />
              </motion.div>

              <motion.div
                className="absolute bottom-16 left-16"
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, -180, -360]
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              >
                <Sparkles size={16} className="text-brand-500 fill-brand-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text">3+</div>
            <div className="text-sm text-gray-500 dark:text-gray-500">Years Exp</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text">50+</div>
            <div className="text-sm text-gray-500 dark:text-gray-500">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text">10+</div>
            <div className="text-sm text-gray-500 dark:text-gray-500">Tech Stack</div>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
