import React, { useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { ShopifyProject } from '@/data/resume';
import { trackProjectExpand, trackProjectWebsiteClick } from '@/lib/analytics';

interface ProjectRowProps {
  project: ShopifyProject;
  isExpanded: boolean;
  onToggle: () => void;
}

type Direction = 'left' | 'right' | 'top' | 'bottom';

const ProjectRow: React.FC<ProjectRowProps> = ({ project, isExpanded, onToggle }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [enterDirection, setEnterDirection] = useState<Direction>('top');
  const [exitDirection, setExitDirection] = useState<Direction>('bottom');

  const getDirection = useCallback((e: React.MouseEvent<HTMLDivElement>): Direction => {
    if (!rowRef.current) return 'top';

    const rect = rowRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const w = rect.width;
    const h = rect.height;

    // Calculate which edge is closest
    const distLeft = x;
    const distRight = w - x;
    const distTop = y;
    const distBottom = h - y;

    const minDist = Math.min(distLeft, distRight, distTop, distBottom);

    if (minDist === distLeft) return 'left';
    if (minDist === distRight) return 'right';
    if (minDist === distTop) return 'top';
    return 'bottom';
  }, []);

  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const dir = getDirection(e);
    setEnterDirection(dir);
    setIsHovered(true);
  }, [getDirection]);

  const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const dir = getDirection(e);
    setExitDirection(dir);
    setIsHovered(false);
  }, [getDirection]);

  const getPosition = (dir: Direction) => {
    switch (dir) {
      case 'left': return { x: '-100%', y: '0%' };
      case 'right': return { x: '100%', y: '0%' };
      case 'top': return { x: '0%', y: '-100%' };
      case 'bottom': return { x: '0%', y: '100%' };
    }
  };

  const handleToggle = () => {
    if (!isExpanded) {
      trackProjectExpand(project.title);
    }
    onToggle();
  };

  return (
    <div className="border-b border-mid-green">
      {/* Header Row */}
      <div
        ref={rowRef}
        className="project-row"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleToggle}
      >
        {/* Animated background - always mounted, position changes */}
        <motion.div
          className="absolute inset-0 bg-mid-green z-0"
          initial={false}
          animate={isHovered
            ? { x: '0%', y: '0%' }
            : getPosition(exitDirection)
          }
          transition={{
            duration: 0.35,
            ease: [0.4, 0, 0.2, 1]
          }}
        />

        {/* Content */}
        <div className={cn("project-row-content font-grotesque grid grid-cols-12 gap-4 py-4 transition-colors duration-200 text-deep-green dark:text-foreground",
          isHovered && "text-background dark:text-foreground"
        )}>
          <motion.div
            className="col-span-6 md:col-span-4"
            animate={{ paddingLeft: isHovered ? 20 : 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="text-base font-medium">{project.title}</span>
          </motion.div>
          <div className="col-span-6 md:col-span-3 hidden md:block">
            <span className="text-sm text-current opacity-70">{project.category}</span>
          </div>
          <div className="col-span-4 md:col-span-3 hidden md:block">
            <span className="text-sm text-current opacity-70">{project.client}</span>
          </div>
          <motion.div
            className="col-span-6 md:col-span-2 md:text-right"
            animate={{ paddingRight: isHovered ? 20 : 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="text-base font-medium">{project.durationTime}</span>
          </motion.div>
        </div>
      </div>

      {/* Expandable Content with AnimatePresence for smooth exit */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
              opacity: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
            }}
            className="overflow-hidden bg-mid-green text-background dark:text-foreground"
          >
            <div className="px-4 md:px-8 py-8 md:py-12">
              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="project-description max-w-4xl mb-8"
              >
                {project.description}
              </motion.p>

              {/* Link Button */}
              {project.link && (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="inline-flex items-center justify-center w-auto rounded-full text-foreground bg-background dark:text-background dark:bg-foreground h-8 md:h-10 px-4 mb-8 font-grotesque"
                  onClick={() =>
                    trackProjectWebsiteClick(project.title, project.link)
                  }
                >
                  See website
                </motion.a>
              )}

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="flex flex-wrap gap-4 mb-10"
              >
                {project.tags.map((tag, index) => (
                  <span key={index} className="flex items-center gap-1 text-sm font-grotesque">
                    <span className="w-1.5 h-1.5 rounded-full bg-background dark:bg-foreground" />
                    {tag}
                  </span>
                ))}
              </motion.div>

              {/* Images */}
              {project.images && project.images.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                  {project.images.map((image, index) => (
                    <div
                      key={index}
                      className="overflow-hidden border-4 border-background dark:border-foreground"
                    >
                      <img
                        src={`/projects/${image}`}
                        alt={`${project.title} preview ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading='lazy'
                      />
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectRow;
