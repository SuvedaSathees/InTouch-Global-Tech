'use client';

import React, { useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import veluAvatar from '@/app/terms/veluceo.png';
import mathiAvatar from '@/app/terms/mathi.png';
import sriAvatar from '@/app/terms/sri.png';
import suvedaAvatar from '@/app/terms/suve.png';
import vigneshAvatar from '@/app/terms/vicky.png';
import sivaAvatar from '@/app/terms/siva.png';
import sanAvatar from '@/app/terms/san.png';
import naveenAvatar from '@/app/terms/naveen.png';
import { motion, useScroll, useTransform, useSpring, useMotionValue, type MotionValue } from 'framer-motion';
import {
  CheckCircle2,
  ShieldCheck,
  Building2,
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
  Palette,
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
    name: 'Velumurugan',
    role: 'CEO of Intouch',
    tagline: 'Strategic Vision, Executive Leadership & Enterprise Scaling',
    department: 'Executive Leadership',
    avatar: veluAvatar,
    avatarClassName: 'scale-[1.03] -translate-x-[20px] -translate-y-[15px]',
    avatarStyle: {
      imageRendering: 'high-quality',
      filter: 'contrast(1.08) brightness(1.03) saturate(1.06) drop-shadow(0 12px 28px rgba(0, 40, 100, 0.18))',
    },
    about: 'Leads the overarching strategic vision, executive roadmap, and technology innovations at Intouch Global Tech, driving scalable digital engineering and client success.',
    philosophy: '"Empowering enterprises with robust digital platforms, scalable software systems, and complete technology ownership."',
    experience: '12+ Yrs Leadership',
    stack: ['Executive Strategy', 'Enterprise Architecture', 'Cloud Solutions', 'Digital Transformation'],
    expertise: [
      'Executive Leadership',
      'Strategic Tech Vision',
      'Enterprise Growth',
      'Client Partnerships',
    ],
    email: 'velumurugan@intouchglobaltech.com',
    linkedin: 'https://linkedin.com',
    color: '#0066FF',
    glowColor: 'rgba(0, 102, 255, 0.45)',
    gradient: 'from-blue-600 to-indigo-900',
    icon: Award,
  },
  {
    id: 1,
    number: '02',
    name: 'Srimun S S',
    role: 'ERP & CRM Architect Lead',
    tagline: 'Enterprise ERP Architecture & Custom CRM Solutions',
    department: 'ERP & CRM Systems',
    avatar: sriAvatar,
    avatarClassName: 'scale-[0.84] -translate-x-[15px] translate-y-[50px]',
    about: 'Specializes in high-scale custom ERP platforms, multi-tenant CRM systems, automated inventory/billing pipelines, and mission-critical business workflows.',
    philosophy: '"Enterprise ERP & CRM systems should eliminate friction and accelerate operational velocity."',
    experience: '9+ Yrs ERP & CRM',
    stack: ['Custom ERP', 'CRM Platforms', 'PostgreSQL', 'Next.js', 'Node.js', 'Workflows'],
    expertise: [
      'Custom ERP Architecture',
      'Multi-Tenant CRM Portals',
      'Automated Workflows',
      'Enterprise Integration',
    ],
    email: 'srimun@example.com',
    linkedin: 'https://linkedin.com',
    color: '#0066FF',
    glowColor: 'rgba(0, 102, 255, 0.45)',
    gradient: 'from-blue-600 to-indigo-900',
    icon: Building2,
  },
  {
    id: 2,
    number: '03',
    name: 'Suveda S',
    role: 'Full Stack Developer',
    tagline: 'End-to-End Web Applications & High-Performance Architecture',
    department: 'Full Stack Engineering',
    avatar: suvedaAvatar,
    avatarClassName: 'scale-[0.92] -translate-x-[50px] translate-y-[15px]',
    avatarStyle: {
      imageRendering: 'high-quality',
      filter: 'contrast(1.06) brightness(1.02) saturate(1.04) drop-shadow(0 8px 24px rgba(0,0,0,0.12))',
    },
    about: 'Engineers complete end-to-end web applications, modern React/Next.js frontends, scalable Node.js/PostgreSQL backends, and robust API ecosystems.',
    philosophy: '"Mastering the full stack creates seamless harmony between user experience and core backend power."',
    experience: '8+ Yrs Full Stack',
    stack: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'TypeScript', 'Cloud Architecture'],
    expertise: [
      'Full-Stack Web Dev',
      'Next.js & React Frontend',
      'Scalable Backend APIs',
      'Database Architecture',
    ],
    email: 'suveda@example.com',
    linkedin: 'https://linkedin.com',
    color: '#0066FF',
    glowColor: 'rgba(0, 102, 255, 0.45)',
    gradient: 'from-blue-600 to-indigo-900',
    icon: Code2,
  },
  {
    id: 3,
    number: '04',
    name: 'Vignesh K',
    role: 'Frontend Lead',
    tagline: 'Pixel-Perfect Web Experiences & Motion Systems',
    department: 'Web Interfaces & Motion',
    avatar: vigneshAvatar,
    avatarClassName: 'scale-[1.06] -translate-x-[20px] -translate-y-[20px]',
    about: 'Crafts pixel-perfect, lightning-fast user interfaces, design system components, micro-animations, and fluid responsive layouts.',
    philosophy: '"Motion should feel natural, intentional, and instantaneous."',
    experience: '7+ Yrs Frontend',
    stack: ['React', 'Next.js', 'Framer Motion', 'WebGL', 'Tailwind CSS'],
    expertise: [
      'Next.js & TypeScript',
      'Responsive Web UI',
      'State Management & UX',
      'Fluid Micro-Animations',
    ],
    email: 'vignesh@example.com',
    linkedin: 'https://linkedin.com',
    color: '#0066FF',
    glowColor: 'rgba(0, 102, 255, 0.45)',
    gradient: 'from-blue-600 to-indigo-900',
    icon: Terminal,
  },
  {
    id: 4,
    number: '05',
    name: 'Sandhiya M',
    role: 'QA & Testing Lead',
    tagline: 'Zero-Defect Quality Assurance & Comprehensive Testing',
    department: 'Quality Assurance & Testing',
    avatar: sanAvatar,
    avatarClassName: 'scale-[0.92] -translate-x-[20px] translate-y-[30px]',
    about: 'Guarantees rock-solid software stability and flawless user experiences through rigorous automated testing, regression suites, and continuous quality audits.',
    philosophy: '"Flawless software begins with relentless attention to detail and rigorous testing."',
    experience: '6+ Yrs QA & Testing',
    stack: ['Automated Testing', 'Playwright', 'Jest', 'Postman', 'Cypress', 'Regression QA'],
    expertise: [
      'End-to-End Automation',
      'Functional & Regression QA',
      'API & Security Validation',
      'Zero-Defect Standards',
    ],
    email: 'sandhiya@example.com',
    linkedin: 'https://linkedin.com',
    color: '#0066FF',
    glowColor: 'rgba(0, 102, 255, 0.45)',
    gradient: 'from-blue-600 to-indigo-900',
    icon: ShieldCheck,
  },
  {
    id: 5,
    number: '06',
    name: 'Naveen J',
    role: 'Digital Marketing Lead',
    tagline: 'High-ROI Growth Marketing, SEO & Performance Campaigns',
    department: 'Digital Marketing & Growth',
    avatar: naveenAvatar,
    avatarClassName: 'scale-[0.88] -translate-x-[20px] translate-y-[45px]',
    about: 'Drives high-converting digital marketing funnels, technical SEO rankings, performance PPC ads, and organic growth strategies for scaling businesses.',
    philosophy: '"Data-driven marketing turns clicks into high-value customer relationships."',
    experience: '6+ Yrs Digital Marketing',
    stack: ['Technical SEO', 'Google Ads (PPC)', 'Meta Ads', 'Conversion Funnels', 'Google Analytics'],
    expertise: [
      'Technical & On-Page SEO',
      'High-ROI PPC & Meta Ads',
      'Lead Generation Funnels',
      'Conversion Optimization',
    ],
    email: 'naveen@example.com',
    linkedin: 'https://linkedin.com',
    color: '#0066FF',
    glowColor: 'rgba(0, 102, 255, 0.45)',
    gradient: 'from-blue-600 to-indigo-900',
    icon: Globe,
  },
  {
    id: 6,
    number: '07',
    name: 'Sunmathi S',
    role: 'Backend Developer',
    tagline: 'High-Throughput APIs, Distributed Databases & Core Systems',
    department: 'Core Backend & APIs',
    avatar: mathiAvatar,
    avatarClassName: 'scale-[0.95] -translate-x-[20px] -translate-y-[20px]',
    avatarStyle: {
      imageRendering: 'high-quality',
      filter: 'contrast(1.06) brightness(1.02) saturate(1.04) drop-shadow(0 8px 24px rgba(0,0,0,0.12))',
    },
    about: 'Architects resilient server backends, high-performance database schemas, scalable REST/GraphQL APIs, and secure microservices engines.',
    philosophy: '"Resilient systems are engineered from solid schema foundations and optimized database queries."',
    experience: '6+ Yrs Backend',
    stack: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'],
    expertise: [
      'High-Speed APIs',
      'PostgreSQL & DB Design',
      'Auth & Microservices',
      'Caching & Performance',
    ],
    email: 'sunmathi@example.com',
    linkedin: 'https://linkedin.com',
    color: '#0066FF',
    glowColor: 'rgba(0, 102, 255, 0.45)',
    gradient: 'from-blue-600 to-indigo-900',
    icon: Database,
  },
  {
    id: 7,
    number: '08',
    name: 'Sivaraj A',
    role: 'SaaS Lead',
    tagline: 'Multi-Tenant SaaS Platforms, Cloud Subscriptions & Enterprise Systems',
    department: 'SaaS Platforms & Cloud',
    avatar: sivaAvatar,
    avatarClassName: 'scale-[1.10] -translate-x-[20px] -translate-y-[70px]',
    avatarStyle: {
      imageRendering: 'high-quality',
      filter: 'contrast(1.08) brightness(1.03) saturate(1.06) drop-shadow(0 10px 28px rgba(0,0,0,0.14))',
    },
    about: 'Architects modern multi-tenant SaaS applications, subscription billing pipelines, role-based access portals, and high-conversion software-as-a-service platforms.',
    philosophy: '"Scalable SaaS architectures turn complex business logic into effortless recurring revenue engines."',
    experience: '8+ Yrs SaaS & Cloud',
    stack: ['Multi-Tenant SaaS', 'Stripe Billing', 'Next.js', 'PostgreSQL', 'Auth & RBAC', 'Cloud Scale'],
    expertise: [
      'Multi-Tenant Architecture',
      'Subscription & Billing',
      'Role-Based Access (RBAC)',
      'High-Availability SaaS',
    ],
    email: 'sivaraj@example.com',
    linkedin: 'https://linkedin.com',
    color: '#0066FF',
    glowColor: 'rgba(0, 102, 255, 0.45)',
    gradient: 'from-blue-600 to-indigo-900',
    icon: Layers,
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

  const handlePillClick = (idx: number) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const scrollTop = window.scrollY + rect.top;
    const totalHeight = container.scrollHeight - window.innerHeight;
    const step = 1 / totalMembers;
    const targetFraction = idx === 0 ? 0 : idx === totalMembers - 1 ? 1 : idx * step + step * 0.5;
    window.scrollTo({
      top: scrollTop + targetFraction * totalHeight,
      behavior: 'smooth',
    });
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
      className="relative bg-[#F8FAFC] text-slate-900"
      style={{
        height: `${totalMembers * 115}vh`,
      }}
    >
      {/* Precision Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #001B48 1px, transparent 1px), linear-gradient(to bottom, #001B48 1px, transparent 1px)',
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
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full border border-blue-600/[0.05] border-dashed pointer-events-none"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full border border-cyan-500/[0.05] border-dashed pointer-events-none"
        />
      </div>

      {/* ========================================================================= */}
      {/* 🎬 100VH STICKY PINNED STORYTELLING THEATER */}
      {/* ========================================================================= */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden px-4 sm:px-8 lg:px-16 py-6 sm:py-8 z-10 select-none">
        


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
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs text-xs font-mono font-bold">
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
                        <span className="text-blue-900 font-extrabold tracking-wider">
                          {member.id === 0 ? 'EXECUTIVE' : 'ARCHITECT'} {member.number}
                        </span>
                        <span className="text-slate-400">/ 0{totalMembers}</span>
                      </div>

                      {/* Name with Luxury Typography */}
                      <h3 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.04] bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 bg-clip-text text-transparent">
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
                            <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-[36px] bg-gradient-to-b from-white/95 to-blue-50/90 border-2 border-dashed border-blue-300/60 p-8 flex flex-col items-center justify-center text-center shadow-2xl backdrop-blur-xl">
                              <div
                                className="w-24 h-24 rounded-3xl flex items-center justify-center text-white text-3xl font-black shadow-lg mb-5"
                                style={{
                                  background: `linear-gradient(135deg, ${member.color}, #001738)`,
                                  boxShadow: `0 10px 30px -5px ${member.glowColor}`,
                                }}
                              >
                                <Icon className="w-12 h-12 text-white/95 stroke-[1.75]" />
                              </div>
                              <div className="text-xl font-bold text-slate-900 mb-1">{member.name}</div>
                              <div className="text-xs font-mono font-bold text-blue-900 tracking-wider uppercase mb-3">{member.role}</div>
                              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-[10px] font-mono text-slate-600 shadow-2xs">
                                <Sparkles className="w-3 h-3 text-cyan-600 animate-spin" style={{ animationDuration: '6s' }} />
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
                        <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-blue-600">
                          {member.department}
                        </span>
                      </div>

                      {/* Member Role Title */}
                      <h4 className="text-2xl sm:text-3xl lg:text-[1.85rem] xl:text-[2.2rem] font-black text-slate-950 tracking-tight leading-none">
                        {member.role}
                      </h4>

                      {/* Clean Professional Description */}
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                        {member.about}
                      </p>

                      {/* Clean Minimalist Key Capabilities */}
                      <div className="pt-2 space-y-2 border-t border-slate-200/80">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                          CORE FOCUS AREAS
                        </span>
                        <div className="grid grid-cols-2 gap-x-3 gap-y-2">
                          {member.expertise.map((tag, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-1.5 text-xs font-semibold text-slate-800"
                            >
                              <CheckCircle2
                                className="h-4 w-4 shrink-0 mt-0.5"
                                style={{ color: member.color }}
                              />
                              <span className="leading-snug text-slate-800">{tag}</span>
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
        <div className="max-w-xl mx-auto w-full flex items-center justify-center gap-2.5 z-30 pt-3 pb-1">
          {teamMembers.map((m, idx) => (
            <DockPill
              key={m.id}
              index={idx}
              totalMembers={totalMembers}
              progress={smoothProgress}
              activeColor={m.color}
              onClick={() => handlePillClick(idx)}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

function DockPill({
  index,
  totalMembers,
  progress,
  onClick,
  activeColor,
}: {
  index: number;
  totalMembers: number;
  progress: MotionValue<number>;
  onClick: () => void;
  activeColor: string;
}) {
  const step = 1 / totalMembers;
  const start = index * step;
  const center = start + step * 0.5;
  const end = (index + 1) * step;

  const isFirst = index === 0;
  const isLast = index === totalMembers - 1;

  const inputRange = isFirst
    ? [0, step * 0.5, end]
    : isLast
    ? [start, start + step * 0.5, 1]
    : [start, center, end];

  const width = useTransform(
    progress,
    inputRange,
    isFirst ? ['44px', '44px', '22px'] : isLast ? ['22px', '44px', '44px'] : ['22px', '44px', '22px']
  );

  const backgroundColor = useTransform(
    progress,
    inputRange,
    isFirst
      ? [activeColor, activeColor, '#CBD5E1']
      : isLast
      ? ['#CBD5E1', activeColor, activeColor]
      : ['#CBD5E1', activeColor, '#CBD5E1']
  );

  const opacity = useTransform(
    progress,
    inputRange,
    isFirst ? [1, 1, 0.45] : isLast ? [0.45, 1, 1] : [0.45, 1, 0.45]
  );

  const boxShadow = useTransform(
    progress,
    inputRange,
    isFirst
      ? ['0 0 10px rgba(0, 102, 255, 0.6)', '0 0 10px rgba(0, 102, 255, 0.6)', '0 0 0px rgba(0,0,0,0)']
      : isLast
      ? ['0 0 0px rgba(0,0,0,0)', '0 0 10px rgba(0, 102, 255, 0.6)', '0 0 10px rgba(0, 102, 255, 0.6)']
      : ['0 0 0px rgba(0,0,0,0)', '0 0 10px rgba(0, 102, 255, 0.6)', '0 0 0px rgba(0,0,0,0)']
  );

  return (
    <motion.button
      type="button"
      onClick={onClick}
      style={{
        width,
        backgroundColor,
        opacity,
        boxShadow,
      }}
      whileHover={{ scale: 1.25 }}
      whileTap={{ scale: 0.9 }}
      className="h-2 rounded-full cursor-pointer transition-colors duration-150 outline-none hover:opacity-100"
      aria-label={`Jump to team member 0${index + 1}`}
    />
  );
}
