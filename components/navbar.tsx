'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, ChevronRight } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';
import { MagneticButton } from '@/components/magnetic-button';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Apple-Grade Frosted Glass Clean Navbar */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-2xl border-b border-[#E8DFD1] shadow-xs py-3.5'
            : 'bg-[#FAF7F2]/80 backdrop-blur-md py-4 sm:py-5'
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label={siteConfig.name}>
            <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-600 to-amber-800 text-white font-black shadow-md shadow-amber-700/20 transition-transform duration-300 group-hover:scale-105">
              <span className="text-sm tracking-tight font-extrabold">IG</span>
            </div>
            <span className="text-xl font-black tracking-tight text-slate-950 group-hover:text-amber-700 transition-colors">
              {siteConfig.name}
            </span>
          </Link>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {siteConfig.nav.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'relative text-sm font-semibold transition-colors duration-200 py-1',
                    isActive
                      ? 'text-amber-800 font-bold'
                      : 'text-slate-600 hover:text-amber-800'
                  )}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-dot"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-5 rounded-full bg-amber-700 shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                <MagneticButton
                  href="/contact"
                  variant="default"
                  size="default"
                  className="bg-amber-700 hover:bg-amber-800 text-white font-bold shadow-md shadow-amber-700/20 text-xs px-5 py-2.5 rounded-xl border border-amber-700"
                >
                  <span>Get Quote / Contact</span>
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </MagneticButton>
              </motion.div>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 border border-slate-200 text-slate-800 lg:hidden transition-colors hover:bg-slate-200"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Modern Slide-down Mobile Menu Sheet */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-slate-900/30 backdrop-blur-md"
              onClick={() => setMobileOpen(false)}
            />

            {/* Mobile Sheet Container */}
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative m-3 sm:m-4 rounded-3xl bg-white border border-slate-200 p-6 shadow-2xl overflow-hidden text-slate-900"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <Link href="/" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-700 text-white shadow-sm font-bold">
                    <span className="text-xs font-black">IG</span>
                  </div>
                  <span className="text-lg font-black text-slate-950">{siteConfig.name}</span>
                </Link>
                <button
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Navigation Links List */}
              <div className="flex flex-col gap-1 py-4">
                {siteConfig.nav.map((item, i) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.03 * i }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          'flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold transition-all',
                          isActive
                            ? 'bg-amber-50 text-amber-800 border border-amber-200'
                            : 'text-slate-700 hover:bg-amber-50/50 hover:text-slate-950'
                        )}
                      >
                        <span>{item.label}</span>
                        <ChevronRight className="h-4 w-4 opacity-40" />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Mobile CTA */}
              <div className="border-t border-slate-100 pt-4 space-y-2">
                <MagneticButton
                  href="/contact"
                  className="w-full bg-amber-700 hover:bg-amber-800 text-white font-bold text-sm py-3.5 rounded-xl shadow-md"
                  size="lg"
                  onClick={() => setMobileOpen(false)}
                >
                  Start a Project
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </MagneticButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
