'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers,
  Sparkles,
  Zap,
  ShieldCheck,
  Database,
  Server,
  Cpu,
  CheckCircle2,
  Terminal,
  ArrowRight,
  RefreshCw,
  Globe2,
} from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { MagneticButton } from '@/components/magnetic-button';

const availableModules = [
  { id: 'erp', name: 'Multi-Tenant ERP Core', latency: '-32ms', throughput: '+40k req/s', icon: Layers, tag: 'Ledger & Inventory' },
  { id: 'ai', name: 'Neural Vector RAG & LLM', latency: '-15ms', throughput: '+12k ops/s', icon: Sparkles, tag: 'Automated Workflows' },
  { id: 'redis', name: 'In-Memory Redis Cache', latency: '-45ms', throughput: '+85k req/s', icon: Zap, tag: 'Sub-Millisecond Read' },
  { id: 'rbac', name: 'Zero-Trust RBAC & Audit', latency: '-2ms', throughput: '100% Security', icon: ShieldCheck, tag: 'SOC2 Compliant' },
  { id: 'postgres', name: 'PostgreSQL + pgvector', latency: '-18ms', throughput: '+50k qps', icon: Database, tag: 'ACID Relational' },
  { id: 'edge', name: 'Global Edge Cloudflare CDN', latency: '-60ms', throughput: 'Multi-Region', icon: Globe2, tag: '14 Edge Hubs' },
];

const stressLevels = [
  { label: 'Normal Traffic (1,000 req/s)', load: 15, nodes: 4, latency: 18 },
  { label: 'High Surge (25,000 req/s)', load: 58, nodes: 16, latency: 24 },
  { label: 'Peak Black Friday (100,000 req/s)', load: 92, nodes: 48, latency: 31 },
];

export function ArchitectureSimulator() {
  const [selectedModules, setSelectedModules] = useState<string[]>(['erp', 'redis', 'postgres', 'rbac']);
  const [stressIdx, setStressIdx] = useState(0);

  const toggleModule = (id: string) => {
    if (selectedModules.includes(id)) {
      if (selectedModules.length > 1) {
        setSelectedModules(selectedModules.filter((m) => m !== id));
      }
    } else {
      setSelectedModules([...selectedModules, id]);
    }
  };

  const currentStress = stressLevels[stressIdx];
  const activeCount = selectedModules.length;

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-white border-t border-slate-200">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-500/10 blur-[130px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Interactive System Lab"
          title="Simulate Your Custom Cloud Architecture"
          description="Select your operational modules, test simulated traffic surges, and inspect real-time topology and performance benchmarks."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-12 items-start">
          {/* Left Column: Interactive Module Selector */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                  1. Choose Architectural Modules
                </span>
                <span className="text-xs font-mono text-blue-600 font-bold">
                  {activeCount} Active
                </span>
              </div>

              <div className="space-y-2.5">
                {availableModules.map((mod) => {
                  const Icon = mod.icon;
                  const isSelected = selectedModules.includes(mod.id);
                  return (
                    <motion.button
                      key={mod.id}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => toggleModule(mod.id)}
                      className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between ${
                        isSelected
                          ? 'border-blue-500 bg-white shadow-sm ring-1 ring-blue-500/20'
                          : 'border-slate-200 bg-white/60 hover:bg-white text-slate-600'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-9 w-9 items-center justify-center rounded-xl transition-colors ${
                            isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-900 leading-tight">{mod.name}</p>
                          <p className="text-[10px] text-slate-500 font-mono mt-0.5">{mod.tag}</p>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-emerald-600 font-bold">
                        {mod.latency}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Traffic Load Stress Test Slider */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                  2. Simulate Concurrency Load
                </span>
                <span className="flex items-center gap-1 text-[11px] font-mono text-blue-600 font-bold">
                  <RefreshCw className="h-3 w-3 animate-spin" />
                  Auto-Scales
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {stressLevels.map((lvl, idx) => (
                  <button
                    key={lvl.label}
                    onClick={() => setStressIdx(idx)}
                    className={`p-2.5 rounded-xl border text-center transition-all ${
                      stressIdx === idx
                        ? 'border-blue-600 bg-blue-600 text-white font-bold shadow-sm'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100 text-xs'
                    }`}
                  >
                    <p className="text-[11px] font-mono font-bold">Stage 0{idx + 1}</p>
                    <p className="text-[9px] mt-0.5 opacity-85">
                      {idx === 0 ? '1k req/s' : idx === 1 ? '25k req/s' : '100k req/s'}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Live Simulated Architectural Dashboard */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 sm:p-8 shadow-2xl text-left overflow-hidden">
              {/* Console Top Bar */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-rose-500 inline-block" />
                    <span className="h-3 w-3 rounded-full bg-amber-500 inline-block" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-1.5 font-semibold">
                    <Terminal className="h-3.5 w-3.5 text-cyan-400" />
                    intouch-cluster-simulator://live-mesh
                  </span>
                </div>
                <span className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  AUTONOMIC STABLE
                </span>
              </div>

              {/* Dynamic Live Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3.5">
                  <span className="text-[10px] font-mono uppercase text-slate-400">Response Latency</span>
                  <p className="text-2xl font-black text-cyan-400 font-mono mt-1">
                    {currentStress.latency} ms
                  </p>
                  <span className="text-[10px] text-emerald-400 font-mono">Edge Cached</span>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3.5">
                  <span className="text-[10px] font-mono uppercase text-slate-400">Provisioned Nodes</span>
                  <p className="text-2xl font-black text-blue-400 font-mono mt-1">
                    {currentStress.nodes} Pods
                  </p>
                  <span className="text-[10px] text-slate-400 font-mono">Auto-Scaled</span>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3.5 col-span-2 sm:col-span-1">
                  <span className="text-[10px] font-mono uppercase text-slate-400">System Availability</span>
                  <p className="text-2xl font-black text-emerald-400 font-mono mt-1">
                    99.999%
                  </p>
                  <span className="text-[10px] text-slate-400 font-mono">Zero SLA Breaches</span>
                </div>
              </div>

              {/* Realtime Active Mesh Grid */}
              <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
                <p className="text-xs font-mono text-slate-400 font-bold mb-3 flex items-center gap-2">
                  <Cpu className="h-3.5 w-3.5 text-blue-400" />
                  Live Provisioned Service Mesh:
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedModules.map((modId) => {
                    const mod = availableModules.find((m) => m.id === modId);
                    if (!mod) return null;
                    return (
                      <motion.span
                        key={mod.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="inline-flex items-center gap-1.5 rounded-xl border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 text-xs font-mono text-blue-300 font-semibold"
                      >
                        <CheckCircle2 className="h-3 w-3 text-cyan-400" />
                        {mod.name}
                      </motion.span>
                    );
                  })}
                </div>
              </div>

              {/* Live Auto-Generated Architecture Config */}
              <div className="mt-6 border-t border-slate-800 pt-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-400 font-mono">
                  <span>Architecture readiness: </span>
                  <span className="text-emerald-400 font-bold">100% Production Ready</span>
                </div>
                <MagneticButton href="/contact" size="sm" className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2.5 px-4 rounded-xl">
                  Deploy This Architecture
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
