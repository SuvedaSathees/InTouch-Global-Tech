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
  Navigation,
  Route,
  History,
  Compass,
  Smartphone,
  Layers,
  CheckCircle2,
  Sparkles,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react';
import { type Project, projects } from '@/lib/site-config';

export function EvMobileDetailExperience({ project }: { project: Project }) {
  const currentIndex = projects.findIndex(
    (p) => p.slug === project.slug || p.slug === 'ev-mobile-application' || p.slug === 'ev-mobile-app'
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
      title: 'EV Station Discovery',
      description: 'Users can discover EV charging stations based on their current location.',
      icon: MapPin,
    },
    {
      title: 'GPS-Based Tracking',
      description: 'Integrated GPS functionality helps users identify their location and navigate toward charging stations.',
      icon: Navigation,
    },
    {
      title: 'Charging Station Navigation',
      description: 'The application provides a convenient location-based journey from the user\'s current position to the selected EV station.',
      icon: Route,
    },
    {
      title: 'Activity History',
      description: 'User activity and previous station-related records are maintained within the application for easy reference.',
      icon: History,
    },
    {
      title: 'Location-Based Experience',
      description: 'The application uses location data to create a more relevant and personalized experience for EV users.',
      icon: Compass,
    },
    {
      title: 'User-Friendly Mobile Interface',
      description: 'A clean and intuitive mobile experience designed to make finding and accessing EV stations simple.',
      icon: Smartphone,
    },
    {
      title: 'Scalable Mobile Architecture',
      description: 'The application was developed with a structure that can support future EV-related features and services.',
      icon: Layers,
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 select-none">
      
      {/* 1. HERO HEADER */}
      <header className="pt-32 pb-14 sm:pt-40 sm:pb-18 border-b border-slate-200/80 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-slate-100/80 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8 text-left relative z-10">
          
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
                Electric Mobility & EV Technology
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
                Smart Electric Vehicle Charging Mobile Application
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-tight mt-1">
                EV Mobile Application
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.08 }}
              className="text-xl sm:text-2xl font-black text-blue-700 font-sans tracking-tight"
            >
              Find. Navigate. Charge.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.12 }}
              className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium max-w-3xl pt-1"
            >
              The application needed to provide location-based station discovery, GPS navigation and a convenient way for users to keep track of their previous charging station activity.
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
                  Sankar
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block tracking-wider">
                  Business
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-900 mt-0.5 block">
                  EV Mobile Application
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block tracking-wider">
                  Industry
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-900 mt-0.5 block">
                  Electric Mobility
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block tracking-wider">
                  Services Provided
                </span>
                <span className="text-xs sm:text-sm font-bold text-blue-700 mt-0.5 block">
                  Mobile Application Design & Development
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
                    <span>View Mobile App</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold text-xs transition-all cursor-pointer shadow-2xs"
                >
                  <span>Build Your App</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </header>

      {/* 2. HERO IMAGE SHOWCASE (Side-by-Side Left & Right Phone Mockups) */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 items-start justify-center max-w-3xl mx-auto">
            
            {/* LEFT PHONE: Autonomous Wireless EV Charging (mobile1) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl border border-slate-200 bg-white p-3 sm:p-4 shadow-xl overflow-hidden group max-w-[300px] sm:max-w-[315px] w-full mx-auto"
            >
              <div className="flex items-center justify-between pb-3 px-1 border-b border-slate-100">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-[10px] font-mono font-semibold text-slate-400 uppercase tracking-wider">
                  Screen 1 • Charging Flow
                </span>
              </div>

              <div
                onClick={() => setLightboxImage({ src: '/images/ev-mobile/mobile1.png', caption: 'EV Mobile App — Autonomous Wireless EV Charging Flow' })}
                className="relative aspect-[9/19] max-h-[560px] w-full overflow-hidden rounded-2xl cursor-pointer bg-slate-950 border border-slate-200/80 shadow-inner mt-3 group/screen mx-auto flex items-center justify-center"
              >
                <Image
                  src="/images/ev-mobile/mobile1.png"
                  alt="Autonomous Wireless EV Charging Screen"
                  fill
                  priority
                  className="object-contain transition-transform duration-500 group-hover/screen:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover/screen:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 text-slate-900 text-xs font-bold shadow-lg backdrop-blur-xs">
                    <Maximize2 className="h-3.5 w-3.5 text-blue-600" />
                    <span>Click to Expand Full Preview</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 px-1 flex items-center justify-between text-[11px] sm:text-xs text-slate-500 font-medium border-t border-slate-100 mt-3">
                <span className="font-semibold text-slate-700">Autonomous EV Charging</span>
                <span className="text-blue-600 font-semibold">Flow</span>
              </div>
            </motion.div>

            {/* RIGHT PHONE: Select Your EV & Battery Telemetry (mobile2) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-3xl border border-slate-200 bg-white p-3 sm:p-4 shadow-xl overflow-hidden group max-w-[300px] sm:max-w-[315px] w-full mx-auto"
            >
              <div className="flex items-center justify-between pb-3 px-1 border-b border-slate-100">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-[10px] font-mono font-semibold text-slate-400 uppercase tracking-wider">
                  Screen 2 • Vehicle Selection
                </span>
              </div>

              <div
                onClick={() => setLightboxImage({ src: '/images/ev-mobile/mobile2.png', caption: 'EV Mobile App — Select Your EV & Battery Telemetry' })}
                className="relative aspect-[9/19] max-h-[560px] w-full overflow-hidden rounded-2xl cursor-pointer bg-slate-950 border border-slate-200/80 shadow-inner mt-3 group/screen mx-auto flex items-center justify-center"
              >
                <Image
                  src="/images/ev-mobile/mobile2.png"
                  alt="Select Your EV Vehicle Screen"
                  fill
                  priority
                  className="object-contain transition-transform duration-500 group-hover/screen:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover/screen:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 text-slate-900 text-xs font-bold shadow-lg backdrop-blur-xs">
                    <Maximize2 className="h-3.5 w-3.5 text-blue-600" />
                    <span>Click to Expand Full Preview</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 px-1 flex items-center justify-between text-[11px] sm:text-xs text-slate-500 font-medium border-t border-slate-100 mt-3">
                <span className="font-semibold text-slate-700">Tata Nexon EV</span>
                <span className="text-emerald-600 font-semibold">Specs</span>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 3. WHAT THE CLIENT NEEDED */}
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
              The client wanted a mobile application that makes it easier for EV users to discover and reach nearby charging stations.
            </p>
            <p>
              The application needed to provide location-based station discovery, GPS navigation and a convenient way for users to keep track of their previous charging station activity.
            </p>
          </div>
        </div>
      </section>

      {/* 4. OUR SOLUTION + ACTIVITY IMAGES */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12 text-left">
          
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
                We developed a smart EV station finder mobile application that combines GPS-based location tracking, charging station discovery and activity history into one convenient platform.
              </p>
              <p>
                The app helps users find relevant EV charging stations based on their location and navigate to them using GPS, while maintaining a history of their previous activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHAT WE DELIVERED */}
      <section className="py-16 sm:py-24 bg-white border-y border-slate-200/80">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12 text-left">
          
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
              The application simplifies the EV charging journey by bringing station discovery, GPS tracking and activity history into one mobile platform.
            </p>
            <p>
              Instead of searching manually for charging locations, users can use their current location to discover nearby stations and navigate to their destination.
            </p>
            <p>
              The history feature also gives users a convenient way to review their previous activity within the application.
            </p>
          </div>
        </div>
      </section>

      {/* 7. THE OUTCOME */}
      <section className="py-20 bg-gradient-to-b from-[#0A1628] to-[#0D1F3C] text-white text-center relative overflow-hidden">
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
              The result is a smart and location-driven EV mobile application designed to make charging station discovery more convenient and accessible.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              By combining GPS functionality, station discovery and history management, the application provides EV users with a single platform for a smoother charging experience.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-1">
              <span className="text-cyan-400 text-lg">📍</span>
              <p className="text-xs sm:text-sm font-bold text-white leading-tight">
                Find the station.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-1">
              <span className="text-cyan-400 text-lg">🗺️</span>
              <p className="text-xs sm:text-sm font-bold text-white leading-tight">
                Follow the route.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-1">
              <span className="text-cyan-400 text-lg">⏱️</span>
              <p className="text-xs sm:text-sm font-bold text-white leading-tight">
                Track your journey.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-1">
              <span className="text-cyan-400 text-lg">⚡</span>
              <p className="text-xs sm:text-sm font-bold text-white leading-tight">
                Built for a smarter EV experience.
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
                <span>Explore EV Mobile App Live</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            )}

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm transition-all cursor-pointer"
            >
              <span>Start Your App</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. PREVIOUS / NEXT PAGER */}
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3 sm:gap-4">
          <Link
            href={`/projects/${prevProject.slug}`}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors min-w-0 max-w-[48%] sm:max-w-none"
          >
            <ChevronLeft className="h-4 w-4 shrink-0" />
            <span className="leading-tight">Previous: {prevProject.name}</span>
          </Link>

          <Link
            href="/projects"
            className="text-xs font-semibold text-slate-400 hover:text-slate-700 transition-colors hidden sm:inline"
          >
            All Case Studies
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors min-w-0 max-w-[48%] sm:max-w-none ml-auto sm:ml-0"
          >
            <span className="leading-tight">Next: {nextProject.name}</span>
            <ChevronRight className="h-4 w-4 shrink-0" />
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
              className="relative max-w-md w-full rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl space-y-3 p-3 cursor-default"
            >
              <div className="flex items-center justify-between px-2 pt-1 text-white">
                <span className="text-xs font-semibold text-slate-300">
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

              <div className="relative aspect-[9/19] w-full max-h-[80vh] overflow-hidden rounded-2xl bg-slate-950 flex items-center justify-center">
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
