import { motion } from 'framer-motion';
import { User, BookOpen, Award, TrendingUp, Star, Code2, Briefcase, GraduationCap } from 'lucide-react';
import Section from '../components/Section';
import { SITE } from '../data/site';
import { SKILLS } from '../data/skills';
import { Meta } from '../seo/Meta';
import { useMobile } from '../hooks/useMobile';
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight, pageTransition } from '../utils/motionVariants';

// Stat cards data
const stats = [
  { icon: Code2, label: 'Tech Stacks', value: '10+', color: 'text-accent' },
  { icon: Briefcase, label: 'Projects Built', value: '11+', color: 'text-emerald-400' },
  { icon: GraduationCap, label: 'Education', value: 'MCA', color: 'text-violet-400' },
];

export default function About() {
  const isMobile = useMobile();

  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <Meta title={`About - ${SITE.name}`} description={SITE.about.bio} path="/about" />

      <Section>
        {/* Header */}
        <motion.div className="mb-16" variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-4">
              <User className="text-accent" size={32} />
              <h1 className="text-h1 font-bold font-heading">About Me</h1>
            </div>
            <div className="w-20 h-1 gradient-bg mb-4" />
            <p className="text-lg text-text-secondary max-w-2xl">
              Get to know more about my journey, skills, and what drives me.
            </p>
          </motion.div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="glass rounded-2xl p-6 text-center group hover:border-accent/30 transition-colors"
            >
              <stat.icon size={28} className={`mx-auto mb-3 ${stat.color}`} />
              <div className="text-3xl font-bold font-heading text-text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content — Split Layout */}
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Left Column — Bio & Interests */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {/* Bio Card */}
            <motion.div
              className="glass rounded-2xl p-6"
              whileHover={isMobile ? {} : { scale: 1.02, y: -4 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="text-accent" size={20} />
                <h3 className="text-xl font-semibold text-text-primary">Background</h3>
              </div>
              <p className="text-text-secondary text-justify leading-loose">
                {SITE.about.bio}
              </p>
            </motion.div>

            {/* Interests Card */}
            <motion.div
              className="glass rounded-2xl p-6"
              whileHover={isMobile ? {} : { scale: 1.02, y: -4 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Star className="text-amber-400" size={20} />
                <h3 className="text-xl font-semibold text-text-primary">Interests</h3>
              </div>
              <ul className="space-y-2">
                {SITE.about.interests.map((interest: string, idx: number) => (
                  <motion.li
                    key={interest}
                    className="flex items-center gap-3 group py-1 ml-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <span className="w-2.5 h-2.5 bg-accent rounded-full flex-shrink-0 group-hover:scale-150 transition-transform" />
                    <span className="text-text-secondary">{interest}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Column — Timeline & Skills */}
          <motion.div
            className="lg:col-span-3 space-y-12"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {/* Timeline */}
            <div>
              <div className="flex items-center gap-2 mb-8">
                <TrendingUp className="text-accent" size={24} />
                <h3 className="text-2xl font-semibold font-heading">Journey</h3>
              </div>
              <div className="space-y-8 border-l-2 border-[var(--color-border)] ml-3 pl-8 relative">
                {SITE.about.timeline?.map((item: { year: string; title: string; institution: string; description: string }, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative"
                  >
                    <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-bg bg-accent" />
                    <div className="mb-1 flex items-center gap-2">
                      <span className="text-sm font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-text-primary">{item.title}</h4>
                    <p className="text-sm font-medium text-text-muted mb-2">{item.institution}</p>
                    <p className="text-text-secondary leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <div className="flex items-center gap-2 mb-8">
                <Award className="text-violet-400" size={24} />
                <h3 className="text-2xl font-semibold font-heading">Technical Skills</h3>
              </div>

              <div className="space-y-6">
                {SKILLS.map((category, catIdx) => (
                  <motion.div
                    key={category.category}
                    className="glass rounded-2xl p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ delay: catIdx * 0.1 }}
                    whileHover={isMobile ? {} : { scale: 1.01 }}
                  >
                    <div className="flex items-center gap-2 mb-5">
                      <h4 className="font-semibold text-lg gradient-text">
                        {category.category}
                      </h4>
                    </div>

                    <div className="space-y-4">
                      {category.items.map((skill, skillIdx) => {
                        const IconComponent = skill.icon;
                        return (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIdx * 0.1 + skillIdx * 0.05 }}
                          >
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium flex items-center gap-2">
                                <IconComponent size={16} className="text-accent" />
                                <span className="text-text-primary">{skill.name}</span>
                              </span>
                              <span className="text-sm font-semibold text-accent">
                                {skill.level}%
                              </span>
                            </div>
                            <div className="relative w-full bg-bg rounded-full h-1.5 overflow-hidden">
                              <motion.div
                                className="absolute top-0 left-0 h-full rounded-full gradient-bg"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 1,
                                  delay: catIdx * 0.1 + skillIdx * 0.05,
                                  ease: 'easeOut',
                                }}
                              >
                                <div
                                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                  style={{
                                    backgroundSize: '200% 100%',
                                    animation: 'shimmer 2s infinite',
                                  }}
                                />
                              </motion.div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </motion.div>
  );
}
