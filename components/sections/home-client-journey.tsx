'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Lightbulb,
  Compass,
  FileCode2,
  Code2,
  ShieldCheck,
  CloudLightning,
  TrendingUp,
  Sparkles,
  Check,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const journeySteps = [
  {
    id: 'idea',
    step: '01',
    name: 'Idea',
    fullName: 'IDEA',
    title: 'Idea & Scope Planning',
    duration: 'Days 1–3',
    icon: Lightbulb,
    accent: '#0284c7',
    glowColor: 'rgba(2, 132, 199, 0.2)',
    gradient: 'from-blue-600 to-cyan-500',
    gate: 'Project Scope Approved',
    summary:
      'We discuss your vision, review technical requirements, and define a clear fixed-price plan before writing any code.',
    deliverables: [
      'Project Roadmap & Tech Stack Plan',
      'Clear Fixed-Price Quotation',
      'Timeline & Milestones Schedule',
    ],
    statusText: 'Scope Approved',
  },
  {
    id: 'discovery',
    step: '02',
    name: 'Discovery',
    fullName: 'DISCOVERY',
    title: 'Database & Workflow Architecture',
    duration: 'Week 1',
    icon: Compass,
    accent: '#2563eb',
    glowColor: 'rgba(37, 99, 235, 0.2)',
    gradient: 'from-indigo-600 to-blue-600',
    gate: 'Architecture Sign-Off',
    summary:
      'We design database structures, user flows, and core features so the whole team aligns on exactly how the app functions.',
    deliverables: [
      'Database Schema & Data Flow',
      'Feature Breakdown & API Specs',
      'Security & User Roles Setup',
    ],
    statusText: 'Architecture Frozen',
  },
  {
    id: 'design',
    step: '03',
    name: 'Design',
    fullName: 'DESIGN',
    title: 'UI/UX Design & Clickable Demo',
    duration: 'Week 2',
    icon: FileCode2,
    accent: '#7c3aed',
    glowColor: 'rgba(124, 58, 237, 0.2)',
    gradient: 'from-purple-600 to-indigo-600',
    gate: 'Prototype Approved',
    summary:
      'We design modern, Apple-grade screens and build a clickable Figma demo so you can test the user experience before coding.',
    deliverables: [
      'Full Figma Mobile & Web UI Kit',
      'Clickable Interactive Demo',
      'Responsive Layout Guidelines',
    ],
    statusText: 'Design Approved',
  },
  {
    id: 'development',
    step: '04',
    name: 'Development',
    fullName: 'DEVELOPMENT',
    title: 'Core Coding & Live 2-Week Demos',
    duration: 'Weeks 3–8',
    icon: Code2,
    accent: '#059669',
    glowColor: 'rgba(5, 150, 105, 0.2)',
    gradient: 'from-emerald-600 to-teal-600',
    gate: 'Live Sprint Verified',
    summary:
      'We build your software in 2-week agile sprints with private staging links so you can test real progress continuously.',
    deliverables: [
      'Live Staging Link with Bi-Weekly Demos',
      'Clean, Scalable Codebase',
      'Direct WhatsApp Channel with Leads',
    ],
    statusText: 'Sprint Demos Active',
  },
  {
    id: 'testing',
    step: '05',
    name: 'Testing',
    fullName: 'TESTING',
    title: 'Multi-Device QA & Security Check',
    duration: 'Pre-Launch',
    icon: ShieldCheck,
    accent: '#0891b2',
    glowColor: 'rgba(8, 145, 178, 0.2)',
    gradient: 'from-teal-600 to-cyan-600',
    gate: '100% Quality Tested',
    summary:
      'We test every feature, screen, and button on all phones and browsers to guarantee zero bugs, high speed, and rock-solid security.',
    deliverables: [
      'Full Browser & Mobile Testing',
      'Security & Speed Optimization',
      'Load Testing for Peak Traffic',
    ],
    statusText: 'Tested & Verified',
  },
  {
    id: 'deployment',
    step: '06',
    name: 'Deployment',
    fullName: 'DEPLOYMENT',
    title: 'Live Launch & 100% Code Handover',
    duration: 'Go-Live',
    icon: CloudLightning,
    accent: '#0284c7',
    glowColor: 'rgba(2, 132, 199, 0.2)',
    gradient: 'from-blue-600 to-cyan-600',
    gate: '100% Code & IP Transferred',
    summary:
      'We deploy your platform to production cloud servers and transfer 100% full source code, database rights, and keys to you.',
    deliverables: [
      'Full GitHub Code Repository Handover',
      'Cloud Server Setup & Live Domain',
      'Admin Credentials & Documentation',
    ],
    statusText: '100% Code Transferred',
  },
  {
    id: 'growth',
    step: '07',
    name: 'Growth',
    fullName: 'GROWTH',
    title: '24/7 Uptime Support & Upgrades',
    duration: 'Ongoing',
    icon: TrendingUp,
    accent: '#2563eb',
    glowColor: 'rgba(37, 99, 235, 0.2)',
    gradient: 'from-blue-600 to-indigo-600',
    gate: '99.99% Uptime Active',
    summary:
      'We monitor your servers 24/7, perform automated backups, apply security patches, and add new features as your business scales.',
    deliverables: [
      '24/7 Server Health & Auto Backups',
      'Priority Lead Architect Line',
      'Ongoing Updates & Feature Scaling',
    ],
    statusText: '24/7 Monitored & Live',
  },
];

export function HomeClientJourney() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-advance every 3.5 seconds when active
  useEffect(() => {
    if (!isPlaying || isHovered) return;

    const timer = setInterval(() => {
      setActiveStep((curr) => (curr + 1) % journeySteps.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered]);

  // Ensure active step is smoothly brought into view when scrolling on small screens
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeEl = scrollContainerRef.current.children[activeStep] as HTMLElement;
      if (activeEl) {
        const container = scrollContainerRef.current;
        const scrollLeft =
          activeEl.offsetLeft - container.offsetWidth / 2 + activeEl.offsetWidth / 2;
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  }, [activeStep]);

  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 50) {
      // Swipe left -> next
      setActiveStep((curr) => (curr + 1) % journeySteps.length);
    } else if (diff < -50) {
      // Swipe right -> prev
      setActiveStep((curr) => (curr - 1 + journeySteps.length) % journeySteps.length);
    }
    setTouchStartX(null);
  };

  const activeData = journeySteps[activeStep];
  const ActiveIcon = activeData.icon;

  return (
    <section className="relative bg-[#F8FAFC] text-slate-900 py-16 sm:py-24 select-none border-t border-slate-200/80 overflow-hidden">
      {/* Precision Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #001B48 1px, transparent 1px), linear-gradient(to bottom, #001B48 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      {/* Atmospheric Ambient Glow */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-cyan-400/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-blue-500/10 blur-[130px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl text-left">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            <span className="w-5 h-[2px] bg-blue-600 rounded-full" />
            <span>FOUNDATIONAL METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.15]">
            Engineering Lifecycle &{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
              Cadence
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal text-justify sm:text-left">
            A disciplined 7-phase delivery pipeline designed for zero scope ambiguity, rapid feedback loops, and complete intellectual property transfer.
          </p>
        </div>

        {/* ============================================================ */}
        {/* MOBILE STEPPER & QUICK CONTROLS (block lg:hidden)           */}
        {/* Single compact card: Phase indicator, arrows & 7 steps      */}
        {/* ============================================================ */}
        <div className="block lg:hidden rounded-2xl bg-white border border-slate-200/90 p-2.5 shadow-xs space-y-2">
          {/* Header: Phase number, duration badge & Prev/Next buttons */}
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2 min-w-0">
              <span className="flex h-2 w-2 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
              </span>
              <span className="text-xs font-black text-slate-950 tracking-tight truncate">
                Phase {activeData.step}/07: <span className="text-blue-600 font-extrabold">{activeData.name}</span>
              </span>
              <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full shrink-0">
                {activeData.duration}
              </span>
            </div>

            {/* Quick Prev / Next Arrows */}
            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={() => {
                  setActiveStep((curr) => (curr - 1 + journeySteps.length) % journeySteps.length);
                }}
                className="h-7 w-7 rounded-lg border border-slate-200/90 bg-slate-50 hover:bg-white active:scale-95 flex items-center justify-center text-slate-700 shadow-2xs transition-all cursor-pointer"
                aria-label="Previous step"
              >
                <ChevronLeft className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => {
                  setActiveStep((curr) => (curr + 1) % journeySteps.length);
                }}
                className="h-7 w-7 rounded-lg border border-slate-200/90 bg-slate-50 hover:bg-white active:scale-95 flex items-center justify-center text-slate-700 shadow-2xs transition-all cursor-pointer"
                aria-label="Next step"
              >
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* 7-Step Segmented Bar */}
          <div className="grid grid-cols-7 gap-1 pt-0.5">
            {journeySteps.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPast = idx < activeStep;
              const PIcon = step.icon;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`relative flex flex-col items-center justify-center py-1.5 px-0.5 rounded-xl transition-all duration-200 cursor-pointer select-none ${
                    isActive
                      ? 'text-white shadow-sm shadow-blue-600/30'
                      : isPast
                      ? 'text-blue-700 bg-blue-50/70 hover:bg-blue-100/70'
                      : 'text-slate-500 bg-slate-50/80 hover:bg-slate-100 hover:text-slate-800'
                  }`}
                  aria-label={`Phase ${step.step}: ${step.name}`}
                >
                  {/* Active Gradient Background */}
                  {isActive && (
                    <motion.div
                      layoutId="active-mobile-journey-pill"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 rounded-xl"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}

                  {/* Autoplay Progress Line Inside Active Step */}
                  {isActive && isPlaying && !isHovered && (
                    <div className="absolute bottom-0.5 left-1.5 right-1.5 h-[2px] bg-white/30 rounded-full overflow-hidden pointer-events-none">
                      <motion.div
                        key={`cadence-progress-mobile-${activeStep}`}
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 3.5, ease: 'linear' }}
                        className="h-full bg-white rounded-full"
                      />
                    </div>
                  )}

                  {/* Step Icon & Number */}
                  <span className="relative z-10 flex flex-col items-center gap-0.5">
                    <PIcon className={`h-3.5 w-3.5 ${isActive ? 'text-white' : isPast ? 'text-blue-600' : 'text-slate-400'}`} />
                    <span
                      className={`text-[10px] font-mono font-bold leading-none ${
                        isActive ? 'text-white font-black' : isPast ? 'text-blue-800' : 'text-slate-600'
                      }`}
                    >
                      {step.step}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ============================================================ */}
        {/* DESKTOP FULL-WIDTH STEPPER RAIL (hidden lg:block)            */}
        {/* ============================================================ */}
        <div className="hidden lg:block space-y-3">
          <div className="flex items-center justify-between gap-3 text-xs px-1">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
              </span>
              <span className="font-mono font-bold text-slate-700 tracking-wider text-[11px] uppercase">
                Phase {activeData.step} of 07 <span className="text-slate-300">•</span>{' '}
                <span className="text-blue-600 font-extrabold">{activeData.name}</span>
              </span>
            </div>

            {/* Next / Previous quick navigation buttons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => {
                  setActiveStep((curr) => (curr - 1 + journeySteps.length) % journeySteps.length);
                }}
                className="h-8 w-8 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 shadow-2xs active:scale-95 transition-all cursor-pointer"
                aria-label="Previous step"
              >
                <ChevronLeft className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => {
                  setActiveStep((curr) => (curr + 1) % journeySteps.length);
                }}
                className="h-8 w-8 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 shadow-2xs active:scale-95 transition-all cursor-pointer"
                aria-label="Next step"
              >
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          <div
            ref={scrollContainerRef}
            className="flex items-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs relative"
          >
            {journeySteps.map((step, idx) => {
              const isActive = activeStep === idx;
              const PIcon = step.icon;

              return (
                <button
                  key={step.id}
                  onClick={() => {
                    setActiveStep(idx);
                  }}
                  className={`flex-1 relative flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer select-none ${
                    isActive
                      ? 'text-white shadow-md shadow-blue-600/20'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/70'
                  }`}
                >
                  {/* Active Gradient Pill Background */}
                  {isActive && (
                    <motion.div
                      layoutId="active-journey-pill"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 rounded-xl"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}

                  {/* Progress Line Inset Inside Active Pill */}
                  {isActive && isPlaying && !isHovered && (
                    <div className="absolute bottom-1 left-2.5 right-2.5 h-[2px] bg-white/25 rounded-full overflow-hidden pointer-events-none">
                      <motion.div
                        key={`cadence-progress-${activeStep}`}
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 3.5, ease: 'linear' }}
                        className="h-full bg-white rounded-full"
                      />
                    </div>
                  )}

                  {/* Tab Content */}
                  <span className="relative z-10 flex items-center gap-1.5 whitespace-nowrap">
                    <span
                      className={`text-[10px] font-mono font-black px-1.5 py-0.5 rounded-md transition-colors ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {step.step}
                    </span>
                    <PIcon className="h-3.5 w-3.5 shrink-0" />
                    <span className="tracking-tight">{step.fullName}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Master Stage Details Card */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="rounded-3xl border border-slate-200/90 bg-white/95 backdrop-blur-xl p-4 sm:p-10 lg:p-12 shadow-xl shadow-slate-900/5 relative overflow-hidden text-left"
        >
          {/* Dynamic Stage Color Aura */}
          <div
            className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-30 transition-all duration-700"
            style={{ backgroundColor: activeData.accent }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeData.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative z-10"
            >
              {/* ============================================================ */}
              {/* MOBILE LAYOUT (block lg:hidden) - Super Simple, App-Like     */}
              {/* ============================================================ */}
              <div className="block lg:hidden space-y-3.5">
                {/* Header: Phase badge, Title & Icon */}
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1.5 min-w-0">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-[11px] font-bold font-mono">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                      PHASE {activeData.step} • {activeData.duration.toUpperCase()}
                    </div>
                    <h3 className="text-base min-[380px]:text-lg font-black text-slate-950 tracking-tight leading-snug">
                      {activeData.title}
                    </h3>
                  </div>

                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${activeData.gradient} text-white shadow-md shrink-0`}
                    style={{
                      boxShadow: `0 6px 16px -3px ${activeData.glowColor}`,
                    }}
                  >
                    <ActiveIcon className="h-5 w-5 drop-shadow-xs" />
                  </div>
                </div>

                {/* Narrative Summary */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal text-justify">
                  {activeData.summary}
                </p>

                {/* Key Deliverables - Clean List */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                    Key Deliverables
                  </span>
                  <div className="space-y-1.5">
                    {activeData.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 text-xs font-semibold text-slate-800 bg-slate-50/90 border border-slate-200/70 rounded-xl p-2"
                      >
                        <div
                          className="flex h-4.5 w-4.5 items-center justify-center rounded-full text-white shrink-0 shadow-2xs"
                          style={{ backgroundColor: activeData.accent }}
                        >
                          <Check className="h-2.5 w-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quality Gate Status */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-slate-700">
                    <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                    <span>Gate: {activeData.gate}</span>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {activeData.statusText}
                  </span>
                </div>
              </div>

              {/* ============================================================ */}
              {/* DESKTOP LAYOUT (hidden lg:grid) - Rich 12-Col Split         */}
              {/* ============================================================ */}
              <div className="hidden lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Phase badge, Headline & Narrative (7 cols) */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${activeData.gradient} text-white shadow-md p-3 shrink-0`}
                      style={{
                        boxShadow: `0 8px 20px -4px ${activeData.glowColor}`,
                      }}
                    >
                      <ActiveIcon className="h-6 w-6 drop-shadow-xs" />
                    </div>

                    <div>
                      <span
                        className="text-[11px] font-mono font-extrabold uppercase tracking-wider block"
                        style={{ color: activeData.accent }}
                      >
                        PHASE {activeData.step} OF 07 • {activeData.duration.toUpperCase()}
                      </span>
                      <h3 className="text-xl font-black text-slate-950">
                        {activeData.name} Phase
                      </h3>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-600 pl-4 py-0.5">
                    <h4 className="text-2xl lg:text-3xl font-extrabold text-slate-950 leading-snug tracking-tight">
                      “{activeData.title}”
                    </h4>
                  </div>

                  <p className="text-base text-slate-600 leading-relaxed font-normal text-left">
                    {activeData.summary}
                  </p>

                  <div className="flex items-center gap-3 pt-1">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800 text-xs font-bold">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
                      <span>Gate: {activeData.gate}</span>
                    </div>
                    <span className="text-xs text-slate-300">•</span>
                    <span className="text-xs text-slate-500 font-medium">
                      Duration: {activeData.duration} • 100% Verified
                    </span>
                  </div>
                </div>

                {/* Right Column: Key Deliverables Card (5 cols) */}
                <div className="lg:col-span-5 bg-slate-50/90 rounded-2xl border border-slate-200/90 p-6 space-y-4 shadow-xs">
                  <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                      KEY DELIVERABLES
                    </span>
                    <Sparkles className="h-4 w-4 text-blue-600" />
                  </div>

                  <ul className="space-y-2.5">
                    {activeData.deliverables.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.08 }}
                        className="flex items-center gap-3 text-sm font-semibold text-slate-800 p-2.5 rounded-xl bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-2xs transition-all"
                      >
                        <div
                          className="flex h-5 w-5 items-center justify-center rounded-full text-white shrink-0 shadow-2xs"
                          style={{ backgroundColor: activeData.accent }}
                        >
                          <Check className="h-3 w-3 stroke-[3]" />
                        </div>
                        <span className="leading-tight">{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="pt-2 border-t border-slate-200/70 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                    <span>Sign-off status</span>
                    <span className="text-emerald-700 font-bold flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      {activeData.statusText}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}



