'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, ShieldCheck, Zap, Activity } from 'lucide-react';

const stats = [
  {
    value: '7+',
    unit: 'Architects',
    label: 'Senior Engineering Leads',
    subtext: 'Direct technical access with zero account manager bottlenecks.',
    badge: 'Direct Access',
    icon: Users,
    gradient: 'from-blue-600 to-indigo-600',
  },
  {
    value: '10+',
    unit: 'Systems',
    label: 'Enterprise Deployments',
    subtext: 'High-throughput platforms handling critical production traffic.',
    badge: 'Zero Downtime',
    icon: Zap,
    gradient: 'from-indigo-600 to-purple-600',
  },
  {
    value: '100%',
    unit: 'Sovereign',
    label: 'IP Codebase Ownership',
    subtext: 'Full source code, container configurations, and database rights.',
    badge: 'Complete Transfer',
    icon: ShieldCheck,
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    value: '< 24H',
    unit: 'Resolution',
    label: 'SLA Response Guarantee',
    subtext: 'Dedicated technical response and continuous reliability monitoring.',
    badge: '24/7 On-Call',
    icon: Activity,
    gradient: 'from-emerald-500 to-teal-600',
  },
];

export function HomeStats() {
  return (
    <section className="relative overflow-hidden bg-slate-50/70 text-slate-900 py-14 sm:py-16 select-none border-t border-slate-200">
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
        
        {/* Left-Aligned Compact Header */}
        <div className="flex flex-col items-start gap-4 mb-8">
          <div className="max-w-xl text-left">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-blue-600 mb-2">
              <span className="w-4 h-[2px] bg-blue-600 rounded-full" />
              <span>KEY METRICS & SCALE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-950 leading-tight">
              Enterprise Outcomes & Scale.
            </h2>
          </div>
        </div>

        {/* 4 Connected High-Precision Telemetry Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                whileHover={{ y: -5 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-7 shadow-xs hover:border-blue-500 hover:shadow-xl transition-all duration-300 text-left"
              >
                <div>
                  {/* Top Badge Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.gradient} text-white shadow-xs group-hover:scale-105 transition-transform`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200/80 px-2.5 py-0.5 text-[10px] font-bold text-blue-700 uppercase tracking-wider">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
                      {stat.badge}
                    </span>
                  </div>

                  {/* Main Value Display */}
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">
                      {stat.value}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-950 group-hover:text-blue-600 transition-colors mt-2">
                    {stat.label}
                  </h3>

                  <p className="mt-2 text-xs text-slate-500 leading-relaxed font-normal">
                    {stat.subtext}
                  </p>
                </div>

                {/* Bottom Divider Indicator */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-slate-400">
                  <span>METRIC 0{idx + 1}</span>
                  <span className="text-blue-600 uppercase font-semibold">VERIFIED</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
