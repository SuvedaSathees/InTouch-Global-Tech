import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { siteConfig } from '@/lib/site-config';
import { ShieldCheck, Lock, FileText, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Terms of Service — ${siteConfig.name}`,
  description: `Terms of Service and Master Service Agreement for ${siteConfig.name}.`,
};

export default function TermsPage() {
  return (
    <main className="bg-[#F8FAFC] min-h-screen text-slate-900">
      <PageHeader
        label="Legal & Governance"
        title="Terms of Service"
        description="Our standard terms of service, engagement agreements, and enterprise full code ownership delivery standards."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 shadow-sm space-y-8">
            <div className="flex items-center gap-3 pb-6 border-b border-slate-100">
              <div className="h-10 w-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-950">Master Services Agreement (MSA)</h2>
                <span className="text-xs font-mono text-slate-500">Effective Date: January 1, 2026 • Version 2.4</span>
              </div>
            </div>

            <div className="space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed">
              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                  1. Scope of Custom Engineering
                </h3>
                <p>
                  {siteConfig.name} delivers specialized custom software engineering, cloud infrastructure architecture, ERP deployments, and digital products tailored to client specifications outlined in individual Statements of Work (SOW).
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                  2. 100% Code Ownership & Intellectual Property
                </h3>
                <p>
                  Upon final milestone acceptance and settlement of project invoices, 100% of custom-developed source code, database architectures, schema migrations, and documentation belong exclusively to the client with zero perpetual licensing fees.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                  3. Quality Guarantees & Warranty
                </h3>
                <p>
                  All software releases include a 90-day post-launch warranty covering defect remediation, bug fixes, and performance tuning to guarantee full compliance with agreed technical benchmarks.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                  4. Confidentiality & Non-Disclosure (NDA)
                </h3>
                <p>
                  We operate under strict mutual Non-Disclosure Agreements for all enterprise clients. Proprietary algorithms, customer data, and business logic remain strictly isolated within client-controlled private repositories and cloud infrastructures.
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Questions regarding our terms? Reach our legal team.
              </span>
              <Link
                href="/contact"
                className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
              >
                Contact Legal Operations →
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
