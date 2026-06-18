import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    live?: string;
    github?: string;
  };
  featured?: boolean;
}

export default function ProjectCard({ id, title, description, image, tags, featured = false }: ProjectCardProps) {
  return (
    <motion.div
      className="h-full group perspective-[1000px]"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/projects/${id}`} className="block h-full">
        <div className="glass-panel rounded-2xl overflow-hidden h-full flex flex-col hover:shadow-glow hover:border-primary/20 cursor-pointer transition-all duration-300 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative h-56 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/20 to-transparent z-10" />
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              onError={(e) => {
                e.currentTarget.src = `https://placehold.co/600x400/18181b/2563EB?text=${title.split(' ').join('+')}`;
              }}
            />

            {featured && (
              <div className="absolute top-3 right-3 z-20">
                <span className="px-3 py-1 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm rounded-full text-xs font-bold text-primary shadow-sm border border-primary/20">
                  Featured
                </span>
              </div>
            )}
          </div>

          <div className="p-5 lg:p-6 flex flex-col flex-grow relative z-10">
            <h3 className="text-base lg:text-lg font-display font-bold text-zinc-900 dark:text-white group-hover:text-primary transition-colors mb-2 line-clamp-1">
              {title}
            </h3>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed mb-4 flex-grow">
              {description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-md border border-zinc-200 dark:border-zinc-700"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 4 && (
                <span className="px-2 py-0.5 text-xs font-mono text-zinc-400 dark:text-zinc-500">
                  +{tags.length - 4}
                </span>
              )}
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-zinc-100 dark:border-zinc-800">
              <span className="text-xs font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                View Details
                <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
