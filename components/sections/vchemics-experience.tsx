'use client';

import React, { useState, useEffect } from 'react';
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
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Layers,
  Search,
  BookOpen,
  MessageSquare,
  FlaskConical,
  Wrench,
  TrendingUp,
} from 'lucide-react';
import { type Project, projects } from '@/lib/site-config';

export function VchemicsDetailExperience({ project }: { project: Project }) {
  const currentIndex = projects.findIndex(
    (p) => p.slug === project.slug || p.slug === 'vchemics-website' || p.slug === 'vchemics'
  );
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

  const [lightboxImage, setLightboxImage] = useState<{ src: string; caption: string } | null>(null);

  useEffect(() => {
    if (!lightboxImage) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxImage(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxImage]);

  const deliverables = [
    {
      title: 'Modern Corporate Website',
      description: 'A responsive and professional digital platform designed to establish Vchemics as a credible construction chemicals and technical solutions provider.',
      icon: Building2,
    },
    {
      title: 'Product Showcase',
      description: 'A structured presentation of major product families including concrete admixtures, waterproofing chemicals, PU injection systems, non-shrink grouts, epoxy grouting, protective coatings, concrete repair and micro concrete.',
      icon: FlaskConical,
    },
    {
      title: 'Technical Solutions',
      description: 'Dedicated solution sections covering basement waterproofing, terrace waterproofing, concrete repair, structural rehabilitation and industrial flooring.',
      icon: Layers,
    },
    {
      title: 'Industry-Focused Experience',
      description: 'Content and navigation structured around key audiences such as civil & infrastructure contractors, RMC plants, structural consultants, industrial plants, builders and waterproofing applicators.',
      icon: Wrench,
    },
    {
      title: 'Technical Content Presentation',
      description: 'Complex construction and chemical information was organized into clear sections, specifications and application-focused content to make technical information easier to understand.',
      icon: BookOpen,
    },
    {
      title: 'SEO Optimization',
      description: 'We optimized the website\'s structure, content and search visibility to help Vchemics reach relevant customers searching for construction chemicals, waterproofing and related technical solutions.',
      icon: Search,
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 select-none">
      
      {/* 1. HERO HEADER */}
      <header className="pt-32 pb-14 sm:pt-40 sm:pb-18 border-b border-slate-200/80 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-slate-100/80 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-[1084px] px-4 sm:px-6 lg:px-8 space-y-8 text-left relative z-10">
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 text-xs text-slate-500 border-b border-slate-100 pb-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 font-bold text-slate-600 hover:text-blue-600 transition-colors cursor-pointer w-fit"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Projects</span>
            </Link>

            <div className="flex items-center gap-2 min-w-0">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200/80 text-[10px] font-mono font-bold text-blue-700 whitespace-nowrap shrink-0">
                <Sparkles className="h-3 w-3 text-blue-600 shrink-0" />
                <span className="whitespace-nowrap">CASE STUDY</span>
              </span>
              <span className="text-slate-300 shrink-0">•</span>
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-500 font-semibold truncate">
                Construction Chemicals & Infrastructure
              </span>
            </div>
          </div>

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

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.08 }}
              className="text-xl sm:text-2xl font-black text-blue-700 font-sans tracking-tight"
            >
              Engineered for Strength. Built for Durability.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.12 }}
              className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium max-w-3xl pt-1 text-justify sm:text-left"
            >
              Vchemics India Solutions specializes in high-performance construction chemicals, concrete admixtures, waterproofing systems, precision grouts and structural repair solutions engineered for demanding construction and infrastructure applications.
            </motion.p>
          </div>

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
                  Industry
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-900 mt-0.5 block">
                  Construction Chemicals
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

            <div className="pt-4 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 hover:shadow-lg transition-all cursor-pointer"
                  >
                    <Globe className="h-3.5 w-3.5" />
                    <span>Visit Live Website</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold text-xs transition-all cursor-pointer shadow-2xs"
                >
                  <span>Build Your Web Presence</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </header>

      {/* 2. HERO IMAGE SHOWCASE */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC]">
        <div className="mx-auto max-w-[1084px] px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-3 sm:p-4 shadow-xl overflow-hidden group">
            
            <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 bg-slate-50/80 rounded-t-2xl">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
            </div>

            <div
              onClick={() => setLightboxImage({ src: '/images/vchemics/hero.png', caption: 'Vchemics India Solutions — Construction Chemicals & Waterproofing Solutions' })}
              className="relative aspect-video w-full overflow-hidden rounded-b-2xl cursor-pointer bg-slate-100 flex items-center justify-center mt-2.5"
            >
              <Image 
                src="/images/vchemics/hero.png" 
                alt="Vchemics Construction Chemicals & Waterproofing Solutions" 
                fill 
                className="object-cover object-[center_10px] transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white backdrop-blur-[2px]">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 text-slate-900 text-xs font-bold shadow-lg">
                  <Maximize2 className="h-3.5 w-3.5 text-blue-600" />
                  <span>Click to Expand Full Preview</span>
                </div>
              </div>
            </div>

            <div className="pt-3 px-2 flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-slate-700">Vchemics Website / Construction Project</span>
              <span className="text-[11px] font-mono">Modern Corporate Website</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT THE CLIENT NEEDED */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200/80">
        <div className="mx-auto max-w-[1084px] px-4 sm:px-6 lg:px-8 space-y-8 text-left">
          
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block">
              Project Discovery & Background
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              What the Client Needed
            </h2>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal text-justify sm:text-left">
            <p>
              Velmurugan Sivanantham needed a professional digital platform that could clearly communicate its technical expertise, product range and construction solutions while making it easier for contractors, consultants, builders and other industry professionals to discover and enquire about the right solutions.
            </p>
            <p>
              The website needed to present a technically complex business in a clear, structured and credible way, while creating a stronger online presence for the brand.
            </p>
          </div>
        </div>
      </section>

      {/* 4. OUR SOLUTION + ACTIVITY IMAGES */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-[1084px] px-4 sm:px-6 lg:px-8 space-y-12 text-left">
          
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block">
                Strategic Approach & Execution
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                Our Solution
              </h2>
            </div>
            
            <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal text-justify sm:text-left">
              <p>
                We designed and developed a modern, technical and conversion-focused website that presents Vchemics' products, applications and engineering solutions in a structured digital experience.
              </p>
              <p>
                The website brings together product categories, market sectors, structural solution systems, technical information, project applications, FAQs and enquiry pathways, allowing visitors to quickly understand Vchemics' capabilities and find the solution relevant to their requirements.
              </p>
              <p>
                Alongside the website development, we focused on SEO-friendly structure and content organization to strengthen the brand's search visibility and help potential customers discover Vchemics online.
              </p>
            </div>
          </div>

          {/* Activity Image Frame 1 */}
          <div className="rounded-3xl border border-slate-200 bg-white p-3 sm:p-4 shadow-lg overflow-hidden group">
            <div
              onClick={() => setLightboxImage({ src: '/images/vchemics/products.png', caption: 'Vchemics Core Chemical Families — Admixtures, Waterproofing, Grouts & Repair' })}
              className="relative aspect-video w-full overflow-hidden rounded-2xl cursor-pointer bg-slate-100 flex items-center justify-center mt-2.5"
            >
              <Image 
                src="/images/vchemics/products.png" 
                alt="Vchemics Core Chemical Families Showcase" 
                fill 
                className="object-cover object-[center_10px] transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white backdrop-blur-[2px]">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 text-slate-900 text-xs font-bold shadow-lg">
                  <Maximize2 className="h-3.5 w-3.5 text-blue-600" />
                  <span>Click to Expand Full Preview</span>
                </div>
              </div>
            </div>

            <div className="pt-3 px-2 flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-slate-700">Vchemics Core Chemical Families Showcase</span>
              <span className="text-[11px] font-mono">Product Catalog & Systems</span>
            </div>
          </div>
          
        </div>
      </section>

      {/* 5. WHAT WE DELIVERED - 2x2 Square Boxes on Mobile */}
      <section className="py-16 sm:py-24 bg-white border-y border-slate-200/80">
        <div className="mx-auto max-w-[1084px] px-4 sm:px-6 lg:px-8 space-y-12 text-left">
          
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block">
              Core Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight mt-1">
              What We Delivered
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 min-[380px]:gap-3.5 sm:gap-6">
            {deliverables.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="aspect-square sm:aspect-auto flex flex-col justify-between p-3 min-[380px]:p-3.5 sm:p-6 rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/50 shadow-xs hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <div className="space-y-2 sm:space-y-3">
                    <div className="h-7 w-7 min-[380px]:h-8 min-[380px]:w-8 sm:h-10 sm:w-10 rounded-xl bg-blue-50 border border-blue-200/70 flex items-center justify-center text-blue-600 shrink-0">
                      <IconComp className="h-3.5 w-3.5 min-[380px]:h-4 min-[380px]:w-4 sm:h-5 sm:w-5" />
                    </div>
                    <h3 className="text-xs min-[380px]:text-sm sm:text-base font-bold text-slate-950 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[10px] min-[380px]:text-[11px] sm:text-sm text-slate-600 leading-snug sm:leading-relaxed font-normal text-justify sm:text-left line-clamp-3 sm:line-clamp-none">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-1.5 sm:pt-2 text-[10px] sm:text-[11px] font-mono text-emerald-600 font-bold flex items-center gap-1 sm:gap-1.5 border-t border-slate-100">
                    <CheckCircle2 className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
                    <span className="truncate">Implemented</span>
                  </div>
                </div>
              );
            })}
          </div>
          
        </div>
      </section>

      {/* 6. HOW OUR SOLUTION HELPED */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-[1084px] px-4 sm:px-6 lg:px-8 space-y-8 text-left">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block">
              Business & Industry Impact
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              How Our Solution Helped
            </h2>
          </div>
          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal text-justify sm:text-left">
            <p>
              The new website gives Vchemics a stronger and more professional digital presence, allowing visitors to understand its products, technical capabilities and application areas more easily.
            </p>
            <p>
              By combining structured technical content, product-focused presentation and SEO-friendly organization, the website creates a clearer digital journey from discovering Vchemics to exploring solutions and submitting an enquiry.
            </p>
          </div>
        </div>
      </section>

      {/* 7. THE OUTCOME */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-[#0A1628] to-[#0D1F3C] text-white text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/15 blur-[120px] pointer-events-none rounded-full" />

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-10 relative z-10">
          <div className="space-y-3 sm:space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 block">
              Delivered Result
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              The Outcome
            </h2>
            <p className="text-xs sm:text-base text-slate-300 leading-relaxed font-normal text-justify sm:text-center">
              A professional, technically focused and search-optimized digital experience that positions Vchemics India Solutions more effectively online while helping contractors, consultants, builders and industry professionals discover its products and engineering solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3.5 pt-1">
            <div className="flex flex-col items-center justify-center text-center py-3 px-2.5 sm:py-4 sm:px-3 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-1.5 hover:bg-white/10 hover:border-white/20 transition-all">
              <span className="text-base sm:text-lg">⚙️</span>
              <p className="text-[11px] sm:text-xs font-bold text-white leading-snug">
                Engineered for clarity.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center py-3 px-2.5 sm:py-4 sm:px-3 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-1.5 hover:bg-white/10 hover:border-white/20 transition-all">
              <span className="text-base sm:text-lg">🛡️</span>
              <p className="text-[11px] sm:text-xs font-bold text-white leading-snug">
                Built for credibility.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center py-3 px-2.5 sm:py-4 sm:px-3 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-1.5 hover:bg-white/10 hover:border-white/20 transition-all">
              <span className="text-base sm:text-lg">🔍</span>
              <p className="text-[11px] sm:text-xs font-bold text-white leading-snug">
                Optimized to be discovered.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center py-3 px-2.5 sm:py-4 sm:px-3 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-1.5 hover:bg-white/10 hover:border-white/20 transition-all">
              <span className="text-base sm:text-lg">📈</span>
              <p className="text-[11px] sm:text-xs font-bold text-white leading-snug">
                Designed for business growth.
              </p>
            </div>
          </div>

          {/* Direct CTA */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold text-sm shadow-xl shadow-blue-500/25 hover:scale-105 transition-all cursor-pointer"
              >
                <span>Explore Vchemics Live</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            )}

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm transition-all cursor-pointer"
            >
              <span>Start Your Project</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. PREVIOUS / NEXT PAGER */}
      <footer className="border-t border-slate-200/80 bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-[1084px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-4 lg:gap-6">
            {/* Previous Project Card */}
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 lg:p-5 rounded-2xl border border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
            >
              <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-700 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 shrink-0 shadow-xs group-hover:-translate-x-0.5">
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div className="min-w-0 text-left">
                <span className="text-[9px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 group-hover:text-blue-600 transition-colors block mb-0.5 sm:mb-1">
                  Previous Project
                </span>
                <span className="text-xs sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate block leading-tight">
                  {prevProject.name}
                </span>
                <span className="hidden sm:block text-xs text-slate-500 truncate mt-0.5 font-medium">
                  {prevProject.category}
                </span>
              </div>
            </Link>

            {/* Center All Projects link (desktop) */}
            <Link
              href="/projects"
              className="hidden md:inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200/90 bg-white hover:bg-slate-50 hover:border-blue-300 hover:text-blue-600 text-xs font-bold text-slate-700 transition-all shadow-xs shrink-0 group"
            >
              <svg className="h-4 w-4 text-slate-400 group-hover:text-blue-600 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
              </svg>
              <span>All Projects</span>
            </Link>

            {/* Next Project Card */}
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex items-center justify-end text-right gap-3 sm:gap-4 p-3 sm:p-4 lg:p-5 rounded-2xl border border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
            >
              <div className="min-w-0 text-right">
                <span className="text-[9px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 group-hover:text-blue-600 transition-colors block mb-0.5 sm:mb-1">
                  Next Project
                </span>
                <span className="text-xs sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate block leading-tight">
                  {nextProject.name}
                </span>
                <span className="hidden sm:block text-xs text-slate-500 truncate mt-0.5 font-medium">
                  {nextProject.category}
                </span>
              </div>
              <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-700 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 shrink-0 shadow-xs group-hover:translate-x-0.5">
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
            </Link>
          </div>
        </div>
      </footer>

      {/* LIGHTBOX PREVIEW MODAL */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-[95vw] sm:max-w-5xl max-h-[92vh] w-fit flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl p-2.5 sm:p-3.5 cursor-default"
            >
              <div className="flex items-center justify-between px-1 pb-2 text-white gap-3 shrink-0">
                <span className="text-xs sm:text-sm font-semibold text-slate-300 truncate">
                  {lightboxImage.caption}
                </span>
                <button
                  type="button"
                  onClick={() => setLightboxImage(null)}
                  className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer shrink-0 ml-auto"
                  aria-label="Close Preview"
                >
                  <X className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>

              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-slate-950 flex items-center justify-center">
                <img
                  src={lightboxImage.src}
                  alt={lightboxImage.caption}
                  className="max-h-[72vh] sm:max-h-[80vh] w-auto max-w-full object-contain rounded-xl sm:rounded-2xl block"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
