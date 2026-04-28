'use client';

import { motion } from 'framer-motion';
import {
  SiReact, SiTypescript, SiNextdotjs, SiTailwindcss, SiVuedotjs, SiJavascript,
  SiNodedotjs, SiExpress, SiPython, SiPostgresql, SiMongodb, SiGraphql,
  SiGit, SiDocker, SiAmazon, SiJest, SiFigma,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { Globe, Server, Terminal, Cpu } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    description: 'Building modern, responsive user interfaces',
    icon: Globe,
    skills: [
      { name: 'React',       icon: SiReact,       color: 'text-cyan-500' },
      { name: 'TypeScript',  icon: SiTypescript,  color: 'text-blue-500' },
      { name: 'Next.js',     icon: SiNextdotjs,   color: 'text-gray-800 dark:text-gray-200' },
      { name: 'Tailwind',    icon: SiTailwindcss, color: 'text-teal-500' },
      { name: 'Vue.js',      icon: SiVuedotjs,    color: 'text-emerald-500' },
      { name: 'JavaScript',  icon: SiJavascript,  color: 'text-yellow-500' },
    ],
  },
  {
    title: 'Backend',
    description: 'Server-side development and databases',
    icon: Server,
    skills: [
      { name: 'Node.js',     icon: SiNodedotjs,   color: 'text-green-500' },
      { name: 'Express.js',  icon: SiExpress,     color: 'text-gray-700 dark:text-gray-300' },
      { name: 'Python',      icon: SiPython,      color: 'text-blue-500' },
      { name: 'PostgreSQL',  icon: SiPostgresql,  color: 'text-blue-600' },
      { name: 'MongoDB',     icon: SiMongodb,     color: 'text-green-600' },
      { name: 'GraphQL',     icon: SiGraphql,     color: 'text-pink-500' },
    ],
  },
  {
    title: 'Tools & DevOps',
    description: 'Development tools and deployment',
    icon: Terminal,
    skills: [
      { name: 'Git',         icon: SiGit,         color: 'text-orange-500' },
      { name: 'Docker',      icon: SiDocker,      color: 'text-blue-500' },
      { name: 'AWS',         icon: SiAmazon,      color: 'text-orange-400' },
      { name: 'VS Code',     icon: VscCode,       color: 'text-blue-600' },
      { name: 'Jest',        icon: SiJest,        color: 'text-red-500' },
      { name: 'Figma',       icon: SiFigma,       color: 'text-purple-500' },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-16 sm:py-24 lg:py-32 bg-white dark:bg-gray-900 overflow-hidden">
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
            Skills
          </span>
          <p className="mt-5 font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Technical Expertise
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Categories */}
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-3">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Category header */}
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 shadow-md">
                  <category.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{category.description}</p>
                </div>
              </div>

              {/* Skill grid */}
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, si) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.35, delay: ci * 0.08 + si * 0.04 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -4, transition: { duration: 0.18 } }}
                      className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 p-4 shadow-sm hover:shadow-md hover:border-violet-200 dark:hover:border-violet-700/60 transition-all cursor-default"
                    >
                      <div className="flex flex-col items-center gap-2 text-center">
                        <Icon className={`h-6 w-6 ${skill.color}`} />
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Always Learning callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mx-auto mt-20 max-w-3xl rounded-2xl border border-violet-200 dark:border-violet-800/60 bg-violet-50 dark:bg-violet-900/10 p-10 text-center shadow-sm"
        >
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600 shadow-md">
            <Cpu className="h-6 w-6 text-white" />
          </div>
          <h3 className="font-display text-xl font-semibold text-gray-900 dark:text-white">
            Always Learning
          </h3>
          <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Passionate about staying current with emerging technologies and best practices.
            Currently exploring AI/ML integration, WebAssembly, and advanced cloud architectures.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
