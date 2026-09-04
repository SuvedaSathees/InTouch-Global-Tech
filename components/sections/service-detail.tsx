'use client';

import { PageHeader } from '@/components/page-header';
import { type Service } from '@/lib/site-config';
import {
  CheckCircle2,
  ShieldCheck,
  Zap,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { MagneticButton } from '@/components/magnetic-button';

export function ServiceDetail({ service }: { service: Service }) {
  return (
    <div className="relative">
      <PageHeader
        label="Specialized Capability"
        title={service.title}
        description={service.description}
      />

      <section className="py-20 sm:py-28 relative overflow-hidden bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            {/* Left Column: Detailed Features & Modules */}
            <div className="lg:col-span-8">
              <div className="rounded-2xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-4 h-[2px] bg-blue-600 rounded-full" />
                  <span className="text-xs font-semibold font-bold uppercase tracking-wider text-blue-600">
                    Comprehensive Inclusions
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Engineered Modules & Architecture Features
                </h2>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Every deployment is built modularly with clean separation of concerns, row-level permissions, and complete audit trail capabilities.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-800"
                    >
                      <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                      <span className="font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 rounded-xl border border-blue-200 bg-blue-50/60 p-6">
                  <h4 className="text-sm font-bold text-blue-900 flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-blue-600" />
                    Our Enterprise Code & Architecture Standard
                  </h4>
                  <p className="mt-2 text-xs text-blue-800 leading-relaxed">
                    All source code is delivered in your private repository with CI/CD setup, Docker containers, database migration scripts, and comprehensive API documentation.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Key Metrics & Consultation Trigger */}
            <div className="lg:col-span-4 space-y-6">
              <div className="rounded-2xl border border-slate-200/90 bg-white p-7 shadow-sm">
                <h3 className="text-base font-bold text-slate-900 mb-4">Why Choose Custom?</h3>
                <div className="space-y-3.5 text-xs text-slate-600">
                  <div className="flex items-start gap-2.5">
                    <Zap className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">100% Fit:</strong> Zero compromises or workaround plugins.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Layers className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">Zero Per-Seat Fees:</strong> Scale to unlimited users without extra SaaS licenses.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">Complete Data Privacy & Control:</strong> Hosted securely in your private cloud.</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <MagneticButton href="/contact" size="lg" className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold hover:from-blue-700 hover:to-cyan-700">
                    Scope This Solution
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </MagneticButton>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200/90 bg-white p-6 text-center">
                <p className="text-xs font-semibold text-slate-500 font-medium">Average Delivery Timeline</p>
                <p className="text-2xl font-extrabold text-blue-600 font-semibold mt-1">4 – 8 Weeks</p>
                <p className="text-[11px] text-slate-500 mt-1">From discovery to production launch</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
