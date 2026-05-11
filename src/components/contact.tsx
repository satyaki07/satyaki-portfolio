'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData { name: string; email: string; message: string; }
interface FormErrors { name?: string; email?: string; message?: string; }

const CONTACT_INFO = [
  {
    icon: Mail,
    label: 'Email',
    sub: 'Drop me a line',
    value: 'satyakibose98@gmail.com',
    href: 'mailto:satyakibose98@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    sub: 'Call me directly',
    value: '+91 9874683119',
    href: 'tel:+919874683119',
  },
  {
    icon: MapPin,
    label: 'Location',
    sub: 'Based in',
    value: 'Kolkata, India',
    href: null,
  },
];

export function Contact() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) e.name = 'Name must be at least 2 characters';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Please enter a valid email address';
    if (!formData.message.trim() || formData.message.trim().length < 10) e.message = 'Message must be at least 10 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error();
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const inputClass = (err?: string) =>
    `w-full rounded-lg border px-4 py-3 text-sm text-gray-900 dark:text-white bg-white dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 outline-none transition-colors focus:ring-2 focus:ring-violet-500 focus:border-violet-500 ${
      err ? 'border-red-400 dark:border-red-500' : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
    }`;

  return (
    <section id="contact" className="relative py-16 sm:py-24 lg:py-32 bg-white dark:bg-gray-900 overflow-hidden">
      {/* Dot-grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.22] dark:opacity-[0.1]"
        style={{
          backgroundImage: 'radial-gradient(circle, #a78bfa 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-900/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-700 dark:text-violet-300">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
            Contact
          </span>
          <p className="mt-5 font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Let&apos;s work together
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Have a project in mind? I&apos;d love to hear from you. Send me a message and let&apos;s
            discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-6xl grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {CONTACT_INFO.map(({ icon: Icon, label, sub, value, href }) => (
              <div
                key={label}
                className="flex items-start gap-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-600 shadow-md">
                  <Icon className="h-4.5 w-4.5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    {label}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">{sub}</p>
                  {href ? (
                    <a
                      href={href}
                      className="mt-1 block text-sm font-medium text-gray-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm font-medium text-gray-900 dark:text-white">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 p-8 shadow-sm">
              <h3 className="font-display text-xl font-semibold text-gray-900 dark:text-white">
                Send me a message
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                I&apos;ll get back to you as soon as possible.
              </p>

              {submitStatus === 'success' && (
                <div className="mt-6 flex items-center gap-2 rounded-lg border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 px-4 py-3">
                  <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 shrink-0" />
                  <p className="text-sm font-medium text-green-700 dark:text-green-300">
                    Message sent successfully!
                  </p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mt-6 flex items-center gap-2 rounded-lg border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 px-4 py-3">
                  <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400 shrink-0" />
                  <p className="text-sm font-medium text-red-700 dark:text-red-300">
                    Something went wrong. Please try again.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">
                      Name *
                    </label>
                    <input
                      type="text" name="name" id="name" required
                      value={formData.name} onChange={handleChange}
                      className={inputClass(errors.name)}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">
                      Email *
                    </label>
                    <input
                      type="email" name="email" id="email" required
                      value={formData.email} onChange={handleChange}
                      className={inputClass(errors.email)}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message" id="message" rows={5} required
                    value={formData.message} onChange={handleChange}
                    className={inputClass(errors.message)}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gray-900 dark:bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 dark:hover:bg-violet-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
