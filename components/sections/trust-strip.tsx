'use client';

import { motion } from 'framer-motion';
import {
  ShieldCheck,
  CheckCircle2,
  Zap,
  TrendingUp,
  Award,
} from 'lucide-react';

const technologiesRow1 = [
  { name: 'Next.js 15', category: 'Frontend', color: 'from-slate-700 to-slate-900' },
  { name: 'React 19', category: 'UI Core', color: 'from-cyan-500 to-blue-600' },
  { name: 'TypeScript', category: 'Type Safety', color: 'from-blue-600 to-blue-700' },
  { name: 'Node.js', category: 'Backend', color: 'from-emerald-500 to-green-600' },
  { name: 'Python / FastAPI', category: 'AI & Data', color: 'from-amber-500 to-yellow-600' },
  { name: 'PostgreSQL', category: 'Database', color: 'from-blue-600 to-indigo-600' },
  { name: 'Redis', category: 'Caching', color: 'from-red-500 to-rose-600' },
  { name: 'Docker', category: 'Containers', color: 'from-sky-500 to-blue-600' },
];

const technologiesRow2 = [
  { name: 'AWS Cloud', category: 'Infrastructure', color: 'from-amber-500 to-orange-600' },
  { name: 'Supabase', category: 'Realtime Backend', color: 'from-emerald-500 to-teal-600' },
  { name: 'Tailwind CSS', category: 'Design System', color: 'from-cyan-500 to-teal-500' },
  { name: 'OpenAI / Gemini', category: 'AI Integration', color: 'from-purple-500 to-indigo-600' },
  { name: 'Kubernetes', category: 'Orchestration', color: 'from-blue-500 to-cyan-600' },
  { name: 'GraphQL', category: 'API Layer', color: 'from-pink-500 to-rose-600' },
  { name: 'Java / Spring', category: 'Enterprise Core', color: 'from-red-500 to-amber-600' },
  { name: 'Cloudflare Workers', category: 'Edge Compute', color: 'from-orange-500 to-amber-600' },
];

const impactMetrics = [
  { value: '50+', label: 'Enterprise Deployments', icon: CheckCircle2 },
  { value: '$140M+', label: 'Client Revenue Powered', icon: TrendingUp },
  { value: '99.99%', label: 'Uptime Reliability SLA', icon: ShieldCheck },
  { value: '4.9 / 5', label: 'Average Client CSAT', icon: Award },
];

export function TrustStrip() {
  return (
    <section className="relative border-y border-slate-200 bg-slate-50/70 py-16 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Text */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-bold tracking-wider text-blue-600 uppercase">
            Proven Modern Engineering Stack
          </p>
          <h3 className="mt-2 text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">
            Built on Battle-Tested Technologies
          </h3>
        </div>

        {/* Marquee Row 1 */}
        <div className="relative w-full overflow-hidden mask-fade-edges py-2">
          <div className="animate-marquee gap-4 flex items-center">
            {[...technologiesRow1, ...technologiesRow1].map((tech, idx) => (
              <div
                key={`${tech.name}-${idx}`}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-2.5 shadow-sm transition-all hover:border-blue-300 hover:shadow-md"
              >
                <span className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${tech.color}`} />
                <span className="text-sm font-bold text-slate-800">{tech.name}</span>
                <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-mono text-slate-500 font-medium">
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Row 2 (Reverse) */}
        <div className="relative w-full overflow-hidden mask-fade-edges py-2 mt-2">
          <div className="animate-marquee-reverse gap-4 flex items-center">
            {[...technologiesRow2, ...technologiesRow2].map((tech, idx) => (
              <div
                key={`${tech.name}-${idx}`}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-2.5 shadow-sm transition-all hover:border-cyan-300 hover:shadow-md"
              >
                <span className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${tech.color}`} />
                <span className="text-sm font-bold text-slate-800">{tech.name}</span>
                <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-mono text-slate-500 font-medium">
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Bar */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 pt-10 border-t border-slate-200">
          {impactMetrics.map((metric, i) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center justify-center p-4 rounded-2xl border border-slate-200 bg-white shadow-sm text-center"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="h-4 w-4 text-blue-600" />
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-mono">
                    {metric.value}
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium">{metric.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
