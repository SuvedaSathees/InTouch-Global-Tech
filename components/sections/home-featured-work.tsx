'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Globe,
  Building2,
  GraduationCap,
  Briefcase,
  Server,
  Smartphone,
  BatteryCharging,
  FlaskConical,
  UtensilsCrossed,
  Layers,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Code2,
} from 'lucide-react';
import { TechBadgeIcon } from '@/components/tech-logos';
import { MagneticButton } from '@/components/magnetic-button';

const showcaseProjects = [
  {
    id: 'junior-junction',
    slug: 'junior-junction',
    title: 'Junior Junction',
    category: 'Web Applications',
    industry: 'Education & Academy',
    icon: GraduationCap,
    accentColor: '#0284c7',
    summary: 'Interactive digital admissions pipeline, dynamic curriculum explorer, and real-time parent communication portal.',
    primaryMetric: { value: '3x Faster', label: 'Admission Turnaround' },
    secondaryMetric: { value: '99/100', label: 'Core Web Vitals' },
    features: [
      'Digital admission pipeline with instant fee calculator',
      'Interactive grade-wise curriculum & activity hub',
      'Instant SMS & WhatsApp parent announcement relay',
    ],
    tech: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
  },
  {
    id: 'magnertia-erp',
    slug: 'magnertia-erp-system',
    title: 'Magnertia ERP System',
    category: 'Enterprise ERPs',
    industry: 'Industrial & Manufacturing',
    icon: Server,
    accentColor: '#2563eb',
    summary: 'Precision manufacturing ERP unifying multi-warehouse inventory, dynamic BOM, machine scheduling, and GST billing.',
    primaryMetric: { value: '-98%', label: 'Stock Discrepancy' },
    secondaryMetric: { value: '100%', label: 'ACID Ledger Safety' },
    features: [
      'Real-time multi-warehouse inventory tracking',
      'Automated purchase orders based on re-order thresholds',
      'GST-compliant invoicing & double-entry accounting',
    ],
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Docker', 'Redis'],
  },
  {
    id: 'ev-mobile-app',
    slug: 'ev-mobile-application',
    title: 'EV Charging Network',
    category: 'Mobile Apps',
    industry: 'CleanTech & E-Mobility',
    icon: BatteryCharging,
    accentColor: '#059669',
    summary: 'Real-time EV mobile application with live charger station locator, slot reservation, and instant OCPP start/stop control.',
    primaryMetric: { value: '25,000+', label: 'Connected EV Drivers' },
    secondaryMetric: { value: '< 15s', label: 'Slot Booking Speed' },
    features: [
      'Interactive map with real-time port availability & navigation',
      'Instant QR-code scan charger unlock via IoT WebSockets',
      'Live charging telemetry (kW speed, battery %, cost estimation)',
    ],
    tech: ['React Native', 'Node.js', 'Firebase', 'Google Maps API'],
  },
  {
    id: 'vchemics',
    slug: 'vchemics-website',
    title: 'VChemics Global',
    category: 'Web Applications',
    industry: 'Chemical & Manufacturing',
    icon: FlaskConical,
    accentColor: '#0891b2',
    summary: 'Global corporate digital catalog showcasing industrial chemical specifications, technical data sheets, and B2B inquiry routing.',
    primaryMetric: { value: '450+', label: 'Catalog Products' },
    secondaryMetric: { value: '0.5s', label: 'Global Page Load' },
    features: [
      'Searchable chemical catalog with CAS registry numbers',
      'Direct MSDS & technical data sheet download system',
      'B2B export quote inquiry engine with WhatsApp relay',
    ],
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
  },
  {
    id: 'royal-suvai',
    slug: 'royal-suvai-restaurant-website',
    title: 'Royal Suvai Restaurant',
    category: 'Web Applications',
    industry: 'Hospitality & Dining',
    icon: UtensilsCrossed,
    accentColor: '#d97706',
    summary: 'Mouth-watering digital dining portal with interactive chef specials, table reservation engine, and direct WhatsApp takeaway ordering.',
    primaryMetric: { value: '+65%', label: 'Online Table Bookings' },
    secondaryMetric: { value: '100%', label: 'Mobile Optimized' },
    features: [
      'Visual digital menu with allergen filters & spice meters',
      'Instant table reservation system with SMS confirmation',
      'Direct WhatsApp takeaway ordering funnel with zero commissions',
    ],
    tech: ['React', 'Next.js', 'Tailwind CSS', 'WhatsApp Cloud API'],
  },
  {
    id: 'rpc-erp',
    slug: 'rpc-erp-system',
    title: 'RPC Enterprise ERP',
    category: 'Enterprise ERPs',
    industry: 'Corporate Operations',
    isLive: false,
    icon: Building2,
    accentColor: '#4f46e5',
    summary: 'Complete organizational ERP covering HRMS attendance, biometric sync, automated payroll, and multi-tier department approvals.',
    primaryMetric: { value: '-80%', label: 'Payroll Processing Time' },
    secondaryMetric: { value: 'Zero', label: 'Manual Calculation Errors' },
    features: [
      'Automated biometric attendance sync with overtime rules',
      'One-click statutory PF, ESI, & TDS salary slip generator',
      'Tiered management leave approval workflows with audit logs',
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Express.js'],
  },
];

const categories = ['All Systems', 'Web Applications', 'Enterprise ERPs', 'Mobile Apps'];

export function HomeFeaturedWork() {
  const [activeTab, setActiveTab] = useState<string>('All Systems');

  const filtered = showcaseProjects.filter((p) => {
    if (activeTab === 'All Systems') return true;
    return p.category === activeTab;
  });

  return (
    <section className="relative py-20 sm:py-28 bg-[#F8FAFC] border-t border-slate-200/80 text-slate-900 select-none overflow-hidden">
      {/* Precision Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #001B48 1px, transparent 1px), linear-gradient(to bottom, #001B48 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Atmospheric Soft Light Blooms */}
      <div className="absolute top-10 right-1/4 w-[500px] h-[300px] rounded-full bg-blue-400/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[300px] rounded-full bg-cyan-400/10 blur-[130px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
              <span className="w-5 h-[2px] bg-blue-600 rounded-full" />
              <span>PROVEN CLIENT WORK • PRODUCTION DELIVERIES</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 leading-tight">
              Real Projects.{' '}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
                Measurable Impact.
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-xl">
              From high-concurrency custom ERPs to interactive web portals, every system is engineered for measurable business performance with 100% sovereign client IP.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs self-start md:self-auto">
            {categories.map((cat) => {
              const isActive = activeTab === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer select-none ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeHomeProjectTab"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl shadow-xs"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3-Column Luxury Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <AnimatePresence mode="popLayout">
            {filtered.map((proj) => {
              const PIcon = proj.icon;

              return (
                <motion.div
                  key={proj.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5 }}
                  className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-blue-400/90 transition-all flex flex-col justify-between space-y-5 text-left group cursor-pointer"
                >
                  <div className="space-y-4">
                    {/* Top Status & Industry Bar */}
                    <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600">
                        {proj.industry}
                      </span>

                      <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200/80 text-[10px] font-bold text-blue-700 shadow-2xs">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                        <span>PRODUCTION BUILD</span>
                      </div>
                    </div>

                    {/* Title & Icon */}
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-black text-slate-950 group-hover:text-blue-600 transition-colors leading-tight">
                          {proj.title}
                        </h3>
                        <span className="text-xs font-semibold text-slate-600 block mt-0.5">
                          {proj.category}
                        </span>
                      </div>

                      <div
                        className="h-11 w-11 rounded-2xl flex items-center justify-center border shadow-2xs group-hover:scale-105 transition-transform shrink-0"
                        style={{
                          backgroundColor: `${proj.accentColor}12`,
                          borderColor: `${proj.accentColor}30`,
                          color: proj.accentColor,
                        }}
                      >
                        <PIcon className="h-5 w-5" />
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-3">
                      {proj.summary}
                    </p>

                    {/* Prominent ROI Metric Pill */}
                    <div className="p-3.5 rounded-2xl bg-gradient-to-r from-blue-50/80 to-cyan-50/50 border border-blue-100 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-600 block font-semibold">
                          {proj.primaryMetric.label}
                        </span>
                        <span className="text-xl font-black text-blue-700 font-mono">
                          {proj.primaryMetric.value}
                        </span>
                      </div>
                      <div className="text-right border-l border-blue-200/60 pl-3">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-600 block font-semibold">
                          {proj.secondaryMetric.label}
                        </span>
                        <span className="text-sm font-black text-slate-900 font-mono">
                          {proj.secondaryMetric.value}
                        </span>
                      </div>
                    </div>

                    {/* Delivered Capabilities */}
                    <div className="space-y-1.5 pt-1">
                      {proj.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 font-semibold">
                          <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack & Actions */}
                  <div className="space-y-4 pt-3 border-t border-slate-100">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tech.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-slate-100/90 hover:bg-white border border-slate-200 text-[10px] font-mono font-semibold text-slate-700 transition-colors"
                        >
                          <TechBadgeIcon name={t} size="sm" />
                          <span>{t}</span>
                        </span>
                      ))}
                    </div>

                    <div className="pt-1">
                      <Link
                        href="/projects"
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-blue-600 text-slate-800 hover:text-white border border-slate-200/90 text-xs font-bold transition-all shadow-2xs group/btn"
                      >
                        <span>Explore Architecture & Specs</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Explorer Action */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-600/20 hover:shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            <span>Explore All Production Blueprints & Source Specs</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
