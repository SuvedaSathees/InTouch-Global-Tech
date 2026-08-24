'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  FileCode2,
  Palette,
  Code2,
  ShieldAlert,
  CloudLightning,
  CheckCircle2,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { MagneticButton } from '@/components/magnetic-button';

const phases = [
  {
    step: '01',
    icon: Compass,
    title: 'Discovery & Domain Modeling',
    timeframe: 'Week 1 - 2',
    description:
      'We deconstruct your operational bottlenecks, compliance requirements, user journeys, and database entities to formulate a fixed-scope technical blueprint.',
    deliverables: [
      'Comprehensive Technical Scope Specification',
      'Entity Relationship (ERD) & Data Flow Map',
      'Fixed Milestone Delivery Timeline',
    ],
  },
  {
    step: '02',
    icon: FileCode2,
    title: 'Architecture & System Design',
    timeframe: 'Week 2 - 3',
    description:
      'We establish the core software architecture, choosing microservices, database schemas, auth mechanisms, and API contracts tailored for throughput.',
    deliverables: [
      'Database Schema & Indexing Blueprint',
      'API Contract & Third-Party Integration Specs',
      'Cloud Infrastructure & CI/CD Pipeline Design',
    ],
  },
  {
    step: '03',
    icon: Palette,
    title: 'High-Fidelity UI/UX Prototyping',
    timeframe: 'Week 3 - 4',
    description:
      'We design pixel-perfect, accessible user interfaces in Figma with complete design systems, tested for ergonomic workflows and user conversion.',
    deliverables: [
      'Interactive Clickable Figma Prototype',
      'Modular Tailwind Design System Tokens',
      'Mobile, Tablet & Desktop Ergonomic Layouts',
    ],
  },
  {
    step: '04',
    icon: Code2,
    title: 'Full-Stack Sprint Engineering',
    timeframe: 'Week 4 - 8+',
    description:
      'Our senior engineers build the solution in 2-week agile sprints with bi-weekly client demo calls and continuous staging deployments.',
    deliverables: [
      'Clean, Type-Safe, Modular Codebase',
      'Staging Environment Live Previews',
      'Sprint Review Demos & Progress Reports',
    ],
  },
  {
    step: '05',
    icon: ShieldAlert,
    title: 'Security Auditing & Load Testing',
    timeframe: 'Week 8 - 9',
    description:
      'Rigorous automated test suites, concurrency stress testing, penetration tests, and vulnerability audits ensure bulletproof stability under pressure.',
    deliverables: [
      'Automated Unit & Integration Test Reports',
      'Load Testing Benchmarks (10k+ Concurrency)',
      'Security Vulnerability & Compliance Audit',
    ],
  },
  {
    step: '06',
    icon: CloudLightning,
    title: 'Production Deploy & 24/7 SLA',
    timeframe: 'Launch & Beyond',
    description:
      'Zero-downtime blue/green deployment to edge infrastructure with continuous APM monitoring, error logging, and post-launch SLA support.',
    deliverables: [
      'Zero-Downtime Production Launch',
      '24/7 Telemetry & Health Monitoring',
      'Full Source Code Handover & Documentation',
    ],
  },
];

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-slate-50/70 border-t border-slate-200">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Methodology"
          title="The Agile Engineering Lifecycle"
          description="A structured, transparent engineering lifecycle designed to eliminate uncertainty, ensure predictability, and deliver market-leading software."
        />

        {/* Interactive Step Switcher for Mobile & Desktop */}
        <div className="mt-16 grid gap-6 lg:grid-cols-12 items-start">
          {/* Step Selector List */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-2.5">
            {phases.map((phase, idx) => {
              const Icon = phase.icon;
              const isSelected = activeStep === idx;
              return (
                <motion.button
                  key={phase.step}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-4 rounded-2xl border transition-all flex items-center justify-between shadow-2xs ${
                    isSelected
                      ? 'border-blue-500 bg-blue-50/90 shadow-md ring-1 ring-blue-500/20'
                      : 'border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-xl text-xs font-mono font-bold transition-colors ${
                        isSelected
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {phase.step}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 leading-tight">
                        {phase.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 font-mono mt-0.5 font-medium">
                        {phase.timeframe}
                      </p>
                    </div>
                  </div>
                  <Icon className={`h-4 w-4 transition-colors ${isSelected ? 'text-blue-600' : 'text-slate-400'}`} />
                </motion.button>
              );
            })}
          </div>

          {/* Active Phase Deep Dive Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-xl"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-100 text-blue-700 text-xs font-mono font-bold">
                      {phases[activeStep].step}
                    </span>
                    <span className="text-xs font-mono font-bold text-blue-700">
                      Phase {phases[activeStep].step} Architecture Specification
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-mono text-slate-700 font-bold border border-slate-200">
                    <Clock className="h-3.5 w-3.5 text-blue-600" />
                    <span>{phases[activeStep].timeframe}</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {phases[activeStep].title}
                </h3>

                <p className="mt-4 text-base text-slate-600 leading-relaxed">
                  {phases[activeStep].description}
                </p>

                {/* Deliverables */}
                <div className="mt-8">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-3">
                    Validated Milestone Deliverables:
                  </h5>
                  <div className="space-y-2.5">
                    {phases[activeStep].deliverables.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/80 p-3.5 text-sm text-slate-800"
                      >
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                        <span className="font-semibold">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-slate-500 font-medium">
                    Milestone backed by full SLA and intellectual property ownership.
                  </span>
                  <MagneticButton href="/process" size="sm" variant="outline" className="border-slate-300 bg-white hover:bg-slate-50 text-slate-800 shadow-sm shrink-0">
                    Explore Full Process
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </MagneticButton>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
