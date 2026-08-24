'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2,
  Users2,
  Globe,
  Smartphone,
  Sparkles,
  Bot,
  Layers,
  Palette,
  Server,
  Cloud,
  ArrowRight,
  CheckCircle2,
  Code2,
} from 'lucide-react';
import { services } from '@/lib/site-config';

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Users2,
  Globe,
  Smartphone,
  Sparkles,
  Bot,
  Layers,
  Palette,
  Server,
  Cloud,
};

const categoryFilters = [
  'All Capabilities',
  'Enterprise ERP & CRM',
  'Web & Mobile Platforms',
  'AI & Automation',
  'Cloud & Backend',
];

export function InteractiveServicesStudio() {
  const [activeFilter, setActiveFilter] = useState('All Capabilities');

  const filteredServices = services.filter((service) => {
    if (activeFilter === 'All Capabilities') return true;
    if (activeFilter === 'Enterprise ERP & CRM')
      return ['erp-development', 'crm-development', 'custom-software'].includes(service.slug);
    if (activeFilter === 'Web & Mobile Platforms')
      return ['website-development', 'mobile-app-development', 'ui-ux-design'].includes(service.slug);
    if (activeFilter === 'AI & Automation')
      return ['ai-integration', 'business-automation'].includes(service.slug);
    if (activeFilter === 'Cloud & Backend')
      return ['api-backend-development', 'cloud-deployment'].includes(service.slug);
    return true;
  });

  return (
    <section className="relative overflow-hidden bg-white text-slate-900 pt-28 pb-20 select-none">
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
        
        {/* SECTION HEADER (Left Aligned with Line Accent) */}
        <div className="max-w-4xl text-left mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-blue-600 mb-3"
          >
            <span className="w-4 h-[2px] bg-blue-600 rounded-full" />
            <span>OUR CAPABILITIES</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 leading-[1.08]"
          >
            Everything You Need to Build, Modernize, and Scale.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl"
          >
            From enterprise resource planning to mobile applications and AI automation — we engineer the full spectrum of custom software systems.
          </motion.p>
        </div>

        {/* INTERACTIVE CATEGORY FILTER TRACK (Sliding Magnetic Indicator) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-100">
          {categoryFilters.map((category) => {
            const isActive = activeFilter === category;

            return (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`relative px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-blue-600 rounded-xl shadow-md shadow-blue-500/20"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            );
          })}
        </div>

        {/* SERVICES ANIMATED MATRIX */}
        <motion.div layout className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mb-16">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => {
              const Icon = iconMap[service.icon] || Code2;

              return (
                <motion.div
                  key={service.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.94, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: -10 }}
                  transition={{ duration: 0.28 }}
                  whileHover={{ y: -5 }}
                  className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 text-left shadow-xs hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
                >
                  {/* Subtle Corner Spotlight */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div>
                    {/* Top Icon & Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 shadow-2xs group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
                        <Icon className="h-5 w-5" />
                      </div>

                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-blue-50/80 border border-blue-200/70 text-blue-700 uppercase tracking-wider shadow-2xs">
                        {service.badge || 'Enterprise Grade'}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-lg font-bold text-slate-950 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                      {service.short}
                    </p>

                    {/* Feature Modules */}
                    <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                      {service.features.slice(0, 4).map((feat, fIdx) => (
                        <div
                          key={feat}
                          className="flex items-center gap-2 text-xs text-slate-700 font-medium group-hover:translate-x-0.5 transition-transform"
                          style={{ transitionDelay: `${fIdx * 30}ms` }}
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Link */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    {service.hasPage ? (
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 group/link"
                      >
                        <span>Explore Specification</span>
                        <ArrowRight className="h-3.5 w-3.5 transform group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    ) : (
                      <span className="text-xs font-bold text-slate-400">
                        Modular Custom Architecture
                      </span>
                    )}

                    <span className="text-[10px] font-mono font-bold text-emerald-600 flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Ready
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
