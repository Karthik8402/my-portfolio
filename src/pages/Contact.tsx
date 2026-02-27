import { useState, type FormEvent } from 'react';
import { motion, easeOut } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  Send,
  CheckCircle2,
  Github,
  Linkedin,
  Twitter,
  type LucideIcon,
} from 'lucide-react';
import Section from '../components/Section';
import { SITE } from '../data/site';
import { Meta } from '../seo/Meta';
import { useMobile } from '../hooks/useMobile';
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight, pageTransition } from '../utils/motionVariants';

const socialIconMap: Record<string, LucideIcon> = { Github, Linkedin, Twitter };

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const isMobile = useMobile();

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
    } catch (error) {
      console.error('Failed to send email:', error);
      setErrorMessage('Failed to send message. Please try again or email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <Meta title={`Contact - ${SITE.name}`} description="Get in touch with me" path="/contact" />

      <Section>
        {/* Header */}
        <motion.div className="mb-16" variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={fadeInUp}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight mb-4">
              <span className="text-slate-900 dark:text-white">Get In </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-cyan">Touch</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              Have a project in mind or just want to say hi? I'm always open to
              discussing new opportunities and ideas.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column — Contact Info */}
          <motion.div
            className="lg:col-span-5 space-y-8"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Email */}
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-start gap-4 group"
            >
              <div className="p-3 rounded-lg bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-xl">mail</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Email Me</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm group-hover:text-primary transition-colors">{SITE.email}</p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-start gap-4 group">
              <div className="p-3 rounded-lg bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-xl">location_on</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Location</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{SITE.location}</p>
              </div>
            </div>

            {/* Social Profiles */}
            <div className="pt-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
                Social Profiles
              </h4>
              <div className="flex flex-wrap gap-3">
                {SITE.socials.filter((s: { icon: string }) => s.icon !== 'Mail').map((social: { icon: string; label: string; href: string }) => {
                  const IconComponent = socialIconMap[social.icon];
                  return IconComponent ? (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary shadow-sm hover:shadow-md transition-all text-slate-700 dark:text-white text-sm font-medium"
                      whileHover={isMobile ? {} : { y: -4 }}
                    >
                      <IconComponent size={18} className="text-primary" />
                      {social.label}
                    </motion.a>
                  ) : null;
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column — Contact Form */}
          <motion.div
            className="lg:col-span-7"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="glass-form p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
              {/* Send icon watermark */}
              <div className="absolute top-6 right-6 opacity-[0.06] pointer-events-none">
                <Send size={80} />
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="form-input w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                    />
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                        <span>⚠</span> {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="form-input w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                        <span>⚠</span> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry"
                    className="form-input w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="form-input w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                      <span>⚠</span> {errors.message}
                    </p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white rounded-xl font-semibold shadow-lg shadow-primary/25 disabled:opacity-50 transition-all relative overflow-hidden group"
                  whileHover={isMobile ? {} : { scale: 1.02 }}
                  whileTap={isMobile ? {} : { scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer-btn" />
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span className="relative z-10">Sending...</span>
                    </>
                  ) : (
                    <>
                      <span className="relative z-10">Send Message</span>
                      <Send size={18} className="relative z-10" />
                    </>
                  )}
                </motion.button>

                {isSuccess && (
                  <motion.div
                    className="flex items-center gap-2 p-4 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 rounded-xl text-emerald-600 dark:text-emerald-400"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: easeOut }}
                  >
                    <CheckCircle2 size={20} />
                    <span className="font-medium">Message sent successfully!</span>
                  </motion.div>
                )}

                {errorMessage && (
                  <motion.div
                    className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-xl text-red-600 dark:text-red-400"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: easeOut }}
                  >
                    <span>⚠</span>
                    <span className="text-sm">{errorMessage}</span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </Section>
    </motion.div>
  );
}
