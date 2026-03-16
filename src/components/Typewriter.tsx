import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  words?: string[];
  className?: string;
  cursorClassName?: string;
}

const defaultWords = [
  "Star world packer",
  "Trusted Packers and Movers",
  "Affordable Shifting Services",
  "Safe and Secure Moving",
  "Professional Relocation Experts"
];

export const Typewriter = ({ 
  words = defaultWords, 
  className = "text-secondary", 
  cursorClassName = "animate-pulse ml-1" 
}: TypewriterProps) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1500);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className={`${className} min-h-[1.2em] inline-block`}>
      {words[index].substring(0, subIndex)}
      <span className={cursorClassName}>|</span>
    </span>
  );
};
