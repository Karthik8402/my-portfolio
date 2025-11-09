import { useState, type FormEvent } from "react";
import { motion, easeInOut, easeOut, easeIn } from "framer-motion";
import emailjs from "@emailjs/browser";
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
} from "lucide-react";
import Section from "../components/Section";
import { SITE } from "../data/site";
import { Meta } from "../seo/Meta";

// Icon mapping for social media
const socialIconMap: Record<string, LucideIcon> = {
  Github,
  Linkedin,
  Twitter,
  Mail,
};

// EmailJS Configuration from environment variables
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


export default function Contact() {
  // Unique hover animation variants for contact info boxes
  const contactHoverVariants = {
    email: {
      scale: 1.05,
      x: -5,
      rotate: -3,
      boxShadow: "0 10px 20px rgba(124, 58, 237, 0.4)",
      transition: { duration: 0.3, ease: easeInOut },
    },
    phone: {
      scale: 1.05,
      x: 5,
      rotate: 3,
      boxShadow: "0 10px 20px rgba(128, 90, 213, 0.4)",
      transition: { duration: 0.4, ease: easeInOut },
    },
    location: {
      scale: 1.05,
      x: -5,
      rotate: -3,
      boxShadow: "0 10px 20px rgba(219, 39, 119, 0.4)",
      transition: { duration: 0.4, ease: easeInOut },
    },
  };

  // Unique hover animation variants for social icons
  const socialHoverVariants = [
    {
      scale: 1.2,
      rotate: 15,
      x: 3,
      transition: { duration: 0.08, ease: easeOut },
    },
    {
      scale: 1.2,
      rotate: -15,
      y: 3,
      transition: { duration: 0.1, ease: easeOut },
    },
    {
      scale: 1.2,
      rotate: 15,
      x: 3,
      transition: { duration: 0.1, ease: easeOut },
    },
    {
      scale: 1.2,
      rotate: -15,
      y: -3,
      transition: { duration: 0.1, ease: easeOut },
    },
  ];

  const successVariant = {
    initial: { scale: 0.8, opacity: 0, rotate: -10 },
    animate: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.5, ease: easeOut },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      rotate: 10,
      transition: { duration: 0.3, ease: easeIn },
    },
  };

  const errorVariant = {
    initial: { scale: 0.8, opacity: 0, rotate: 10 },
    animate: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.5, ease: easeOut },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      rotate: -10,
      transition: { duration: 0.3, ease: easeIn },
    },
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      // Get current time formatted
      const currentTime = new Date().toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      // Send email using EmailJS with template variables
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          name: formData.name,
          time: currentTime,
          from_email: formData.email,
          message: formData.message,
          email: formData.email,
        },
        EMAILJS_PUBLIC_KEY
      );

      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setErrorMessage(
        "Failed to send message. Please try again or email directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Meta
        title={`Contact - ${SITE.name}`}
        description="Get in touch with me"
        path="/contact"
      />

      <Section>
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <MessageCircle className="text-brand-500" size={32} />
            <h1 className="text-4xl md:text-5xl font-bold">Get In Touch</h1>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-500 to-purple-500 mb-4" />
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl">
            Have a question or want to work together? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information Cards */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            {/* Email Card */}
            <motion.a
              href={`mailto:${SITE.email}`}
              initial={{ scale: 1, x: 0, rotate: 0 }}
              className="flex items-center gap-4 p-6 glass rounded-xl border border-gray-200 dark:border-gray-800 hover:border-brand-500/50 transition-all group"
              whileHover={contactHoverVariants.email}
              aria-label="Email"
            >
              <div className="p-3 bg-brand-500/10 rounded-lg group-hover:bg-brand-500/20 transition-colors">
                <Mail className="text-brand-500" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  Email
                </p>
                <p className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-brand-500 transition-colors">
                  {SITE.email}
                </p>
              </div>
            </motion.a>

            {/* Phone Card */}
            <motion.div
              className="flex items-center gap-4 p-6 glass rounded-xl border border-gray-200 dark:border-gray-800"
              whileHover={contactHoverVariants.phone}
              aria-label="Phone"
            >
              <div className="p-3 bg-purple-500/10 rounded-lg">
                <Phone className="text-purple-500" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  Phone
                </p>
                <p className="font-medium text-gray-900 dark:text-gray-100">
                  {SITE.phone}
                </p>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              className="flex items-center gap-4 p-6 glass rounded-xl border border-gray-200 dark:border-gray-800"
              whileHover={contactHoverVariants.location}
              aria-label="Location"
            >
              <div className="p-3 bg-pink-500/10 rounded-lg">
                <MapPin className="text-pink-500" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  Location
                </p>
                <p className="font-medium text-gray-900 dark:text-gray-100">
                  {SITE.location}
                </p>
              </div>
            </motion.div>

            {/* Social Links - Icons Only */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex flex-wrap gap-3">
                {SITE.socials.map((social, idx) => {
                  const IconComponent = socialIconMap[social.icon];
                  return IconComponent ? (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 glass rounded-lg hover:bg-brand-500/10 transition-all border border-gray-200 dark:border-gray-800 hover:border-brand-500/50"
                      whileHover={
                        socialHoverVariants[idx % socialHoverVariants.length]
                      }
                      transition={{ duration: 0.2, ease: easeInOut }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      aria-label={social.label}
                    >
                      <IconComponent size={22} className="text-brand-500" />
                    </motion.a>
                  ) : null;
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
              whileHover={{ scale: 1.03, }}
              transition={{ duration: 0.3, ease: "easeInOut", }}
              className="rounded-2xl"
            >
          <motion.div
            className="glass rounded-2xl p-8 border border-gray-200 dark:border-gray-800"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <span>⚠</span> {errors.name}
                  </p>
                )}
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <span>⚠</span> {errors.email}
                  </p>
                )}
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  placeholder="Leave The Message..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none resize-none transition-all"
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <span>⚠</span> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 gradient-bg text-white rounded-lg font-medium disabled:opacity-50 transition-all shadow-lg"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0 6px 12px rgba(124, 58, 237, 0.6)",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {/* Success Message */}
              {isSuccess && (
                <motion.div
                  className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-600 dark:text-green-400"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={successVariant}
                >
                  <CheckCircle2 size={20} />
                  <span className="font-medium">
                    Message sent successfully!
                  </span>
                </motion.div>
              )}

              {errorMessage && (
                <motion.div
                  className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600 dark:text-red-400"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={errorVariant}
                >
                  <span>⚠</span>
                  <span className="text-sm">{errorMessage}</span>
                </motion.div>
              )}
              </form>
              </motion.div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
