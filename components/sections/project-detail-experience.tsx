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

// Curated gallery frames for all 7 projects
const projectGalleryData: Record<string, { title: string; subtitle: string; tag: string }[]> = {
  'junior-junction-school': [
    { title: 'Campus Home & Announcement Portal', subtitle: 'Welcoming interface with real-time academic announcements', tag: 'Web Portal' },
    { title: 'Digital Admissions Funnel', subtitle: 'Online admission intake with instant fee calculation and upload', tag: 'Admissions' },
    { title: 'Interactive Curriculum Explorer', subtitle: 'Grade-wise developmental activities and classroom showcases', tag: 'Curriculum' },
    { title: 'School Event & Photo Showcase', subtitle: 'High-speed media galleries with mobile-responsive views', tag: 'Media Gallery' },
  ],
  'portfolio': [
    { title: '3D WebGL Particle Canvas', subtitle: 'Fluid inertial physics and GPU-accelerated interactive particle mesh', tag: '3D Canvas' },
    { title: 'Interactive Case Study Theater', subtitle: 'Architecture breakdowns with staggered animations', tag: 'Case Studies' },
    { title: 'Dynamic Bento Matrix', subtitle: 'Modular layout with real-time responsive grid adaptation', tag: 'UI Architecture' },
    { title: 'Direct Contact Gateway', subtitle: 'Instant proposal dispatch console with automated lead routing', tag: 'Lead Funnel' },
  ],
  'job-campus': [
    { title: 'Corporate Placement Engine', subtitle: 'University hiring drives, eligibility filters & student rankings', tag: 'Placement Hub' },
    { title: 'Structured Candidate Skill Matrix', subtitle: 'Automated resume parsing and verified technical badge checks', tag: 'Recruiter View' },
    { title: 'Live Interview Calendar Slotting', subtitle: 'Multi-stage interview scheduling with automatic collision alerts', tag: 'Scheduler' },
    { title: 'Placement Officer Telemetry', subtitle: 'Real-time university batch statistics and company offer tracking', tag: 'Analytics' },
  ],
  'erp-system': [
    { title: 'Multi-Plant Inventory Control', subtitle: 'Raw materials & finished goods warehouse balance tracking', tag: 'Inventory Core' },
    { title: 'Dynamic Bill of Materials (BOM)', subtitle: 'Automated production line planning & machine cycle scheduling', tag: 'Manufacturing' },
    { title: 'GST Billing & Ledger Accounting', subtitle: 'Automated ledger reconciliation, tax invoicing & dispatch logistics', tag: 'Finance' },
    { title: 'Shopfloor Barcode Batch Scanner', subtitle: 'Tablet-optimized production batch telemetry and operator logs', tag: 'Shopfloor' },
  ],
  'ev-mobile-application': [
    { title: 'Live Map & Plug Locator', subtitle: 'Real-time charging plug availability and turn-by-turn navigation', tag: 'Google Maps GPS' },
    { title: 'Instant QR Charger Unlock', subtitle: 'OCPP 1.6/2.0 IoT bridge & WebSocket bi-directional command link', tag: 'IoT Protocol' },
    { title: 'Live Charging Telemetry', subtitle: 'Voltage, kW draw, battery percentage and real-time charging cost', tag: 'Telemetry' },
    { title: 'Firebase Cloud Messaging & Wallet', subtitle: 'Push alerts upon completion, UPI payments and auto GST receipts', tag: 'Fintech & FCM' },
  ],
  'ev-charging-station-website': [
    { title: 'Station Coverage Explorer', subtitle: 'Interactive public charging map, tariff lists and power ratings', tag: 'Public Portal' },
    { title: 'Fuel Savings & ROI Calculator', subtitle: 'Dynamic diesel vs electric fleet cost comparison calculator', tag: 'ROI Estimator' },
    { title: 'Host Property Partner Funnel', subtitle: 'Commercial property owner onboarding and station feasibility intake', tag: 'Partner Hub' },
    { title: 'Enterprise Fleet Portal', subtitle: 'Corporate fleet charge cards, monthly billing and driver management', tag: 'Fleet Console' },
  ],
  'rtc-company-erp-system': [
    { title: 'Role-Based Access Control (RBAC)', subtitle: 'Multi-tier approval chains and department permission matrix', tag: 'Security & Auth' },
    { title: 'Asset Lifecycle & Maintenance', subtitle: 'Preventative maintenance tracker with automated work orders', tag: 'Asset Care' },
    { title: 'Multi-Branch Ledger Tracking', subtitle: 'Consolidated financial budgeting and inter-branch expense audits', tag: 'Accounting' },
    { title: 'Executive Board Telemetry', subtitle: 'Real-time operations metrics with automated PDF/Excel exports', tag: 'Executive Reports' },
  ],
  'vchemics-website': [
    { title: 'Construction Chemical Catalog', subtitle: 'Searchable product catalog for waterproofing, concrete admixtures & repair mortars', tag: 'Product Catalog' },
    { title: 'Technical MSDS & TDS Download Hub', subtitle: 'Instant 1-click safety datasheets & technical application guides', tag: 'Technical Specs' },
    { title: 'Contractor Quote & WhatsApp Funnel', subtitle: 'Fast commercial RFQ inquiry dispatch with instant contractor pricing', tag: 'Inquiry Pipeline' },
    { title: 'Tamil Nadu Regional Distribution Portal', subtitle: 'Mobile-first distributor portal connecting builders and structural engineers', tag: 'Distribution Hub' },
  ],
  'royal-suvai-restaurant-website': [
    { title: 'Interactive Gourmet Menu & Dietary Filters', subtitle: 'Appetizing recipe showcase with spice level, vegan & chef signature highlights', tag: 'Digital Menu' },
    { title: 'Real-Time Table Reservation Engine', subtitle: 'Instant dinner seating slot booking with guest count and seating preferences', tag: 'Table Booking' },
    { title: 'Direct WhatsApp Food Ordering', subtitle: 'Zero-commission direct takeout & delivery checkout with instant kitchen dispatch', tag: 'Direct Takeout' },
    { title: 'Banquet & Event Catering Estimator', subtitle: 'Dynamic guest count calculator for weddings, corporate parties & celebrations', tag: 'Catering Hub' },
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
    description: 'A clean, modular codebase structured for seamless updates, enterprise reliability, and 100% sovereign client code ownership.',
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

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedPhotoIdx, setSelectedPhotoIdx] = useState(0);

  const galleryItems = projectGalleryData[project.slug] || [
    { title: `${project.name} Interface`, subtitle: 'Primary responsive layout and navigation', tag: 'Web Portal' },
    { title: 'Core Application Workflow', subtitle: 'Automated digital forms and data processing', tag: 'Application' },
    { title: 'Interactive Media Gallery', subtitle: 'Mobile-optimized galleries and event updates', tag: 'Media' },
  ];

  const threeKeyFeatures = projectKeyFeatures[project.slug] || defaultFeatures;
  const isConfidential = project.category.toLowerCase().includes('erp') || !project.liveUrl;

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 select-none">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Simple, Clean, Spacious) */}
      {/* ========================================================================= */}
      <header className="pt-32 pb-16 sm:pt-40 sm:pb-20 border-b border-slate-200/80 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6 text-left">
          
          {/* Top Breadcrumb */}
          <div className="flex items-center justify-between text-xs text-slate-500 pb-2">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 font-semibold text-slate-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Projects</span>
            </Link>

            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
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
            className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-3xl"
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
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6 text-left">
          
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
            Project Overview
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {project.description}
          </p>

          {/* 3 Simple Context Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-5 space-y-1.5">
              <span className="text-[11px] font-mono font-bold uppercase text-blue-600">01. What Was Built</span>
              <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                A secure, fast web application with automated digital workflows, real-time updates, and responsive layouts.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-5 space-y-1.5">
              <span className="text-[11px] font-mono font-bold uppercase text-blue-600">02. Why It Was Built</span>
              <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                To replace fragmented manual processes with an all-in-one digital system accessible anywhere.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-5 space-y-1.5">
              <span className="text-[11px] font-mono font-bold uppercase text-blue-600">03. The Value Delivered</span>
              <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                Streamlines operations, reduces processing turnaround, and ensures 100% sovereign client code ownership.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. 3 KEY ARCHITECTURAL FEATURES (Clean & Balanced) */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8 text-left">
          
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Key Features
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
              Built for speed, user clarity, and easy future maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {threeKeyFeatures.map((feat, idx) => {
              const FeatureIcon = feat.icon;

              return (
                <div
                  key={feat.title}
                  className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs hover:border-blue-300 hover:shadow-md transition-all space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="h-10 w-10 rounded-xl bg-blue-50 border border-blue-200/70 flex items-center justify-center text-blue-600">
                      <FeatureIcon className="h-5 w-5" />
                    </div>

                    <h3 className="text-base font-bold text-slate-950">
                      {feat.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {feat.description}
                    </p>
                  </div>

                  <div className="pt-2 text-[11px] font-mono text-emerald-600 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Production Verified</span>
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
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8 text-left">
          
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setSelectedPhotoIdx(idx);
                  setLightboxOpen(true);
                }}
                className="group rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-xs hover:border-blue-400 hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between space-y-3"
              >
                {/* Viewport Frame */}
                <div className="relative h-36 w-full rounded-xl bg-gradient-to-br from-slate-900 to-[#0A2558] p-3 text-white overflow-hidden flex flex-col justify-between">
                  <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                    <div className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-500/80" />
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500/80" />
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[8px] font-mono text-cyan-300 font-bold uppercase">
                      {item.tag}
                    </span>
                  </div>

                  <div className="space-y-1.5 my-auto py-1">
                    <div className="h-2 w-3/4 rounded bg-white/20" />
                    <div className="h-1.5 w-1/2 rounded bg-cyan-400/40" />
                  </div>

                  <div className="absolute inset-0 bg-blue-600/30 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-bold">
                      <Maximize2 className="h-3 w-3" />
                      <span>Inspect</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-950 group-hover:text-blue-600 transition-colors truncate">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-snug truncate mt-0.5">
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
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6 text-left">
          
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
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {project.challenge}
              </p>
            </div>

            {/* The Solution */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-blue-600">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <h3 className="text-sm font-bold text-slate-950 uppercase tracking-wide">The Solution</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
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
      <footer className="border-t border-slate-200 bg-slate-50/50 py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <Link
            href={`/projects/${prevProject.slug}`}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Previous: {prevProject.name}</span>
          </Link>

          <Link
            href="/projects"
            className="text-xs font-semibold text-slate-400 hover:text-slate-700 transition-colors hidden sm:inline"
          >
            All Projects
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors"
          >
            <span>Next: {nextProject.name}</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
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
