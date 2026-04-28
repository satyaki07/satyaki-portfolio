'use client';

import { motion } from 'framer-motion';

const CARDS = [
  {
    emoji: '💻',
    title: 'Full Stack Development',
    description:
      'Proficient in both frontend and backend technologies, creating end-to-end solutions with modern frameworks and databases.',
  },
  {
    emoji: '🎨',
    title: 'UI/UX Design',
    description:
      'Strong eye for design and user experience, ensuring applications are not only functional but also intuitive and visually appealing.',
  },
  {
    emoji: '🚀',
    title: 'Problem Solving',
    description:
      'Analytical approach to breaking down complex challenges into manageable solutions with clean, maintainable code.',
  },
];

export function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24 lg:py-32 bg-white dark:bg-gray-900 overflow-hidden">
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-900/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-700 dark:text-violet-300">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
            About Me
          </span>
          <p className="mt-5 font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Passionate about technology and innovation
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
            I&apos;m a dedicated software engineer with a passion for creating elegant solutions to
            complex problems. With expertise in modern web technologies, I focus on building
            scalable applications that provide exceptional user experiences.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600 shadow-lg">
                <span className="text-xl" role="img" aria-hidden>{card.emoji}</span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-gray-900 dark:text-white">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-400">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
