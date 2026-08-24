'use client';

import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';
import {
  Mail,
  ShieldCheck,
  MapPin,
} from 'lucide-react';

export function WhatsAppOfficialIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-sky-50/60 via-sky-50/30 to-white text-slate-900 pt-16 pb-8 select-none border-t border-sky-200/80">
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 space-y-12">
        
        {/* Main 3-Column Split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-slate-200/70 text-left">
          
          {/* Column 1: Brand & Bio (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white font-bold shadow-md shadow-blue-500/20">
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="text-white">
                  <path d="M2 2L8 8L2 14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 2L14 8L8 14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
                </svg>
              </div>
              <span className="text-2xl font-black tracking-tight text-slate-950">
                {siteConfig.name}
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-sm">
              Custom software, ERP platforms, and mobile apps engineered for growing businesses with 100% sovereign client source code ownership.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 pt-2">
              <ShieldCheck className="h-4 w-4 text-blue-600 shrink-0" />
              <span>100% Client Sovereign IP Guarantee</span>
            </div>
          </div>

          {/* Column 2: Navigation - One After Next Line (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm font-bold text-slate-700">
              <li>
                <Link href="/" className="hover:text-blue-600 transition-colors inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-600 transition-colors inline-block">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-600 transition-colors inline-block">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-blue-600 transition-colors inline-block">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-blue-600 transition-colors inline-block">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Mail - One After Next Line (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
              Contact & Inquiries
            </span>

            <div className="space-y-4 text-xs sm:text-sm font-bold text-slate-800">
              {/* Phone / Contact Line */}
              <div>
                <span className="text-[10px] font-mono text-slate-400 block uppercase font-medium">
                  Contact / WhatsApp
                </span>
                <a
                  href="https://wa.me/918667709294?text=Hello%20Nexora,%20I%20would%20like%20to%20inquire%20about%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-900 hover:text-emerald-600 transition-colors mt-1"
                >
                  <WhatsAppOfficialIcon className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>+91 86677 09294</span>
                </a>
              </div>

              {/* Email Line */}
              <div>
                <span className="text-[10px] font-mono text-slate-400 block uppercase font-medium">
                  Email
                </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 text-slate-900 hover:text-blue-600 transition-colors mt-1"
                >
                  <Mail className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>{siteConfig.email}</span>
                </a>
              </div>

              {/* Location Line */}
              <div>
                <span className="text-[10px] font-mono text-slate-400 block uppercase font-medium">
                  Location
                </span>
                <div className="inline-flex items-center gap-2 text-slate-600 font-medium mt-1">
                  <MapPin className="h-4 w-4 text-slate-400 shrink-0" />
                  <span>Tamil Nadu, India</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Subtle Trust Badges */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            <span>© {currentYear} {siteConfig.name} Studio • All rights reserved</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-900 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918667709294?text=Hello%20Nexora,%20I%20would%20like%20to%20discuss%20a%20project."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/35 hover:bg-[#20bd5a] hover:scale-105 transition-all duration-300 group cursor-pointer"
    >
      <WhatsAppOfficialIcon className="h-7 w-7 text-white" />
      <span className="sr-only">Chat on WhatsApp</span>
    </a>
  );
}
