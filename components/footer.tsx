'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { CompanyLogo } from '@/components/company-logo';
import { siteConfig } from '@/lib/site-config';
import {
  Mail,
  Phone,
  ShieldCheck,
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
  const pathname = usePathname();

  // Hide footer on contact page alone
  if (pathname === '/contact' || pathname?.startsWith('/contact/')) {
    return null;
  }

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0A0F1D] text-white pt-16 pb-8 select-none border-t border-slate-800/80 overflow-hidden">
      {/* Atmospheric Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] rounded-full bg-blue-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[250px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

      {/* Blueprint Grid Pattern matching Hero */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #38BDF8 1px, transparent 1px), linear-gradient(to bottom, #38BDF8 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 space-y-12">
        {/* Main 3-Column Split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-slate-800/80 text-left">
          {/* Column 1: Brand & Bio (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <Link href="/" className="inline-flex items-center group py-1">
              <CompanyLogo
                width={240}
                height={62}
                theme="dark"
                className="group-hover:scale-105 transition-transform duration-300"
              />
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed max-w-xs text-justify">
              Custom software, ERP platforms, and mobile apps engineered for growing businesses with 100% complete client source code ownership.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400/90 pt-1">
              <ShieldCheck className="h-4 w-4 text-cyan-400 shrink-0" />
              <span>100% Client IP Ownership Guarantee</span>
            </div>
          </div>

          {/* Column 2: Explore Navigation (2 cols) */}
          <div className="md:col-span-2 space-y-3 md:translate-x-[100px]">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-400/80 block mb-2">
              Explore
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-300">
              <li>
                <Link href="/" className="hover:text-cyan-400 transition-colors inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition-colors inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-colors inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-cyan-400 transition-colors inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                  <span>Projects</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services / What We Provide (4 cols - Strictly 1 Line per Point) */}
          <div className="md:col-span-4 space-y-3 md:translate-x-[90px]">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-400/80 block mb-2">
              Services
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-300">
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-colors inline-flex items-center gap-2 whitespace-nowrap">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                  <span>Custom ERP & CRM Platforms</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-colors inline-flex items-center gap-2 whitespace-nowrap">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                  <span>Web Application Development</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-colors inline-flex items-center gap-2 whitespace-nowrap">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                  <span>Mobile Apps (iOS & Android)</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-colors inline-flex items-center gap-2 whitespace-nowrap">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                  <span>AI & Workflow Automation</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-colors inline-flex items-center gap-2 whitespace-nowrap">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                  <span>Cloud Architecture & DevOps</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Inquiries (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-400/80 block mb-2">
              Contact & Inquiries
            </span>

            <div className="space-y-3 text-xs sm:text-sm font-medium text-slate-300">
              {/* Phone / Call Line */}
              <div>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2.5 text-slate-200 hover:text-cyan-400 transition-colors group"
                >
                  <Phone className="h-4 w-4 text-cyan-400 shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{siteConfig.phone}</span>
                </a>
              </div>

              {/* Email Line */}
              <div>
                <a
                  href={`mailto:${siteConfig.email}?subject=Project%20Inquiry%20-%20Intouch%20Global%20Tech`}
                  className="inline-flex items-center gap-2.5 text-slate-200 hover:text-cyan-400 transition-colors group"
                >
                  <Mail className="h-4 w-4 text-cyan-400 shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{siteConfig.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="flex items-center justify-center text-center text-xs font-mono text-slate-500">
          <span>© {currentYear} {siteConfig.name} Studio • All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppButton() {
  const pathname = usePathname();
  const [showButton, setShowButton] = React.useState<boolean>(pathname !== '/');

  React.useEffect(() => {
    if (pathname !== '/') {
      setShowButton(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 360) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <AnimatePresence>
      {showButton && (
        <motion.a
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          href={`https://wa.me/918667709294?text=Hello%20${encodeURIComponent(siteConfig.name)},%20I%20would%20like%20to%20discuss%20a%20project.`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp Contact"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/35 hover:bg-[#20bd5a] hover:scale-105 transition-all duration-300 group cursor-pointer"
        >
          <WhatsAppOfficialIcon className="h-7 w-7 text-white" />
          <span className="sr-only">Chat on WhatsApp</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
