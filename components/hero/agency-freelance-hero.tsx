'use client'

import { useRef, useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const GRID_SIZE = 80;

interface ActiveBlock {
  id: string;
  col: number;
  row: number;
  timestamp: number;
}

export default function AgencyFreelanceHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeBlocks, setActiveBlocks] = useState<ActiveBlock[]>([]);
  const [dimensions, setDimensions] = useState({ cols: 0, rows: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({
          cols: Math.ceil(width / GRID_SIZE),
          rows: Math.ceil(height / GRID_SIZE),
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

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
      const exists = prev.some(block => block.col === col && block.row === row);
      if (exists) {
        return prev.map(block =>
          block.col === col && block.row === row
            ? { ...block, timestamp: Date.now() }
            : block
        );
      }
      return [...prev, { id, col, row, timestamp: Date.now() }];
    });
  }, []);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen cursor-none"
    >
      <div className="absolute inset-0 z-0
      bg-[radial-gradient(circle_at_bottom_center,rgba(2,88,96,0.5),transparent_60%)]
      blur-[80px]
      bg-no-repeat" />
      {/* Grid overlay with blocks */}
      <div className="absolute inset-0 pointer-events-none hidden dark:flex">
        <AnimatePresence>
          {activeBlocks.map(block => (
            <motion.div
              key={block.id}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
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
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 dark:mix-blend-difference">
        <div className="text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-widest uppercase border border-current rounded-full text-foreground">
              Independent Shopify Developer
            </span>
          </motion.div>

          <div className="bg-clip-primary bg-clip-text">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-transparent text-4xl md:text-6xl lg:text-7xl tracking-tight mb-6"
            >
              <span className="font-grotesque italic text-foreground">I Build </span>
              <span className="font-grotesque font-semibold">Premium</span>
              <br />
              <span className="font-grotesque font-semibold">Shopify </span>
              <span className="font-serif italic  text-foreground">Experiences</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-grotesque text-foreground text-lg md:text-xl lg:text-2xl tracking-wide mb-8 opacity-80"
          >
            Custom themes • Headless commerce • Store optimization • CRO optimization
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16 mb-8"
          >
            <div className="text-center">
              <p className="text-deep-pine dark:text-foreground text-3xl md:text-4xl font-mono font-semibold">15+</p>
              <p className="text-foreground font-grotesque text-sm tracking-widest uppercase opacity-80">Client Stores Delivered</p>
            </div>
            <div className="text-center">
              <p className="text-deep-pine dark:text-foreground text-3xl md:text-4xl font-mono font-semibold">1.5+ years</p>
              <p className="text-foreground font-grotesque text-sm tracking-widest uppercase opacity-80">Overall Shopify Experience</p>
            </div>
            <div className="text-center">
              <p className="text-deep-pine dark:text-foreground text-3xl md:text-4xl font-mono font-semibold">5★</p>
              <p className="text-foreground font-grotesque text-sm tracking-widest uppercase opacity-80">Client Rating</p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-grotesque uppercase text-deep-pine dark:text-muted-foreground text-sm tracking-[0.3em] opacity-90"
          >
            Shopify Expert ✦ Engineering-First Approach
          </motion.p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 mix-blend-difference"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-foreground rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-foreground rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
