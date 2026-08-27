'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Clock,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Send,
  ArrowUpRight,
  Sparkles,
  Globe2,
} from 'lucide-react';
import { siteConfig, projectTypes, budgetRanges, timelineOptions } from '@/lib/site-config';
import { WhatsAppOfficialIcon } from '@/components/footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'Web Development & E-Commerce',
    budget: '₹15,000 – ₹35,000',
    timeline: '2 – 4 weeks',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-slate-900 pt-24 sm:pt-28 pb-12 select-none relative flex flex-col justify-center">
      {/* Precision Blueprint Ambient Grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 z-10 w-full space-y-6">
        
        {/* Header */}
        <div className="text-left max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">
            <span className="w-4 h-[2px] bg-amber-700 rounded-full" />
            <span>GET IN TOUCH</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 leading-tight">
            Let&apos;s Build Your Next Project.
          </h1>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-600 font-normal">
            Fill in the details below. Our engineering leads will review your requirements and respond within 24 hours.
          </p>
        </div>

        {/* 2-Column Unified Layout */}
        <div className="grid gap-6 lg:grid-cols-12 items-stretch">
          
          {/* Main Clean Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-[#E8DFD1] bg-white p-6 sm:p-8 shadow-xs text-left h-full flex flex-col justify-between">
              {submitted ? (
                <div className="py-16 text-center space-y-3 my-auto">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-950">
                    Inquiry Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. A senior solutions architect from Intouch Global Tech will review your scope and contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="text-xs font-bold text-slate-900 block mb-1">
                        Your Name <span className="text-amber-700">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-[#E8DFD1] bg-[#FAF7F2]/60 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-700 focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-900 block mb-1">
                        Email Address <span className="text-amber-700">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full rounded-xl border border-[#E8DFD1] bg-[#FAF7F2]/60 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-700 focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="text-xs font-bold text-slate-900 block mb-1">
                        Phone / WhatsApp <span className="text-amber-700">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl border border-[#E8DFD1] bg-[#FAF7F2]/60 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-700 focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-900 block mb-1">
                        Company Name <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Acme Corp"
                        className="w-full rounded-xl border border-[#E8DFD1] bg-[#FAF7F2]/60 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-700 focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service & Budget Selectors */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="text-xs font-bold text-slate-900 block mb-1">
                        Project / Service Type <span className="text-amber-700">*</span>
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full rounded-xl border border-[#E8DFD1] bg-[#FAF7F2]/60 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-amber-700 focus:bg-white focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="Web Development & E-Commerce">Web Development & E-Commerce</option>
                        <option value="Custom ERP & HRMS Software">Custom ERP & HRMS Software</option>
                        <option value="Hospital & Pharmacy Management (HMS)">Hospital & Pharmacy Management (HMS)</option>
                        <option value="CRM & Billing POS Software">CRM & Billing POS Software</option>
                        <option value="SEO, SEM & WhatsApp Gateway">SEO, SEM & WhatsApp Gateway</option>
                        <option value="Custom Software / Other">Custom Software / Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-900 block mb-1">
                        Estimated Budget <span className="text-amber-700">*</span>
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full rounded-xl border border-[#E8DFD1] bg-[#FAF7F2]/60 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-amber-700 focus:bg-white focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="₹15,000 – ₹35,000">₹15,000 – ₹35,000</option>
                        <option value="₹35,000 – ₹75,000">₹35,000 – ₹75,000</option>
                        <option value="₹75,000 – ₹1,50,000">₹75,000 – ₹1,50,000</option>
                        <option value="₹1,50,000+ / Enterprise">₹1,50,000+ / Enterprise</option>
                      </select>
                    </div>
                  </div>

                  {/* Requirements Message */}
                  <div>
                    <label className="text-xs font-bold text-slate-900 block mb-1">
                      Project Requirements <span className="text-amber-700">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you're looking to build, desired features, or key goals..."
                      className="w-full rounded-xl border border-[#E8DFD1] bg-[#FAF7F2]/60 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-700 focus:bg-white focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-md shadow-amber-700/20 hover:shadow-lg hover:shadow-amber-700/30 transition-all cursor-pointer"
                  >
                    <span>Send Project Inquiry</span>
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Unified Clean Info Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-[#E8DFD1] bg-white p-6 sm:p-8 shadow-xs text-left h-full flex flex-col justify-between space-y-6">
              
              {/* Header with Live Status */}
              <div>
                <div className="flex items-center justify-between border-b border-[#E8DFD1] pb-3 mb-4">
                  <h3 className="text-sm font-bold text-slate-950 uppercase tracking-wider font-mono">
                    Direct Contact
                  </h3>
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] font-mono font-bold text-emerald-700">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                    </span>
                    <span>ONLINE</span>
                  </div>
                </div>

                {/* Direct Action Channels */}
                <div className="space-y-2.5">
                  <a
                    href="https://wa.me/918667709294?text=Hello%20Intouch%20Global%20Tech,%20I%20would%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD1] hover:border-emerald-500 hover:bg-emerald-50/40 transition-colors group cursor-pointer"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-[#25D366] group-hover:text-white transition-colors shrink-0">
                      <WhatsAppOfficialIcon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-mono font-bold uppercase text-slate-400 block">WhatsApp Direct</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-700">
                        +91 86677 09294
                      </span>
                    </div>
                  </a>

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD1] hover:border-amber-500 hover:bg-amber-50/40 transition-colors group cursor-pointer"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-800 group-hover:bg-amber-700 group-hover:text-white transition-colors shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-mono font-bold uppercase text-slate-400 block">Email Support</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-amber-800 truncate block">
                        {siteConfig.email}
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Guarantees List */}
              <div className="border-t border-[#E8DFD1] pt-4 space-y-3">
                <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-800">
                  Engineering Commitments
                </div>

                <ul className="space-y-2 text-xs text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-700 shrink-0" />
                    <span>Response & scope review within 24 hours</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-700 shrink-0" />
                    <span>Direct WhatsApp access with lead engineers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-700 shrink-0" />
                    <span>2-week working sprint demos with zero lock-in</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-700 shrink-0" />
                    <span>100% intellectual property & source code ownership</span>
                  </li>
                </ul>
              </div>

              {/* NDA Footer */}
              <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-3 flex items-center gap-2.5 text-[11px] text-slate-700">
                <ShieldCheck className="h-4 w-4 text-amber-700 shrink-0" />
                <span>NDA Protected & 100% Confidential Guarantee</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
