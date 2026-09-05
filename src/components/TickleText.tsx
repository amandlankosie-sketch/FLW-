import React, { useState } from 'react';
import { motion } from 'motion/react';

interface TickleTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'div';
  id?: string;
  highlightWords?: string[];
  highlightClassName?: string;
}

export const TickleText: React.FC<TickleTextProps> = ({
  text,
  className = '',
  as = 'h2',
  id,
  highlightWords = [],
  highlightClassName = 'text-[#25634A]',
}) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const words = text.split(' ');
  const Tag = as;

  // Compute character global indices
  let runningIndex = 0;

  return (
    <Tag
      id={id}
      className={`${className} cursor-default select-none inline-block`}
      onMouseLeave={() => setHoveredIdx(null)}
    >
      <span className="inline-flex flex-wrap items-baseline gap-x-[0.3em] py-1">
        {words.map((word, wIdx) => {
          const isHighlighted = highlightWords.some((hw) =>
            word.toLowerCase().includes(hw.toLowerCase())
          );

          const chars = Array.from(word);
          const startIndex = runningIndex;
          runningIndex += chars.length + 1; // +1 for the space

          return (
            <span
              key={wIdx}
              className={`inline-flex whitespace-nowrap ${
                isHighlighted ? highlightClassName : ''
              }`}
            >
              {chars.map((char, cIdx) => {
                const charGlobalIndex = startIndex + cIdx;
                const dist = hoveredIdx !== null ? Math.abs(charGlobalIndex - hoveredIdx) : 999;

                // macOS Dock magnification wave curve
                let targetY = 0;
                let targetScale = 1;
                let targetRotate = 0;

                if (dist === 0) {
                  targetY = -12;
                  targetScale = 1.34;
                  targetRotate = -1.5;
                } else if (dist === 1) {
                  targetY = -6;
                  targetScale = 1.16;
                  targetRotate = 0.8;
                } else if (dist === 2) {
                  targetY = -2;
                  targetScale = 1.05;
                }

                return (
                  <motion.span
                    key={cIdx}
                    onMouseEnter={() => setHoveredIdx(charGlobalIndex)}
                    onMouseLeave={() => {
                      // Handled by container or next character entering
                    }}
                    animate={{
                      y: targetY,
                      scale: targetScale,
                      rotate: targetRotate,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 580,
                      damping: 26,
                      mass: 0.08,
                    }}
                    style={{
                      display: 'inline-block',
                      transformOrigin: 'bottom center',
                    }}
                    className="transition-colors duration-150"
                  >
                    {char}
                  </motion.span>
                );
              })}
            </span>
          );
        })}
      </span>
    </Tag>
  );
};
