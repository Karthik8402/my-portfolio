import { useState, type FormEvent } from 'react';
import { motion, easeOut } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  Send,
  CheckCircle2,
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import Section from '../components/Section';
import { SITE } from '../data/site';
import { Meta } from '../seo/Meta';
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight, pageTransition } from '../utils/motionVariants';
import Scene from '../components/canvas/Scene';
import FloatingGeometry from '../components/canvas/FloatingGeometry';

const socialIconMap: Record<string, LucideIcon> = { Github, Linkedin, Twitter };

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (formData.name.length < 2) newErrors.name = 'Name must be at least 2 characters';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const currentTime = new Date().toLocaleString('en-US', {
        month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit',
      });

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name, name: formData.name, time: currentTime,
          from_email: formData.email, message: formData.message, email: formData.email,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch {
      setErrorMessage('Failed to send message. Please try again or email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <Meta title={`Contact - ${SITE.name}`} description="Get in touch with me" path="/contact" />

      <div className="relative">
        <Scene
          className="absolute inset-0 h-[600px] z-0"
          cameraPosition={[0, 0, 6]}
        >
          <ambientLight intensity={0.2} />
          <directionalLight position={[5, 5, 5]} intensity={0.3} />
          <FloatingGeometry count={6} />
        </Scene>

        <Section>
          <motion.div className="mb-12 lg:mb-16" variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeInUp}>
              <div className="section-label mb-4">
                <Sparkles size={12} />
                Contact
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight mb-4">
                <span className="text-zinc-900 dark:text-white">Get In </span>
                <span className="gradient-text-duo">Touch</span>
              </h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
                Have a project in mind or just want to say hi? I'm always open to
                discussing new opportunities and ideas.
              </p>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <motion.div
              className="lg:col-span-5 space-y-6"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-4 group p-4 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-white text-sm">Email</h4>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 group-hover:text-primary transition-colors">{SITE.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                  <div className="p-3 rounded-xl bg-accent-cyan/10 text-accent-cyan">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-white text-sm">Location</h4>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{SITE.location}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">
                  Social Profiles
                </h4>
                <div className="flex flex-wrap gap-3">
                  {SITE.socials.filter((s: { icon: string }) => s.icon !== 'Mail' && s.icon !== 'Email').map((social: { icon: string; label: string; href: string }) => {
                    const IconComponent = socialIconMap[social.icon];
                    return IconComponent ? (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-primary dark:hover:border-primary shadow-sm hover:shadow-md transition-all text-zinc-700 dark:text-white text-sm font-medium"
                        whileHover={{ y: -2 }}
                      >
                        <IconComponent size={16} className="text-primary" />
                        {social.label}
                      </motion.a>
                    ) : null;
                  })}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-7"
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="glass-panel p-6 md:p-8 rounded-2xl shadow-soft-lg relative overflow-hidden">
                <div className="absolute top-6 right-6 opacity-[0.04] pointer-events-none">
                  <Send size={80} />
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1.5 text-zinc-700 dark:text-zinc-300">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="input-field"
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-zinc-700 dark:text-zinc-300">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="input-field"
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1.5 text-zinc-700 dark:text-zinc-300">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project Inquiry"
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-zinc-700 dark:text-zinc-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="input-field resize-none"
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl font-semibold shadow-lg disabled:opacity-50 transition-all hover:scale-[1.01] active:scale-[0.99]"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 dark:border-zinc-900/30 border-t-white dark:border-t-zinc-900 rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </motion.button>

                  {isSuccess && (
                    <motion.div
                      className="flex items-center gap-2 p-3.5 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 rounded-xl text-emerald-600 dark:text-emerald-400 text-sm"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, ease: easeOut }}
                    >
                      <CheckCircle2 size={18} />
                      <span className="font-medium">Message sent successfully!</span>
                    </motion.div>
                  )}

                  {errorMessage && (
                    <motion.div
                      className="flex items-center gap-2 p-3.5 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-xl text-red-600 dark:text-red-400 text-sm"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, ease: easeOut }}
                    >
                      <span>&#9888;</span>
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </Section>
      </div>
    </motion.div>
  );
}
