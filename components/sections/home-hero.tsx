'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { siteConfig } from '@/lib/site-config';
import { CompanyLogo } from '@/components/company-logo';
import {
  Globe,
  Building2,
  Activity,
  Search,
  Lock,
  ArrowRight,
  Server,
  Layers,
  ShieldCheck,
  Code2,
  Award,
  Users,
  Sparkles,
  Zap,
} from 'lucide-react';

const systemNodes = [
  {
    id: 'web',
    label: 'Web Dev & CMS',
    icon: Globe,
    angle: 0,
    gradient: 'from-blue-500 to-cyan-400',
    description: 'React, Next.js & Web Apps',
  },
  {
    id: 'erp',
    label: 'ERP & HRMS',
    icon: Building2,
    angle: 60,
    gradient: 'from-indigo-500 to-blue-500',
    description: 'Enterprise Operations Hub',
  },
  {
    id: 'crm',
    label: 'CRM & Billing',
    icon: Layers,
    angle: 120,
    gradient: 'from-cyan-500 to-teal-400',
    description: 'Automated Invoicing & GST',
  },
  {
    id: 'hms',
    label: 'Hospital HMS',
    icon: Activity,
    angle: 180,
    gradient: 'from-emerald-500 to-teal-400',
    description: 'Clinical Records & Health',
  },
  {
    id: 'seo',
    label: 'SEO & Growth',
    icon: Search,
    angle: 240,
    gradient: 'from-purple-500 to-indigo-400',
    description: 'Top Google Rankings & SEM',
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    icon: Server,
    angle: 300,
    gradient: 'from-blue-400 to-indigo-500',
    description: 'High-Speed Cloud VPS',
  },
];

const keyMetrics = [
  { value: '25+', label: 'Projects Delivered' },
  { value: '10+', label: 'Industries Served' },
  { value: '100%', label: 'Code Ownership' },
];

const bottomTrustItems = [
  { icon: Award, label: '25+ PROJECTS DELIVERED' },
  { icon: ShieldCheck, label: '100% CODE OWNERSHIP' },
  { icon: Code2, label: 'REACT & NODE.JS' },
  { icon: Users, label: '10+ INDUSTRIES' },
  { icon: Lock, label: 'ZERO VENDOR LOCK-IN' },
];

export function HomeHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState<string>('web');
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Auto cycle active node
  useEffect(() => {
    const interval = setInterval(() => {
      if (!hoveredNode) {
        setActiveNode((prev) => {
          const currentIndex = systemNodes.findIndex((n) => n.id === prev);
          const nextIndex = (currentIndex + 1) % systemNodes.length;
          return systemNodes[nextIndex].id;
        });
      }
    }, 3200);
    return () => clearInterval(interval);
  }, [hoveredNode]);

  // Parallax Physics for right canvas
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-400, 400], [-6, 6]);
  const translateX = useTransform(mouseX, [-400, 400], [-5, 5]);
  const translateY = useTransform(mouseY, [-300, 300], [-5, 5]);

  const smoothRotateX = useSpring(rotateX, { stiffness: 100, damping: 20 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 100, damping: 20 });
  const smoothTranslateX = useSpring(translateX, { stiffness: 100, damping: 20 });
  const smoothTranslateY = useSpring(translateY, { stiffness: 100, damping: 20 });

  // Spotlight coordinates
  const spotX = useSpring(0, { stiffness: 150, damping: 25 });
  const spotY = useSpring(0, { stiffness: 150, damping: 25 });

  let rafMouseMove: number;
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    cancelAnimationFrame(rafMouseMove);
    rafMouseMove = requestAnimationFrame(() => {
      mouseX.set(x);
      mouseY.set(y);
      spotX.set(e.clientX - rect.left);
      spotY.set(e.clientY - rect.top);
    });
  };

  const handleMouseLeave = () => {
    cancelAnimationFrame(rafMouseMove);
    mouseX.set(0);
    mouseY.set(0);
    setHoveredNode(null);
  };

  const currentActive = hoveredNode || activeNode;
  const orbitRadius = 230;

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#0A0F1D] text-white pt-24 sm:pt-28 pb-0 select-none"
    >
      {/* Dynamic Cursor Reactive Plasma Spotlight */}
      <motion.div
        className="absolute left-0 top-0 w-[650px] h-[650px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,194,255,0.12)_0%,rgba(0,102,255,0.05)_40%,transparent_70%)] blur-[90px] pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{ x: spotX, y: spotY }}
      />

      {/* Atmospheric Ambient Glows */}
      <div className="absolute -top-32 -left-20 w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-[150px] pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] rounded-full bg-cyan-500/15 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[500px] rounded-full bg-indigo-600/15 blur-[140px] pointer-events-none" />

      {/* Precision Blueprint Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #38BDF8 1px, transparent 1px), linear-gradient(to bottom, #38BDF8 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      {/* Main 2-Column Hero Content Grid */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full my-auto py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: HERO HEADLINE & ACTIONS */}
          <div className="lg:col-span-5 text-left flex flex-col items-start justify-center space-y-6">
            
            {/* Top Line Tag */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-cyan-400"
            >
              <span className="w-6 h-[2px] bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.9)]" />
              <span>CUSTOM SOFTWARE STUDIO</span>
            </motion.div>

            {/* High-Impact Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight text-white leading-[1.08]"
            >
              Software Built for Scale.{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                On Your Terms.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-lg"
            >
              We architect and deploy custom web platforms, enterprise ERPs, and mobile applications with{' '}
              <span className="text-white font-semibold underline decoration-cyan-400/50 underline-offset-4">
                100% sovereign code ownership
              </span>{' '}
              and zero vendor lock-in.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-2 flex flex-wrap items-center gap-3.5 w-full sm:w-auto"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs shadow-[0_0_25px_rgba(0,194,255,0.35)] hover:shadow-[0_0_35px_rgba(0,194,255,0.5)] hover:scale-105 transition-all cursor-pointer group border border-cyan-400/30"
              >
                <span>Start a Project</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs backdrop-blur-md transition-all cursor-pointer hover:border-cyan-400/50"
              >
                <span>View Projects</span>
              </Link>
            </motion.div>

            {/* 3 Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-6 border-t border-white/10 w-full grid grid-cols-3 gap-4"
            >
              {keyMetrics.map((metric, idx) => (
                <div key={idx} className="space-y-0.5 text-left">
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {metric.label}
                  </div>
                </div>
              ))}
            </motion.div>

          </div>

          {/* RIGHT COLUMN: 3D PRO TELEMETRY ORBITAL HUB */}
          <div className="lg:col-span-7 flex items-center justify-center translate-x-[10px] lg:translate-x-[20px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full flex items-center justify-center min-h-[460px]"
              style={{ perspective: '1100px' }}
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
                className="relative flex items-center justify-center w-full h-[460px]"
              >
                {/* Center Glow Aura */}
                <div className="absolute w-[340px] h-[340px] rounded-full bg-radial from-cyan-500/20 via-blue-600/10 to-transparent blur-3xl pointer-events-none" />

                {/* SVG Vector Radar & Telemetry Canvas */}
                <svg
                  viewBox="-340 -250 680 500"
                  className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-10"
                >
                  <defs>
                    {/* Glowing Laser Gradient */}
                    <linearGradient id="proOrbitBeam" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0066FF" stopOpacity="0.9" />
                      <stop offset="60%" stopColor="#00C2FF" stopOpacity="1" />
                      <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.9" />
                    </linearGradient>

                    {/* Laser Glow Filter */}
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Concentric Orbital Radar Rings */}
                  <circle
                    cx="0"
                    cy="0"
                    r="90"
                    fill="none"
                    stroke="rgba(56,189,248,0.12)"
                    strokeWidth="1"
                    strokeDasharray="2 8"
                  />
                  <circle
                    cx="0"
                    cy="0"
                    r="155"
                    fill="none"
                    stroke="rgba(56,189,248,0.22)"
                    strokeWidth="1.2"
                    strokeDasharray="4 6"
                  />
                  {/* Outer Circular Orbit Ring */}
                  <circle
                    cx="0"
                    cy="0"
                    r="230"
                    fill="none"
                    stroke="rgba(56,189,248,0.18)"
                    strokeWidth="1.2"
                    strokeDasharray="5 5"
                  />

                  {/* Dynamic Connecting Circuits with Animated Laser Beams */}
                  {systemNodes.map((node) => {
                    const rad = (node.angle * Math.PI) / 180;
                    const nodeOffsetX = node.id === 'hms' ? -20 : node.id === 'web' ? 20 : 0;
                    const nodeOffsetY = node.id === 'seo' || node.id === 'cloud' ? 5 : node.id === 'crm' || node.id === 'erp' ? -5 : 0;
                    const x = Math.round(Math.cos(rad) * orbitRadius) + nodeOffsetX;
                    const y = Math.round(Math.sin(rad) * orbitRadius) + nodeOffsetY;
                    const isActive = currentActive === node.id;

                    return (
                      <g key={node.id}>
                        {/* Passive Circuit Line */}
                        <line
                          x1="0"
                          y1="0"
                          x2={x}
                          y2={y}
                          stroke={isActive ? '#38BDF8' : 'rgba(56,189,248,0.18)'}
                          strokeWidth={isActive ? '2' : '1'}
                          strokeDasharray={isActive ? 'none' : '4 4'}
                          opacity={isActive ? 1 : 0.5}
                          className="transition-colors duration-300"
                        />

                        {/* Active Laser Glowing Circuit */}
                        {isActive && (
                          <>
                            {/* Ambient Glow Beam */}
                            <line
                              x1="0"
                              y1="0"
                              x2={x}
                              y2={y}
                              stroke="#00C2FF"
                              strokeWidth="8"
                              strokeOpacity="0.25"
                              strokeLinecap="round"
                              filter="url(#glow)"
                            />
                            {/* Core Laser Beam */}
                            <line
                              x1="0"
                              y1="0"
                              x2={x}
                              y2={y}
                              stroke="url(#proOrbitBeam)"
                              strokeWidth="3.5"
                              strokeOpacity="0.95"
                              strokeLinecap="round"
                            />
                          </>
                        )}

                        {/* Lead Energy Particle */}
                        <circle
                          r={isActive ? '4' : '1.5'}
                          fill={isActive ? '#00C2FF' : 'rgba(56,189,248,0.4)'}
                          filter={isActive ? 'url(#glow)' : undefined}
                        >
                          <animateMotion
                            path={`M 0 0 L ${x} ${y}`}
                            dur={isActive ? '1.2s' : '3.2s'}
                            repeatCount="indefinite"
                          />
                        </circle>

                        {/* Trailing Secondary Energy Particle on Active */}
                        {isActive && (
                          <circle r="2.5" fill="#FFFFFF" filter="url(#glow)">
                            <animateMotion
                              path={`M 0 0 L ${x} ${y}`}
                              dur="1.2s"
                              begin="0.6s"
                              repeatCount="indefinite"
                            />
                          </circle>
                        )}
                      </g>
                    );
                  })}
                </svg>

                {/* Central Brand Pedestal */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative z-30 flex items-center justify-center px-4 py-3 rounded-2xl bg-slate-900/90 backdrop-blur-xl shadow-[0_0_35px_rgba(56,189,248,0.35)] border border-cyan-400/40 ring-1 ring-cyan-400/20 cursor-default"
                  style={{ transform: 'translateZ(35px)' }}
                >
                  <CompanyLogo width={165} height={46} theme="dark" imgClassName="scale-105" />
                </motion.div>

                {/* 6 High-Tech Capability Pills */}
                {systemNodes.map((node, index) => {
                  const rad = (node.angle * Math.PI) / 180;
                  const nodeOffsetX = node.id === 'hms' ? -20 : node.id === 'web' ? 20 : 0;
                  const nodeOffsetY = node.id === 'seo' || node.id === 'cloud' ? 5 : node.id === 'crm' || node.id === 'erp' ? -5 : 0;
                  const x = Math.round(Math.cos(rad) * orbitRadius) + nodeOffsetX;
                  const y = Math.round(Math.sin(rad) * orbitRadius) + nodeOffsetY;
                  const Icon = node.icon;
                  const isActive = currentActive === node.id;

                  return (
                    <div
                      key={node.id}
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) translateZ(28px)`,
                        zIndex: isActive ? 28 : 22,
                      }}
                    >
                      <motion.button
                        onClick={() => setActiveNode(node.id)}
                        onMouseEnter={() => setHoveredNode(node.id)}
                        onMouseLeave={() => setHoveredNode(null)}
                        whileHover={{ scale: 1.07 }}
                        whileTap={{ scale: 0.96 }}
                        animate={{
                          scale: isActive ? 1.05 : 1,
                          y: [0, index % 2 === 0 ? -2.5 : 2.5, 0],
                        }}
                        transition={{
                          scale: { type: 'spring', stiffness: 350, damping: 25 },
                          y: { duration: 4 + (index % 3) * 0.5, repeat: Infinity, ease: 'easeInOut' },
                        }}
                        className={`relative flex items-center gap-3 rounded-2xl px-4 py-2.5 text-left transition-all duration-300 cursor-pointer ${
                          isActive
                            ? 'border-2 border-cyan-400 bg-slate-800/95 shadow-[0_0_30px_rgba(56,189,248,0.4)] ring-4 ring-cyan-400/20'
                            : 'border border-slate-700/80 bg-slate-900/90 backdrop-blur-md shadow-md hover:border-cyan-400/60 hover:shadow-lg'
                        }`}
                      >
                        <div
                          className={`flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${node.gradient} text-white font-bold shadow-xs`}
                        >
                          <Icon className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-white" />
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="text-xs sm:text-sm font-bold text-white whitespace-nowrap">
                            {node.label}
                          </span>
                          {isActive && (
                            <span className="text-[10px] font-mono font-semibold text-cyan-400 animate-fadeIn truncate max-w-[130px]">
                              {node.description}
                            </span>
                          )}
                        </div>
                      </motion.button>
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* BOTTOM TRUST & CAPABILITIES RIBBON */}
      <div className="relative z-10 w-full border-t border-cyan-400/25 border-b border-white/10 bg-[#060A14]/95 backdrop-blur-2xl py-[30px] shadow-[0_-10px_30px_rgba(0,194,255,0.06)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6 lg:gap-10 text-xs sm:text-[13px] text-slate-200 font-bold whitespace-nowrap overflow-x-auto no-scrollbar">
            {bottomTrustItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 hover:text-cyan-400 transition-colors shrink-0 group">
                <div className="h-8 w-8 rounded-xl bg-cyan-400/10 border border-cyan-400/25 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400/25 group-hover:scale-105 transition-all shadow-[0_0_15px_rgba(56,189,248,0.15)]">
                  <item.icon className="h-4 w-4 shrink-0" />
                </div>
                <span className="tracking-wider">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
