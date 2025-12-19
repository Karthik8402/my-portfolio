import { motion } from "framer-motion";
import { FolderGit2, Sparkles } from "lucide-react";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../data/projects";
import { SITE } from "../data/SITE.1";
import { Meta } from "../seo/Meta";

export default function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);
  const other = PROJECTS.filter((p) => !p.featured);

  return (
    <>
      <Meta
        title={`Projects - ${SITE.name}`}
        description="A showcase of my recent work and projects"
        path="/projects"
      />

      <Section>
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <FolderGit2 className="text-brand-500" size={32} />
            <h1 className="text-4xl md:text-5xl font-bold">Projects</h1>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-500 to-purple-500 mb-4" />
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl">
            A curated selection of projects showcasing my expertise in modern
            web development
          </p>
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
              <h2 className="text-2xl font-semibold">Featured Projects</h2>
              <Sparkles className="text-yellow-500" size={20} />
            </div>
            <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
              {featured.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="h-full"
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="rounded-2xl h-full"
                  >
                    <ProjectCard {...project} />
                  </motion.div>
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
              <FolderGit2 className="text-brand-500" size={20} />
              <h2 className="text-2xl font-semibold">More Projects</h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {other.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="h-full"
                >
                  {" "}
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="rounded-2xl h-full"
                  >
                    <ProjectCard {...project} />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Empty State */}
        {featured.length === 0 && other.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <FolderGit2 className="mx-auto text-gray-400 mb-4" size={64} />
            <h3 className="text-xl font-semibold text-gray-500 dark:text-gray-400">
              No projects yet
            </h3>
            <p className="text-gray-400 dark:text-gray-500 mt-2">
              Check back soon for exciting updates!
            </p>
          </motion.div>
        )}
      </Section>
    </>
  );
}
