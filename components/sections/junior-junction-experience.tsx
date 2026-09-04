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
} from 'lucide-react';
import { type Project, projects } from '@/lib/site-config';

export function JuniorJunctionDetailExperience({ project }: { project: Project }) {
  const currentIndex = projects.findIndex((p) => p.slug === project.slug || p.slug === 'junior-junction');
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

  // Lightbox state for zoomable photo preview
  const [lightboxImage, setLightboxImage] = useState<{ src: string; caption: string } | null>(null);

  const programs = [
    { name: 'Toddler', age: '1.5 – 2.5 Years', desc: 'Sensory discovery, motor skills, and joyful social introduction.' },
    { name: 'Play Group', age: '2 – 3 Years', desc: 'Creative messy play, language development, and interactive curiosity.' },
    { name: 'Pre-KG', age: '3 – 4 Years', desc: 'Early phonics, foundation numbers, expressive art, and peer play.' },
    { name: 'LKG', age: '4 – 5 Years', desc: 'Structured literacy, cognitive concepts, and interactive learning routines.' },
    { name: 'UKG', age: '5 – 6 Years', desc: 'School readiness, confident communication, teamwork, and early STEM.' },
  ];

  const deliverables = [
    {
      title: 'Modern Website Design',
      description: 'A responsive and professional website that represents Junior Junction’s identity across desktop, tablet and mobile devices.',
      icon: Laptop,
      tag: 'Responsive UI',
    },
    {
      title: 'Program Showcase',
      description: 'Clear presentation of the preschool’s programs, including Toddler, Play Group, Pre-KG, LKG and UKG.',
      icon: BookOpen,
      tag: 'Curriculum Hub',
    },
    {
      title: 'Visual Storytelling',
      description: 'Authentic images of activities, celebrations and children’s experiences showcase the school’s vibrant learning environment.',
      icon: Heart,
      tag: 'Activity Media',
    },
    {
      title: 'Parent-Focused Experience',
      description: 'Simple navigation and structured information help parents quickly find the details they need.',
      icon: UserCheck,
      tag: 'Intuitive UX',
    },
    {
      title: 'Search Engine Optimization',
      description: 'We optimized the website’s structure, content and search visibility to help Junior Junction reach parents actively searching for preschool education in Erode.',
      icon: Search,
      tag: 'Local Erode SEO',
    },
    {
      title: 'Enquiry Journey',
      description: 'Clear calls-to-action and contact pathways make it easier for interested parents to connect with the school.',
      icon: MessageCircle,
      tag: 'Admission Funnel',
    },
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

        <div className="mx-auto max-w-[1084px] px-4 sm:px-6 lg:px-8 space-y-8 text-left relative z-10">
          
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
                Education & Early Learning
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
                Digital Preschool Experience
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-tight mt-1">
                Junior Junction
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.08 }}
              className="text-xl sm:text-2xl font-black text-blue-700 font-sans tracking-tight"
            >
              Where Little Minds Learn, Play & Grow
            </motion.p>

            {/* Intro Narrative */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.12 }}
              className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium max-w-3xl pt-1"
            >
              Junior Junction is a joyful preschool focused on nurturing creativity, confidence and happy learning. We created a modern digital presence that reflects the school&apos;s environment while helping parents discover its programs, activities and learning experience.
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
                  Mr. Raghupathi Arumugam
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block tracking-wider">
                  Business
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-900 mt-0.5 block">
                  Junior Junction
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block tracking-wider">
                  Location
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-900 mt-0.5 flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-rose-500 shrink-0" />
                  <span>Erode, Tamil Nadu</span>
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block tracking-wider">
                  Services Provided
                </span>
                <span className="text-xs sm:text-sm font-bold text-blue-700 mt-0.5 block">
                  Website Design, Development & SEO
                </span>
              </div>
            </div>

            {/* Actions Bar */}
            <div className="pt-4 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 hover:shadow-lg transition-all cursor-pointer"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>

                <Link
                  href="/projects"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold text-xs transition-all cursor-pointer shadow-2xs"
                >
                  <ArrowLeft className="h-3.5 w-3.5 text-slate-500" />
                  <span>Back to Projects</span>
                </Link>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>Verified Client Case Study</span>
              </div>
            </div>
          </motion.div>

        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. HERO IMAGE SHOWCASE */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC]">
        <div className="mx-auto max-w-[1084px] px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-3 sm:p-4 shadow-xl overflow-hidden group">
            
            {/* Browser chrome header mockup */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 bg-slate-50/80 rounded-t-2xl">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="px-4 py-0.5 rounded-md bg-white border border-slate-200 text-[10px] font-mono font-semibold text-slate-500">
                junior-junction / digital-preschool-experience
              </div>
              <div className="text-[10px] font-mono text-slate-400 font-bold">
                Junior Junction
              </div>
            </div>

            {/* Showcase Image */}
            <div
              onClick={() => setLightboxImage({ src: '/images/junior-junction/hero.jpg', caption: 'Junior Junction — Modern Digital Preschool Experience' })}
              className="relative aspect-video w-full overflow-hidden rounded-b-2xl cursor-pointer mt-2"
            >
              <Image
                src="/images/junior-junction/hero.jpg"
                alt="Junior Junction Digital Preschool Experience"
                fill
                priority
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white backdrop-blur-[2px]">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 text-slate-900 text-xs font-bold shadow-lg">
                  <Maximize2 className="h-3.5 w-3.5 text-blue-600" />
                  <span>Click to Expand Full Preview</span>
                </div>
              </div>
            </div>

            <div className="pt-3 px-2 flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-slate-700">Junior Junction Hero Experience</span>
              <span className="text-[11px] font-mono">Modern Classroom & Parent Portal Mockup</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WHAT THE CLIENT NEEDED (The Need / Goals) */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200/80">
        <div className="mx-auto max-w-[1084px] px-4 sm:px-6 lg:px-8 space-y-8 text-left">
          
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
              Mr. Raghupathi Arumugam approached us with the need for a professional website for Junior Junction that could effectively represent the preschool online and help parents easily discover the school.
            </p>
            <p className="text-slate-600">
              The goal was to create a website that was visually engaging, informative, mobile-friendly and optimized for search engines, giving Junior Junction a stronger presence in the digital space.
            </p>
          </div>

          {/* 4 Core Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-5 space-y-2">
              <div className="h-9 w-9 rounded-xl bg-blue-100/70 text-blue-600 flex items-center justify-center font-bold">
                <Sparkles className="h-4 w-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-950">Visually Engaging</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Vibrant, welcoming preschool brand aesthetic reflecting happy learning.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-5 space-y-2">
              <div className="h-9 w-9 rounded-xl bg-cyan-100/70 text-cyan-700 flex items-center justify-center font-bold">
                <BookOpen className="h-4 w-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-950">Informative</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Transparent curriculum, daily activities, and age-wise program details.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-5 space-y-2">
              <div className="h-9 w-9 rounded-xl bg-indigo-100/70 text-indigo-700 flex items-center justify-center font-bold">
                <Smartphone className="h-4 w-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-950">Mobile-Friendly</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Sub-second page speeds engineered for busy parents on smartphones.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-5 space-y-2">
              <div className="h-9 w-9 rounded-xl bg-emerald-100/70 text-emerald-700 flex items-center justify-center font-bold">
                <Search className="h-4 w-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-950">Search Optimized</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                High discoverability for parents searching for preschools in Erode.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. OUR SOLUTION + ACTIVITY SHOWCASE IMAGE */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-[1084px] px-4 sm:px-6 lg:px-8 space-y-10 text-left">
          
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
              We designed and developed a modern, parent-focused website that combines engaging visuals, clear information and intuitive navigation.
            </p>
            <p className="text-slate-600">
              Alongside the website development, we implemented SEO strategies to improve the website&apos;s online visibility and help Junior Junction reach parents searching for preschool and early-learning options in Erode.
            </p>
          </div>

          {/* Activity Image Frame (Messy Play / Creative Play) */}
          <div className="rounded-3xl border border-slate-200 bg-white p-3 sm:p-4 shadow-lg overflow-hidden group">
            <div
              onClick={() => setLightboxImage({ src: '/images/junior-junction/messy-play.jpg', caption: 'Creative Play & Sensory Learning — Junior Junction Preschool Activities' })}
              className="relative aspect-video w-full overflow-hidden rounded-2xl cursor-pointer"
            >
              <Image
                src="/images/junior-junction/messy-play.jpg"
                alt="Junior Junction Messy Play and Creative Play Activities"
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white backdrop-blur-[2px]">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 text-slate-900 text-xs font-bold shadow-lg">
                  <Maximize2 className="h-3.5 w-3.5 text-blue-600" />
                  <span>Click to Expand Activity Photo</span>
                </div>
              </div>
            </div>

            <div className="pt-3 px-2 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
              <span className="font-bold text-slate-800">
                Activity Showcase: Creative Messy Play & Sensory Development
              </span>
              <span className="text-[11px] font-mono text-blue-600 font-semibold">
                Authentic Classroom Moments
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. WHAT WE DELIVERED (6 Key Pillars) */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-y border-slate-200/80">
        <div className="mx-auto max-w-[1084px] px-4 sm:px-6 lg:px-8 space-y-12 text-left">
          
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block">
              Engineered Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight mt-1">
              What We Delivered
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal max-w-2xl">
              Six core digital pillars engineered to elevate Junior Junction&apos;s online reach and provide parents with a seamless discovery journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2 text-[11px] font-mono text-emerald-600 font-bold flex items-center gap-1.5 border-t border-slate-100">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Delivered in Production</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Program Showcase Highlights */}
          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50/60 via-cyan-50/30 to-white p-6 sm:p-8 space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase font-bold text-blue-600 tracking-wider">
                Curriculum Structure
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-950">
                Preschool Programs Showcase
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-normal">
                Structured developmental stages prominently featured on the website for prospective parents:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
              {programs.map((prog, pIdx) => (
                <div
                  key={pIdx}
                  className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs space-y-1.5 hover:border-blue-400 transition-colors"
                >
                  <span className="text-[10px] font-mono font-bold text-blue-600 block uppercase">
                    Stage {pIdx + 1}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900">{prog.name}</h4>
                  <span className="text-[11px] font-bold text-cyan-700 block">{prog.age}</span>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium pt-1">
                    {prog.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>



      {/* ========================================================================= */}
      {/* 7. HOW OUR SOLUTION HELPED */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200/80">
        <div className="mx-auto max-w-[1084px] px-4 sm:px-6 lg:px-8 space-y-8 text-left">
          
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
              The new website gave Junior Junction a stronger and more professional online presence, making it easier for parents to understand the school&apos;s programs, explore its learning environment and get in touch.
            </p>
            <p className="text-slate-600">
              Through SEO optimization and improved website structure, we helped strengthen the school&apos;s discoverability in search engines, connecting Junior Junction with parents actively looking for preschool education in Erode.
            </p>
          </div>

          {/* 3 Impact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 space-y-2">
              <span className="text-2xl font-black text-blue-600 font-mono">Rank #1</span>
              <h3 className="text-sm font-bold text-slate-900">Search Discoverability</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                High search engine visibility for parents searching for preschools and early learning in Erode.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 space-y-2">
              <span className="text-2xl font-black text-blue-600 font-mono">3x Faster</span>
              <h3 className="text-sm font-bold text-slate-900">Enquiry Turnaround</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Direct phone and WhatsApp inquiry triggers reducing parent onboarding friction.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 space-y-2">
              <span className="text-2xl font-black text-blue-600 font-mono">100%</span>
              <h3 className="text-sm font-bold text-slate-900">Parent Confidence</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Transparent activity showcases and authentic classroom photos building immediate trust.
              </p>
            </div>
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
              A professional, engaging and search-optimized digital experience that represents Junior Junction&apos;s vision, showcases its learning environment and creates a clear digital journey for prospective parents.
            </p>
          </div>

          {/* 4 Creeds */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-1">
              <span className="text-cyan-400 text-lg">🎯</span>
              <p className="text-xs sm:text-sm font-bold text-white leading-tight">
                Designed to connect.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-1">
              <span className="text-cyan-400 text-lg">⚡</span>
              <p className="text-xs sm:text-sm font-bold text-white leading-tight">
                Built to engage.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-1">
              <span className="text-cyan-400 text-lg">🔍</span>
              <p className="text-xs sm:text-sm font-bold text-white leading-tight">
                Optimized to be discovered.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-1">
              <span className="text-cyan-400 text-lg">🌱</span>
              <p className="text-xs sm:text-sm font-bold text-white leading-tight">
                Created for growing minds.
              </p>
            </div>
          </div>

          {/* Direct CTA */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold text-sm shadow-xl shadow-blue-500/25 hover:scale-105 transition-all cursor-pointer"
            >
              <span>Build Your Web Presence</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm transition-all cursor-pointer"
            >
              <span>Explore All Projects</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. PREVIOUS / NEXT PAGER */}
      {/* ========================================================================= */}
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-[1084px] px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
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

              <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
                <Image
                  src={lightboxImage.src}
                  alt={lightboxImage.caption}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
