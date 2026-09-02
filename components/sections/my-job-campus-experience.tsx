'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Globe,
  MapPin,
  Building,
  UserCheck,
  CheckCircle2,
  Sparkles,
  Smartphone,
  Search,
  BookOpen,
  MessageCircle,
  Laptop,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Heart,
  Calendar,
  Layers,
  GraduationCap,
  Briefcase,
  Languages,
  List,
  Map,
  FileText,
  Bell,
  SearchCheck,
} from 'lucide-react';
import { type Project, projects } from '@/lib/site-config';

export function MyJobCampusDetailExperience({ project }: { project: Project }) {
  const currentIndex = projects.findIndex((p) => p.slug === project.slug || p.slug === 'job-campus' || p.slug === 'my-job-campus-website');
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

  // Lightbox state for zoomable photo preview
  const [lightboxImage, setLightboxImage] = useState<{ src: string; caption: string } | null>(null);

  const deliverables = [
    {
      title: 'Modern Job Portal',
      description: 'A responsive and scalable website that transformed the client\'s traditional job-posting workflow into a dedicated digital platform.',
      icon: Laptop,
      tag: 'Digital Platform',
    },
    {
      title: 'Multilingual Experience',
      description: 'The platform was developed in English, Tamil, Malayalam, Kannada and Telugu, making job information accessible to a broader audience.',
      icon: Languages,
      tag: 'Multilingual',
    },
    {
      title: 'Job Listing System',
      description: 'A structured platform for publishing and organizing job opportunities with information such as job role, company, location, employment type and category.',
      icon: List,
      tag: 'Listings',
    },
    {
      title: 'Company & Category Discovery',
      description: 'Dedicated sections allow users to explore companies and job categories, helping them find opportunities based on their interests and career requirements.',
      icon: Briefcase,
      tag: 'Discovery',
    },
    {
      title: 'Location-Based Job Search',
      description: 'Job opportunities can be explored across major cities including Bengaluru, Chennai, Pune, Hyderabad and Mumbai, making location-based discovery easier for job seekers.',
      icon: Map,
      tag: 'Local Search',
    },
    {
      title: 'Career Resources',
      description: 'The platform also brings together career guidance, resume tips, interview preparation and industry insights to support users beyond job discovery.',
      icon: FileText,
      tag: 'Resources',
    },
    {
      title: 'Search Engine Optimization',
      description: 'We optimized the website\'s structure, content and search visibility to help My Job Campus reach more users searching for jobs and career opportunities online.',
      icon: SearchCheck,
      tag: 'SEO',
    },
    {
      title: 'Job Updates & Alerts',
      description: 'The platform supports frequent job updates and provides users with ways to stay informed through job alerts, newsletters and social channels.',
      icon: Bell,
      tag: 'Alerts',
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 select-none">
      
      {/* ========================================================================= */}
      {/* 1. HERO HEADER */}
      {/* ========================================================================= */}
      <header className="pt-32 pb-14 sm:pt-40 sm:pb-18 border-b border-slate-200/80 bg-white relative overflow-hidden">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8 text-left relative z-10">
          
          {/* Top Breadcrumb & Status */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 border-b border-slate-100 pb-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 font-bold text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Projects</span>
            </Link>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200/80 text-[10px] font-mono font-bold text-blue-700">
                <Sparkles className="h-3 w-3 text-blue-600" />
                <span>CASE STUDY</span>
              </span>
              <span className="text-slate-300">•</span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                Jobs, Careers & Recruitment
              </span>
            </div>
          </div>

          {/* Project Title & Subtitle */}
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-blue-600">
                Multilingual Job & Career Discovery Platform
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-tight mt-1">
                My Job Campus
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.08 }}
              className="text-xl sm:text-2xl font-black text-blue-700 font-sans tracking-tight"
            >
              Find Opportunities. Build Careers.
            </motion.p>

            {/* Intro Narrative */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.12 }}
              className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium max-w-3xl pt-1"
            >
              My Job Campus is a job and career discovery platform that helps job seekers explore job opportunities, companies, career categories, locations and career resources through a centralized digital platform. The platform provides job updates, career guidance and access to opportunities across different industries and cities.
            </motion.p>
          </div>

          {/* Client Metadata Bento Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.16 }}
            className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50/90 via-white to-blue-50/40 p-6 sm:p-7 shadow-xs space-y-5"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block tracking-wider">
                  Client
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-900 mt-0.5 block">
                  Hirthik
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block tracking-wider">
                  Business
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-900 mt-0.5 block">
                  My Job Campus
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block tracking-wider">
                  Industry
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-900 mt-0.5 flex items-center gap-1">
                  <Briefcase className="h-3.5 w-3.5 text-blue-500 shrink-0" />
                  <span>Jobs & Recruitment</span>
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block tracking-wider">
                  Services Provided
                </span>
                <span className="text-xs sm:text-sm font-bold text-blue-700 mt-0.5 block">
                  Website Design, Development, Multilingual Development & SEO
                </span>
              </div>
            </div>

            {/* Actions Bar */}
            <div className="pt-4 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 hover:shadow-lg transition-all cursor-pointer"
                  >
                    <Globe className="h-3.5 w-3.5" />
                    <span>Visit Live Website</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold text-xs transition-all cursor-pointer shadow-2xs"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Live Production Website</span>
              </div>
            </div>
          </motion.div>

        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. HERO IMAGE SHOWCASE */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-3 sm:p-4 shadow-xl overflow-hidden group">
            
            {/* Browser chrome header mockup */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 bg-slate-50/80 rounded-t-2xl">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="px-4 py-0.5 rounded-md bg-white border border-slate-200 text-[10px] font-mono font-semibold text-slate-500">
                https://www.myjobcampus.com
              </div>
              <div className="text-[10px] font-mono text-slate-400 font-bold">
                My Job Campus
              </div>
            </div>

            {/* Showcase Image */}
            <div
              onClick={() => setLightboxImage({ src: '/images/job-campus/hero.jpg', caption: 'My Job Campus — Multilingual Job & Career Discovery Platform' })}
              className="relative aspect-video w-full overflow-hidden rounded-b-2xl cursor-pointer bg-slate-100 flex items-center justify-center"
            >
              <Image 
                src="/images/job-campus/hero.jpg" 
                alt="My Job Campus Hero Image" 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white backdrop-blur-[2px]">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 text-slate-900 text-xs font-bold shadow-lg">
                  <Maximize2 className="h-3.5 w-3.5 text-blue-600" />
                  <span>Click to Expand Full Preview</span>
                </div>
              </div>
            </div>

            <div className="pt-3 px-2 flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-slate-700">My Job Campus Hero Experience</span>
              <span className="text-[11px] font-mono">Modern Multilingual Portal Mockup</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WHAT THE CLIENT NEEDED (The Need / Goals) */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200/80">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8 text-left">
          
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block">
              Project Discovery & Background
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              What the Client Needed
            </h2>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            <p>
              Before approaching us, the client was managing and publishing job opportunities through Tally, collecting job information from multiple companies and posting the available opportunities.
            </p>
            <p className="text-slate-600">
              As the existing Tally-based process became outdated for managing and presenting the growing volume of job information, the client approached us to move the platform to a modern, scalable website.
            </p>
            <p className="text-slate-600">
              The requirement was to create a platform that could handle frequent job updates, organize opportunities clearly and make the information easily accessible to job seekers.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. OUR SOLUTION + MULTILINGUAL SHOWCASE IMAGE */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10 text-left">
          
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block">
              Strategic Approach & Execution
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Our Solution
            </h2>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            <p>
              We transformed the existing job-posting workflow into a modern multilingual web platform designed specifically for job discovery and career opportunities.
            </p>
            <p className="text-slate-600">
              The website was developed in English, Tamil, Malayalam, Kannada and Telugu, allowing the platform to reach a much wider audience across different regions.
            </p>
            <p className="text-slate-600">
              We structured the platform around job categories, companies, locations, job listings and career resources, making it easier for users to discover relevant opportunities and navigate the growing database of jobs.
            </p>
            <p className="text-slate-600">
              Alongside the website development, we also implemented SEO strategies to improve the platform&apos;s search visibility and help more job seekers discover My Job Campus through search engines.
            </p>
          </div>

          {/* Activity Image Frame (Job Listing / Multilingual) */}
          <div className="rounded-3xl border border-slate-200 bg-white p-3 sm:p-4 shadow-lg overflow-hidden group">
            <div
              onClick={() => setLightboxImage({ src: '/images/job-campus/multilingual.jpg', caption: 'Job Listing / Multilingual Website' })}
              className="relative aspect-video w-full overflow-hidden rounded-2xl cursor-pointer bg-slate-100 flex items-center justify-center"
            >
              <Image 
                src="/images/job-campus/multilingual.jpg" 
                alt="Multilingual Job Listing Interface" 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white backdrop-blur-[2px]">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 text-slate-900 text-xs font-bold shadow-lg">
                  <Maximize2 className="h-3.5 w-3.5 text-blue-600" />
                  <span>Click to Expand Interface Photo</span>
                </div>
              </div>
            </div>

            <div className="pt-3 px-2 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
              <span className="font-bold text-slate-800">
                Interface Showcase: Multilingual Job Listings
              </span>
              <span className="text-[11px] font-mono text-blue-600 font-semibold">
                Access across Regions
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. WHAT WE DELIVERED (8 Key Pillars) */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-y border-slate-200/80">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12 text-left">
          
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block">
              Engineered Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight mt-1">
              What We Delivered
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal max-w-2xl">
              Core digital pillars engineered to elevate My Job Campus&apos;s online reach and provide job seekers with a seamless discovery journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverables.map((item, idx) => {
              const IconComp = item.icon;

              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/50 p-6 shadow-xs hover:border-blue-300 hover:shadow-md transition-all space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="h-10 w-10 rounded-xl bg-blue-50 border border-blue-200/70 flex items-center justify-center text-blue-600">
                        <IconComp className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50/80 px-2.5 py-0.5 rounded-full">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-950">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. EXPERIENCE IMAGE (Job Search / Career Section) */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-6 text-left">
          
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block">
              Search & Discovery
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Connecting People with Opportunities
            </h2>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-3 sm:p-4 shadow-lg overflow-hidden group">
            <div
              onClick={() => setLightboxImage({ src: '/images/job-campus/search.jpg', caption: 'Job Search & Career Resources Section' })}
              className="relative aspect-video w-full overflow-hidden rounded-2xl cursor-pointer bg-slate-100 flex items-center justify-center"
            >
              <Image 
                src="/images/job-campus/search.jpg" 
                alt="Job Search and Career Resources" 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white backdrop-blur-[2px]">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 text-slate-900 text-xs font-bold shadow-lg">
                  <Maximize2 className="h-3.5 w-3.5 text-blue-600" />
                  <span>Click to Expand Feature Photo</span>
                </div>
              </div>
            </div>

            <div className="pt-3 px-2 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
              <span className="font-bold text-slate-800">
                Milestone Experience: Job Search & Career Section
              </span>
              <span className="text-[11px] font-mono text-blue-600 font-semibold">
                Finding the Right Fit
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. HOW OUR SOLUTION HELPED */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200/80">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8 text-left">
          
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block">
              Business & Community Impact
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              How Our Solution Helped
            </h2>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            <p>
              Moving from the previous Tally-based workflow to a dedicated website gave My Job Campus a more scalable and accessible way to manage and present job opportunities.
            </p>
            <p className="text-slate-600">
              According to the client, compared with the earlier Tally-based approach, the website generated more job postings and updates, helping the platform become more active and useful for job seekers.
            </p>
            <p className="text-slate-600">
              The multilingual experience expanded accessibility across five languages, while our SEO work helped strengthen the platform&apos;s online visibility and discoverability.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. THE OUTCOME & THE CREED */}
      {/* ========================================================================= */}
      <section className="py-20 bg-gradient-to-b from-[#0A1628] to-[#0D1F3C] text-white text-center relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/15 blur-[120px] pointer-events-none rounded-full" />

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
          
          <div className="space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 block">
              Delivered Result
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              The Outcome
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              A multilingual, scalable and SEO-focused job discovery platform that transformed My Job Campus from a traditional job-posting workflow into a modern digital career platform.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              The website now provides a structured journey for users to discover jobs, explore companies, search by category and location, access career resources and stay updated with new opportunities.
            </p>
          </div>

          {/* 4 Creeds */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-1">
              <span className="text-cyan-400 text-lg">🚀</span>
              <p className="text-xs sm:text-sm font-bold text-white leading-tight">
                From job posting to digital discovery.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-1">
              <span className="text-cyan-400 text-lg">🌐</span>
              <p className="text-xs sm:text-sm font-bold text-white leading-tight">
                Built for reach.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-1">
              <span className="text-cyan-400 text-lg">📈</span>
              <p className="text-xs sm:text-sm font-bold text-white leading-tight">
                Designed for growth.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-1">
              <span className="text-cyan-400 text-lg">🤝</span>
              <p className="text-xs sm:text-sm font-bold text-white leading-tight">
                Created to connect opportunities with people.
              </p>
            </div>
          </div>

          {/* Direct CTA */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold text-sm shadow-xl shadow-blue-500/25 hover:scale-105 transition-all cursor-pointer"
              >
                <span>Explore My Job Campus</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            )}

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm transition-all cursor-pointer"
            >
              <span>Build Your Web Presence</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. PREVIOUS / NEXT PAGER */}
      {/* ========================================================================= */}
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
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
            All Case Studies
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
      {/* 10. LIGHTBOX PREVIEW MODAL */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-slate-950/85 backdrop-blur-md cursor-zoom-out"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl space-y-3 p-3"
            >
              <div className="flex items-center justify-between px-2 pt-1 text-white">
                <span className="text-xs font-semibold text-slate-300">
                  {lightboxImage.caption}
                </span>
                <button
                  type="button"
                  onClick={() => setLightboxImage(null)}
                  className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src={lightboxImage.src}
                  alt={lightboxImage.caption}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
