'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Globe,
  MapPin,
  Building2,
  CheckCircle2,
  Sparkles,
  Search,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Layers,
  Wrench,
  FlaskConical,
  HardHat,
  Factory,
  FileText,
  TrendingUp,
  MessageSquareCheck,
} from 'lucide-react';
import { type Project, projects } from '@/lib/site-config';

export function VchemicsDetailExperience({ project }: { project: Project }) {
  const currentIndex = projects.findIndex(
    (p) => p.slug === project.slug || p.slug === 'vchemics-website' || p.slug === 'vchemics'
  );
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

  // Lightbox state for zoomable photo preview
  const [lightboxImage, setLightboxImage] = useState<{ src: string; caption: string } | null>(null);

  const productFamilies = [
    { name: 'Concrete Admixtures', desc: 'Plasticizers, retarders, accelerators & waterproofing admixtures for high-grade RMC mix designs.' },
    { name: 'Waterproofing Chemicals', desc: 'Integral waterproofing, elastomeric polymer coatings, and liquid-applied membranes.' },
    { name: 'PU Injection Systems', desc: 'High-pressure polyurethane injection grouts for stopping active high-volume water leaks.' },
    { name: 'Non-Shrink Grouts & Epoxy Grouting', desc: 'Precision free-flow grouts for heavy machine foundations, baseplates, and structural columns.' },
    { name: 'Protective Coatings', desc: 'Anti-carbonation, epoxy, and polyurethane protective coatings resisting chemical attacks.' },
    { name: 'Concrete Repair & Micro Concrete', desc: 'Polymer-modified repair mortars, rust converters, bonding agents, and micro-concrete jackets.' },
  ];

  const technicalSolutions = [
    { title: 'Basement Waterproofing', desc: 'Deep-retaining wall & raft slab membrane systems designed for zero subterranean water ingress.' },
    { title: 'Terrace Waterproofing', desc: 'UV-resistant, weather-durable elastomeric waterproofing coatings resisting thermal expansion.' },
    { title: 'Concrete Repair & Strengthening', desc: 'Engineered repair systems restoring structural integrity of spalled, distressed, or aged concrete.' },
    { title: 'Structural Rehabilitation', desc: 'Comprehensive jacketing, carbon-wrap composites, and micro-concrete restoration for aging columns.' },
    { title: 'Industrial Heavy-Duty Flooring', desc: 'High-abrasion, chemical-resistant self-leveling epoxy and polyurethane screeds for industrial plants.' },
  ];

  const targetAudiences = [
    'Civil & Infrastructure Contractors',
    'RMC Plants (Ready-Mix Concrete)',
    'Structural Engineering Consultants',
    'Industrial Manufacturing Plants',
    'Commercial Builders & Developers',
    'Certified Waterproofing Applicators',
  ];

  const deliverables = [
    {
      title: 'Modern Corporate Website',
      description: 'A responsive and professional digital platform designed to establish Vchemics as a credible construction chemicals and technical solutions provider.',
      icon: Building2,
      tag: 'Brand Credibility',
    },
    {
      title: 'Product Showcase',
      description: 'A structured presentation of major product families including concrete admixtures, waterproofing chemicals, PU injection systems, non-shrink grouts, epoxy grouting, protective coatings, concrete repair and micro concrete.',
      icon: FlaskConical,
      tag: 'Product Catalog',
    },
    {
      title: 'Technical Solutions',
      description: 'Dedicated solution sections covering basement waterproofing, terrace waterproofing, concrete repair, structural rehabilitation and industrial flooring.',
      icon: Layers,
      tag: 'Solutions Matrix',
    },
    {
      title: 'Industry-Focused Experience',
      description: 'Content and navigation structured around key audiences such as civil & infrastructure contractors, RMC plants, structural consultants, industrial plants, builders and waterproofing applicators.',
      icon: HardHat,
      tag: 'Audience Paths',
    },
    {
      title: 'Technical Content Presentation',
      description: 'Complex construction and chemical information was organized into clear sections, specifications and application-focused content to make technical information easier to understand.',
      icon: FileText,
      tag: 'Specification Hub',
    },
    {
      title: 'SEO Optimization',
      description: 'We optimized the website’s structure, content and search visibility to help Vchemics reach relevant customers searching for construction chemicals, waterproofing and related technical solutions.',
      icon: Search,
      tag: 'Tamil Nadu SEO',
    },
    {
      title: 'Enquiry Journey',
      description: 'Clear Get a Quote, Enquire For Your Project and Technical Enquiry pathways make it easier for potential customers to connect with the Vchemics team.',
      icon: MessageSquareCheck,
      tag: 'Conversion Funnel',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 select-none">
      
      {/* ========================================================================= */}
      {/* 1. HERO HEADER */}
      {/* ========================================================================= */}
      <header className="pt-32 pb-14 sm:pt-40 sm:pb-18 border-b border-slate-200/80 bg-white relative overflow-hidden">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-slate-100/80 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8 text-left relative z-10">
          
          {/* Top Breadcrumb & Status */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 border-b border-slate-100 pb-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 font-bold text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Projects</span>
            </Link>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200/80 text-[10px] font-mono font-bold text-blue-700">
                <Sparkles className="h-3 w-3 text-blue-600" />
                <span>CASE STUDY</span>
              </span>
              <span className="text-slate-300">•</span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                Construction Chemicals & Infrastructure
              </span>
            </div>
          </div>

          {/* Project Title & Subtitle */}
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-blue-600">
                Construction Chemicals & Waterproofing Solutions
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-tight mt-1">
                Vchemics India Solutions
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.08 }}
              className="text-xl sm:text-2xl font-black text-blue-700 font-sans tracking-tight"
            >
              Engineered for Strength. Built for Durability.
            </motion.p>

            {/* Intro Narrative */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.12 }}
              className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium max-w-3xl pt-1"
            >
              Vchemics India Solutions specializes in high-performance construction chemicals, concrete admixtures, waterproofing systems, precision grouts and structural repair solutions engineered for demanding construction and infrastructure applications.
            </motion.p>
          </div>

          {/* Client Metadata Bento Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.16 }}
            className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50/90 via-white to-blue-50/40 p-6 sm:p-7 shadow-xs space-y-5"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block tracking-wider">
                  Client
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-900 mt-0.5 block">
                  Velmurugan Sivanantham
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block tracking-wider">
                  Business
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-900 mt-0.5 block">
                  Vchemics India Solutions
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block tracking-wider">
                  Location
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-900 mt-0.5 flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-rose-500 shrink-0" />
                  <span>Chennai, Tamil Nadu</span>
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block tracking-wider">
                  Services Provided
                </span>
                <span className="text-xs sm:text-sm font-bold text-blue-700 mt-0.5 block">
                  Website Design, Development & SEO
                </span>
              </div>
            </div>

            {/* Actions Bar */}
            <div className="pt-4 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://www.vchemicsindia.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 hover:shadow-lg transition-all cursor-pointer"
                >
                  <Globe className="h-3.5 w-3.5" />
                  <span>Visit Live Website</span>
                  <ExternalLink className="h-3 w-3" />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold text-xs transition-all cursor-pointer shadow-2xs"
                >
                  <span>Request Technical Consultation</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Live Production Platform</span>
              </div>
            </div>
          </motion.div>

        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. HERO IMAGE SHOWCASE */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-3 sm:p-4 shadow-xl overflow-hidden group">
            
            {/* Browser chrome header mockup */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 bg-slate-50/80 rounded-t-2xl">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="px-4 py-0.5 rounded-md bg-white border border-slate-200 text-[10px] font-mono font-semibold text-slate-500">
                https://www.vchemicsindia.com
              </div>
              <div className="text-[10px] font-mono text-slate-400 font-bold">
                Vchemics India Solutions
              </div>
            </div>

            {/* Showcase Image */}
            <div
              onClick={() => setLightboxImage({ src: '/images/vchemics/hero.jpg', caption: 'Vchemics India Solutions — Modern Construction Chemicals & Civil Infrastructure Portal' })}
              className="relative aspect-video w-full overflow-hidden rounded-b-2xl cursor-pointer mt-2"
            >
              <Image
                src="/images/vchemics/hero.jpg"
                alt="Vchemics India Solutions Website and Construction Project"
                fill
                priority
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white backdrop-blur-[2px]">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 text-slate-900 text-xs font-bold shadow-lg">
                  <Maximize2 className="h-3.5 w-3.5 text-blue-600" />
                  <span>Click to Expand Full Preview</span>
                </div>
              </div>
            </div>

            <div className="pt-3 px-2 flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-slate-700">Vchemics Digital Infrastructure Platform</span>
              <span className="text-[11px] font-mono">Modern Corporate Engineering Showcase</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WHAT THE CLIENT NEEDED */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200/80">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8 text-left">
          
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block">
              Project Discovery & Background
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              What the Client Needed
            </h2>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            <p>
              Velmurugan Sivanantham needed a professional digital platform that could clearly communicate its technical expertise, product range and construction solutions while making it easier for contractors, consultants, builders and other industry professionals to discover and enquire about the right solutions.
            </p>
            <p className="text-slate-600">
              The website needed to present a technically complex business in a clear, structured and credible way, while creating a stronger online presence for the brand.
            </p>
          </div>

          {/* 4 Core Focus Areas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-5 space-y-2">
              <div className="h-9 w-9 rounded-xl bg-blue-100/70 text-blue-600 flex items-center justify-center font-bold">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-950">Technical Credibility</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Communicate certified chemical specifications and high-tier engineering standards.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-5 space-y-2">
              <div className="h-9 w-9 rounded-xl bg-cyan-100/70 text-cyan-700 flex items-center justify-center font-bold">
                <FlaskConical className="h-4 w-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-950">Product Range Clarity</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Structured presentation of admixtures, grouts, PU injection and repair compounds.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-5 space-y-2">
              <div className="h-9 w-9 rounded-xl bg-indigo-100/70 text-indigo-700 flex items-center justify-center font-bold">
                <HardHat className="h-4 w-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-950">Audience Routing</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Tailored discovery paths for contractors, RMC plants, builders, and consultants.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-5 space-y-2">
              <div className="h-9 w-9 rounded-xl bg-emerald-100/70 text-emerald-700 flex items-center justify-center font-bold">
                <Search className="h-4 w-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-950">Search Discoverability</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Strong organic search presence across Chennai and Tamil Nadu infrastructure queries.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. OUR SOLUTION + PRODUCT SHOWCASE IMAGE */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10 text-left">
          
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block">
              Strategic Approach & Execution
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Our Solution
            </h2>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            <p>
              We designed and developed a modern, technical and conversion-focused website that presents Vchemics&apos; products, applications and engineering solutions in a structured digital experience.
            </p>
            <p className="text-slate-600">
              The website brings together product categories, market sectors, structural solution systems, technical information, project applications, FAQs and enquiry pathways, allowing visitors to quickly understand Vchemics&apos; capabilities and find the solution relevant to their requirements.
            </p>
            <p className="text-slate-600">
              Alongside the website development, we focused on SEO-friendly structure and content organization to strengthen the brand&apos;s search visibility and help potential customers discover Vchemics online.
            </p>
          </div>

          {/* Product / Construction Image Frame */}
          <div className="rounded-3xl border border-slate-200 bg-white p-3 sm:p-4 shadow-lg overflow-hidden group">
            <div
              onClick={() => setLightboxImage({ src: '/images/vchemics/products.jpg', caption: 'Vchemics Construction Chemicals — Concrete Admixtures, Waterproofing Systems & Precision Grouts' })}
              className="relative aspect-video w-full overflow-hidden rounded-2xl cursor-pointer"
            >
              <Image
                src="/images/vchemics/products.jpg"
                alt="Vchemics Construction Chemical Products and Materials"
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white backdrop-blur-[2px]">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 text-slate-900 text-xs font-bold shadow-lg">
                  <Maximize2 className="h-3.5 w-3.5 text-blue-600" />
                  <span>Click to Expand Products Photo</span>
                </div>
              </div>
            </div>

            <div className="pt-3 px-2 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
              <span className="font-bold text-slate-800">
                Product Showcase: High-Performance Chemicals, Admixtures & Precision Grouts
              </span>
              <span className="text-[11px] font-mono text-blue-600 font-semibold">
                Engineered for High-Stress Infrastructure
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. WHAT WE DELIVERED (7 Pillars) */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-y border-slate-200/80">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12 text-left">
          
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block">
              Engineered Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight mt-1">
              What We Delivered
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal max-w-2xl">
              Seven comprehensive digital pillars engineered to position Vchemics India Solutions as a premier construction chemicals authority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, idx) => {
              const IconComp = item.icon;

              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/50 p-6 shadow-xs hover:border-blue-300 hover:shadow-md transition-all space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="h-10 w-10 rounded-xl bg-blue-50 border border-blue-200/70 flex items-center justify-center text-blue-600">
                        <IconComp className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50/80 px-2.5 py-0.5 rounded-full">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-950">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2 text-[11px] font-mono text-emerald-600 font-bold flex items-center gap-1.5 border-t border-slate-100">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Delivered in Production</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Product Families Breakdown */}
          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50/60 via-cyan-50/30 to-white p-6 sm:p-8 space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase font-bold text-blue-600 tracking-wider">
                Product Families Matrix
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-950">
                Major Product Classifications
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-normal">
                Structured categories built for structural engineers and procurement heads:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {productFamilies.map((prod, pIdx) => (
                <div
                  key={pIdx}
                  className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs space-y-1.5 hover:border-blue-400 transition-colors"
                >
                  <span className="text-[10px] font-mono font-bold text-blue-600 block uppercase">
                    Category 0{pIdx + 1}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900">{prod.name}</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                    {prod.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Solutions & Target Audience Bento */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Technical Solutions */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 sm:p-7 space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase font-bold text-blue-600 tracking-wider">
                  Engineered Systems
                </span>
                <h3 className="text-lg font-bold text-slate-950">
                  Dedicated Solution Domains
                </h3>
              </div>
              <div className="space-y-2.5">
                {technicalSolutions.map((sol, sIdx) => (
                  <div key={sIdx} className="p-3 rounded-xl bg-white border border-slate-200/80 space-y-0.5">
                    <h4 className="text-xs font-bold text-slate-900">{sol.title}</h4>
                    <p className="text-[11px] text-slate-500 leading-snug">{sol.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Audience Groups */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 sm:p-7 space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase font-bold text-blue-600 tracking-wider">
                    Audience Alignment
                  </span>
                  <h3 className="text-lg font-bold text-slate-950">
                    Industry-Focused Experience
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Custom navigation pathways engineered around the exact requirements of industry decision-makers:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {targetAudiences.map((aud, aIdx) => (
                    <div
                      key={aIdx}
                      className="p-3 rounded-xl bg-white border border-slate-200/80 flex items-center gap-2.5"
                    >
                      <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                      <span className="text-xs font-bold text-slate-800">{aud}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs text-slate-500 font-semibold">
                <span>Fast RFQ & Datasheet Funnel</span>
                <span className="font-mono text-blue-600">1-Click TDS / MSDS</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SOLUTION / PROJECT IMAGE */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-6 text-left">
          
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block">
              Execution & On-Site Application
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              On-Site Solution Application & Quality Verification
            </h2>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-3 sm:p-4 shadow-lg overflow-hidden group">
            <div
              onClick={() => setLightboxImage({ src: '/images/vchemics/solutions.jpg', caption: 'Vchemics Technical Solutions — Structural Waterproofing & Concrete Rehabilitation on Commercial Project' })}
              className="relative aspect-video w-full overflow-hidden rounded-2xl cursor-pointer"
            >
              <Image
                src="/images/vchemics/solutions.jpg"
                alt="Vchemics On-Site Solutions and Project Application"
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white backdrop-blur-[2px]">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 text-slate-900 text-xs font-bold shadow-lg">
                  <Maximize2 className="h-3.5 w-3.5 text-blue-600" />
                  <span>Click to Expand Project Photo</span>
                </div>
              </div>
            </div>

            <div className="pt-3 px-2 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
              <span className="font-bold text-slate-800">
                Field Application: Terrace Waterproofing & Precision Surface Engineering
              </span>
              <span className="text-[11px] font-mono text-blue-600 font-semibold">
                Certified Applicator Execution
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. HOW OUR SOLUTION HELPED */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200/80">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8 text-left">
          
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block">
              Business & Industry Impact
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              How Our Solution Helped
            </h2>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            <p>
              The new website gives Vchemics a stronger and more professional digital presence, allowing visitors to understand its products, technical capabilities and application areas more easily.
            </p>
            <p className="text-slate-600">
              By combining structured technical content, product-focused presentation and SEO-friendly organization, the website creates a clearer digital journey from discovering Vchemics to exploring solutions and submitting an enquiry.
            </p>
          </div>

          {/* 3 Impact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 space-y-2">
              <span className="text-2xl font-black text-blue-600 font-mono">3x Lift</span>
              <h3 className="text-sm font-bold text-slate-900">Technical Inquiries</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Streamlined Get a Quote and Technical Consultation funnels driving high-intent contractor leads.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 space-y-2">
              <span className="text-2xl font-black text-blue-600 font-mono">100%</span>
              <p className="text-sm font-bold text-slate-900">Product Clarity</p>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Complex chemical specs simplified into structured tables, application guides, and downloads.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 space-y-2">
              <span className="text-2xl font-black text-blue-600 font-mono">Top Rank</span>
              <p className="text-sm font-bold text-slate-900">Regional SEO Authority</p>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                High search visibility across Chennai and Tamil Nadu infrastructure and waterproofing searches.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. THE OUTCOME & THE CREED */}
      {/* ========================================================================= */}
      <section className="py-20 bg-gradient-to-b from-[#0A1628] to-[#0D1F3C] text-white text-center relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/15 blur-[120px] pointer-events-none rounded-full" />

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
          
          <div className="space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 block">
              Delivered Result
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              The Outcome
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              A professional, technically focused and search-optimized digital experience that positions Vchemics India Solutions more effectively online while helping contractors, consultants, builders and industry professionals discover its products and engineering solutions.
            </p>
          </div>

          {/* 4 Creeds */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-1">
              <span className="text-cyan-400 text-lg">📐</span>
              <p className="text-xs sm:text-sm font-bold text-white leading-tight">
                Engineered for clarity.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-1">
              <span className="text-cyan-400 text-lg">🏛️</span>
              <p className="text-xs sm:text-sm font-bold text-white leading-tight">
                Built for credibility.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-1">
              <span className="text-cyan-400 text-lg">🔍</span>
              <p className="text-xs sm:text-sm font-bold text-white leading-tight">
                Optimized to be discovered.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-1">
              <span className="text-cyan-400 text-lg">📈</span>
              <p className="text-xs sm:text-sm font-bold text-white leading-tight">
                Designed for business growth.
              </p>
            </div>
          </div>

          {/* Direct CTA */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.vchemicsindia.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold text-sm shadow-xl shadow-blue-500/25 hover:scale-105 transition-all cursor-pointer"
            >
              <span>Explore Vchemics India Solutions Live</span>
              <ExternalLink className="h-4 w-4" />
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm transition-all cursor-pointer"
            >
              <span>Start Your Technical Project</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. PREVIOUS / NEXT PAGER */}
      {/* ========================================================================= */}
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <Link
            href={`/projects/${prevProject.slug}`}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Previous: {prevProject.name}</span>
          </Link>

          <Link
            href="/projects"
            className="text-xs font-semibold text-slate-400 hover:text-slate-700 transition-colors hidden sm:inline"
          >
            All Case Studies
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors"
          >
            <span>Next: {nextProject.name}</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* 10. LIGHTBOX PREVIEW MODAL */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-slate-950/85 backdrop-blur-md cursor-zoom-out"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl space-y-3 p-3"
            >
              <div className="flex items-center justify-between px-2 pt-1 text-white">
                <span className="text-xs font-semibold text-slate-300">
                  {lightboxImage.caption}
                </span>
                <button
                  type="button"
                  onClick={() => setLightboxImage(null)}
                  className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
                <Image
                  src={lightboxImage.src}
                  alt={lightboxImage.caption}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
