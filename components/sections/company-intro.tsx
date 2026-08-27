'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  ShieldCheck,
  Zap,
  Layers,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Terminal,
  Cpu,
} from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { MagneticButton } from '@/components/magnetic-button';

const pillars = [
  {
    id: 'modular',
    title: 'Domain-Driven Architecture',
    tag: 'Clean Architecture',
    icon: Layers,
    headline: 'Modular, Decoupled Services That Never Become Spaghetti Code',
    description:
      'We structure enterprise applications around clean boundaries. Your business logic is strictly separated from presentation and third-party APIs, allowing isolated testing, effortless feature expansions, and zero regression bottlenecks.',
    highlights: [
      'Bounded Context Domain Modeling',
      'Event-Driven Webhook Pipelines',
      'Strict Type-Safe API Contracts (TypeScript/tRPC/OpenAPI)',
      'Zero Direct Database Leaks to UI Layer',
    ],
    codeSnippet: `// Domain Entity Specification
export class InventoryLedger extends AggregateRoot {
  public adjustStock(sku: SKU, quantity: number): Result<void> {
    if (this.isLocked) return Result.fail("Batch locked for audit");
    this.apply(new StockAdjustedEvent(sku, quantity));
    return Result.ok();
  }
}`,
  },
  {
    id: 'speed',
    title: 'Sub-Second Latency Core',
    tag: 'Edge Caching',
    icon: Zap,
    headline: 'Engineered for Real-Time Throughput Under Heavy Concurrent Load',
    description:
      'Using Edge SSR, connection pooling with PgBouncer, in-memory Redis clustering, and database query index analysis, we guarantee your applications load instantly across global networks.',
    highlights: [
      'Multi-Tier Redis Caching & Invalidation',
      'Composite Index Database Optimizations',
      'Edge CDN Streaming & Server Components',
      'Automated Latency Regression CI Gates',
    ],
    codeSnippet: `// High-Concurrency Cache Proxy
export async function getCachedClusterTelemetry(tenantId: string) {
  return await redis.wrap(\`telemetry:\${tenantId}\`, async () => {
    return await db.query.telemetry.findMany({
      where: eq(telemetry.tenantId, tenantId),
      orderBy: desc(telemetry.createdAt),
      limit: 100
    });
  }, { ttl: 60 });
}`,
  },
  {
    id: 'security',
    title: 'Bank-Grade Security & RBAC',
    tag: 'SOC2 Compliant',
    icon: ShieldCheck,
    headline: 'Multi-Tenant Isolation, Row-Level Security & Tamper-Proof Logs',
    description:
      'Enterprise security is woven into the foundation. We build granular Role-Based Access Control, encrypted audit trails, automated vulnerability scanning, and strict OWASP compliance from day one.',
    highlights: [
      'Row-Level Security (RLS) in PostgreSQL',
      'Encrypted Field-Level Storage (AES-256)',
      'Automated Audit Log Signatures',
      'Role & Permission Scopes per API Endpoint',
    ],
    codeSnippet: `// Granular Permission Interceptor
export const withPermission = (perm: Permission) => 
  createMiddleware(async ({ ctx, next }) => {
    const user = await ctx.auth.requireUser();
    if (!user.hasPermission(perm)) {
      throw new ForbiddenError("Insufficient Scope");
    }
    return next({ ctx: { ...ctx, user } });
  });`,
  },
  {
    id: 'ownership',
    title: '100% IP & Git Ownership',
    tag: 'Zero Lock-in',
    icon: Code2,
    headline: 'You Own Every Line of Code, Pipeline, and Infrastructure Asset',
    description:
      'We work directly in your private GitHub or GitLab repository. Full ownership of source code, Docker configs, Terraform infrastructure scripts, and database migration histories is handed over seamlessly.',
    highlights: [
      'Direct Commits to Your Private Repos',
      'Terraform & Docker Compose Setup',
      'Automated GitHub Actions CI/CD',
      'Complete OpenAPI Documentation Included',
    ],
    codeSnippet: `# Automated Infrastructure CI
name: Enterprise Production Deploy
on:
  push:
    branches: [main]
jobs:
  verify-and-ship:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm run test:e2e
      - run: docker build -t registry.intouchglobaltech.com/core:latest .
      - run: terraform apply -auto-approve`,
  },
];

export function CompanyIntro() {
  const [activePillar, setActivePillar] = useState('modular');
  const activeData = pillars.find((p) => p.id === activePillar) || pillars[0];
  const ActiveIcon = activeData.icon;

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-white border-t border-slate-200">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-blue-500/8 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="The Engineering Blueprint"
          title="Architectural Rigor Behind Every System We Ship"
          description="We do not build disposable software. Every line of code is structured for enterprise scalability, sub-second latency, and long-term maintainability."
        />

        {/* 4 Interactive Tab Selector Buttons */}
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isSelected = activePillar === pillar.id;

            return (
              <motion.button
                key={pillar.id}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActivePillar(pillar.id)}
                className={`relative flex flex-col items-start rounded-2xl p-5 text-left transition-all duration-300 border ${
                  isSelected
                    ? 'border-blue-600 bg-blue-50/70 shadow-md ring-1 ring-blue-500/30'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 shadow-2xs'
                }`}
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                    isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="mt-3 text-sm font-bold text-slate-900">{pillar.title}</h4>
                <span className="mt-1 text-[11px] font-mono text-slate-500">{pillar.tag}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Detailed Interactive Blueprint Display */}
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePillar}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid gap-10 lg:grid-cols-12 items-center"
            >
              {/* Left Column: Specifications & Feature Checklist */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                    <ActiveIcon className="h-4 w-4" />
                  </div>
                  <span className="rounded-full bg-blue-100/70 px-3 py-1 text-xs font-mono font-bold text-blue-800">
                    {activeData.tag}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  {activeData.headline}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {activeData.description}
                </p>

                <div className="space-y-2.5 border-t border-slate-100 pt-6">
                  {activeData.highlights.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                      <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                      <span className="font-semibold">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <MagneticButton href="/contact" size="sm" className="bg-blue-600 text-white hover:bg-blue-700 shadow-md">
                    Schedule Architecture Scoping
                    <ArrowRight className="ml-2 h-3.5 w-3.5" />
                  </MagneticButton>
                </div>
              </div>

              {/* Right Column: Interactive Code Architecture Console */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 shadow-2xl text-left overflow-hidden">
                  {/* Console Header */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 ml-2 flex items-center gap-1">
                        <Terminal className="h-3 w-3 text-cyan-400" />
                        architecture/{activePillar}.ts
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold">● STRICT TYPE-SAFE</span>
                  </div>

                  {/* Code Pre Block */}
                  <pre className="font-mono text-xs text-slate-200 leading-relaxed overflow-x-auto p-1">
                    <code>{activeData.codeSnippet}</code>
                  </pre>

                  {/* Verification Banner */}
                  <div className="mt-4 rounded-xl bg-slate-900 border border-slate-800 p-3 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-blue-400">
                      <Cpu className="h-3.5 w-3.5" />
                      Static Analysis: 0 Warnings
                    </span>
                    <span className="text-emerald-400">100% Test Coverage</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
