'use client';

import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function Hero() {
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
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 pt-20 sm:pt-24">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Enhanced Profile Picture with Image Support */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8 flex justify-center"
          >
            <motion.div
              className="relative"
            >
              {/* Simplified gradient border */}
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-500 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden relative">
                  {/* Clean Profile Image */}
                  <div className="w-full h-full relative">
                    {/* Stylish placeholder - replace when you add your photo */}
                    <div className="w-full h-full bg-gradient-to-br from-violet-400 via-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
                      <span className="text-3xl sm:text-4xl text-white font-bold tracking-wide">
                        SB
                      </span>
                    </div>
                    
                    <Image
                      src="/profile.jpg"
                      alt="Satyaki Bose"
                      fill
                      className="object-cover rounded-full"
                      priority
                    />
                    
                    {/* Minimal color overlay for theme integration */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-indigo-500/10 mix-blend-overlay"></div>
                  </div>
                </div>
              </div>
              
              {/* Simplified floating particles */}
              <motion.div
                animate={{ 
                  y: [0, -8, 0],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-2 -right-2 w-3 h-3 bg-violet-500 rounded-full shadow-lg"
              />
              <motion.div
                animate={{ 
                  y: [0, -6, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-1 -left-3 w-2 h-2 bg-purple-500 rounded-full shadow-md"
              />
              <motion.div
                animate={{ 
                  y: [0, -5, 0],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute top-4 -left-4 w-1.5 h-1.5 bg-indigo-500 rounded-full shadow-sm"
              />
            </motion.div>
          </motion.div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Hi, I&apos;m{' '}
            <span className="gradient-text">Satyaki Bose</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Full Stack Developer & Software Engineer passionate about creating 
            innovative solutions and beautiful user experiences.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
            <a
              href="#contact"
              className="rounded-md bg-violet-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 transition-colors"
            >
              Get in touch
            </a>
            <button
              onClick={handleResumeDownload}
              className="rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </button>
            <a
              href="#about"
              className="group relative px-4 py-2.5 text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 hover:text-white transition-all duration-300 border border-violet-200 dark:border-violet-800 rounded-lg hover:border-violet-400 dark:hover:border-violet-600 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/0 via-purple-500/0 to-indigo-500/0 group-hover:from-violet-500/20 group-hover:via-purple-500/20 group-hover:to-indigo-500/20 transition-all duration-300"></div>
              
              {/* Animated background shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-300/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
              
              <span className="relative z-10 flex items-center gap-2">
                Learn more 
                <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </a>
          </div>
          <div className="mt-8 mb-16 flex justify-center space-x-6">
            <a
              href="https://github.com/satyaki07"
              className="text-gray-400 hover:text-violet-500 dark:hover:text-violet-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/satyaki07"
              className="text-gray-400 hover:text-purple-500 dark:hover:text-purple-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:satyakibose98@gmail.com"
              className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
