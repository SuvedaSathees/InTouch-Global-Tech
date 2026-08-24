'use client';

import { motion } from 'framer-motion';
import { Quote, Star, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';

const testimonials = [
  {
    quote:
      'Nexora engineered our entire multi-facility manufacturing ERP in record time. They took the time to understand our complex inventory reconciliation workflows and eliminated 4 disconnected spreadsheets. System stability is rock solid.',
    name: 'Marcus Vance',
    role: 'Chief Operating Officer',
    company: 'Apex Industrial Systems',
    projectType: 'Enterprise ERP Platform',
    avatar: 'MV',
    rating: 5,
  },
  {
    quote:
      'The custom B2B CRM and pipeline automation that Nexora built transformed our sales velocity. Our sales team closed 38% more deals in the first quarter alone, and we have zero data drop-off. Outstanding technical partners.',
    name: 'Elena Rostova',
    role: 'VP of Global Revenue',
    company: 'Synapse Tech Global',
    projectType: 'Custom B2B CRM Engine',
    avatar: 'ER',
    rating: 5,
  },
  {
    quote:
      'Their senior engineers operate at a completely different caliber. They architected a high-concurrency commerce engine that handled our peak seasonal rush without a single millisecond of degradation. Truly world-class engineering.',
    name: 'David Thorne',
    role: 'Head of Engineering',
    company: 'Vanguard Retail Labs',
    projectType: 'High-Volume Web Platform',
    avatar: 'DT',
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-white border-t border-slate-200">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Client Endorsements"
          title="Trusted by Technical Leaders and Executives Worldwide"
          description="Hear directly from founders, COOs, and engineering directors who partnered with Nexora to build their core digital infrastructure."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-400 hover:shadow-2xl"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-amber-500" />
                    ))}
                  </div>
                  <Quote className="h-7 w-7 text-blue-200" />
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author info */}
              <div className="mt-8 border-t border-slate-100 pt-4 flex items-center gap-3.5">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-600 text-sm font-bold text-white shadow-sm cursor-default"
                >
                  {t.avatar}
                </motion.div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="text-sm font-bold text-slate-900 truncate">{t.name}</p>
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                  </div>
                  <p className="text-xs text-slate-500 truncate">
                    {t.role} • {t.company}
                  </p>
                  <p className="text-[11px] font-mono text-blue-600 font-semibold mt-0.5">{t.projectType}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
