'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, Code2, Layers, Database, Terminal, Shield, Cpu, Laptop, Activity } from 'lucide-react';

export type TeamMember = {
  id: number;
  name: string;
  role: string;
  initials: string;
  seatNumber: string;
  icon: typeof Code2;
  // Position around the table in percentage coordinates
  posX: number;
  posY: number;
  laserTargetX: number;
  laserTargetY: number;
};

const members: TeamMember[] = [
  {
    id: 0,
    name: 'Srimun S S',
    role: 'Principal Systems Architect',
    initials: 'SS',
    seatNumber: '01',
    icon: Database,
    posX: 25,
    posY: 9,
    laserTargetX: -140,
    laserTargetY: -100,
  },
  {
    id: 1,
    name: 'Suveda S',
    role: 'Product Lead',
    initials: 'SS',
    seatNumber: '02',
    icon: Layers,
    posX: 50,
    posY: 7,
    laserTargetX: 0,
    laserTargetY: -120,
  },
  {
    id: 2,
    name: 'Vignesh K',
    role: 'Backend Architect',
    initials: 'VK',
    seatNumber: '03',
    icon: Terminal,
    posX: 75,
    posY: 9,
    laserTargetX: 140,
    laserTargetY: -100,
  },
  {
    id: 3,
    name: 'Sivaraj A',
    role: 'DevOps Lead',
    initials: 'SA',
    seatNumber: '04',
    icon: Shield,
    posX: 8,
    posY: 50,
    laserTargetX: -260,
    laserTargetY: 0,
  },
  {
    id: 4,
    name: 'Sunmathi S',
    role: 'AI & Data Lead',
    initials: 'SS',
    seatNumber: '05',
    icon: Cpu,
    posX: 25,
    posY: 91,
    laserTargetX: -140,
    laserTargetY: 100,
  },
  {
    id: 5,
    name: 'Sandhiya M',
    role: 'UI/UX Lead',
    initials: 'SM',
    seatNumber: '06',
    icon: Laptop,
    posX: 50,
    posY: 93,
    laserTargetX: 0,
    laserTargetY: 120,
  },
  {
    id: 6,
    name: 'Subhasri A',
    role: 'QA & Automation Lead',
    initials: 'SA',
    seatNumber: '07',
    icon: Activity,
    posX: 75,
    posY: 91,
    laserTargetX: 140,
    laserTargetY: 100,
  },
];

export function TeamRoundTable() {
  const [activeId, setActiveId] = useState(1); // Suveda S active by default
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    if (!autoRotate) return;
    const interval = setInterval(() => {
      setActiveId((prev) => (prev + 1) % members.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [autoRotate]);

  const activeMember = members[activeId];

  return (
    <div className="relative bg-[#FAF7F2] text-slate-900 select-none pt-28 pb-24 sm:pb-32 overflow-hidden">
      {/* Precision Blueprint Ambient Grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 space-y-8">
        
        {/* HEADER: Title & Auto-Cycle Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">
              <span className="w-5 h-[2px] bg-amber-700 rounded-full" />
              <span>THE ENGINEERING CORE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 leading-tight">
              The People Behind the System
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-normal max-w-2xl">
              Seven disciplines. One collaborative engineering table.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setAutoRotate(!autoRotate)}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-700 hover:text-amber-800 bg-white px-3.5 py-2 rounded-xl border border-[#E8DFD1] shadow-2xs transition-all cursor-pointer"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${autoRotate ? 'animate-spin text-amber-700' : ''}`} />
              <span>{autoRotate ? 'Auto-Cycle: ON' : 'Auto-Cycle: PAUSED'}</span>
            </button>
          </div>
        </div>

        {/* 🎬 100% PURE CODE & VECTOR COLLABORATIVE BOARDROOM TABLE */}
        <div className="relative mx-auto w-full max-w-5xl rounded-3xl sm:rounded-[44px] border border-[#E8DFD1] bg-gradient-to-b from-[#F4EEE4] via-[#F4EEE4]/80 to-[#EAE0D1]/60 p-4 sm:p-8 shadow-2xl overflow-hidden min-h-[580px] sm:min-h-[640px] flex items-center justify-center">
          
          {/* Animated Table SVG Laser Beams & Photons */}
          <svg
            viewBox="-400 -240 800 480"
            className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-10"
          >
            {/* Concentric Telemetry Orbital Rings on Table Surface */}
            <circle
              cx="0"
              cy="0"
              r="220"
              fill="none"
              stroke="#b45309"
              strokeOpacity="0.16"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <ellipse
              cx="0"
              cy="0"
              rx="340"
              ry="180"
              fill="none"
              stroke="#b45309"
              strokeOpacity="0.18"
              strokeWidth="1.2"
              strokeDasharray="6 6"
            />

            {/* Connecting Lasers & Animated Data Photons */}
            {members.map((member) => {
              const isSelected = activeMember.id === member.id;
              const x2 = member.laserTargetX;
              const y2 = member.laserTargetY;

              return (
                <g key={member.id}>
                  <line
                    x1="0"
                    y1="0"
                    x2={x2}
                    y2={y2}
                    stroke={isSelected ? '#b45309' : '#cbd5e1'}
                    strokeWidth={isSelected ? '2.5' : '1'}
                    strokeDasharray={isSelected ? 'none' : '4 4'}
                    className="transition-colors duration-300"
                  />

                  {isSelected && (
                    <line
                      x1="0"
                      y1="0"
                      x2={x2}
                      y2={y2}
                      stroke="#f59e0b"
                      strokeWidth="6"
                      strokeOpacity="0.35"
                      strokeLinecap="round"
                    />
                  )}

                  <circle
                    r={isSelected ? '4' : '2'}
                    fill={isSelected ? '#f59e0b' : '#94a3b8'}
                  >
                    <animateMotion
                      path={`M ${x2} ${y2} L 0 0`}
                      dur={isSelected ? '1s' : '2.5s'}
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              );
            })}
          </svg>

          {/* 🪑 CENTRAL WALNUT BOARDROOM CONFERENCE TABLE (Pure Code & CSS) */}
          <div
            className="relative w-full max-w-3xl rounded-[32px] sm:rounded-[44px] border-[3px] border-[#d97706]/70 p-4 sm:p-8 shadow-[0_25px_60px_rgba(69,26,3,0.3),0_0_40px_rgba(217,119,6,0.15)] flex items-center justify-center z-20 my-16 sm:my-20 overflow-hidden min-h-[300px]"
            style={{
              background: 'radial-gradient(ellipse at 50% 30%, #92400e 0%, #78350f 50%, #451a03 100%)',
            }}
          >
            {/* Table Inlay Brass Seam */}
            <div className="absolute inset-2 sm:inset-3 rounded-[24px] sm:rounded-[36px] border border-[#fbbf24]/30 pointer-events-none animate-pulse" />
            
            {/* 🛰 CENTRAL ACTIVE FOCUSED ENGINEER CARD (Name and Work Alone) */}
            <div className="relative z-10 w-full max-w-md rounded-2xl sm:rounded-3xl border border-[#E8DFD1] bg-white/95 backdrop-blur-md p-5 sm:p-6 shadow-2xl text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMember.id}
                  initial={{ opacity: 0, scale: 0.95, y: 6 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -6 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="space-y-2"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-700 text-white font-black text-lg shadow-sm">
                    {activeMember.initials}
                  </div>
                  
                  <div className="pt-1">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-950 leading-tight">
                      {activeMember.name}
                    </h3>
                    <p className="text-sm font-bold text-amber-800 leading-tight mt-1">
                      {activeMember.role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* 📍 7 ANIMATED SEATED ENGINEER WORKSTATION NODES AROUND TABLE */}
          {members.map((member, index) => {
            const isSelected = activeMember.id === member.id;
            const Icon = member.icon;

            return (
              <div
                key={member.id}
                style={{
                  position: 'absolute',
                  left: `${member.posX}%`,
                  top: `${member.posY}%`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: isSelected ? 35 : 25,
                }}
              >
                <motion.button
                  animate={{
                    y: isSelected ? [0, -5, 0] : [0, -2, 0],
                  }}
                  transition={{
                    duration: 3 + (index % 3) * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setActiveId(member.id);
                    setAutoRotate(false);
                  }}
                  className={`relative flex items-center gap-2 p-2 sm:p-2.5 rounded-2xl transition-all cursor-pointer text-left ${
                    isSelected
                      ? 'bg-white border-2 border-amber-600 shadow-xl shadow-amber-700/25 ring-4 ring-amber-500/25'
                      : 'bg-white/95 hover:bg-white border border-[#E8DFD1] shadow-xs hover:border-amber-400'
                  }`}
                >
                  <div
                    className={`flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl transition-colors shrink-0 ${
                      isSelected
                        ? 'bg-amber-700 text-white shadow-xs'
                        : 'bg-amber-50 text-amber-800'
                    }`}
                  >
                    <Icon className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                  </div>

                  <div className="hidden sm:block min-w-0 pr-1">
                    <p className="text-xs font-black text-slate-950 leading-tight truncate">
                      {member.name}
                    </p>
                    <p className="text-[10px] font-bold text-amber-800 truncate">
                      {member.role}
                    </p>
                  </div>
                </motion.button>
              </div>
            );
          })}

        </div>

      </div>
    </div>
  );
}
