'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  Zap,
  Users,
  CheckCircle2,
  Lock,
  Eye,
  Target,
  Award,
  Sparkles,
  ArrowRight,
  Globe2,
  TrendingUp,
} from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

const foundationalPillars = [
  {
    id: 'vision',
    number: '01',
    label: 'Strategic Vision',
    tag: 'NORTH STAR',
    icon: Eye,
    quote: siteConfig.vision,
    description:
      'Empowering global small, medium, and enterprise businesses with modern cloud architecture, 100% sovereign code ownership, and high-velocity digital products that scale worldwide.',
    highlights: [
      'Global Small & Medium Business Growth',
      '100% Client Code & IP Sovereignty',
      'Modern, Scalable Cloud Infrastructure',
      'Zero Proprietary Vendor Lock-in',
    ],
    metricValue: 'Global Reach',
    metricLabel: 'Serving worldwide SMBs & growing enterprises',
  },
  {
    id: 'mission',
    number: '02',
    label: 'Global Mission',
    tag: 'CORE PURPOSE',
    icon: Target,
    quote: siteConfig.mission,
    description:
      'Delivering innovative, reliable, and high-performing digital business solutions that eliminate operational bottlenecks, streamline core workflows, and maximize client ROI.',
    highlights: [
      'Innovative IT & Custom Software Suites',
      'Live 2-Week Working Sprint Demos',
      'Direct Communication with Senior Engineers',
      'Rapid Deployment & Continuous Integration',
    ],
    metricValue: '2-Week Sprints',
    metricLabel: 'Predictable, transparent delivery cycles',
  },
  {
    id: 'values',
    number: '03',
    label: 'Core Values',
    tag: 'PRINCIPLES & TRUST',
    icon: Award,
    quote: siteConfig.values,
    description:
      'Committed to achieving business excellence through cost-effective, dependable engineering, precision QA testing, transparent milestone pricing, and enduring client partnership.',
    highlights: [
      'Commitment to Business Excellence',
      'Transparent Fixed-Milestone Pricing',
      'Rigorous Automated & Manual QA Testing',
      '99.99% Production Uptime Standards',
    ],
    metricValue: '100% Excellence',
    metricLabel: 'Zero compromise on quality & security',
  },
];

const companyPillars = [
  {
    icon: Lock,
    title: '100% Code Sovereignty',
    subtitle: 'Zero Hidden Fees or Lock-In',
    description:
      'You own every line of code, database schema, and design asset from day one with full intellectual property rights.',
    highlight: 'Full Source Code & IP Ownership',
  },
  {
    icon: Users,
    title: 'Direct Engineer Access',
    subtitle: 'No Middlemen or Delays',
    description:
      'Collaborate directly with lead engineers and architects via WhatsApp and calls for swift, clear execution.',
    highlight: 'Direct WhatsApp & Call Access',
  },
  {
    icon: Zap,
    title: 'Milestone-Based Delivery',
    subtitle: 'Transparent Pricing',
    description:
      'Clear timelines with working sprint demos every 2 weeks so you experience predictable, measurable progress.',
    highlight: 'Live 2-Week Working Demos',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Reliability',
    subtitle: '99.99% Uptime Standard',
    description:
      'Rigorously tested, performant, and secure architectures engineered to scale smoothly with your user growth.',
    highlight: 'Tested, Secure & Monitored',
  },
];

const companyMetrics = [
  { label: 'Code Ownership', value: '100%', sub: 'Zero Vendor Lock-in' },
  { label: 'Sprint Demos', value: '2-Week', sub: 'Live Working Builds' },
  { label: 'Platform Uptime', value: '99.99%', sub: 'High Availability' },
  { label: 'Support & Access', value: 'Direct', sub: 'Lead Engineer Line' },
];

export function InteractiveAboutHub() {
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const currentPillar = foundationalPillars[activePillarIndex];
  const CurrentIcon = currentPillar.icon;

  return (
    <div className="relative bg-[#FAF7F2] text-slate-900 select-none pt-32 pb-16 sm:pb-20">
      {/* Precision Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 space-y-16 sm:space-y-20">
        
        {/* Hero Section: Minimal Identity */}
        <div className="text-left max-w-3xl">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-amber-800 mb-3">
            <span className="w-5 h-[2px] bg-amber-700 rounded-full" />
            <span>ABOUT {siteConfig.name.toUpperCase()}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.1]">
            Leading Web Development & Digital Solutions.
          </h1>

          <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {siteConfig.name} is a modern technology studio engineering scalable web applications, bespoke business platforms, and high-performance digital systems for growing global businesses.
          </p>
        </div>

        {/* Key Metrics Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {companyMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-[#E8DFD1] bg-white p-5 text-left hover:border-amber-400 hover:shadow-sm transition-all"
            >
              <div className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                {metric.value}
              </div>
              <div className="text-xs font-bold text-slate-800 mt-1">
                {metric.label}
              </div>
              <div className="text-[11px] text-amber-700 font-semibold mt-0.5">
                {metric.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Vision, Mission & Values: Interactive Luxury Pillar Studio */}
        <div className="space-y-8 text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-amber-800 mb-2">
                <span className="w-4 h-[2px] bg-amber-700 rounded-full" />
                <span>FOUNDATIONAL PILLARS</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
                Vision, Mission & Core Values
              </h2>
            </div>

            {/* Pillar Selector Tabs */}
            <div className="inline-flex p-1.5 rounded-2xl bg-white border border-[#E8DFD1] shadow-xs">
              {foundationalPillars.map((pillar, idx) => {
                const isActive = activePillarIndex === idx;
                const Icon = pillar.icon;

                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActivePillarIndex(idx)}
                    className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'text-white'
                        : 'text-slate-600 hover:text-slate-950 hover:bg-stone-50'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-pillar-indicator"
                        className="absolute inset-0 bg-amber-800 rounded-xl shadow-sm"
                        transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      <Icon className="h-3.5 w-3.5" />
                      <span>{pillar.label}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Feature Card */}
          <div className="rounded-3xl border border-[#E8DFD1] bg-white p-6 sm:p-10 shadow-xs relative overflow-hidden transition-all">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPillar.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Left: Quote & Narrative (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 border border-amber-200 text-amber-800">
                      <CurrentIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-800 block">
                        PILLAR {currentPillar.number} • {currentPillar.tag}
                      </span>
                      <h3 className="text-lg font-black text-slate-950">
                        {currentPillar.label}
                      </h3>
                    </div>
                  </div>

                  <blockquote className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-950 leading-tight tracking-tight border-l-4 border-amber-700 pl-4 py-1">
                    “{currentPillar.quote}”
                  </blockquote>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {currentPillar.description}
                  </p>

                  {/* Micro metric bar */}
                  <div className="flex items-center gap-3 pt-2">
                    <div className="h-2 w-2 rounded-full bg-amber-700 animate-pulse" />
                    <span className="text-xs font-bold text-slate-800">
                      {currentPillar.metricValue}
                    </span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs text-slate-500 font-medium">
                      {currentPillar.metricLabel}
                    </span>
                  </div>
                </div>

                {/* Right: Key Principles List (5 cols) */}
                <div className="lg:col-span-5 bg-[#FAF7F2] rounded-2xl border border-[#E8DFD1] p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-[#E8DFD1] pb-3">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                      Key Engineering Pillars
                    </span>
                    <Sparkles className="h-4 w-4 text-amber-700" />
                  </div>

                  <ul className="space-y-3">
                    {currentPillar.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-bold text-slate-800">
                        <CheckCircle2 className="h-4 w-4 text-amber-700 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Section: 4 Core Guarantees */}
        <div className="space-y-8 text-left">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-amber-800 mb-2">
              <span className="w-4 h-[2px] bg-amber-700 rounded-full" />
              <span>OUR COMMITMENTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              4 Guarantees to Every Client
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {companyPillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;

              return (
                <div
                  key={idx}
                  className="rounded-3xl border border-[#E8DFD1] bg-white p-7 text-left flex flex-col justify-between hover:border-amber-400 hover:shadow-md transition-all duration-200"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-700 text-white shadow-xs">
                        <PillarIcon className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                        GUARANTEE 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-950 leading-snug">
                      {pillar.title}
                    </h3>
                    <div className="text-xs font-bold text-amber-700 mt-0.5">
                      {pillar.subtitle}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mt-3">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs font-bold text-slate-900">
                    <CheckCircle2 className="h-4 w-4 text-amber-700 shrink-0" />
                    <span>{pillar.highlight}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
