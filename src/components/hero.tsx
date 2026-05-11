'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, Menu, X } from 'lucide-react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import Image from 'next/image';
import { useTypewriter } from '@/hooks/useTypewriter';
import { ThemeToggle } from './theme-toggle';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const STATS = [
  '5+ years exp',
  '3 companies',
  '40% perf gain',
  '95% test coverage',
];

const TYPEWRITER_WORDS = [
  'React applications',
  'TypeScript systems',
  'scalable APIs',
  'AI-powered apps',
  'cloud solutions',
];

const FADE_UP = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

export function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const typewriterText = useTypewriter(TYPEWRITER_WORDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Satyaki_Bose_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* ── NAVBAR ── */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300
          bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800
          lg:border-transparent
          ${scrolled
            ? 'lg:bg-white/90 lg:dark:bg-gray-950/90 lg:backdrop-blur-lg lg:border-b lg:border-gray-200/60 lg:dark:border-gray-800/60 lg:shadow-sm'
            : 'lg:bg-transparent lg:dark:bg-transparent'
          }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8 lg:py-4">
          {/* Monogram logo */}
          <a href="#" className="font-mono text-lg font-bold">
            <span className="text-gray-400 dark:text-gray-500">&lt;</span>
            <span className="text-violet-600 dark:text-violet-400">SB</span>
            <span className="text-gray-400 dark:text-gray-500">&nbsp;/&gt;</span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop right side */}
          <div className="hidden lg:flex items-center gap-3">
            <span className="flex items-center gap-1.5 rounded-full border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 px-3 py-1 text-xs font-semibold text-green-700 dark:text-green-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Open to work
            </span>
            <ThemeToggle />
            <motion.button
              onClick={handleResumeDownload}
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="flex cursor-pointer items-center gap-2 rounded-lg bg-gray-900 dark:bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 dark:hover:bg-violet-500 hover:shadow-md transition-all"
            >
              <Download className="h-3.5 w-3.5" />
              Resume
            </motion.button>
          </div>

          {/* Mobile: theme + hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              className="cursor-pointer flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* ── MOBILE DRAWER ── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[9999] lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-72 bg-white dark:bg-gray-950 shadow-2xl flex flex-col border-l border-gray-200 dark:border-gray-800">
            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-800">
              <span className="font-mono text-base font-bold">
                <span className="text-gray-400 dark:text-gray-500">&lt;</span>
                <span className="text-violet-600 dark:text-violet-400">SB</span>
                <span className="text-gray-400 dark:text-gray-500">&nbsp;/&gt;</span>
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="cursor-pointer flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Nav links */}
            <div className="flex flex-col gap-0.5 px-3 py-4 flex-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-500 opacity-60" />
                  {item.label}
                </a>
              ))}
            </div>

            {/* Drawer footer */}
            <div className="px-3 py-4 border-t border-gray-100 dark:border-gray-800 space-y-3">
              <button
                onClick={() => { handleResumeDownload(); setMobileMenuOpen(false); }}
                className="w-full cursor-pointer flex items-center justify-center gap-2 rounded-lg bg-gray-900 dark:bg-violet-600 px-4 py-3 text-sm font-semibold text-white hover:bg-gray-700 dark:hover:bg-violet-500 transition-colors"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </button>
              <div className="flex items-center justify-center gap-1.5 text-xs font-medium text-green-700 dark:text-green-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                Open to work
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── HERO SECTION ── */}
      <section className="relative bg-gray-50 dark:bg-gray-950 overflow-hidden pt-14 lg:pt-0 lg:min-h-screen lg:flex lg:items-center">
        {/* Dot-grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.18]"
          style={{
            backgroundImage: 'radial-gradient(circle, #a78bfa 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50 to-gray-50/0 dark:from-gray-950 dark:to-gray-950/0" />
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-gray-50 to-gray-50/0 dark:from-gray-950 dark:to-gray-950/0" />

        <div className="relative mx-auto max-w-7xl w-full px-5 lg:px-8 py-10 lg:py-36">

          {/* ── MOBILE layout (< lg) ── */}
          <div className="flex flex-col items-center text-center lg:hidden">

            {/* Avatar — small, at top on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative mb-5"
            >
              <div className="relative h-24 w-24">
                <div className="absolute inset-0 rounded-full border-2 border-violet-300 dark:border-violet-700 animate-pulse" />
                <div className="relative h-24 w-24 overflow-hidden rounded-full border-[3px] border-white dark:border-gray-800 shadow-xl bg-gradient-to-br from-violet-500 to-indigo-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-white select-none">SB</span>
                  </div>
                  <Image src="/profile.PNG" alt="Satyaki Bose" fill className="object-cover" quality={95} priority unoptimized />
                </div>
                <div className="absolute bottom-0.5 right-0.5 h-4 w-4 rounded-full border-2 border-white dark:border-gray-800 bg-green-500">
                  <span className="absolute inset-0 animate-ping rounded-full bg-green-400 opacity-60" />
                </div>
              </div>
            </motion.div>

            {/* Eyebrow */}
            <motion.div {...FADE_UP(0.05)}>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-900/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-violet-700 dark:text-violet-300">
                <span className="h-1 w-1 rounded-full bg-violet-500" />
                Frontend Consultant · Deloitte USI
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              {...FADE_UP(0.1)}
              className="mt-3 font-display text-[2.1rem] font-bold tracking-tight text-gray-900 dark:text-white leading-tight"
            >
              Satyaki Bose
            </motion.h1>

            {/* Typewriter */}
            <motion.p {...FADE_UP(0.15)} className="mt-2 text-base font-medium text-gray-500 dark:text-gray-400">
              I build{' '}
              <span className="text-violet-600 dark:text-violet-400 font-semibold">
                {typewriterText}
                <span className="ml-0.5 inline-block h-[1em] w-0.5 translate-y-[0.1em] bg-violet-500 align-middle animate-pulse" />
              </span>
            </motion.p>

            {/* Stats — 2×2 grid */}
            <motion.div {...FADE_UP(0.2)} className="mt-5 grid grid-cols-2 gap-2 w-full max-w-xs">
              {STATS.map((stat) => (
                <span
                  key={stat}
                  className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 px-3 py-2 text-xs font-medium text-gray-700 dark:text-gray-300 shadow-sm"
                >
                  {stat}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div {...FADE_UP(0.25)} className="mt-6 flex w-full max-w-xs flex-col gap-2.5">
              <motion.a
                href="#contact"
                whileTap={{ scale: 0.97 }}
                className="w-full rounded-xl bg-gray-900 dark:bg-violet-600 py-3 text-sm font-semibold text-white shadow-md hover:bg-gray-700 dark:hover:bg-violet-500 transition-colors"
              >
                Get in touch
              </motion.a>
              <motion.a
                href="#projects"
                whileTap={{ scale: 0.97 }}
                className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-transparent py-3 text-sm font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                View projects
              </motion.a>
              <a
                href="#about"
                className="text-xs font-medium text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              >
                Scroll to explore ↓
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div {...FADE_UP(0.3)} className="mt-5 mb-8 flex items-center gap-2.5">
              {[
                { href: 'https://github.com/satyaki07', icon: SiGithub, label: 'GitHub', external: true },
                { href: 'https://linkedin.com/in/satyaki07', icon: SiLinkedin, label: 'LinkedIn', external: true },
                { href: 'mailto:satyakibose98@gmail.com', icon: Mail, label: 'Email', external: false },
              ].map(({ href, icon: Icon, label, external }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 shadow-sm hover:border-violet-300 dark:hover:border-violet-700 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── DESKTOP layout (lg+) ── */}
          <div className="hidden lg:flex items-center gap-16">

            {/* Left: content */}
            <div className="flex flex-1 flex-col items-start text-left">
              <motion.div {...FADE_UP(0)}>
                <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-900/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-700 dark:text-violet-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                  Frontend Consultant · Deloitte USI
                </span>
              </motion.div>

              <motion.h1
                {...FADE_UP(0.1)}
                className="mt-5 font-display text-6xl font-bold tracking-tight text-gray-900 dark:text-white xl:text-7xl leading-[1.05]"
              >
                Satyaki Bose
              </motion.h1>

              <motion.p {...FADE_UP(0.2)} className="mt-4 text-2xl font-medium text-gray-500 dark:text-gray-400">
                I build{' '}
                <span className="text-violet-600 dark:text-violet-400 font-semibold">
                  {typewriterText}
                  <span className="ml-0.5 inline-block h-[1.15em] w-0.5 translate-y-[0.1em] bg-violet-500 align-middle animate-pulse" />
                </span>
              </motion.p>

              <motion.div {...FADE_UP(0.3)} className="mt-8 flex flex-wrap gap-2">
                {STATS.map((stat) => (
                  <span
                    key={stat}
                    className="rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 px-4 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm"
                  >
                    {stat}
                  </span>
                ))}
              </motion.div>

              <motion.div {...FADE_UP(0.4)} className="mt-10 flex flex-wrap items-center gap-3">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-xl bg-gray-900 dark:bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-gray-700 dark:hover:bg-violet-500 hover:shadow-xl transition-all"
                >
                  Get in touch
                </motion.a>
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-transparent px-6 py-3 text-sm font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500 transition-all"
                >
                  View projects
                </motion.a>
                <a
                  href="#about"
                  className="text-sm font-medium text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                >
                  Scroll to explore ↓
                </a>
              </motion.div>

              <motion.div {...FADE_UP(0.5)} className="mt-8 flex items-center gap-3">
                {[
                  { href: 'https://github.com/satyaki07', icon: SiGithub, label: 'GitHub', external: true },
                  { href: 'https://linkedin.com/in/satyaki07', icon: SiLinkedin, label: 'LinkedIn', external: true },
                  { href: 'mailto:satyakibose98@gmail.com', icon: Mail, label: 'Email', external: false },
                ].map(({ href, icon: Icon, label, external }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 shadow-sm hover:border-violet-300 dark:hover:border-violet-700 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Right: large avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative flex-shrink-0"
            >
              <div className="relative flex h-80 w-80 xl:h-96 xl:w-96 items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-violet-300 dark:border-violet-700 animate-pulse" />
                <div className="absolute inset-2 rounded-full border border-violet-200/40 dark:border-violet-800/40" />
                <div className="relative h-72 w-72 xl:h-88 xl:w-88 overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-2xl bg-gradient-to-br from-violet-500 to-indigo-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white select-none">SB</span>
                  </div>
                  <Image src="/profile.PNG" alt="Satyaki Bose" fill className="object-cover" quality={100} priority unoptimized />
                </div>
                <div className="absolute bottom-6 right-6 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white dark:border-gray-800 bg-green-500 shadow-md">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </>
  );
}
