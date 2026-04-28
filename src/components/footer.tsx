'use client';

import { Mail } from 'lucide-react';
import { SiGithub, SiLinkedin } from 'react-icons/si';

const SOCIALS = [
  { icon: SiGithub, href: 'https://github.com/satyaki07', label: 'GitHub', external: true },
  { icon: SiLinkedin, href: 'https://linkedin.com/in/satyaki07', label: 'LinkedIn', external: true },
  { icon: Mail, href: 'mailto:satyakibose98@gmail.com', label: 'Email', external: false },
];

export function Footer() {
  return (
    <footer className="relative bg-gray-950 border-t border-gray-800 overflow-hidden">
      {/* Subtle dot-grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: 'radial-gradient(circle, #a78bfa 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Monogram */}
          <span className="font-mono text-base font-bold">
            <span className="text-gray-600">&lt;</span>
            <span className="text-violet-400">SB</span>
            <span className="text-gray-600">&nbsp;/&gt;</span>
          </span>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {SOCIALS.map(({ icon: Icon, href, label, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-800 text-gray-500 hover:border-violet-700 hover:text-violet-400 transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Satyaki Bose
          </p>
        </div>
      </div>
    </footer>
  );
}
