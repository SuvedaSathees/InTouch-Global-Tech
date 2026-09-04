import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { siteConfig } from '@/lib/site-config';
import { Shield, Lock, EyeOff, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Privacy Policy — ${siteConfig.name}`,
  description: `Privacy policy and enterprise data handling practices of ${siteConfig.name}.`,
};

export default function PrivacyPage() {
  return (
    <main className="bg-[#F8FAFC] min-h-screen text-slate-900">
      <PageHeader
        label="Data Privacy & Compliance"
        title="Privacy Policy"
        description="How Intouch Global Tech protects client data, ensures zero telemetry leaks, and adheres to global privacy standards."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 shadow-sm space-y-8">
            <div className="flex items-center gap-3 pb-6 border-b border-slate-100">
              <div className="h-10 w-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                <Lock className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-950">Enterprise Privacy Protocol</h2>
                <span className="text-xs font-mono text-slate-500">Last Revised: January 2026 • GDPR & ISO 27001 Aligned</span>
              </div>
            </div>

            <div className="space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed">
              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                  1. Zero Third-Party Data Selling
                </h3>
                <p>
                  {siteConfig.name} will never sell, lease, or monetize your company&apos;s data, project files, or communication logs. Your information is strictly utilized to deliver engineering and design services.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                  2. Isolated Client Environments
                </h3>
                <p>
                  All project staging environments, database seeds, and test instances are provisioned within client-specific virtual private clouds (VPC) with end-to-end encryption at rest (AES-256) and in transit (TLS 1.3).
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                  3. Contact & Inquiries Handling
                </h3>
                <p>
                  Information submitted through our project estimation forms, WhatsApp portal, or direct email is securely stored in our CRM and accessible only to assigned project managers and lead architects.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                  4. Right to Deletion & Data Portability
                </h3>
                <p>
                  Clients retain complete control over their data and may request comprehensive data exports or complete purging of development records at any time following project closure.
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Need a signed Data Processing Addendum (DPA)?
              </span>
              <Link
                href="/contact"
                className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
              >
                Request Security & Privacy DPA →
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
