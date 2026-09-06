'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Compass,
  Activity,
  Lock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { MagneticButton } from '@/components/magnetic-button';

const trustPillars = [
  {
    id: 'scope',
    wide: true,
    pillar: 'PILLAR 01',
    badge: 'Fixed Milestone Scope',
    icon: Compass,
    gradient: 'from-blue-600 to-indigo-600',
    title: 'Guaranteed Scope & Milestone Precision',
    description: 'We map every user role, database entity, and API endpoint into fixed deliverables before development begins. Zero surprise invoices, zero ambiguous estimations.',
    points: [
      'Comprehensive Technical PRD & Architecture Blueprint',
      'Fixed-price milestone billing with verified sign-off',
      'Entity relationship diagrams and OpenAPI contracts',
    ],
    metric: '< 1% Timeline Variance',
  },
  {
    id: 'transparent',
    wide: false,
    pillar: 'PILLAR 02',
    badge: 'Continuous Staging',
    icon: Activity,
    gradient: 'from-indigo-600 to-purple-600',
    title: 'Transparent Delivery & Live Sprints',
    description: 'No black-box development. Review work on private live staging environments updated continuously on every Git push.',
    points: [
      'Continuous staging previews per feature branch',
      'Bi-weekly live video sprint walkthroughs',
    ],
    metric: 'Bi-Weekly Live Demos',
  },
  {
    id: 'ownership',
    wide: false,
    pillar: 'PILLAR 03',
    badge: '100% IP Handover',
    icon: Lock,
    gradient: 'from-cyan-500 to-blue-600',
    title: '100% Full IP Ownership',
    description: 'You own 100% of the source code, Docker configs, and database schemas with complete legal transfer and zero proprietary vendor lock-in.',
    points: [
      'Full GitHub / GitLab repo transfer',
      'Containerized Docker & Kubernetes scripts',
    ],
    metric: 'Zero Vendor Lock-in',
  },
  {
    id: 'support',
    wide: true,
    pillar: 'PILLAR 04',
    badge: 'Production SLA',
    icon: ShieldCheck,
    gradient: 'from-emerald-500 to-teal-600',
    title: 'Production SLA & Direct Architect Access',
    description: 'Continuous 24/7 telemetry monitoring, automated security patching, and direct communication channels with senior engineering leads.',
    points: [
      'Direct Slack / WhatsApp channel with lead solutions architect',
      'Automated disaster recovery backups & multi-region failover',
      'Round-the-clock OpenTelemetry performance monitoring',
    ],
    metric: '99.99% Uptime Guarantee',
  },
];

export function HomeWhyChooseUs() {
  const [hoveredPillar, setHoveredPillar] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden bg-white text-slate-900 py-24 sm:py-32 select-none border-t border-slate-200">
      {/* Precision Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Left-Aligned Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-16">
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-4">
              <span className="w-5 h-[2px] bg-blue-600 rounded-full" />
              <span>THE NEXORA DIFFERENCE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 leading-[1.12]">
              Engineering With Business Thinking.
            </h2>
          </div>
          <div className="max-w-md text-left">
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              We combine enterprise-grade technical rigor with transparent communication and complete IP ownership for every client.
            </p>
          </div>
        </div>

        {/* Unique Bento Trust Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {trustPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isHovered = hoveredPillar === pillar.id;

            return (
              <motion.div
                key={pillar.id}
                onMouseEnter={() => setHoveredPillar(pillar.id)}
                onMouseLeave={() => setHoveredPillar(null)}
                whileHover={{ y: -5 }}
                className={`group relative flex flex-col justify-between rounded-3xl border bg-white p-7 sm:p-9 transition-all duration-300 ${
                  pillar.wide ? 'lg:col-span-2' : 'lg:col-span-1'
                } ${
                  isHovered
                    ? 'border-blue-500 shadow-[0_16px_36px_rgba(37,99,235,0.08)] ring-2 ring-blue-500/10'
                    : 'border-slate-200 shadow-xs hover:border-slate-300'
                }`}
              >
                <div>
                  {/* Top Badge Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${pillar.gradient} text-white shadow-xs group-hover:scale-105 transition-transform`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="rounded-lg bg-blue-50 border border-blue-200/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-700">
                        {pillar.badge}
                      </span>
                    </div>

                    <span className="text-xs font-black text-slate-400">
                      {pillar.pillar}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-950 group-hover:text-blue-600 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>

                  {/* Checklist Points */}
                  <div className="mt-6 space-y-2.5">
                    {pillar.points.map((pt, ptIdx) => (
                      <div key={ptIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Metric Bar */}
                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11px] font-bold text-slate-900">
                      {pillar.metric}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                    Guaranteed Standard
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="text-base sm:text-lg font-bold text-slate-950">
              Ready to build without technical debt or timeline surprises?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 font-normal mt-0.5">
              Every project comes with a signed Milestone Scope Guarantee and 100% source code ownership.
            </p>
          </div>

          <MagneticButton
            href="/contact"
            size="default"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3 rounded-2xl text-xs sm:text-sm shadow-md shadow-blue-500/20 shrink-0"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-4 w-4" />
          </MagneticButton>
        </div>

      </div>
    </section>
  );
}
