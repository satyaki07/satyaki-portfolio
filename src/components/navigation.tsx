'use client';

import { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleResumeDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Path to your resume in public folder
    link.download = 'Satyaki_Bose_Resume.pdf'; // Downloaded file name
    link.target = '_blank'; // Open in new tab for viewing
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-r from-gray-900/95 via-blue-900/95 to-gray-900/95 backdrop-blur-lg border-b border-blue-500/20 shadow-lg shadow-blue-500/10">
        <nav className="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 group">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent hover:from-blue-300 hover:via-teal-300 hover:to-cyan-300 transition-all duration-300 font-mono">
                <span className="text-gray-500 dark:text-gray-400">&lt;</span>
                Satyaki
                <span className="text-gray-500 dark:text-gray-400"> /&gt;</span>
              </span>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-xl p-2.5 text-cyan-200 hover:text-white ml-3 hover:bg-blue-800/50 transition-all duration-200 border border-cyan-500/30 hover:border-cyan-400/50"
              onClick={() => {
                console.log('Hamburger clicked, current state:', mobileMenuOpen);
                setMobileMenuOpen(true);
              }}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-8 lg:items-center">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-sm font-semibold text-cyan-100 hover:text-white transition-all duration-300 group"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/0 via-teal-600/0 to-cyan-600/0 group-hover:from-blue-600/30 group-hover:via-teal-600/30 group-hover:to-cyan-600/30 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
              </a>
            ))}
            
            {/* Resume Download Button */}
            <button
              onClick={handleResumeDownload}
              className="relative px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:via-purple-500 hover:to-indigo-500 rounded-lg shadow-lg shadow-violet-500/25 hover:shadow-violet-400/40 transition-all duration-300 flex items-center gap-2 group"
            >
              <Download className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
              <span>Resume</span>
            </button>
          </div>
          
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <ThemeToggle />
          </div>
        </nav>
      </header>
      
      {/* Mobile menu - moved outside header */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[9999]">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={() => setMobileMenuOpen(false)} 
          />
          
          {/* Menu Panel */}
          <div className="fixed inset-y-0 right-0 z-[10000] w-full max-w-sm bg-gradient-to-b from-white via-blue-50 to-white dark:from-gray-900 dark:via-blue-900 dark:to-gray-900 shadow-2xl overflow-y-auto border-l border-blue-200/50 dark:border-blue-500/30">
            <div className="px-6 py-6">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-teal-600 to-cyan-600 dark:from-blue-400 dark:via-teal-400 dark:to-cyan-400 bg-clip-text text-transparent font-mono">
                    <span className="text-gray-500 dark:text-gray-400">&lt;</span>
                    Satyaki
                    <span className="text-gray-500 dark:text-gray-400"> /&gt;</span>
                  </span>
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-xl p-2.5 text-blue-600 hover:text-blue-800 hover:bg-blue-100/50 dark:text-cyan-200 dark:hover:text-white dark:hover:bg-blue-800/50 transition-all duration-200 border border-blue-300/50 hover:border-blue-400/70 dark:border-cyan-500/30 dark:hover:border-cyan-400/50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              
              <div className="mt-8">
                <div className="space-y-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block relative group"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="rounded-xl px-4 py-4 text-base font-semibold text-blue-700 hover:text-blue-900 dark:text-cyan-100 dark:hover:text-white transition-all duration-300 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 via-teal-100/50 to-cyan-100/50 dark:from-blue-600/20 dark:via-teal-600/20 dark:to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 border border-blue-200/50 dark:border-cyan-500/20 rounded-xl group-hover:border-blue-400/70 dark:group-hover:border-cyan-400/40 transition-colors duration-300"></div>
                        <span className="relative z-10 flex items-center">
                          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 mr-3 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>
                          {item.name}
                        </span>
                      </div>
                    </a>
                  ))}
                  
                  {/* Mobile Resume Download Button */}
                  <button
                    onClick={() => {
                      handleResumeDownload();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full block relative group"
                  >
                    <div className="rounded-xl px-4 py-4 text-base font-semibold text-white bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:via-purple-500 hover:to-indigo-500 transition-all duration-300 relative overflow-hidden shadow-lg shadow-violet-500/25">
                      <div className="absolute inset-0 border border-violet-400/30 rounded-xl group-hover:border-violet-300/50 transition-colors duration-300"></div>
                      <span className="relative z-10 flex items-center justify-center">
                        <Download className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform duration-200" />
                        Download Resume
                      </span>
                    </div>
                  </button>
                </div>
                
                {/* Mobile menu footer with theme toggle */}
                <div className="mt-8 pt-6 border-t border-blue-200/50 dark:border-cyan-500/30">
                  <div className="flex items-center justify-center">
                    <div className="p-2 rounded-xl bg-blue-100/50 border border-blue-200/50 dark:bg-blue-800/30 dark:border-cyan-500/30">
                      <ThemeToggle />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
