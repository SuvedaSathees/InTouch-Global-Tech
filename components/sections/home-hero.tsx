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
  Award,
  Users,
  Sparkles,
  Zap,
} from 'lucide-react';

const systemNodes = [
  {
    id: 'web',
    label: 'Web Dev & CMS',
    shortLabel: 'Web Dev',
    tinyLabel: 'Web Dev',
    icon: Globe,
    angle: 0,
    gradient: 'from-blue-500 to-cyan-400',
    description: 'React, Next.js & Web Apps',
  },
  {
    id: 'erp',
    label: 'ERP & HRMS',
    shortLabel: 'ERP & HRMS',
    tinyLabel: 'ERP',
    icon: Building2,
    angle: 60,
    gradient: 'from-indigo-500 to-blue-500',
    description: 'Enterprise Operations Hub',
  },
  {
    id: 'crm',
    label: 'CRM & Billing',
    shortLabel: 'CRM & Billing',
    tinyLabel: 'CRM',
    icon: Layers,
    angle: 120,
    gradient: 'from-cyan-500 to-teal-400',
    description: 'Automated Invoicing & GST',
  },
  {
    id: 'hms',
    label: 'Hospital HMS',
    shortLabel: 'Hospital HMS',
    tinyLabel: 'Hospital',
    icon: Activity,
    angle: 180,
    gradient: 'from-emerald-500 to-teal-400',
    description: 'Clinical Records & Health',
  },
  {
    id: 'seo',
    label: 'SEO & Growth',
    shortLabel: 'SEO & Growth',
    tinyLabel: 'SEO',
    icon: Search,
    angle: 240,
    gradient: 'from-purple-500 to-indigo-400',
    description: 'Top Google Rankings & SEM',
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    shortLabel: 'Cloud & DevOps',
    tinyLabel: 'Cloud',
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
  const [deviceType, setDeviceType] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  useEffect(() => {
    const updateDeviceType = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setDeviceType('mobile');
      } else if (w < 1024) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };
    updateDeviceType();
    window.addEventListener('resize', updateDeviceType);
    return () => window.removeEventListener('resize', updateDeviceType);
  }, []);

  const isMobile = deviceType === 'mobile';
  const isTablet = deviceType === 'tablet';

  const orbitRadiusX = isMobile ? 128 : isTablet ? 175 : 230;
  const orbitRadiusY = isMobile ? 106 : isTablet ? 155 : 230;

  return (
    <section
      id="home-hero-section"
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
                100% complete code ownership
              </span>{' '}
              and zero vendor lock-in.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs shadow-[0_0_25px_rgba(0,194,255,0.35)] hover:shadow-[0_0_35px_rgba(0,194,255,0.5)] hover:scale-105 transition-all cursor-pointer group border border-cyan-400/30 text-center"
              >
                <span>Start a Project</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs backdrop-blur-md transition-all cursor-pointer hover:border-cyan-400/50 text-center"
              >
                <span>View Projects</span>
              </Link>
            </motion.div>

            {/* 3 Metrics Bar (Hidden on Mobile < lg, Preserved on Desktop lg:grid) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="hidden lg:grid pt-6 border-t border-white/10 w-full grid-cols-3 gap-2 sm:gap-4"
            >
              {keyMetrics.map((metric, idx) => (
                <div key={idx} className="space-y-0.5 text-left">
                  <div className="text-xl sm:text-3xl font-black text-white tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-[9.5px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {metric.label}
                  </div>
                </div>
              ))}
            </motion.div>

          </div>

          {/* RIGHT COLUMN: 3D PRO TELEMETRY ORBITAL HUB */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center lg:translate-x-[20px] overflow-visible py-2 sm:py-4 lg:py-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full flex items-center justify-center min-h-[300px] sm:min-h-[400px] lg:min-h-[460px] overflow-visible"
              style={{ perspective: '1100px' }}
            >
              {/* Parallax 3D Plane */}
              <motion.div
                style={{
                  rotateX: isMobile ? 0 : smoothRotateX,
                  rotateY: isMobile ? 0 : smoothRotateY,
                  x: isMobile ? 0 : smoothTranslateX,
                  y: isMobile ? 0 : smoothTranslateY,
                  transformStyle: 'preserve-3d',
                }}
                className="relative flex items-center justify-center w-full h-[290px] sm:h-[390px] lg:h-[460px] origin-center overflow-visible"
              >
                {/* Center Glow Aura */}
                <div className="absolute w-[300px] sm:w-[340px] h-[300px] sm:h-[340px] rounded-full bg-radial from-cyan-500/20 via-blue-600/10 to-transparent blur-3xl pointer-events-none" />

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
                    r={isMobile ? "50" : isTablet ? "75" : "90"}
                    fill="none"
                    stroke="rgba(56,189,248,0.12)"
                    strokeWidth="1"
                    strokeDasharray="2 8"
                  />
                  <circle
                    cx="0"
                    cy="0"
                    r={isMobile ? "88" : isTablet ? "120" : "155"}
                    fill="none"
                    stroke="rgba(56,189,248,0.22)"
                    strokeWidth="1.2"
                    strokeDasharray="4 6"
                  />
                  {/* Outer Orbit Ellipse / Ring */}
                  <ellipse
                    cx="0"
                    cy="0"
                    rx={orbitRadiusX}
                    ry={orbitRadiusY}
                    fill="none"
                    stroke="rgba(56,189,248,0.22)"
                    strokeWidth="1.2"
                    strokeDasharray="5 5"
                  />

                  {/* Dynamic Connecting Circuits with Animated Laser Beams */}
                  {systemNodes.map((node) => {
                    const rad = (node.angle * Math.PI) / 180;
                    const nodeOffsetX = isMobile
                      ? node.id === 'seo'
                        ? -14
                        : node.id === 'cloud'
                        ? 14
                        : node.id === 'crm'
                        ? -14
                        : node.id === 'erp'
                        ? 14
                        : 0
                      : isTablet
                      ? node.id === 'hms'
                        ? -15
                        : node.id === 'web'
                        ? 15
                        : 0
                      : node.id === 'hms'
                      ? -20
                      : node.id === 'web'
                      ? 20
                      : 0;

                    const nodeOffsetY = isMobile
                      ? node.id === 'seo' || node.id === 'cloud'
                        ? -6
                        : node.id === 'crm' || node.id === 'erp'
                        ? 6
                        : 0
                      : node.id === 'seo' || node.id === 'cloud'
                      ? 5
                      : node.id === 'crm' || node.id === 'erp'
                      ? -5
                      : 0;

                    const x = Math.round(Math.cos(rad) * orbitRadiusX) + nodeOffsetX;
                    const y = Math.round(Math.sin(rad) * orbitRadiusY) + nodeOffsetY;
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
                  className="relative z-30 flex items-center justify-center px-2 py-1 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl bg-slate-900/95 backdrop-blur-xl shadow-[0_0_25px_rgba(56,189,248,0.35)] border border-cyan-400/40 ring-1 ring-cyan-400/20 cursor-default"
                  style={{ transform: 'translateZ(35px)' }}
                >
                  <CompanyLogo width={isMobile ? 70 : isTablet ? 120 : 165} height={isMobile ? 20 : isTablet ? 34 : 46} theme="dark" imgClassName="scale-105" />
                </motion.div>

                {/* 6 High-Tech Capability Pills */}
                {systemNodes.map((node, index) => {
                  const rad = (node.angle * Math.PI) / 180;
                  const nodeOffsetX = isMobile
                    ? node.id === 'seo'
                      ? -14
                      : node.id === 'cloud'
                      ? 14
                      : node.id === 'crm'
                      ? -14
                      : node.id === 'erp'
                      ? 14
                      : 0
                    : isTablet
                    ? node.id === 'hms'
                      ? -15
                      : node.id === 'web'
                      ? 15
                      : 0
                    : node.id === 'hms'
                    ? -20
                    : node.id === 'web'
                    ? 20
                    : 0;

                  const nodeOffsetY = isMobile
                    ? node.id === 'seo' || node.id === 'cloud'
                      ? -6
                      : node.id === 'crm' || node.id === 'erp'
                      ? 6
                      : 0
                    : node.id === 'seo' || node.id === 'cloud'
                    ? 5
                    : node.id === 'crm' || node.id === 'erp'
                    ? -5
                    : 0;

                  const x = Math.round(Math.cos(rad) * orbitRadiusX) + nodeOffsetX;
                  const y = Math.round(Math.sin(rad) * orbitRadiusY) + nodeOffsetY;
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
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{
                          scale: isActive ? 1.05 : 1,
                          y: [0, index % 2 === 0 ? -2 : 2, 0],
                        }}
                        transition={{
                          scale: { type: 'spring', stiffness: 350, damping: 25 },
                          y: { duration: 4 + (index % 3) * 0.5, repeat: Infinity, ease: 'easeInOut' },
                        }}
                        className={`relative flex items-center gap-1.5 sm:gap-3 rounded-xl sm:rounded-2xl px-2 py-1 sm:px-3.5 sm:py-2 text-left transition-all duration-300 cursor-pointer ${
                          isActive
                            ? 'border-2 border-cyan-400 bg-slate-800/95 shadow-[0_0_20px_rgba(56,189,248,0.45)] ring-2 sm:ring-4 ring-cyan-400/20'
                            : 'border border-slate-700/80 bg-slate-900/90 backdrop-blur-md shadow-md hover:border-cyan-400/60 hover:shadow-lg'
                        }`}
                      >
                        <div
                          className={`flex h-6 w-6 sm:h-8 sm:w-8 lg:h-9 lg:w-9 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br ${node.gradient} text-white font-bold shadow-xs`}
                        >
                          <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-4.5 lg:w-4.5 text-white" />
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="text-[10px] sm:text-xs lg:text-sm font-bold text-white whitespace-nowrap">
                            <span className="max-[370px]:hidden sm:hidden">{node.shortLabel}</span>
                            <span className="hidden max-[370px]:inline">{node.tinyLabel}</span>
                            <span className="hidden sm:inline">{node.label}</span>
                          </span>
                          {isActive && (
                            <span className="hidden lg:block text-[8.5px] font-mono font-semibold text-cyan-400 animate-fadeIn max-w-[160px] leading-tight">
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

      {/* BOTTOM TRUST & CAPABILITIES RIBBON (Previous 2x2 Clean Grid on Mobile, Flex Row on Desktop) */}
      <div className="relative z-10 w-full border-t border-cyan-400/25 border-b border-white/10 bg-[#060A14]/95 backdrop-blur-2xl py-4 sm:py-[30px] shadow-[0_-10px_30px_rgba(0,194,255,0.06)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:flex sm:items-center sm:justify-between sm:gap-6 lg:gap-10 text-[11px] sm:text-[13px] text-slate-200 font-bold">
            {bottomTrustItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 sm:gap-3 hover:text-cyan-400 transition-colors shrink-0 group">
                <div className="h-8 w-8 sm:h-8 sm:w-8 rounded-full bg-cyan-400/10 border border-cyan-400/25 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400/25 group-hover:scale-105 transition-all shadow-[0_0_15px_rgba(56,189,248,0.15)] shrink-0">
                  <item.icon className="h-4 w-4 sm:h-4 sm:w-4 shrink-0" />
                </div>
                <span className="tracking-wider leading-tight">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
