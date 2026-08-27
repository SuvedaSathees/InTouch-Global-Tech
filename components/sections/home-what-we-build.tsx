'use client';

import React from 'react';
import Link from 'next/link';
import {
  Building2,
  Sparkles,
  Layers,
  Globe,
  Activity,
  Search,
  Users2,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Receipt,
  MessageSquare,
} from 'lucide-react';

const softwareDomains = [
  {
    id: 'web',
    step: '01',
    name: 'Static & Dynamic Web Applications',
    badge: 'STATIC & DYNAMIC • 100 LIGHTHOUSE',
    icon: Globe,
    gradient: 'from-blue-600 to-cyan-600',
    description:
      'Responsive, sub-second edge-rendered corporate websites, e-commerce stores, custom CMS, and web applications built for growing businesses worldwide.',
    specs: ['Next.js', 'React', 'Tailwind CSS', 'WordPress CMS'],
    href: '/services/web-development',
  },
  {
    id: 'erp',
    step: '02',
    name: 'Custom ERP & Operations Platforms',
    badge: 'MULTI-WAREHOUSE • GST READY',
    icon: Building2,
    gradient: 'from-indigo-600 to-blue-700',
    description:
      'Centralized operations platform with multi-warehouse inventory, double-entry financial ledgers, vendor purchasing, and automated manufacturing workflows.',
    specs: ['PostgreSQL', 'Node.js', 'Docker', 'Redis'],
    href: '/services/erp-development',
  },
  {
    id: 'hrms',
    step: '03',
    name: 'HRMS Application & Payroll Engine',
    badge: 'BIOMETRIC SYNC • STATUTORY PF/ESI',
    icon: Users2,
    gradient: 'from-purple-600 to-indigo-600',
    description:
      'End-to-end workforce management with biometric attendance capture, automatic salary calculation, tax deductions, shift rostering, and employee portals.',
    specs: ['React', 'NestJS', 'PostgreSQL', 'Mobile App'],
    href: '/services/hrms-application',
  },
  {
    id: 'crm-pos',
    step: '04',
    name: 'CRM & High-Speed GST Billing Software',
    badge: 'LEAD PIPELINES • FAST POS',
    icon: Receipt,
    gradient: 'from-emerald-600 to-teal-600',
    description:
      'Omnichannel lead management, automated sales follow-up reminders, thermal receipt printing, barcode scanning, and instant GST invoices.',
    specs: ['Node.js', 'SQLite / Cloud', 'Thermal Print API'],
    href: '/services/crm-application',
  },
  {
    id: 'hms',
    step: '05',
    name: 'Hospital & Pharmacy Management (HMS)',
    badge: 'OPD / IPD • BATCH EXPIRY ALERTS',
    icon: Activity,
    gradient: 'from-blue-600 to-indigo-600',
    description:
      'Full-featured clinic & hospital software for OPD/IPD patient registration, doctor appointments, EMR, lab reports, and pharmacy batch expiry registers.',
    specs: ['PostgreSQL', 'Next.js', 'HL7/EMR Safe'],
    href: '/services/hospital-management-system',
  },
  {
    id: 'seo-gateway',
    step: '06',
    name: 'SEO, SEM & WhatsApp / SMS Gateways',
    badge: 'TOP RANKINGS • TRAI / DLT APPROVED',
    icon: Search,
    gradient: 'from-cyan-500 to-blue-600',
    description:
      'Performance-focused SEO driving organic Google search visibility, high-ROI Google Ads campaigns, official WhatsApp Business API, and high-speed OTP SMS.',
    specs: ['Technical SEO', 'Google Ads', 'WhatsApp API', 'SMS Gateway'],
    href: '/services/seo-search-engine-optimization',
  },
];

export function HomeWhatWeBuild() {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] text-slate-900 py-14 sm:py-16 select-none border-t border-[#E8DFD1]">
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
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-amber-800 mb-2">
              <span className="w-4 h-[2px] bg-amber-700 rounded-full" />
              <span>WHAT WE BUILD & DELIVER</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-950 leading-tight">
              Production Web & Software Systems.
            </h2>
          </div>
        </div>

        {/* 6-Card High-Density Architecture Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {softwareDomains.map((domain) => {
            const Icon = domain.icon;

            return (
              <div
                key={domain.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-[#E8DFD1] bg-white/80 p-6 text-left hover:border-amber-500 hover:bg-white hover:shadow-lg hover:shadow-amber-700/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  {/* Top Bar: Icon + Blueprint Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${domain.gradient} text-white shadow-xs group-hover:scale-105 transition-transform`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="rounded-md bg-amber-50/90 border border-amber-200/80 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wider text-amber-800 shadow-2xs">
                      {domain.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    SYSTEM {domain.step}
                  </div>
                  <h3 className="text-base font-bold text-slate-950 group-hover:text-amber-800 transition-colors mt-0.5 leading-snug">
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
                      className="rounded-md bg-white border border-[#E8DFD1] px-2 py-0.5 text-[10px] font-bold text-slate-700 shadow-2xs"
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
