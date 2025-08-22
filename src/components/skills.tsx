'use client';

import { motion } from 'framer-motion';
import { 
  // Technology Icons from react-icons/si (Simple Icons)
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiVuedotjs,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiGit,
  SiDocker,
  SiAmazon,
  SiJest,
  SiFigma
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { 
  // Fallback icons from Lucide
  Globe,
  Server,
  Terminal,
  Cpu
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    description: 'Building modern, responsive user interfaces',
    icon: Globe,
    gradient: 'from-violet-600 via-purple-600 to-indigo-600',
    skills: [
      { 
        name: 'React', 
        icon: SiReact,
        color: 'from-cyan-400 to-blue-500',
        bgColor: 'bg-gradient-to-br from-cyan-50 to-blue-50 dark:bg-gradient-to-br dark:from-cyan-900/10 dark:to-blue-900/10',
        borderColor: 'border-cyan-200 dark:border-cyan-700/50',
        textColor: 'text-cyan-600 dark:text-cyan-300'
      },
      { 
        name: 'TypeScript', 
        icon: SiTypescript,
        color: 'from-blue-500 to-indigo-600',
        bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:bg-gradient-to-br dark:from-blue-900/10 dark:to-indigo-900/10',
        borderColor: 'border-blue-200 dark:border-blue-700/50',
        textColor: 'text-blue-600 dark:text-blue-300'
      },
      { 
        name: 'Next.js', 
        icon: SiNextdotjs,
        color: 'from-gray-700 to-black',
        bgColor: 'bg-gradient-to-br from-gray-50 to-slate-50 dark:bg-gradient-to-br dark:from-gray-800/20 dark:to-slate-800/20',
        borderColor: 'border-gray-300 dark:border-gray-600/50',
        textColor: 'text-gray-700 dark:text-gray-300'
      },
      { 
        name: 'Tailwind CSS', 
        icon: SiTailwindcss,
        color: 'from-teal-400 to-cyan-500',
        bgColor: 'bg-gradient-to-br from-teal-50 to-cyan-50 dark:bg-gradient-to-br dark:from-teal-900/10 dark:to-cyan-900/10',
        borderColor: 'border-teal-200 dark:border-teal-700/50',
        textColor: 'text-teal-600 dark:text-teal-300'
      },
      { 
        name: 'Vue.js', 
        icon: SiVuedotjs,
        color: 'from-emerald-500 to-green-600',
        bgColor: 'bg-gradient-to-br from-emerald-50 to-green-50 dark:bg-gradient-to-br dark:from-emerald-900/10 dark:to-green-900/10',
        borderColor: 'border-emerald-200 dark:border-emerald-700/50',
        textColor: 'text-emerald-600 dark:text-emerald-300'
      },
      { 
        name: 'JavaScript', 
        icon: SiJavascript,
        color: 'from-yellow-400 to-orange-500',
        bgColor: 'bg-gradient-to-br from-yellow-50 to-orange-50 dark:bg-gradient-to-br dark:from-yellow-900/10 dark:to-orange-900/10',
        borderColor: 'border-yellow-200 dark:border-yellow-700/50',
        textColor: 'text-gray-900 dark:text-yellow-300'
      },
    ],
  },
  {
    title: 'Backend Development',
    description: 'Server-side development and database management',
    icon: Server,
    gradient: 'from-rose-600 via-pink-600 to-purple-600',
    skills: [
      { 
        name: 'Node.js', 
        icon: SiNodedotjs,
        color: 'from-green-500 to-emerald-600',
        bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50 dark:bg-gradient-to-br dark:from-green-900/10 dark:to-emerald-900/10',
        borderColor: 'border-green-200 dark:border-green-700/50',
        textColor: 'text-green-600 dark:text-green-300'
      },
      { 
        name: 'Express.js', 
        icon: SiExpress,
        color: 'from-gray-600 to-gray-800',
        bgColor: 'bg-gradient-to-br from-gray-50 to-slate-50 dark:bg-gradient-to-br dark:from-gray-800/20 dark:to-slate-800/20',
        borderColor: 'border-gray-300 dark:border-gray-600/50',
        textColor: 'text-gray-900 dark:text-gray-300'
      },
      { 
        name: 'Python', 
        icon: SiPython,
        color: 'from-blue-500 to-yellow-400',
        bgColor: 'bg-gradient-to-br from-blue-50 to-yellow-50 dark:bg-gradient-to-br dark:from-blue-900/10 dark:to-yellow-900/10',
        borderColor: 'border-blue-200 dark:border-blue-700/50',
        textColor: 'text-blue-600 dark:text-blue-300'
      },
      { 
        name: 'PostgreSQL', 
        icon: SiPostgresql,
        color: 'from-blue-600 to-indigo-700',
        bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:bg-gradient-to-br dark:from-blue-900/10 dark:to-indigo-900/10',
        borderColor: 'border-blue-200 dark:border-blue-700/50',
        textColor: 'text-blue-600 dark:text-blue-300'
      },
      { 
        name: 'MongoDB', 
        icon: SiMongodb,
        color: 'from-green-600 to-emerald-700',
        bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50 dark:bg-gradient-to-br dark:from-green-900/10 dark:to-emerald-900/10',
        borderColor: 'border-green-200 dark:border-green-700/50',
        textColor: 'text-green-600 dark:text-green-300'
      },
      { 
        name: 'GraphQL', 
        icon: SiGraphql,
        color: 'from-pink-500 to-rose-600',
        bgColor: 'bg-gradient-to-br from-pink-50 to-rose-50 dark:bg-gradient-to-br dark:from-pink-900/10 dark:to-rose-900/10',
        borderColor: 'border-pink-200 dark:border-pink-700/50',
        textColor: 'text-pink-600 dark:text-pink-300'
      },
    ],
  },
  {
    title: 'Tools & DevOps',
    description: 'Development tools and deployment technologies',
    icon: Terminal,
    gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
    skills: [
      { 
        name: 'Git', 
        icon: SiGit,
        color: 'from-orange-500 to-red-500',
        bgColor: 'bg-gradient-to-br from-orange-50 to-red-50 dark:bg-gradient-to-br dark:from-orange-900/10 dark:to-red-900/10',
        borderColor: 'border-orange-200 dark:border-orange-700/50',
        textColor: 'text-orange-600 dark:text-orange-300'
      },
      { 
        name: 'Docker', 
        icon: SiDocker,
        color: 'from-blue-500 to-cyan-600',
        bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50 dark:bg-gradient-to-br dark:from-blue-900/10 dark:to-cyan-900/10',
        borderColor: 'border-blue-200 dark:border-blue-700/50',
        textColor: 'text-blue-600 dark:text-blue-300'
      },
      { 
        name: 'AWS', 
        icon: SiAmazon,
        color: 'from-orange-400 to-yellow-500',
        bgColor: 'bg-gradient-to-br from-orange-50 to-yellow-50 dark:bg-gradient-to-br dark:from-orange-900/10 dark:to-yellow-900/10',
        borderColor: 'border-orange-200 dark:border-orange-700/50',
        textColor: 'text-orange-600 dark:text-orange-300'
      },
      { 
        name: 'VS Code', 
        icon: VscCode,
        color: 'from-blue-600 to-indigo-700',
        bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:bg-gradient-to-br dark:from-blue-900/10 dark:to-indigo-900/10',
        borderColor: 'border-blue-200 dark:border-blue-700/50',
        textColor: 'text-blue-600 dark:text-blue-300'
      },
      { 
        name: 'Jest', 
        icon: SiJest,
        color: 'from-red-500 to-pink-600',
        bgColor: 'bg-gradient-to-br from-red-50 to-pink-50 dark:bg-gradient-to-br dark:from-red-900/10 dark:to-pink-900/10',
        borderColor: 'border-red-200 dark:border-red-700/50',
        textColor: 'text-red-600 dark:text-red-300'
      },
      { 
        name: 'Figma', 
        icon: SiFigma,
        color: 'from-purple-500 to-indigo-600',
        bgColor: 'bg-gradient-to-br from-purple-50 to-indigo-50 dark:bg-gradient-to-br dark:from-purple-900/10 dark:to-indigo-900/10',
        borderColor: 'border-purple-200 dark:border-purple-700/50',
        textColor: 'text-purple-600 dark:text-purple-300'
      },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-white dark:bg-gray-900 relative">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <h2 className="text-base font-semibold leading-7 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">Skills</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Technical Expertise
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Category Header with Icon */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} shadow-lg mb-4`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {category.description}
                  </p>
                </div>

                {/* Skills Grid - Modern Glass Card Design */}
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          type: "spring",
                          stiffness: 300,
                          damping: 20
                        }}
                        viewport={{ once: true }}
                        whileHover={{ 
                          scale: 1.05, 
                          y: -8,
                          transition: { duration: 0.2, ease: "easeOut" }
                        }}
                        whileTap={{ 
                          scale: 0.95,
                          transition: { duration: 0.1 }
                        }}
                        className="group relative cursor-pointer touch-manipulation"
                      >
                        <div className={`${skill.bgColor} ${skill.borderColor} border rounded-2xl p-5 shadow-lg hover:shadow-xl active:shadow-2xl transition-all duration-300 ease-out transform backdrop-blur-sm relative overflow-hidden hover:scale-105 active:scale-95 md:group-hover:scale-105`}>
                          <div className="flex flex-col items-center text-center relative z-10">
                            <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} shadow-lg mb-4 transition-all duration-300 ease-out relative hover:scale-110 hover:-rotate-3 active:scale-105 active:rotate-1 md:group-hover:scale-110 md:group-hover:-rotate-3`}>
                              <IconComponent className="w-6 h-6 text-white" />
                              {/* Icon glow effect */}
                              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 hover:opacity-100 active:opacity-100 md:group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <h4 className={`${skill.textColor} font-semibold text-sm transition-colors duration-300`}>
                              {skill.name}
                            </h4>
                          </div>
                          
                          {/* Animated background gradient */}
                          <div className={`absolute inset-0 rounded-2xl opacity-0 hover:opacity-5 active:opacity-10 md:group-hover:opacity-5 bg-gradient-to-br ${skill.color} transition-all duration-300 ease-out`}></div>
                          
                          {/* Subtle border glow */}
                          <div className={`absolute inset-0 rounded-2xl opacity-0 hover:opacity-40 active:opacity-60 md:group-hover:opacity-40 shadow-lg transition-all duration-300 ease-out`}></div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-violet-50 via-purple-50 to-indigo-50 dark:bg-gradient-to-r dark:from-gray-800/80 dark:via-gray-700/60 dark:to-gray-800/80 rounded-3xl p-10 border border-violet-200/50 dark:border-gray-600/50 shadow-2xl backdrop-blur-sm relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-purple-500/5 to-indigo-500/5 dark:bg-gradient-to-r dark:from-gray-700/30 dark:via-gray-600/20 dark:to-gray-700/30"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 shadow-2xl relative">
                  <Cpu className="w-8 h-8 text-white" />
                  {/* Icon glow */}
                  <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-50"></div>
                </div>
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-violet-700 to-indigo-700 dark:from-violet-300 dark:to-indigo-300 bg-clip-text text-transparent mb-6">
                Always Learning
              </h3>
              <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
                Passionate about staying current with emerging technologies and best practices. 
                Currently exploring AI/ML integration, WebAssembly, and advanced cloud architectures.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
