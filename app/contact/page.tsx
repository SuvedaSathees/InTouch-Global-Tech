'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  ShieldCheck,
  CheckCircle2,
  Send,
  ArrowUpRight,
  Sparkles,
  Phone,
  Building2,
  User,
  MessageSquare,
  DollarSign,
  Layers,
  Clock,
  Zap,
} from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Post to Next.js API route
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      // 2. Compose and launch direct pre-filled email to intouchglobaltech@gmail.com
      const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} - ${formData.name}`);
      const body = encodeURIComponent(
        `Hi Intouch Global Tech Team,\n\n` +
        `I would like to discuss a project inquiry:\n\n` +
        `• Name: ${formData.name}\n` +
        `• Email: ${formData.email}\n` +
        `• Phone / WhatsApp: ${formData.phone}\n` +
        `• Company: ${formData.company || 'N/A'}\n` +
        `• Project Type: ${formData.projectType}\n` +
        `• Estimated Budget: ${formData.budget}\n` +
        `• Requirements:\n${formData.message}\n\n` +
        `Looking forward to your prompt response.`
      );

      const mailtoUrl = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
      window.open(mailtoUrl, '_blank');
    } catch (err) {
      console.error('Submission error:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-slate-900 pt-28 sm:pt-32 pb-16 select-none relative flex flex-col justify-center overflow-hidden">
      {/* Precision Blueprint Ambient Grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Floating Animated Geometric Particle Matrix */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ rotate: [0, 360], scale: [1, 1.05, 1] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full border border-amber-800/[0.04] border-dashed pointer-events-none"
        />
        <motion.div
          animate={{ rotate: [360, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-32 -right-32 w-[650px] h-[650px] rounded-full border border-amber-800/[0.04] border-dashed pointer-events-none"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 w-full space-y-8">
        
        {/* Header */}
        <div className="text-left max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 mb-2"
          >
            <span className="w-5 h-[2px] bg-amber-700 rounded-full" />
            <span>GET IN TOUCH WITH LEAD ENGINEERS</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 leading-[1.08]"
          >
            Let&apos;s Build Your Next Project.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed"
          >
            Fill in your project scope below. Our solution architects will review your requirements and respond with architectural guidance within 24 hours.
          </motion.p>
        </div>

        {/* 2-Column Luxury Layout */}
        <div className="grid gap-6 lg:grid-cols-12 items-stretch">
          
          {/* Main Luxury Glass Form (7 cols) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="rounded-3xl border border-[#E8DFD1] bg-white p-7 sm:p-9 shadow-xl shadow-amber-900/5 text-left h-full flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top Card Ambient Gradient */}
              <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-amber-600 via-amber-700 to-amber-900" />

              {submitted ? (
                <div className="py-12 text-center space-y-5 my-auto">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 shadow-sm"
                  >
                    <CheckCircle2 className="h-8 w-8" />
                  </motion.div>
                  <div className="space-y-1.5">
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-950">
                      Inquiry Dispatched!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Your project inquiry has been formatted and forwarded to <strong className="text-slate-900 font-bold">{siteConfig.email}</strong>. Our engineering leads will review your scope and get in touch within 24 hours.
                    </p>
                  </div>

                  {/* Fast Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(`Project Inquiry: ${formData.projectType} - ${formData.name}`)}&body=${encodeURIComponent(
                        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company || 'N/A'}\nProject: ${formData.projectType}\nBudget: ${formData.budget}\n\nRequirements:\n${formData.message}`
                      )}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs font-bold shadow-md transition-all cursor-pointer"
                    >
                      <Mail className="h-4 w-4" />
                      <span>Re-open Email App</span>
                    </a>

                    <a
                      href={`https://wa.me/918667709294?text=${encodeURIComponent(
                        `Hello Intouch Global Tech,\n\nI just submitted a project inquiry:\n• Name: ${formData.name}\n• Email: ${formData.email}\n• Phone: ${formData.phone}\n• Project: ${formData.projectType}\n• Budget: ${formData.budget}\n\nRequirements: ${formData.message}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold shadow-md transition-all cursor-pointer"
                    >
                      <WhatsAppOfficialIcon className="h-4 w-4 text-white" />
                      <span>Message on WhatsApp</span>
                    </a>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-bold text-slate-500 hover:text-amber-800 transition-colors cursor-pointer"
                    >
                      ← Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <User className="h-3.5 w-3.5 text-amber-700" />
                        <span>Your Name</span>
                        <span className="text-amber-700">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full rounded-2xl border border-[#E8DFD1] bg-[#FAF7F2]/70 px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-600 focus:bg-white focus:ring-4 focus:ring-amber-500/15 focus:outline-none transition-all shadow-2xs font-medium"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <Mail className="h-3.5 w-3.5 text-amber-700" />
                        <span>Email Address</span>
                        <span className="text-amber-700">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full rounded-2xl border border-[#E8DFD1] bg-[#FAF7F2]/70 px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-600 focus:bg-white focus:ring-4 focus:ring-amber-500/15 focus:outline-none transition-all shadow-2xs font-medium"
                      />
                    </div>
                  </div>

                  {/* Phone & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <Phone className="h-3.5 w-3.5 text-amber-700" />
                        <span>Phone / WhatsApp</span>
                        <span className="text-amber-700">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-2xl border border-[#E8DFD1] bg-[#FAF7F2]/70 px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-600 focus:bg-white focus:ring-4 focus:ring-amber-500/15 focus:outline-none transition-all shadow-2xs font-medium"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <Building2 className="h-3.5 w-3.5 text-amber-700" />
                        <span>Company Name</span>
                        <span className="text-slate-400 font-normal text-[11px]">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Acme Corp"
                        className="w-full rounded-2xl border border-[#E8DFD1] bg-[#FAF7F2]/70 px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-600 focus:bg-white focus:ring-4 focus:ring-amber-500/15 focus:outline-none transition-all shadow-2xs font-medium"
                      />
                    </div>
                  </div>

                  {/* Service & Budget Selectors */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <Layers className="h-3.5 w-3.5 text-amber-700" />
                        <span>Project / Service Type</span>
                        <span className="text-amber-700">*</span>
                      </label>
                      <div className="relative">
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full rounded-2xl border border-[#E8DFD1] bg-[#FAF7F2]/70 px-4 py-3 text-xs sm:text-sm text-slate-900 focus:border-amber-600 focus:bg-white focus:ring-4 focus:ring-amber-500/15 focus:outline-none transition-all shadow-2xs font-medium cursor-pointer appearance-none"
                        >
                          <option value="Web Development & E-Commerce">Web Development & E-Commerce</option>
                          <option value="Custom ERP & HRMS Software">Custom ERP & HRMS Software</option>
                          <option value="Hospital & Pharmacy Management (HMS)">Hospital & Pharmacy Management (HMS)</option>
                          <option value="CRM & Billing POS Software">CRM & Billing POS Software</option>
                          <option value="SEO, SEM & WhatsApp Gateway">SEO, SEM & WhatsApp Gateway</option>
                          <option value="Custom Software / Other">Custom Software / Other</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                          <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <DollarSign className="h-3.5 w-3.5 text-amber-700" />
                        <span>Estimated Budget</span>
                        <span className="text-amber-700">*</span>
                      </label>
                      <div className="relative">
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full rounded-2xl border border-[#E8DFD1] bg-[#FAF7F2]/70 px-4 py-3 text-xs sm:text-sm text-slate-900 focus:border-amber-600 focus:bg-white focus:ring-4 focus:ring-amber-500/15 focus:outline-none transition-all shadow-2xs font-medium cursor-pointer appearance-none"
                        >
                          <option value="₹15,000 – ₹35,000">₹15,000 – ₹35,000</option>
                          <option value="₹35,000 – ₹75,000">₹35,000 – ₹75,000</option>
                          <option value="₹75,000 – ₹1,50,000">₹75,000 – ₹1,50,000</option>
                          <option value="₹1,50,000+ / Enterprise">₹1,50,000+ / Enterprise</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                          <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Requirements Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                      <MessageSquare className="h-3.5 w-3.5 text-amber-700" />
                      <span>Project Requirements & Goals</span>
                      <span className="text-amber-700">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you're looking to build, desired features, integrations, or key timelines..."
                      className="w-full rounded-2xl border border-[#E8DFD1] bg-[#FAF7F2]/70 px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-600 focus:bg-white focus:ring-4 focus:ring-amber-500/15 focus:outline-none transition-all shadow-2xs font-medium resize-none leading-relaxed"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 hover:from-amber-800 hover:to-amber-950 text-white font-bold px-6 py-3.5 rounded-2xl text-xs sm:text-sm shadow-xl shadow-amber-800/25 hover:shadow-2xl hover:shadow-amber-800/35 transition-all cursor-pointer group"
                  >
                    <span>{isSubmitting ? 'Submitting Inquiry...' : 'Send Project Inquiry'}</span>
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>

          {/* Unified Luxury Info Card (5 cols) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="rounded-3xl border border-[#E8DFD1] bg-white p-7 sm:p-8 shadow-xl shadow-amber-900/5 text-left h-full flex flex-col justify-between space-y-6"
            >
              {/* Header with Live Radar Status */}
              <div>
                <div className="flex items-center gap-2 border-b border-[#E8DFD1] pb-3.5 mb-5">
                  <Zap className="h-4 w-4 text-amber-700" />
                  <h3 className="text-xs font-black text-slate-950 uppercase tracking-widest font-mono">
                    DIRECT CONNECT
                  </h3>
                </div>

                {/* Direct Action Channels */}
                <div className="space-y-3">
                  {/* WhatsApp Direct Card */}
                  <motion.a
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://wa.me/918667709294?text=Hello%20Intouch%20Global%20Tech,%20I%20would%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-gradient-to-br from-[#FAF7F2] to-white border border-[#E8DFD1] hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-600/10 transition-all group cursor-pointer"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-[#25D366] group-hover:text-white transition-all shadow-xs shrink-0">
                      <WhatsAppOfficialIcon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-sm sm:text-base font-black text-slate-900 group-hover:text-emerald-700 transition-colors">
                        +91 86677 09294
                      </span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-slate-300 group-hover:text-emerald-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </motion.a>

                  {/* Email Support Card */}
                  <motion.a
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href={`mailto:${siteConfig.email}?subject=Project%20Inquiry%20-%20Intouch%20Global%20Tech`}
                    className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-gradient-to-br from-[#FAF7F2] to-white border border-[#E8DFD1] hover:border-amber-500 hover:shadow-md hover:shadow-amber-700/10 transition-all group cursor-pointer"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-800 group-hover:bg-amber-700 group-hover:text-white transition-all shadow-xs shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-sm sm:text-base font-black text-slate-900 group-hover:text-amber-800 transition-colors truncate block">
                        {siteConfig.email}
                      </span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-slate-300 group-hover:text-amber-700 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </motion.a>
                </div>
              </div>

              {/* Guarantees List */}
              <div className="border-t border-[#E8DFD1] pt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-800">
                    Engineering Commitments
                  </span>
                  <Sparkles className="h-3.5 w-3.5 text-amber-700" />
                </div>

                <ul className="space-y-2.5 text-xs text-slate-700 font-semibold">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-amber-700 shrink-0 mt-0.5" />
                    <span>Response & scope review within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-amber-700 shrink-0 mt-0.5" />
                    <span>Direct WhatsApp line with lead architects</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-amber-700 shrink-0 mt-0.5" />
                    <span>2-week working sprint demos with zero lock-in</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-amber-700 shrink-0 mt-0.5" />
                    <span>100% sovereign client source code ownership</span>
                  </li>
                </ul>
              </div>

              {/* NDA & Sovereignty Seal */}
              <div className="rounded-2xl border border-amber-200/90 bg-gradient-to-r from-amber-50/80 via-amber-50/40 to-white p-3.5 flex items-center gap-3 text-xs text-slate-800 font-bold shadow-2xs">
                <ShieldCheck className="h-5 w-5 text-amber-700 shrink-0" />
                <span>NDA Protected • 100% Confidential IP Guarantee</span>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </main>
  );
}
