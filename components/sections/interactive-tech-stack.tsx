'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Monitor,
  Server,
  Database,
  Cloud,
  BrainCircuit,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Zap,
  Lock,
  Cpu,
  Layers,
  Terminal,
  Activity,
  GitBranch,
  Boxes,
  Globe,
  Sparkles,
  FileText,
  Workflow,
  Search,
  MessageSquare,
} from 'lucide-react';
import { MagneticButton } from '@/components/magnetic-button';

export type TechItem = {
  name: string;
  tagline: string;
  badge: string;
};

export type TechLayer = {
  id: number;
  slug: string;
  badge: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  technologies: TechItem[];
  simulationData: {
    status: string;
    metrics: string;
  };
};

const techLayers: TechLayer[] = [
  {
    id: 0,
    slug: 'frontend',
    badge: 'EDGE RENDERED',
    name: 'Frontend & UI',
    description: 'Fast, accessible, and reactive user interfaces with sub-second page loads.',
    icon: Monitor,
    accentColor: 'from-blue-500 to-cyan-400',
    technologies: [
      { name: 'Next.js 15', tagline: 'Server components & edge SSR', badge: 'PRODUCTION READY' },
      { name: 'React 19', tagline: 'Concurrent UI rendering', badge: 'OPTIMIZED' },
      { name: 'TypeScript', tagline: 'Strict compile-time type safety', badge: 'STRICT MODE' },
      { name: 'Tailwind CSS', tagline: 'Atomic modern design tokens', badge: 'v3.4 TOKENS' },
    ],
    simulationData: {
      status: 'EDGE RENDERED • 99+ CORE WEB VITALS',
      metrics: '0.4s Global First Contentful Paint',
    },
  },
  {
    id: 1,
    slug: 'backend',
    badge: 'HIGH THROUGHPUT',
    name: 'Backend & APIs',
    description: 'Scalable service architectures built for high concurrency and zero packet loss.',
    icon: Server,
    accentColor: 'from-cyan-500 to-teal-400',
    technologies: [
      { name: 'Node.js / Express', tagline: 'Fast event-driven microservices', badge: 'ASYNC EVENT LOOP' },
      { name: 'Python / FastAPI', tagline: 'Async data pipelines & APIs', badge: 'HIGH VELOCITY' },
      { name: 'Java / Spring', tagline: 'Robust enterprise transactions', badge: 'ACID COMPLIANT' },
      { name: 'GraphQL & REST', tagline: 'Type-safe contracts & schemas', badge: 'SCHEMA STITCHED' },
    ],
    simulationData: {
      status: 'HIGH THROUGHPUT • 18,400 REQ/SEC',
      metrics: 'Avg Service Latency: 16ms',
    },
  },
  {
    id: 2,
    slug: 'database',
    badge: 'ACID RELATIONAL',
    name: 'Databases & Caching',
    description: 'Relational data integrity paired with distributed sub-millisecond in-memory caching.',
    icon: Database,
    accentColor: 'from-blue-600 to-indigo-500',
    technologies: [
      { name: 'PostgreSQL', tagline: 'Primary relational store & JSONB', badge: 'ROW-LEVEL SECURITY' },
      { name: 'Redis', tagline: 'Sub-millisecond in-memory cache', badge: 'CACHE HIT 98.4%' },
      { name: 'Supabase', tagline: 'Realtime database & RLS', badge: 'EDGE SYNC' },
      { name: 'MySQL', tagline: 'Structured transactional workloads', badge: 'INDEXED ENGINE' },
    ],
    simulationData: {
      status: 'CACHE HIT: 98.4% • DB QUERY: 4ms',
      metrics: 'Redis In-Memory Cluster Active',
    },
  },
  {
    id: 3,
    slug: 'cloud',
    badge: 'ZERO DOWNTIME',
    name: 'Cloud & DevOps',
    description: 'Containerized infrastructure with automated testing and blue/green deployments.',
    icon: Cloud,
    accentColor: 'from-indigo-500 to-purple-500',
    technologies: [
      { name: 'Amazon Web Services', tagline: 'ECS, Lambda, S3, RDS, CloudFront', badge: 'MULTI-AZ REGION' },
      { name: 'Google Cloud Platform', tagline: 'Cloud Run & Kubernetes Clusters', badge: 'AUTOSCALED' },
      { name: 'Docker', tagline: 'Reproducible staging & production', badge: 'CONTAINERIZED' },
      { name: 'Cloudflare', tagline: 'DDoS protection & edge workers', badge: 'GLOBAL CDN' },
    ],
    simulationData: {
      status: 'ZERO DOWNTIME • BLUE/GREEN DEPLOY',
      metrics: '99.99% SLA Cloud Cluster Active',
    },
  },
  {
    id: 4,
    slug: 'ai',
    badge: 'RAG PIPELINES',
    name: 'AI & Automation',
    description: 'Value-adding AI workflows that automate manual operations and ingest proprietary data.',
    icon: BrainCircuit,
    accentColor: 'from-emerald-500 to-teal-400',
    technologies: [
      { name: 'OpenAI / Claude APIs', tagline: 'Reasoning, summarization & vision', badge: 'LLM INFERENCE' },
      { name: 'Vector Databases', tagline: 'Proprietary document indexing', badge: 'COSINE SEARCH' },
      { name: 'LangChain', tagline: 'Contextual RAG neural pipelines', badge: 'CONTEXT ENRICHED' },
      { name: 'OCR Parsers', tagline: 'Automated invoice & document sync', badge: 'STRUCTURAL PARSE' },
    ],
    simulationData: {
      status: 'RAG PIPELINE ACTIVE • 12ms INFERENCE',
      metrics: 'Vector Embeddings Synchronized',
    },
  },
  {
    id: 5,
    slug: 'security',
    badge: 'SOC2 READY',
    name: 'Security & Quality',
    description: 'Automated test coverage, vulnerability monitoring, and bank-grade encryption.',
    icon: ShieldCheck,
    accentColor: 'from-violet-500 to-pink-500',
    technologies: [
      { name: 'Playwright & Vitest', tagline: 'Automated unit & E2E test suites', badge: '100% PASS RATE' },
      { name: 'GitHub Actions', tagline: 'Automated CI/CD deployment gates', badge: 'AUDIT VERIFIED' },
      { name: 'Snyk Security', tagline: 'Dependency vulnerability scans', badge: 'ZERO VULNERABILITIES' },
      { name: 'OpenTelemetry', tagline: 'Realtime APM error tracking & logs', badge: '24/7 TELEMETRY' },
    ],
    simulationData: {
      status: 'SYSTEM SECURE • SOC2 COMPLIANT',
      metrics: '256-bit AES & mTLS Enforced',
    },
  },
];

export function InteractiveTechStack() {
  const [activeLayerId, setActiveLayerId] = useState(0);
  const [requestCount, setRequestCount] = useState(18420);

  useEffect(() => {
    const timer = setInterval(() => {
      setRequestCount((prev) => prev + Math.floor(Math.random() * 9) - 4);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  const activeLayer = techLayers[activeLayerId];

  return (
    <section className="relative overflow-hidden bg-[#050b18] text-white py-24 sm:py-32 select-none">
      {/* Ambient Cybernetic Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_35%,rgba(37,99,235,0.16),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* SECTION HEADER */}
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-950/80 px-4 py-1 text-xs font-mono font-bold text-cyan-300 backdrop-blur-xl shadow-lg mb-4"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <span>TECH STACK</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]"
          >
            Modern, Battle-Tested Technologies
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-5 text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl mx-auto"
          >
            We select technologies for reliability, developer velocity, longevity, and real-world scalability.
          </motion.p>
        </div>

        {/* 6 FLOATING CATEGORY SELECTOR TABS */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {techLayers.map((layer) => {
            const Icon = layer.icon;
            const isActive = activeLayer.id === layer.id;

            return (
              <motion.button
                key={layer.slug}
                onClick={() => setActiveLayerId(layer.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all shadow-md ${
                  isActive
                    ? 'bg-cyan-400 text-slate-950 shadow-[0_0_25px_rgba(6,182,212,0.5)] font-black scale-105 ring-2 ring-cyan-300'
                    : 'bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-slate-600 hover:bg-slate-850'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{layer.name}</span>
                <span
                  className={`text-[9px] font-mono px-1.5 py-0.5 rounded-md hidden sm:inline-block ${
                    isActive ? 'bg-slate-950/20 text-slate-950 font-bold' : 'bg-slate-800 text-cyan-400'
                  }`}
                >
                  {layer.badge}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* CENTRAL ARCHITECTURE HUB & LIVE SIMULATION ARENA */}
        <div className="grid lg:grid-cols-12 gap-8 items-center rounded-3xl border border-slate-800 bg-slate-950/90 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl">
          {/* Left Column: Center Platform Core & Simulation Deck */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* CENTRAL OBJECT: YOUR DIGITAL PLATFORM */}
            <div className="relative rounded-3xl border border-blue-500/40 bg-gradient-to-b from-blue-950/80 via-slate-900 to-[#071126] p-6 text-center shadow-xl overflow-hidden">
              {/* Rotating Technical Glow Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-12 -right-12 w-48 h-48 rounded-full border border-dashed border-cyan-400/20 pointer-events-none"
              />

              <div className="relative z-10 flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-slate-950 font-black shadow-[0_0_25px_rgba(6,182,212,0.5)] mb-3">
                  <Cpu className="h-7 w-7" />
                </div>
                <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase font-bold">
                  CORE INFRASTRUCTURE
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                  YOUR DIGITAL PLATFORM
                </h3>
                <p className="text-xs font-mono text-slate-300 mt-1 font-semibold">
                  Scalable • Secure • Production Ready
                </p>
              </div>

              {/* Realtime Live Pulse */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ONLINE (99.99%)
                </span>
                <span className="text-cyan-300 font-semibold">{requestCount.toLocaleString()} req/s</span>
              </div>
            </div>

            {/* Active Layer Description */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-950 border border-blue-800 px-3 py-1 text-xs font-mono text-cyan-300 font-bold">
                <span>{activeLayer.badge}</span>
              </div>
              <h4 className="text-2xl font-bold text-white">{activeLayer.name}</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {activeLayer.description}
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Technology Cards Grid & Dynamic Simulation */}
          <div className="lg:col-span-7 space-y-5">
            {/* Live Layer Simulation Visualizer */}
            <div className="rounded-2xl border border-slate-800 bg-[#070d1a] p-4 shadow-xl text-xs font-mono">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 mb-3">
                <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                  <Activity className="h-3.5 w-3.5" />
                  {activeLayer.simulationData.status}
                </span>
                <span className="text-slate-400 text-[11px]">{activeLayer.simulationData.metrics}</span>
              </div>

              {/* Visual Dataflow / Pipeline Animation based on active layer */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLayer.slug}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="py-1"
                >
                  {activeLayer.slug === 'frontend' && (
                    <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px]">
                      <span className="text-blue-400 font-bold">Next.js Edge</span>
                      <span className="text-slate-500">→</span>
                      <span className="text-cyan-400 font-bold">React 19 Concurrent</span>
                      <span className="text-slate-500">→</span>
                      <span className="text-indigo-400 font-bold">Tailwind Tokens</span>
                      <span className="text-slate-500">→</span>
                      <span className="text-emerald-400 font-bold">Browser (0.4s)</span>
                    </div>
                  )}

                  {activeLayer.slug === 'backend' && (
                    <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px]">
                      <span className="text-cyan-400 font-bold">CLIENT</span>
                      <span className="text-slate-500">→</span>
                      <span className="text-blue-400 font-bold">API GATEWAY</span>
                      <span className="text-slate-500">→</span>
                      <span className="text-indigo-400 font-bold">FASTAPI / NODE</span>
                      <span className="text-slate-500">→</span>
                      <span className="text-emerald-400 font-bold">DB (16ms)</span>
                    </div>
                  )}

                  {activeLayer.slug === 'database' && (
                    <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px]">
                      <span className="text-cyan-400 font-bold">App Request</span>
                      <span className="text-slate-500">→</span>
                      <span className="text-emerald-400 font-bold">Redis (0.8ms Hit)</span>
                      <span className="text-slate-500">→</span>
                      <span className="text-blue-400 font-bold">PostgreSQL ACID</span>
                    </div>
                  )}

                  {activeLayer.slug === 'cloud' && (
                    <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px]">
                      <span className="text-blue-400 font-bold">Git Push</span>
                      <span className="text-slate-500">→</span>
                      <span className="text-cyan-400 font-bold">CI/CD</span>
                      <span className="text-slate-500">→</span>
                      <span className="text-indigo-400 font-bold">Docker Build</span>
                      <span className="text-slate-500">→</span>
                      <span className="text-emerald-400 font-bold">AWS/GCP Zero-Downtime</span>
                    </div>
                  )}

                  {activeLayer.slug === 'ai' && (
                    <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px]">
                      <span className="text-cyan-400 font-bold">Doc OCR</span>
                      <span className="text-slate-500">→</span>
                      <span className="text-blue-400 font-bold">Embedding</span>
                      <span className="text-slate-500">→</span>
                      <span className="text-indigo-400 font-bold">Vector DB</span>
                      <span className="text-slate-500">→</span>
                      <span className="text-emerald-400 font-bold">RAG Inference</span>
                    </div>
                  )}

                  {activeLayer.slug === 'security' && (
                    <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px]">
                      <span className="text-blue-400 font-bold">Code</span>
                      <span className="text-slate-500">→</span>
                      <span className="text-cyan-400 font-bold">Playwright Tests</span>
                      <span className="text-slate-500">→</span>
                      <span className="text-indigo-400 font-bold">Snyk Scan</span>
                      <span className="text-slate-500">→</span>
                      <span className="text-emerald-400 font-bold">24/7 APM</span>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* 4 Minimal Technology Cards */}
            <div className="grid sm:grid-cols-2 gap-3">
              {activeLayer.technologies.map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="rounded-2xl border border-slate-800 bg-slate-900/90 p-4 shadow-md group hover:border-cyan-400 hover:shadow-[0_10px_30px_rgba(6,182,212,0.2)] transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {tech.name}
                    </h5>
                    <span className="text-[9px] font-mono font-bold bg-blue-950 border border-blue-800 text-cyan-400 px-2 py-0.5 rounded-full">
                      {tech.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">{tech.tagline}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* FINAL CONSULTATION CTA BLOCK */}
        <div className="mt-20 sm:mt-24 rounded-3xl border border-blue-500/40 bg-gradient-to-br from-blue-950/70 via-slate-900 to-[#071126] p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Need Architecture Recommendations?
            </h3>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              Our software architects will review your project requirements and recommend the optimal technology stack.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                <MagneticButton
                  href="/contact"
                  size="lg"
                  className="w-full sm:w-auto bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold px-8 py-3.5 rounded-2xl shadow-xl shadow-cyan-400/20 text-sm"
                >
                  Discuss Your Architecture
                  <ArrowRight className="ml-2 h-4 w-4" />
                </MagneticButton>
              </motion.div>

              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                <MagneticButton
                  href="/contact"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-slate-700 bg-slate-900/80 hover:bg-slate-900 text-white px-7 py-3.5 rounded-2xl text-sm shadow-md"
                >
                  Start Your Project
                </MagneticButton>
              </motion.div>
            </div>

            {/* 3 Trust Indicators */}
            <div className="mt-10 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 text-cyan-300">
                <ShieldCheck className="h-4 w-4 text-cyan-400" />
                NDA Protected
              </span>
              <span className="flex items-center gap-1.5 text-amber-300">
                <Zap className="h-4 w-4 text-amber-400" />
                24-Hour Responses
              </span>
              <span className="flex items-center gap-1.5 text-emerald-300">
                <MessageSquare className="h-4 w-4 text-emerald-400" />
                Direct Architect Chat
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
