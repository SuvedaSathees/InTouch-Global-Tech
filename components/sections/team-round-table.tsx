'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  Zap,
  Code2,
  Sparkles,
  Layers,
  Activity,
  ArrowUpRight,
  RefreshCw,
  Cpu,
  User,
} from 'lucide-react';
import { WhatsAppOfficialIcon } from '@/components/footer';

export type TeamMember = {
  id: number;
  name: string;
  role: string;
  domain: string;
  focus: string;
  bio: string;
  initials: string;
  seatNumber: string;
  seatLabel: string;
  color: string;
};

const members: TeamMember[] = [
  {
    id: 0,
    name: 'Srimun S S',
    role: 'Principal Systems Architect & Lead Engineer',
    domain: 'Enterprise ERP Architecture & Distributed Systems',
    focus: 'Multi-tenant ERP cores, database partitioning, and high-concurrency transaction pipelines.',
    bio: 'Leads end-to-end technical strategy, mission-critical system design, and sovereign code governance.',
    initials: 'SS',
    seatNumber: '01',
    seatLabel: 'Principal Architect',
    color: 'from-blue-600 to-indigo-600',
  },
  {
    id: 1,
    name: 'Suveda S',
    role: 'Head of Product Engineering & Fullstack Lead',
    domain: 'Next.js 15, TypeScript & Enterprise Web Apps',
    focus: 'Server-side rendering, type-safe API contracts, and sub-second web performance.',
    bio: 'Drives product delivery sprint cadence, developer experience, and bulletproof web application cores.',
    initials: 'SS',
    seatNumber: '02',
    seatLabel: 'Product Lead',
    color: 'from-cyan-600 to-blue-600',
  },
  {
    id: 2,
    name: 'Vignesh K',
    role: 'Lead Backend & Distributed Systems Architect',
    domain: 'Node.js, PostgreSQL & Microservices',
    focus: 'High-throughput REST/GraphQL APIs, Redis caching layers, and database optimization.',
    bio: 'Engineers robust backend infrastructure capable of handling high concurrent user workloads seamlessly.',
    initials: 'VK',
    seatNumber: '03',
    seatLabel: 'Backend Architect',
    color: 'from-indigo-600 to-purple-600',
  },
  {
    id: 3,
    name: 'Sivaraj A',
    role: 'Cloud Infrastructure & DevOps Lead',
    domain: 'Docker, Linux Clusters & CI/CD Pipelines',
    focus: 'Containerization, automated deployment pipelines, and bank-grade infrastructure security.',
    bio: 'Builds immutable deployment pipelines ensuring zero downtime and 100% environment parity.',
    initials: 'SA',
    seatNumber: '04',
    seatLabel: 'DevOps Lead',
    color: 'from-blue-600 to-sky-600',
  },
  {
    id: 4,
    name: 'Sunmathi S',
    role: 'Staff AI, ML & Data Pipelines Engineer',
    domain: 'Python, Neural Automation & Data Scraping',
    focus: 'Intelligent document processing, OCR automation, and business intelligence analytics.',
    bio: 'Designs autonomous AI integration and machine learning pipelines that replace repetitive manual tasks.',
    initials: 'SS',
    seatNumber: '05',
    seatLabel: 'AI & Data Lead',
    color: 'from-emerald-600 to-teal-600',
  },
  {
    id: 5,
    name: 'Sandhiya M',
    role: 'Lead UI/UX Designer & Interface Architect',
    domain: 'Figma Systems, Design Tokens & User Workflows',
    focus: 'High-converting enterprise dashboards, ergonomic operator screens, and accessible UI components.',
    bio: 'Crafts pixel-perfect, premium user experiences and design systems tailored for rapid business adoption.',
    initials: 'SM',
    seatNumber: '06',
    seatLabel: 'UI/UX Lead',
    color: 'from-amber-500 to-orange-600',
  },
  {
    id: 6,
    name: 'Subhasri A',
    role: 'Senior QA Automation & Quality Lead',
    domain: 'Playwright, Vitest & Concurrency Stress Testing',
    focus: 'Automated E2E regression suites, performance load benchmarks, and zero-defect deployments.',
    bio: 'Guarantees rock-solid software quality, automated test coverage, and strict code integrity standards.',
    initials: 'SA',
    seatNumber: '07',
    seatLabel: 'QA & Automation',
    color: 'from-rose-500 to-pink-600',
  },
];

export function TeamRoundTable() {
  const [activeId, setActiveId] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    if (!autoRotate) return;
    const interval = setInterval(() => {
      setActiveId((prev) => (prev + 1) % members.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [autoRotate]);

  const activeMember = members[activeId];

  // Top 3 Chairs (Seats 0, 1, 2)
  const topChairs = [members[0], members[1], members[2]];
  // Bottom 4 Chairs (Seats 3, 4, 5, 6)
  const bottomChairs = [members[3], members[4], members[5], members[6]];

  return (
    <div className="relative bg-white text-slate-900 select-none pt-32 pb-24 sm:pb-32 overflow-hidden">
      {/* Precision Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Ambient Lighting Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-tr from-blue-500/10 via-sky-400/10 to-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 space-y-10">
        
        {/* SECTION HEADER (Left-Aligned with Line Accent) */}
        <div className="max-w-4xl text-left">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-blue-600 mb-3"
          >
            <span className="w-4 h-[2px] bg-blue-600 rounded-full" />
            <span>EXECUTIVE BOARDROOM ARCHITECTURE</span>
          </motion.div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 leading-[1.08]">
            7 Engineers Seated Around Your Architecture.
          </h1>

          <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-2xl">
            Every client system is governed around our executive boardroom table. Click any chair to inspect active sprint missions, domain expertise, and direct WhatsApp connect.
          </p>
        </div>

        {/* Orbit Controls Bar */}
        <div className="flex items-center justify-between gap-4 border-b border-slate-200/80 pb-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-600">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <span>7-CHAIR CONFERENCE BOARDROOM TELEMETRY LIVE</span>
          </div>

          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-700 hover:text-blue-600 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200/80 transition-all cursor-pointer"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${autoRotate ? 'animate-spin' : ''}`} />
            <span>{autoRotate ? 'Auto-Cycle: ON' : 'Auto-Cycle: PAUSED'}</span>
          </button>
        </div>

        {/* 🏢 Perfectly Aligned Executive Rectangular Boardroom Stage */}
        <div className="relative mx-auto max-w-5xl my-6">
          
          {/* ⬆ TOP ROW OF CHAIRS (3 Centered Seats) */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-3xl mx-auto mb-3 sm:mb-4 px-2">
            {topChairs.map((member) => {
              const isSelected = activeMember.id === member.id;

              return (
                <motion.button
                  key={member.id}
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setActiveId(member.id);
                    setAutoRotate(false);
                  }}
                  className={`group relative flex items-center gap-2.5 rounded-2xl p-2.5 sm:p-3 transition-all cursor-pointer text-left ${
                    isSelected
                      ? 'border-2 border-blue-600 bg-white shadow-xl ring-4 ring-blue-500/20 z-20'
                      : 'border border-slate-200 bg-white/95 hover:bg-white shadow-xs hover:border-blue-400 z-10'
                  }`}
                >
                  <div className={`flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-gradient-to-tr ${member.color} text-white font-bold text-xs sm:text-sm shadow-xs shrink-0`}>
                    {member.initials}
                  </div>
                  
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[10px] font-mono font-bold text-slate-400">
                        SEAT {member.seatNumber}
                      </span>
                      {isSelected && (
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                      )}
                    </div>
                    <p className="text-xs font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors truncate">
                      {member.name}
                    </p>
                    <p className="text-[10px] text-slate-500 font-mono truncate">
                      {member.seatLabel}
                    </p>
                  </div>

                  {/* Visual Connection Pin to Table Top */}
                  <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-white shadow-xs ${isSelected ? 'bg-blue-600' : 'bg-slate-300'}`}>
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* 🪑 CENTRAL RECTANGULAR BOARDROOM CONFERENCE DESK */}
          <div className="relative rounded-[32px] sm:rounded-[40px] border-2 border-blue-500/30 bg-gradient-to-b from-sky-50/70 via-white to-slate-50/90 shadow-2xl backdrop-blur-2xl p-6 sm:p-10 text-center min-h-[320px] flex items-center justify-center overflow-hidden z-10">
            
            {/* Table Surface Edge Accent Ribbon */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600" />
            <div className="absolute bottom-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600 opacity-40" />

            {/* Subtle Blueprint Grid Pattern inside Desk Glass */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(to right, #0284c7 1px, transparent 1px), linear-gradient(to bottom, #0284c7 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />

            {/* Central Holographic Inspection Display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMember.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.22 }}
                className="relative z-10 w-full space-y-4 text-left"
              >
                {/* Header Row: Avatar, Member Name, Seat Badge & WhatsApp Action */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 border-b border-slate-200/80 pb-4">
                  <div className="flex items-center gap-3.5">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr ${activeMember.color} text-white font-bold text-base shadow-sm shrink-0`}>
                      {activeMember.initials}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-black text-slate-950 leading-tight">
                          {activeMember.name}
                        </h3>
                        <span className="rounded-md bg-blue-100 border border-blue-200 px-2 py-0.5 text-[10px] font-mono font-bold text-blue-800">
                          Seat {activeMember.seatNumber}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm font-bold text-blue-600 leading-tight mt-0.5">
                        {activeMember.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 shrink-0">
                    <a
                      href={`https://wa.me/918667709294?text=Hello%20Nexora,%20I%20would%20like%20to%20connect%20with%20${encodeURIComponent(activeMember.name)}%20regarding%20a%20project.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2 text-xs font-mono font-bold shadow-xs transition-all cursor-pointer"
                    >
                      <WhatsAppOfficialIcon className="h-4 w-4 text-white" />
                      <span>Direct WhatsApp</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

                {/* Domain Expertise & Active Sprint Mission Deck */}
                <div className="grid gap-3.5 sm:grid-cols-2 text-xs">
                  <div className="p-3.5 rounded-2xl bg-white/90 border border-slate-200/80 shadow-2xs">
                    <span className="text-[10px] font-mono font-bold uppercase text-slate-400 block mb-1">
                      Domain Architecture:
                    </span>
                    <p className="text-slate-900 font-semibold leading-relaxed text-xs sm:text-[13px]">
                      {activeMember.domain}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/90 border border-slate-200/80 shadow-2xs">
                    <span className="text-[10px] font-mono font-bold uppercase text-slate-400 block mb-1">
                      Active Sprint Mission:
                    </span>
                    <p className="text-slate-900 font-semibold leading-relaxed text-xs sm:text-[13px]">
                      {activeMember.focus}
                    </p>
                  </div>
                </div>

                {/* Bio Quote & Live Telemetry Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-200/80 pt-3.5">
                  <p className="text-xs text-slate-600 italic font-normal leading-relaxed">
                    &ldquo;{activeMember.bio}&rdquo;
                  </p>

                  <div className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 shrink-0">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>ACTIVE IN PRODUCTION SPRINT</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ⬇ BOTTOM ROW OF CHAIRS (4 Centered Seats) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mt-3 sm:mt-4 px-2">
            {bottomChairs.map((member) => {
              const isSelected = activeMember.id === member.id;

              return (
                <motion.button
                  key={member.id}
                  whileHover={{ y: 4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setActiveId(member.id);
                    setAutoRotate(false);
                  }}
                  className={`group relative flex items-center gap-2.5 rounded-2xl p-2.5 sm:p-3 transition-all cursor-pointer text-left ${
                    isSelected
                      ? 'border-2 border-blue-600 bg-white shadow-xl ring-4 ring-blue-500/20 z-20'
                      : 'border border-slate-200 bg-white/95 hover:bg-white shadow-xs hover:border-blue-400 z-10'
                  }`}
                >
                  {/* Visual Connection Pin to Table Bottom */}
                  <span className={`absolute -top-2 left-1/2 -translate-x-1/2 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-white shadow-xs ${isSelected ? 'bg-blue-600' : 'bg-slate-300'}`}>
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  </span>

                  <div className={`flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-gradient-to-tr ${member.color} text-white font-bold text-xs sm:text-sm shadow-xs shrink-0`}>
                    {member.initials}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[10px] font-mono font-bold text-slate-400">
                        SEAT {member.seatNumber}
                      </span>
                      {isSelected && (
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                      )}
                    </div>
                    <p className="text-xs font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors truncate">
                      {member.name}
                    </p>
                    <p className="text-[10px] text-slate-500 font-mono truncate">
                      {member.seatLabel}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
}
