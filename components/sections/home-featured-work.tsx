'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  Globe,
  Building2,
  Layers,
  Sparkles,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';
import { MagneticButton } from '@/components/magnetic-button';

const caseStudies = [
  {
    id: 'manufacturing-erp',
    slug: 'manufacturing-erp-system',
    title: 'Manufacturing & Global Supply Chain ERP',
    client: 'Apex Logistics Global',
    industry: 'Industrial Supply Chain',
    icon: Building2,
    gradient: 'from-blue-600 to-indigo-600',
    tagline: 'Multi-warehouse inventory synchronization, automated BOM tracking, and direct supplier APIs.',
    metrics: [
      { label: 'Inventory Errors', value: '-74%', change: 'Discrepancy drop' },
      { label: 'Order Velocity', value: '4.2x', change: 'Faster fulfillment' },
      { label: 'Annual Savings', value: '₹1.8 Cr', change: 'Operational cost' },
    ],
    tech: ['Next.js 15', 'Node.js', 'PostgreSQL ACID', 'Redis Cluster', 'Docker'],
    architecture: 'PostgreSQL ACID Ledger → Redis In-Memory Cache → Multi-Region Edge',
  },
  {
    id: 'sales-crm',
    slug: 'b2b-sales-crm',
    title: 'Automated B2B Revenue & CRM Engine',
    client: 'HyperScale Systems',
    industry: 'Enterprise Software',
    icon: Layers,
    gradient: 'from-indigo-600 to-purple-600',
    tagline: 'High-velocity visual deal pipeline, automated webhook triggers, and direct WhatsApp lead routing.',
    metrics: [
      { label: 'Lead Conversion', value: '+38%', change: 'Win rate increase' },
      { label: 'Pipeline Speed', value: '2.5x', change: 'Sales cycle velocity' },
      { label: 'Sync Latency', value: '< 20ms', change: 'Real-time updates' },
    ],
    tech: ['Next.js', 'TypeScript', 'Prisma ORM', 'FastAPI', 'PostgreSQL'],
    architecture: 'Event-Driven Webhook Queue → PostgreSQL Pool → WebSockets Live Sync',
  },
  {
    id: 'ecommerce-hub',
    slug: 'ecommerce-platform',
    title: 'High-Volume Direct-to-Consumer Commerce Hub',
    client: 'Luxe Brands Group',
    industry: 'Retail & Commerce',
    icon: Globe,
    gradient: 'from-cyan-500 to-blue-600',
    tagline: 'Headless 3-step checkout engine engineered for flash sales and zero server degradation during peak surges.',
    metrics: [
      { label: 'Global TTFB', value: '0.4s', change: 'Edge cached' },
      { label: 'Peak Capacity', value: '100k+', change: 'Concurrent users' },
      { label: 'Cart Abandonment', value: '-28%', change: 'Checkout boost' },
    ],
    tech: ['Next.js SSR', 'Stripe Global', 'Cloudflare CDN', 'Tailwind', 'Redis'],
    architecture: 'Headless Edge Edge SSR → Stripe Webhooks → Auto-Scaling Kubernetes',
  },
  {
    id: 'ai-automation',
    slug: 'ai-integration',
    title: 'Intelligent Autonomous Document & RAG Engine',
    client: 'MedTech Diagnostics',
    industry: 'Healthcare & AI',
    icon: Sparkles,
    gradient: 'from-emerald-500 to-teal-600',
    tagline: 'HIPAA-compliant document parsing, automated OCR tabular extraction, and vector neural query engine.',
    metrics: [
      { label: 'Processing Speed', value: '88%', change: 'Time saved' },
      { label: 'Model Accuracy', value: '99.4%', change: 'Verified extraction' },
      { label: 'Data Security', value: '100%', change: 'On-prem isolated' },
    ],
    tech: ['PyTorch', 'LangChain', 'FastAPI', 'Pinecone', 'Docker'],
    architecture: 'OCR Ingestion Pipeline → Embedding Model → Isolated Vector Database',
  },
];

export function HomeFeaturedWork() {
  const [selectedId, setSelectedId] = useState(caseStudies[0].id);

  const activeProject =
    caseStudies.find((item) => item.id === selectedId) || caseStudies[0];
  const Icon = activeProject.icon;

  return (
    <section className="relative overflow-hidden bg-slate-50/60 text-slate-900 py-24 sm:py-32 select-none border-t border-slate-200">
      {/* Precision Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Left-Aligned Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-16">
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-4">
              <span className="w-5 h-[2px] bg-blue-600 rounded-full" />
              <span>OUR PRODUCTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 leading-[1.12]">
              Software Built for Growing Businesses.
            </h2>
          </div>
          <div className="max-w-md text-left">
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Explore custom systems engineered for enterprise clients across logistics, SaaS, retail, and healthcare.
            </p>
          </div>
        </div>

        {/* Cinematic Master Split Layout: Featured Project Spotlight + Interactive Case Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          
          {/* LEFT 7-COL: CINEMATIC CASE STUDY SPOTLIGHT */}
          <div className="lg:col-span-7 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="flex-1 flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-[0_16px_40px_rgba(0,0,0,0.04)] text-left"
              >
                <div>
                  {/* Industry & Client Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-blue-50 border border-blue-200/80 px-3 py-1 text-xs font-bold text-blue-700 uppercase tracking-wider">
                        {activeProject.industry}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">
                        • {activeProject.client}
                      </span>
                    </div>

                    <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      In Active Production
                    </span>
                  </div>

                  {/* Main Project Title & Tagline */}
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight leading-snug">
                    {activeProject.title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {activeProject.tagline}
                  </p>

                  {/* 3 Large Validated Metric Cards */}
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    {activeProject.metrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4 text-left shadow-2xs"
                      >
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          {metric.label}
                        </div>
                        <div className="text-2xl font-black text-blue-600 mt-1">
                          {metric.value}
                        </div>
                        <div className="text-[11px] font-semibold text-slate-500 mt-0.5">
                          {metric.change}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Architectural Pipeline Spec */}
                  <div className="mt-6 rounded-2xl bg-blue-50/50 border border-blue-100 p-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800 block mb-1">
                      Production Architecture:
                    </span>
                    <span className="text-xs font-semibold text-blue-950">
                      {activeProject.architecture}
                    </span>
                  </div>
                </div>

                {/* Bottom Tech Tags & Full Case Study CTA */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="rounded-md border border-slate-200 bg-white px-2 py-1 text-[11px] font-semibold text-slate-700 shadow-2xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/projects/${activeProject.slug}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 text-xs font-bold shadow-md shadow-blue-500/20 transition-all shrink-0"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT 5-COL: INTERACTIVE CASE STUDY SELECTOR LIST */}
          <div className="lg:col-span-5 flex flex-col gap-3.5 justify-between">
            {caseStudies.map((project) => {
              const ProjectIcon = project.icon;
              const isSelected = project.id === selectedId;

              return (
                <button
                  key={project.id}
                  onClick={() => setSelectedId(project.id)}
                  className={`flex-1 flex items-start gap-4 rounded-3xl p-5 sm:p-6 text-left transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'border-2 border-blue-600 bg-white shadow-[0_12px_32px_rgba(37,99,235,0.12)] ring-4 ring-blue-500/10'
                      : 'border border-slate-200/90 bg-white/85 shadow-xs hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${
                      isSelected ? project.gradient : 'from-slate-100 to-slate-200 text-slate-700'
                    } ${isSelected ? 'text-white shadow-xs' : ''} transition-all mt-0.5`}
                  >
                    <ProjectIcon className="h-5 w-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                        {project.industry}
                      </span>
                      <span className="text-xs font-black text-slate-400">
                        {project.metrics[0].value}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-slate-950 leading-snug">
                      {project.title}
                    </h4>

                    <p className="mt-1 text-xs text-slate-500 line-clamp-1 font-normal">
                      {project.client} • {project.tech.slice(0, 3).join(', ')}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

        </div>

        {/* Bottom All Projects Button */}
        <div className="text-center">
          <MagneticButton
            href="/projects"
            size="lg"
            className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2.5 text-sm"
          >
            <span>View All Products & Projects</span>
            <ArrowRight className="h-4 w-4" />
          </MagneticButton>
        </div>

      </div>
    </section>
  );
}
