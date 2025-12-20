'use client'

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import { useRef, useState, useCallback, useEffect, memo } from 'react';

// Size of each block in pixels
const GRID_SIZE = 40;

interface ActiveBlock {
  id: string;
  col: number;
  row: number;
  timestamp: number;
}

const HeroContent = memo(
  ({ variant = 'normal' }: { variant?: 'normal' | 'inverted' }) => {
    const textClass =
      variant === 'normal'
        ? 'text-foreground'
        : 'text-white dark:text-black';
    return (
      <div className="text-center">
        {/* Name with mixed typography */}
        <h1 className={cn("text-5xl md:text-7xl lg:text-8xl tracking-tight mb-4", textClass)}>
          <span className="font-serif italic">O</span>
          <span className="font-mono uppercase tracking-widest">mmm </span>
          <span className="font-serif italic">S</span>
          <span className="font-mono uppercase tracking-widest">harma</span>
        </h1>

        {/* Role */}
        <p className={cn("font-mono uppercase text-2xl md:text-4xl lg:text-5xl tracking-[0.2em] mb-2", textClass)}>
          Independent Front End
        </p>

        {/* Developer with decorative elements */}
        <p className={cn("font-mono uppercase text-2xl md:text-4xl lg:text-5xl tracking-[0.2em] mb-2", textClass)}>
          <span className="opacity-80">✦</span>Developer<span className="opacity-80">✦</span>
        </p>

        {/* Currently building */}
        <p className={cn("font-mono uppercase text-2xl md:text-4xl lg:text-5xl tracking-[0.15em] mb-2", textClass)}>
          Currently Building @ N1
        </p>

        {/* Location */}
        <p className={cn("font-mono uppercase text-2xl md:text-4xl lg:text-5xl tracking-[0.2em] mb-2", textClass)}>
          Based in Montreal
        </p>

        {/* Folio year */}
        <p className={cn("font-mono uppercase text-2xl md:text-4xl lg:text-5xl tracking-[0.15em]", textClass)}>
          Folio©2025
        </p>
      </div>
    );
  }
);

HeroContent.displayName = 'HeroContent';

export default function FreelanceHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeBlocks, setActiveBlocks] = useState<ActiveBlock[]>([]);

  // Clean up old blocks
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setActiveBlocks(prev => prev.filter(block => now - block.timestamp < 400));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const col = Math.floor(x / GRID_SIZE);
    const row = Math.floor(y / GRID_SIZE);

    const id = `${col}-${row}`;

    setActiveBlocks(prev => {
      // Check if this block already exists
      const exists = prev.some(block => block.col === col && block.row === row);
      if (exists) {
        // Update timestamp for existing block
        return prev.map(block =>
          block.col === col && block.row === row
            ? { ...block, timestamp: Date.now() }
            : block
        );
      }
      // Add new block
      return [...prev, { id, col, row, timestamp: Date.now() }];
    });
  }, []);

  return (
    <section
      className="min-h-screen bg-background overflow-hidden cursor-none"
    >

      <div className="relative isolate"
        ref={containerRef}
        onMouseMove={handleMouseMove}
      >
        {/* Grid overlay with blocks */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <AnimatePresence>
            {activeBlocks.map(block => (
              <motion.div
                key={block.id}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1, ease: 'easeOut' }}
                className="absolute bg-foreground"
                style={{
                  left: block.col * GRID_SIZE,
                  top: block.row * GRID_SIZE,
                  width: GRID_SIZE,
                  height: GRID_SIZE,
                }}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Text content with mix-blend-difference for color inversion */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 mix-blend-difference">
          <HeroContent variant="normal" />
        </div>

      </div>
    </section >
  );
};
