'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  Server,
  Layers,
  Globe,
  Smartphone,
  Building2,
  Lock,
  Cloud,
  Activity,
  Search,
  MapPin,
} from 'lucide-react';
import { MagneticButton } from '@/components/magnetic-button';
import { siteConfig } from '@/lib/site-config';

const systemNodes = [
  {
    id: 'web',
    label: 'Web Dev & CMS',
    icon: Globe,
    angle: 0,
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    id: 'erp',
    label: 'ERP & HRMS',
    icon: Building2,
    angle: 55,
    gradient: 'from-indigo-600 to-blue-700',
  },
  {
    id: 'crm',
    label: 'CRM & Billing',
    icon: Layers,
    angle: 125,
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'hms',
    label: 'Hospital / Pharma HMS',
    icon: Activity,
    angle: 180,
    gradient: 'from-emerald-600 to-teal-600',
  },
  {
    id: 'seo',
    label: 'SEO & Marketing',
    icon: Search,
    angle: 235,
    gradient: 'from-purple-600 to-indigo-600',
  },
  {
    id: 'cloud',
    label: 'Cloud & Domain',
    icon: Server,
    angle: 305,
    gradient: 'from-blue-500 to-indigo-600',
  },
];

const bottomTrustItems = [
  { icon: Globe, label: 'STATIC & DYNAMIC WEBSITES' },
  { icon: Building2, label: 'CUSTOM ERP & HRMS' },
  { icon: Activity, label: 'HOSPITAL & PHARMA SYSTEMS' },
  { icon: Search, label: 'HIGH-RANKING SEO & SEM' },
  { icon: Lock, label: '100% IP & CODE OWNERSHIP' },
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
    }, 3000);
    return () => clearInterval(interval);
  }, [hoveredNode]);

  // Parallax Physics for right canvas
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-400, 400], [-7, 7]);
  const translateX = useTransform(mouseX, [-400, 400], [-6, 6]);
  const translateY = useTransform(mouseY, [-300, 300], [-5, 5]);

  const smoothRotateX = useSpring(rotateX, { stiffness: 100, damping: 20 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 100, damping: 20 });
  const smoothTranslateX = useSpring(translateX, { stiffness: 100, damping: 20 });
  const smoothTranslateY = useSpring(translateY, { stiffness: 100, damping: 20 });

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
    });
  };

  const handleMouseLeave = () => {
    cancelAnimationFrame(rafMouseMove);
    mouseX.set(0);
    mouseY.set(0);
    setHoveredNode(null);
  };

  const currentActive = hoveredNode || activeNode;
  const radiusX = 230;
  const radiusY = 175;

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[85vh] flex flex-col justify-between overflow-hidden bg-[#FAF7F2] text-slate-900 pt-20 sm:pt-24 select-none"
    >
      {/* Dynamic Radiant Background Auras */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(217,119,6,0.04)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/10 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/10 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Precision Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Main 2-Column Hero Content Grid */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full my-auto py-4 lg:py-6 translate-y-[15px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: HERO CONTENT */}
          <div className="lg:col-span-5 text-left flex flex-col items-start justify-center">
            {/* Clean Line Heading Accent */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 mb-6"
            >
              <span className="w-5 h-[2px] bg-amber-700 rounded-full" />
              <span>SOFTWARE DEVELOPERS</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.08]"
            >
              Leading Web & IT Solutions That Move{' '}
              <span className="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 bg-clip-text text-transparent">
                Businesses Forward.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-lg"
            >
              {siteConfig.name} delivers complete web application services, static & dynamic website designing, custom ERP & HRMS software, Hospital/Pharmacy systems, and high-ROI SEO solutions.
            </motion.p>

            {/* Action CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <MagneticButton
                  href="/contact"
                  size="lg"
                  className="w-full sm:w-auto bg-amber-700 hover:bg-amber-800 text-white font-bold px-8 py-3.5 rounded-2xl shadow-xl shadow-amber-700/25 text-sm"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </MagneticButton>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <MagneticButton
                  href="/services"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-slate-300 bg-white hover:bg-slate-50 text-slate-800 px-7 py-3.5 rounded-2xl text-sm shadow-xs"
                >
                  Explore Services
                </MagneticButton>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: 3D CONNECTED ARCHITECTURE CANVAS */}
          <div className="lg:col-span-7 flex items-center justify-center translate-x-[30px] lg:translate-x-[50px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full flex items-center justify-center min-h-[440px] sm:min-h-[480px]"
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
                {/* Center Ambient Glow */}
                <div className="absolute w-[260px] h-[260px] rounded-full bg-blue-500/10 blur-2xl pointer-events-none" />

                {/* Symmetrical SVG Vector Connecting Canvas */}
                <svg
                  viewBox="-320 -230 640 460"
                  className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-10"
                >
                  {/* Concentric Orbital Rings */}
                  <circle
                    cx="0"
                    cy="0"
                    r="140"
                    fill="none"
                    stroke="#e2e8f0"
                    strokeWidth="1.2"
                    strokeDasharray="4 4"
                  />
                  <ellipse
                    cx="0"
                    cy="0"
                    rx="230"
                    ry="175"
                    fill="none"
                    stroke="#e2e8f0"
                    strokeWidth="1.2"
                    strokeDasharray="5 5"
                  />

                  {/* 6 Clean Symmetrical Connecting Lines */}
                  {systemNodes.map((node) => {
                    const rad = (node.angle * Math.PI) / 180;
                    const nodeOffsetY = node.id === 'seo' || node.id === 'cloud' ? -20 : node.id === 'crm' || node.id === 'erp' ? 20 : 0;
                    const x = Math.round(Math.cos(rad) * radiusX);
                    const y = Math.round(Math.sin(rad) * radiusY) + nodeOffsetY;
                    const isActive = currentActive === node.id;

                    return (
                      <g key={node.id}>
                        <line
                          x1="0"
                          y1="0"
                          x2={x}
                          y2={y}
                          stroke={isActive ? '#b45309' : '#cbd5e1'}
                          strokeWidth={isActive ? '2.5' : '1'}
                          strokeDasharray={isActive ? 'none' : '4 4'}
                          className="transition-colors duration-300"
                        />

                        {isActive && (
                          <line
                            x1="0"
                            y1="0"
                            x2={x}
                            y2={y}
                            stroke="#d97706"
                            strokeWidth="5"
                            strokeOpacity="0.25"
                            strokeLinecap="round"
                          />
                        )}

                        <circle
                          r={isActive ? '3.5' : '2'}
                          fill={isActive ? '#b45309' : '#94a3b8'}
                        >
                          <animateMotion
                            path={`M 0 0 L ${x} ${y}`}
                            dur={isActive ? '1.2s' : '2.8s'}
                            repeatCount="indefinite"
                          />
                        </circle>
                      </g>
                    );
                  })}
                </svg>

                {/* Central Hub: Intouch Global Tech */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative z-30 flex flex-col items-center justify-center h-36 w-36 sm:h-40 sm:w-40 rounded-full border-2 border-amber-600 bg-white shadow-[0_12px_36px_rgba(180,83,9,0.14)] text-center p-3 cursor-default"
                  style={{ transform: 'translateZ(35px)' }}
                >
                  <div className="flex items-center gap-1 mb-0.5">
                    <span className="h-2 w-2 rounded-full bg-amber-600 animate-pulse" />
                    <span className="text-[8px] tracking-widest text-amber-700 uppercase font-extrabold">
                      GLOBAL IT HUB
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-black text-slate-950 leading-tight mt-0.5 tracking-tight">
                    INTOUCH
                  </h3>
                  <h3 className="text-xs sm:text-sm font-extrabold text-amber-700 leading-tight tracking-tight">
                    GLOBAL TECH
                  </h3>
                  <p className="text-[8px] text-slate-500 mt-1 font-medium">Core Operational Hub</p>
                </motion.div>

                {/* 6 Clean Orbiting Capability Cards */}
                {systemNodes.map((node, index) => {
                  const rad = (node.angle * Math.PI) / 180;
                  const nodeOffsetY = node.id === 'seo' || node.id === 'cloud' ? -20 : node.id === 'crm' || node.id === 'erp' ? 20 : 0;
                  const x = Math.round(Math.cos(rad) * radiusX);
                  const y = Math.round(Math.sin(rad) * radiusY) + nodeOffsetY;
                  const Icon = node.icon;
                  const isActive = currentActive === node.id;

                  return (
                    <div
                      key={node.id}
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) translateZ(30px)`,
                        zIndex: isActive ? 28 : 22,
                      }}
                    >
                      <motion.button
                        onClick={() => setActiveNode(node.id)}
                        onMouseEnter={() => setHoveredNode(node.id)}
                        onMouseLeave={() => setHoveredNode(null)}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.96 }}
                        animate={{
                          scale: isActive ? 1.05 : 1,
                          y: [0, index % 2 === 0 ? -2.5 : 2.5, 0],
                        }}
                        transition={{
                          scale: { type: 'spring', stiffness: 350, damping: 25 },
                          y: { duration: 4 + (index % 3) * 0.5, repeat: Infinity, ease: 'easeInOut' },
                        }}
                        className={`relative flex items-center gap-2.5 rounded-xl sm:rounded-2xl px-3.5 py-2.5 text-left transition-all duration-300 ${
                          isActive
                            ? 'border-2 border-amber-600 bg-white shadow-[0_10px_28px_rgba(180,83,9,0.18)] ring-4 ring-amber-500/15'
                            : 'border border-[#E8DFD1] bg-white/95 shadow-xs hover:border-amber-400'
                        }`}
                      >
                        <div
                          className={`flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br ${node.gradient} text-white font-bold shadow-2xs`}
                        >
                          <Icon className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-slate-950 whitespace-nowrap">
                          {node.label}
                        </span>
                      </motion.button>
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* BOTTOM TRUST & CAPABILITIES RIBBON (Perfect Symmetrical Height & Padding) */}
      <div className="relative z-10 w-full border-y border-[#E8DFD1] bg-[#F4EEE4]/95 py-6 sm:py-8 mt-[90px] sm:mt-[106px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 sm:gap-4 lg:gap-6 text-[10px] sm:text-xs lg:text-[12px] xl:text-[13px] text-slate-800 font-extrabold whitespace-nowrap overflow-x-auto no-scrollbar">
            {bottomTrustItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-1.5 sm:gap-2 hover:text-amber-800 transition-colors shrink-0">
                <item.icon className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-amber-700 shrink-0" />
                <span className="tracking-wider">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
