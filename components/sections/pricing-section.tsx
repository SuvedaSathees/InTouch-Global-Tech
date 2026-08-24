'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { MagneticButton } from '@/components/magnetic-button';

const engagementTiers = [
  {
    type: 'Web & Digital Platforms',
    badge: 'Fast Launch',
    highlighted: false,
    description: 'Bespoke corporate websites, landing engines, and custom client portals.',
    features: [
      'Custom Responsive UI/UX Design',
      'Next.js 15 Edge SSR Performance',
      'CMS & Content Architecture',
      'Core Web Vitals 95+ Guarantee',
      '30-Day Post-Launch Warranty',
    ],
    cta: 'Get Project Scope',
  },
  {
    type: 'Enterprise ERP & CRM Core',
    badge: '⚡ Most Popular',
    highlighted: true,
    description: 'Full-featured enterprise resource planning, bespoke CRMs, and business automation.',
    features: [
      'Data Schema & Architecture Design',
      'Multi-Role Permissions & RBAC',
      'Inventory, Sales & Finance Modules',
      'Third-Party API & Webhook Sync',
      '90-Day SLA & Dedicated Support Pod',
    ],
    cta: 'Book Scoping Call',
  },
  {
    type: 'Dedicated Engineering Pod',
    badge: 'Continuous Scale',
    highlighted: false,
    description: 'Senior software architects, full-stack engineers, and QA embedded into your team.',
    features: [
      'Senior Full-Stack Engineers',
      'Bi-Weekly Agile Sprints',
      'Automated CI/CD & Test Coverage',
      'Direct Slack Channel Access',
      'Flexible Month-to-Month Allocation',
    ],
    cta: 'Hire Engineering Pod',
  },
];

export function PricingSection() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-slate-50/70 border-t border-slate-200">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Engagement Models"
          title="Predictable, Milestone-Based Pricing"
          description="Fixed-scope project budgets or dedicated engineering pods. Zero surprise overages."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3 items-stretch">
          {engagementTiers.map((tier, i) => (
            <motion.div
              key={tier.type}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`relative flex flex-col justify-between rounded-3xl p-7 transition-all ${
                tier.highlighted
                  ? 'border-2 border-blue-600 bg-white shadow-xl lg:-translate-y-2'
                  : 'border border-slate-200/90 bg-white shadow-sm'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3 py-0.5 text-[10px] font-bold text-white shadow-sm">
                  {tier.badge}
                </div>
              )}

              <div>
                {!tier.highlighted && (
                  <span className="rounded-full bg-slate-100 border border-slate-200 px-2.5 py-0.5 text-[10px] font-mono text-slate-700 font-bold inline-block mb-3">
                    {tier.badge}
                  </span>
                )}

                <h3 className="text-xl font-bold text-slate-900">{tier.type}</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">{tier.description}</p>

                {/* Features List */}
                <div className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
                  {tier.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <Check className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-7 pt-5 border-t border-slate-100">
                <MagneticButton
                  href="/contact"
                  variant={tier.highlighted ? 'default' : 'outline'}
                  size="default"
                  className={
                    tier.highlighted
                      ? 'w-full bg-blue-600 text-white hover:bg-blue-700 shadow-md text-xs py-2.5'
                      : 'w-full border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs py-2.5'
                  }
                >
                  {tier.cta}
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </MagneticButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
