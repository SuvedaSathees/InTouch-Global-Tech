'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Cloud, BrainCircuit, Lock, Zap } from 'lucide-react';

const trustItems = [
  { icon: Zap, label: 'FULL-STACK ENGINEERING' },
  { icon: Cloud, label: 'CLOUD READY' },
  { icon: BrainCircuit, label: 'AI ENABLED' },
  { icon: Lock, label: '100% IP OWNERSHIP' },
  { icon: ShieldCheck, label: 'PRODUCTION SUPPORT' },
];

export function HomeTrustStrip() {
  return (
    <section className="relative overflow-hidden bg-slate-50/80 border-y border-slate-200 py-7 select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 md:gap-16">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="flex items-center gap-2 text-xs font-semibold font-bold text-slate-700 hover:text-blue-600 transition-colors"
              >
                <Icon className="h-4 w-4 text-blue-600 shrink-0" />
                <span>{item.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
