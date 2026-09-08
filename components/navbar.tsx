'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';
import { MagneticButton } from '@/components/magnetic-button';
import { CompanyLogo } from '@/components/company-logo';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isHomeHero = pathname === '/' && !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      if (pathname === '/') {
        const heroEl = document.getElementById('home-hero-section');
        if (heroEl) {
          const heroBottom = heroEl.getBoundingClientRect().bottom;
          // When the bottom of the hero section is completely scrolled past the navbar (approx 75px)
          setScrolled(heroBottom <= 75);
          return;
        }
        setScrolled(window.scrollY > (window.innerHeight - 80));
      } else {
        setScrolled(window.scrollY > 20);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
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
      {/* Dynamic Adaptive Navbar: Dark on Home Hero, Solid White everywhere else */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isHomeHero
            ? 'bg-[#0F172A]/85 backdrop-blur-xl border-b border-white/10 py-3 sm:py-4 text-white'
            : 'bg-white border-b border-slate-200/80 shadow-xs py-2.5 sm:py-3 text-slate-900'
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center group py-0.5 max-w-[175px] min-[360px]:max-w-[210px] sm:max-w-none" aria-label={siteConfig.name}>
            <CompanyLogo
              width={285}
              height={68}
              theme={isHomeHero ? 'dark' : 'light'}
              imgClassName="scale-110 origin-left"
              className="transition-transform duration-300 group-hover:scale-105"
            />
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
                    isHomeHero
                      ? isActive
                        ? 'text-white font-bold'
                        : 'text-slate-300 hover:text-cyan-400'
                      : isActive
                      ? 'text-blue-600 font-bold'
                      : 'text-slate-600 hover:text-blue-600'
                  )}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-dot"
                      className={cn(
                        'absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-5 rounded-full shadow-sm',
                        isHomeHero
                          ? 'bg-gradient-to-r from-cyan-400 to-blue-500 shadow-cyan-400/50'
                          : 'bg-gradient-to-r from-blue-600 to-cyan-500 shadow-blue-500/30'
                      )}
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
                  className={cn(
                    'text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all',
                    isHomeHero
                      ? 'bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-lg shadow-cyan-500/30 border border-cyan-400/30'
                      : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-md shadow-blue-600/25 border border-blue-500/30'
                  )}
                >
                  <span>Get Quote / Contact</span>
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </MagneticButton>
              </motion.div>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              className={cn(
                'flex h-10 w-10 items-center justify-center rounded-xl lg:hidden transition-colors',
                isHomeHero
                  ? 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
                  : 'bg-slate-100 border border-slate-200 text-slate-800 hover:bg-slate-200'
              )}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-[280px] xs:max-w-sm bg-white p-5 sm:p-6 shadow-2xl lg:hidden flex flex-col justify-between overflow-y-auto max-h-[100dvh]"
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <Link href="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
                    <CompanyLogo width={245} height={58} imgClassName="scale-110 origin-left" />
                  </Link>
                  <button
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200"
                    onClick={() => setMobileOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* Links */}
                <nav className="space-y-1">
                  {siteConfig.nav.map((item) => {
                    const isActive = pathname === item.href;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          'flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all',
                          isActive
                            ? 'bg-blue-50 text-blue-600 font-bold'
                            : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950'
                        )}
                      >
                        <span>{item.label}</span>
                        {isActive && <div className="h-2 w-2 rounded-full bg-blue-600" />}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Bottom CTA */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-colors"
                >
                  <span>Get Quote / Contact</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 font-mono">
                  <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
                  <span>100% Client Code Ownership</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
