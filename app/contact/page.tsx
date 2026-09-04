'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  ShieldCheck,
  CheckCircle2,
  Send,
  ArrowUpRight,
  Phone,
  Building2,
  User,
  MessageSquare,
  DollarSign,
  Layers,
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
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 pt-28 sm:pt-32 pb-16 select-none relative flex flex-col justify-center overflow-hidden">
      {/* Subtle Precision Grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #001B48 1px, transparent 1px), linear-gradient(to bottom, #001B48 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 w-full space-y-8">
        
        {/* Minimal Header */}
        <div className="text-left max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            <span className="w-5 h-[2px] bg-blue-600 rounded-full" />
            <span>GET IN TOUCH WITH LEAD ENGINEERS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 leading-tight">
            Let&apos;s Build Your Next Project.
          </h1>
          
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Fill in your project scope below. Our solution architects will review your requirements and respond with architectural guidance within 24 hours.
          </p>
        </div>

        {/* 2-Column Minimal Layout */}
        <div className="grid gap-6 lg:grid-cols-12 items-stretch">
          
          {/* Main Form Card (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-9 shadow-sm text-left h-full flex flex-col justify-between relative overflow-hidden">
              
              {submitted ? (
                <div className="py-12 text-center space-y-5 my-auto">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 shadow-xs">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-950">
                      Inquiry Dispatched!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Your project inquiry has been formatted and forwarded to <strong className="text-slate-900 font-bold">{siteConfig.email}</strong>. Our engineering leads will review your scope and get in touch within 24 hours.
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(`Project Inquiry: ${formData.projectType} - ${formData.name}`)}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs transition-all cursor-pointer"
                    >
                      <Mail className="h-4 w-4" />
                      <span>Re-open Email App</span>
                    </a>

                    <a
                      href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                        `Hello Intouch Global Tech,\n\nI just submitted a project inquiry:\n• Name: ${formData.name}\n• Email: ${formData.email}\n• Phone: ${formData.phone}\n• Project: ${formData.projectType}\n• Budget: ${formData.budget}\n\nRequirements: ${formData.message}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold shadow-xs transition-all cursor-pointer"
                    >
                      <WhatsAppOfficialIcon className="h-4 w-4 text-white" />
                      <span>Message on WhatsApp</span>
                    </a>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-bold text-slate-500 hover:text-blue-600 transition-colors cursor-pointer"
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
                        <User className="h-3.5 w-3.5 text-blue-600" />
                        <span>Your Name</span>
                        <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-500/10 focus:outline-none transition-all font-medium"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <Mail className="h-3.5 w-3.5 text-blue-600" />
                        <span>Email Address</span>
                        <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Your Email"
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-500/10 focus:outline-none transition-all font-medium"
                      />
                    </div>
                  </div>

                  {/* Phone & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <Phone className="h-3.5 w-3.5 text-blue-600" />
                        <span>Phone / WhatsApp</span>
                        <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Your Phone Number"
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-500/10 focus:outline-none transition-all font-medium"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <Building2 className="h-3.5 w-3.5 text-blue-600" />
                        <span>Company Name</span>
                        <span className="text-slate-400 font-normal text-[11px]">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Your Company Name"
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-500/10 focus:outline-none transition-all font-medium"
                      />
                    </div>
                  </div>

                  {/* Service & Budget Selectors */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <Layers className="h-3.5 w-3.5 text-blue-600" />
                        <span>Project / Service Type</span>
                        <span className="text-blue-600">*</span>
                      </label>
                      <div className="relative">
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-xs sm:text-sm text-slate-900 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-500/10 focus:outline-none transition-all font-medium cursor-pointer appearance-none"
                        >
                          <option value="Web Development & E-Commerce">Web Development & E-Commerce</option>
                          <option value="Custom ERP & HRMS Software">Custom ERP & HRMS Software</option>
                          <option value="Hospital & Pharmacy Management (HMS)">Hospital & Pharmacy Management (HMS)</option>
                          <option value="CRM & Billing POS Software">CRM & Billing POS Software</option>
                          <option value="SEO, SEM & WhatsApp Gateway">SEO, SEM & WhatsApp Gateway</option>
                          <option value="Custom Software / Other">Custom Software / Other</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                          <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <DollarSign className="h-3.5 w-3.5 text-blue-600" />
                        <span>Estimated Budget</span>
                        <span className="text-blue-600">*</span>
                      </label>
                      <div className="relative">
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-xs sm:text-sm text-slate-900 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-500/10 focus:outline-none transition-all font-medium cursor-pointer appearance-none"
                        >
                          <option value="₹15,000 – ₹35,000">₹15,000 – ₹35,000</option>
                          <option value="₹35,000 – ₹75,000">₹35,000 – ₹75,000</option>
                          <option value="₹75,000 – ₹1,50,000">₹75,000 – ₹1,50,000</option>
                          <option value="₹1,50,000+ / Enterprise">₹1,50,000+ / Enterprise</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
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
                      <MessageSquare className="h-3.5 w-3.5 text-blue-600" />
                      <span>Project Requirements & Goals</span>
                      <span className="text-blue-600">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Your project requirements, goals, or key details..."
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-500/10 focus:outline-none transition-all font-medium resize-none leading-relaxed"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.005 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold px-6 py-3.5 rounded-2xl text-xs sm:text-sm shadow-md shadow-blue-600/20 hover:shadow-lg transition-all cursor-pointer group"
                  >
                    <span>{isSubmitting ? 'Submitting Inquiry...' : 'Send Project Inquiry'}</span>
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </form>
              )}
            </div>
          </div>

          {/* Unified Info Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-sm text-left h-full flex flex-col justify-between space-y-6">
              
              {/* Header */}
              <div>
                <div className="flex items-center gap-2 border-b border-slate-100 pb-3.5 mb-5">
                  <Zap className="h-4 w-4 text-blue-600" />
                  <h2 className="text-xs font-black text-slate-950 uppercase tracking-widest font-mono">
                    DIRECT CONNECT
                  </h2>
                </div>

                {/* Direct Action Channels */}
                <div className="space-y-3">
                  {/* WhatsApp Direct Card */}
                  <motion.a
                    whileHover={{ scale: 1.01, y: -1 }}
                    whileTap={{ scale: 0.99 }}
                    href={`https://wa.me/${siteConfig.whatsapp}?text=Hello%20${encodeURIComponent(siteConfig.name)},%20I%20would%20like%20to%20discuss%20a%20project.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50/70 border border-slate-200/90 hover:border-emerald-500 hover:bg-white transition-all group cursor-pointer"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-[#25D366] group-hover:text-white transition-all shadow-2xs shrink-0">
                      <WhatsAppOfficialIcon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-sm sm:text-base font-black text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {siteConfig.phone}
                      </span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-slate-300 group-hover:text-emerald-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </motion.a>

                  {/* Email Support Card */}
                  <motion.a
                    whileHover={{ scale: 1.01, y: -1 }}
                    whileTap={{ scale: 0.99 }}
                    href={`mailto:${siteConfig.email}?subject=Project%20Inquiry%20-%20Intouch%20Global%20Tech`}
                    className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50/70 border border-slate-200/90 hover:border-blue-500 hover:bg-white transition-all group cursor-pointer"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-2xs shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-sm sm:text-base font-black text-slate-900 group-hover:text-blue-600 transition-colors truncate block">
                        {siteConfig.email}
                      </span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-slate-300 group-hover:text-blue-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </motion.a>
                </div>
              </div>

              {/* Guarantees List */}
              <div className="border-t border-slate-100 pt-4 space-y-3">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-700 block">
                  Engineering Commitments
                </span>

                <ul className="space-y-2.5 text-xs text-slate-700 font-semibold">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Response & scope review within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Direct WhatsApp line with lead architects</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>2-week working sprint demos with zero lock-in</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>100% full client source code ownership</span>
                  </li>
                </ul>
              </div>

              {/* NDA & IP Ownership Seal */}
              <div className="rounded-2xl border border-blue-200/90 bg-blue-50/50 p-3.5 flex items-center gap-3 text-xs text-slate-800 font-bold shadow-2xs">
                <ShieldCheck className="h-5 w-5 text-blue-600 shrink-0" />
                <span>NDA Protected • 100% Confidential IP Guarantee</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
