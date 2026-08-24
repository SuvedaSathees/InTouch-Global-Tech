'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  TrendingDown,
  TrendingUp,
  Layers,
  Zap,
} from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { MagneticButton } from '@/components/magnetic-button';

const comparisons = [
  {
    title: 'Data & State Architecture',
    legacy: {
      tag: 'Fragmented Silos',
      points: [
        'Scattered Excel spreadsheets and disparate legacy databases',
        'Duplicate entries, manual reconciliation errors & missing audit logs',
        'Batch sync delays of 12-24 hours across departments',
      ],
      score: 'High Failure Risk',
    },
    modern: {
      tag: 'Unified Realtime Engine',
      points: [
        'Single source of truth with PostgreSQL + distributed Redis caching',
        'Automated conflict resolution with event-driven sync streams',
        'Sub-millisecond data availability across all facilities worldwide',
      ],
      score: '99.999% Data Integrity',
    },
  },
  {
    title: 'User Experience & Workflow Velocity',
    legacy: {
      tag: 'Slow & Clunky',
      points: [
        'Multi-step repetitive forms with high cognitive load',
        'Slow page loads (>4.5s) causing team frustration and drop-off',
        'Incompatible with mobile tablets and modern browser standards',
      ],
      score: 'Low User Adoption',
    },
    modern: {
      tag: 'Instantaneous & Ergonomic',
      points: [
        'Tailored keyboard shortcuts, optimistic UI, and instant feedback',
        'Sub-300ms edge response times with Next.js Server Components',
        'Fully responsive touch workflows for field reps and floor managers',
      ],
      score: '95+ NPS & Rapid Adoption',
    },
  },
  {
    title: 'Operational Cost & Vendor Lock-In',
    legacy: {
      tag: 'Expensive SaaS Sprawl',
      points: [
        'Exponential per-seat monthly subscription licensing fees',
        'Zero IP ownership — locked into proprietary vendor ecosystems',
        'Custom feature requests delayed by 12+ months or rejected',
      ],
      score: '$120k+ Annual Waste',
    },
    modern: {
      tag: '100% Owned Asset',
      points: [
        'Zero per-seat licensing — scale to unlimited employees for free',
        '100% intellectual property, git repository & database schema ownership',
        'Rapid agile feature expansion controlled strictly by your roadmap',
      ],
      score: '70% Cost Reduction',
    },
  },
];

export function LegacyVsModern() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-slate-50/70 border-t border-slate-200">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="The Transformation Impact"
          title="Legacy Bottlenecks vs. Nexora Modern Core"
          description="See how replacing fragmented legacy systems with purpose-built software transforms your daily operational velocity."
        />

        {/* Tab Selector */}
        <div className="mt-14 flex flex-wrap justify-center gap-2">
          {comparisons.map((comp, idx) => (
            <button
              key={comp.title}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeTab === idx
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              {comp.title}
            </button>
          ))}
        </div>

        {/* Comparison Side-by-Side Cards */}
        <div className="mt-10 max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6 md:grid-cols-2"
            >
              {/* Legacy Column */}
              <div className="rounded-3xl border border-rose-200 bg-rose-50/30 p-8 shadow-sm relative overflow-hidden">
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-100 border border-rose-200 px-3 py-1 text-xs font-mono font-bold text-rose-700">
                    <AlertTriangle className="h-3.5 w-3.5" />
                    {comparisons[activeTab].legacy.tag}
                  </span>
                  <span className="text-xs font-mono font-bold text-rose-600 flex items-center gap-1">
                    <TrendingDown className="h-3.5 w-3.5" />
                    {comparisons[activeTab].legacy.score}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-slate-900 mb-4">The Legacy State</h4>
                <div className="space-y-3">
                  {comparisons[activeTab].legacy.points.map((pt) => (
                    <div key={pt} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modern Column */}
              <div className="rounded-3xl border-2 border-blue-600 bg-white p-8 shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-mono font-bold text-blue-700">
                    <Zap className="h-3.5 w-3.5" />
                    {comparisons[activeTab].modern.tag}
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-600 flex items-center gap-1">
                    <TrendingUp className="h-3.5 w-3.5" />
                    {comparisons[activeTab].modern.score}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-slate-900 mb-4">The Nexora Platform</h4>
                <div className="space-y-3">
                  {comparisons[activeTab].modern.points.map((pt) => (
                    <div key={pt} className="flex items-start gap-2.5 text-xs text-slate-800 leading-relaxed font-medium">
                      <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Modernization Scoping Banner */}
        <div className="mt-14 text-center">
          <MagneticButton href="/contact" size="lg" className="bg-blue-600 text-white hover:bg-blue-700 shadow-md">
            Modernize Your Legacy Stack
            <ArrowRight className="ml-2 h-4 w-4" />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
