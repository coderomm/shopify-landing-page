'use client'

import { useState } from 'react';
import { motion } from 'motion/react';
import ProjectRow from './project-row';
import { Section } from '../section-wrapper';
import SectionHeader from '../section/section-header';
import { PROJECTS_DATA, ShopifyProject } from '@/data/resume';

export const transformProject = (project: ShopifyProject) => {
  return {
    id: project.title.toLowerCase().replace(/\s+/g, "-"),
    title: project.title,
    category: "Shopify",
    client: project.client,
    durationTime: project.durationTime,
    description: project.description,
    tags: [...project.tags],
    images: project.images,
    link: project.link,
  };
};

export default function ProjectShowcase() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const myProjects: ShopifyProject[] = PROJECTS_DATA.map(transformProject);

  return (
    <div className="relative overflow-visible">
      <div className="absolute inset-0 z-0
      bg-[radial-gradient(circle_at_top_center,rgba(2,88,96,0.5),transparent_60%)]
      blur-[80px]
      bg-no-repeat" />
      <Section id="work" className="min-h-screen bg-background relative z-10 px-4 py-20 rounded-t-4xl md:rounded-t-[10rem]">
        {/* Section Header */}
        <SectionHeader
          // badge='Our Work'
          titleP1='Featured'
          titleP2='Projects'
          description={"A selection of Shopify stores I' ve built, optimized, and scaled for leading e-commerce brands."}
        />

        {/* Table Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-12 gap-4 py-4 text-sm uppercase tracking-wider text-foreground border-b border-mid-green"
        >
          <div className="col-span-6 md:col-span-4">Project</div>
          <div className="col-span-6 md:col-span-3 hidden md:block">Category</div>
          <div className="col-span-4 md:col-span-3 hidden md:block">Client</div>
          <div className="col-span-6 md:col-span-2 md:text-right">Year</div>
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
              <ProjectRow
                project={project}
                isExpanded={expandedId === project.id}
                onToggle={() => handleToggle(project.id ?? index.toString())}
              />
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </div>
  );
};
