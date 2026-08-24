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
  Cpu,
} from 'lucide-react';
import { MagneticButton } from '@/components/magnetic-button';

const systemNodes = [
  {
    id: 'ai',
    label: 'AI Engine',
    icon: Sparkles,
    angle: 235,
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'cloud',
    label: 'Cloud Infra',
    icon: Server,
    angle: 305,
    gradient: 'from-purple-500 to-indigo-600',
  },
  {
    id: 'website',
    label: 'Web Platform',
    icon: Globe,
    angle: 0,
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    id: 'erp',
    label: 'ERP System',
    icon: Building2,
    angle: 55,
    gradient: 'from-indigo-600 to-blue-700',
  },
  {
    id: 'crm',
    label: 'CRM Engine',
    icon: Layers,
    angle: 125,
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'mobile',
    label: 'Mobile App',
    icon: Smartphone,
    angle: 180,
    gradient: 'from-blue-600 to-indigo-600',
  },
];

const bottomTrustItems = [
  { icon: Zap, label: 'FULL-STACK ENGINEERING' },
  { icon: Cloud, label: 'CLOUD READY' },
  { icon: Cpu, label: 'AI ENABLED' },
  { icon: Lock, label: '100% IP OWNERSHIP' },
  { icon: ShieldCheck, label: 'PRODUCTION SUPPORT' },
];

export function HomeHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState<string>('erp');
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
      className="relative min-h-[85vh] flex flex-col justify-between overflow-hidden bg-white text-slate-900 pt-20 sm:pt-24 select-none"
    >
      {/* Dynamic Radiant Background Auras */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(37,99,235,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/10 w-[500px] h-[500px] bg-blue-500/6 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/10 w-[500px] h-[500px] bg-indigo-500/6 rounded-full blur-[130px] pointer-events-none" />

      {/* Precision Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Main 2-Column Hero Content Grid (Shifted 15px down) */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full my-auto py-4 lg:py-6 translate-y-[15px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: CLEAN & SIMPLE HERO CONTENT */}
          <div className="lg:col-span-5 text-left flex flex-col items-start justify-center">
            {/* Clean Line Heading Accent (Shifted 5px down) */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-6 translate-y-[5px]"
            >
              <span className="w-5 h-[2px] bg-blue-600 rounded-full" />
              <span>SOFTWARE ENGINEERING • AI</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.08]"
            >
              We Build{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                Digital Products
              </span>{' '}
              That Move Businesses Forward.
            </motion.h1>

            {/* Simple, Crisp Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-lg"
            >
              We design and engineer bespoke software, scalable web platforms, custom ERP systems, and AI-driven automation built around your business.
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
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-2xl shadow-xl shadow-blue-500/25 text-sm"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </MagneticButton>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <MagneticButton
                  href="/projects"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-slate-300 bg-white hover:bg-slate-50 text-slate-800 px-7 py-3.5 rounded-2xl text-sm shadow-xs"
                >
                  View Our Work
                </MagneticButton>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: CLEAN 3D CONNECTED ARCHITECTURE CANVAS (Shifted 20px right) */}
          <div className="lg:col-span-7 flex items-center justify-center translate-x-0 lg:translate-x-[20px]">
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
                    const x = Math.round(Math.cos(rad) * radiusX);
                    const y = Math.round(Math.sin(rad) * radiusY);
                    const isActive = currentActive === node.id;

                    return (
                      <g key={node.id}>
                        <line
                          x1="0"
                          y1="0"
                          x2={x}
                          y2={y}
                          stroke={isActive ? '#2563eb' : '#cbd5e1'}
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
                            stroke="#3b82f6"
                            strokeWidth="5"
                            strokeOpacity="0.25"
                            strokeLinecap="round"
                          />
                        )}

                        <circle
                          r={isActive ? '3.5' : '2'}
                          fill={isActive ? '#2563eb' : '#94a3b8'}
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

                {/* Central Hub: YOUR BUSINESS */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative z-30 flex flex-col items-center justify-center h-36 w-36 sm:h-40 sm:w-40 rounded-full border-2 border-blue-500 bg-white shadow-[0_12px_36px_rgba(37,99,235,0.14)] text-center p-4 cursor-default"
                  style={{ transform: 'translateZ(35px)' }}
                >
                  <div className="flex items-center gap-1 mb-0.5">
                    <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                    <span className="text-[9px] tracking-widest text-blue-600 uppercase font-bold">
                      ENTERPRISE HUB
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-slate-950 leading-none mt-0.5 tracking-tight">
                    YOUR
                  </h3>
                  <h3 className="text-base sm:text-lg font-black text-slate-950 leading-none tracking-tight">
                    BUSINESS
                  </h3>
                  <p className="text-[8px] text-slate-500 mt-1 font-medium">Core Operational Hub</p>
                </motion.div>

                {/* 6 Clean Orbiting System Capability Cards */}
                {systemNodes.map((node, index) => {
                  const rad = (node.angle * Math.PI) / 180;
                  const x = Math.round(Math.cos(rad) * radiusX);
                  const y = Math.round(Math.sin(rad) * radiusY);
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
                            ? 'border-2 border-blue-600 bg-white shadow-[0_10px_28px_rgba(37,99,235,0.18)] ring-4 ring-blue-500/15'
                            : 'border border-slate-200/90 bg-white/95 shadow-xs hover:border-slate-300'
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

      {/* BOTTOM TRUST & CAPABILITIES RIBBON (Shifted 10px up) */}
      <div className="relative z-10 w-full border-t border-slate-100 bg-slate-50/70 py-4 sm:py-5 mt-20 sm:mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-around sm:justify-between gap-4 sm:gap-6 text-xs text-slate-600 font-semibold">
            {bottomTrustItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 hover:text-slate-950 transition-colors">
                <item.icon className="h-4 w-4 text-blue-600 shrink-0" />
                <span className="tracking-wider">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
