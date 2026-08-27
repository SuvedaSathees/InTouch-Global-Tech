'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Cpu,
  Layers,
  Palette,
  ShieldCheck,
  Smartphone,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  Server,
  UserCheck,
} from 'lucide-react';

export type TeamMember = {
  id: number;
  name: string;
  role: string;
  category: 'Leadership' | 'Engineering' | 'Design & Product';
  badge: string;
  avatarColor: string;
  initials: string;
  bio: string;
  skills: string[];
  experience: string;
};

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Alexander Reed',
    role: 'Lead Solutions Architect & Founder',
    category: 'Leadership',
    badge: 'Core Leadership',
    avatarColor: 'from-blue-600 to-indigo-700',
    initials: 'AR',
    bio: 'Designs end-to-end enterprise architectures, oversees major client projects, and ensures clean software delivery from Day 1.',
    skills: ['System Architecture', 'Enterprise ERP', 'Cloud Scaling'],
    experience: '9+ Years Experience',
  },
  {
    id: 2,
    name: 'Vikramaditya Sharma',
    role: 'Principal Full-Stack & ERP Lead',
    category: 'Engineering',
    badge: 'Enterprise Core',
    avatarColor: 'from-emerald-600 to-teal-700',
    initials: 'VS',
    bio: 'Engineers high-throughput ERP pipelines, multi-plant inventory databases, and real-time shopfloor tracking engines.',
    skills: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma'],
    experience: '7+ Years Experience',
  },
  {
    id: 3,
    name: 'Priya Sundaram',
    role: 'Head of UI/UX & Design Systems',
    category: 'Design & Product',
    badge: 'Design Lead',
    avatarColor: 'from-violet-600 to-purple-700',
    initials: 'PS',
    bio: 'Crafts pixel-perfect interactive web interfaces, mobile design systems, and friction-free user journeys in Figma.',
    skills: ['Figma UI/UX', 'Design Tokens', 'User Research'],
    experience: '6+ Years Experience',
  },
  {
    id: 4,
    name: 'Rohan Mehta',
    role: 'Senior Cloud & DevOps Engineer',
    category: 'Engineering',
    badge: 'Infrastructure',
    avatarColor: 'from-amber-600 to-orange-700',
    initials: 'RM',
    bio: 'Maintains zero-downtime CI/CD deployment pipelines, AWS Kubernetes clusters, and 24/7 telemetry monitoring.',
    skills: ['Docker', 'Kubernetes', 'AWS Cloud', 'OpenTelemetry'],
    experience: '6+ Years Experience',
  },
  {
    id: 5,
    name: 'Ananya Deshmukh',
    role: 'Senior Mobile & IoT Specialist',
    category: 'Engineering',
    badge: 'Mobile & IoT',
    avatarColor: 'from-sky-600 to-blue-700',
    initials: 'AD',
    bio: 'Develops reactive iOS and Android applications, real-time WebSocket bridges, and Bluetooth/OCPP charger protocols.',
    skills: ['React Native', 'WebSockets', 'Mapbox GPS', 'Firebase'],
    experience: '5+ Years Experience',
  },
  {
    id: 6,
    name: 'Rajesh Nair',
    role: 'Database & Microservices Architect',
    category: 'Engineering',
    badge: 'Data Integrity',
    avatarColor: 'from-cyan-600 to-teal-700',
    initials: 'RN',
    bio: 'Optimizes high-volume database queries, ACID financial transaction ledgers, and Redis in-memory cache clusters.',
    skills: ['PostgreSQL ACID', 'Redis Cluster', 'NestJS', 'Kafka'],
    experience: '7+ Years Experience',
  },
  {
    id: 7,
    name: 'Kavita Krishnan',
    role: 'QA Lead & Security Compliance',
    category: 'Engineering',
    badge: 'Security & QA',
    avatarColor: 'from-rose-600 to-pink-700',
    initials: 'KK',
    bio: 'Directs automated test suites, end-to-end user journey stress testing, and strict client data security protocols.',
    skills: ['Automated CI Testing', 'Security Audit', 'RBAC Validation'],
    experience: '5+ Years Experience',
  },
];

const categoryTabs = [
  'All Team',
  'Leadership',
  'Engineering',
  'Design & Product',
];

export function InteractiveTeamStudio() {
  const [activeTab, setActiveTab] = useState('All Team');

  const filteredTeam = teamMembers.filter((member) => {
    if (activeTab === 'All Team') return true;
    return member.category === activeTab;
  });

  return (
    <div className="relative bg-white text-slate-900 select-none pt-32 pb-24 sm:pb-32">
      {/* Precision Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 space-y-12 sm:space-y-16">
        
        {/* SECTION HEADER (Left-Aligned with Line Accent) */}
        <div className="max-w-4xl text-left">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-blue-600 mb-4"
          >
            <span className="w-4 h-[2px] bg-blue-600 rounded-full" />
            <span>CORE ENGINEERS & BUILDERS</span>
          </motion.div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.08]">
            Direct Access to Senior Software Builders.
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl">
            You work directly with the senior engineers, database specialists, and product designers building your system — no middlemen or non-technical account managers.
          </p>
        </div>

        {/* Dynamic Category Tab Selector */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-100 pb-2">
          {categoryTabs.map((tab) => {
            const isActive = activeTab === tab;

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTeamTabPill"
                    className="absolute inset-0 bg-blue-600 rounded-xl shadow-md shadow-blue-500/20"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            );
          })}
        </div>

        {/* Team Members Formatted as 2 Rectangular Boxes per Row */}
        <motion.div layout className="grid gap-5 grid-cols-1 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredTeam.map((member) => (
              <motion.div
                key={member.id}
                layout
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -10 }}
                transition={{ duration: 0.28 }}
                whileHover={{ y: -4 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 text-left shadow-xs hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div>
                  {/* Top Header Row */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3.5">
                      {/* Avatar Initials Badge */}
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${member.avatarColor} text-white font-black text-base shadow-sm group-hover:scale-105 transition-transform shrink-0`}>
                        {member.initials}
                      </div>

                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-950 group-hover:text-blue-600 transition-colors">
                          {member.name}
                        </h3>
                        <span className="text-xs font-medium text-blue-600 block">
                          {member.role}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200 uppercase tracking-wider">
                        {member.badge}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60">
                        {member.experience}
                      </span>
                    </div>
                  </div>

                  {/* Bio in Simple English */}
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Bottom Row: Core Skills */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md border border-slate-200/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/918667709294?text=Hello%20Intouch%20Global%20Tech,%20I%20would%20like%20to%20discuss%20a%20project%20with%20your%20technical%20team.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-slate-500 hover:text-emerald-600 transition-colors"
                  >
                    <span>Connect</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
}
