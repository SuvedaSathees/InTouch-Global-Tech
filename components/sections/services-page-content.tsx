'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Bot,
  GraduationCap,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Palette,
  MessageSquare,
  Globe,
  Database,
  Cpu,
  Video,
  Lock,
  RefreshCw,
  Target,
  Search,
  ArrowRight,
  Sparkle,
  Zap,
  Check,
} from 'lucide-react';
import { MagneticButton } from '@/components/magnetic-button';

// --- INTERACTIVE 3D ANIMATED HERO OBJECTS FOR EACH PILLAR ---
function Pillar3DObject({ id, color }: { id: string; color: string }) {
  if (id === 'build') {
    return (
      <div className="relative w-18 h-18 sm:w-22 sm:h-22 flex items-center justify-center shrink-0">
        {/* Outer Orbit Ring */}
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.06, 1] }}
          transition={{ rotate: { repeat: Infinity, duration: 18, ease: 'linear' }, scale: { repeat: Infinity, duration: 3.5, ease: 'easeInOut' } }}
          className="absolute inset-0 rounded-2xl border-2 border-dashed border-amber-500/40"
        />
        {/* Inner Glass Prism */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
          className="absolute w-14 h-14 rounded-xl bg-gradient-to-tr from-amber-500/25 via-amber-400/10 to-transparent border border-amber-400/50 backdrop-blur-md"
        />
        {/* Core Isometric Cube */}
        <motion.div
          animate={{ y: [0, -5, 0], rotateY: [0, 180, 360] }}
          transition={{ y: { repeat: Infinity, duration: 2.8, ease: 'easeInOut' }, rotateY: { repeat: Infinity, duration: 9, ease: 'linear' } }}
          className="relative z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 flex items-center justify-center text-white shadow-xl shadow-amber-600/50 border border-amber-200"
        >
          <Code2 className="w-6 h-6 text-white drop-shadow-md" />
        </motion.div>
        {/* Orbiting Satellite Particles */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 4.5, ease: 'linear' }}
          className="absolute w-full h-full flex items-center justify-start pointer-events-none"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-lg shadow-amber-400 ring-2 ring-white/80 animate-pulse" />
        </motion.div>
      </div>
    );
  }

  if (id === 'automate') {
    return (
      <div className="relative w-18 h-18 sm:w-22 sm:h-22 flex items-center justify-center shrink-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
          className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/50"
        />
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.75, 0.35] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          className="absolute inset-2 rounded-full bg-gradient-to-tr from-blue-600/30 to-cyan-400/20 blur-sm"
        />
        <motion.div
          animate={{ y: [0, -5, 0], scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          className="relative z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-400 via-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-xl shadow-blue-600/50 border border-blue-200"
        >
          <Bot className="w-6 h-6 text-white drop-shadow-md" />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
          className="absolute w-full h-full flex items-center justify-between pointer-events-none px-0.5"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-md shadow-cyan-400 ring-2 ring-white/80" />
          <span className="w-2 h-2 rounded-full bg-blue-400 shadow-md shadow-blue-400" />
        </motion.div>
      </div>
    );
  }

  if (id === 'train') {
    return (
      <div className="relative w-18 h-18 sm:w-22 sm:h-22 flex items-center justify-center shrink-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 16, ease: 'linear' }}
          className="absolute inset-0 rounded-2xl border-2 border-emerald-500/40 rotate-45"
        />
        <motion.div
          animate={{ scale: [1, 1.18, 1], rotate: -180 }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
          className="absolute w-14 h-14 rounded-full border border-emerald-400/40 bg-emerald-500/10"
        />
        <motion.div
          animate={{ y: [0, -5, 0], rotate: [0, 4, -4, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          className="relative z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-emerald-400 via-emerald-600 to-teal-700 flex items-center justify-center text-white shadow-xl shadow-emerald-600/50 border border-emerald-200"
        >
          <GraduationCap className="w-6 h-6 text-white drop-shadow-md" />
        </motion.div>
      </div>
    );
  }

  if (id === 'create') {
    return (
      <div className="relative w-18 h-18 sm:w-22 sm:h-22 flex items-center justify-center shrink-0">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }}
          className="absolute inset-0 rounded-full border-2 border-dashed border-purple-500/50"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 13, ease: 'linear' }}
          className="absolute w-14 h-14 rounded-2xl border border-purple-400/40 bg-purple-500/10 rotate-12"
        />
        <motion.div
          animate={{ y: [0, -6, 0], scale: [1, 1.06, 1] }}
          transition={{ repeat: Infinity, duration: 2.6, ease: 'easeInOut' }}
          className="relative z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-purple-400 via-purple-600 to-pink-700 flex items-center justify-center text-white shadow-xl shadow-purple-600/50 border border-purple-200"
        >
          <Sparkles className="w-6 h-6 text-white drop-shadow-md" />
        </motion.div>
        <motion.div
          animate={{ y: [-4, 4, -4], opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="absolute -top-1 -right-1"
        >
          <Sparkle className="w-4 h-4 text-purple-400 fill-purple-400" />
        </motion.div>
      </div>
    );
  }

  if (id === 'transform') {
    return (
      <div className="relative w-18 h-18 sm:w-22 sm:h-22 flex items-center justify-center shrink-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
          className="absolute inset-0 rounded-full border-2 border-dashed border-orange-500/50"
        />
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.25, 0.65, 0.25] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="absolute inset-2 rounded-full bg-orange-500/30 blur-xs"
        />
        <motion.div
          animate={{ y: [0, -6, 0], rotate: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
          className="relative z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-orange-400 via-orange-600 to-amber-700 flex items-center justify-center text-white shadow-xl shadow-orange-600/50 border border-orange-200"
        >
          <TrendingUp className="w-6 h-6 text-white drop-shadow-md" />
        </motion.div>
      </div>
    );
  }

  // 06 SUPPORT
  return (
    <div className="relative w-18 h-18 sm:w-22 sm:h-22 flex items-center justify-center shrink-0">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 16, ease: 'linear' }}
        className="absolute inset-0 rounded-full border-2 border-rose-500/50"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 2.6, ease: 'easeInOut' }}
        className="absolute w-14 h-14 rounded-xl bg-rose-500/15 border border-rose-500/40"
      />
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 2.6, ease: 'easeInOut' }}
        className="relative z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-rose-400 via-rose-600 to-red-700 flex items-center justify-center text-white shadow-xl shadow-rose-600/50 border border-rose-200"
      >
        <ShieldCheck className="w-6 h-6 text-white drop-shadow-md" />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 4.5, ease: 'linear' }}
        className="absolute w-full h-full flex items-center justify-end pointer-events-none px-1"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-rose-400 shadow-md shadow-rose-400 ring-2 ring-white/80" />
      </motion.div>
    </div>
  );
}

// --- SIX MAJOR PILLARS DATA ---
const pillarsData = [
  {
    id: 'build',
    number: '01',
    name: 'BUILD',
    tagline: 'Digital Foundation',
    desc: 'From custom software to full-stack web and mobile ecosystems.',
    icon: Code2,
    badge: 'Core Digital Foundation',
    color: '#d97706',
    glowColor: 'rgba(217, 119, 6, 0.28)',
    borderActive: 'border-amber-500/90',
    badgeBg: 'bg-amber-100/95 text-amber-900 border-amber-300',
    subBg: 'from-amber-500/8 to-transparent',
    initPos: { x: -280, y: -160, rot: -2 },
    scatterPos: { x: -450, y: -240, rot: -8, scale: 0.82 },
    floatDuration: 5.2,
    groups: [
      {
        title: 'Brand & Digital Identity',
        icon: Palette,
        items: ['Logo Design', 'Business Cards & Brand Kits'],
      },
      {
        title: 'Website & Web Apps',
        icon: Globe,
        items: ['Business Websites', 'Online Stores / E-Commerce', 'Web Applications', 'Admin Panels & Portals'],
      },
      {
        title: 'Business Software',
        icon: Layers,
        items: ['ERP & CRM Software', 'HRMS & Payroll', 'Billing & Invoicing', 'Custom Software'],
      },
      {
        title: 'Mobile Apps & Backend',
        icon: Database,
        items: ['Android & iOS Apps', 'Custom High-Speed APIs', 'Cloud Databases', 'Payment Gateway Integration'],
      },
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Flutter', 'Tailwind CSS', 'AWS Cloud'],
  },
  {
    id: 'automate',
    number: '02',
    name: 'AUTOMATE',
    tagline: 'AI & Automation',
    desc: 'Eliminate repetitive manual tasks with autonomous AI workflows.',
    icon: Bot,
    badge: 'Intelligent Workflows',
    color: '#2563eb',
    glowColor: 'rgba(37, 99, 235, 0.28)',
    borderActive: 'border-blue-500/90',
    badgeBg: 'bg-blue-100/95 text-blue-900 border-blue-300',
    subBg: 'from-blue-500/8 to-transparent',
    initPos: { x: 280, y: -160, rot: 2 },
    scatterPos: { x: 450, y: -240, rot: 8, scale: 0.82 },
    floatDuration: 6.1,
    groups: [
      {
        title: 'AI Solutions',
        icon: Cpu,
        items: ['AI Customer Chatbots', 'AI Business Assistants', 'AI Document Scanning (OCR)', 'AI Content Generation'],
      },
      {
        title: 'System Integration',
        icon: RefreshCw,
        items: ['API Integrations', 'ERP & CRM Data Sync', 'WhatsApp Business Integration', 'Payment Gateway Integration'],
      },
    ],
    tech: ['OpenAI GPT-4o', 'Claude 3.5', 'LangChain', 'Python AI', 'WhatsApp Cloud API', 'RESTful Webhooks'],
  },
  {
    id: 'train',
    number: '03',
    name: 'TRAIN',
    tagline: 'Team & Staff Training',
    desc: 'Empower management and employees to master AI & digital software.',
    icon: GraduationCap,
    badge: 'Workforce Enablement',
    color: '#059669',
    glowColor: 'rgba(5, 150, 105, 0.28)',
    borderActive: 'border-emerald-500/90',
    badgeBg: 'bg-emerald-100/95 text-emerald-900 border-emerald-300',
    subBg: 'from-emerald-500/8 to-transparent',
    initPos: { x: -280, y: 0, rot: -1 },
    scatterPos: { x: -470, y: 0, rot: -6, scale: 0.82 },
    floatDuration: 4.8,
    groups: [
      {
        title: 'Staff & Team Training',
        icon: GraduationCap,
        items: ['AI & ChatGPT Training for Staff', 'ERP & Custom Software Training', 'Website & Admin Portal Management', 'Digital Tools & Modern Workflows'],
      },
      {
        title: 'Workforce Enablement',
        icon: Zap,
        items: ['Operations & Sales Workflows', 'Automated Data Entry Training', 'Team Sandbox Environments', 'Continuous Skills Upgrades'],
      },
    ],
    tech: ['ChatGPT Team', 'Custom ERP Portals', 'Notion Workspaces', 'Interactive Sandboxes'],
  },
  {
    id: 'create',
    number: '04',
    name: 'CREATE',
    tagline: 'Creative & Media',
    desc: 'Commercial promo videos, ad creatives, catalogues, and pitch decks.',
    icon: Sparkles,
    badge: 'High-Conversion Media',
    color: '#9333ea',
    glowColor: 'rgba(147, 51, 234, 0.28)',
    borderActive: 'border-purple-500/90',
    badgeBg: 'bg-purple-100/95 text-purple-900 border-purple-300',
    subBg: 'from-purple-500/8 to-transparent',
    initPos: { x: 280, y: 0, rot: 1 },
    scatterPos: { x: 470, y: 0, rot: 6, scale: 0.82 },
    floatDuration: 5.7,
    groups: [
      {
        title: 'Video Production',
        icon: Video,
        items: ['Brand & Promo Videos', 'Product Demo Videos', 'Social Media Reels & Shorts', 'AI Video Ads', 'Animation & Motion Graphics'],
      },
      {
        title: 'Advertisements & Graphic Design',
        icon: Target,
        items: ['Social Media Ad Creatives', 'Google & Meta Ad Designs', 'Brochures & Catalogs', 'Company Profiles & Pitch Decks'],
      },
      {
        title: 'Content & Copywriting',
        icon: MessageSquare,
        items: ['High-Conversion Website Content', 'Social Media Captions & Posts'],
      },
    ],
    tech: ['Premiere Pro', 'After Effects', 'Figma', 'Midjourney', 'Photoshop', 'Canva Enterprise'],
  },
  {
    id: 'transform',
    number: '05',
    name: 'TRANSFORM',
    tagline: 'Business Growth',
    desc: 'Modernize legacy processes and dominate first-page Google SEO.',
    icon: TrendingUp,
    badge: 'Operational Scale & SEO',
    color: '#ea580c',
    glowColor: 'rgba(234, 88, 12, 0.28)',
    borderActive: 'border-orange-500/90',
    badgeBg: 'bg-orange-100/95 text-orange-900 border-orange-300',
    subBg: 'from-orange-500/8 to-transparent',
    initPos: { x: -280, y: 160, rot: -2 },
    scatterPos: { x: -450, y: 240, rot: -8, scale: 0.82 },
    floatDuration: 6.4,
    groups: [
      {
        title: 'Digital Transformation',
        icon: TrendingUp,
        items: ['Paper → Digital Pipeline Upgrades', 'Upgrade Old & Slow Software', 'Digital Business Strategy & Roadmaps'],
      },
      {
        title: 'Business Improvement & SEO',
        icon: Search,
        items: ['Speed Up Daily Processes', 'Cut Costs Through Technology', 'Google Search Ranking (SEO)', 'Google Maps & Business Profile'],
      },
    ],
    tech: ['Google Analytics 4', 'Search Console', 'Semrush', 'Lighthouse Optimization'],
  },
  {
    id: 'support',
    number: '06',
    name: 'SUPPORT',
    tagline: 'Long-Term Support',
    desc: '24/7 SLA engineering, rapid bug fixing, and dedicated developers.',
    icon: ShieldCheck,
    badge: 'Continuous 24/7 SLA',
    color: '#e11d48',
    glowColor: 'rgba(225, 29, 72, 0.28)',
    borderActive: 'border-rose-500/90',
    badgeBg: 'bg-rose-100/95 text-rose-900 border-rose-300',
    subBg: 'from-rose-500/8 to-transparent',
    initPos: { x: 280, y: 160, rot: 2 },
    scatterPos: { x: 450, y: 240, rot: 8, scale: 0.82 },
    floatDuration: 5.0,
    groups: [
      {
        title: 'Software Support & Upgrades',
        icon: ShieldCheck,
        items: ['Bug Fixing & Error Resolution', 'Website & Software Maintenance', 'New Features & UI Improvements', 'Performance & Security Upgrades'],
      },
      {
        title: 'Technical Support & AMC',
        icon: Lock,
        items: ['Server & Hosting Support', 'Database Backups & Recovery', 'Annual Maintenance / AMC', 'Dedicated Developer on Demand'],
      },
    ],
    tech: ['Cloudflare Enterprise', 'Docker', 'Supabase', 'Vercel Enterprise', 'Ubuntu Linux Servers', 'GitHub CI/CD'],
  },
];

export function ServicesPageContent() {
  const sceneContainerRef = useRef<HTMLDivElement>(null);
  const [activeHeroIdx, setActiveHeroIdx] = useState<number>(0);
  const [currentPillarIdx, setCurrentPillarIdx] = useState<number>(0);
  const [isScattered, setIsScattered] = useState<boolean>(false);

  // Auto-cycle hero pill indicator
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHeroIdx((prev) => (prev + 1) % pillarsData.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Sticky Scroll Progress (0.0 to 1.0)
  const { scrollYProgress } = useScroll({
    target: sceneContainerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 32,
    restDelta: 0.001,
  });

  // Calculate active pillar and scatter state strictly from scroll progress
  useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => {
      if (v < 0.08) {
        setIsScattered(false);
      } else {
        setIsScattered(true);
      }

      if (v < 0.22) {
        setCurrentPillarIdx(0); // BUILD
      } else if (v < 0.37) {
        setCurrentPillarIdx(1); // AUTOMATE
      } else if (v < 0.52) {
        setCurrentPillarIdx(2); // TRAIN
      } else if (v < 0.67) {
        setCurrentPillarIdx(3); // CREATE
      } else if (v < 0.82) {
        setCurrentPillarIdx(4); // TRANSFORM
      } else {
        setCurrentPillarIdx(5); // SUPPORT
      }
    });
    return () => unsub();
  }, [scrollYProgress]);

  // Scatter progress animation values
  const scatterProgress = useTransform(smoothProgress, [0, 0.10], [0, 1]);
  const centerOpacity = useTransform(smoothProgress, [0.06, 0.12], [0, 1]);
  const centerScale = useTransform(smoothProgress, [0.06, 0.12], [0.94, 1]);
  const centerBlur = useTransform(smoothProgress, [0.06, 0.12], ['blur(8px)', 'blur(0px)']);

  const activePillar = pillarsData[currentPillarIdx];

  return (
    <div className="relative bg-[#FAF7F2] text-slate-900 select-none">
      
      {/* Background Technical Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Ambient Dynamic Soft Glow Spotlight */}
      <motion.div
        animate={{
          backgroundColor: activePillar.glowColor,
        }}
        transition={{ duration: 0.7 }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[920px] h-[520px] rounded-full blur-[170px] pointer-events-none"
      />

      {/* ========================================================================= */}
      {/* 01 — HERO */}
      {/* ========================================================================= */}
      <section className="relative pt-32 pb-10 sm:pt-40 sm:pb-14 border-b border-[#E8DFD1] z-10">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left space-y-8">
          
          <div className="max-w-4xl space-y-3">
            {/* Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800"
            >
              <span className="w-5 h-[2px] bg-amber-700 rounded-full" />
              <span>WHAT WE DO</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.08]"
            >
              Everything Your Business Needs.{' '}
              <span className="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 bg-clip-text text-transparent">
                Under One Roof.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="text-sm sm:text-base lg:text-lg text-slate-600 font-normal leading-relaxed max-w-3xl"
            >
              From your first logo to your latest software upgrade, we help businesses build, automate, create, transform, and grow with technology.
            </motion.p>
          </div>

          {/* Capability Flow Rail */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="rounded-3xl border border-[#E8DFD1] bg-white/90 backdrop-blur-md p-4 sm:p-6 shadow-lg shadow-amber-700/5 max-w-6xl w-full"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3 text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-amber-800 font-bold uppercase tracking-wider">
                <span className="h-2 w-2 rounded-full bg-amber-600 animate-ping" />
                CAPABILITY FLOW
              </span>
              <span className="hidden sm:inline font-semibold text-slate-600">Active: {pillarsData[activeHeroIdx].name}</span>
            </div>

            <div className="flex items-center justify-between gap-1 sm:gap-2 md:gap-3 w-full py-0.5">
              {pillarsData.map((p, idx) => {
                const isActive = activeHeroIdx === idx;

                return (
                  <React.Fragment key={p.name}>
                    <button
                      onClick={() => setActiveHeroIdx(idx)}
                      className={`relative flex items-center justify-center gap-1 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl transition-all duration-300 cursor-pointer text-xs sm:text-sm md:text-base font-black whitespace-nowrap ${
                        isActive
                          ? 'bg-amber-700 text-white shadow-md shadow-amber-700/25 border border-amber-800 ring-2 ring-amber-500/20'
                          : 'bg-[#FAF7F2] text-slate-800 border border-[#E8DFD1] hover:border-amber-400 hover:text-amber-800 hover:bg-white'
                      }`}
                    >
                      <span>{p.name}</span>
                    </button>

                    {idx < pillarsData.length - 1 && (
                      <span
                        className={`font-bold text-[10px] sm:text-xs md:text-sm transition-colors duration-300 shrink-0 ${
                          activeHeroIdx === idx || activeHeroIdx === idx + 1
                            ? 'text-amber-700 font-black'
                            : 'text-slate-300'
                        }`}
                      >
                        →
                      </span>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            <div className="mt-3 pt-2.5 border-t border-slate-100 text-left">
              <p className="text-xs text-slate-600 font-medium">
                <strong className="text-slate-900 font-bold">{pillarsData[activeHeroIdx].name}:</strong> {pillarsData[activeHeroIdx].tagline} — {pillarsData[activeHeroIdx].desc}
              </p>
            </div>
          </motion.div>

          {/* Hero CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.28 }}
            className="pt-2"
          >
            <MagneticButton
              href="/contact"
              size="lg"
              className="w-full sm:w-auto bg-amber-700 hover:bg-amber-800 text-white font-bold px-8 py-3.5 rounded-2xl shadow-xl shadow-amber-700/20 text-sm"
            >
              <span>Tell Us What You Need →</span>
            </MagneticButton>
          </motion.div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02 — THE SINGLE FULL-SCREEN PINNED VIEWPORT SCENE */}
      {/* ========================================================================= */}
      <div ref={sceneContainerRef} className="relative h-[550vh]">
        
        {/* Sticky 100vh Full-Screen Pinned Stage */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between p-4 sm:p-6 lg:p-8 z-20">
          
          {/* Top HUD State Status */}
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between z-30 px-2 sm:px-6">
            <div className="flex items-center gap-2.5">
              <span
                className="h-2.5 w-2.5 rounded-full animate-ping"
                style={{ backgroundColor: activePillar.color }}
              />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#E8DFD1] shadow-xs">
                CAPABILITY THEATER
              </span>
            </div>

            <div className="text-xs font-mono text-slate-600 bg-white/90 px-3.5 py-1.5 rounded-xl border border-[#E8DFD1] shadow-xs flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: activePillar.color }} />
              {!isScattered ? (
                <span className="text-amber-800 font-bold">STATE 1: 6 CAPABILITIES ORGANIZED</span>
              ) : (
                <span className="text-slate-900 font-bold">
                  {activePillar.number} / 06 — {activePillar.name} ({activePillar.tagline})
                </span>
              )}
            </div>
          </div>

          {/* ============================================================= */}
          {/* MAIN VIEWPORT STAGE (Outer 6 Cards + Center Stage) */}
          {/* ============================================================= */}
          <div className="relative flex-1 w-full max-w-7xl mx-auto flex items-center justify-center perspective-[1400px] my-auto">
            
            {/* ----------------------------------------------------------- */}
            {/* 1. THE 6 OUTER CONTAINERS (Organized in 2x3 -> Scatter to periphery) */}
            {/* ----------------------------------------------------------- */}
            {pillarsData.map((pillar, idx) => {
              const isCurrentActive = isScattered && currentPillarIdx === idx;
              const Icon = pillar.icon;

              const posX = useTransform(
                scatterProgress,
                [0, 1],
                [pillar.initPos.x, pillar.scatterPos.x]
              );
              const posY = useTransform(
                scatterProgress,
                [0, 1],
                [pillar.initPos.y, pillar.scatterPos.y]
              );
              const rot = useTransform(
                scatterProgress,
                [0, 1],
                [pillar.initPos.rot, pillar.scatterPos.rot]
              );
              const scale = useTransform(
                scatterProgress,
                [0, 1],
                [1, pillar.scatterPos.scale]
              );
              const opacity = useTransform(
                scatterProgress,
                [0, 1],
                [1, isCurrentActive ? 1 : 0.38]
              );

              return (
                <motion.div
                  key={pillar.id}
                  style={{
                    x: posX,
                    y: posY,
                    rotate: rot,
                    scale: scale,
                    opacity: opacity,
                  }}
                  animate={
                    isScattered
                      ? {
                          y: [pillar.scatterPos.y, pillar.scatterPos.y - 7, pillar.scatterPos.y],
                          rotate: [pillar.scatterPos.rot, pillar.scatterPos.rot + (idx % 2 === 0 ? 1.5 : -1.5), pillar.scatterPos.rot],
                        }
                      : {}
                  }
                  transition={{
                    y: {
                      repeat: Infinity,
                      duration: pillar.floatDuration,
                      ease: 'easeInOut',
                    },
                    rotate: {
                      repeat: Infinity,
                      duration: pillar.floatDuration * 1.3,
                      ease: 'easeInOut',
                    },
                  }}
                  whileHover={{ scale: 1.05, opacity: 1, zIndex: 40 }}
                  className={`absolute w-56 sm:w-64 p-4 rounded-3xl border bg-white/95 backdrop-blur-md shadow-xl text-left pointer-events-auto transition-all duration-300 ${
                    isCurrentActive
                      ? `${pillar.borderActive} ring-2 ring-amber-500/30 shadow-2xl scale-[1.04]`
                      : 'border-[#E8DFD1]'
                  }`}
                >
                  <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-100">
                    <span
                      className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded ${
                        isCurrentActive
                          ? pillar.badgeBg
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {pillar.number} • {pillar.name}
                    </span>
                    <Icon
                      className="h-4 w-4 transition-colors"
                      style={{ color: isCurrentActive ? pillar.color : '#94a3b8' }}
                    />
                  </div>
                  <h4 className="text-sm sm:text-base font-black text-slate-950">
                    {pillar.name}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium line-clamp-1">
                    {pillar.tagline}
                  </p>
                </motion.div>
              );
            })}

            {/* ----------------------------------------------------------- */}
            {/* 2. DYNAMIC CENTER STORYTELLING STAGE (WITH 3D OBJECT SHOWCASE) */}
            {/* ----------------------------------------------------------- */}
            <motion.div
              style={{
                opacity: centerOpacity,
                scale: centerScale,
                filter: centerBlur,
              }}
              className="relative z-30 w-full max-w-[850px] px-2 sm:px-4 pointer-events-auto"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePillar.id}
                  initial={{ opacity: 0, y: 28, scale: 0.94, rotateX: 6 }}
                  animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                  exit={{ opacity: 0, y: -28, scale: 0.94, rotateX: -6 }}
                  transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-3xl border border-[#E8DFD1] bg-white/95 backdrop-blur-2xl shadow-2xl p-6 sm:p-7 space-y-4 text-left relative overflow-hidden min-h-[520px] flex flex-col justify-between"
                  style={{
                    boxShadow: `0 30px 70px -15px ${activePillar.glowColor}, 0 0 0 1px rgba(232, 223, 209, 0.8)`,
                  }}
                >
                  {/* Faint Background Number Watermark */}
                  <motion.span
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-2 right-6 text-8xl sm:text-9xl font-black text-slate-100 select-none pointer-events-none"
                  >
                    {activePillar.number}
                  </motion.span>

                  <div className="space-y-3.5 relative z-10">
                    {/* Header with 3D Animated Interactive Object */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-4">
                        {/* 3D Animated Hero Object */}
                        <Pillar3DObject id={activePillar.id} color={activePillar.color} />

                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <motion.span
                              initial={{ scale: 0.8 }}
                              animate={{ scale: 1 }}
                              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                              className={`px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold border ${activePillar.badgeBg}`}
                            >
                              PILLAR {activePillar.number} OF 06
                            </motion.span>
                            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                              {activePillar.badge}
                            </span>
                          </div>

                          <div>
                            <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
                              {activePillar.name}
                            </h2>
                            <p className="text-xs sm:text-sm font-semibold text-slate-600">
                              {activePillar.tagline} — {activePillar.desc}
                            </p>
                          </div>
                        </div>
                      </div>

                      <MagneticButton
                        href="/contact"
                        size="sm"
                        className="shrink-0 bg-amber-700 hover:bg-amber-800 text-white font-bold px-5 py-2.5 rounded-xl shadow-md shadow-amber-700/20 text-xs self-start sm:self-auto"
                      >
                        <span>Request {activePillar.name} →</span>
                      </MagneticButton>
                    </div>

                    {/* Subcategories Grid (Fitted to box size with subtle ambient gradient glow) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activePillar.groups.map((grp, gIdx) => {
                        const GrpIcon = grp.icon;

                        return (
                          <motion.div
                            key={gIdx}
                            initial={{ opacity: 0, y: 12, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.28, delay: gIdx * 0.05 }}
                            whileHover={{ y: -2, scale: 1.01 }}
                            className={`p-3.5 rounded-2xl border border-[#E8DFD1] bg-gradient-to-br ${activePillar.subBg} bg-[#FAF7F2]/80 hover:bg-white transition-all shadow-xs space-y-1.5 cursor-pointer`}
                          >
                            <div className="flex items-center gap-2 border-b border-slate-200/60 pb-1">
                              <div
                                className="p-1 rounded-md bg-white border border-slate-200 shadow-2xs"
                                style={{ color: activePillar.color }}
                              >
                                <GrpIcon className="h-3.5 w-3.5" />
                              </div>
                              <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                                {grp.title}
                              </h4>
                            </div>

                            <div className="space-y-1">
                              {grp.items.map((item, iIdx) => (
                                <div
                                  key={iIdx}
                                  className="flex items-center gap-2 text-xs text-slate-700 font-medium group"
                                >
                                  <div
                                    className="h-3.5 w-3.5 rounded-full flex items-center justify-center shrink-0 border"
                                    style={{
                                      borderColor: `${activePillar.color}60`,
                                      backgroundColor: `${activePillar.color}15`,
                                    }}
                                  >
                                    <Check
                                      className="h-2.5 w-2.5 font-bold"
                                      style={{ color: activePillar.color }}
                                    />
                                  </div>
                                  <span className="group-hover:text-slate-950 transition-colors">{item}</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Tech Stack */}
                    <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mr-1">
                        CORE STACK:
                      </span>
                      {activePillar.tech.map((t) => (
                        <motion.span
                          key={t}
                          whileHover={{ scale: 1.08, borderColor: activePillar.color }}
                          className="px-2 py-0.5 rounded-md bg-[#FAF7F2] border border-[#E8DFD1] text-[10px] font-mono font-semibold text-slate-700 shadow-2xs hover:border-amber-400 transition-colors cursor-default"
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Navigation Step Indicator in Center Card */}
                  <div className="relative z-10 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-600 font-bold">
                      PILLAR {activePillar.number} / 06
                    </span>

                    <div className="flex items-center gap-1.5">
                      {pillarsData.map((_, dotIdx) => (
                        <motion.div
                          key={dotIdx}
                          animate={{
                            width: currentPillarIdx === dotIdx ? 24 : 8,
                            backgroundColor: currentPillarIdx === dotIdx ? activePillar.color : '#e2e8f0',
                          }}
                          transition={{ duration: 0.3 }}
                          className="h-2 rounded-full"
                        />
                      ))}
                    </div>

                    <span className="text-slate-400">
                      Scroll to advance
                    </span>
                  </div>

                </motion.div>
              </AnimatePresence>
            </motion.div>

          </div>

          {/* Bottom Progress Scrubber Bar with Animated Moving Vehicle */}
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-xs font-mono text-slate-500 z-30 px-2 sm:px-6">
            <span className="font-bold text-slate-700">01 BUILD</span>
            
            <div className="relative flex-1 max-w-xs sm:max-w-xl h-2 bg-slate-200/90 rounded-full mx-4 flex items-center">
              {/* Active Progress Line */}
              <motion.div
                style={{ scaleX: smoothProgress }}
                className="h-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 origin-left rounded-full w-full"
              />

              {/* Animated Car Object Driving Directly on the Track (2px up) */}
              <motion.div
                style={{
                  left: useTransform(smoothProgress, [0, 1], ['0%', '100%']),
                  x: '-50%',
                }}
                className="absolute -top-[22px] flex items-center pointer-events-none z-20"
              >
                <div className="relative flex items-center drop-shadow-lg">
                  {/* Forward Headlight Beam */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-8 h-4 bg-gradient-to-r from-amber-400/60 via-amber-300/30 to-transparent blur-[2.5px] rounded-r-full pointer-events-none" />

                  {/* Clean Standalone Car SVG */}
                  <svg
                    className="w-12 h-6 text-amber-600 drop-shadow-xl"
                    viewBox="0 0 32 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Car Aerodynamic Body */}
                    <path
                      d="M2.5 10L6.5 3.5H19L24.5 7H29C30 7 31 7.8 31 9V11.5C31 12.3 30 13 29 13H2.5C1.5 13 0.5 12.3 0.5 11.5V10.5C0.5 10.2 1.5 10 2.5 10Z"
                      fill="#b45309"
                    />
                    {/* Metallic Body Highlight */}
                    <path
                      d="M6.5 3.5L19 3.5L24 7H7L6.5 3.5Z"
                      fill="#d97706"
                    />
                    {/* Side & Front Tinted Windows */}
                    <path
                      d="M7.5 4.5L10.5 8H18L16.5 4.5H7.5Z"
                      fill="#fef3c7"
                    />
                    <path
                      d="M19 8H23.8L21.8 5.2H19V8Z"
                      fill="#fef3c7"
                    />
                    {/* Bright Forward LED Headlight */}
                    <circle cx="29" cy="9.5" r="1.5" fill="#fef08a" />
                    <circle cx="29" cy="9.5" r="0.8" fill="#ffffff" />
                    {/* Rear Red Brake Light */}
                    <rect x="1" y="9" width="1.5" height="2.5" rx="0.75" fill="#ef4444" />
                    {/* Front & Rear Wheels with Detailed Amber Rims */}
                    <circle cx="8" cy="13" r="3.2" fill="#0f172a" stroke="#78350f" strokeWidth="1" />
                    <circle cx="8" cy="13" r="1.5" fill="#fbbf24" />
                    <circle cx="23" cy="13" r="3.2" fill="#0f172a" stroke="#78350f" strokeWidth="1" />
                    <circle cx="23" cy="13" r="1.5" fill="#fbbf24" />
                  </svg>
                </div>
              </motion.div>
            </div>

            <span className="font-bold text-slate-700">06 SUPPORT</span>
          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* 03 — FINAL CONCLUSION & CTA */}
      {/* Normal Page Scrolling Resumes Only After Theater Sequence Completes */}
      {/* ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-[#FAF7F2] border-t border-[#E8DFD1] text-center z-20">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
            <span className="w-5 h-[2px] bg-amber-700 rounded-full" />
            <span>LET'S BUILD SOMETHING EXTRAORDINARY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 leading-tight">
            Whatever You Need.{' '}
            <span className="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 bg-clip-text text-transparent">
              Let's Build It Together.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            From branding to software • From AI to automation • From training to marketing • From launch to long-term support
          </p>

          <div className="pt-4">
            <MagneticButton
              href="/contact"
              size="lg"
              className="bg-amber-700 hover:bg-amber-800 text-white font-bold px-10 py-4 rounded-2xl shadow-xl shadow-amber-700/25 text-base"
            >
              <span>Start a Project →</span>
            </MagneticButton>
          </div>
        </div>
      </section>

    </div>
  );
}
