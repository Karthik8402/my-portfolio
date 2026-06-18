import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Section from '../components/Section';
import { pageTransition, customEase } from '../utils/motionVariants';
import Scene from '../components/canvas/Scene';
import ParticleField3D from '../components/canvas/ParticleField3D';

export default function NotFound() {
  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <div className="relative min-h-[calc(100vh-200px)]">
        <Scene
          className="absolute inset-0 z-0"
          cameraPosition={[0, 0, 5]}
        >
          <ambientLight intensity={0.15} />
          <ParticleField3D count={25} color="#8B5CF6" speed={0.1} interactive={false} />
        </Scene>

        <Section className="min-h-[calc(100vh-200px)] flex items-center justify-center relative z-10">
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
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[var(--color-foreground)] font-display">
              Page Not Found
            </h2>
            <p className="text-[var(--color-muted)] mb-8 max-w-md mx-auto text-sm md:text-base">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:scale-[1.02] transition-all shadow-lg"
              style={{
                boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)',
              }}
            >
              <ArrowLeft size={16} />
              Go Home
            </Link>
          </div>
        </Section>
      </div>
    </motion.div>
  );
}
