'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Lightbulb,
  Compass,
  FileCode2,
  Code2,
  ShieldCheck,
  CloudLightning,
  TrendingUp,
  CheckCircle2,
  Lock,
} from 'lucide-react';

const journeySteps = [
  {
    id: 'idea',
    step: '01',
    name: 'IDEA',
    title: 'Feasibility & Architectural Scope',
    duration: 'Days 1–3',
    icon: Lightbulb,
    gradient: 'from-blue-600 to-indigo-600',
    gate: 'Feasibility & PRD Contract',
    summary:
      'We audit technical feasibility, model data requirements, and provide a fixed-price roadmap with zero scope ambiguity.',
    deliverables: [
      'Architecture Blueprint & Tech Stack Spec',
      'Fixed-Price Milestone Delivery Roadmap',
      'Technical ROI & Feasibility Matrix',
    ],
  },
  {
    id: 'discovery',
    step: '02',
    name: 'DISCOVERY',
    title: 'Domain Schemas & OpenAPI Contracts',
    duration: 'Week 1',
    icon: Compass,
    gradient: 'from-indigo-600 to-purple-600',
    gate: 'Strict OpenAPI 3.0 Sign-Off',
    summary:
      'We model database entities, transactional flows, and OpenAPI 3.0 type contracts so all stakeholders align on exact technical specs.',
    deliverables: [
      'Entity-Relationship Diagrams (ERD) & Schemas',
      'OpenAPI 3.0 REST & GraphQL Endpoints',
      'Security, RBAC & Compliance Matrix',
    ],
  },
  {
    id: 'design',
    step: '03',
    name: 'DESIGN',
    title: 'Figma Tokens & Interactive Prototype',
    duration: 'Week 2',
    icon: FileCode2,
    gradient: 'from-purple-600 to-pink-600',
    gate: 'WCAG 2.1 AA Prototype Audit',
    summary:
      'We craft an Apple-grade Figma design system with validated user journeys, typography tokens, and clickable prototypes.',
    deliverables: [
      'Production Figma UI Kit & Design Tokens',
      'Clickable High-Fidelity Prototype',
      'Multi-Device Responsive Breakpoint Specs',
    ],
  },
  {
    id: 'development',
    step: '04',
    name: 'DEVELOPMENT',
    title: 'Agile CI/CD Sprints & Live Previews',
    duration: 'Weeks 3–8',
    icon: Code2,
    gradient: 'from-emerald-500 to-teal-600',
    gate: '100% CI/CD Automated Test Pass',
    summary:
      'Two-week modular sprints with automated GitHub Actions CI/CD pipelines, strict code reviews, and live private staging environments.',
    deliverables: [
      'Live Staging URL with Bi-Weekly Demos',
      'Clean TypeScript & Microservices Codebase',
      'Direct WhatsApp Channel with Lead Architect',
    ],
  },
  {
    id: 'testing',
    step: '05',
    name: 'TESTING',
    title: 'Automated QA & Security Hardening',
    duration: 'Pre-Launch',
    icon: ShieldCheck,
    gradient: 'from-teal-500 to-cyan-600',
    gate: 'Zero Vulnerability Security Audit',
    summary:
      'Comprehensive unit testing, Playwright end-to-end user simulation, load stress testing, and automated security scans.',
    deliverables: [
      'Automated Vitest & Playwright Pass Record',
      '25,000+ Req/s Load Stress Audit',
      'OWASP Top 10 Security & Penetration Scan',
    ],
  },
  {
    id: 'deployment',
    step: '06',
    name: 'DEPLOYMENT',
    title: 'Zero-Downtime Rollout & IP Handover',
    duration: 'Go-Live',
    icon: CloudLightning,
    gradient: 'from-cyan-500 to-blue-600',
    gate: '100% Sovereign IP & Git Transfer',
    summary:
      'Blue/green containerized rollout on your private AWS/GCP cloud with full Git repository handover, Docker configs, and DNS routing.',
    deliverables: [
      'Full GitHub / GitLab Repository Transfer Deed',
      'Containerized Docker & Kubernetes Clusters',
      'Zero-Downtime Production DNS Cutover',
    ],
  },
  {
    id: 'growth',
    step: '07',
    name: 'GROWTH',
    title: '24/7 Production SLA & Evolution',
    duration: 'Ongoing',
    icon: TrendingUp,
    gradient: 'from-blue-600 to-indigo-700',
    gate: '99.99% SLA Uptime Guarantee',
    summary:
      'Round-the-clock OpenTelemetry health monitoring, automated disaster backups, security patch updates, and feature scaling.',
    deliverables: [
      '24/7 Telemetry Alerting & Automated Backups',
      'Priority Response Channel with Lead Architect',
      'Iterative Scaling & Feature Roadmap Support',
    ],
  },
];

export function HomeClientJourney() {
  const [activeStep, setActiveStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Sequential progression: changes smoothly every 3 seconds
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % journeySteps.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const activeData = journeySteps[activeStep];
  const ActiveIcon = activeData.icon;

  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] text-slate-900 pt-16 pb-14 sm:pt-20 sm:pb-16 select-none border-t border-[#E8DFD1]">
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
        
        {/* Left-Aligned Header (Shifted further down) */}
        <div className="flex flex-col items-start gap-4 mb-8 translate-y-[30px]">
          <div className="max-w-xl text-left">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-amber-800 mb-2">
              <span className="w-4 h-[2px] bg-amber-700 rounded-full" />
              <span>END-TO-END PARTNERSHIP</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-950 leading-tight">
              The Client Journey.
            </h2>
          </div>
        </div>

        {/* Upgraded Interactive Stepper Deck */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="mt-14 rounded-3xl border border-[#E8DFD1] bg-gradient-to-b from-[#F4EEE4]/90 to-white/90 p-6 sm:p-8 shadow-xs space-y-6"
        >
          {/* Top 7-Step Rail with Crisp, Clean Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {journeySteps.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPast = idx < activeStep;

              return (
                <React.Fragment key={step.id}>
                  <button
                    onClick={() => setActiveStep(idx)}
                    className={`group relative flex items-center gap-2 rounded-xl px-3.5 sm:px-4 py-2 text-xs font-bold tracking-tight transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-amber-700 text-white shadow-md shadow-amber-700/20'
                        : isPast
                        ? 'bg-amber-50 border border-amber-200/80 text-amber-800 hover:border-amber-300'
                        : 'bg-white border border-[#E8DFD1] text-slate-700 hover:border-amber-400 hover:text-slate-950'
                    }`}
                  >
                    <span
                      className={`flex h-4.5 w-4.5 items-center justify-center rounded-md text-[9px] font-black ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : isPast
                          ? 'bg-amber-100/80 text-amber-800'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {step.step}
                    </span>

                    <span>{step.name}</span>
                  </button>

                  {idx < journeySteps.length - 1 && (
                    <span
                      className={`text-xs font-bold transition-colors duration-200 ${
                        activeStep > idx ? 'text-amber-700' : 'text-slate-300'
                      }`}
                    >
                      →
                    </span>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Active Phase Dynamic Showcase Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeData.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl border border-[#E8DFD1] bg-white p-5 sm:p-7 shadow-xs text-left"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                
                {/* Left Phase Specs */}
                <div className="max-w-xl space-y-2.5">
                  <div className="flex items-center gap-2">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br ${activeData.gradient} text-white shadow-2xs`}
                    >
                      <ActiveIcon className="h-4 w-4" />
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-amber-800">
                      PHASE {activeData.step} • {activeData.name} ({activeData.duration})
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                      Gate: {activeData.gate}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight">
                    {activeData.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {activeData.summary}
                  </p>
                </div>

                {/* Right Deliverables Checklist */}
                <div className="space-y-2 lg:min-w-[340px] bg-amber-50/40 border border-amber-100 rounded-2xl p-4">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Verified Phase Deliverables
                  </div>
                  {activeData.deliverables.map((del, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-center gap-2.5 text-xs font-semibold text-slate-800"
                    >
                      <CheckCircle2 className="h-4 w-4 text-amber-700 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Trust Status Strip */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-2 text-slate-700">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold">Transparent Engineering Cadence</span>
              <span>•</span>
              <span>Direct WhatsApp & Slack Channel with Lead Architect</span>
            </div>

            <div className="flex items-center gap-1.5 text-slate-700 font-semibold">
              <Lock className="h-3.5 w-3.5 text-amber-700" />
              <span>100% Sovereign IP Handover</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
