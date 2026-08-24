'use client';

import React from 'react';
import Link from 'next/link';
import {
  Building2,
  Sparkles,
  Layers,
  Globe,
  Smartphone,
  Cpu,
} from 'lucide-react';

const softwareDomains = [
  {
    id: 'erp',
    step: '01',
    name: 'Enterprise ERP & Operations Core',
    badge: '100% ACID • MULTI-WAREHOUSE',
    icon: Building2,
    gradient: 'from-blue-600 to-indigo-600',
    description:
      'Centralized operations platform with multi-warehouse inventory sync, double-entry financial accounting, and automated workflow approvals.',
    specs: ['PostgreSQL 16', 'Redis Queue', 'Docker', 'Prisma'],
  },
  {
    id: 'ai',
    step: '02',
    name: 'Autonomous AI & Neural Workflows',
    badge: 'PRIVATE RAG • 99.4% PRECISION',
    icon: Sparkles,
    gradient: 'from-purple-600 to-indigo-600',
    description:
      'Private enterprise RAG vector search across internal knowledge bases, autonomous task agents, and intelligent document parsing.',
    specs: ['PyTorch', 'LangChain', 'OpenAI', 'pgvector'],
  },
  {
    id: 'saas',
    step: '03',
    name: 'High-Throughput SaaS Platforms',
    badge: '25K+ REQ/S • MULTI-TENANT',
    icon: Layers,
    gradient: 'from-cyan-500 to-blue-600',
    description:
      'Multi-tenant cloud platforms with row-level security isolation, automated recurring billing, usage metering, and webhook infrastructure.',
    specs: ['Next.js 15', 'Supabase', 'Stripe', 'Kubernetes'],
  },
  {
    id: 'web',
    step: '04',
    name: 'High-Velocity Web Applications',
    badge: '< 40MS TTFB • 100 LIGHTHOUSE',
    icon: Globe,
    gradient: 'from-blue-600 to-cyan-600',
    description:
      'Sub-second edge rendered web applications and client portals with fluid 60 FPS micro-interactions and WCAG 2.1 AA accessibility.',
    specs: ['React 19', 'Next.js 15', 'TypeScript', 'Tailwind'],
  },
  {
    id: 'mobile',
    step: '05',
    name: 'Native Mobile Applications',
    badge: '60 FPS NATIVE • OFFLINE SYNC',
    icon: Smartphone,
    gradient: 'from-indigo-600 to-blue-600',
    description:
      'Cross-platform iOS and Android mobile applications with offline SQLite sync, biometric authentication, and instant push notifications.',
    specs: ['React Native', 'Swift', 'Kotlin', 'SQLite'],
  },
  {
    id: 'custom',
    step: '06',
    name: 'Bespoke Proprietary Systems',
    badge: '100% SOVEREIGN • ZERO LOCK-IN',
    icon: Cpu,
    gradient: 'from-emerald-500 to-teal-600',
    description:
      'Tailored computational engines, compliance monitors, and zero-downtime database modernizations with complete source code handover.',
    specs: ['Golang', 'Node.js', 'AWS Cloud', 'PostgreSQL'],
  },
];

export function HomeWhatWeBuild() {
  return (
    <section className="relative overflow-hidden bg-white text-slate-900 py-14 sm:py-16 select-none border-t border-slate-100">
      {/* Precision Background Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Left-Aligned Header */}
        <div className="flex flex-col items-start gap-4 mb-8">
          <div className="max-w-xl text-left">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-blue-600 mb-2">
              <span className="w-4 h-[2px] bg-blue-600 rounded-full" />
              <span>WHAT WE BUILD</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-950 leading-tight">
              Production Software Systems.
            </h2>
          </div>
        </div>

        {/* 6-Card High-Density Architecture Matrix (3 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {softwareDomains.map((domain) => {
            const Icon = domain.icon;

            return (
              <div
                key={domain.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-slate-50/50 p-6 text-left hover:border-blue-400 hover:bg-white hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  {/* Top Bar: Icon + Blueprint Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${domain.gradient} text-white shadow-xs group-hover:scale-105 transition-transform`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="rounded-md bg-blue-50/90 border border-blue-200/80 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wider text-blue-700 shadow-2xs">
                      {domain.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    SYSTEM {domain.step}
                  </div>
                  <h3 className="text-base font-bold text-slate-950 group-hover:text-blue-600 transition-colors mt-0.5 leading-snug">
                    {domain.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mt-2.5">
                    {domain.description}
                  </p>
                </div>

                {/* Bottom Bar: Production Stack Specs */}
                <div className="mt-5 pt-3.5 border-t border-slate-200/70 flex flex-wrap items-center gap-1.5">
                  {domain.specs.map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className="rounded-md bg-white border border-slate-200/90 px-2 py-0.5 text-[10px] font-bold text-slate-700 shadow-2xs group-hover:border-slate-300"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
