import { motion } from "framer-motion";
import { User, BookOpen, Award, TrendingUp, Star } from "lucide-react";
import Section from "../components/Section";
import { SITE } from "../data/site";
import { SKILLS } from "../data/skills";
import { Meta } from "../seo/Meta";
import { useMobile } from "../hooks/useMobile";

export default function About() {
  const isMobile = useMobile();

  return (
    <>
      <Meta
        title={`About - ${SITE.name}`}
        description={SITE.about.bio}
        path="/about"
      />

      <Section>
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <User className="text-brand-500" size={32} />
              <h1 className="text-4xl md:text-5xl font-bold">About Me</h1>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-500 to-purple-500 mb-4" />
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl">
              Get to know more about my journey, skills, and what drives me.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Left Column - Bio & Interests */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Bio Card */}
            <motion.div
              whileHover={isMobile ? {} : { scale: 1.03 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="rounded-2xl"
            >
              <div className="glass rounded-2xl p-6 mb-6 border border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="text-brand-500" size={20} />
                  <h3 className="text-xl font-semibold">Background</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-justify leading-loose px-0">
                  {SITE.about.bio}
                </p>
              </div>
            </motion.div>

            {/* Interests Card */}
            <motion.div
              whileHover={isMobile ? {} : { scale: 1.03 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="rounded-2xl"
            >
              <div className="glass rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="text-pink-500" size={20} />
                  <h3 className="text-xl font-semibold">Interests</h3>
                </div>
                <ul className="space-y-1">
                  {SITE.about.interests.map((interest: string, idx: number) => (
                    <motion.li
                      key={interest}
                      className="flex items-center gap-3 group py-1 ml-4"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                    >
                      <span className="w-3 h-3 bg-brand-500 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {interest}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Skills & Timeline */}
          <motion.div
            className="lg:col-span-3 space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Timeline Section */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="text-brand-500" size={24} />
                <h3 className="text-2xl font-semibold">Journey</h3>
              </div>
              <div className="space-y-8 border-l-2 border-gray-200 dark:border-gray-800 ml-3 pl-8 relative">
                {SITE.about.timeline?.map((item: { year: string; title: string; institution: string; description: string }, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative"
                  >
                    <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white dark:border-gray-900 bg-brand-500" />
                    <div className="mb-1 flex items-center gap-2">
                      <span className="text-sm font-bold text-brand-500 bg-brand-500/10 px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                      {item.institution}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Award className="text-purple-500" size={24} />
                <h3 className="text-2xl font-semibold">Technical Skills</h3>
              </div>

              <div className="space-y-8">
                {SKILLS.map((category, catIdx) => (
                  <motion.div
                    key={category.category}
                    whileHover={isMobile ? {} : { scale: 1.02 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="rounded-2xl"
                  >
                    <motion.div
                      className="glass rounded-2xl p-6 border border-gray-200 dark:border-gray-800"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + catIdx * 0.1 }}
                    >
                      <div className="flex items-center gap-2 mb-5">
                        <Award className="text-purple-500" size={18} />
                        <h4 className="font-semibold text-lg gradient-text">
                          {category.category}
                        </h4>
                      </div>

                      <div className="space-y-5">
                        {category.items.map((skill, skillIdx) => {
                          const IconComponent = skill.icon;
                          return (
                            <motion.div
                              key={skill.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                delay: 0.4 + catIdx * 0.1 + skillIdx * 0.05,
                              }}
                            >
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium flex items-center gap-2">
                                  <IconComponent
                                    size={18}
                                    className="text-brand-500"
                                  />
                                  <span className="text-gray-900 dark:text-gray-100">
                                    {skill.name}
                                  </span>
                                </span>
                                <span className="text-sm font-semibold text-brand-500">
                                  {skill.level}%
                                </span>
                              </div>

                              {/* Progress Bar */}
                              <div className="relative w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2 overflow-hidden">
                                <motion.div
                                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-brand-500 via-purple-500 to-pink-500 rounded-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.level}%` }}
                                  transition={{
                                    duration: 1,
                                    delay: 0.5 + catIdx * 0.1 + skillIdx * 0.05,
                                    ease: "easeOut",
                                  }}
                                >
                                  {/* Shimmer Effect */}
                                  <div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                    style={{
                                      backgroundSize: "200% 100%",
                                      animation: "shimmer 2s infinite",
                                    }}
                                  />
                                </motion.div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Add shimmer animation */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </>
  );
}
