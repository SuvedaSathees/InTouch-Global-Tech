'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TechBadgeIcon } from '@/components/tech-logos';
import {
  Code2,
  Server,
  Database,
  Cloud,
  Sparkles,
  Zap,
} from 'lucide-react';

export type TechItem = {
  name: string;
  category: 'Frontend' | 'Backend' | 'Databases' | 'Cloud & DevOps';
  badge: string;
  metric: string;
  description: string;
};

const technologies: TechItem[] = [
  // Frontend
  {
    name: 'Next.js 14 / 15',
    category: 'Frontend',
    badge: 'SSR / Edge',
    metric: '0.4s Global Load',
    description: 'React fullstack framework with App Router, server rendering & edge runtime.',
  },
  {
    name: 'React 18 / 19',
    category: 'Frontend',
    badge: 'Core UI',
    metric: '60 FPS Smooth',
    description: 'Declarative component architecture with concurrent rendering & custom hooks.',
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    badge: 'Strict Types',
    metric: '0 Runtime Errors',
    description: 'Strict type contracts preventing bugs across APIs and database schemas.',
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    badge: 'Utility CSS',
    metric: '<15KB Bundles',
    description: 'Compiled zero-runtime styling engine for lightweight, rapid UI delivery.',
  },
  {
    name: 'React Native',
    category: 'Frontend',
    badge: 'Mobile iOS/Android',
    metric: 'Native Compilation',
    description: 'Cross-platform native iOS & Android applications from a shared codebase.',
  },
  {
    name: 'Figma Systems',
    category: 'Frontend',
    badge: 'UI/UX Design',
    metric: 'High Fidelity',
    description: 'Clickable prototypes, design token libraries, and operator dashboards.',
  },

  // Backend
  {
    name: 'Node.js',
    category: 'Backend',
    badge: 'Async Engine',
    metric: '10k+ Req/Sec',
    description: 'Event-driven high-throughput runtime for scalable microservices & APIs.',
  },
  {
    name: 'NestJS',
    category: 'Backend',
    badge: 'Enterprise TS',
    metric: 'Modular Core',
    description: 'Enterprise framework with dependency injection and role-based access.',
  },
  {
    name: 'Express.js',
    category: 'Backend',
    badge: 'Fast API',
    metric: '<2ms Overhead',
    description: 'Minimalist routing middleware for webhooks, authentication & auth tokens.',
  },
  {
    name: 'Python',
    category: 'Backend',
    badge: 'AI & Automations',
    metric: 'Neural Pipelines',
    description: 'High-speed Python microservices for OCR, web scrapers, and AI models.',
  },
  {
    name: 'Java Enterprise',
    category: 'Backend',
    badge: 'High Concurrency',
    metric: 'JVM Performance',
    description: 'Battle-tested enterprise processing for high-volume financial transactions.',
  },

  // Databases
  {
    name: 'PostgreSQL',
    category: 'Databases',
    badge: 'ACID Relational',
    metric: '99.999% Integrity',
    description: 'Enterprise relational core with JSONB indexes and row-level security.',
  },
  {
    name: 'Redis',
    category: 'Databases',
    badge: 'In-Memory Cache',
    metric: '<0.8ms Latency',
    description: 'Ultra-fast memory cache, rate limiting, and real-time pub/sub broker.',
  },
  {
    name: 'MongoDB',
    category: 'Databases',
    badge: 'Document Store',
    metric: 'Dynamic Schemas',
    description: 'Flexible NoSQL JSON storage for event telemetry and catalog systems.',
  },
  {
    name: 'MySQL',
    category: 'Databases',
    badge: 'Relational DB',
    metric: 'High-Speed Query',
    description: 'Proven open-source relational database with master-slave clustering.',
  },
  {
    name: 'Firebase',
    category: 'Databases',
    badge: 'Real-Time Sync',
    metric: 'Instant Push',
    description: 'Real-time client synchronization and cloud messaging for mobile notifications.',
  },

  // Cloud & DevOps
  {
    name: 'Docker & Compose',
    category: 'Cloud & DevOps',
    badge: 'Containers',
    metric: 'Zero Drift',
    description: 'Immutable container packaging for identical staging and production environments.',
  },
  {
    name: 'Vercel Cloud',
    category: 'Cloud & DevOps',
    badge: 'Edge Hosting',
    metric: 'Worldwide CDN',
    description: 'Serverless deployment with instant rollbacks and global edge distribution.',
  },
  {
    name: 'Railway Cloud',
    category: 'Cloud & DevOps',
    badge: 'Database Hosting',
    metric: 'Zero DevOps Friction',
    description: 'Automated container deployments, database provisioning, and auto-scaling.',
  },
  {
    name: 'Git & GitHub',
    category: 'Cloud & DevOps',
    badge: 'CI/CD & Versioning',
    metric: '100% Transfer',
    description: 'Automated testing workflows, PR reviews, and sovereign source code delivery.',
  },
];

const categoryTabs = [
  { id: 'All', label: 'All Tech (20)', icon: Zap },
  { id: 'Frontend', label: 'Frontend (6)', icon: Code2 },
  { id: 'Backend', label: 'Backend (5)', icon: Server },
  { id: 'Databases', label: 'Databases (5)', icon: Database },
  { id: 'Cloud & DevOps', label: 'Cloud & DevOps (4)', icon: Cloud },
];

export function ProjectTechStack() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredTech = technologies.filter((item) => {
    if (activeTab === 'All') return true;
    return item.category === activeTab;
  });

  return (
    <div className="relative bg-white text-slate-900 select-none pt-32 pb-16 sm:pb-20 overflow-hidden">
      {/* Precision Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 space-y-8">
        
        {/* Compact Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-slate-100">
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-blue-600 mb-2"
            >
              <span className="w-4 h-[2px] bg-blue-600 rounded-full" />
              <span>ENGINEERING ARSENAL</span>
            </motion.div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-tight">
              Production Tech Stack & Frameworks.
            </h1>

            <p className="mt-2 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              Battle-tested tools powering our custom ERPs, websites, mobile apps, and cloud backends with 100% sovereign client code.
            </p>
          </div>

          {/* Quick Stat Pill */}
          <div className="hidden sm:flex items-center gap-3 px-3.5 py-2 rounded-2xl bg-blue-50/70 border border-blue-200/80 text-xs font-mono font-bold text-blue-800 shrink-0">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span>20 Battle-Tested Core Technologies</span>
          </div>
        </div>

        {/* Dynamic Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {categoryTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/80'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTechFilterTabPill"
                    className="absolute inset-0 bg-blue-600 rounded-xl shadow-sm shadow-blue-500/20"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <Icon className="relative z-10 h-3.5 w-3.5" />
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* High-Density Compact Grid (Fits in ~1 to 1.5 Viewport Heights) */}
        <motion.div layout className="grid gap-3.5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredTech.map((tech) => (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.22 }}
                whileHover={{ y: -3 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-4 text-left shadow-2xs hover:border-blue-400 hover:shadow-md hover:shadow-blue-500/10 transition-all duration-200"
              >
                <div className="space-y-2.5">
                  {/* Card Header Row */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <TechBadgeIcon name={tech.name} size="md" />
                      <div className="min-w-0">
                        <h3 className="text-sm font-bold text-slate-950 truncate group-hover:text-blue-600 transition-colors">
                          {tech.name}
                        </h3>
                        <span className="text-[10px] font-mono text-slate-400 block">
                          {tech.category}
                        </span>
                      </div>
                    </div>

                    <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200/80 shrink-0">
                      {tech.badge}
                    </span>
                  </div>

                  {/* Compact Description */}
                  <p className="text-[11px] text-slate-600 font-normal leading-relaxed line-clamp-2">
                    {tech.description}
                  </p>
                </div>

                {/* Footer Metric Badge */}
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono">
                  <span className="text-slate-400 font-medium">Benchmark:</span>
                  <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                    {tech.metric}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
}
