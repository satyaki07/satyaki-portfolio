'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeDebug() {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
      <div className="text-sm text-gray-900 dark:text-white">
        <p>Theme: {theme}</p>
        <p>Resolved: {resolvedTheme}</p>
        <p>HTML Class: {document.documentElement.className}</p>
      </div>
    </div>
  );
}
