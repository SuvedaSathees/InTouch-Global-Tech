'use client';

import { motion } from 'framer-motion';
import { SectionHeading, AnimatedCounter } from '@/components/section-heading';
import { Layers, Users, Zap, Award } from 'lucide-react';

const stats = [
  { value: 50, suffix: '+', label: 'Enterprise Systems Delivered', desc: 'Custom ERPs, CRMs & Platforms', icon: Layers },
  { value: 99, suffix: '.99%', label: 'Infrastructure Uptime SLA', desc: 'Fault-tolerant multi-region cluster', icon: Zap },
  { value: 1000, suffix: ' Cr+', prefix: '₹', label: 'Client Revenue Powered', desc: 'Processed through custom platforms', icon: Award },
  { value: 98, suffix: '%', label: 'Client Retention & Expansion', desc: 'Long-term engineering partnerships', icon: Users },
];

export function StatsSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-slate-50/70 border-t border-slate-200">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Track Record"
          title="Measured by Business Impact & Architectural Resilience"
          description="We take pride in building software systems that operate reliably under heavy load and generate real commercial value."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="group relative rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:border-blue-400 hover:shadow-2xl"
              >
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.15 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-2xs"
                >
                  <Icon className="h-5 w-5" />
                </motion.div>
                <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 font-mono">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                <h4 className="mt-3 text-base font-bold text-slate-900">{stat.label}</h4>
                <p className="mt-1 text-xs text-slate-500">{stat.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
