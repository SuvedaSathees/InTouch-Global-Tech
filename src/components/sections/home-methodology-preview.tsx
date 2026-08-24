'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  FileCode2,
  Code2,
  CloudLightning,
  CheckCircle2,
  Terminal,
} from 'lucide-react';

const cadencePhases = [
  {
    step: '01',
    phase: 'DISCOVERY',
    badge: 'Week 1',
    title: 'Architecture Blueprint & PRD',
    icon: Compass,
    gradient: 'from-blue-600 to-indigo-600',
    lightBg: 'bg-blue-50/70',
    accentColor: '#2563eb',
    gate: 'Strict PRD Sign-Off',
    summary: 'We model database entities, transactional flows, and OpenAPI specs before writing code.',
    artifacts: ['architecture-spec.v1.json', 'domain-schema.sql', 'openapi-3.0.yaml'],
    deliverables: [
      'Comprehensive Technical PRD & Architecture Blueprint',
      'Entity-Relationship Models (ERD) & DB Schemas',
      'Fixed-Price Milestone Contract with Zero Scope Creep',
    ],
    metric: '< 1% Timeline Variance',
  },
  {
    step: '02',
    phase: 'DESIGN',
    badge: 'Week 2',
    title: 'Figma System & Clickable Flow',
    icon: FileCode2,
    gradient: 'from-indigo-600 to-purple-600',
    lightBg: 'bg-indigo-50/70',
    accentColor: '#6366f1',
    gate: 'Zero-Friction UI Audit',
    summary: 'We build an Apple-grade Figma UI kit with interactive click-through user flows and typography tokens.',
    artifacts: ['tokens.config.ts', 'figma-ui-kit.fig', 'wcag-audit.pdf'],
    deliverables: [
      'Production Figma UI Kit & Design System Tokens',
      'Clickable High-Fidelity Prototype for User Testing',
      'WCAG 2.1 AA Accessibility & Responsive Breakpoints',
    ],
    metric: '100% WCAG AA Certified',
  },
  {
    step: '03',
    phase: 'SPRINTS',
    badge: 'Weeks 3–8',
    title: 'Agile CI/CD & Live Staging',
    icon: Code2,
    gradient: 'from-emerald-500 to-teal-600',
    lightBg: 'bg-emerald-50/70',
    accentColor: '#10b981',
    gate: '100% CI/CD Test Pass',
    summary: 'Two-week agile sprints with automated GitHub Actions testing and live staging environments.',
    artifacts: ['github-actions.ci.yml', 'playwright.e2e.ts', 'vitest.config.ts'],
    deliverables: [
      'Bi-Weekly Live Staging Demos & Video Walkthroughs',
      'Automated Vitest & Playwright End-to-End Test Suite',
      'Direct WhatsApp/Slack Access with Senior Solutions Architect',
    ],
    metric: '2-Week Sprint Velocity',
  },
  {
    step: '04',
    phase: 'GO-LIVE',
    badge: 'Go-Live',
    title: 'Zero-Downtime Launch & IP Transfer',
    icon: CloudLightning,
    gradient: 'from-cyan-500 to-blue-600',
    lightBg: 'bg-cyan-50/70',
    accentColor: '#06b6d4',
    gate: '100% Sovereign IP Deed',
    summary: 'Containerized private cloud deployment with complete Git repository transfer and 24/7 telemetry.',
    artifacts: ['docker-compose.prod.yml', 'k8s-cluster.tf', 'ip-handover-deed.pdf'],
    deliverables: [
      '100% Source Code & Git Repository Transfer Deed',
      'Containerized Docker & Kubernetes Orchestration Files',
      '24/7 OpenTelemetry Performance Monitoring & SLA Guarantee',
    ],
    metric: '99.99% Uptime Guarantee',
  },
];

export function HomeMethodologyPreview() {
  const [activeStep, setActiveStep] = useState(0);
  const activePhase = cadencePhases[activeStep];
  const PhaseIcon = activePhase.icon;

  return (
    <section className="relative overflow-hidden bg-slate-50/70 text-slate-900 py-14 sm:py-16 select-none border-t border-slate-200">
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
        
        {/* Left-Aligned Header */}
        <div className="flex flex-col items-start gap-4 mb-8">
          <div className="max-w-xl text-left">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-blue-600 mb-2">
              <span className="w-4 h-[2px] bg-blue-600 rounded-full" />
              <span>ENGINEERING CADENCE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-950 leading-tight">
              A 4-Phase Delivery Pipeline.
            </h2>
          </div>
        </div>

        {/* 4 Connected Pipeline Stations (Assembly Line Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-6">
          {cadencePhases.map((phase, idx) => {
            const isSelected = activeStep === idx;
            const Icon = phase.icon;

            return (
              <div
                key={phase.step}
                onClick={() => setActiveStep(idx)}
                className={`group relative flex flex-col justify-between rounded-2xl border p-4 text-left cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? 'border-blue-600 bg-white shadow-md shadow-blue-500/10 ring-2 ring-blue-500/20 scale-[1.02]'
                    : 'border-slate-200 bg-white/80 hover:border-slate-300 hover:bg-white'
                }`}
              >
                <div>
                  {/* Top Step & Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-200 ${
                        isSelected
                          ? `bg-gradient-to-br ${phase.gradient} text-white shadow-2xs`
                          : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>

                    <span
                      className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md ${
                        isSelected ? 'bg-blue-50 text-blue-700 font-extrabold' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {phase.badge}
                    </span>
                  </div>

                  <div className="text-[9px] font-bold text-slate-400 uppercase">
                    PHASE {phase.step} • {phase.phase}
                  </div>
                  <h3
                    className={`text-sm font-bold leading-tight mt-0.5 ${
                      isSelected ? 'text-blue-900' : 'text-slate-900 group-hover:text-blue-600'
                    }`}
                  >
                    {phase.title}
                  </h3>
                </div>

                {/* Quality Gate Status */}
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px]">
                  <span className="font-semibold text-slate-500">{phase.metric}</span>
                  {isSelected && (
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Ultra-Pro Active Phase Milestone Console */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePhase.step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs text-left"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Left Column: Scope & Quality Gate (Col 1-7) */}
              <div className="lg:col-span-7 space-y-3.5">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-blue-600">
                    PHASE {activePhase.step} DEEP-DIVE • {activePhase.phase}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-md">
                    Gate: {activePhase.gate}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {activePhase.summary}
                </p>

                {/* Concrete Deliverable Checklist */}
                <div className="space-y-2 pt-1">
                  {activePhase.deliverables.map((item, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-center gap-2.5 text-xs text-slate-800 font-medium"
                    >
                      <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Verified Artifact Badges (Col 8-12) */}
              <div className="lg:col-span-5">
                <div className="rounded-xl border border-slate-200/80 bg-slate-50/80 p-4 text-left">
                  <div className="flex items-center justify-between mb-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    <span>Verified Production Artifacts</span>
                    <span className="text-blue-600">100% SIGNED-OFF</span>
                  </div>

                  <div className="space-y-2 font-mono text-xs">
                    {activePhase.artifacts.map((art, aIdx) => (
                      <div
                        key={aIdx}
                        className="flex items-center justify-between rounded-lg bg-white border border-slate-200 px-3 py-2 text-slate-700 shadow-2xs"
                      >
                        <div className="flex items-center gap-2 truncate">
                          <Terminal className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                          <span className="truncate">{art}</span>
                        </div>
                        <span className="text-[9px] font-bold text-emerald-600 shrink-0 ml-2">
                          VERIFIED
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
