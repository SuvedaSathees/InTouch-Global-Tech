import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/site-config';
import { PageHeader } from '@/components/page-header';
import { CTASection } from '@/components/sections/cta-section';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { MagneticButton } from '@/components/magnetic-button';
import Link from 'next/link';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.name} — Case Study`,
    description: project.short,
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <>
      <PageHeader
        label={`Case Study • ${project.industry}`}
        title={project.name}
        description={project.description}
      />

      <section className="py-20 sm:py-28 relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            {/* Left Column: Challenge, Approach, Solution */}
            <div className="lg:col-span-8 space-y-8">
              {/* Challenge */}
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600">
                  The Problem & Bottlenecks
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">The Challenge</h3>
                <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Approach & Engineering Strategy */}
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
                  Engineering Strategy
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">Our Approach</h3>
                <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {project.approach}
                </p>
              </div>

              {/* Solution & Implementation */}
              <div className="rounded-2xl border border-blue-200 bg-blue-50/40 p-8 sm:p-10 shadow-sm">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700">
                  Architectural Solution
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">The Delivered System</h3>
                <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  {project.solution}
                </p>

                <div className="mt-8 border-t border-blue-200 pt-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-600 font-bold mb-4">
                    Core Technical Features Delivered:
                  </h4>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {project.keyFeatures.map((feat) => (
                      <div
                        key={feat}
                        className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-white p-3.5 text-xs text-slate-800 shadow-2xs"
                      >
                        <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                        <span className="font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 rounded-xl bg-white border border-blue-200 p-5 shadow-sm">
                  <span className="text-[11px] font-mono text-blue-700 font-bold uppercase">Business Outcome</span>
                  <p className="text-sm font-bold text-slate-900 mt-1">{project.outcome}</p>
                </div>
              </div>
            </div>

            {/* Right Column: Metadata & Tech Specs */}
            <div className="lg:col-span-4 space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="text-base font-bold text-slate-900 mb-4">Project Metadata</h3>

                <div className="space-y-4 text-xs">
                  <div>
                    <span className="text-slate-500 block font-mono">Industry</span>
                    <span className="text-slate-900 font-bold text-sm">{project.industry}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block font-mono">Category</span>
                    <span className="text-slate-900 font-bold text-sm">{project.category}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block font-mono mb-2">Technology Architecture</span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-mono text-slate-700 border border-slate-200 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <MagneticButton href="/contact" size="lg" className="w-full bg-blue-600 text-white hover:bg-blue-700">
                    Build Similar Solution
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </MagneticButton>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
                <Link
                  href="/projects"
                  className="text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                >
                  ← Back to All Case Studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Operational Bottlenecks?"
        subtitle="Schedule an architecture scoping session with our technical leads."
        buttonText="Get Started"
      />
    </>
  );
}
