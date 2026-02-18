import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Section from '../components/Section';
import { pageTransition } from '../utils/motionVariants';

export default function NotFound() {
  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <Section className="min-h-[calc(100vh-200px)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-[10rem] font-bold font-heading gradient-text leading-none mb-4">
            404
          </h1>
          <h2 className="text-3xl font-semibold mb-4 text-text-primary font-heading">
            Page Not Found
          </h2>
          <p className="text-text-secondary mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 gradient-bg text-white rounded-xl font-medium hover:scale-105 transition-all shadow-lg shadow-accent/20"
          >
            <ArrowLeft size={18} />
            Go Home
          </Link>
        </div>
      </Section>
    </motion.div>
  );
}
