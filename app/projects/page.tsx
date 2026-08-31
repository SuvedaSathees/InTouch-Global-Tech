'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { projects } from '@/lib/site-config';
import { TechBadgeIcon } from '@/components/tech-logos';
import {
  ArrowUpRight,
  Sparkles,
  Building2,
  GraduationCap,
  Briefcase,
  BatteryCharging,
  Smartphone,
  Server,
  Globe,
  Zap,
  Code2,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
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

const projectGradients: Record<string, { bg: string; border: string; glow: string; accent: string }> = {
  'junior-junction-school': {
    bg: 'from-amber-600/10 via-amber-500/5 to-transparent',
    border: 'group-hover:border-amber-500',
    glow: 'rgba(217, 119, 6, 0.15)',
    accent: 'bg-amber-700 text-white',
  },
  'erp-for-magnertia': {
    bg: 'from-indigo-600/10 via-amber-500/5 to-transparent',
    border: 'group-hover:border-indigo-500',
    glow: 'rgba(79, 70, 229, 0.15)',
    accent: 'bg-indigo-700 text-white',
  },
  'mobile-app-for-ev-charge-station': {
    bg: 'from-emerald-600/10 via-teal-500/5 to-transparent',
    border: 'group-hover:border-emerald-500',
    glow: 'rgba(16, 185, 129, 0.15)',
    accent: 'bg-emerald-700 text-white',
  },
  'myjob-campus-website': {
    bg: 'from-cyan-600/10 via-blue-500/5 to-transparent',
    border: 'group-hover:border-cyan-500',
    glow: 'rgba(6, 182, 212, 0.15)',
    accent: 'bg-cyan-700 text-white',
  },
  'website-for-ev-station': {
    bg: 'from-amber-600/10 via-orange-500/5 to-transparent',
    border: 'group-hover:border-amber-500',
    glow: 'rgba(245, 158, 11, 0.15)',
    accent: 'bg-amber-700 text-white',
  },
  'portfolio': {
    bg: 'from-violet-600/10 via-purple-500/5 to-transparent',
    border: 'group-hover:border-violet-500',
    glow: 'rgba(139, 92, 246, 0.15)',
    accent: 'bg-violet-700 text-white',
  },
  'erp-for-rpc': {
    bg: 'from-blue-700/10 via-indigo-600/5 to-transparent',
    border: 'group-hover:border-blue-600',
    glow: 'rgba(37, 99, 235, 0.15)',
    accent: 'bg-blue-700 text-white',
  },
};

const filterCategories = [
  'All Projects',
  'ERP Platforms',
  'Web Applications',
  'Mobile & IoT',
];

// Interactive 3D Card with dynamic spotlight & tilt
function AnimatedProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const VisualIcon = projectVisualIcons[project.slug] || Code2;
  const styling = projectGradients[project.slug] || {
    bg: 'from-amber-600/10 to-transparent',
    border: 'group-hover:border-amber-500',
    glow: 'rgba(217, 119, 6, 0.15)',
    accent: 'bg-amber-700 text-white',
  };

  // Mouse tilt logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, scale: 0.94, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94, y: -20 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`group relative flex flex-col justify-between rounded-3xl border border-[#E8DFD1] bg-white shadow-xs hover:shadow-2xl hover:shadow-amber-700/10 transition-all duration-300 overflow-hidden cursor-default ${styling.border}`}
    >
      {/* Top Gradient Ambient Light */}
      <div className={`absolute top-0 inset-x-0 h-44 bg-gradient-to-b ${styling.bg} pointer-events-none opacity-80`} />

      {/* Dynamic Cursor Spotlight Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${(mouseX.get() + 0.5) * 100}% ${(mouseY.get() + 0.5) * 100}%, ${styling.glow}, transparent 80%)`,
        }}
      />

      <div className="p-7 sm:p-8 space-y-6 relative z-10">
        
        {/* Top Header Bar with Animated Indicator */}
        <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
              {project.industry}
            </span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[10px] font-bold text-emerald-700 shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono">PRODUCTION LIVE</span>
          </div>
        </div>

        {/* Project Title, Category & Animatic Visual Icon */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1.5">
            <h2 className="text-xl sm:text-2xl font-black text-slate-950 group-hover:text-amber-800 transition-colors leading-tight">
              {project.name}
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wide">
                {project.category}
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-[11px] font-semibold text-slate-500">100% Sovereign Code</span>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            className="flex h-13 w-13 items-center justify-center rounded-2xl bg-amber-50 border border-amber-200 p-3 text-amber-800 shadow-xs group-hover:bg-amber-700 group-hover:text-white transition-all shrink-0"
          >
            <VisualIcon className="h-6 w-6" />
          </motion.div>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
          {project.short}
        </p>

        {/* Tech Stack Chips with Interactive Scaling */}
        <div className="space-y-2.5 pt-2 border-t border-slate-100">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Engineered With:
            </span>
            <span className="text-[10px] font-mono text-amber-700 font-bold">
              {project.technologies.length} Tech Modules
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.08, y: -1 }}
                transition={{ duration: 0.15 }}
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#FAF7F2] border border-[#E8DFD1] px-2.5 py-1 text-[11px] font-semibold text-slate-800 shadow-2xs hover:border-amber-400 hover:bg-white transition-all"
              >
                <TechBadgeIcon name={tech} size="sm" />
                <span>{tech}</span>
              </motion.span>
            ))}
          </div>
        </div>

      </div>

      {/* Card Bottom Interactive Action Deck */}
      <div className="px-7 sm:px-8 py-4 bg-[#FAF7F2]/90 border-t border-[#E8DFD1] flex items-center justify-between gap-4 relative z-10">
        {project.liveUrl ? (
          <motion.a
            whileHover={{ scale: 1.04, x: 2 }}
            whileTap={{ scale: 0.97 }}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-100/90 hover:bg-emerald-200 px-4 py-2 rounded-xl border border-emerald-300 transition-all shadow-xs cursor-pointer group/btn"
          >
            <Globe className="h-3.5 w-3.5 text-emerald-600 group-hover/btn:animate-spin" />
            <span>Launch Live Product</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </motion.a>
        ) : (
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
            <ShieldCheck className="h-4 w-4 text-amber-700" />
            <span>Delivered Enterprise Infrastructure</span>
          </div>
        )}

        <div className="text-[11px] font-mono text-slate-400 font-bold hidden sm:block">
          0{index + 1} / 0{projects.length}
        </div>
      </div>
    </motion.div>
  );
}

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

      {/* Floating Animated Geometric Particle Matrix in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full border border-amber-800/[0.04] border-dashed pointer-events-none"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full border border-amber-800/[0.04] border-dashed pointer-events-none"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 space-y-12 sm:space-y-16">
        
        {/* Left-Aligned Header with Line Accent */}
        <div className="max-w-4xl text-left">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-amber-800 mb-4"
          >
            <span className="w-5 h-[2px] bg-amber-700 rounded-full" />
            <span>OUR PROJECTS</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.08]"
          >
            Projects We&apos;ve Built.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl"
          >
            Explore our web applications, custom ERP platforms, and digital systems built for clients worldwide.
          </motion.p>
        </div>

        {/* Dynamic Category Filter Pills with Spring Indicator */}
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
                <span className="relative z-10 flex items-center gap-1.5">
                  <span>{cat}</span>
                  {cat === 'All Projects' && (
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${isActive ? 'bg-amber-900/40 text-amber-200' : 'bg-slate-200/70 text-slate-600'}`}>
                      {projects.length}
                    </span>
                  )}
                </span>
              </button>
            );
          })}
        </div>

        {/* Premium 2-Column Animatic Showcase Gallery */}
        <motion.div layout className="grid gap-8 grid-cols-1 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <AnimatedProjectCard key={project.slug} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </main>
  );
}
