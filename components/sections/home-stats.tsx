'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, ShieldCheck, Zap, Activity } from 'lucide-react';

const stats = [
  {
    value: '7+',
    unit: 'Architects',
    label: 'Senior Engineering Leads',
    mobileLabel: 'Senior Eng. Leads',
    subtext: 'Direct technical access with zero account manager bottlenecks.',
    badge: 'Direct Access',
    icon: Users,
    gradient: 'from-blue-600 to-indigo-600',
  },
  {
    value: '10+',
    unit: 'Systems',
    label: 'Enterprise Deployments',
    mobileLabel: 'Enterprise Deployments',
    subtext: 'High-throughput platforms handling critical production traffic.',
    badge: 'Zero Downtime',
    icon: Zap,
    gradient: 'from-indigo-600 to-purple-600',
  },
  {
    value: '100%',
    unit: 'Guaranteed',
    label: 'IP Codebase Ownership',
    mobileLabel: 'IP Codebase Ownership',
    subtext: 'Full source code, container configurations, and database rights.',
    badge: 'Complete Transfer',
    icon: ShieldCheck,
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    value: '< 24H',
    unit: 'Resolution',
    label: 'SLA Response Guarantee',
    mobileLabel: 'SLA Response Guarantee',
    subtext: 'Dedicated technical response and continuous reliability monitoring.',
    badge: '24/7 On-Call',
    icon: Activity,
    gradient: 'from-emerald-500 to-teal-600',
  },
];

export function HomeStats() {
  return (
    <section className="relative overflow-hidden bg-slate-50/90 text-slate-900 py-14 sm:py-16 select-none border-t border-slate-200/80">
      {/* Precision Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #001B48 1px, transparent 1px), linear-gradient(to bottom, #001B48 1px, transparent 1px)',
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

        {/* 4 Connected Telemetry Cards (2x2 Grid on Mobile, 4 Columns on Desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 min-[380px]:gap-3.5 sm:gap-6 py-1">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                whileHover={{ y: -5 }}
                className="group relative w-full flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-3 sm:p-7 shadow-xs hover:border-blue-500 hover:shadow-xl hover:shadow-blue-600/10 transition-all duration-300 text-left overflow-hidden"
              >
                <div className="space-y-1.5 sm:space-y-2">
                  {/* Top Badge Row */}
                  <div className="flex items-center justify-between gap-1 mb-2 sm:mb-6">
                    <div
                      className={`flex h-7 w-7 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br ${stat.gradient} text-white shadow-xs group-hover:scale-105 transition-transform shrink-0`}
                    >
                      <Icon className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
                    </div>

                    <span className="hidden min-[380px]:inline-flex items-center gap-1 sm:gap-1.5 rounded-full bg-blue-50 border border-blue-200/80 px-1.5 py-0.5 sm:px-2.5 sm:py-0.5 text-[8px] sm:text-[10px] font-bold text-blue-700 uppercase tracking-wider truncate max-w-[90px] sm:max-w-none">
                      <span className="h-1 sm:h-1.5 w-1 sm:w-1.5 rounded-full bg-cyan-500 animate-pulse shrink-0" />
                      <span className="truncate">{stat.badge}</span>
                    </span>
                  </div>

                  {/* Main Value Display */}
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-5xl font-black text-slate-950 tracking-tight group-hover:text-blue-600 transition-colors">
                      {stat.value}
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-base font-bold text-slate-950 group-hover:text-blue-600 transition-colors leading-snug sm:leading-normal line-clamp-2">
                    {stat.label}
                  </h3>

                  <p className="hidden sm:block mt-2 text-xs text-slate-500 leading-relaxed font-normal">
                    {stat.subtext}
                  </p>
                </div>

                {/* Bottom Divider Indicator */}
                <div className="mt-2.5 sm:mt-6 pt-2 sm:pt-4 border-t border-slate-100 flex items-center justify-between text-[8.5px] sm:text-[10px] font-bold text-slate-400">
                  <span className="truncate">METRIC 0{idx + 1}</span>
                  <span className="text-blue-600 uppercase font-semibold shrink-0">VERIFIED</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
