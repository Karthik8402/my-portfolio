import { ExternalLink, Github, Eye, Code2 } from 'lucide-react';

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
  return (
    <div className="group relative glass rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 md:hover:border-brand-500/50 transition-all md:hover:shadow-xl h-full flex flex-col">
      {/* Image Section */}
      <div className="relative h-52 overflow-hidden bg-gradient-to-br from-brand-500/10 to-purple-500/10 flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover md:group-hover:scale-110 transition-transform duration-700"
          onError={(e) => {
            e.currentTarget.src = 'https://placehold.co/600x400/6366f1/ffffff?text=' + title.split(' ').join('+');
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Desktop Hover Buttons (hidden on mobile) */}
        <div className="hidden md:flex absolute inset-0 items-center justify-center gap-3 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
          {links.live && (
            <a
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-lg font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              <Eye size={18} />
              <span className="text-sm">View Live</span>
            </a>
          )}
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 glass text-white rounded-lg font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all border border-white/20"
            >
              <Code2 size={18} />
              <span className="text-sm">Code</span>
            </a>
          )}
        </div>

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 right-4">
            <div className="flex items-center gap-1 px-3 py-1 bg-yellow-500/90 backdrop-blur-sm text-yellow-900 rounded-full text-xs font-semibold">
              <span>⭐</span>
              <span>Featured</span>
            </div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Title and Link Icons */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold font-heading md:group-hover:text-brand-500 transition-colors line-clamp-1 flex-1">
            {title}
          </h3>
          
          {/* Link Icons (visible on mobile) */}
          <div className="flex items-center gap-2 ml-2 md:hidden">
            {links.live && (
              <a
                href={links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                aria-label="View live project"
              >
                <ExternalLink size={18} className="text-brand-500" />
              </a>
            )}
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                aria-label="View source code"
              >
                <Github size={18} className="text-brand-500" />
              </a>
            )}
          </div>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.slice(0, 4).map(tag => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-brand-500/10 text-brand-500 rounded-full border border-brand-500/20"
            >
              {tag}
            </span>
          ))}
          {tags.length > 4 && (
            <span className="px-3 py-1 text-xs font-medium text-gray-500 dark:text-gray-400">
              +{tags.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="h-1 bg-gradient-to-r from-brand-500 via-purple-500 to-pink-500 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}
