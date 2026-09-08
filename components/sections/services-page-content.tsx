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
  const IconComp =
    id === 'build'
      ? Code2
      : id === 'automate'
      ? Bot
      : id === 'train'
      ? GraduationCap
      : id === 'create'
      ? Sparkles
      : id === 'transform'
      ? TrendingUp
      : ShieldCheck;

  return (
    <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shrink-0">
      <div className="absolute inset-0 rounded-2xl border border-blue-500/30 bg-blue-500/5" />
      <div className="relative z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-blue-400 via-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-lg shadow-blue-600/30 border border-blue-200">
        <IconComp className="w-6 h-6 text-white drop-shadow-md" />
      </div>
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
    color: '#0066FF',
    glowColor: 'rgba(0, 102, 255, 0.28)',
    borderActive: 'border-blue-500/90',
    badgeBg: 'bg-blue-100/95 text-blue-900 border-blue-300',
    subBg: 'from-blue-500/8 to-transparent',
    initPos: { x: -280, y: -160, rot: -2 },
    scatterPos: { x: -450, y: -240, rot: -8, scale: 0.82 },
    floatDuration: 5.2,
    groups: [
      {
        title: 'Web & Digital Platforms',
        icon: Globe,
        items: [
          'High-Speed Custom Web Apps',
          'Online Stores / E-Commerce Hubs',
          'Responsive UI/UX & Brand Kits',
          'Admin Panels & Cloud Portals',
        ],
      },
      {
        title: 'Enterprise Systems & Mobile',
        icon: Layers,
        items: [
          'Custom ERP & HRMS Applications',
          'CRM, Billing & POS Solutions',
          'Cross-Platform Android & iOS Apps',
          'Cloud Databases & REST APIs',
        ],
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
    color: '#0066FF',
    glowColor: 'rgba(0, 102, 255, 0.28)',
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
        items: [
          'AI Customer Chatbots',
          'AI Business Assistants',
          'AI Document Scanning (OCR)',
          'AI Content Generation',
        ],
      },
      {
        title: 'System Integration',
        icon: RefreshCw,
        items: [
          'API Integrations',
          'ERP & CRM Data Sync',
          'WhatsApp Business Integration',
          'Payment Gateway Integration',
        ],
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
    color: '#0066FF',
    glowColor: 'rgba(0, 102, 255, 0.28)',
    borderActive: 'border-blue-500/90',
    badgeBg: 'bg-blue-100/95 text-blue-900 border-blue-300',
    subBg: 'from-blue-500/8 to-transparent',
    initPos: { x: -280, y: 0, rot: -1 },
    scatterPos: { x: -470, y: 0, rot: -6, scale: 0.82 },
    floatDuration: 4.8,
    groups: [
      {
        title: 'Staff & Team Training',
        icon: GraduationCap,
        items: [
          'AI & ChatGPT Training for Staff',
          'ERP & Custom Software Training',
          'Website & Admin Portal Management',
          'Digital Tools & Modern Workflows',
        ],
      },
      {
        title: 'Workforce Enablement',
        icon: Zap,
        items: [
          'Operations & Sales Workflows',
          'Automated Data Entry Training',
          'Team Sandbox Environments',
          'Continuous Skills Upgrades',
        ],
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
    color: '#0066FF',
    glowColor: 'rgba(0, 102, 255, 0.28)',
    borderActive: 'border-blue-500/90',
    badgeBg: 'bg-blue-100/95 text-blue-900 border-blue-300',
    subBg: 'from-blue-500/8 to-transparent',
    initPos: { x: 280, y: 0, rot: 1 },
    scatterPos: { x: 470, y: 0, rot: 6, scale: 0.82 },
    floatDuration: 5.7,
    groups: [
      {
        title: 'Commercial Video Production',
        icon: Video,
        items: [
          'Brand & Promo Commercials',
          'Product Demo Videos',
          'Social Media Reels & Shorts',
          'AI Video Ads & Motion Graphics',
        ],
      },
      {
        title: 'Advertising & Brand Creatives',
        icon: Target,
        items: [
          'Google & Meta Ad Designs',
          'Company Profiles & Pitch Decks',
          'Corporate Brochures & Catalogs',
          'High-Conversion Sales Copywriting',
        ],
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
    color: '#0066FF',
    glowColor: 'rgba(0, 102, 255, 0.28)',
    borderActive: 'border-blue-500/90',
    badgeBg: 'bg-blue-100/95 text-blue-900 border-blue-300',
    subBg: 'from-blue-500/8 to-transparent',
    initPos: { x: -280, y: 160, rot: -2 },
    scatterPos: { x: -450, y: 240, rot: -8, scale: 0.82 },
    floatDuration: 6.4,
    groups: [
      {
        title: 'Digital Transformation',
        icon: TrendingUp,
        items: [
          'Paper → Digital Pipeline Upgrades',
          'Upgrade Old & Slow Software',
          'Workflow Automation & Audits',
          'Digital Roadmaps & Strategy',
        ],
      },
      {
        title: 'Business Growth & SEO',
        icon: Search,
        items: [
          'Google Search Ranking (SEO)',
          'Google Maps & Business Profile',
          'Speed Up Daily Processes',
          'Cut Costs Through Technology',
        ],
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
    color: '#0066FF',
    glowColor: 'rgba(0, 102, 255, 0.28)',
    borderActive: 'border-blue-500/90',
    badgeBg: 'bg-blue-100/95 text-blue-900 border-blue-300',
    subBg: 'from-blue-500/8 to-transparent',
    initPos: { x: 280, y: 160, rot: 2 },
    scatterPos: { x: 450, y: 240, rot: 8, scale: 0.82 },
    floatDuration: 5.0,
    groups: [
      {
        title: 'Software Support & Upgrades',
        icon: ShieldCheck,
        items: [
          'Bug Fixing & Error Resolution',
          'Website & Software Maintenance',
          'New Features & UI Improvements',
          'Performance & Security Upgrades',
        ],
      },
      {
        title: 'Technical Support & AMC',
        icon: Lock,
        items: [
          'Server & Hosting Support',
          'Database Backups & Recovery',
          'Annual Maintenance / AMC',
          'Dedicated Developer on Demand',
        ],
      },
    ],
    tech: ['Cloudflare Enterprise', 'Docker', 'Supabase', 'Vercel Enterprise', 'Ubuntu Linux Servers', 'GitHub CI/CD'],
  },
];

export function ServicesPageContent() {
  const sceneContainerRef = useRef<HTMLDivElement>(null);
  const mobilePillarsScrollRef = useRef<HTMLDivElement>(null);
  const [activeHeroIdx, setActiveHeroIdx] = useState<number>(0);
  const [isHeroHovered, setIsHeroHovered] = useState<boolean>(false);
  const [currentPillarIdx, setCurrentPillarIdx] = useState<number>(0);
  const [isScattered, setIsScattered] = useState<boolean>(false);

  // Auto-advance every 3 seconds to next box in both website and mobile responsive
  useEffect(() => {
    if (isHeroHovered) return;

    const timer = setInterval(() => {
      setActiveHeroIdx((prev) => {
        const nextIdx = (prev + 1) % pillarsData.length;
        if (mobilePillarsScrollRef.current) {
          const container = mobilePillarsScrollRef.current;
          const cardWidth = container.clientWidth;
          if (cardWidth > 0) {
            container.scrollTo({
              left: nextIdx * cardWidth,
              behavior: 'smooth',
            });
          }
        }
        return nextIdx;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [isHeroHovered]);

  const handleMobilePillarsScroll = () => {
    if (!mobilePillarsScrollRef.current) return;
    const container = mobilePillarsScrollRef.current;
    const cardWidth = container.clientWidth;
    if (cardWidth === 0) return;
    const newIndex = Math.round(container.scrollLeft / cardWidth);
    if (newIndex >= 0 && newIndex < pillarsData.length && newIndex !== activeHeroIdx) {
      setActiveHeroIdx(newIndex);
    }
  };

  const scrollToMobilePillar = (idx: number) => {
    setActiveHeroIdx(idx);
    if (!mobilePillarsScrollRef.current) return;
    const container = mobilePillarsScrollRef.current;
    const cardWidth = container.clientWidth;
    if (cardWidth > 0) {
      container.scrollTo({
        left: idx * cardWidth,
        behavior: 'smooth',
      });
    }
  };



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
    <div className="relative bg-[#F8FAFC] text-slate-900 select-none">
      
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
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[920px] h-[520px] rounded-full blur-[170px] pointer-events-none overflow-hidden"
      />

      {/* ========================================================================= */}
      {/* 01 — HERO */}
      {/* ========================================================================= */}
      <section className="relative pt-32 pb-10 sm:pt-40 sm:pb-14 border-b border-slate-200/80 z-10">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left space-y-8">
          
          <div className="max-w-4xl space-y-3">
            {/* Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600"
            >
              <span className="w-5 h-[2px] bg-blue-600 rounded-full" />
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
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
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
            onMouseEnter={() => setIsHeroHovered(true)}
            onMouseLeave={() => setIsHeroHovered(false)}
            className="rounded-3xl border border-slate-200/80 bg-white/90 backdrop-blur-md p-3.5 sm:p-6 shadow-lg shadow-blue-950/5 max-w-6xl w-full"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2.5 sm:mb-3 text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-blue-600 font-bold uppercase tracking-wider text-[11px]">
                <span className="h-2 w-2 rounded-full bg-cyan-500 animate-ping" />
                CAPABILITY FLOW
              </span>
              <span className="font-semibold text-slate-600 text-[11px]">
                {pillarsData[activeHeroIdx].number} / 06 • <span className="text-blue-600 font-bold">{pillarsData[activeHeroIdx].name}</span>
              </span>
            </div>

            {/* Mobile 3x2 Grid View (sm:hidden) - 100% Width, Zero Overflow / Cut-off */}
            <div className="grid grid-cols-3 gap-1.5 sm:hidden py-0.5">
              {pillarsData.map((p, idx) => {
                const isActive = activeHeroIdx === idx;
                const PIcon = p.icon;

                return (
                  <button
                    key={p.name}
                    onClick={() => scrollToMobilePillar(idx)}
                    className={`relative flex items-center justify-center gap-1 px-1.5 py-2 rounded-xl text-[11px] font-black transition-all duration-300 cursor-pointer select-none ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-600/25 border border-blue-700 ring-2 ring-blue-500/20 scale-[1.02]'
                        : 'bg-slate-50 text-slate-700 border border-slate-200/90 hover:bg-white hover:text-blue-600'
                    }`}
                  >
                    <PIcon className={`h-3 w-3 shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    <span className="truncate">{p.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Desktop Full Flow Rail with Arrows (hidden sm:flex) */}
            <div className="hidden sm:flex items-center justify-between gap-2 w-full py-1">
              {pillarsData.map((p, idx) => {
                const isActive = activeHeroIdx === idx;

                return (
                  <React.Fragment key={p.name}>
                    <button
                      onClick={() => scrollToMobilePillar(idx)}
                      className={`relative flex items-center justify-center gap-1 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl transition-all duration-300 cursor-pointer text-xs sm:text-sm md:text-base font-black whitespace-nowrap shrink-0 ${
                        isActive
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-600/25 border border-blue-700 ring-2 ring-blue-500/20 scale-[1.03]'
                          : 'bg-slate-50 text-slate-800 border border-slate-200 hover:border-blue-400 hover:text-blue-600 hover:bg-white'
                      }`}
                    >
                      <span>{p.name}</span>
                    </button>

                    {idx < pillarsData.length - 1 && (
                      <span
                        className={`font-bold text-xs md:text-sm transition-colors duration-300 shrink-0 ${
                          activeHeroIdx === idx || activeHeroIdx === idx + 1
                            ? 'text-blue-600 font-black'
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

            {/* Active Pillar Description Card with smooth AnimatePresence transition */}
            <div className="mt-2.5 pt-2 border-t border-slate-100 text-left min-h-[42px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeHeroIdx}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="flex items-start gap-2"
                >
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[10px] font-mono font-bold uppercase shrink-0 mt-0.5 border border-blue-200/70">
                    {pillarsData[activeHeroIdx].name}
                  </span>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    <strong className="text-slate-900 font-bold">{pillarsData[activeHeroIdx].tagline}</strong> — {pillarsData[activeHeroIdx].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
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
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold px-8 py-3.5 rounded-2xl shadow-xl shadow-blue-600/20 text-sm"
            >
              <span>Tell Us What You Need →</span>
            </MagneticButton>
          </motion.div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02 — MOBILE RESPONSIVE CAPABILITY STUDIO (< lg screens) — TOUCH SWIPE */}
      {/* ========================================================================= */}
      <section className="block lg:hidden relative bg-[#F8FAFC] py-10 px-4 border-b border-slate-200/80 z-20 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-500 animate-ping" />
              06 CORE CAPABILITIES
            </span>
          </div>

          {/* Horizontal Snap-Swipe Carousel Container */}
          <div
            ref={mobilePillarsScrollRef}
            onScroll={handleMobilePillarsScroll}
            className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth w-full py-1"
          >
            {pillarsData.map((pillar, idx) => (
              <div
                key={pillar.id}
                className="w-full shrink-0 snap-center snap-always rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm text-left space-y-6 overflow-hidden"
              >
                {/* Header inside card */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-600">
                    {pillar.badge}
                  </span>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400">
                    <button
                      onClick={() => scrollToMobilePillar(Math.max(0, idx - 1))}
                      disabled={idx === 0}
                      className="px-1.5 py-0.5 rounded text-slate-600 disabled:opacity-30 hover:bg-slate-100 cursor-pointer font-bold"
                    >
                      ←
                    </button>
                    <span>0{idx + 1} / 06</span>
                    <button
                      onClick={() => scrollToMobilePillar(Math.min(pillarsData.length - 1, idx + 1))}
                      disabled={idx === pillarsData.length - 1}
                      className="px-1.5 py-0.5 rounded text-slate-600 disabled:opacity-30 hover:bg-slate-100 cursor-pointer font-bold"
                    >
                      →
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Pillar3DObject id={pillar.id} color={pillar.color} />
                  <div>
                    <h3 className="text-2xl font-black text-slate-950">
                      {pillar.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-semibold">
                      {pillar.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {pillar.desc}
                </p>

                {/* 2 Group Modules Stack */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pillar.groups.map((grp, gIdx) => {
                    const GrpIcon = grp.icon;
                    return (
                      <div key={gIdx} className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 rounded-lg bg-blue-100 text-blue-600">
                            <GrpIcon className="w-4 h-4" />
                          </div>
                          <h4 className="text-xs font-bold text-slate-900">{grp.title}</h4>
                        </div>

                        <ul className="space-y-1.5">
                          {grp.items.map((item, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-2 text-[11px] text-slate-700 font-semibold">
                              <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>

                {/* Tech Stack */}
                <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {pillar.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-lg bg-slate-100 text-[10px] font-mono font-semibold text-slate-700">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/20"
                  >
                    <span>Tell Us What You Need →</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02 — THE SINGLE FULL-SCREEN PINNED VIEWPORT SCENE (DESKTOP ONLY) */}
      {/* ========================================================================= */}
      <div ref={sceneContainerRef} className="relative hidden lg:block h-[550vh]">
        
        {/* Sticky 100vh Full-Screen Pinned Stage */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between p-4 sm:p-6 lg:p-8 z-20">
          
          {/* Top HUD State Status */}
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between z-30 px-2 sm:px-6">
            <div className="flex items-center gap-2.5">
              <span
                className="h-2.5 w-2.5 rounded-full animate-ping"
                style={{ backgroundColor: activePillar.color }}
              />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200/80 shadow-xs">
                CAPABILITY THEATER
              </span>
            </div>

            <div className="text-xs font-mono text-slate-600 bg-white/90 px-3.5 py-1.5 rounded-xl border border-slate-200/80 shadow-xs flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: activePillar.color }} />
              {!isScattered ? (
                <span className="text-blue-600 font-bold">STATE 1: 6 CAPABILITIES ORGANIZED</span>
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
                      ? `${pillar.borderActive} ring-2 ring-blue-500/30 shadow-2xl scale-[1.04]`
                      : 'border-slate-200/80'
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
              className="relative z-30 w-full max-w-[880px] px-2 sm:px-4 pointer-events-auto"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePillar.id}
                  initial={{ opacity: 0, y: 28, scale: 0.94, rotateX: 6 }}
                  animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                  exit={{ opacity: 0, y: -28, scale: 0.94, rotateX: -6 }}
                  transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-3xl border border-slate-200/90 bg-white/95 backdrop-blur-2xl shadow-2xl p-6 sm:p-8 space-y-5 text-left relative overflow-hidden min-h-[530px] flex flex-col justify-between"
                  style={{
                    boxShadow: `0 30px 80px -15px ${activePillar.glowColor}, 0 0 0 1px rgba(226, 232, 240, 0.9)`,
                  }}
                >
                  {/* Top Ambient Glow Strip */}
                  <div
                    className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600"
                    style={{
                      background: `linear-gradient(90deg, ${activePillar.color}, #38bdf8, ${activePillar.color})`,
                    }}
                  />

                  {/* Faint Background Number Watermark */}
                  <motion.span
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-1 right-6 text-8xl sm:text-9xl font-black font-mono tracking-tighter text-slate-900/[0.04] select-none pointer-events-none"
                  >
                    {activePillar.number}
                  </motion.span>

                  <div className="space-y-4 relative z-10">
                    {/* Header with 3D Animated Interactive Object */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                      <div className="flex items-center gap-4 sm:gap-5">
                        {/* 3D Animated Hero Object */}
                        <Pillar3DObject id={activePillar.id} color={activePillar.color} />

                        <div className="space-y-1.5">
                          <div className="flex flex-wrap items-center gap-2">
                            <span
                              className="text-xs font-bold uppercase tracking-wider font-mono px-2 py-0.5 rounded-lg bg-slate-50 border border-slate-200/80"
                              style={{ color: activePillar.color }}
                            >
                              {activePillar.badge}
                            </span>
                          </div>

                          <div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
                              {activePillar.name}
                            </h2>
                            <p className="text-xs sm:text-sm font-medium text-slate-600 max-w-xl">
                              <strong className="text-slate-900 font-bold">{activePillar.tagline}</strong> — {activePillar.desc}
                            </p>
                          </div>
                        </div>
                      </div>

                      <MagneticButton
                        href="/contact"
                        size="sm"
                        className="shrink-0 text-white font-bold px-6 py-3 rounded-2xl text-xs sm:text-sm self-start sm:self-auto transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-blue-600/25 cursor-pointer group flex items-center gap-1.5"
                        style={{
                          background: `linear-gradient(135deg, ${activePillar.color}, #0284c7)`,
                          boxShadow: `0 10px 25px -5px ${activePillar.glowColor}`,
                        }}
                      >
                        <span>Request {activePillar.name}</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </MagneticButton>
                    </div>

                    {/* Subcategories Grid (Guaranteed identical box sizes and row heights) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
                      {activePillar.groups.map((grp, gIdx) => {
                        const GrpIcon = grp.icon;

                        return (
                          <motion.div
                            key={gIdx}
                            initial={{ opacity: 0, y: 12, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.28, delay: gIdx * 0.05 }}
                            whileHover={{ y: -2 }}
                            className="p-4 rounded-2xl border border-slate-200/90 bg-gradient-to-br from-white via-slate-50/60 to-blue-50/20 hover:border-blue-400/80 hover:shadow-md hover:shadow-blue-500/5 transition-all shadow-2xs cursor-pointer group h-full min-h-[225px] flex flex-col justify-between"
                          >
                            {/* Card Header with Fixed Height for Perfect Alignment */}
                            <div className="flex items-center justify-between border-b border-slate-200/70 pb-2.5 h-10">
                              <div className="flex items-center gap-2.5 min-w-0 pr-2">
                                <div
                                  className="h-7 w-7 rounded-lg flex items-center justify-center border shadow-2xs transition-transform group-hover:scale-105 shrink-0"
                                  style={{
                                    backgroundColor: `${activePillar.color}12`,
                                    borderColor: `${activePillar.color}35`,
                                    color: activePillar.color,
                                  }}
                                >
                                  <GrpIcon className="h-4 w-4" />
                                </div>
                                <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                                  {grp.title}
                                </h3>
                              </div>
                              <span className="text-[10px] font-mono font-semibold text-slate-600 bg-white border border-slate-200 px-2 py-0.5 rounded-md shadow-2xs shrink-0">
                                4 Modules
                              </span>
                            </div>

                            {/* Standardized 4 Item Rows - Perfectly Aligned */}
                            <div className="space-y-1.5 flex-1 flex flex-col justify-evenly pt-2">
                              {grp.items.map((item, iIdx) => (
                                <div
                                  key={iIdx}
                                  className="flex items-center gap-2.5 text-xs text-slate-700 font-semibold group/item hover:translate-x-1 transition-transform h-7"
                                >
                                  <div
                                    className="h-4 w-4 rounded-full flex items-center justify-center shrink-0 border shadow-2xs transition-colors"
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
                                  <span className="group-hover/item:text-slate-950 transition-colors leading-relaxed truncate">
                                    {item}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Tech Stack */}
                    <div className="pt-2.5 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-wider mr-1">
                        CORE STACK:
                      </span>
                      {activePillar.tech.map((t) => (
                        <motion.span
                          key={t}
                          whileHover={{ scale: 1.05, y: -1 }}
                          className="px-2.5 py-1 rounded-lg bg-slate-100/80 hover:bg-white border border-slate-200/90 hover:border-blue-400 text-[10px] font-mono font-bold text-slate-700 hover:text-blue-600 shadow-2xs transition-all cursor-default inline-flex items-center gap-1.5"
                        >
                          <span
                            className="h-1.5 w-1.5 rounded-full"
                            style={{ backgroundColor: activePillar.color }}
                          />
                          <span>{t}</span>
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Navigation Step Indicator in Center Card */}
                  <div className="relative z-10 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-700 font-bold">
                      PILLAR {activePillar.number} / 06
                    </span>

                    <div className="flex items-center gap-1.5">
                      {pillarsData.map((_, dotIdx) => (
                        <motion.div
                          key={dotIdx}
                          animate={{
                            width: currentPillarIdx === dotIdx ? 26 : 8,
                            backgroundColor: currentPillarIdx === dotIdx ? activePillar.color : '#e2e8f0',
                          }}
                          transition={{ duration: 0.3 }}
                          className="h-2 rounded-full shadow-2xs"
                        />
                      ))}
                    </div>

                    <span className="text-slate-600 font-medium inline-flex items-center gap-1">
                      <span>Scroll to advance</span>
                      <ArrowRight className="h-3 w-3 text-slate-400" />
                    </span>
                  </div>

                </motion.div>
              </AnimatePresence>
            </motion.div>

          </div>

          {/* Bottom Progress Scrubber Bar with Animated Moving Vehicle */}
          <div className="max-w-7xl mx-auto w-full flex items-center justify-center text-xs font-mono text-slate-500 z-30 px-2 sm:px-6">
            <div className="relative w-full max-w-xs sm:max-w-xl h-2 bg-slate-200/90 rounded-full mx-auto flex items-center shadow-inner">
              {/* Active Progress Line */}
              <motion.div
                style={{ scaleX: smoothProgress }}
                className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500 origin-left rounded-full w-full shadow-[0_0_12px_rgba(56,189,248,0.5)]"
              />

              {/* Animated Cyber Vehicle Driving Directly on the Track */}
              <motion.div
                style={{
                  left: useTransform(smoothProgress, [0, 1], ['0%', '100%']),
                  x: '-50%',
                }}
                className="absolute -top-[22px] flex items-center pointer-events-none z-20"
              >
                <div className="relative flex items-center drop-shadow-xl">
                  {/* Forward Cyan LED Headlight Beam */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-10 h-5 bg-gradient-to-r from-cyan-300/80 via-cyan-400/40 to-transparent blur-[3px] rounded-r-full pointer-events-none" />

                  {/* High-Tech Cyber Vehicle SVG */}
                  <svg
                    className="w-12 h-6 drop-shadow-xl"
                    viewBox="0 0 32 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Aerodynamic Chassis Base */}
                    <path
                      d="M2.5 10L6.5 3.5H19L24.5 7H29C30 7 31 7.8 31 9V11.5C31 12.3 30 13 29 13H2.5C1.5 13 0.5 12.3 0.5 11.5V10.5C0.5 10.2 1.5 10 2.5 10Z"
                      fill="#0f172a"
                    />
                    {/* Metallic Cyber Blue Body Highlight */}
                    <path
                      d="M6.5 3.5L19 3.5L24 7H7L6.5 3.5Z"
                      fill="#2563eb"
                    />
                    {/* Glowing Tech Accent Line */}
                    <path
                      d="M7 7.2H24.2"
                      stroke="#38bdf8"
                      strokeWidth="0.6"
                      strokeLinecap="round"
                    />
                    {/* Front & Side Cyan Tinted Cockpit Glass */}
                    <path
                      d="M7.5 4.5L10.5 8H18L16.5 4.5H7.5Z"
                      fill="#bae6fd"
                    />
                    <path
                      d="M19 8H23.8L21.8 5.2H19V8Z"
                      fill="#e0f2fe"
                    />
                    {/* Bright Forward Xenon/Laser LED Headlight */}
                    <circle cx="29" cy="9.5" r="1.6" fill="#38bdf8" />
                    <circle cx="29" cy="9.5" r="0.9" fill="#ffffff" />
                    {/* Rear Neon Cyan Tail Accent */}
                    <rect x="1" y="9" width="1.5" height="2.5" rx="0.75" fill="#06b6d4" />
                    {/* Cyber Wheels with Electric Cyan Rims */}
                    <circle cx="8" cy="13" r="3.2" fill="#0b0f19" stroke="#1e293b" strokeWidth="1" />
                    <circle cx="8" cy="13" r="1.5" fill="#38bdf8" />
                    <circle cx="23" cy="13" r="3.2" fill="#0b0f19" stroke="#1e293b" strokeWidth="1" />
                    <circle cx="23" cy="13" r="1.5" fill="#38bdf8" />
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* 03 — FINAL CONCLUSION & CTA */}
      {/* Normal Page Scrolling Resumes Only After Theater Sequence Completes */}
      {/* ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-[#F8FAFC] border-t border-slate-200/80 text-center z-20">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
            <span className="w-5 h-[2px] bg-blue-600 rounded-full" />
            <span>LET&apos;S BUILD SOMETHING EXTRAORDINARY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 leading-tight">
            Whatever You Need.{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
              Let&apos;s Build It Together.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            From branding to software • From AI to automation • From training to marketing • From launch to long-term support
          </p>

          <div className="pt-4">
            <MagneticButton
              href="/contact"
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold px-10 py-4 rounded-2xl shadow-xl shadow-blue-600/25 text-base"
            >
              <span>Start a Project →</span>
            </MagneticButton>
          </div>
        </div>
      </section>

    </div>
  );
}
