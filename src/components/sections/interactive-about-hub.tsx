'use client';

import React from 'react';
import {
  ShieldCheck,
  Zap,
  Users,
  CheckCircle2,
  Lock,
} from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

const companyPillars = [
  {
    icon: Lock,
    title: 'You Own 100% of Your Code',
    subtitle: 'Zero Hidden Fees or Lock-In',
    description:
      'From Day 1, you own every single line of code, database file, and design asset. We transfer the complete source code to you with zero monthly license fees.',
    highlight: 'Full Source Code & GitHub Ownership',
  },
  {
    icon: Users,
    title: 'Direct WhatsApp & Phone Access',
    subtitle: 'No Middlemen or Delays',
    description:
      'You talk directly with senior developers building your system. Whenever you need an update or have a question, message us directly on WhatsApp.',
    highlight: 'Direct Senior Developer WhatsApp',
  },
  {
    icon: Zap,
    title: 'Clear Timelines & Fair Fixed Pricing',
    subtitle: 'No Surprise Costs',
    description:
      'We set clear goals and fixed prices before starting any work. We show you live working demos every 2 weeks so you always see steady progress.',
    highlight: 'Live 2-Week Working Demos',
  },
  {
    icon: ShieldCheck,
    title: 'Fast, Tested, and Always Reliable',
    subtitle: '99.99% Uptime Commitment',
    description:
      'We test every website and app across multiple phones and computers before launch, ensuring your system runs fast, smoothly, and never crashes.',
    highlight: 'Fully Tested & 24/7 Monitored',
  },
];

const companyMetrics = [
  { label: 'Senior Developers', value: '7+', sub: 'Direct Tech Experts' },
  { label: 'Live Projects', value: '10+', sub: 'Successfully Launched' },
  { label: 'Code Ownership', value: '100%', sub: 'Everything Belongs to You' },
  { label: 'Uptime & Speed', value: '99.99%', sub: 'Fast & Always Online' },
];

export function InteractiveAboutHub() {
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

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 space-y-16 sm:space-y-20">
        
        {/* Hero Section: Simple & Clear Identity */}
        <div className="text-left max-w-4xl">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-blue-600 mb-4">
            <span className="w-4 h-[2px] bg-blue-600 rounded-full" />
            <span>ABOUT {siteConfig.name.toUpperCase()}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.08]">
            We Build Custom Software, Websites, and Mobile Apps for Growing Businesses.
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl">
            Nexora is a software development studio. We help business owners and founders build reliable custom software, ERP systems, mobile applications, and smart automations — without confusing jargon or unnecessary delays.
          </p>
        </div>

        {/* Key Simple Numbers Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {companyMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 text-left"
            >
              <div className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                {metric.value}
              </div>
              <div className="text-xs font-bold text-slate-800 mt-1">
                {metric.label}
              </div>
              <div className="text-[11px] text-blue-600 font-semibold mt-0.5">
                {metric.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Section 1: Who We Are & Why Choose Us */}
        <div className="space-y-6">
          <div className="text-left">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-blue-600 mb-2">
              <span className="w-4 h-[2px] bg-blue-600 rounded-full" />
              <span>HOW WE WORK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Simple, Honest, and Built Exactly Around Your Needs.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-sm text-slate-600 leading-relaxed">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 space-y-3">
              <h3 className="text-base font-bold text-slate-950">
                1. Custom-Made, Not Cookie-Cutter Templates
              </h3>
              <p>
                Many agencies use pre-made templates that are slow, hard to change, and break when your business grows. We build clean, tailor-made software designed specifically for your daily business workflow so it stays fast forever.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 space-y-3">
              <h3 className="text-base font-bold text-slate-950">
                2. Direct Contact with Senior Developers
              </h3>
              <p>
                You won't have to talk to salespeople or non-technical account managers who slow down answers. You work directly with the experienced engineers writing your code, making communication fast and stress-free.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Our 4 Core Guarantees */}
        <div className="space-y-8">
          <div className="text-left">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-blue-600 mb-2">
              <span className="w-4 h-[2px] bg-blue-600 rounded-full" />
              <span>OUR PROMISES TO YOU</span>
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
                  className="rounded-3xl border border-slate-200 bg-slate-50/50 p-7 text-left flex flex-col justify-between hover:border-blue-300 hover:bg-white hover:shadow-md transition-all duration-200"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-xs">
                        <PillarIcon className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                        GUARANTEE 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-950 leading-snug">
                      {pillar.title}
                    </h3>
                    <div className="text-xs font-bold text-blue-600 mt-0.5">
                      {pillar.subtitle}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mt-3">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs font-bold text-slate-900">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
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
