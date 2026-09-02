'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Lightbulb,
  Compass,
  FileCode2,
  Code2,
  ShieldCheck,
  CloudLightning,
  TrendingUp,
  Sparkles,
  Check,
} from 'lucide-react';

const journeySteps = [
  {
    id: 'idea',
    step: '01',
    name: 'Idea',
    fullName: 'IDEA',
    title: 'Feasibility & Architectural Scope',
    duration: 'Days 1–3',
    icon: Lightbulb,
    accent: '#0284c7',
    glowColor: 'rgba(2, 132, 199, 0.2)',
    gradient: 'from-blue-600 to-cyan-500',
    gate: 'Feasibility & PRD Sign-off',
    summary:
      'We audit technical feasibility, model data requirements, and formulate a fixed-price roadmap with zero scope ambiguity before writing a single line of code.',
    deliverables: [
      'Architecture Blueprint & Tech Stack Spec',
      'Fixed-Price Milestone Delivery Roadmap',
      'Technical ROI & Feasibility Matrix',
    ],
    statusText: 'Requirements Validated',
  },
  {
    id: 'discovery',
    step: '02',
    name: 'Discovery',
    fullName: 'DISCOVERY',
    title: 'Domain Schemas & OpenAPI Contracts',
    duration: 'Week 1',
    icon: Compass,
    accent: '#2563eb',
    glowColor: 'rgba(37, 99, 235, 0.2)',
    gradient: 'from-indigo-600 to-blue-600',
    gate: 'OpenAPI 3.0 Type Sign-Off',
    summary:
      'We model database entities, transactional flows, and strict OpenAPI 3.0 type contracts so all stakeholders align on exact technical specifications.',
    deliverables: [
      'Entity-Relationship Diagrams (ERD) & Schemas',
      'OpenAPI 3.0 REST & GraphQL Endpoints',
      'Security, RBAC & Compliance Matrix',
    ],
    statusText: 'Schema & Types Frozen',
  },
  {
    id: 'design',
    step: '03',
    name: 'Design',
    fullName: 'DESIGN',
    title: 'Figma Tokens & Interactive Prototype',
    duration: 'Week 2',
    icon: FileCode2,
    accent: '#7c3aed',
    glowColor: 'rgba(124, 58, 237, 0.2)',
    gradient: 'from-purple-600 to-indigo-600',
    gate: 'WCAG 2.1 AA Prototype Audit',
    summary:
      'We craft an Apple-grade Figma design system with validated user journeys, typography tokens, and high-fidelity clickable interactive prototypes.',
    deliverables: [
      'Production Figma UI Kit & Design Tokens',
      'Clickable High-Fidelity Prototype',
      'Multi-Device Responsive Breakpoint Specs',
    ],
    statusText: 'Design System Approved',
  },
  {
    id: 'development',
    step: '04',
    name: 'Development',
    fullName: 'DEVELOPMENT',
    title: 'Agile CI/CD Sprints & Live Previews',
    duration: 'Weeks 3–8',
    icon: Code2,
    accent: '#059669',
    glowColor: 'rgba(5, 150, 105, 0.2)',
    gradient: 'from-emerald-600 to-teal-600',
    gate: '100% CI/CD Automated Test Pass',
    summary:
      'Two-week modular sprints with automated GitHub Actions CI/CD pipelines, strict code reviews, and private live staging environments updated in real time.',
    deliverables: [
      'Live Staging URL with Bi-Weekly Demos',
      'Clean TypeScript & Microservices Codebase',
      'Direct WhatsApp Channel with Lead Architect',
    ],
    statusText: 'Sprint Deliverables Active',
  },
  {
    id: 'testing',
    step: '05',
    name: 'Testing',
    fullName: 'TESTING',
    title: 'Automated QA & Security Hardening',
    duration: 'Pre-Launch',
    icon: ShieldCheck,
    accent: '#0891b2',
    glowColor: 'rgba(8, 145, 178, 0.2)',
    gradient: 'from-teal-600 to-cyan-600',
    gate: 'Zero Vulnerability Security Audit',
    summary:
      'Comprehensive unit testing, Playwright end-to-end user simulation, 25k+ req/s load stress testing, and automated security vulnerability scans.',
    deliverables: [
      'Automated Vitest & Playwright Pass Record',
      '25,000+ Req/s Load Stress Audit',
      'OWASP Top 10 Security & Penetration Scan',
    ],
    statusText: 'Security & QA Hardened',
  },
  {
    id: 'deployment',
    step: '06',
    name: 'Deployment',
    fullName: 'DEPLOYMENT',
    title: 'Zero-Downtime Rollout & IP Handover',
    duration: 'Go-Live',
    icon: CloudLightning,
    accent: '#0284c7',
    glowColor: 'rgba(2, 132, 199, 0.2)',
    gradient: 'from-blue-600 to-cyan-600',
    gate: '100% Sovereign IP & Git Transfer',
    summary:
      'Blue/green containerized rollout on your private cloud with full Git repository handover, Docker configs, and zero-downtime DNS cutover.',
    deliverables: [
      'Full GitHub / GitLab Repository Transfer Deed',
      'Containerized Docker & Kubernetes Clusters',
      'Zero-Downtime Production DNS Cutover',
    ],
    statusText: '100% Sovereign IP Transferred',
  },
  {
    id: 'growth',
    step: '07',
    name: 'Growth',
    fullName: 'GROWTH',
    title: '24/7 Production SLA & Evolution',
    duration: 'Ongoing',
    icon: TrendingUp,
    accent: '#2563eb',
    glowColor: 'rgba(37, 99, 235, 0.2)',
    gradient: 'from-blue-600 to-indigo-600',
    gate: '99.99% SLA Uptime Guarantee',
    summary:
      'Round-the-clock OpenTelemetry health monitoring, automated disaster backups, security patch updates, and ongoing iterative feature scaling.',
    deliverables: [
      '24/7 Telemetry Alerting & Automated Backups',
      'Priority Response Channel with Lead Architect',
      'Iterative Scaling & Feature Roadmap Support',
    ],
    statusText: 'SLA Guaranteed & Monitored',
  },
];

export function HomeClientJourney() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-advance every 3.5 seconds when active
  useEffect(() => {
    if (!isPlaying || isHovered) return;

    const timer = setInterval(() => {
      setActiveStep((curr) => (curr + 1) % journeySteps.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered]);

  // Ensure active step is smoothly brought into view when scrolling on small screens
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeEl = scrollContainerRef.current.children[activeStep] as HTMLElement;
      if (activeEl) {
        const container = scrollContainerRef.current;
        const scrollLeft =
          activeEl.offsetLeft - container.offsetWidth / 2 + activeEl.offsetWidth / 2;
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  }, [activeStep]);

  const activeData = journeySteps[activeStep];
  const ActiveIcon = activeData.icon;

  return (
    <section className="relative bg-[#F8FAFC] text-slate-900 py-16 sm:py-24 select-none border-t border-slate-200/80 overflow-hidden">
      {/* Precision Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #001B48 1px, transparent 1px), linear-gradient(to bottom, #001B48 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      {/* Atmospheric Ambient Glow */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-cyan-400/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-blue-500/10 blur-[130px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/90 px-3.5 py-1 text-xs font-bold text-blue-700 backdrop-blur-md shadow-2xs">
            <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span>FOUNDATIONAL METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.15]">
            Engineering Lifecycle &{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
              Cadence
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            A disciplined 7-phase delivery pipeline designed for zero scope ambiguity, rapid feedback loops, and sovereign intellectual property transfer.
          </p>
        </div>

        {/* Full-Width Interactive Lifecycle Stepper / Rail */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex items-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-x-auto no-scrollbar scroll-smooth"
          >
            {journeySteps.map((step, idx) => {
              const isActive = activeStep === idx;
              const PIcon = step.icon;

              return (
                <button
                  key={step.id}
                  onClick={() => {
                    setActiveStep(idx);
                  }}
                  className={`relative flex-1 min-w-[125px] sm:min-w-[140px] flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer select-none overflow-hidden ${
                    isActive
                      ? 'text-white shadow-md shadow-blue-600/15'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/70'
                  }`}
                >
                  {/* Active Gradient Pill Background */}
                  {isActive && (
                    <motion.div
                      layoutId="active-journey-pill"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 rounded-xl"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}

                  {/* Progress Line Inside Active Pill (Cadence Timer) */}
                  {isActive && isPlaying && !isHovered && (
                    <motion.div
                      key={`cadence-progress-${activeStep}`}
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 3.5, ease: 'linear' }}
                      className="absolute bottom-0 left-0 h-[2.5px] bg-white/90 rounded-full pointer-events-none"
                    />
                  )}

                  {/* Tab Content */}
                  <span className="relative z-10 flex items-center gap-1.5 whitespace-nowrap">
                    <span
                      className={`text-[10px] font-mono font-black px-1.5 py-0.5 rounded-md transition-colors ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {step.step}
                    </span>
                    <PIcon className="h-3.5 w-3.5 shrink-0" />
                    <span>{step.fullName}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Master Stage Details Card */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="rounded-3xl border border-slate-200/90 bg-white/95 backdrop-blur-xl p-6 sm:p-10 lg:p-12 shadow-xl shadow-slate-900/5 relative overflow-hidden text-left"
        >
          {/* Dynamic Stage Color Aura */}
          <div
            className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-30 transition-all duration-700"
            style={{ backgroundColor: activeData.accent }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeData.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10"
            >
              {/* Left Column: Phase badge, Headline & Narrative (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Phase Indicator & Duration */}
                <div className="flex flex-wrap items-center gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${activeData.gradient} text-white shadow-md p-3 shrink-0`}
                    style={{
                      boxShadow: `0 8px 20px -4px ${activeData.glowColor}`,
                    }}
                  >
                    <ActiveIcon className="h-6 w-6 drop-shadow-xs" />
                  </div>

                  <div>
                    <span
                      className="text-[11px] font-mono font-extrabold uppercase tracking-wider block"
                      style={{ color: activeData.accent }}
                    >
                      PHASE {activeData.step} OF 07 • {activeData.duration.toUpperCase()}
                    </span>
                    <h3 className="text-xl font-black text-slate-950">
                      {activeData.name} Phase
                    </h3>
                  </div>
                </div>

                {/* Big Headline with Accent Bar */}
                <div className="border-l-4 border-blue-600 pl-4 py-1">
                  <h4 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 leading-tight tracking-tight">
                    “{activeData.title}”
                  </h4>
                </div>

                {/* Narrative Description */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {activeData.summary}
                </p>

                {/* Quality Gate / Verification Indicator */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800 text-xs font-bold">
                    <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
                    <span>Gate: {activeData.gate}</span>
                  </div>
                  <span className="text-xs text-slate-300 hidden sm:inline">•</span>
                  <span className="text-xs text-slate-500 font-medium">
                    Duration: {activeData.duration} • 100% Milestone Verified
                  </span>
                </div>
              </div>

              {/* Right Column: Key Engineering Deliverables Card (5 cols) */}
              <div className="lg:col-span-5 bg-slate-50/90 rounded-2xl border border-slate-200/90 p-6 sm:p-7 space-y-5 shadow-xs">
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-3.5">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                    KEY ENGINEERING DELIVERABLES
                  </span>
                  <Sparkles className="h-4 w-4 text-blue-600" />
                </div>

                <ul className="space-y-3">
                  {activeData.deliverables.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      className="flex items-start gap-3 text-xs sm:text-sm font-bold text-slate-800 p-2.5 rounded-xl bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-2xs transition-all"
                    >
                      <div
                        className="flex h-5 w-5 items-center justify-center rounded-full text-white shrink-0 mt-0.5 shadow-2xs"
                        style={{ backgroundColor: activeData.accent }}
                      >
                        <Check className="h-3 w-3 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="pt-2 border-t border-slate-200/70 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span>Sign-off status</span>
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {activeData.statusText}
                  </span>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}



