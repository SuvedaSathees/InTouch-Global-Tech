'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useSpring, useMotionValue, useTransform } from 'framer-motion';
import {
  Sparkles,
  Zap,
  Code2,
  Layers,
  Palette,
  Server,
  CalendarCheck,
  TrendingUp,
  Award,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  UserCheck,
  Laptop,
} from 'lucide-react';
import Link from 'next/link';

export type TeamMember3D = {
  id: number;
  name: string;
  role: string;
  category: string;
  description: string;
  expertise: string[];
  initials: string;
  avatarColor: string;
  outfitColor: string;
  hairColor: string;
  skinTone: string;
  hairStyle: string;
  activityText: string;
  gender: 'male' | 'female';
  tablePos: {
    seatName: string;
    xPercent: number;
    yPercent: number;
    chairAngle: number;
    side: 'head' | 'top-left' | 'top-mid' | 'top-right' | 'bot-left' | 'bot-mid' | 'bot-right';
  };
  cardOffset: { x: number; y: number };
};

const teamMembers: TeamMember3D[] = [
  {
    id: 1,
    name: 'Alexander Reed',
    role: 'CEO / Founder',
    category: 'Executive Leadership',
    description: 'Steers technological vision, enterprise strategy, and high-scale architecture blueprints.',
    expertise: ['System Architecture', 'Enterprise Strategy', 'Venture Growth'],
    initials: 'AR',
    avatarColor: 'from-blue-600 to-indigo-700',
    outfitColor: '#1e293b', // Slate suit
    hairColor: '#0f172a',
    skinTone: '#fed7aa',
    hairStyle: 'sleek',
    activityText: 'Strategy & Architecture Blueprint',
    gender: 'male',
    tablePos: {
      seatName: 'Head of Table',
      xPercent: 12,
      yPercent: 48,
      chairAngle: 90,
      side: 'head',
    },
    cardOffset: { x: 30, y: -40 },
  },
  {
    id: 2,
    name: 'Arun Kumar',
    role: 'Full Stack Developer',
    category: 'Full Stack Core',
    description: 'Builds scalable web applications, real-time sync engines, and powerful digital experiences.',
    expertise: ['Next.js 15', 'TypeScript', 'Node.js', 'PostgreSQL'],
    initials: 'AK',
    avatarColor: 'from-blue-600 to-cyan-600',
    outfitColor: '#312e81', // Indigo hoodie
    hairColor: '#172554',
    skinTone: '#fbcfe8',
    hairStyle: 'crop',
    activityText: 'Full Stack API & Web Sync',
    gender: 'male',
    tablePos: {
      seatName: 'Seat 02 • North-West',
      xPercent: 36,
      yPercent: 18,
      chairAngle: 180,
      side: 'top-left',
    },
    cardOffset: { x: 10, y: -90 },
  },
  {
    id: 3,
    name: 'David Thorne',
    role: 'UI/UX Designer',
    category: 'Design Systems',
    description: 'Crafts intuitive, high-adoption human interfaces, ergonomic design systems, and fluid micro-interactions.',
    expertise: ['Figma', 'Interactive 3D', 'User Research', 'Design Tokens'],
    initials: 'DT',
    avatarColor: 'from-amber-500 to-orange-600',
    outfitColor: '#451a03', // Amber brown crewneck
    hairColor: '#78350f',
    skinTone: '#fde68a',
    hairStyle: 'waves',
    activityText: 'Design Tokens & UI Prototyping',
    gender: 'male',
    tablePos: {
      seatName: 'Seat 03 • North-Center',
      xPercent: 60,
      yPercent: 18,
      chairAngle: 180,
      side: 'top-mid',
    },
    cardOffset: { x: 10, y: -90 },
  },
  {
    id: 4,
    name: 'Emily Watson',
    role: 'Frontend Developer',
    category: 'Client Engineering',
    description: 'Engineers 60fps responsive interfaces, WebGL shaders, state machines, and accessible design.',
    expertise: ['React 19', 'Tailwind CSS', 'Framer Motion', 'Performance'],
    initials: 'EW',
    avatarColor: 'from-pink-500 to-rose-600',
    outfitColor: '#881337', // Rose blazer
    hairColor: '#b45309',
    skinTone: '#ffedd5',
    hairStyle: 'long',
    activityText: 'React 19 & Framer Motion UI',
    gender: 'female',
    tablePos: {
      seatName: 'Seat 04 • North-East',
      xPercent: 84,
      yPercent: 18,
      chairAngle: 180,
      side: 'top-right',
    },
    cardOffset: { x: -60, y: -90 },
  },
  {
    id: 5,
    name: 'Marcus Vance',
    role: 'Backend Developer',
    category: 'Cloud & Database',
    description: 'Architects multi-region database replication, event buses, microservices, and bank-grade security.',
    expertise: ['Go', 'Redis Cluster', 'Kubernetes', 'mTLS Security'],
    initials: 'MV',
    avatarColor: 'from-purple-600 to-indigo-800',
    outfitColor: '#3b0764', // Deep purple
    hairColor: '#1e1b4b',
    skinTone: '#fed7aa',
    hairStyle: 'fade',
    activityText: 'High-Throughput Go & Redis DB',
    gender: 'male',
    tablePos: {
      seatName: 'Seat 05 • South-West',
      xPercent: 36,
      yPercent: 78,
      chairAngle: 0,
      side: 'bot-left',
    },
    cardOffset: { x: 10, y: 70 },
  },
  {
    id: 6,
    name: 'Rachel Green',
    role: 'Project Manager',
    category: 'Agile Delivery',
    description: 'Maintains strict 2-week sprint velocities, milestone predictability, and direct client transparency.',
    expertise: ['Sprint Cadence', 'Scrum', 'Risk Mitigation', 'Quality Gates'],
    initials: 'RG',
    avatarColor: 'from-emerald-500 to-teal-700',
    outfitColor: '#064e3b', // Emerald jacket
    hairColor: '#451a03',
    skinTone: '#fde68a',
    hairStyle: 'ponytail',
    activityText: 'Sprint Roadmap & Milestones',
    gender: 'female',
    tablePos: {
      seatName: 'Seat 06 • South-Center',
      xPercent: 60,
      yPercent: 78,
      chairAngle: 0,
      side: 'bot-mid',
    },
    cardOffset: { x: 10, y: 70 },
  },
  {
    id: 7,
    name: 'Amara Patel',
    role: 'Digital Marketing Specialist',
    category: 'Growth & Analytics',
    description: 'Drives omnichannel user acquisition, enterprise positioning, conversion funnels, and data analytics.',
    expertise: ['SEO & SEM', 'Funnel Optimization', 'Product Analytics', 'Growth'],
    initials: 'AP',
    avatarColor: 'from-violet-600 to-fuchsia-600',
    outfitColor: '#4c1d95', // Violet
    hairColor: '#0f172a',
    skinTone: '#fed7aa',
    hairStyle: 'curls',
    activityText: 'Growth Analytics & User Funnels',
    gender: 'female',
    tablePos: {
      seatName: 'Seat 07 • South-East',
      xPercent: 84,
      yPercent: 78,
      chairAngle: 0,
      side: 'bot-right',
    },
    cardOffset: { x: -60, y: 70 },
  },
];

// Stylized Animated Seated Person Figure Component
function SeatedPersonGraphic({ member, isSelected }: { member: TeamMember3D; isSelected: boolean }) {
  const isTop = member.tablePos.side.startsWith('top');
  const isHead = member.tablePos.side === 'head';

  return (
    <div className="relative flex flex-col items-center select-none">
      {/* Active Spotlight Glow on Floor */}
      {isSelected && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1.3 }}
          exit={{ opacity: 0 }}
          className="absolute -inset-5 rounded-full bg-blue-500/25 blur-md pointer-events-none ring-2 ring-blue-500/50"
        />
      )}

      {/* Ergonomic Executive High-Back Chair */}
      <div
        className={`relative w-16 h-20 sm:w-20 sm:h-24 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center justify-between p-1.5 shadow-xl ${
          isSelected
            ? 'bg-slate-900 border-blue-500 ring-4 ring-blue-500/20 shadow-blue-500/30'
            : 'bg-slate-800/95 border-slate-700 hover:border-slate-500'
        }`}
      >
        {/* Leather Headrest Cushion */}
        <div className="w-10 h-2.5 rounded-full bg-slate-950/80 border border-slate-700/60" />

        {/* Animated Person Sitting Figure */}
        <div className="relative flex flex-col items-center w-full my-auto">
          {/* Animated Head (Subtle Breathing / Thinking Motion) */}
          <motion.div
            animate={{
              y: isSelected ? [-2, 1, -2] : [-1, 1, -1],
              rotate: isSelected ? [-1.5, 1.5, -1.5] : [0, 0.8, 0],
            }}
            transition={{
              duration: 3 + (member.id % 3) * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative z-20 flex flex-col items-center"
          >
            {/* Hair Style */}
            <div
              className="absolute -top-1.5 w-8 h-4 rounded-t-full z-20"
              style={{ backgroundColor: member.hairColor }}
            />

            {/* Face Avatar with Initials */}
            <div
              className={`relative z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr ${member.avatarColor} text-white font-black text-[11px] sm:text-xs flex items-center justify-center border-2 border-white/90 shadow-md`}
            >
              <span>{member.initials}</span>
            </div>
          </motion.div>

          {/* Torso / Shoulders in Tailored Studio Apparel */}
          <div
            className="relative z-10 -mt-1 w-11 sm:w-13 h-5 sm:h-6 rounded-t-xl border-t border-x border-white/10 flex items-center justify-center shadow-inner"
            style={{ backgroundColor: member.outfitColor }}
          >
            {/* Collar Detail */}
            <div className="w-3 h-2 border-b-2 border-white/30 rounded-b-xs" />
          </div>

          {/* Animated Typing Arms / Hands onto Desk */}
          <div className="relative z-10 flex items-center justify-between w-12 sm:w-14 -mt-1 px-1">
            <motion.div
              animate={{ y: isSelected ? [0, -1.5, 0] : [0, -0.8, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, ease: 'linear' }}
              className="w-2.5 h-3 rounded-full bg-amber-200 border border-black/20 shadow-xs"
              style={{ backgroundColor: member.skinTone }}
            />
            
            {/* Mini Laptop on Desk */}
            <div className="w-6 h-3 rounded-xs bg-slate-950 border border-slate-600 flex items-center justify-center shadow-xs">
              <span className={`h-1 w-1 rounded-full ${isSelected ? 'bg-blue-400 animate-ping' : 'bg-emerald-400'}`} />
            </div>

            <motion.div
              animate={{ y: isSelected ? [-1.5, 0, -1.5] : [-0.8, 0, -0.8] }}
              transition={{ duration: 0.6, repeat: Infinity, ease: 'linear' }}
              className="w-2.5 h-3 rounded-full bg-amber-200 border border-black/20 shadow-xs"
              style={{ backgroundColor: member.skinTone }}
            />
          </div>
        </div>

        {/* Chair Leather Seat Cushion */}
        <div className="w-12 h-2 rounded-b-md bg-slate-950 border-t border-slate-700/60" />
      </div>

      {/* Name Pill Badge with Active Indicator */}
      <div
        className={`mt-2 px-3 py-0.8 rounded-full text-[10px] font-bold transition-all shadow-md flex items-center gap-1.5 ${
          isSelected
            ? 'bg-blue-600 text-white scale-105 shadow-blue-500/30'
            : 'bg-white text-slate-800 border border-slate-300 hover:border-blue-400'
        }`}
      >
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            isSelected ? 'bg-white animate-pulse' : 'bg-emerald-500'
          }`}
        />
        <span>{member.name.split(' ')[0]}</span>
      </div>
    </div>
  );
}

export function ConferenceTable3D() {
  const [activePerson, setActivePerson] = useState<TeamMember3D>(teamMembers[0]);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(1);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse Parallax Physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [12, -12]);
  const rotateY = useTransform(mouseX, [-400, 400], [-14, 14]);
  const translateX = useTransform(mouseX, [-400, 400], [-10, 10]);
  const translateY = useTransform(mouseY, [-300, 300], [-8, 8]);

  const smoothRotateX = useSpring(rotateX, { stiffness: 120, damping: 20 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 120, damping: 20 });
  const smoothTranslateX = useSpring(translateX, { stiffness: 120, damping: 20 });
  const smoothTranslateY = useSpring(translateY, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const target = teamMembers.find((m) => m.id === (hoveredId || selectedId || 1));
    if (target) setActivePerson(target);
  }, [hoveredId, selectedId]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHoveredId(null);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen py-24 sm:py-32 overflow-hidden bg-white text-slate-900 select-none flex flex-col justify-center"
    >
      {/* Background Soft Studio Aura */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(37,99,235,0.06),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle Hairline Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 mb-4"
          >
            <span>EXECUTIVE 3D SHOWROOM</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.08]"
          >
            Seven Specialists. One Unified Engineering Hub.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            Hover or tap any seated team member at the Italian walnut conference table to inspect their active project scope, technical specialization, and credentials.
          </motion.p>
        </div>

        {/* 3D CONFERENCE ROOM SHOWROOM */}
        <div
          className="relative mx-auto max-w-5xl h-[580px] sm:h-[650px] w-full flex items-center justify-center"
          style={{ perspective: '1200px' }}
        >
          {/* Parallax 3D Plane */}
          <motion.div
            style={{
              rotateX: smoothRotateX,
              rotateY: smoothRotateY,
              x: smoothTranslateX,
              y: smoothTranslateY,
              transformStyle: 'preserve-3d',
            }}
            className="relative w-full h-full flex items-center justify-center"
          >
            {/* Hardwood Floor Shadow & Ambient Light */}
            <div className="absolute w-[85%] h-[75%] rounded-[60px] bg-gradient-to-tr from-slate-200/40 via-blue-100/30 to-slate-200/40 blur-2xl pointer-events-none transform -translate-y-4" />

            {/* ITALIAN WALNUT CONFERENCE TABLE TOP */}
            <div
              className="relative w-[78%] h-[55%] sm:h-[58%] rounded-[48px] border-[3px] border-[#3e2723] shadow-[0_30px_70px_rgba(0,0,0,0.22),0_10px_25px_rgba(37,99,235,0.08)] flex items-center justify-center overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #3d2314 0%, #5d3a1a 45%, #2b180d 100%)',
                transform: 'translateZ(10px)',
              }}
            >
              {/* Natural Woodgrain Sheen Effect */}
              <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.4),transparent_60%)] pointer-events-none" />

              {/* Brushed Brass Center Inlay */}
              <div className="absolute top-1/2 left-8 right-8 -translate-y-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#ffd700]/70 to-transparent" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-14 rounded-full border border-[#ffd700]/50 bg-black/35 flex items-center justify-center backdrop-blur-xs shadow-inner">
                <span className="text-[10px] tracking-widest text-[#ffd700] uppercase font-bold">
                  NEXORA ARCHITECTURE
                </span>
              </div>

              {/* Laptops & Tablets on Table */}
              <div className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-7 rounded-sm bg-slate-900 border border-slate-700 shadow-md flex items-center justify-center">
                <span className="h-1.5 w-1.5 bg-blue-400 rounded-full animate-ping" />
              </div>
              <div className="absolute left-[34%] top-4 w-9 h-6 rounded-sm bg-slate-900 border border-slate-700 shadow-md flex items-center justify-center">
                <span className="h-1 w-1 bg-emerald-400 rounded-full" />
              </div>
              <div className="absolute left-[58%] top-4 w-9 h-6 rounded-sm bg-slate-900 border border-slate-700 shadow-md flex items-center justify-center">
                <span className="h-1 w-1 bg-amber-400 rounded-full" />
              </div>
              <div className="absolute left-[82%] top-4 w-9 h-6 rounded-sm bg-slate-900 border border-slate-700 shadow-md flex items-center justify-center">
                <span className="h-1 w-1 bg-rose-400 rounded-full" />
              </div>
              <div className="absolute left-[34%] bottom-4 w-9 h-6 rounded-sm bg-slate-900 border border-slate-700 shadow-md flex items-center justify-center">
                <span className="h-1 w-1 bg-purple-400 rounded-full" />
              </div>
              <div className="absolute left-[58%] bottom-4 w-9 h-6 rounded-sm bg-slate-900 border border-slate-700 shadow-md flex items-center justify-center">
                <span className="h-1 w-1 bg-teal-400 rounded-full" />
              </div>
              <div className="absolute left-[82%] bottom-4 w-9 h-6 rounded-sm bg-slate-900 border border-slate-700 shadow-md flex items-center justify-center">
                <span className="h-1 w-1 bg-violet-400 rounded-full" />
              </div>
            </div>

            {/* 7 TEAM MEMBERS SEATED IN ANIMATED CHAIRS AROUND THE TABLE */}
            {teamMembers.map((member) => {
              const isSelected = activePerson.id === member.id;
              const isDimmed = activePerson.id !== member.id && (hoveredId !== null || selectedId !== null);

              return (
                <div
                  key={member.id}
                  style={{
                    left: `${member.tablePos.xPercent}%`,
                    top: `${member.tablePos.yPercent}%`,
                    transform: `translate(-50%, -50%) translateZ(${isSelected ? '55px' : '20px'})`,
                    transformStyle: 'preserve-3d',
                  }}
                  className="absolute z-20"
                >
                  <motion.div
                    onMouseEnter={() => setHoveredId(member.id)}
                    onClick={() => setSelectedId(member.id)}
                    animate={{
                      scale: isSelected ? 1.16 : 1,
                      y: isSelected ? -10 : 0,
                      opacity: isDimmed ? 0.35 : 1,
                    }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    className="relative cursor-pointer group flex flex-col items-center justify-center p-2"
                  >
                    {/* Render the Person Sitting Figure */}
                    <SeatedPersonGraphic member={member} isSelected={isSelected} />
                  </motion.div>
                </div>
              );
            })}

            {/* FLOATING DOSSIER CARD */}
            <AnimatePresence mode="wait">
              {activePerson && (
                <motion.div
                  key={activePerson.id}
                  initial={{ opacity: 0, scale: 0.85, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85, y: 10 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                  style={{
                    left: `${activePerson.tablePos.xPercent}%`,
                    top: `${activePerson.tablePos.yPercent}%`,
                    transform: `translate(calc(-50% + ${activePerson.cardOffset.x}px), calc(-50% + ${activePerson.cardOffset.y}px)) translateZ(80px)`,
                  }}
                  className="absolute z-40 w-72 sm:w-80 rounded-3xl border border-slate-200 bg-white/95 backdrop-blur-xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.12)] pointer-events-none select-none text-left"
                >
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 rounded-2xl bg-gradient-to-tr ${activePerson.avatarColor} text-white font-black text-sm flex items-center justify-center shadow-md`}
                      >
                        {activePerson.initials}
                      </div>
                      <div>
                        <h4 className="text-base font-extrabold text-slate-950 leading-tight">
                          {activePerson.name}
                        </h4>
                        <p className="text-xs font-bold text-blue-700 font-semibold mt-0.5">{activePerson.role}</p>
                      </div>
                    </div>

                    <span className="rounded-full bg-blue-50 border border-blue-200 px-2 py-0.5 text-[9px] font-bold text-blue-700">
                      ACTIVE
                    </span>
                  </div>

                  {/* Active Duty Live Pulse */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200 p-2 text-[10px] text-slate-700 flex items-center gap-2 mb-3 font-medium">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
                    <span className="truncate"><strong>Working on:</strong> {activePerson.activityText}</span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {activePerson.description}
                  </p>

                  <div className="mt-3.5 pt-3 border-t border-slate-100">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 font-bold block mb-1.5">
                      Domain Competencies:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activePerson.expertise.map((exp) => (
                        <span
                          key={exp}
                          className="rounded-md bg-blue-50 border border-blue-200 px-2 py-0.5 text-[10px] font-semibold text-blue-700 font-semibold"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Quick Selector Pills Below Showroom */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {teamMembers.map((m) => {
            const isCurrent = activePerson.id === m.id;
            return (
              <button
                key={m.id}
                onClick={() => {
                  setSelectedId(m.id);
                  setHoveredId(m.id);
                }}
                className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 ${
                  isCurrent
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200/80'
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    isCurrent ? 'bg-white' : 'bg-emerald-500'
                  }`}
                />
                <span>{m.name}</span>
                <span className="text-[10px] opacity-70 font-semibold hidden sm:inline">({m.role.split('/')[0].trim()})</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
