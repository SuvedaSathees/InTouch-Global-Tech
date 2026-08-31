'use client';

import React, { useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import mathiAvatar from '@/app/terms/mathi.png';
import sriAvatar from '@/app/terms/sri.png';
import suvedaAvatar from '@/app/terms/suve.png';
import vigneshAvatar from '@/app/terms/vicky.png';
import sivaAvatar from '@/app/terms/siva.png';
import sanAvatar from '@/app/terms/san.png';
import naveenAvatar from '@/app/terms/naveen.png';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import {
  CheckCircle2,
  Mail,
  Linkedin,
  ArrowUpRight,
  Database,
  Layers,
  Terminal,
  Shield,
  Laptop,
  Activity,
  Briefcase,
  Code2,
  Sparkles,
  Award,
  Zap,
  Globe,
  Radio,
  Cpu,
  Fingerprint,
  Quote,
} from 'lucide-react';

export type TeamMember = {
  id: number;
  number: string;
  name: string;
  role: string;
  tagline: string;
  avatar?: string | StaticImageData | null;
  avatarClassName?: string;
  avatarStyle?: React.CSSProperties;
  department: string;
  about: string;
  philosophy: string;
  experience: string;
  stack: string[];
  expertise: string[];
  email: string;
  linkedin: string;
  color: string;
  glowColor: string;
  gradient: string;
  icon: typeof Code2;
};

const teamMembers: TeamMember[] = [
  {
    id: 0,
    number: '01',
    name: 'Srimun S S',
    role: 'Full Stack Lead',
    tagline: 'Enterprise Full-Stack Architecture & Microservices',
    department: 'Enterprise Engineering',
    avatar: sriAvatar,
    avatarClassName: 'scale-[1.14] -translate-x-[30px] -translate-y-[40px]',
    about: 'Leads end-to-end full stack architecture, bridge systems, database integrations, and scalable client application delivery.',
    philosophy: '"Seamless bridges between client interfaces and core servers."',
    experience: '9+ Yrs Full Stack',
    stack: ['Next.js 14', 'React 18', 'TypeScript', 'Prisma', 'Tailwind', 'Docker'],
    expertise: [
      'Full-Stack Architecture',
      'Next.js & React 18',
      'Enterprise System Design',
      'Cross-Platform Engineering',
    ],
    email: 'srimun@example.com',
    linkedin: 'https://linkedin.com',
    color: '#b45309',
    glowColor: 'rgba(180, 83, 9, 0.45)',
    gradient: 'from-amber-700 to-yellow-900',
    icon: Layers,
  },
  {
    id: 1,
    number: '02',
    name: 'Suveda S',
    role: 'Backend Lead',
    tagline: 'High-Concurrency Systems & Scalable Core APIs',
    department: 'Core Architecture & APIs',
    avatar: suvedaAvatar,
    avatarClassName: 'scale-[0.96] -translate-x-[30px] translate-y-[15px]',
    about: 'Architects enterprise server backends, distributed SQL databases, secure REST/GraphQL endpoints, and high-concurrency cloud backend engines.',
    philosophy: '"Resilient systems are engineered from the schema upwards."',
    experience: '8+ Yrs Core Backend',
    stack: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'GraphQL', 'AWS'],
    expertise: [
      'Core Node.js & Python',
      'PostgreSQL & Cloud DB',
      'High-Speed Microservices',
      'Data Security & Auth',
    ],
    email: 'suveda@example.com',
    linkedin: 'https://linkedin.com',
    color: '#d97706',
    glowColor: 'rgba(217, 119, 6, 0.45)',
    gradient: 'from-amber-600 to-amber-800',
    icon: Database,
  },
  {
    id: 2,
    number: '03',
    name: 'Vignesh K',
    role: 'Frontend Lead',
    tagline: 'Pixel-Perfect Web Experiences & Motion Systems',
    department: 'Web Interfaces & Motion',
    avatar: vigneshAvatar,
    avatarClassName: 'scale-[1.06] -translate-y-[30px]',
    about: 'Crafts pixel-perfect, lightning-fast user interfaces, design system components, micro-animations, and fluid responsive layouts.',
    philosophy: '"Motion should feel natural, intentional, and instantaneous."',
    experience: '7+ Yrs Frontend',
    stack: ['React', 'Next.js', 'Framer Motion', 'WebGL', 'Tailwind CSS'],
    expertise: [
      'Next.js & TypeScript',
      'Responsive Web Architecture',
      'State Management & UX',
      'Fluid Micro-Animations',
    ],
    email: 'vignesh@example.com',
    linkedin: 'https://linkedin.com',
    color: '#2563eb',
    glowColor: 'rgba(37, 99, 235, 0.45)',
    gradient: 'from-blue-600 to-indigo-800',
    icon: Terminal,
  },
  {
    id: 3,
    number: '04',
    name: 'Sandhiya M',
    role: 'Product & Solutions Lead',
    tagline: 'Agile Delivery Strategy & Client Roadmap Acceleration',
    department: 'Product Strategy & Agile',
    avatar: sanAvatar,
    avatarClassName: 'scale-[0.92] -translate-x-[20px] translate-y-[30px]',
    about: 'Translates complex business challenges into clear agile roadmaps, scope definitions, client deliverables, and 2-week sprint releases.',
    philosophy: '"Clarity in sprint scoping guarantees on-time delivery."',
    experience: '6+ Yrs Product Strategy',
    stack: ['Agile Sprints', 'Jira', 'Figma', 'System Architecture', 'Roadmaps'],
    expertise: [
      'Product Feature Scoping',
      '2-Week Agile Delivery',
      'Client Milestone Assurance',
      'Roadmap Acceleration',
    ],
    email: 'sandhiya@example.com',
    linkedin: 'https://linkedin.com',
    color: '#ea580c',
    glowColor: 'rgba(234, 88, 12, 0.45)',
    gradient: 'from-orange-600 to-red-800',
    icon: Briefcase,
  },
  {
    id: 4,
    number: '05',
    name: 'Naveen J',
    role: 'QA & Automation Lead',
    tagline: 'Zero-Defect Software Stability & Continuous Testing',
    department: 'Quality Assurance & Testing',
    avatar: naveenAvatar,
    avatarClassName: 'scale-[0.88] -translate-x-[20px] translate-y-[45px]',
    about: 'Guarantees rock-solid software stability through comprehensive automated E2E test suites, load testing, and regression audits.',
    philosophy: '"Automated testing is the bedrock of rapid production cycles."',
    experience: '6+ Yrs QA Engineering',
    stack: ['Playwright', 'Cypress', 'Jest', 'Postman', 'k6 Load Test'],
    expertise: [
      'End-to-End Test Automation',
      'Playwright & Cypress E2E',
      'Security Penetration Testing',
      'Continuous Validation',
    ],
    email: 'naveen@example.com',
    linkedin: 'https://linkedin.com',
    color: '#dc2626',
    glowColor: 'rgba(220, 38, 38, 0.45)',
    gradient: 'from-red-600 to-rose-900',
    icon: Activity,
  },
  {
    id: 5,
    number: '06',
    name: 'Sunmathi S',
    role: 'UI/UX Lead',
    tagline: 'Conversion-Engineered Design Systems & Interfaces',
    department: 'Design Systems & UX',
    avatar: mathiAvatar,
    avatarClassName: 'scale-[1.32] -translate-y-[90px]',
    about: 'Creates high-converting web experiences, bespoke design tokens, user flow wireframes, and intuitive interaction design systems.',
    philosophy: '"Design is how it works, how it feels, and how it converts."',
    experience: '6+ Yrs UI/UX Design',
    stack: ['Figma', 'Design Tokens', 'Prototyping', 'User Research', 'Design Systems'],
    expertise: [
      'Figma Design Systems',
      'User Research & Wireframing',
      'High-Converting UI/UX',
      'Micro-Interactions & Motion',
    ],
    email: 'sunmathi@example.com',
    linkedin: 'https://linkedin.com',
    color: '#059669',
    glowColor: 'rgba(5, 150, 105, 0.45)',
    gradient: 'from-emerald-600 to-teal-900',
    icon: Laptop,
  },
  {
    id: 6,
    number: '07',
    name: 'Sivaraj A',
    role: 'DevOps & Cloud Lead',
    tagline: 'Cloud Infrastructure, Kubernetes & 99.99% SLA Uptime',
    department: 'Infrastructure & Uptime',
    avatar: sivaAvatar,
    avatarClassName: 'scale-[1.12] -translate-x-[40px] -translate-y-[55px]',
    about: 'Maintains 99.99% high availability, Kubernetes cloud clusters, zero-downtime CI/CD pipelines, and automated server scaling.',
    philosophy: '"Zero downtime through redundant, multi-region cloud topology."',
    experience: '8+ Yrs Cloud DevOps',
    stack: ['AWS', 'Cloudflare', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
    expertise: [
      'Docker & Kubernetes',
      'AWS & Cloudflare Infra',
      'Automated CI/CD Pipelines',
      '99.99% Server SLA Uptime',
    ],
    email: 'sivaraj@example.com',
    linkedin: 'https://linkedin.com',
    color: '#0284c7',
    glowColor: 'rgba(2, 132, 199, 0.45)',
    gradient: 'from-sky-600 to-cyan-900',
    icon: Shield,
  },
];

export function TeamRoundTable() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse interaction for interactive 3D perspective tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const tiltX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), { stiffness: 180, damping: 25 });
  const tiltY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), { stiffness: 180, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Track vertical scroll through the pinned theater section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 36,
    mass: 0.75,
  });

  const totalMembers = teamMembers.length;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-[#FAF7F2] text-slate-900"
      style={{
        height: `${totalMembers * 115}vh`,
      }}
    >
      {/* Precision Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Floating Animated Geometric Particle Matrix in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full border border-amber-800/[0.04] border-dashed pointer-events-none"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full border border-amber-800/[0.04] border-dashed pointer-events-none"
        />
      </div>

      {/* ========================================================================= */}
      {/* 🎬 100VH STICKY PINNED STORYTELLING THEATER */}
      {/* ========================================================================= */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden px-4 sm:px-8 lg:px-16 py-6 sm:py-8 z-10 select-none">
        
        {/* Top Header with Live Activity Beacon & Audio Waveform */}
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between z-30 pb-3 border-b border-[#E8DFD1]">
          <div className="flex items-center gap-3">
            <span className="w-6 h-[2px] bg-gradient-to-r from-amber-700 to-amber-500 rounded-full" />
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
              EXECUTIVE ENGINEERING CORE
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Live Audio / Frequency Waveform Indicator */}
            <div className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E8DFD1] shadow-2xs text-[11px] font-mono font-bold text-amber-900">
              <span className="flex items-end gap-[2px] h-3">
                {[0.4, 0.9, 0.6, 1.0, 0.5, 0.8, 0.3].map((h, i) => (
                  <motion.span
                    key={i}
                    animate={{ height: ['25%', '100%', '25%'] }}
                    transition={{
                      duration: 0.8 + i * 0.15,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="w-[2px] bg-amber-700 rounded-full"
                    style={{ height: `${h * 100}%` }}
                  />
                ))}
              </span>
              <span className="pl-1">LIVE PRODUCTION SPRINT</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-600 animate-ping" />
              <span>SCROLL TO CYCLE</span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CENTER CINEMATIC STAGE */}
        {/* ========================================================================= */}
        <div className="relative flex-1 w-full max-w-7xl mx-auto flex items-center justify-center my-auto">
          {teamMembers.map((member, index) => {
            const isFirst = index === 0;
            const isLast = index === totalMembers - 1;
            const step = 1 / totalMembers;
            const start = index * step;
            const center = start + step * 0.5;
            const end = (index + 1) * step;

            // Horizontal position: Member 01 is centered at scroll 0
            const x = useTransform(
              smoothProgress,
              isFirst
                ? [0, end - step * 0.35, end]
                : isLast
                ? [start, start + step * 0.35, 1]
                : [start, start + step * 0.35, end - step * 0.35, end],
              isFirst
                ? ['0vw', '0vw', '-65vw']
                : isLast
                ? ['65vw', '0vw', '0vw']
                : ['65vw', '0vw', '0vw', '-65vw']
            );

            // Opacity: Member 01 starts at 1 at scroll 0
            const opacity = useTransform(
              smoothProgress,
              isFirst
                ? [0, end - step * 0.25, end]
                : isLast
                ? [start, start + step * 0.25, 1]
                : [start, start + step * 0.25, end - step * 0.25, end],
              isFirst
                ? [1, 1, 0]
                : isLast
                ? [0, 1, 1]
                : [0, 1, 1, 0]
            );

            // Scale: Member 01 starts at full scale 1 at scroll 0
            const scale = useTransform(
              smoothProgress,
              isFirst
                ? [0, end - step * 0.35, end]
                : isLast
                ? [start, start + step * 0.35, 1]
                : [start, center, end],
              isFirst
                ? [1, 1, 0.84]
                : isLast
                ? [0.84, 1, 1]
                : [0.84, 1, 0.84]
            );

            // Subtle 3D Perspective Rotation Y as it travels horizontally
            const rotateY = useTransform(
              smoothProgress,
              isFirst
                ? [0, end - step * 0.35, end]
                : isLast
                ? [start, start + step * 0.35, 1]
                : [start, center, end],
              isFirst
                ? [0, 0, -16]
                : isLast
                ? [16, 0, 0]
                : [16, 0, -16]
            );

            // Left text parallax slide
            const leftTextX = useTransform(
              smoothProgress,
              isFirst
                ? [0, end - step * 0.35, end]
                : isLast
                ? [start, start + step * 0.35, 1]
                : [start, start + step * 0.35, end - step * 0.35, end],
              isFirst
                ? ['0px', '0px', '-55px']
                : isLast
                ? ['55px', '0px', '0px']
                : ['55px', '0px', '0px', '-55px']
            );

            // Right text parallax slide
            const rightTextX = useTransform(
              smoothProgress,
              isFirst
                ? [0, end - step * 0.35, end]
                : isLast
                ? [start, start + step * 0.35, 1]
                : [start, start + step * 0.35, end - step * 0.35, end],
              isFirst
                ? ['0px', '0px', '-55px']
                : isLast
                ? ['55px', '0px', '0px']
                : ['55px', '0px', '0px', '-55px']
            );

            const Icon = member.icon;

            return (
              <motion.div
                key={member.id}
                style={{
                  x,
                  opacity,
                  scale,
                  rotateY,
                  perspective: 1400,
                  pointerEvents: opacity === 0 ? 'none' : 'auto',
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* Dynamic Ambient Spotlight Glow with breathing pulsing aura */}
                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.4, 0.55, 0.4],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[780px] h-[550px] rounded-full blur-[160px] pointer-events-none"
                  style={{ backgroundColor: member.glowColor }}
                />

                <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center relative z-10">
                  
                  {/* --------------------------------------------------------------- */}
                  {/* LEFT SIDE: MEMBER IDENTITY & STYLED BADGES */}
                  {/* --------------------------------------------------------------- */}
                  <motion.div
                    style={{ x: leftTextX }}
                    className="lg:col-span-4 text-left space-y-4 order-2 lg:order-1 relative"
                  >
                    {/* Giant Translucent Watermark Number with Glow */}
                    <span className="absolute -top-20 -left-6 text-[10rem] font-black text-slate-900/[0.04] select-none pointer-events-none font-mono">
                      {member.number}
                    </span>

                    <div className="relative z-10 space-y-4">
                      {/* Top Status Pill */}
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8DFD1] shadow-2xs text-xs font-mono font-bold">
                        <span className="relative flex h-2 w-2">
                          <span
                            className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                            style={{ backgroundColor: member.color }}
                          />
                          <span
                            className="relative inline-flex rounded-full h-2 w-2"
                            style={{ backgroundColor: member.color }}
                          />
                        </span>
                        <span className="text-amber-900 font-extrabold tracking-wider">ARCHITECT {member.number}</span>
                        <span className="text-slate-400">/ 0{totalMembers}</span>
                      </div>

                      {/* Name with Luxury Typography */}
                      <h3 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.04] bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950 bg-clip-text text-transparent">
                        {member.name}
                      </h3>
                    </div>
                  </motion.div>

                  {/* --------------------------------------------------------------- */}
                  {/* CENTER HERO: 3D LIVING ANIMATED HERO CARD WITH LASER SCANNER */}
                  {/* --------------------------------------------------------------- */}
                  <div className="lg:col-span-4 flex justify-center order-1 lg:order-2">
                    
                    {/* Organic Idle Floating + Mouse 3D Tilt Wrapper */}
                    <motion.div
                      style={{
                        rotateX: tiltX,
                        rotateY: tiltY,
                      }}
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 4.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="relative flex items-center justify-center cursor-grab active:cursor-grabbing"
                    >
                      {/* Dual Holographic Counter-Rotating Orbital Data Rings */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 26, ease: 'linear' }}
                        className="absolute -inset-8 border border-dashed rounded-full pointer-events-none opacity-40"
                        style={{ borderColor: member.color }}
                      >
                        <div
                          className="absolute -top-1.5 left-1/2 w-3.5 h-3.5 rounded-full shadow-lg"
                          style={{
                            backgroundColor: member.color,
                            boxShadow: `0 0 14px 3px ${member.glowColor}`,
                          }}
                        />
                        <div
                          className="absolute -bottom-1.5 right-1/4 w-2.5 h-2.5 rounded-full shadow-md"
                          style={{
                            backgroundColor: member.color,
                            boxShadow: `0 0 10px 2px ${member.glowColor}`,
                          }}
                        />
                      </motion.div>

                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ repeat: Infinity, duration: 34, ease: 'linear' }}
                        className="absolute -inset-14 border border-dotted rounded-full pointer-events-none opacity-25"
                        style={{ borderColor: member.color }}
                      />

                      {/* Main Portrait Display (Border-free & Enlarged) */}
                      <div
                        className="relative w-72 h-[450px] sm:w-96 sm:h-[560px] md:w-[420px] md:h-[640px] lg:w-[480px] lg:h-[700px] max-h-[80vh] transition-all duration-300"
                        style={{
                          filter: `drop-shadow(0 25px 45px ${member.glowColor})`,
                        }}
                      >
                        {/* Photo Container */}
                        <div className="relative w-full h-full flex items-center justify-center">
                          {member.avatar ? (
                            <Image
                              src={member.avatar}
                              alt={member.name}
                              fill
                              priority={index === 0}
                              sizes="(max-width: 768px) 384px, (max-width: 1200px) 480px, 600px"
                              unoptimized
                              className={`object-contain object-bottom transition-transform duration-300 ${member.avatarClassName || ''}`}
                              style={member.avatarStyle}
                            />
                          ) : (
                            <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-[36px] bg-gradient-to-b from-white/95 to-amber-50/90 border-2 border-dashed border-amber-300/60 p-8 flex flex-col items-center justify-center text-center shadow-2xl backdrop-blur-xl">
                              <div
                                className="w-24 h-24 rounded-3xl flex items-center justify-center text-white text-3xl font-black shadow-lg mb-5"
                                style={{
                                  background: `linear-gradient(135deg, ${member.color}, #78350f)`,
                                  boxShadow: `0 10px 30px -5px ${member.glowColor}`,
                                }}
                              >
                                <Icon className="w-12 h-12 text-white/95 stroke-[1.75]" />
                              </div>
                              <div className="text-xl font-bold text-slate-900 mb-1">{member.name}</div>
                              <div className="text-xs font-mono font-bold text-amber-900 tracking-wider uppercase mb-3">{member.role}</div>
                              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8DFD1] text-[10px] font-mono text-slate-600 shadow-2xs">
                                <Sparkles className="w-3 h-3 text-amber-600 animate-spin" style={{ animationDuration: '6s' }} />
                                <span>PROFILE ACTIVE</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>

                  </div>

                  {/* --------------------------------------------------------------- */}
                  {/* RIGHT SIDE: CLEAN ROLE & SHORT PROFESSIONAL DESCRIPTION */}
                  {/* --------------------------------------------------------------- */}
                  <motion.div
                    style={{ x: rightTextX }}
                    className="lg:col-span-4 text-left space-y-6 order-3"
                  >
                    <div className="space-y-4">
                      {/* Department / Category Monospace Tag */}
                      <div className="flex items-center gap-2">
                        <span className="h-1.5 w-6 rounded-full" style={{ backgroundColor: member.color }} />
                        <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-amber-800">
                          {member.department}
                        </span>
                      </div>

                      {/* Member Role Title */}
                      <h4 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.08]">
                        {member.role}
                      </h4>

                      {/* Clean Professional Description */}
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                        {member.about}
                      </p>

                      {/* Clean Minimalist Key Capabilities */}
                      <div className="pt-2 space-y-2 border-t border-[#E8DFD1]/80">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                          CORE FOCUS AREAS
                        </span>
                        <div className="grid grid-cols-2 gap-2">
                          {member.expertise.map((tag, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 text-xs font-semibold text-slate-800"
                            >
                              <CheckCircle2
                                className="h-4 w-4 shrink-0"
                                style={{ color: member.color }}
                              />
                              <span className="truncate">{tag}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Floating Quick Switcher Navigation Dock at Bottom */}
        <div className="max-w-xl mx-auto w-full flex items-center justify-center gap-2 z-30 pt-2">
          {teamMembers.map((m, idx) => (
            <motion.div
              key={m.id}
              whileHover={{ scale: 1.3 }}
              className="h-1.5 rounded-full transition-all duration-300 bg-slate-300 hover:bg-amber-600 w-8 cursor-pointer"
            />
          ))}
        </div>

      </div>
    </div>
  );
}
