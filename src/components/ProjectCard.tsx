import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useMobile } from '../hooks/useMobile';

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
  const isMobile = useMobile();

  return (
    <motion.div
      className="h-full group"
      whileHover={isMobile ? {} : { y: -6 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/projects/${id}`} className="block h-full">
        <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col hover:shadow-glow hover:border-primary/20 cursor-pointer transition-all duration-400">
          <div className="relative h-56 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent z-10" />
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              onError={(e) => {
                e.currentTarget.src = `https://placehold.co/600x400/0f172a/38bdf8?text=${title.split(' ').join('+')}`;
              }}
            />

            {featured && (
              <div className="absolute top-3 right-3 z-20">
                <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full text-xs font-bold text-primary shadow-sm border border-primary/20">
                  Featured
                </span>
              </div>
            )}
          </div>

          <div className="p-5 lg:p-6 flex flex-col flex-grow">
            <h3 className="text-base lg:text-lg font-display font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors mb-2 line-clamp-1">
              {title}
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed mb-4 flex-grow">
              {description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md border border-slate-200 dark:border-slate-700"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 4 && (
                <span className="px-2 py-0.5 text-xs font-mono text-slate-400 dark:text-slate-500">
                  +{tags.length - 4}
                </span>
              )}
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800">
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
