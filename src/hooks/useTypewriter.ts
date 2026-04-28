import { useState, useEffect } from 'react';

export function useTypewriter(
  words: string[],
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 1800
) {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'deleting'>('typing');

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === 'typing') {
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(
          () => setDisplayText(currentWord.slice(0, displayText.length + 1)),
          typingSpeed
        );
      } else {
        timeout = setTimeout(() => setPhase('deleting'), pauseTime);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(
          () => setDisplayText(displayText.slice(0, -1)),
          deletingSpeed
        );
      } else {
        setWordIndex((prev) => (prev + 1) % words.length);
        setPhase('typing');
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, phase, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
}
