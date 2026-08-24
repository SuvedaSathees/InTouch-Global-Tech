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
} from 'lucide-react';
import { siteConfig, projectTypes, budgetRanges, timelineOptions } from '@/lib/site-config';
import { WhatsAppOfficialIcon } from '@/components/footer';

export default function ContactPage() {
  const [selectedType, setSelectedType] = useState('ERP');
  const [selectedBudget, setSelectedBudget] = useState('₹5,000 – ₹15,000');
  const [selectedTimeline, setSelectedTimeline] = useState('1 – 3 months');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 pt-32 pb-24 select-none relative overflow-hidden">
      {/* Precision Blueprint Ambient Grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 space-y-12 sm:space-y-16">
        
        {/* Left-Aligned Header with Line Accent */}
        <div className="max-w-4xl text-left">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-blue-600 mb-4"
          >
            <span className="w-4 h-[2px] bg-blue-600 rounded-full" />
            <span>START A PROJECT</span>
          </motion.div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.08]">
            Let&apos;s Build Something Meaningful Together.
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl">
            Tell us about your business, the challenge you&apos;re facing, and what you need built. We&apos;ll review your requirements and get back to you within 24 hours.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 items-start">
          
          {/* Form Column (8 cols) */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 shadow-xs text-left">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-950">
                    Thank you for reaching out!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    We have received your project details. A lead engineer will review your requirements and respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Project Type */}
                  <div>
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 block mb-3">
                      Project Type
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setSelectedType(type)}
                          className={`rounded-xl px-3 py-2.5 text-xs font-bold text-center transition-all cursor-pointer truncate ${
                            selectedType === type
                              ? 'bg-blue-600 text-white shadow-xs'
                              : 'bg-slate-100/90 text-slate-700 hover:bg-slate-200 border border-slate-200/60'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Range */}
                  <div>
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 block mb-3">
                      Estimated Budget (INR)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                      {budgetRanges.map((budget) => (
                        <button
                          key={budget}
                          type="button"
                          onClick={() => setSelectedBudget(budget)}
                          className={`rounded-xl px-3 py-2.5 text-xs font-bold text-center transition-all cursor-pointer truncate ${
                            selectedBudget === budget
                              ? 'bg-blue-600 text-white shadow-xs'
                              : 'bg-slate-100/90 text-slate-700 hover:bg-slate-200 border border-slate-200/60'
                          }`}
                        >
                          {budget}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 block mb-3">
                      Target Timeline
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
                      {timelineOptions.map((timeline) => (
                        <button
                          key={timeline}
                          type="button"
                          onClick={() => setSelectedTimeline(timeline)}
                          className={`rounded-xl px-3 py-2.5 text-xs font-bold text-center transition-all cursor-pointer truncate ${
                            selectedTimeline === timeline
                              ? 'bg-blue-600 text-white shadow-xs'
                              : 'bg-slate-100/90 text-slate-700 hover:bg-slate-200 border border-slate-200/60'
                          }`}
                        >
                          {timeline}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Personal Info */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your Company (Optional)"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                      Tell Us About Your Project *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your business, what you're trying to achieve, any specific features you need, or problems you're looking to solve..."
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl text-sm shadow-md shadow-blue-500/25 transition-all cursor-pointer"
                  >
                    <span>Send Project Inquiry</span>
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Animative Sidebar Column (4 cols) */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="group relative rounded-3xl border border-slate-200/90 bg-gradient-to-b from-white via-sky-50/30 to-slate-50/70 p-7 sm:p-8 space-y-6 shadow-md shadow-sky-500/5 hover:border-blue-300 transition-all duration-300"
            >
              {/* Header with Live Pulsing Beacon */}
              <div className="flex items-center justify-between gap-2 border-b border-slate-200/80 pb-4">
                <h3 className="text-lg font-bold text-slate-950">Contact Information</h3>
                <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[10px] font-mono font-bold text-emerald-700">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Animated Interactive Contact Cards */}
              <div className="space-y-3">
                {/* Email Card */}
                <motion.a
                  href={`mailto:${siteConfig.email}`}
                  whileHover={{ x: 4, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="flex items-start gap-3.5 p-3 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-400 hover:shadow-md hover:shadow-blue-500/10 transition-all group/item cursor-pointer"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase text-slate-400">Email</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-slate-300 group-hover/item:text-blue-600 transition-colors" />
                    </div>
                    <span className="block text-xs sm:text-sm font-bold text-slate-900 truncate group-hover/item:text-blue-600 transition-colors">
                      {siteConfig.email}
                    </span>
                  </div>
                </motion.a>

                {/* WhatsApp & Phone Card */}
                <motion.a
                  href="https://wa.me/918667709294?text=Hello%20Nexora,%20I%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="flex items-start gap-3.5 p-3 rounded-2xl bg-white border border-slate-200/80 hover:border-emerald-400 hover:shadow-md hover:shadow-emerald-500/10 transition-all group/item cursor-pointer"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 group-hover/item:bg-[#25D366] group-hover/item:text-white transition-all shrink-0">
                    <WhatsAppOfficialIcon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase text-slate-400">Phone & WhatsApp</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-slate-300 group-hover/item:text-emerald-600 transition-colors" />
                    </div>
                    <span className="block text-xs sm:text-sm font-bold text-slate-900 group-hover/item:text-emerald-700 transition-colors">
                      +91 86677 09294
                    </span>
                  </div>
                </motion.a>

                {/* Response Time Card */}
                <motion.div
                  whileHover={{ x: 4, scale: 1.01 }}
                  className="flex items-start gap-3.5 p-3 rounded-2xl bg-white border border-slate-200/80 transition-all group/item"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600 shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-slate-400">Response Time</span>
                    <span className="block text-xs sm:text-sm font-bold text-slate-900">Within 24 hours</span>
                  </div>
                </motion.div>

                {/* Location Card */}
                <motion.div
                  whileHover={{ x: 4, scale: 1.01 }}
                  className="flex items-start gap-3.5 p-3 rounded-2xl bg-white border border-slate-200/80 transition-all group/item"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600 shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-slate-400">Location</span>
                    <span className="block text-xs sm:text-sm font-bold text-slate-900">Tamil Nadu, India • Worldwide Remote</span>
                  </div>
                </motion.div>
              </div>

              {/* Animated What Happens Next Stepper */}
              <div className="border-t border-slate-200/80 pt-5 space-y-3.5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-slate-900">
                  <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                  <span>What Happens Next?</span>
                </div>

                <div className="space-y-2.5">
                  {[
                    { step: '01', text: 'We review your requirements within 24 hours.' },
                    { step: '02', text: 'We schedule a discovery call to clarify details.' },
                    { step: '03', text: 'We provide a detailed proposal with scope, timeline & cost.' },
                    { step: '04', text: 'We begin design & architecture upon approval.' },
                  ].map((item, idx) => (
                    <motion.div
                      key={item.step}
                      whileHover={{ x: 3 }}
                      className="flex items-start gap-3 p-2 rounded-xl hover:bg-white/80 transition-colors"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-md bg-blue-100/70 text-blue-700 text-[10px] font-mono font-black shrink-0">
                        {item.step}
                      </span>
                      <span className="text-xs text-slate-600 leading-relaxed font-medium">
                        {item.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* NDA Security Card with Shimmering Glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-2xl border border-blue-200/90 bg-gradient-to-r from-blue-50/70 via-sky-50/50 to-indigo-50/60 p-5 space-y-2 shadow-xs"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-slate-950">
                <ShieldCheck className="h-4 w-4 text-blue-600 shrink-0" />
                <span>NDA Protected & 100% Confidential</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                All information shared is held in strict confidence and protected under our standard Non-Disclosure Agreement.
              </p>
            </motion.div>
          </div>

        </div>

      </div>
    </main>
  );
}
