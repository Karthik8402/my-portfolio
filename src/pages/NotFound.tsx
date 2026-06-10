import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Section from '../components/Section';
import { pageTransition, customEase } from '../utils/motionVariants';

export default function NotFound() {
  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <Section className="min-h-[calc(100vh-200px)] flex items-center justify-center">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: customEase }}
          >
            <h1 className="text-[8rem] md:text-[12rem] font-bold font-display gradient-text leading-none mb-2">
              404
            </h1>
          </motion.div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-slate-900 dark:text-white font-display">
            Page Not Found
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md mx-auto text-sm md:text-base">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-semibold hover:scale-[1.02] transition-all shadow-lg"
          >
            <ArrowLeft size={16} />
            Go Home
          </Link>
        </div>
      </Section>
    </motion.div>
  );
}
