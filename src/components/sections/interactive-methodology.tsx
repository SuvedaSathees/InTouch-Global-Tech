import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  FileCode2,
  Code2,
  CloudLightning,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  MessageSquare,
  GitBranch,
  Boxes,
  Globe,
  Database,
  Lock,
} from 'lucide-react';
import { MagneticButton } from '@/components/magnetic-button';

export type StageData = {
  id: number;
  number: string;
  phase: string;
  timeframe: string;
  title: string;
  description: string;
  deliverable: string;
  tag: string;
  icon: React.ComponentType<{ className?: string }>;
};

const stages: StageData[] = [
  {
    id: 0,
    number: '01',
    phase: 'DISCOVER',
    timeframe: 'Week 1 – 2',
    title: 'Discovery & Scope Blueprint',
    description:
      'We deconstruct your operational workflows, user roles, and data entities to formulate a fixed-scope blueprint.',
    deliverable: 'Technical Specification & Entity Map',
    tag: 'Requirements Engineering',
    icon: Compass,
  },
  {
    id: 1,
    number: '02',
    phase: 'DESIGN',
    timeframe: 'Week 2 – 3',
    title: 'Architecture & UI/UX Design',
    description:
      'We establish database schemas, API contracts, and interactive Figma prototypes tested for user adoption.',
    deliverable: 'Database Schema & Figma Prototype',
    tag: 'System Modeling',
    icon: FileCode2,
  },
  {
    id: 2,
    number: '03',
    phase: 'BUILD',
    timeframe: 'Week 3 – 8+',
    title: 'Full-Stack Agile Sprints',
    description:
      'Senior engineers build modular features in 2-week sprints with continuous staging access and live review demos.',
    deliverable: 'Production-Grade Code & Live Demos',
    tag: 'Sprint Velocity',
    icon: Code2,
  },
  {
    id: 3,
    number: '04',
    phase: 'DEPLOY',
    timeframe: 'Launch & Beyond',
    title: 'Deployment & SLA Handover',
    description:
      'Zero-downtime deployment to your private cloud with 100% IP handover and ongoing 24/7 SLA telemetry monitoring.',
    deliverable: 'Full IP Handover & Production SLA',
    tag: 'Cloud Orchestration',
    icon: CloudLightning,
  },
];

export function InteractiveMethodology() {
  const [activeStage, setActiveStage] = useState(0);

  const current = stages[activeStage];

  return (
    <section className="relative overflow-hidden bg-white text-slate-900 pt-32 pb-24 sm:pb-32 select-none">
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(37,99,235,0.06),transparent_70%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* SECTION TITLE */}
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-mono font-bold text-blue-700 shadow-xs mb-4"
          >
            <span className="h-2 w-2 rounded-full bg-blue-600 animate-ping" />
            <span>OUR METHODOLOGY</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.08]"
          >
            Predictable, Milestone-Driven Engineering
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-5 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            A disciplined software lifecycle designed to eliminate ambiguity, deliver on schedule, and hand over 100% IP ownership.
          </motion.p>
        </div>

        {/* INTERACTIVE PIPELINE TIMELINE BAR */}
        <div className="relative mx-auto max-w-5xl mb-12 sm:mb-16">
          <div className="hidden sm:block absolute top-7 left-[8%] right-[8%] h-[3px] bg-slate-200 rounded-full z-0">
            <motion.div
              className="h-full bg-blue-600 rounded-full shadow-sm"
              animate={{ width: `${(activeStage / (stages.length - 1)) * 100}%` }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 relative z-10">
            {stages.map((stage) => {
              const Icon = stage.icon;
              const isActive = activeStage === stage.id;
              const isPast = activeStage >= stage.id;

              return (
                <motion.button
                  key={stage.number}
                  onClick={() => setActiveStage(stage.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group relative flex flex-col items-center p-4 rounded-2xl sm:rounded-3xl transition-all ${
                    isActive
                      ? 'border-2 border-blue-600 bg-white shadow-lg shadow-blue-500/10'
                      : 'border border-slate-200 bg-slate-50/80 hover:border-slate-300'
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl font-mono font-bold text-sm sm:text-base transition-all shadow-xs mb-3 ${
                      isActive
                        ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-500/25 scale-105'
                        : isPast
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'bg-white text-slate-500 border border-slate-200'
                    }`}
                  >
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>

                  <span
                    className={`text-[11px] font-mono font-bold uppercase tracking-wider mb-0.5 ${
                      isActive ? 'text-blue-700' : 'text-slate-600'
                    }`}
                  >
                    {stage.number} • {stage.phase}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 font-medium">
                    {stage.timeframe}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* STAGE SHOWCASE ARENA */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl border border-slate-200/90 bg-slate-50/70 p-6 sm:p-10 shadow-xs grid lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Column: Stage Specification */}
            <div className="lg:col-span-5 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-xs font-mono text-blue-700 font-bold">
                <span>Phase {current.number}</span>
                <span className="text-slate-300">•</span>
                <span>{current.timeframe}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-950 leading-tight">
                {current.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {current.description}
              </p>

              {/* Deliverable Box */}
              <div className="rounded-2xl border border-blue-200 bg-white p-4 shadow-xs">
                <span className="text-[10px] font-mono uppercase tracking-widest text-blue-700 font-bold block mb-1">
                  Guaranteed Milestone Deliverable:
                </span>
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900 font-mono">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>{current.deliverable}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visualizer Window */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400 inline-block" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400 inline-block" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 inline-block" />
                    <span className="ml-2 text-slate-500 font-medium">nexora-engine :: phase_{current.number}.spec</span>
                  </div>
                  <span className="text-blue-700 font-bold text-[11px] flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                    MILESTONE ACTIVE
                  </span>
                </div>

                <div className="space-y-3 py-2 text-xs font-mono text-slate-700">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>Sprint milestone roadmap committed to git repository</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>Continuous automated regression testing suite</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>100% intellectual property transfer upon sign-off</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 100% IP & CODE OWNERSHIP GUARANTEE SECTION */}
        <div className="mt-20 sm:mt-28 rounded-3xl border border-slate-200 bg-slate-50/80 p-8 sm:p-14 shadow-xs relative overflow-hidden text-center">
          <div className="relative z-10 max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-mono font-bold text-blue-700 mb-4">
              <Lock className="h-3.5 w-3.5 text-blue-600" />
              <span>GUARANTEED OWNERSHIP</span>
            </span>

            <h3 className="text-3xl sm:text-4xl font-black text-slate-950 leading-tight">
              100% Intellectual Property & Code Ownership
            </h3>

            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              You receive full administrative access to GitHub repositories, Docker container configs, AWS/GCP cloud environments, and database migration scripts.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10 max-w-4xl mx-auto mb-10">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mx-auto mb-3 border border-blue-100">
                <GitBranch className="h-6 w-6" />
              </div>
              <h4 className="text-sm font-bold text-slate-950">GitHub Repos</h4>
              <p className="text-[11px] text-slate-500 font-mono mt-1">Full Admin & History</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mx-auto mb-3 border border-blue-100">
                <Boxes className="h-6 w-6" />
              </div>
              <h4 className="text-sm font-bold text-slate-950">Docker Containers</h4>
              <p className="text-[11px] text-slate-500 font-mono mt-1">Reproducible Builds</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mx-auto mb-3 border border-blue-100">
                <Globe className="h-6 w-6" />
              </div>
              <h4 className="text-sm font-bold text-slate-950">AWS / GCP Cloud</h4>
              <p className="text-[11px] text-slate-500 font-mono mt-1">Your Private Accounts</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mx-auto mb-3 border border-blue-100">
                <Database className="h-6 w-6" />
              </div>
              <h4 className="text-sm font-bold text-slate-950">Database Schemas</h4>
              <p className="text-[11px] text-slate-500 font-mono mt-1">Migration Scripts</p>
            </div>
          </div>

          <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 rounded-2xl border border-blue-200 bg-blue-50 px-6 py-2.5 text-xs font-mono font-bold text-blue-700">
            <span>YOUR CODE</span>
            <span className="text-slate-300">•</span>
            <span>YOUR INFRASTRUCTURE</span>
            <span className="text-slate-300">•</span>
            <span>YOUR DATA</span>
            <span className="text-slate-300">•</span>
            <span>YOUR IP</span>
          </div>
        </div>

        {/* FINAL CLOSING CTA BANNER */}
        <div className="mt-20 sm:mt-24 rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-8 sm:p-14 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Experience Predictable Software Delivery
            </h3>
            <p className="mt-4 text-sm sm:text-base text-blue-100 leading-relaxed font-normal">
              Let's build your next digital platform with transparency, speed, and precision.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                <MagneticButton
                  href="/contact"
                  size="lg"
                  className="w-full sm:w-auto bg-white hover:bg-slate-50 text-blue-900 font-bold px-8 py-3.5 rounded-2xl shadow-lg text-sm"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </MagneticButton>
              </motion.div>

              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                <MagneticButton
                  href="/contact"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-blue-300/60 bg-blue-800/40 hover:bg-blue-800/60 text-white px-7 py-3.5 rounded-2xl text-sm shadow-md"
                >
                  Talk to an Architect
                </MagneticButton>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
