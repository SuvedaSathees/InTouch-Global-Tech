'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { services } from '@/lib/site-config';
import * as Icons from 'lucide-react';

export function ServicesGrid() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[service.icon] || Icons.Code2;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
              >
                <Link
                  href={service.hasPage ? `/services/${service.slug}` : '/contact'}
                  className="group relative flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-blue-400 hover:shadow-xl hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white shadow-sm">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="rounded-full bg-slate-100 border border-slate-200 px-2.5 py-0.5 text-[10px] font-mono text-slate-700 font-semibold">
                        {service.hasPage ? 'Deep Dive Available' : 'Custom Built'}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                      {service.short}
                    </p>

                    {service.features.length > 0 && (
                      <div className="mt-6 space-y-2 border-t border-slate-100 pt-4">
                        {service.features.slice(0, 4).map((f) => (
                          <div key={f} className="flex items-center gap-2 text-xs text-slate-600">
                            <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                            <span>{f}</span>
                          </div>
                        ))}
                        {service.features.length > 4 && (
                          <p className="text-[11px] font-mono text-blue-600 pt-1 font-semibold">
                            +{service.features.length - 4} additional enterprise modules
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                    <span>{service.hasPage ? 'Explore Architecture Specs' : 'Request Architecture Consultation'}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
