import { useState, type FormEvent } from 'react';
import { motion, easeInOut, easeOut, easeIn } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  Mail,
  MapPin,
  Phone,
  Send,
  MessageCircle,
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

const socialIconMap: Record<string, LucideIcon> = { Github, Linkedin, Twitter, Mail };

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const isMobile = useMobile();

  const contactHoverVariants = {
    hover: isMobile ? {} : {
      scale: 1.02,
      y: -4,
      transition: { duration: 0.3, ease: easeInOut },
    },
  };

  const socialHoverVariants = {
    hover: isMobile ? {} : {
      scale: 1.1,
      y: -2,
      transition: { duration: 0.2, ease: easeOut },
    },
  };

  const successVariant = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: easeOut } },
    exit: { scale: 0.8, opacity: 0, transition: { duration: 0.3, ease: easeIn } },
  };

  const errorVariant = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: easeOut } },
    exit: { scale: 0.8, opacity: 0, transition: { duration: 0.3, ease: easeIn } },
  };

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
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
      setFormData({ name: '', email: '', message: '' });
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
            <div className="flex items-center gap-3 mb-4">
              <MessageCircle className="text-accent" size={32} />
              <h1 className="text-h1 font-bold font-heading">Get In Touch</h1>
            </div>
            <div className="w-20 h-1 gradient-bg mb-4" />
            <p className="text-lg text-text-secondary max-w-2xl">
              Have a question or want to work together? I'd love to hear from you!
            </p>
          </motion.div>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div className="space-y-6" variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h3 className="text-2xl font-semibold mb-6 font-heading">Contact Information</h3>

            {/* Email Card */}
            <motion.a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-4 p-6 glass rounded-xl hover:border-accent/30 transition-all group"
              whileHover="hover"
              variants={contactHoverVariants}
              aria-label="Email"
            >
              <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                <Mail className="text-accent" size={24} />
              </div>
              <div>
                <p className="text-sm text-text-muted mb-1">Email</p>
                <p className="font-medium text-text-primary group-hover:text-accent transition-colors">
                  {SITE.email}
                </p>
              </div>
            </motion.a>

            {/* Phone Card */}
            <motion.div
              className="flex items-center gap-4 p-6 glass rounded-xl"
              whileHover="hover"
              variants={contactHoverVariants}
              aria-label="Phone"
            >
              <div className="p-3 bg-violet-500/10 rounded-lg">
                <Phone className="text-violet-400" size={24} />
              </div>
              <div>
                <p className="text-sm text-text-muted mb-1">Phone</p>
                <p className="font-medium text-text-primary">{SITE.phone}</p>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              className="flex items-center gap-4 p-6 glass rounded-xl"
              whileHover="hover"
              variants={contactHoverVariants}
              aria-label="Location"
            >
              <div className="p-3 bg-emerald-500/10 rounded-lg">
                <MapPin className="text-emerald-400" size={24} />
              </div>
              <div>
                <p className="text-sm text-text-muted mb-1">Location</p>
                <p className="font-medium text-text-primary">{SITE.location}</p>
              </div>
            </motion.div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold mb-4 font-heading">Follow Me</h4>
              <div className="flex flex-wrap gap-3">
                {SITE.socials.map((social: { icon: string; label: string; href: string }) => {
                  const IconComponent = socialIconMap[social.icon];
                  return IconComponent ? (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 glass rounded-lg hover:border-accent/30 transition-all"
                      whileHover="hover"
                      variants={socialHoverVariants}
                      whileTap={isMobile ? {} : { scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <IconComponent size={20} className="text-accent" />
                    </motion.a>
                  ) : null;
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="glass rounded-2xl p-8"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 font-heading">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-text-secondary">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-bg focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all text-text-primary placeholder:text-text-muted"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <span>⚠</span> {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-text-secondary">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-bg focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all text-text-primary placeholder:text-text-muted"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <span>⚠</span> {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-text-secondary">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  placeholder="Leave your message..."
                  className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-bg focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none resize-none transition-all text-text-primary placeholder:text-text-muted"
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <span>⚠</span> {errors.message}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 gradient-bg text-white rounded-lg font-medium disabled:opacity-50 transition-all shadow-lg shadow-accent/20 relative overflow-hidden group"
                whileHover={isMobile ? {} : { scale: 1.02, y: -2 }}
                whileTap={isMobile ? {} : { scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span className="relative z-10">Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} className="relative z-10" />
                    <span className="relative z-10">Send Message</span>
                  </>
                )}
              </motion.button>

              {isSuccess && (
                <motion.div
                  className="flex items-center gap-2 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400"
                  initial="initial" animate="animate" exit="exit"
                  variants={successVariant}
                >
                  <CheckCircle2 size={20} />
                  <span className="font-medium">Message sent successfully!</span>
                </motion.div>
              )}

              {errorMessage && (
                <motion.div
                  className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400"
                  initial="initial" animate="animate" exit="exit"
                  variants={errorVariant}
                >
                  <span>⚠</span>
                  <span className="text-sm">{errorMessage}</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </Section>
    </motion.div>
  );
}
