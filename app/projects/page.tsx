'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/lib/site-config';
import { TechBadgeIcon } from '@/components/tech-logos';
import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  Building2,
  GraduationCap,
  Briefcase,
  BatteryCharging,
  Smartphone,
  Server,
  CheckCircle2,
  Layers,
  Globe,
  Zap,
  Code2,
} from 'lucide-react';

const projectVisualIcons: Record<string, React.ElementType> = {
  'junior-junction-school': GraduationCap,
  'portfolio': Sparkles,
  'myjob-campus-website': Briefcase,
  'erp-for-magnertia': Building2,
  'mobile-app-for-ev-charge-station': Smartphone,
  'website-for-ev-station': BatteryCharging,
  'erp-for-rpc': Server,
};

const projectGradients: Record<string, { bg: string; border: string; accent: string }> = {
  'junior-junction-school': {
    bg: 'from-blue-600/10 via-sky-500/5 to-transparent',
    border: 'group-hover:border-blue-500/60',
    accent: 'bg-blue-600 text-white',
  },
  'erp-for-magnertia': {
    bg: 'from-indigo-600/10 via-purple-500/5 to-transparent',
    border: 'group-hover:border-indigo-500/60',
    accent: 'bg-indigo-600 text-white',
  },
  'mobile-app-for-ev-charge-station': {
    bg: 'from-emerald-600/10 via-teal-500/5 to-transparent',
    border: 'group-hover:border-emerald-500/60',
    accent: 'bg-emerald-600 text-white',
  },
  'myjob-campus-website': {
    bg: 'from-cyan-600/10 via-blue-500/5 to-transparent',
    border: 'group-hover:border-cyan-500/60',
    accent: 'bg-cyan-600 text-white',
  },
  'website-for-ev-station': {
    bg: 'from-amber-600/10 via-orange-500/5 to-transparent',
    border: 'group-hover:border-amber-500/60',
    accent: 'bg-amber-600 text-white',
  },
  'portfolio': {
    bg: 'from-violet-600/10 via-purple-500/5 to-transparent',
    border: 'group-hover:border-violet-500/60',
    accent: 'bg-violet-600 text-white',
  },
  'erp-for-rpc': {
    bg: 'from-blue-700/10 via-indigo-600/5 to-transparent',
    border: 'group-hover:border-blue-600/60',
    accent: 'bg-blue-700 text-white',
  },
};

const filterCategories = [
  'All Projects',
  'ERP Platforms',
  'Web Applications',
  'Mobile & IoT',
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All Projects') return true;
    if (activeFilter === 'ERP Platforms') return project.category.includes('ERP') || project.category === 'ERP';
    if (activeFilter === 'Web Applications') return project.category.includes('Web') || project.category === 'Portfolio' || project.category === 'Campus';
    if (activeFilter === 'Mobile & IoT') return project.category.includes('Mobile') || project.category.includes('EV');
    return true;
  });

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-slate-900 pt-32 pb-24 select-none relative overflow-hidden">
      {/* Precision Blueprint Ambient Grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 space-y-12 sm:space-y-16">
        
        {/* Left-Aligned Header with Line Accent */}
        <div className="max-w-4xl text-left">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-amber-800 mb-4"
          >
            <span className="w-4 h-[2px] bg-amber-700 rounded-full" />
            <span>OUR PRODUCTS</span>
          </motion.div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.08]">
            Production Software Built for Sovereign Ownership.
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl">
            Our 7 enterprise systems, custom ERPs, and high-performance web platforms delivered with 100% client source code ownership.
          </p>
        </div>

        {/* Dynamic Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 border-b border-[#E8DFD1] pb-3">
          {filterCategories.map((cat) => {
            const isActive = activeFilter === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-amber-50/50'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeProjectsFilterPill"
                    className="absolute inset-0 bg-amber-700 rounded-xl shadow-md shadow-amber-700/20"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Premium 2-Column Showcase Gallery */}
        <motion.div layout className="grid gap-8 grid-cols-1 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const VisualIcon = projectVisualIcons[project.slug] || Code2;
              const styling = projectGradients[project.slug] || {
                bg: 'from-amber-600/10 to-transparent',
                border: 'hover:border-amber-500',
                accent: 'bg-amber-700 text-white',
              };

              return (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.96, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -15 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                  className={`group relative flex flex-col justify-between rounded-3xl border border-[#E8DFD1] bg-white shadow-sm hover:shadow-2xl hover:shadow-amber-700/10 transition-all duration-300 overflow-hidden ${styling.border}`}
                >
                  {/* Subtle Top Gradient Aura */}
                  <div className={`absolute top-0 inset-x-0 h-44 bg-gradient-to-b ${styling.bg} pointer-events-none opacity-80`} />

                  <div className="p-7 sm:p-8 space-y-6 relative z-10">
                    
                    {/* Top Bar */}
                    <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-100">
                      <span className="text-xs font-semibold text-slate-500">
                        {project.industry}
                      </span>

                      <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[10px] font-bold text-emerald-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Live</span>
                      </div>
                    </div>

                    {/* Project Title & Visual Badge */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1.5">
                        <h2 className="text-xl sm:text-2xl font-black text-slate-950 group-hover:text-amber-800 transition-colors leading-tight">
                          {project.name}
                        </h2>
                        <span className="text-xs font-bold text-amber-700 uppercase tracking-wide">
                          {project.category}
                        </span>
                      </div>

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 border border-amber-200 p-2.5 text-amber-800 shadow-2xs group-hover:scale-110 group-hover:bg-amber-700 group-hover:text-white transition-all shrink-0">
                        <VisualIcon className="h-6 w-6" />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                      {project.short}
                    </p>

                    {/* Tech Stack Chips with Real Official PNG Logos */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Technologies Used:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center gap-1.5 rounded-xl bg-slate-50 border border-slate-200/70 px-2.5 py-1 text-[11px] font-semibold text-slate-800 shadow-2xs hover:border-blue-300 transition-colors"
                          >
                            <TechBadgeIcon name={tech} size="sm" />
                            <span>{tech}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Card Bottom Action Deck */}
                  <div className="px-7 sm:px-8 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-4">
                    {/* Live Website Button if available */}
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-100/80 hover:bg-emerald-200/80 px-3.5 py-1.5 rounded-xl border border-emerald-300/80 transition-all shadow-2xs"
                      >
                        <Globe className="h-3.5 w-3.5 text-emerald-600" />
                        <span>Visit Live Website</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <div className="text-xs text-slate-400 font-medium">
                        Delivered Enterprise System
                      </div>
                    )}
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </main>
  );
}
