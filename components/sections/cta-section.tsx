'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, MessageSquare } from 'lucide-react';
import { MagneticButton } from '@/components/magnetic-button';

export function CTASection({
  title = "Ready to Build Your System?",
  subtitle = "Tell us your goals. We'll provide a comprehensive technical blueprint and fixed-milestone scope within 24 hours.",
  buttonText = "Start Your Project",
  buttonHref = "/contact",
}: {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}) {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-[#FAF7F2]">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-800 via-amber-700 to-amber-900 p-8 text-center sm:p-14 shadow-2xl shadow-amber-900/15"
        >
          {/* Subtle Glow */}
          <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="text-balance text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
              {title}
            </h2>

            <p className="mx-auto mt-4 text-balance text-sm sm:text-base text-amber-100 leading-relaxed font-normal">
              {subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex items-center justify-center">
              <MagneticButton
                href={buttonHref}
                size="lg"
                className="w-full sm:w-auto bg-white hover:bg-amber-50 text-amber-900 font-bold shadow-xl border border-white px-8 py-3.5 rounded-xl text-sm"
              >
                {buttonText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </MagneticButton>
            </div>

            {/* Reassurance pills */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-xs text-amber-100 border-t border-amber-500/40 pt-6 font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-amber-200" />
                NDA Protected
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="h-4 w-4 text-amber-300" />
                24-Hour Response
              </span>
              <span className="flex items-center gap-1.5">
                <MessageSquare className="h-4 w-4 text-emerald-300" />
                Direct Architect Chat
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
