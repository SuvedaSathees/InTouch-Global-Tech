'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  ShieldCheck,
  Zap,
  Users,
  CheckCircle2,
  Lock,
  Eye,
  Target,
  Award,
  Sparkles,
  ArrowRight,
  Globe2,
  TrendingUp,
  Check,
  Play,
  Pause,
  Compass,
  Code2,
} from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

const foundationalPillars = [
  {
    id: 'vision',
    number: '01',
    label: 'Strategic Vision',
    tag: 'NORTH STAR',
    icon: Eye,
    accent: '#0284c7',
    glowColor: 'rgba(2, 132, 199, 0.22)',
    gradient: 'from-blue-600 via-cyan-500 to-sky-500',
    quote: siteConfig.vision,
    description:
      'Empowering growing businesses and enterprises with modern cloud architecture, scalable custom ERPs, high-performance web applications, and 100% complete code ownership.',
    highlights: [
      'Custom ERP & Cloud Architecture',
      '100% Client Code & IP Ownership',
      'High-Performance Web Applications',
      'Zero Proprietary Vendor Lock-in',
    ],
    metricValue: 'Global Reach',
    metricLabel: 'Serving growing businesses & enterprises',
  },
  {
    id: 'mission',
    number: '02',
    label: 'Global Mission',
    tag: 'CORE PURPOSE',
    icon: Target,
    accent: '#2563eb',
    glowColor: 'rgba(37, 99, 235, 0.22)',
    gradient: 'from-indigo-600 via-blue-600 to-cyan-500',
    quote: siteConfig.mission,
    description:
      'Delivering innovative, reliable, and high-performing custom software suites that eliminate operational bottlenecks, automate complex workflows, and maximize business ROI.',
    highlights: [
      'Custom Software & ERP Suites',
      'Live 2-Week Working Sprint Demos',
      'Direct Communication with Senior Engineers',
      'Rapid Deployment & Continuous Support',
    ],
    metricValue: '2-Week Sprints',
    metricLabel: 'Predictable, transparent delivery cycles',
  },
  {
    id: 'values',
    number: '03',
    label: 'Core Values',
    tag: 'PRINCIPLES & TRUST',
    icon: Award,
    accent: '#7c3aed',
    glowColor: 'rgba(124, 58, 237, 0.22)',
    gradient: 'from-purple-600 via-indigo-600 to-pink-500',
    quote: siteConfig.values,
    description:
      'Committed to achieving engineering excellence through cost-effective development, precision QA testing, transparent milestone pricing, and enduring client partnership.',
    highlights: [
      'Commitment to Engineering Excellence',
      'Transparent Fixed-Milestone Pricing',
      'Rigorous Automated & Manual QA Testing',
      '99.99% Production Uptime Standards',
    ],
    metricValue: '100% Excellence',
    metricLabel: 'Zero compromise on quality & security',
  },
];

const companyPillars = [
  {
    icon: Lock,
    accent: '#0284c7',
    glowColor: 'rgba(2, 132, 199, 0.22)',
    gradient: 'from-blue-600 to-cyan-600',
    title: '100% Code Ownership',
    subtitle: 'Zero Hidden Fees or Lock-In',
    description:
      'You own every line of code, database schema, and design asset from day one with full intellectual property rights.',
    highlight: 'Full Source Code & IP Ownership',
  },
  {
    icon: Users,
    accent: '#2563eb',
    glowColor: 'rgba(37, 99, 235, 0.22)',
    gradient: 'from-indigo-600 to-blue-600',
    title: 'Direct Engineer Access',
    subtitle: 'No Middlemen or Delays',
    description:
      'Collaborate directly with lead engineers and architects via WhatsApp and calls for swift, clear execution.',
    highlight: 'Direct WhatsApp & Call Access',
  },
  {
    icon: Zap,
    accent: '#7c3aed',
    glowColor: 'rgba(124, 58, 237, 0.22)',
    gradient: 'from-purple-600 to-indigo-600',
    title: 'Milestone-Based Delivery',
    subtitle: 'Transparent Pricing',
    description:
      'Clear timelines with working sprint demos every 2 weeks so you experience predictable, measurable progress.',
    highlight: 'Live 2-Week Working Demos',
  },
  {
    icon: ShieldCheck,
    accent: '#059669',
    glowColor: 'rgba(5, 150, 105, 0.22)',
    gradient: 'from-emerald-600 to-teal-600',
    title: 'Enterprise Reliability',
    subtitle: '99.99% Uptime Standard',
    description:
      'Rigorously tested, performant, and secure architectures engineered to scale smoothly with your user growth.',
    highlight: 'Tested, Secure & Monitored',
  },
];

const companyMetrics = [
  { label: 'Code Ownership', value: '100%', sub: 'Zero Vendor Lock-in', icon: Lock, color: '#0284c7' },
  { label: 'Sprint Demos', value: '2-Week', sub: 'Live Working Builds', icon: Zap, color: '#2563eb' },
  { label: 'Platform Uptime', value: '99.99%', sub: 'High Availability', icon: ShieldCheck, color: '#059669' },
  { label: 'Support & Access', value: 'Direct', sub: 'Lead Engineer Line', icon: Users, color: '#7c3aed' },
];

export function InteractiveAboutHub() {
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  // 3D Tilt for Active Pillar Card
  const pillarCardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), { stiffness: 250, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), { stiffness: 250, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!pillarCardRef.current) return;
    const rect = pillarCardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Hardware-accelerated auto-tour timer for pillars
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setActivePillarIndex((curr) => (curr + 1) % foundationalPillars.length);
    }, 4800);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const currentPillar = foundationalPillars[activePillarIndex];
  const CurrentIcon = currentPillar.icon;

  return (
    <div className="relative bg-[#F8FAFC] text-slate-900 select-none pt-32 pb-16 sm:pb-24 overflow-hidden">
      {/* Precision Blueprint Grid (Preserved exactly as requested) */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #001B48 1px, transparent 1px), linear-gradient(to bottom, #001B48 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-20 -right-32 w-[550px] h-[550px] rounded-full bg-blue-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 -left-32 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 space-y-16 sm:space-y-20">
        
        {/* Hero Section: Dynamic Animated Identity */}
        <div className="text-left max-w-3xl space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600"
          >
            <span className="w-5 h-[2px] bg-blue-600 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
            <span>ABOUT {siteConfig.name.toUpperCase()}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.08]"
          >
            Leading Web Development &{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
              Digital Solutions.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl"
          >
            {siteConfig.name} is a modern technology studio engineering scalable web applications, bespoke business platforms, and high-performance digital systems for growing global businesses.
          </motion.p>
        </div>

        {/* 4 Key Metrics Cards with Interactive Hover Elevation & Brand Icons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {companyMetrics.map((metric, idx) => {
            const MIcon = metric.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 text-left shadow-xs hover:shadow-xl hover:border-blue-400 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Ambient glow spot on hover */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                  style={{ backgroundColor: metric.color }}
                />

                <div className="flex items-center justify-between mb-3 relative z-10">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-xs p-2"
                    style={{ backgroundColor: metric.color }}
                  >
                    <MIcon className="h-4 w-4" />
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                <div className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight group-hover:text-blue-600 transition-colors relative z-10">
                  {metric.value}
                </div>
                <div className="text-xs font-bold text-slate-800 mt-1 relative z-10">
                  {metric.label}
                </div>
                <div className="text-[11px] text-blue-600 font-semibold mt-0.5 relative z-10">
                  {metric.sub}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Vision, Mission & Values: Interactive Luxury Pillar Studio */}
        <div className="space-y-8 text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
                <span className="w-4 h-[2px] bg-blue-600 rounded-full" />
                <span>FOUNDATIONAL PILLARS</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
                Vision, Mission & Core Values
              </h2>
            </div>

            {/* Pillar Selector Tabs with Active Scrubber */}
            <div className="flex items-center">
              <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                {foundationalPillars.map((pillar, idx) => {
                  const isActive = activePillarIndex === idx;
                  const PIcon = pillar.icon;

                  return (
                    <button
                      key={pillar.id}
                      onClick={() => {
                        setActivePillarIndex(idx);
                      }}
                      className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer overflow-hidden ${
                        isActive
                          ? 'text-white'
                          : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="active-pillar-indicator"
                          className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-xl shadow-md shadow-blue-600/30"
                          transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                        />
                      )}

                      {/* Scrubber indicator */}
                      {isActive && isPlaying && (
                        <motion.div
                          key={`pillar-progress-${activePillarIndex}`}
                          initial={{ width: '0%' }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 4.8, ease: 'linear' }}
                          className="absolute bottom-0 left-0 h-[2px] bg-white/90 rounded-full pointer-events-none"
                        />
                      )}

                      <span className="relative z-10 flex items-center gap-1.5">
                        <PIcon className="h-3.5 w-3.5" />
                        <span>{pillar.label}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Interactive 3D Parallax Pillar Feature Card */}
          <div
            ref={pillarCardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="rounded-3xl border border-slate-200/90 bg-white/95 backdrop-blur-xl p-6 sm:p-10 shadow-xl shadow-slate-900/5 relative overflow-hidden transition-all">
              
              {/* Dynamic Accent Glow */}
              <div
                className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl pointer-events-none transition-all duration-500"
                style={{ backgroundColor: currentPillar.glowColor }}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPillar.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.28, ease: 'easeOut' }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10"
                >
                  {/* Left: Quote & Narrative (7 cols) */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3.5">
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: 6 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${currentPillar.gradient} text-white shadow-lg p-3`}
                        style={{
                          boxShadow: `0 8px 20px -4px ${currentPillar.glowColor}`,
                        }}
                      >
                        <CurrentIcon className="h-6 w-6 drop-shadow-md" />
                      </motion.div>

                      <div>
                        <span
                          className="text-[10px] font-mono font-extrabold uppercase tracking-widest block"
                          style={{ color: currentPillar.accent }}
                        >
                          PILLAR {currentPillar.number} • {currentPillar.tag}
                        </span>
                        <h3 className="text-lg font-black text-slate-950">
                          {currentPillar.label}
                        </h3>
                      </div>
                    </div>

                    <blockquote className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-950 leading-tight tracking-tight border-l-4 border-blue-600 pl-4 py-1">
                      “{currentPillar.quote}”
                    </blockquote>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {currentPillar.description}
                    </p>

                    {/* Micro metric bar */}
                    <div className="flex items-center gap-3 pt-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-blue-600 animate-pulse shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
                      <span className="text-xs font-bold text-slate-900">
                        {currentPillar.metricValue}
                      </span>
                      <span className="text-xs text-slate-300">•</span>
                      <span className="text-xs text-slate-500 font-medium">
                        {currentPillar.metricLabel}
                      </span>
                    </div>
                  </div>

                  {/* Right: Key Principles List (5 cols) */}
                  <div className="lg:col-span-5 bg-slate-50/80 rounded-2xl border border-slate-200 p-6 space-y-4 shadow-sm">
                    <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                        Key Engineering Pillars
                      </span>
                      <Sparkles className="h-4 w-4 text-blue-600" />
                    </div>

                    <ul className="space-y-3">
                      {currentPillar.highlights.map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: 8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.08 }}
                          className="flex items-start gap-2.5 text-xs sm:text-sm font-bold text-slate-800 p-2 rounded-xl hover:bg-white hover:shadow-2xs transition-all"
                        >
                          <div
                            className="flex h-5 w-5 items-center justify-center rounded-md text-white shrink-0 mt-0.5 shadow-2xs"
                            style={{ backgroundColor: currentPillar.accent }}
                          >
                            <Check className="h-3 w-3 stroke-[3]" />
                          </div>
                          <span className="leading-snug">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Section: 4 Core Guarantees with Interactive 3D Bento Cards */}
        <div className="space-y-8 text-left">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
              <span className="w-4 h-[2px] bg-blue-600 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
              <span>OUR COMMITMENTS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
              4 Guarantees to Every Client
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {companyPillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -6, scale: 1.015 }}
                  className="group relative rounded-3xl border border-slate-200/90 bg-white p-7 text-left flex flex-col justify-between hover:border-blue-400 hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  {/* Top Ambient Glow */}
                  <div
                    className="absolute top-0 right-0 w-36 h-36 rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                    style={{ backgroundColor: pillar.accent }}
                  />

                  {/* Accent Top Line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: 6 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                        className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${pillar.gradient} text-white shadow-lg p-2.5`}
                        style={{
                          boxShadow: `0 8px 20px -4px ${pillar.glowColor}`,
                        }}
                      >
                        <PillarIcon className="h-5 w-5 drop-shadow-md" />
                      </motion.div>

                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                        GUARANTEE 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-black text-slate-950 group-hover:text-blue-600 transition-colors leading-snug">
                      {pillar.title}
                    </h3>
                    <div
                      className="text-xs font-bold mt-0.5"
                      style={{ color: pillar.accent }}
                    >
                      {pillar.subtitle}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mt-3">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2.5 text-xs font-bold text-slate-900">
                    <div
                      className="flex h-4.5 w-4.5 items-center justify-center rounded-full text-white shrink-0 shadow-2xs"
                      style={{ backgroundColor: pillar.accent }}
                    >
                      <Check className="h-2.5 w-2.5 stroke-[3]" />
                    </div>
                    <span>{pillar.highlight}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}

