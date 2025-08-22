'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Frontend Consultant',
    company: 'Deloitte USI',
    period: 'January, 2025 - Present',
    description: 'Led development of scalable web applications using React, Node.js, and cloud technologies. Managed a team of 4 developers and improved application performance by 40%.',
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL'],
  },
  {
    title: 'Experience Engineer L2',
    company: 'Publicis Sapient',
    period: 'October, 2021 - January, 2025',
    description: 'Spearheaded development of complex web applications using React, JavaScript, and TypeScript with SSR/SSG implementation. Built robust state management solutions with Redux and custom hooks while achieving 95% test coverage through TDD practices. Collaborated with backend teams on GraphQL integration and maintained CI/CD pipelines using Jenkins.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Redux', 'GraphQL', 'Jest', 'Storybook', 'Jenkins', 'Git'],
  },
  {
    title: 'System Engineer',
    company: 'Tata Consultancy Services Limited',
    period: 'July, 2019 - October, 2021',
    description: 'Developed and enhanced interactive user interfaces using HTML, CSS, JavaScript, and React with focus on intuitive design implementation. Designed state management solutions with Redux and React Hooks while evolving CSS codebase using SASS for improved maintainability. Applied comprehensive testing strategies with Jest and React Testing Library, participating in agile practices and cross-functional team coordination.',
    technologies: ['React', 'JavaScript', 'HTML/CSS', 'Redux', 'SASS', 'Jest', 'React Testing Library'],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-violet-600 dark:text-violet-400">Experience</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Professional Journey
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            My career progression and key achievements in software development
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8"
              >
                <div className="absolute left-0 top-0 h-full w-0.5 bg-violet-600"></div>
                <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-violet-600"></div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {experience.title}
                      </h3>
                      <p className="text-violet-600 dark:text-violet-400 font-medium">
                        {experience.company}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
                      {experience.period}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {experience.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex items-center rounded-md bg-violet-50 dark:bg-violet-900/20 px-2 py-1 text-xs font-medium text-violet-700 dark:text-violet-300"
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
