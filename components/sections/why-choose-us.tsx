'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Users2,
  Zap,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { MagneticButton } from '@/components/magnetic-button';

const reasons = [
  {
    icon: Code2,
    title: '100% IP & Code Ownership',
    description: 'You own all git repositories, database schemas, deployment pipelines, and IP. Zero vendor lock-in.',
  },
  {
    icon: Users2,
    title: 'Senior-Only Engineering',
    description: 'Work directly with seasoned software architects and lead developers. No junior handoffs.',
  },
  {
    icon: Zap,
    title: 'Sub-Second Performance',
    description: 'Engineered with Redis caching, index optimization, and edge SSR for instant responses.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Security by Default',
    description: 'Built-in RBAC permissions, audit logs, data encryption, and SOC2 compliant architectures.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-slate-50/70 border-t border-slate-200">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Why Nexora"
          title="Engineered for Predictability & Longevity"
          description="We build scalable digital assets designed to increase enterprise value and streamline operations."
        />

        {/* 4 Clean Bento Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm hover:border-blue-400 hover:shadow-xl transition-all"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 mb-4">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="text-base font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
