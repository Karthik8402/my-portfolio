import { ArrowRight, Eye, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useMobile } from '../hooks/useMobile';
import Button from './Button';

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

export default function ProjectCard({ id, title, description, image, tags, links, featured = false }: ProjectCardProps) {
  const isMobile = useMobile();

  return (
    <motion.div
      className="h-full"
      whileHover={isMobile ? {} : { y: -8 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/projects/${id}`} className="block h-full">
        <div className="glass-card rounded-3xl overflow-hidden group h-full flex flex-col hover:shadow-glow hover:border-primary/30 transition-all duration-500 cursor-pointer">
          {/* Image */}
          <div className="relative h-56 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
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
          {/* Desktop Hover Buttons */}
          <div className="hidden md:flex absolute inset-0 items-center justify-center gap-3 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
            {links.live && (
              <Button
                href={links.live}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="medium"
              >
                <Eye size={16} />
                View Live
              </Button>
            )}
            {links.github && (
              <Button
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="medium"
              >
                <Code2 size={16} />
                Code
              </Button>
            )}
          </div>
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
            <div className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium flex items-center justify-between group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
              <span>View Project</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
