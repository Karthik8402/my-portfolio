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
      className="h-full"
      whileHover={isMobile ? {} : { y: -8 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/projects/${id}`} className="block h-full">
        <div className="glass-card rounded-3xl overflow-hidden group h-full flex flex-col hover:shadow-glow hover:border-primary/30 cursor-pointer" style={{ transition: 'box-shadow 0.4s ease, border-color 0.4s ease', willChange: 'transform, box-shadow' }}>
          {/* Image */}
          <div className="relative h-72 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105" 
              style={{ transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)', willChange: 'transform' }}
              onError={(e) => {
                e.currentTarget.src = `https://placehold.co/600x400/0f172a/38bdf8?text=${title.split(' ').join('+')}`;
              }}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />

            {/* Featured badge */}
            {featured && (
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 rounded-full text-xs font-bold text-primary shadow-sm">
                  Featured
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 lg:p-8 flex flex-col flex-grow">
            {/* Title */}
            <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors mb-2 line-clamp-1">
              {title}
            </h3>

            {/* Description */}
            <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed mb-4 flex-grow">
              {description}
            </p>

            {/* Tech icons */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="tech-icon !w-auto !h-auto px-2 py-0.5 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* View Project CTA */}
            <div className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium flex items-center justify-between group-hover:bg-primary group-hover:text-white group-hover:border-primary" style={{ transition: 'background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease' }}>
              <span>View Project</span>
              <ArrowRight size={16} className="group-hover:translate-x-1" style={{ transition: 'transform 0.3s ease' }} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
