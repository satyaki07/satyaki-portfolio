'use client';

import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">About Me</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Passionate about technology and innovation
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            I&apos;m a dedicated software engineer with a passion for creating elegant solutions 
            to complex problems. With expertise in modern web technologies, I focus on 
            building scalable applications that provide exceptional user experiences.
          </p>
        </motion.div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"
          >
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600">
                  <span className="text-white font-bold">💻</span>
                </div>
                Full Stack Development
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                <p className="flex-auto">
                  Proficient in both frontend and backend technologies, creating 
                  end-to-end solutions with modern frameworks and databases.
                </p>
              </dd>
            </div>
            
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600">
                  <span className="text-white font-bold">🎨</span>
                </div>
                UI/UX Design
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                <p className="flex-auto">
                  Strong eye for design and user experience, ensuring applications 
                  are not only functional but also intuitive and visually appealing.
                </p>
              </dd>
            </div>
            
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600">
                  <span className="text-white font-bold">🚀</span>
                </div>
                Problem Solving
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                <p className="flex-auto">
                  Analytical approach to breaking down complex challenges into 
                  manageable solutions with clean, maintainable code.
                </p>
              </dd>
            </div>
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
