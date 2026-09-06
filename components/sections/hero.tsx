'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Activity,
  Cpu,
  Sparkles,
  Server,
  Layers,
  Database,
  Terminal,
  CheckCircle2,
  TrendingUp,
  Globe2,
} from 'lucide-react';
import { MagneticButton } from '@/components/magnetic-button';

const tabs = [
  { id: 'erp', label: 'Enterprise ERP', icon: Layers, metric: '100% Data Sync', highlight: 'Real-time multi-tenant ledger & inventory' },
  { id: 'crm', label: 'Sales CRM', icon: Database, metric: '+38% Deals Closed', highlight: 'Visual pipeline & automated follow-ups' },
  { id: 'web', label: 'Web Applications', icon: Server, metric: '0.6s Global Load', highlight: 'Next.js 15 Edge Server Rendering' },
  { id: 'ai', label: 'AI Automation', icon: Sparkles, metric: '98.4% Cache Hit', highlight: 'Neural RAG & automated document ingestion' },
];

export function HeroSection() {
  const [activeTab, setActiveTab] = useState('erp');
  const [throughput, setThroughput] = useState(14820);
  const activeData = tabs.find((t) => t.id === activeTab) || tabs[0];

  useEffect(() => {
    const interval = setInterval(() => {
      setThroughput((prev) => prev + Math.floor(Math.random() * 7) - 3);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-aurora-glow pt-32 pb-20 lg:pt-38 lg:pb-28">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-grid-cyber opacity-70 mask-fade-bottom pointer-events-none" />

      {/* Radiant Floating Orbs */}
      <motion.div
        animate={{
          x: [0, 35, 0, -35, 0],
          y: [0, -25, 0, 25, 0],
          scale: [1, 1.1, 1, 0.94, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-tr from-blue-500/20 via-cyan-400/15 to-indigo-500/20 blur-[130px] pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -25, 0, 25, 0],
          y: [0, 30, 0, -30, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-16 left-8 w-80 h-80 bg-blue-400/15 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, 30, 0, -30, 0],
          y: [0, -25, 0, 25, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-16 right-8 w-96 h-96 bg-cyan-400/15 rounded-full blur-[110px] pointer-events-none"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Hero Typography */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Luminous Capsule Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 rounded-full border border-blue-200/80 bg-white/95 px-3.5 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold text-blue-700 backdrop-blur-2xl shadow-sm mb-7 max-w-full"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
            </span>
            <span className="text-slate-800 font-bold">Intouch Global Tech</span>
            <span className="text-slate-300 hidden min-[360px]:inline">•</span>
            <span className="text-blue-600 font-extrabold">Enterprise Software Systems</span>
          </motion.div>

          {/* High-Impact Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-balance text-3xl min-[360px]:text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl leading-[1.08] text-slate-950"
          >
            Software Engineered to{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
              Outperform Competitors
            </span>
          </motion.h1>

          {/* Punchy Value Prop */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
          >
            We architect and build high-performance custom ERPs, CRMs, web applications, and AI platforms tailored precisely around how your company operates.
          </motion.p>

          {/* Primary Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <MagneticButton
                href="/contact"
                size="lg"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-xl shadow-blue-500/25 border border-blue-500 px-8 py-3.5 rounded-2xl text-sm"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </MagneticButton>
            </motion.div>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <MagneticButton
                href="/projects"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-slate-300 bg-white/90 hover:bg-white text-slate-800 px-7 py-3.5 shadow-sm rounded-2xl text-sm backdrop-blur-md"
              >
                View Case Studies
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>

        {/* Live Interactive Command Center Deck */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          {/* Subtle Glow Aura */}
          <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-indigo-500/20 blur-2xl opacity-80" />

          {/* Floating Metric Badge (Left) */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.06, y: -10 }}
            className="hidden lg:flex absolute -left-8 top-14 z-20 items-center gap-3 rounded-2xl border border-slate-200/90 bg-white/95 p-3.5 shadow-xl backdrop-blur-2xl cursor-default"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-2xs">
              <Zap className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[11px] text-slate-500 font-semibold">Response Latency</p>
              <p className="text-xs font-bold text-slate-900 font-mono">⚡ 24ms Sub-Second</p>
            </div>
          </motion.div>

          {/* Floating Metric Badge (Right) */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            whileHover={{ scale: 1.06, y: 10 }}
            className="hidden lg:flex absolute -right-8 bottom-14 z-20 items-center gap-3 rounded-2xl border border-slate-200/90 bg-white/95 p-3.5 shadow-xl backdrop-blur-2xl cursor-default"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 shadow-2xs">
              <TrendingUp className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[11px] text-slate-500 font-semibold">Enterprise Scale</p>
              <p className="text-xs font-bold text-slate-900 font-mono">₹1,000 Cr+ Processed</p>
            </div>
          </motion.div>

          {/* Main Deck Container */}
          <div className="relative rounded-3xl border border-slate-200/90 bg-white shadow-2xl overflow-hidden">
            {/* Top Deck Controls */}
            <div className="flex flex-wrap items-center justify-between border-b border-slate-100 bg-slate-50/90 px-5 py-3.5 gap-3">
              {/* Interactive Tabs */}
              <div className="flex items-center gap-1.5 bg-slate-200/70 p-1 rounded-xl max-w-full overflow-x-auto no-scrollbar shrink-0">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        isActive
                          ? 'bg-white text-blue-600 shadow-sm'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Status indicator */}
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-600">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>99.99% SYSTEM SLA</span>
              </div>
            </div>

            {/* Deck Body */}
            <div className="p-6 sm:p-7 bg-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  {/* Realtime KPI Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3.5">
                      <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold">Throughput</span>
                      <p className="text-xl font-bold text-slate-900 font-mono mt-1">
                        {throughput.toLocaleString()} <span className="text-xs text-blue-600 font-normal">req/s</span>
                      </p>
                      <span className="text-[10px] text-emerald-600 font-medium">↑ Real-Time Flow</span>
                    </div>

                    <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3.5">
                      <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold">Performance</span>
                      <p className="text-xl font-bold text-blue-600 font-mono mt-1">
                        {activeData.metric}
                      </p>
                      <span className="text-[10px] text-slate-500 font-medium">Verified Benchmark</span>
                    </div>

                    <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3.5">
                      <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold">Code Ownership</span>
                      <p className="text-xl font-bold text-slate-900 font-mono mt-1">
                        100% IP
                      </p>
                      <span className="text-[10px] text-slate-500 font-medium">Zero Lock-In</span>
                    </div>

                    <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3.5">
                      <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold">Security</span>
                      <p className="text-xl font-bold text-emerald-600 font-mono mt-1">
                        ENCRYPTED
                      </p>
                      <span className="text-[10px] text-slate-500 font-medium">SOC2 & mTLS</span>
                    </div>
                  </div>

                  {/* Animated Live Telemetry Wave */}
                  <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                        <span className="text-xs font-bold text-slate-800">
                          {activeData.highlight}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-500 font-semibold">Live Telemetry</span>
                    </div>

                    <div className="relative h-20 w-full overflow-hidden rounded-xl bg-white p-2 border border-slate-200/80">
                      <svg className="h-full w-full" viewBox="0 0 500 100" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="streamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.9" />
                            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.9" />
                            <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.9" />
                          </linearGradient>
                          <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.18" />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        <motion.path
                          d="M 0 50 Q 70 20, 140 50 T 280 40 T 420 60 T 500 35 L 500 100 L 0 100 Z"
                          fill="url(#areaGrad)"
                          animate={{ d: [
                            "M 0 50 Q 70 20, 140 50 T 280 40 T 420 60 T 500 35 L 500 100 L 0 100 Z",
                            "M 0 40 Q 70 70, 140 30 T 280 60 T 420 30 T 500 45 L 500 100 L 0 100 Z",
                            "M 0 50 Q 70 20, 140 50 T 280 40 T 420 60 T 500 35 L 500 100 L 0 100 Z"
                          ] }}
                          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                        />
                        <motion.path
                          d="M 0 50 Q 70 20, 140 50 T 280 40 T 420 60 T 500 35"
                          fill="none"
                          stroke="url(#streamGrad)"
                          strokeWidth="2.5"
                          animate={{ d: [
                            "M 0 50 Q 70 20, 140 50 T 280 40 T 420 60 T 500 35",
                            "M 0 40 Q 70 70, 140 30 T 280 60 T 420 30 T 500 45",
                            "M 0 50 Q 70 20, 140 50 T 280 40 T 420 60 T 500 35"
                          ] }}
                          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                        />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
