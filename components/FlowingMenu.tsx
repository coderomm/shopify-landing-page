import React, { useState } from 'react';
import { gsap } from 'gsap';
import { AnimatePresence, motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { PROJECTS_DATA, ShopifyProject } from '@/data/resume';
import { transformProject } from './projects/project-showcase';

interface MenuItemProps {
  project: ShopifyProject;
  isExpanded: boolean;
  onToggle: () => void;
}

const FlowingMenu = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const myProjects: ShopifyProject[] = PROJECTS_DATA.map(transformProject);
  return (
    <div className="w-full h-full overflow-hidden px-4">
      {/* Table Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-12 gap-4 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground border-b border-row-border"
      >
        <p className="col-span-6 md:col-span-4">Project</p>
        <p className="col-span-6 md:col-span-3 hidden md:block">Category</p>
        <p className="col-span-4 md:col-span-3 hidden md:block">Client</p>
        <p className="col-span-6 md:col-span-2 md:text-right">Year</p>
      </motion.div>

      {/* Project Rows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {myProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * index }}
          >
            <MenuItem
              project={project}
              isExpanded={expandedId === project.id}
              onToggle={() => handleToggle(project.id ?? index.toString())}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export const MenuItem: React.FC<MenuItemProps> = ({ project, isExpanded, onToggle }) => {
  const itemRef = React.useRef<HTMLDivElement>(null);
  const marqueeRef = React.useRef<HTMLDivElement>(null);
  const marqueeInnerRef = React.useRef<HTMLDivElement>(null);
  const timelineRef = React.useRef<gsap.core.Timeline | null>(null);

  const animationDefaults = { duration: 0.6, ease: 'expo' };

  const findClosestEdge = (mouseX: number, mouseY: number, width: number, height: number): 'top' | 'bottom' => {
    const topEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY, 2);
    const bottomEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height, 2);
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  };

  const handleMouseEnter = (ev: React.MouseEvent<HTMLParagraphElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;

    // Kill any existing animation
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);

    timelineRef.current = gsap.timeline({ defaults: animationDefaults });
    timelineRef.current
      .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' })
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' });
  };

  const handleMouseLeave = (ev: React.MouseEvent<HTMLParagraphElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;

    // Kill any existing animation
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);

    timelineRef.current = gsap.timeline({ defaults: animationDefaults });
    timelineRef.current
      .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' })
      .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, '<');
  };

  const repeatedMarqueeContent = React.useMemo(() => {
    return Array.from({ length: 1 }).map((_, idx) => (
      <React.Fragment key={idx}>
        <MenuItemContent variant='inverted' project={project} />
      </React.Fragment>
    ));
  }, [project]);

  return (
    <div className="flex-1 relative overflow-hidden text-center shadow-[0_-1px_0_0_#000] dark:shadow-[0_-1px_0_0_#fff]"
      ref={itemRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="row-content group relative grid grid-cols-12 gap-4 cursor-pointer"

      >
        <MenuItemContent variant='normal' project={project} />
      </div>

      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-foreground translate-y-[101%]"
        ref={marqueeRef}
      >
        <div className="grid grid-cols-12 gap-4 cursor-pointer" ref={marqueeInnerRef}>
          {repeatedMarqueeContent}
        </div>
      </div>

      {/* Expandable Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
              opacity: { duration: 0.3 }
            }}
            className="overflow-hidden bg-primary text-primary-foreground"
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
                  className="inline-block px-6 py-3 border border-primary-foreground rounded-full text-sm font-medium hover:bg-primary-foreground hover:text-primary transition-colors duration-300 mb-8"
                >
                  See website
                </motion.a>
              )}

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="flex flex-wrap gap-3 mb-10"
              >
                {project.tags.map((tag, index) => (
                  <span key={index} className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground" />
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
                      className="aspect-4/3 rounded-lg overflow-hidden bg-muted"
                    >
                      <img
                        src={image}
                        alt={`${project.title} preview ${index + 1}`}
                        className="w-full h-full object-cover"
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

export default FlowingMenu;

function MenuItemContent({ variant = 'normal', project }: { variant: 'normal' | 'inverted', project: ShopifyProject }) {
  const textClass = variant === 'normal' ?
    'text-foreground' : 'text-background';
  return (
    <React.Fragment>
      <p className={cn("col-span-6 md:col-span-4",
        "py-4",
        "text-sm md:text-base font-medium text-left",
        variant === 'normal' && "transition-[padding] duration-300 ease-out group-hover:pl-4",
        variant === 'inverted' && 'pl-4',
        textClass)}
      >{project.title}</p>
      <p className={cn("col-span-6 md:col-span-3 hidden md:block ",
        "py-4",
        "text-sm text-current text-left opacity-70", textClass)}
      >{project.category}</p>
      <p className={cn("col-span-4 md:col-span-3 hidden md:block",
        "py-4",
        "text-sm text-current text-left opacity-70", textClass)}
      >{project.client}</p>
      <p className={cn("col-span-6 md:col-span-2 md:text-right",
        "py-4",
        variant === 'normal' && "transition-[padding] duration-300 ease-out group-hover:pr-4",
        variant === 'inverted' && 'pr-4',
        "text-sm font-medium", textClass)}
      >{project.durationTime}</p>
    </React.Fragment>
  )
}