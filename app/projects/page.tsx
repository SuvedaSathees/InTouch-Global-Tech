'use client';

import React, { useState, useRef, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { projects, type Project } from '@/lib/site-config';
import { TechBadgeIcon } from '@/components/tech-logos';
import {
  Building2,
  GraduationCap,
  Briefcase,
  BatteryCharging,
  Smartphone,
  Server,
  Zap,
  Code2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Search,
  Check,
  X,
  Eye,
  Layers,
  FlaskConical,
  Sparkles,
  TrendingUp,
} from 'lucide-react';

const projectVisualIcons: Record<string, React.ElementType> = {
  'junior-junction-school': GraduationCap,
  'junior-junction': GraduationCap,
  'portfolio': Sparkles,
  'portfolio-website': Sparkles,
  'job-campus': Briefcase,
  'my-job-campus-website': Briefcase,
  'erp-system': Building2,
  'magnertia-erp-system': Building2,
  'ev-mobile-application': Smartphone,
  'ev-charging-station-website': BatteryCharging,
  'ev-station-website': BatteryCharging,
  'rtc-company-erp-system': Server,
  'rpc-erp-system': Server,
  'vchemics-website': FlaskConical,
  'vchemics': FlaskConical,
};

const filterCategories = [
  'All Systems',
  'Enterprise ERPs',
  'Web Platforms',
  'Mobile & IoT',
];

// -------------------------------------------------------------
// PRO 3D INTERACTIVE PROJECT CARD (With Real Depth & Spotlight)
// -------------------------------------------------------------
function Pro3DProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const router = useRouter();
  const cardRef = useRef<HTMLDivElement>(null);
  const VisualIcon = projectVisualIcons[project.slug] || Code2;
  const primaryRes = project.results?.[0];
  const secondaryRes = project.results?.[1];

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth 3D spring tilt physics
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 350, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 350, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.95, y: 25 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-400/90 transition-all duration-300 text-left overflow-hidden select-none cursor-pointer"
      onClick={() => router.push(`/projects/${project.slug}`)}
    >
      {/* Top Accent Gradient Bar */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 opacity-90" />

      {/* Dynamic Cursor Spotlight Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(450px circle at ${(mouseX.get() + 0.5) * 100}% ${(mouseY.get() + 0.5) * 100}%, rgba(0, 102, 255, 0.07), transparent 70%)`,
        }}
      />

      {/* Card Content with 3D Depth */}
      <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between relative z-10">
        
        <div className="space-y-4">
          
          {/* Top Status & Industry Bar (Floating Layer) */}
          <div
            style={{ transform: 'translateZ(20px)' }}
            className="flex items-center justify-between gap-2.5 border-b border-slate-100 pb-3"
          >
            <span className="text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider text-blue-600 leading-tight">
              {project.industry}
            </span>

            <div className="shrink-0 whitespace-nowrap inline-flex items-center gap-1.5 pl-1.5 pr-2.5 py-0.5 rounded-full bg-emerald-50/90 border border-emerald-200/90 shadow-[0_1px_3px_rgba(16,185,129,0.08)] backdrop-blur-xs group-hover:border-emerald-300 transition-colors">
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-black text-[9.5px] tracking-tight shadow-xs">
                <ShieldCheck className="h-2.5 w-2.5 text-emerald-100 stroke-[2.5]" />
                100%
              </span>
              <span className="text-[9px] sm:text-[9.5px] font-bold uppercase tracking-wider text-emerald-800">
                CLIENT IP
              </span>
            </div>
          </div>

          {/* Title & Icon (Floating Layer) */}
          <div
            style={{ transform: 'translateZ(30px)' }}
            className="flex items-start justify-between gap-3"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 group-hover:text-blue-600 transition-colors leading-tight">
                {project.name}
              </h3>
              <span className="text-xs font-semibold text-slate-500 block mt-0.5">
                {project.category}
              </span>
            </div>

            <div className="h-11 w-11 rounded-2xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-600 shadow-2xs group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
              <VisualIcon className="h-5 w-5" />
            </div>
          </div>

          {/* Scope Narrative */}
          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed line-clamp-2 text-justify">
            {project.description || project.short}
          </p>

          {/* Prominent ROI Metric Pill (Floating Layer) */}
          <div
            style={{ transform: 'translateZ(25px)' }}
            className="p-3.5 rounded-2xl bg-gradient-to-br from-blue-50/70 via-indigo-50/40 to-cyan-50/50 border border-blue-100/90 shadow-2xs group-hover:border-blue-200 transition-colors"
          >
            {/* Context Header */}
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-blue-100/70">
              <div className="flex items-center gap-1.5">
                <TrendingUp className="h-3 w-3 text-blue-600 shrink-0" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700">
                  Measured Impact
                </span>
              </div>
              <span className="text-[9px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/80">
                Verified ROI
              </span>
            </div>

            {/* 2-Column Metrics */}
            <div className="grid grid-cols-2 gap-2.5 divide-x divide-blue-200/60">
              <div className="min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block truncate">
                  {primaryRes ? primaryRes.label : 'Audit Accuracy'}
                </span>
                <span className="text-[15px] sm:text-base md:text-[17px] font-black text-blue-700 tracking-tight block mt-0.5 whitespace-nowrap">
                  {primaryRes ? primaryRes.value : '100%'}
                </span>
              </div>

              <div className="pl-3 min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block truncate">
                  {secondaryRes ? secondaryRes.label : 'Approval Speed'}
                </span>
                <span className="text-[15px] sm:text-base md:text-[17px] font-black text-slate-900 tracking-tight block mt-0.5 whitespace-nowrap">
                  {secondaryRes ? secondaryRes.value : '5x Faster'}
                </span>
              </div>
            </div>
          </div>

          {/* Delivered Capabilities Checklist */}
          <div className="space-y-1.5 pt-1">
            {(project.keyFeatures || [
              'High-concurrency microservices with clean API contracts',
              'Real-time automated transaction ledger & audit trail',
              'Complete client source code ownership transfer',
            ])
              .slice(0, 3)
              .map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 font-semibold">
                  <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{feat}</span>
                </div>
              ))}
          </div>

        </div>

        {/* Tech Stack & Action (Floating Layer) */}
        <div
          style={{ transform: 'translateZ(20px)' }}
          className="space-y-4 pt-4 border-t border-slate-100"
        >
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-slate-100/90 hover:bg-white border border-slate-200 text-[10px] font-mono font-semibold text-slate-700 transition-colors"
              >
                <TechBadgeIcon name={tech} size="sm" />
                <span>{tech}</span>
              </span>
            ))}
          </div>

          {/* Action Button */}
          <div className="pt-1">
            <Link
              href={`/projects/${project.slug}`}
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-xs font-bold transition-all shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 group/btn cursor-pointer"
            >
              <Eye className="h-3.5 w-3.5" />
              <span>View Case Study</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

// -------------------------------------------------------------
// MAIN PAGE COMPONENT
// -------------------------------------------------------------
export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>('All Systems');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Concise, smart search query placeholders
  const placeholderQueries = useMemo(() => [
    "Search 'React', 'Node.js', or 'MongoDB'...",
    "Search 'ERP', 'Portal', or 'Mobile'...",
    "Search 'School', 'CleanTech', or 'Dining'...",
    "Search systems by name or tech stack...",
  ], []);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholderQueries.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [placeholderQueries.length]);

  // Global Cmd+K / Ctrl+K keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      if (e.key === 'Escape') {
        setSearchQuery('');
        searchInputRef.current?.blur();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const quickFilterChips = [
    { label: 'React.js', query: 'React' },
    { label: 'PostgreSQL', query: 'PostgreSQL' },
    { label: 'ERP Core', query: 'ERP' },
    { label: 'CleanTech IoT', query: 'Mobile' },
  ];

  // Filter logic
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      let matchCat = true;
      if (activeFilter === 'Enterprise ERPs') {
        matchCat = (project.category as string).includes('ERP');
      } else if (activeFilter === 'Web Platforms') {
        matchCat = (project.category as string).includes('Web') || (project.category as string) === 'Custom Software';
      } else if (activeFilter === 'Mobile & IoT') {
        matchCat = (project.category as string).includes('Mobile') || (project.category as string).includes('EV');
      }

      let matchSearch = true;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        matchSearch =
          project.name.toLowerCase().includes(q) ||
          project.industry.toLowerCase().includes(q) ||
          project.category.toLowerCase().includes(q) ||
          project.short.toLowerCase().includes(q) ||
          project.technologies.some((t) => t.toLowerCase().includes(q));
      }

      return matchCat && matchSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 pt-32 pb-24 select-none relative overflow-hidden">
      {/* Precision Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #001B48 1px, transparent 1px), linear-gradient(to bottom, #001B48 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Atmospheric Soft Light Blooms */}
      <div className="absolute top-20 right-1/4 w-[500px] h-[350px] rounded-full bg-blue-400/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-1/4 w-[500px] h-[350px] rounded-full bg-cyan-400/10 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 space-y-12 text-left">
        
        {/* Page Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-slate-200/80 pb-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
              <span className="w-5 h-[2px] bg-blue-600 rounded-full" />
              <span>PROVEN CLIENT SYSTEMS • PRODUCTION DELIVERIES</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.08]">
              Engineered Systems &{' '}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
                Blueprints.
              </span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-xl">
              Hover over any system to experience interactive 3D perspective physics. Every architecture is delivered with 100% complete client code ownership.
            </p>
          </div>

          {/* Quick Counter */}
          <div className="flex items-center gap-3 self-start lg:self-auto">
            <div className="px-4 py-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs text-left">
              <div className="text-base font-black text-slate-950 leading-tight">{projects.length}+ Live Systems</div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600">Built & Delivered</div>
            </div>
            <div className="px-4 py-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs text-left">
              <div className="text-base font-black text-emerald-600 leading-tight">99.99% Uptime</div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">Proven Reliability</div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* FUTURISTIC GLOWING SEARCH CAPSULE & CATEGORY PILLS (Single Line) */}
        {/* ------------------------------------------------------------- */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 w-full">
          
          {/* Floating Category Filter Pills (Left) */}
          <div className="grid grid-cols-2 sm:flex items-center gap-2 w-full lg:w-auto py-1">
            {filterCategories.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`relative flex items-center justify-center text-center px-3 sm:px-4 py-2.5 sm:py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer select-none ${
                    isActive
                      ? 'text-white shadow-md shadow-blue-500/20'
                      : 'bg-white/80 hover:bg-white text-slate-600 hover:text-slate-950 border border-slate-200/90 shadow-2xs hover:border-blue-300'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeGlowingCapsuleCategory"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Glowing Search Capsule (Right) */}
          <div className="relative w-full lg:w-[460px] group">
            {/* Ambient Electric Backlight Glow */}
            <div
              className={`absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 blur-md transition-all duration-500 ${
                isSearchFocused ? 'opacity-70 scale-[1.01]' : 'opacity-25 group-hover:opacity-45'
              }`}
            />

            {/* Inner Pill Container */}
            <div
              className={`relative flex items-center bg-white rounded-full p-2 pl-5 sm:pl-6 shadow-xl shadow-blue-500/5 border transition-all duration-300 ${
                isSearchFocused
                  ? 'border-blue-500 ring-2 ring-blue-500/20'
                  : 'border-slate-200/90 hover:border-slate-300'
              }`}
            >
              {/* Search Icon with Radar Pulse */}
              <div className="relative flex items-center justify-center mr-3 shrink-0">
                <Search className={`h-5 w-5 transition-colors ${isSearchFocused ? 'text-blue-600' : 'text-slate-400'}`} />
                {isSearchFocused && (
                  <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                )}
              </div>

              {/* Input with Animated Typewriter Cycling Placeholder */}
              <div className="relative flex-1 min-w-0">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={placeholderQueries[placeholderIndex]}
                  className="w-full bg-transparent text-xs sm:text-sm font-semibold text-slate-950 placeholder:text-slate-400 focus:outline-none transition-all"
                />
              </div>

              {/* Right Side Controls: Matches Badge + Clear Button */}
              <div className="flex items-center gap-2 pr-1 shrink-0">
                {/* Live Match Counter Beacon */}
                <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold border transition-colors ${
                  filteredProjects.length > 0
                    ? 'bg-blue-50/80 border-blue-200 text-blue-700'
                    : 'bg-amber-50 border-amber-200 text-amber-700'
                }`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${filteredProjects.length > 0 ? 'bg-blue-600 animate-pulse' : 'bg-amber-500'}`} />
                  <span>{filteredProjects.length} {filteredProjects.length === 1 ? 'System' : 'Systems'}</span>
                </div>

                {/* Clear Button */}
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      searchInputRef.current?.focus();
                    }}
                    className="h-6 w-6 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 flex items-center justify-center text-[11px] font-bold transition-colors cursor-pointer mr-1"
                    title="Clear search"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>

        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center space-y-4 shadow-xs">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mx-auto">
              <Search className="h-7 w-7" />
            </div>
            <h3 className="text-lg font-black text-slate-950">No matching systems found</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              We couldn&apos;t find any systems matching your search criteria. Try resetting your filters.
            </p>
            <button
              onClick={() => {
                setActiveFilter('All Systems');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* 3D PERSPECTIVE GRID (With 1000px Perspective & Multi-Layer Z Depth) */}
        {/* ------------------------------------------------------------- */}
        <div style={{ perspective: 1200 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredProjects.map((project, index) => (
            <Pro3DProjectCard
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>

      </div>

    </main>
  );
}
