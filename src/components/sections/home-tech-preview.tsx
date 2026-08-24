'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Monitor,
  Server,
  Database,
  Cpu,
  Cloud,
  ArrowRight,
} from 'lucide-react';

const techLayers = [
  {
    id: 'frontend',
    step: '01',
    name: 'Frontend & Edge',
    icon: Monitor,
    badge: '< 40ms TTFB',
    color: 'from-blue-600 to-indigo-600',
    lightBg: 'bg-blue-50/60',
    summary: 'Sub-second rendering with Next.js 15 Server Components and fluid 60 FPS animations.',
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    metric: '100 / 100 Lighthouse',
  },
  {
    id: 'backend',
    step: '02',
    name: 'API & Microservices',
    icon: Server,
    badge: '25k+ req/s',
    color: 'from-indigo-600 to-purple-600',
    lightBg: 'bg-indigo-50/60',
    summary: 'High-throughput Go and Node.js microservices with strict OpenAPI 3.0 type contracts.',
    stack: ['Node.js', 'Go (Golang)', 'FastAPI', 'GraphQL', 'REST OpenAPI'],
    metric: '< 10ms P99 Latency',
  },
  {
    id: 'database',
    step: '03',
    name: 'Database & Cache',
    icon: Database,
    badge: 'Strict ACID',
    color: 'from-cyan-500 to-blue-600',
    lightBg: 'bg-cyan-50/60',
    summary: 'Relational data integrity with sub-millisecond Redis caching and automated failover.',
    stack: ['PostgreSQL 16', 'Redis Stack', 'Prisma ORM', 'MongoDB', 'Supabase'],
    metric: '< 1ms Redis Hit',
  },
  {
    id: 'ai',
    step: '04',
    name: 'AI & Neural Agents',
    icon: Cpu,
    badge: 'Autonomous AI',
    color: 'from-emerald-500 to-teal-600',
    lightBg: 'bg-emerald-50/60',
    summary: 'Private RAG knowledge retrieval and autonomous neural workflow pipelines.',
    stack: ['PyTorch', 'LangChain', 'Pinecone', 'OpenAI', 'pgvector'],
    metric: '99.4% Precision',
  },
  {
    id: 'cloud',
    step: '05',
    name: 'Cloud Sovereignty',
    icon: Cloud,
    badge: '100% Owned',
    color: 'from-blue-600 to-cyan-600',
    lightBg: 'bg-blue-50/60',
    summary: 'Immutable Docker container clusters deployed directly to your private cloud infrastructure.',
    stack: ['Docker', 'Kubernetes', 'AWS / GCP', 'Cloudflare', 'GitHub Actions'],
    metric: '99.99% Uptime SLA',
  },
];

export function HomeTechPreview() {
  const [activeId, setActiveId] = useState('frontend');
  const activeLayer = techLayers.find((l) => l.id === activeId) || techLayers[0];

  return (
    <section className="relative overflow-hidden bg-slate-50/60 text-slate-900 py-14 sm:py-16 select-none border-t border-slate-200">
      {/* Precision Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Compact Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="max-w-xl text-left">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-blue-600 mb-2">
              <span className="w-4 h-[2px] bg-blue-600 rounded-full" />
              <span>PRODUCTION TECH STACK</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-950 leading-tight">
              Architected for Speed & Sovereignty.
            </h2>
          </div>
          <div className="max-w-sm text-left">
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              Every layer is chosen for strict type safety, sub-millisecond throughput, and zero vendor lock-in.
            </p>
          </div>
        </div>

        {/* 5-Column Compact Interactive Architecture Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mb-6">
          {techLayers.map((layer) => {
            const isSelected = activeId === layer.id;
            const Icon = layer.icon;

            return (
              <div
                key={layer.id}
                onClick={() => setActiveId(layer.id)}
                className={`group relative flex flex-col justify-between rounded-2xl border p-4 text-left cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? 'border-blue-600 bg-white shadow-md shadow-blue-500/10 ring-2 ring-blue-500/20 scale-[1.02]'
                    : 'border-slate-200 bg-white/80 hover:border-slate-300 hover:bg-white'
                }`}
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-200 ${
                        isSelected
                          ? `bg-gradient-to-br ${layer.color} text-white shadow-2xs`
                          : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>

                    <span
                      className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md ${
                        isSelected ? 'bg-blue-50 text-blue-700 font-extrabold' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {layer.badge}
                    </span>
                  </div>

                  <div className="text-[9px] font-bold text-slate-400 uppercase">
                    LAYER {layer.step}
                  </div>
                  <h3
                    className={`text-sm font-bold leading-tight mt-0.5 ${
                      isSelected ? 'text-blue-900' : 'text-slate-900 group-hover:text-blue-600'
                    }`}
                  >
                    {layer.name}
                  </h3>
                </div>

                {/* Metric Bottom Indicator */}
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px]">
                  <span className="font-bold text-slate-600">{layer.metric}</span>
                  {isSelected && (
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Ultra-Pro Compact Active Layer Console */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLayer.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs text-left"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              
              {/* Left Details */}
              <div className="max-w-xl">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-black uppercase tracking-wider text-blue-600">
                    LAYER {activeLayer.step} • {activeLayer.name}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-[10px] font-bold text-emerald-600">
                    ● {activeLayer.badge} Verified
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  {activeLayer.summary}
                </p>
              </div>

              {/* Right Stack Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {activeLayer.stack.map((t, idx) => (
                  <span
                    key={idx}
                    className="rounded-lg border border-slate-200 bg-slate-50/90 px-3 py-1.5 text-xs font-bold text-slate-800 shadow-2xs hover:border-blue-300 hover:text-blue-700 transition-colors"
                  >
                    {t}
                  </span>
                ))}

                <Link
                  href="/technologies"
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 ml-2 group/link shrink-0"
                >
                  <span>All Specs</span>
                  <ArrowRight className="h-3 w-3 group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
