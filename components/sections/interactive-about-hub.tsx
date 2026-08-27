'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  Zap,
  Users,
  CheckCircle2,
  Lock,
  Eye,
  Target,
  Sparkles,
  Award,
  Globe2,
  MapPin,
  Laptop,
  BarChart3,
  Search,
  MessageSquare,
  Building2,
  FileCode2,
} from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

const companyPillars = [
  {
    icon: Lock,
    title: '100% Client Code & IP Ownership',
    subtitle: 'Zero Hidden Fees or Vendor Lock-In',
    description:
      'From Day 1, you own every single line of code, database schema, and design asset. We transfer the complete source code to you with zero monthly license fees.',
    highlight: 'Full Source Code & GitHub Ownership',
  },
  {
    icon: Users,
    title: 'Direct WhatsApp & Phone Access',
    subtitle: 'No Middlemen or Delays',
    description:
      'You talk directly with senior developers and solution architects building your system. Fast turnarounds and real-time sprint updates.',
    highlight: 'Direct Senior Developer WhatsApp',
  },
  {
    icon: Zap,
    title: 'Transparent Milestones & Fixed Pricing',
    subtitle: 'No Surprise Costs',
    description:
      'We set clear deliverables and fair pricing before starting any work. We deliver live working sprint demos every 2 weeks so you always see steady progress.',
    highlight: 'Live 2-Week Working Demos',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Speed & Reliability',
    subtitle: '99.99% Uptime Commitment',
    description:
      'We test every website and application across devices before launch, ensuring your system runs fast, smoothly, and securely under high user traffic.',
    highlight: 'Fully Tested & 24/7 Monitored',
  },
];

const companyMetrics = [
  { label: 'Engineering Excellence', value: 'Full-Stack & Cloud', sub: 'Production Ready' },
  { label: 'Client Footprint', value: 'Global SMBs', sub: 'Worldwide Client Reach' },
  { label: 'Code Ownership', value: '100%', sub: 'Everything Belongs to You' },
  { label: 'Uptime & Speed', value: '99.99%', sub: 'Fast & Always Online' },
];

const whatWeOffer = [
  {
    title: 'Static & Dynamic Website Designing',
    desc: 'Bespoke corporate, portfolio, and multi-page dynamic sites built for lightning speed.',
    icon: Laptop,
  },
  {
    title: 'E-Commerce Website Design & Development',
    desc: 'High-converting online storefronts, payment gateways, and shopping cart architectures.',
    icon: Building2,
  },
  {
    title: 'Custom Web Applications Development',
    desc: 'Scalable cloud web applications, client portals, and bespoke management systems.',
    icon: FileCode2,
  },
  {
    title: 'Blog Design & Content Publishing',
    desc: 'SEO-optimized editorial layouts, author workflows, and content management systems.',
    icon: Globe2,
  },
  {
    title: 'Responsive Website Design & Development',
    desc: 'Pixel-perfect, fluid experiences optimized across all smartphone, tablet, and desktop screens.',
    icon: Sparkles,
  },
  {
    title: 'Website Redesigning & Modernization',
    desc: 'Transforming outdated legacy sites into high-performance, modern digital products.',
    icon: Zap,
  },
];

const whatWeProvide = [
  {
    title: 'Search Engine Optimization (SEO)',
    desc: 'Comprehensive organic search optimization driving organic first-page Google rankings and high-intent leads.',
    icon: Search,
  },
  {
    title: 'Search Engine Marketing (SEM / PPC)',
    desc: 'Targeted Google Ads and paid campaigns configured for high conversion rates and optimal ROI.',
    icon: Target,
  },
  {
    title: 'Email & WhatsApp Marketing',
    desc: 'Automated transactional SMS, WhatsApp Business API chatbots, and high-deliverability email drips.',
    icon: MessageSquare,
  },
  {
    title: 'Business Analysis & Market Research',
    desc: 'Deep process evaluation, competitor landscape research, and software specification planning.',
    icon: BarChart3,
  },
];

export function InteractiveAboutHub() {
  return (
    <div className="relative bg-[#FAF7F2] text-slate-900 select-none pt-32 pb-24 sm:pb-32">
      {/* Precision Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 space-y-16 sm:space-y-20">
        
        {/* Hero Section: Identity */}
        <div className="text-left max-w-4xl">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-amber-800 mb-4">
            <span className="w-5 h-[2px] bg-amber-700 rounded-full" />
            <span>ABOUT {siteConfig.name.toUpperCase()}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.08]">
            Leading Web Development, Software & IT Solutions.
          </h1>

          <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-3xl">
            {siteConfig.name} is a leading web development company offering complete web application services like website designing, website maintenance, website optimization, SEO, ERP/HRMS software, and custom business solutions for growing businesses and global enterprises.
          </p>
        </div>

        {/* Key Metrics Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {companyMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-[#E8DFD1] bg-white p-5 text-left hover:border-amber-400 hover:shadow-sm transition-all"
            >
              <div className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                {metric.value}
              </div>
              <div className="text-xs font-bold text-slate-800 mt-1">
                {metric.label}
              </div>
              <div className="text-[11px] text-amber-700 font-semibold mt-0.5">
                {metric.sub}
              </div>
            </div>
          ))}
        </div>

        {/* VISION, MISSION & VALUES 3-CARD LUXURY ARCHITECTURE GALLERY */}
        <div className="space-y-8 text-left">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-amber-800 mb-2">
              <span className="w-4 h-[2px] bg-amber-700 rounded-full" />
              <span>FOUNDATIONAL PILLARS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Vision, Mission & Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            
            {/* Pillar 1: Strategic Vision */}
            <div className="group relative flex flex-col justify-between rounded-3xl border border-[#E8DFD1] bg-white p-7 sm:p-8 shadow-xs hover:border-amber-400 hover:shadow-xl hover:shadow-amber-700/10 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden">
              <div className="absolute top-3 right-6 text-7xl font-serif font-black text-amber-700/5 select-none pointer-events-none group-hover:text-amber-700/10 transition-colors">
                01
              </div>

              <div className="relative z-10 space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 group-hover:bg-amber-700 group-hover:text-white transition-all shadow-xs">
                    <Eye className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-amber-50 border border-amber-200/90 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-amber-800">
                    STRATEGIC VISION
                  </span>
                </div>

                <blockquote className="text-lg sm:text-xl font-bold text-slate-950 leading-snug tracking-tight">
                  “{siteConfig.vision}”
                </blockquote>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Empowering enterprises with cutting-edge digital infrastructure, robust cloud architecture, and high-velocity web platforms that accelerate global growth.
                </p>
              </div>

              <div className="relative z-10 mt-6 pt-4 border-t border-[#E8DFD1] flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-800 bg-[#FAF7F2] border border-[#E8DFD1] px-2.5 py-1 rounded-lg">
                  <Sparkles className="h-3 w-3 text-amber-700" />
                  Global SMB Growth
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-700 bg-[#FAF7F2] border border-[#E8DFD1] px-2.5 py-1 rounded-lg">
                  100% Code Sovereignty
                </span>
              </div>
            </div>

            {/* Pillar 2: Global Mission */}
            <div className="group relative flex flex-col justify-between rounded-3xl border border-[#E8DFD1] bg-white p-7 sm:p-8 shadow-xs hover:border-amber-400 hover:shadow-xl hover:shadow-amber-700/10 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden">
              <div className="absolute top-3 right-6 text-7xl font-serif font-black text-amber-700/5 select-none pointer-events-none group-hover:text-amber-700/10 transition-colors">
                02
              </div>

              <div className="relative z-10 space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 group-hover:bg-amber-700 group-hover:text-white transition-all shadow-xs">
                    <Target className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-amber-50 border border-amber-200/90 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-amber-800">
                    GLOBAL MISSION
                  </span>
                </div>

                <blockquote className="text-lg sm:text-xl font-bold text-slate-950 leading-snug tracking-tight">
                  “{siteConfig.mission}”
                </blockquote>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Delivering innovative, reliable, and high-performing digital business solutions that streamline operations, eliminate bottlenecks, and expand reach.
                </p>
              </div>

              <div className="relative z-10 mt-6 pt-4 border-t border-[#E8DFD1] flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-800 bg-[#FAF7F2] border border-[#E8DFD1] px-2.5 py-1 rounded-lg">
                  <Sparkles className="h-3 w-3 text-amber-700" />
                  Innovative IT Solutions
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-700 bg-[#FAF7F2] border border-[#E8DFD1] px-2.5 py-1 rounded-lg">
                  2-Week Working Sprints
                </span>
              </div>
            </div>

            {/* Pillar 3: Core Values */}
            <div className="group relative flex flex-col justify-between rounded-3xl border border-[#E8DFD1] bg-white p-7 sm:p-8 shadow-xs hover:border-amber-400 hover:shadow-xl hover:shadow-amber-700/10 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden">
              <div className="absolute top-3 right-6 text-7xl font-serif font-black text-amber-700/5 select-none pointer-events-none group-hover:text-amber-700/10 transition-colors">
                03
              </div>

              <div className="relative z-10 space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 group-hover:bg-amber-700 group-hover:text-white transition-all shadow-xs">
                    <Award className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-amber-50 border border-amber-200/90 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-amber-800">
                    CORE VALUES
                  </span>
                </div>

                <blockquote className="text-lg sm:text-xl font-bold text-slate-950 leading-snug tracking-tight">
                  “{siteConfig.values}”
                </blockquote>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Committed to achieve business excellence through cost-effective, dependable solutions and rigorous quality engineering that exceeds expectations.
                </p>
              </div>

              <div className="relative z-10 mt-6 pt-4 border-t border-[#E8DFD1] flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-800 bg-[#FAF7F2] border border-[#E8DFD1] px-2.5 py-1 rounded-lg">
                  <Sparkles className="h-3 w-3 text-amber-700" />
                  Business Excellence
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-700 bg-[#FAF7F2] border border-[#E8DFD1] px-2.5 py-1 rounded-lg">
                  Fixed Milestone Pricing
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* WHAT WE DO SECTION */}
        <div className="space-y-10 text-left">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-amber-800 mb-2">
              <span className="w-4 h-[2px] bg-amber-700 rounded-full" />
              <span>COMPREHENSIVE CAPABILITIES</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
              What We Do & What We Provide
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl mt-2">
              From responsive static and dynamic website design to enterprise-grade SEO and custom software suites, we power modern digital businesses.
            </p>
          </div>

          {/* Sub-block A: We Offer */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-950 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-amber-700 rounded-full" />
              <span>We Offer:</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {whatWeOffer.map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-[#E8DFD1] bg-white p-6 hover:border-amber-400 hover:shadow-md transition-all space-y-2.5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-800 border border-amber-200">
                      <ItemIcon className="h-5 w-5" />
                    </div>
                    <h4 className="text-base font-bold text-slate-950 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sub-block B: We Provide */}
          <div className="space-y-4 pt-4">
            <h3 className="text-lg font-bold text-slate-950 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-amber-700 rounded-full" />
              <span>We Provide The Following Services:</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {whatWeProvide.map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-[#E8DFD1] bg-white p-6 hover:border-amber-500 hover:shadow-md transition-all space-y-2.5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-800 border border-amber-200">
                      <ItemIcon className="h-5 w-5" />
                    </div>
                    <h4 className="text-base font-bold text-slate-950 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Section: 4 Core Guarantees */}
        <div className="space-y-8 text-left">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-amber-800 mb-2">
              <span className="w-4 h-[2px] bg-amber-700 rounded-full" />
              <span>OUR COMMITMENT TO EXCELLENCE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              4 Guarantees We Give to Every Client.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {companyPillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;

              return (
                <div
                  key={idx}
                  className="rounded-3xl border border-[#E8DFD1] bg-white p-7 text-left flex flex-col justify-between hover:border-amber-400 hover:shadow-md transition-all duration-200"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-700 text-white shadow-xs">
                        <PillarIcon className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                        GUARANTEE 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-950 leading-snug">
                      {pillar.title}
                    </h3>
                    <div className="text-xs font-bold text-amber-700 mt-0.5">
                      {pillar.subtitle}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mt-3">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs font-bold text-slate-900">
                    <CheckCircle2 className="h-4 w-4 text-amber-700 shrink-0" />
                    <span>{pillar.highlight}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
