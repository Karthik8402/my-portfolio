import { ExternalLink, Github, Eye, Code2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useMobile } from '../hooks/useMobile';

interface ProjectCardProps {
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

export default function ProjectCard({ title, description, image, tags, links, featured = false }: ProjectCardProps) {
  const isMobile = useMobile();

  return (
    <motion.div
      className="group relative rounded-2xl overflow-hidden border border-[var(--color-border)] bg-bg-surface transition-all h-full flex flex-col"
      whileHover={isMobile ? {} : {
        scale: 1.02,
        y: -4,
        borderColor: 'rgba(56, 189, 248, 0.4)',
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      style={{
        boxShadow: 'none',
      }}
    >
      {/* Image Section */}
      <div className="relative h-52 overflow-hidden bg-gradient-to-br from-accent/5 to-violet-500/5 flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover md:group-hover:scale-110 transition-transform duration-700"
          onError={(e) => {
            e.currentTarget.src = 'https://placehold.co/600x400/0F1629/38BDF8?text=' + title.split(' ').join('+');
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent" />

        {/* Desktop Hover Buttons */}
        <div className="hidden md:flex absolute inset-0 items-center justify-center gap-3 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
          {links.live && (
            <a
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-accent text-bg rounded-lg font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all text-sm"
            >
              <Eye size={16} />
              View Live
            </a>
          )}
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-bg-surface/90 backdrop-blur-sm text-text-primary rounded-lg font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all border border-[var(--color-border)] text-sm"
            >
              <Code2 size={16} />
              Code
            </a>
          )}
        </div>

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 right-4 z-10">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-accent text-bg font-medium rounded-full text-xs shadow-lg shadow-accent/20">
              <Sparkles size={12} fill="currentColor" />
              <span>Featured</span>
            </div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Title and Link Icons */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-bold font-heading text-text-primary md:group-hover:text-accent transition-colors line-clamp-1 flex-1">
            {title}
          </h3>

          {/* Mobile link icons */}
          <div className="flex items-center gap-2 ml-2 md:hidden">
            {links.live && (
              <a
                href={links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-bg rounded-lg transition-colors"
                aria-label="View live project"
              >
                <ExternalLink size={16} className="text-accent" />
              </a>
            )}
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-bg rounded-lg transition-colors"
                aria-label="View source code"
              >
                <Github size={16} className="text-accent" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-text-secondary text-sm mb-6 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-accent/5 text-accent/80 rounded-full border border-accent/10"
            >
              {tag}
            </span>
          ))}
          {tags.length > 4 && (
            <span className="px-3 py-1 text-xs font-medium text-text-muted">
              +{tags.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-0.5 gradient-bg opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}
