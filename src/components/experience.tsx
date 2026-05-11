'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Frontend Consultant',
    company: 'Deloitte USI',
    period: 'January 2025 – Present',
    description:
      'Led development of scalable web applications using React, Node.js, and cloud technologies. Managed a team of 4 developers and improved application performance by 40%.',
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL'],
  },
  {
    title: 'Experience Engineer L2',
    company: 'Publicis Sapient',
    period: 'October 2021 – January 2025',
    description:
      'Spearheaded development of complex web applications using React, JavaScript, and TypeScript with SSR/SSG implementation. Built robust state management solutions with Redux and custom hooks while achieving 95% test coverage through TDD practices. Collaborated with backend teams on GraphQL integration and maintained CI/CD pipelines using Jenkins.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Redux', 'GraphQL', 'Jest', 'Storybook', 'Jenkins', 'Git'],
  },
  {
    title: 'System Engineer',
    company: 'Tata Consultancy Services',
    period: 'July 2019 – October 2021',
    description:
      'Developed and enhanced interactive user interfaces using HTML, CSS, JavaScript, and React with focus on intuitive design implementation. Designed state management solutions with Redux and React Hooks while evolving CSS codebase using SASS for improved maintainability.',
    technologies: ['React', 'JavaScript', 'HTML/CSS', 'Redux', 'SASS', 'Jest', 'React Testing Library'],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-16 sm:py-24 lg:py-32 bg-gray-50 dark:bg-gray-950 overflow-hidden">
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
            Experience
          </span>
          <p className="mt-5 font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Professional Journey
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
            My career progression and key achievements in software development
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8"
              >
                {/* Timeline line */}
                <div className="absolute left-0 top-0 h-full w-px bg-violet-200 dark:bg-violet-800" />
                {/* Timeline dot */}
                <div className="absolute -left-[5px] top-5 h-2.5 w-2.5 rounded-full border-2 border-violet-600 bg-white dark:bg-gray-950" />

                <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-sm font-medium text-violet-600 dark:text-violet-400">
                        {exp.company}
                      </p>
                    </div>
                    <span className="inline-flex shrink-0 items-center rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-3 py-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                      {exp.period}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400">
                    {exp.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-violet-100 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800/50 px-2.5 py-0.5 text-xs font-medium text-violet-800 dark:text-violet-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
