'use client';

import React, { useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import {
  Building2,
  Sparkles,
  Layers,
  Globe,
  Activity,
  Search,
  Users2,
  ShieldCheck,
  CheckCircle2,
  Receipt,
  MessageSquare,
  Zap,
  Code2,
  Cpu,
  Server,
  Lock,
} from 'lucide-react';
import { TechBadgeIcon } from '@/components/tech-logos';

const softwareDomains = [
  {
    id: 'web',
    step: '01',
    name: 'Static & Dynamic Web Applications',
    badge: '100% LIGHTHOUSE • SUB-SECOND TTFB',
    icon: Globe,
    accent: '#0284c7',
    glowColor: 'rgba(2, 132, 199, 0.25)',
    gradient: 'from-blue-600 via-cyan-500 to-sky-500',
    description:
      'Responsive, sub-second edge-rendered corporate websites, e-commerce storefronts, custom CMS, and high-conversion web applications.',
    features: [
      'Edge-Rendered Next.js SSR & React 19',
      'Ultra-Fast E-Commerce & Custom CMS',
      'Mobile-First 100/100 Core Web Vitals',
    ],
    specs: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
  },
  {
    id: 'erp',
    step: '02',
    name: 'Custom ERP & Operations Platforms',
    badge: 'MULTI-WAREHOUSE • GST & ACID LEDGER',
    icon: Building2,
    accent: '#2563eb',
    glowColor: 'rgba(37, 99, 235, 0.25)',
    gradient: 'from-indigo-600 via-blue-600 to-cyan-500',
    description:
      'Centralized operations platform with multi-warehouse inventory, double-entry financial ledgers, vendor purchasing, and automated workflows.',
    features: [
      'Real-Time Multi-Warehouse Stock Sync',
      'Automated BOM & Manufacturing Tracking',
      'Zero-Loss PostgreSQL Transaction ACID Ledger',
    ],
    specs: ['PostgreSQL', 'Node.js', 'Docker', 'Redis'],
  },
  {
    id: 'hrms',
    step: '03',
    name: 'HRMS Application & Payroll Engine',
    badge: 'BIOMETRIC IOT • STATUTORY PF/ESI',
    icon: Users2,
    accent: '#7c3aed',
    glowColor: 'rgba(124, 58, 237, 0.25)',
    gradient: 'from-purple-600 via-indigo-600 to-pink-500',
    description:
      'End-to-end workforce management with biometric attendance capture, automatic salary calculation, tax deductions, and employee self-service portals.',
    features: [
      'Hardware Biometric Attendance Sync',
      '1-Click Automated Salary & Payslip Generation',
      'Employee Self-Service Mobile Portal',
    ],
    specs: ['React', 'NestJS', 'PostgreSQL', 'Node.js'],
  },
  {
    id: 'crm-pos',
    step: '04',
    name: 'CRM & High-Speed GST Billing Software',
    badge: 'OMNICHANNEL • THERMAL RECEIPT API',
    icon: Receipt,
    accent: '#059669',
    glowColor: 'rgba(5, 150, 105, 0.25)',
    gradient: 'from-emerald-600 via-teal-500 to-cyan-600',
    description:
      'Omnichannel lead management, automated sales follow-ups, thermal receipt printing, barcode scanning, and instant WhatsApp GST invoices.',
    features: [
      'Visual Deal Pipeline with Automation Rules',
      'High-Speed Thermal POS & Barcode Scanner',
      'Instant WhatsApp Invoice & GST Dispatcher',
    ],
    specs: ['Node.js', 'React', 'FastAPI', 'SQLite / Cloud'],
  },
  {
    id: 'hms',
    step: '05',
    name: 'Hospital & Pharmacy Management (HMS)',
    badge: 'OPD / IPD • BATCH EXPIRY & EMR',
    icon: Activity,
    accent: '#0891b2',
    glowColor: 'rgba(8, 145, 178, 0.25)',
    gradient: 'from-cyan-600 via-teal-600 to-emerald-600',
    description:
      'Full-featured clinic & hospital software for OPD/IPD patient registration, doctor appointments, EMR, lab reports, and pharmacy batch registers.',
    features: [
      'OPD/IPD Registration & Doctor Token Display',
      'Digital EMR & Pathology Lab Test Dispatch',
      'Pharmacy Inventory with Expiry Alerts',
    ],
    specs: ['PostgreSQL', 'Next.js', 'Node.js', 'Docker'],
  },
  {
    id: 'seo-gateway',
    step: '06',
    name: 'API, SMS & WhatsApp / ERP Gateways',
    badge: 'DLT APPROVED • 99.99% UPTIME',
    icon: MessageSquare,
    accent: '#0284c7',
    glowColor: 'rgba(2, 132, 199, 0.25)',
    gradient: 'from-sky-500 via-blue-600 to-indigo-600',
    description:
      'Official WhatsApp Business API integration, high-throughput transactional OTP SMS gateways, and secure custom ERP RESTful APIs.',
    features: [
      'Official Meta WhatsApp Cloud API Integration',
      'DLT High-Speed OTP SMS Broadcast Delivery',
      'Secure High-Concurrency REST & Webhook APIs',
    ],
    specs: ['WhatsApp API', 'SMS Gateway', 'REST API', 'Webhooks'],
  },
];

function AttractiveDomainCard({
  domain,
  index,
}: {
  domain: (typeof softwareDomains)[0];
  index: number;
}) {
  const Icon = domain.icon;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, scale: 1.015 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 text-left shadow-xs hover:shadow-2xl hover:border-blue-400/90 transition-all duration-300 overflow-hidden"
      style={{
        boxShadow: isHovered
          ? `0 24px 50px -12px ${domain.glowColor}, 0 0 0 1px ${domain.accent}40`
          : '0 4px 20px -4px rgba(0, 0, 0, 0.03)',
      }}
    >
      {/* Top Ambient Colored Glow on Hover */}
      <div
        className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none transition-opacity duration-500"
        style={{
          backgroundColor: domain.glowColor,
          opacity: isHovered ? 0.75 : 0.15,
        }}
      />

      {/* Top Accent Gradient Line */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${domain.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />

      <div className="relative z-10 space-y-5">
        {/* Header: Icon + Badge + Step Number */}
        <div className="flex items-center justify-between gap-3">
          <motion.div
            whileHover={{ scale: 1.12, rotate: 6 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            className={`flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br ${domain.gradient} text-white shadow-lg p-3 shrink-0`}
            style={{
              boxShadow: `0 8px 20px -4px ${domain.glowColor}`,
            }}
          >
            <Icon className="h-6 w-6 drop-shadow-md" />
          </motion.div>

          <div className="flex flex-col items-end">
            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">
              SYSTEM {domain.step}
            </span>
            <span
              className="px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-wider border shadow-2xs transition-colors"
              style={{
                backgroundColor: `${domain.accent}12`,
                borderColor: `${domain.accent}30`,
                color: domain.accent,
              }}
            >
              {domain.badge}
            </span>
          </div>
        </div>

        {/* Title & Description */}
        <div>
          <h3 className="text-lg sm:text-xl font-black text-slate-950 group-hover:text-blue-600 transition-colors leading-snug">
            {domain.name}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mt-2.5">
            {domain.description}
          </p>
        </div>

        {/* Feature Checkpoints */}
        <div className="space-y-2 pt-2 border-t border-slate-100">
          {domain.features.map((feat, fIdx) => (
            <div key={fIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ backgroundColor: domain.accent }}
              />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar: Tech Specs */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3 relative z-10">
        <div className="flex flex-wrap items-center gap-1.5">
          {domain.specs.map((spec, sIdx) => (
            <span
              key={sIdx}
              className="inline-flex items-center gap-1 rounded-lg bg-slate-50 border border-slate-200 px-2 py-0.5 text-[10px] font-semibold text-slate-700 shadow-2xs group-hover:border-blue-300 group-hover:bg-blue-50/50 transition-all"
            >
              <TechBadgeIcon name={spec} size="sm" />
              <span>{spec}</span>
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function HomeWhatWeBuild() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] text-slate-900 py-20 sm:py-28 select-none border-t border-slate-200/80">
      {/* Precision Background Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #001B48 1px, transparent 1px), linear-gradient(to bottom, #001B48 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      {/* Floating Ambient Glow Orbs */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 w-full text-left">
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600"
            >
              <span className="w-5 h-[2px] bg-blue-600 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
              <span>WHAT WE BUILD & DELIVER</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-tight"
            >
              <span className="block">Production Web &</span>
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
                Software Systems.
              </span>
            </motion.h2>
          </div>

          <div className="shrink-0 md:max-w-md">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal"
            >
              100% complete client code ownership, modern cloud<br className="hidden sm:inline" />{' '}
              microservices, and mission-critical reliability engineered for<br className="hidden sm:inline" />{' '}
              businesses worldwide.
            </motion.p>
          </div>
        </div>

        {/* 6-Card High-Impact Animatic Architecture Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {softwareDomains.map((domain, idx) => (
            <AttractiveDomainCard key={domain.id} domain={domain} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}

