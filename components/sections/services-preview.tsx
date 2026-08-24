'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  Users,
  Globe,
  Smartphone,
  Code2,
  BrainCircuit,
  CheckCircle2,
} from 'lucide-react';
import { services } from '@/lib/site-config';
import { SectionHeading } from '@/components/section-heading';
import { MagneticButton } from '@/components/magnetic-button';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Users,
  Globe,
  Smartphone,
  Code2,
  BrainCircuit,
};

const serviceTags: Record<string, string> = {
  'erp-development': 'Enterprise Core',
  'crm-development': 'Revenue Growth',
  'website-development': 'Edge Performance',
  'mobile-app-development': 'iOS & Android',
  'custom-software': 'Custom Logic',
  'ai-integration': 'Intelligent RAG',
};

export function ServicesPreview() {
  const displayServices = services.slice(0, 6);

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-slate-50/70 border-t border-slate-200">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="What We Engineer"
          title="Enterprise Systems Built for Growth"
          description="Tailored software systems engineered for reliability, sub-second speed, and scalable workflows."
        />

        {/* 6 Luminous Bento Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayServices.map((service, i) => {
            const Icon = iconMap[service.icon] || Code2;
            const tag = serviceTags[service.slug] || 'Custom Solution';

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: (i % 3) * 0.08, duration: 0.4 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <Link
                  href={service.hasPage ? `/services/${service.slug}` : '/services'}
                  className="flex h-full flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:border-blue-400 hover:shadow-xl group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 shadow-2xs transition-colors group-hover:bg-blue-600 group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="rounded-full bg-slate-100 border border-slate-200 px-2.5 py-0.5 text-[10px] font-mono text-slate-700 font-bold">
                        {tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      {service.short}
                    </p>

                    <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                      {service.features.slice(0, 3).map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-bold text-blue-600 group-hover:text-blue-700">
                    <span>Explore Specifications</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <MagneticButton href="/services" variant="outline" size="sm" className="border-slate-300 bg-white text-slate-800 shadow-2xs">
            View All Services
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
