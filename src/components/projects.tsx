'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'YelpCamp',
    description:
      'A full-stack campground review platform where users can create, edit, and review campgrounds. Features user authentication, image uploads, Google Maps integration, fuzzy search, and password reset via email.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Bootstrap', 'Passport.js', 'Google Maps'],
    liveUrl: '#',
    githubUrl: 'https://github.com/satyaki07/YelpCamp',
  },
  {
    title: 'Task Management App',
    description:
      'A collaborative project management tool with drag-and-drop Kanban boards, real-time updates, and team workspaces. Built with a focus on performance and accessibility.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Redux'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Forkify',
    description:
      'A recipe search application built with modern JavaScript. Search thousands of recipes, adjust servings, bookmark favorites with localStorage persistence, and view detailed cooking instructions.',
    technologies: ['JavaScript', 'ES6', 'Webpack', 'Babel', 'REST API'],
    liveUrl: '#',
    githubUrl: 'https://github.com/satyaki07/forkify',
  },
  {
    title: 'Resume Analyzer',
    description:
      'An AI-powered web app that scores your resume against any job description. Upload a PDF resume, paste a job description, and instantly get a match score, strengths, skill gaps, and actionable suggestions — powered by Google Gemini.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Google Gemini', 'pdf-parse'],
    liveUrl: '#',
    githubUrl: 'https://github.com/satyaki07/resume-analyzer',
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-16 sm:py-24 lg:py-32 bg-gray-50 dark:bg-gray-950 overflow-hidden">
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
            Projects
          </span>
          <p className="mt-5 font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Featured Work
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
            A selection of projects that showcase my skills and passion for building
          </p>
        </motion.div>

        {/* Project cards grid */}
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { duration: 0.18 } }}
              className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 p-6 shadow-sm hover:shadow-md hover:border-violet-200 dark:hover:border-violet-700/60 transition-all"
            >
              {/* Project number accent */}
              <div className="mb-4 flex items-center justify-between">
                <span className="font-display text-sm font-bold text-violet-600 dark:text-violet-400">
                  #{String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-violet-600 dark:hover:bg-violet-500 transition-all duration-200"
                    aria-label={`View ${project.title} source code`}
                  >
                    <Github className="h-4.5 w-4.5" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-violet-600 dark:hover:bg-violet-500 transition-all duration-200"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLink className="h-4.5 w-4.5" />
                  </a>
                </div>
              </div>

              <h3 className="font-display text-lg font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-violet-100 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800/50 px-2.5 py-0.5 text-xs font-medium text-violet-800 dark:text-violet-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
