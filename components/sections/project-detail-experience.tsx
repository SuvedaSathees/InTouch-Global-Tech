'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Lock,
  ChevronLeft,
  ChevronRight,
  Laptop,
  AlertCircle,
  Smartphone,
  Wrench,
  CheckCircle2,
  Globe,
  Maximize2,
  X,
} from 'lucide-react';
import { type Project, projects } from '@/lib/site-config';
import { TechBadgeIcon } from '@/components/tech-logos';
import { JuniorJunctionDetailExperience } from '@/components/sections/junior-junction-experience';
import { VchemicsDetailExperience } from '@/components/sections/vchemics-experience';
import { MyJobCampusDetailExperience } from '@/components/sections/my-job-campus-experience';
import { RpcErpDetailExperience } from '@/components/sections/rpc-erp-experience';
import { MagnertiaErpDetailExperience } from '@/components/sections/magnertia-erp-experience';
import { EvMobileDetailExperience } from '@/components/sections/ev-mobile-experience';
import { EvStationDetailExperience } from '@/components/sections/ev-station-experience';
import { PortfolioWebsiteDetailExperience } from '@/components/sections/portfolio-website-experience';

// Curated gallery frames for all 7 projects (2 photos/previews each)
const projectGalleryData: Record<string, { title: string; subtitle: string; tag: string }[]> = {
  'junior-junction-school': [
    { title: 'Campus Home & Announcement Portal', subtitle: 'Welcoming interface with real-time academic announcements', tag: 'Web Portal' },
    { title: 'Year of Celebrations & Milestone Hub', subtitle: 'Interactive timeline with grade-wise celebrations and activities', tag: 'Activity Timeline' },
  ],
  'portfolio': [
    { title: '3D WebGL Particle Canvas', subtitle: 'Fluid inertial physics and GPU-accelerated interactive particle mesh', tag: '3D Canvas' },
    { title: 'Dynamic Bento Matrix', subtitle: 'Modular layout with real-time responsive grid adaptation', tag: 'UI Architecture' },
  ],
  'job-campus': [
    { title: 'Corporate Placement Engine', subtitle: 'University hiring drives, eligibility filters & student rankings', tag: 'Placement Hub' },
    { title: 'Structured Candidate Skill Matrix', subtitle: 'Automated resume parsing and verified technical badge checks', tag: 'Recruiter View' },
  ],
  'erp-system': [
    { title: 'Multi-Plant Inventory Control', subtitle: 'Raw materials & finished goods warehouse balance tracking', tag: 'Inventory Core' },
    { title: 'Dynamic Bill of Materials (BOM)', subtitle: 'Automated production line planning & machine cycle scheduling', tag: 'Manufacturing' },
  ],
  'ev-mobile-application': [
    { title: 'Live Map & Plug Locator', subtitle: 'Real-time charging plug availability and turn-by-turn navigation', tag: 'Google Maps GPS' },
    { title: 'Live Charging Telemetry', subtitle: 'Voltage, kW draw, battery percentage and real-time charging cost', tag: 'Telemetry' },
  ],
  'ev-charging-station-website': [
    { title: 'Station Coverage Explorer', subtitle: 'Interactive public charging map, tariff lists and power ratings', tag: 'Public Portal' },
    { title: 'Fuel Savings & ROI Calculator', subtitle: 'Dynamic diesel vs electric fleet cost comparison calculator', tag: 'ROI Estimator' },
  ],
  'rtc-company-erp-system': [
    { title: 'Role-Based Access Control (RBAC)', subtitle: 'Multi-tier approval chains and department permission matrix', tag: 'Security & Auth' },
    { title: 'Asset Lifecycle & Maintenance', subtitle: 'Preventative maintenance tracker with automated work orders', tag: 'Asset Care' },
  ],
  'vchemics-website': [
    { title: 'Construction Chemical Catalog', subtitle: 'Searchable product catalog for waterproofing, concrete admixtures & repair mortars', tag: 'Product Catalog' },
    { title: 'Technical MSDS & TDS Download Hub', subtitle: 'Instant 1-click safety datasheets & technical application guides', tag: 'Technical Specs' },
  ],
};

// Map slug aliases used across site-config
projectGalleryData['junior-junction'] = projectGalleryData['junior-junction-school'];
projectGalleryData['portfolio-website'] = projectGalleryData['portfolio'];
projectGalleryData['my-job-campus-website'] = projectGalleryData['job-campus'];
projectGalleryData['magnertia-erp-system'] = projectGalleryData['erp-system'];
projectGalleryData['ev-station-website'] = projectGalleryData['ev-charging-station-website'];
projectGalleryData['rpc-erp-system'] = projectGalleryData['rtc-company-erp-system'];

// Clean, tailored key features
const projectKeyFeatures: Record<string, { title: string; description: string; icon: typeof Laptop }[]> = {
  'junior-junction-school': [
    {
      title: 'User-Friendly Design',
      description: 'An intuitive, welcoming interface designed for parents, teachers, and prospective families to navigate admissions, curriculum, and school updates effortlessly.',
      icon: Laptop,
    },
    {
      title: 'Fully Responsive Layout',
      description: 'Pixel-perfect UI engineered for fluid performance across smartphones, tablets, laptops, and desktop displays with sub-second page loads.',
      icon: Smartphone,
    },
    {
      title: 'Easy-to-Maintain Architecture',
      description: 'Modular, secure codebase allowing school administrators to update announcements, media galleries, and admission dates without touching code.',
      icon: Wrench,
    },
  ],
};

projectKeyFeatures['junior-junction'] = projectKeyFeatures['junior-junction-school'];

const defaultFeatures = [
  {
    title: 'User-Friendly Design',
    description: 'An intuitive, modern user experience engineered for effortless navigation, accessibility, and high visitor engagement.',
    icon: Laptop,
  },
  {
    title: 'Fully Responsive Layout',
    description: 'A responsive layout built to deliver consistent performance and fluid interactions on mobile, tablet, and desktop screens.',
    icon: Smartphone,
  },
  {
    title: 'Easy-to-Maintain Architecture',
    description: 'A clean, modular codebase structured for seamless updates, enterprise reliability, and 100% complete client code ownership.',
    icon: Wrench,
  },
];

export function ProjectDetailExperience({ project }: { project: Project }) {
  if (project.slug === 'junior-junction' || project.slug === 'junior-junction-school') {
    return <JuniorJunctionDetailExperience project={project} />;
  }

  if (project.slug === 'vchemics-website' || project.slug === 'vchemics') {
    return <VchemicsDetailExperience project={project} />;
  }

  if (project.slug === 'my-job-campus-website' || project.slug === 'job-campus') {
    return <MyJobCampusDetailExperience project={project} />;
  }

  if (project.slug === 'rpc-erp-system' || project.slug === 'rtc-company-erp-system') {
    return <RpcErpDetailExperience project={project} />;
  }

  if (project.slug === 'magnertia-erp-system' || project.slug === 'erp-system') {
    return <MagnertiaErpDetailExperience project={project} />;
  }

  if (project.slug === 'ev-mobile-application' || project.slug === 'ev-mobile-app') {
    return <EvMobileDetailExperience project={project} />;
  }

  if (project.slug === 'ev-station-website' || project.slug === 'ev-station') {
    return <EvStationDetailExperience project={project} />;
  }

  if (project.slug === 'portfolio-website') {
    return <PortfolioWebsiteDetailExperience project={project} />;
  }

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedPhotoIdx, setSelectedPhotoIdx] = useState(0);

  const galleryItems = projectGalleryData[project.slug] || [
    { title: `${project.name} Interface`, subtitle: 'Primary responsive layout and navigation', tag: 'Web Portal' },
    { title: 'Core Application Workflow', subtitle: 'Automated digital forms and data processing', tag: 'Application' },
  ];

  const threeKeyFeatures = projectKeyFeatures[project.slug] || defaultFeatures;
  const isConfidential = project.category.toLowerCase().includes('erp') || !project.liveUrl;

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 select-none">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Simple, Clean, Spacious) */}
      {/* ========================================================================= */}
      <header className="pt-32 pb-16 sm:pt-40 sm:pb-20 border-b border-slate-200/80 bg-white">
        <div className="mx-auto max-w-[1084px] px-4 sm:px-6 lg:px-8 space-y-6 text-left">
          
          {/* Top Breadcrumb */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 text-xs text-slate-500 pb-2">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 font-semibold text-slate-600 hover:text-blue-600 transition-colors w-fit"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Projects</span>
            </Link>

            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-400 truncate">
              {project.industry} • {project.category}
            </span>
          </div>

          {/* Project Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-tight"
          >
            {project.name}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-3xl text-justify"
          >
            {project.short}
          </motion.p>

          {/* Action Row & Tech Chips */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="pt-2 flex flex-wrap items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/20 transition-all cursor-pointer"
                >
                  <Globe className="h-3.5 w-3.5" />
                  <span>View Live Website</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-semibold text-xs border border-slate-200">
                  <Lock className="h-3.5 w-3.5 text-slate-500" />
                  <span>Confidential Enterprise Project</span>
                </div>
              )}

              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold text-xs transition-all cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            {/* Compact Tech Stack Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-slate-50 border border-slate-200/80 px-2.5 py-1 text-xs font-semibold text-slate-700"
                >
                  <TechBadgeIcon name={tech} size="sm" />
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. PROJECT OVERVIEW (Clean Narrative & Context) */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="mx-auto max-w-[1084px] px-4 sm:px-6 lg:px-8 space-y-6 text-left">
          
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
            Project Overview
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal text-justify sm:text-left">
            {project.description}
          </p>

          {/* 3 Simple Context Highlights - 2x2 Square Boxes on Mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 min-[380px]:gap-3.5 sm:gap-4 pt-4">
            <div className="aspect-square sm:aspect-auto flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3 min-[380px]:p-3.5 sm:p-5">
              <span className="text-[10px] min-[380px]:text-[11px] font-mono font-bold uppercase text-blue-600">01. What Was Built</span>
              <p className="text-[10px] min-[380px]:text-[11px] sm:text-sm text-slate-700 font-normal leading-snug sm:leading-relaxed text-justify sm:text-left line-clamp-4 sm:line-clamp-none">
                A secure, fast web application with automated digital workflows, real-time updates, and responsive layouts.
              </p>
            </div>

            <div className="aspect-square sm:aspect-auto flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3 min-[380px]:p-3.5 sm:p-5">
              <span className="text-[10px] min-[380px]:text-[11px] font-mono font-bold uppercase text-blue-600">02. Why It Was Built</span>
              <p className="text-[10px] min-[380px]:text-[11px] sm:text-sm text-slate-700 font-normal leading-snug sm:leading-relaxed text-justify sm:text-left line-clamp-4 sm:line-clamp-none">
                To replace fragmented manual processes with an all-in-one digital system accessible anywhere.
              </p>
            </div>

            <div className="col-span-2 sm:col-span-1 aspect-[2/1] sm:aspect-auto flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3 min-[380px]:p-3.5 sm:p-5">
              <span className="text-[10px] min-[380px]:text-[11px] font-mono font-bold uppercase text-blue-600">03. The Value Delivered</span>
              <p className="text-[10px] min-[380px]:text-[11px] sm:text-sm text-slate-700 font-normal leading-snug sm:leading-relaxed text-justify sm:text-left line-clamp-3 sm:line-clamp-none">
                Streamlines operations, reduces processing turnaround, and ensures 100% full client code ownership.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. 3 KEY ARCHITECTURAL FEATURES (Clean & Balanced) */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="mx-auto max-w-[1084px] px-4 sm:px-6 lg:px-8 space-y-8 text-left">
          
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Key Features
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal text-justify sm:text-left">
              Built for speed, user clarity, and easy future maintenance.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 min-[380px]:gap-3.5 sm:gap-5">
            {threeKeyFeatures.map((feat, idx) => {
              const FeatureIcon = feat.icon;

              return (
                <div
                  key={feat.title}
                  className={`aspect-square sm:aspect-auto flex flex-col justify-between p-3 min-[380px]:p-3.5 sm:p-6 rounded-2xl border border-slate-200/90 bg-white shadow-xs hover:border-blue-300 hover:shadow-md transition-all ${
                    idx === 2 ? 'col-span-2 md:col-span-1 aspect-[2/1] sm:aspect-auto' : ''
                  }`}
                >
                  <div className="space-y-2 sm:space-y-3">
                    <div className="h-7 w-7 min-[380px]:h-8 min-[380px]:w-8 sm:h-10 sm:w-10 rounded-xl bg-blue-50 border border-blue-200/70 flex items-center justify-center text-blue-600 shrink-0">
                      <FeatureIcon className="h-3.5 w-3.5 min-[380px]:h-4 min-[380px]:w-4 sm:h-5 sm:w-5" />
                    </div>

                    <h3 className="text-xs min-[380px]:text-sm sm:text-base font-bold text-slate-950 leading-tight">
                      {feat.title}
                    </h3>

                    <p className="text-[10px] min-[380px]:text-[11px] sm:text-sm text-slate-600 leading-snug sm:leading-relaxed font-normal text-justify sm:text-left line-clamp-3 sm:line-clamp-none">
                      {feat.description}
                    </p>
                  </div>

                  <div className="pt-1.5 sm:pt-2 text-[10px] sm:text-[11px] font-mono text-emerald-600 font-bold flex items-center gap-1 sm:gap-1.5 border-t border-slate-100">
                    <CheckCircle2 className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
                    <span className="truncate">Production Verified</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SCREENSHOT GALLERY (Clean Mockup Grid & Lightbox) */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="mx-auto max-w-[1084px] px-4 sm:px-6 lg:px-8 space-y-8 text-left">
          
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                Interface Gallery
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
                Click any preview frame to expand in full resolution.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setSelectedPhotoIdx(idx);
                  setLightboxOpen(true);
                }}
                className="group rounded-2xl border border-slate-200/90 bg-white p-2.5 sm:p-3.5 shadow-xs hover:border-blue-400 hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between space-y-2 sm:space-y-3"
              >
                {/* Viewport Frame */}
                <div className="relative h-24 min-[380px]:h-28 sm:h-36 w-full rounded-xl bg-gradient-to-br from-slate-900 to-[#0A2558] p-2 sm:p-3 text-white overflow-hidden flex flex-col justify-between">
                  <div className="flex items-center justify-between border-b border-white/10 pb-1 sm:pb-1.5">
                    <div className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-500/80" />
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500/80" />
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[7px] sm:text-[8px] font-mono text-cyan-300 font-bold uppercase truncate max-w-[80px] sm:max-w-none">
                      {item.tag}
                    </span>
                  </div>

                  <div className="space-y-1 sm:space-y-1.5 my-auto py-1">
                    <div className="h-1.5 sm:h-2 w-3/4 rounded bg-white/20" />
                    <div className="h-1 sm:h-1.5 w-1/2 rounded bg-cyan-400/40" />
                  </div>

                  <div className="absolute inset-0 bg-blue-600/30 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <div className="flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] sm:text-[11px] font-bold">
                      <Maximize2 className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                      <span>Inspect</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-[11px] sm:text-xs font-bold text-slate-950 group-hover:text-blue-600 transition-colors leading-tight line-clamp-1 sm:line-clamp-none">
                    {item.title}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 leading-snug mt-0.5 line-clamp-2 text-justify sm:text-left">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CHALLENGES & SOLUTIONS (Simple Side-by-Side) */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="mx-auto max-w-[1084px] px-4 sm:px-6 lg:px-8 space-y-6 text-left">
          
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
            Challenges & Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* The Challenge */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-rose-600">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <h3 className="text-sm font-bold text-slate-950 uppercase tracking-wide">The Challenge</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal text-justify">
                {project.challenge}
              </p>
            </div>

            {/* The Solution */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-blue-600">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <h3 className="text-sm font-bold text-slate-950 uppercase tracking-wide">The Solution</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal text-justify">
                {project.solution}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SIMPLE MINIMAL CTA */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 space-y-5">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Have a project in mind?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto font-normal leading-relaxed">
            Let&apos;s build a modern, high-performance digital experience tailored to your business.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-600/25 hover:scale-105 transition-all cursor-pointer"
            >
              <span>Let&apos;s Work Together →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. PREVIOUS / NEXT PAGER */}
      {/* ========================================================================= */}
      <footer className="border-t border-slate-200/80 bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-[1084px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-4 lg:gap-6">
            {/* Previous Project Card */}
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 lg:p-5 rounded-2xl border border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
            >
              <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-700 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 shrink-0 shadow-xs group-hover:-translate-x-0.5">
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div className="min-w-0 text-left">
                <span className="text-[9px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 group-hover:text-blue-600 transition-colors block mb-0.5 sm:mb-1">
                  Previous Project
                </span>
                <span className="text-xs sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate block leading-tight">
                  {prevProject.name}
                </span>
                <span className="hidden sm:block text-xs text-slate-500 truncate mt-0.5 font-medium">
                  {prevProject.category}
                </span>
              </div>
            </Link>

            {/* Center All Projects link (desktop) */}
            <Link
              href="/projects"
              className="hidden md:inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200/90 bg-white hover:bg-slate-50 hover:border-blue-300 hover:text-blue-600 text-xs font-bold text-slate-700 transition-all shadow-xs shrink-0 group"
            >
              <svg className="h-4 w-4 text-slate-400 group-hover:text-blue-600 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
              </svg>
              <span>All Projects</span>
            </Link>

            {/* Next Project Card */}
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex items-center justify-end text-right gap-3 sm:gap-4 p-3 sm:p-4 lg:p-5 rounded-2xl border border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
            >
              <div className="min-w-0 text-right">
                <span className="text-[9px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 group-hover:text-blue-600 transition-colors block mb-0.5 sm:mb-1">
                  Next Project
                </span>
                <span className="text-xs sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate block leading-tight">
                  {nextProject.name}
                </span>
                <span className="hidden sm:block text-xs text-slate-500 truncate mt-0.5 font-medium">
                  {nextProject.category}
                </span>
              </div>
              <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-700 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 shrink-0 shadow-xs group-hover:translate-x-0.5">
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
            </Link>
          </div>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* LIGHTBOX MODAL */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setLightboxOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full rounded-2xl bg-[#001738] border border-white/10 p-6 shadow-2xl text-white space-y-4"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase">
                    {galleryItems[selectedPhotoIdx].tag}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
                    {galleryItems[selectedPhotoIdx].title}
                  </h3>
                </div>

                <button
                  onClick={() => setLightboxOpen(false)}
                  className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="h-60 sm:h-72 rounded-xl bg-slate-900 border border-white/10 p-6 flex flex-col justify-between text-center">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>PRODUCTION VIEW</span>
                  <span className="text-emerald-400 font-bold">STATUS: 200 OK</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto my-auto">
                  {galleryItems[selectedPhotoIdx].subtitle}
                </p>
                <div className="text-[10px] font-mono text-slate-500">
                  {project.name} • Delivered by Global Tech
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={() =>
                    setSelectedPhotoIdx((selectedPhotoIdx - 1 + galleryItems.length) % galleryItems.length)
                  }
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-all cursor-pointer"
                >
                  <ChevronLeft className="h-3.5 w-3.5" />
                  <span>Previous</span>
                </button>

                <button
                  onClick={() =>
                    setSelectedPhotoIdx((selectedPhotoIdx + 1) % galleryItems.length)
                  }
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-all cursor-pointer"
                >
                  <span>Next</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
