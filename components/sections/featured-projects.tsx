'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { MagneticButton } from '@/components/magnetic-button';

const featuredCaseStudies = [
  {
    slug: 'manufacturing-erp-system',
    category: 'ERP Architecture',
    title: 'Manufacturing & Supply Chain Platform',
    client: 'Apex Industrial Systems',
    short: 'Consolidated fragmented legacy tools into a single real-time ERP.',
    impact: '-74% Inventory Discrepancies',
    tech: ['Next.js 15', 'Node.js', 'PostgreSQL', 'Redis'],
  },
  {
    slug: 'b2b-sales-crm',
    category: 'CRM & Pipeline',
    title: 'Automated B2B Revenue Engine',
    client: 'Synapse Tech Global',
    short: 'Replaced spreadsheets with a high-velocity visual deal pipeline and automated follow-ups.',
    impact: '+38% Lead Conversion',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'REST APIs'],
  },
  {
    slug: 'ecommerce-platform',
    category: 'E-Commerce Core',
    title: 'High-Volume Global Commerce Hub',
    client: 'Vanguard Retail Labs',
    short: 'Architected a headless 3-step checkout engine capable of handling holiday traffic surges.',
    impact: '0.6s Global Page Load',
    tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Edge CDN'],
  },
];

export function FeaturedProjects() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-white border-t border-slate-200">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Case Studies"
          title="Proven Client Results"
          description="Real-world enterprise systems engineered for measurable business impact."
        />

        {/* 3 Clean Case Studies Grid */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {featuredCaseStudies.map((study, idx) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:border-blue-400 hover:shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="rounded-full bg-blue-50 border border-blue-200 px-3 py-0.5 text-[11px] font-mono font-bold text-blue-700">
                    {study.category}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">{study.client}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {study.title}
                </h3>

                <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                  {study.short}
                </p>

                {/* Primary Metric Badge */}
                <div className="mt-5 rounded-2xl bg-blue-50/70 border border-blue-100 p-3 text-center">
                  <span className="text-[10px] font-mono uppercase text-slate-500 font-bold block">Validated Result</span>
                  <p className="text-base font-extrabold text-blue-700 font-mono mt-0.5">{study.impact}</p>
                </div>

                {/* Tech Chips */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {study.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-mono text-slate-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-700"
                >
                  View Blueprint
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <MagneticButton href="/projects" size="sm" variant="outline" className="border-slate-300 bg-white text-slate-800 shadow-2xs">
            Browse All Case Studies
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
