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
  Film,
  Video,
  MonitorPlay,
  Camera,
  Star,
  Layout,
  MessageSquare,
  Mail,
  CheckCircle2,
  Sparkles,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react';
import { type Project, projects } from '@/lib/site-config';

export function PortfolioWebsiteDetailExperience({ project }: { project: Project }) {
  const currentIndex = projects.findIndex(
    (p) => p.slug === project.slug || p.slug === 'portfolio-website'
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
      title: 'Creative Portfolio',
      description: 'A visually engaging portfolio showcasing the client\'s production and advertising work.',
      icon: Layout,
    },
    {
      title: 'Advertising Showcase',
      description: 'Dedicated presentation of promotional work created for brands and businesses.',
      icon: Star,
    },
    {
      title: 'Reel & Video Projects',
      description: 'A dynamic way to present reels and video-based creative projects.',
      icon: MonitorPlay,
    },
    {
      title: 'Film Production Portfolio',
      description: 'Showcase of film-production and visual storytelling work.',
      icon: Film,
    },
    {
      title: 'Brand Advertisement Shoots',
      description: 'Portfolio presentation for commercial shoots, including bakery, fashion and other brand campaigns.',
      icon: Camera,
    },
    {
      title: 'Trendy Website Experience',
      description: 'A modern, responsive interface designed to reflect the client\'s creative identity and production style.',
      icon: Video,
    },
    {
      title: 'WhatsApp Integration',
      description: 'Direct WhatsApp connection allowing potential clients to quickly enquire about projects and services.',
      icon: MessageSquare,
    },
    {
      title: 'Email Enquiries',
      description: 'Integrated email contact for professional project enquiries and business communication.',
      icon: Mail,
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 select-none">
      
      {/* 1. HERO HEADER */}
      <header className="pt-32 pb-14 sm:pt-40 sm:pb-18 border-b border-slate-200/80 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-slate-100/80 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-[1084px] px-4 sm:px-6 lg:px-8 space-y-8 text-left relative z-10">
          
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
                Media, Advertising & Film Production
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
                Creative Portfolio & Production Showcase
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-tight mt-1">
                Portfolio Website
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.08 }}
              className="text-xl sm:text-2xl font-black text-blue-700 font-sans tracking-tight"
            >
              Turning Creative Work Into New Opportunities.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.12 }}
              className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium max-w-3xl pt-1"
            >
              The client works in creative advertising and visual production, creating reels, promotional videos, film-production content and advertisement shoots for different businesses.
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
                  Sirpy
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block tracking-wider">
                  Business
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-900 mt-0.5 block">
                  Creative Portfolio
                </span>
              </div>

              <div className="sm:-translate-x-[50px]">
                <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block tracking-wider">
                  Industry
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-900 mt-0.5 block">
                  Media & Film
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block tracking-wider">
                  Services Provided
                </span>
                <span className="text-xs sm:text-sm font-bold text-blue-700 mt-0.5 block">
                  Website Design & Development
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
                    <span>View Website</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold text-xs transition-all cursor-pointer shadow-2xs"
                >
                  <span>Build Your Web Platform</span>
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
              <div className="px-4 py-0.5 rounded-md bg-white border border-slate-200 text-[10px] font-mono font-semibold text-slate-500">
                portfolio-website / creative-production-experience
              </div>
              <div className="text-[10px] font-mono text-slate-400 font-bold">
                Creative Portfolio
              </div>
            </div>

            <div
              onClick={() => setLightboxImage({ src: '/images/portfolio-website/hero.png', caption: 'Zero 19 Creatives — Brand Communications & Production House' })}
              className="relative aspect-video w-full overflow-hidden rounded-b-2xl cursor-pointer bg-slate-950 flex items-center justify-center"
            >
              <Image 
                src="/images/portfolio-website/hero.png" 
                alt="Zero 19 Creatives Portfolio — Meet Sirpy" 
                fill 
                className="object-contain transition-transform duration-500 group-hover:scale-[1.02]" 
              />
              <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white backdrop-blur-[2px]">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 text-slate-900 text-xs font-bold shadow-lg">
                  <Maximize2 className="h-3.5 w-3.5 text-blue-600" />
                  <span>Click to Expand Full Preview</span>
                </div>
              </div>
            </div>

            <div className="pt-3 px-2 flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-slate-700">Zero 19 Creatives — Brand Communications & Production House</span>
              <span className="text-[11px] font-mono">Creative Portfolio & Media Production</span>
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

          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            <p>
              The client works in creative advertising and visual production, creating reels, promotional videos, film-production content and advertisement shoots for different businesses.
            </p>
            <p>
              With a growing portfolio of creative work, the client needed a modern and trendy website to showcase previous projects professionally and give potential clients an easy way to explore the work and get in touch.
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
            
            <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              <p>
                We created a modern, visually driven portfolio website designed around the client's creative work.
              </p>
              <p>
                The website brings together advertising campaigns, reels, film-production work and brand shoots into a strong digital portfolio, while providing direct WhatsApp and email contact options so potential clients can easily start an enquiry.
              </p>
            </div>
          </div>
          
        </div>
      </section>

      {/* 5. WHAT WE DELIVERED */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/50 p-6 shadow-xs hover:border-blue-300 hover:shadow-md transition-all space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="h-10 w-10 rounded-xl bg-blue-50 border border-blue-200/70 flex items-center justify-center text-blue-600">
                      <IconComp className="h-5 w-5" />
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
                    <span>Implemented</span>
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
          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            <p>
              The website transformed the client's creative work into a professional digital portfolio that works as a business-development tool.
            </p>
            <p>
              Potential clients can now explore previous advertising and production projects, understand the quality and style of the work, and connect directly through WhatsApp or email.
            </p>
            <p>
              The client also shared that after the website was created, they received more clients, helping the portfolio become more than just a showcase—it became a channel for new business opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* 7. THE OUTCOME */}
      <section className="py-20 bg-gradient-to-b from-[#0A1628] to-[#0D1F3C] text-white text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/15 blur-[120px] pointer-events-none rounded-full" />

        <div className="mx-auto max-w-[956px] px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
          <div className="space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 block">
              Delivered Result
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              The Outcome
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              The result is a trendy, conversion-focused creative portfolio website that presents the client's work professionally and makes it easier for new clients to discover and connect with the business.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              From reels and film production to commercial brand shoots, the website gives every project a strong digital presence.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-1">
              <span className="text-cyan-400 text-lg">✨</span>
              <p className="text-xs sm:text-sm font-bold text-white leading-tight">
                Create.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-1">
              <span className="text-cyan-400 text-lg">🖼️</span>
              <p className="text-xs sm:text-sm font-bold text-white leading-tight">
                Showcase.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-1">
              <span className="text-cyan-400 text-lg">🤝</span>
              <p className="text-xs sm:text-sm font-bold text-white leading-tight">
                Connect.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-1">
              <span className="text-cyan-400 text-lg">🚀</span>
              <p className="text-xs sm:text-sm font-bold text-white leading-tight">
                Turn creative work into new opportunities.
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
                <span>Explore Platform Live</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            )}

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm transition-all cursor-pointer"
            >
              <span>Build Your Platform</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. PREVIOUS / NEXT PAGER */}
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-[1084px] px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
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

      {/* LIGHTBOX PREVIEW MODAL */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-slate-950/85 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl space-y-3 p-3 sm:p-4 cursor-default"
            >
              <div className="flex items-center justify-between px-2 pt-1 text-white">
                <span className="text-xs sm:text-sm font-semibold text-slate-300">
                  {lightboxImage.caption}
                </span>
                <button
                  type="button"
                  onClick={() => setLightboxImage(null)}
                  className="p-1.5 sm:p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Close Preview"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="relative w-full h-[60vh] sm:h-[75vh] md:h-[80vh] overflow-hidden rounded-2xl bg-slate-950 flex items-center justify-center">
                <Image
                  src={lightboxImage.src}
                  alt={lightboxImage.caption}
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
