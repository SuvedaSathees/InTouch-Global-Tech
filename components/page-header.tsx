'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export function PageHeader({
  label,
  title,
  description,
}: {
  label?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] pt-36 pb-20 sm:pt-44 sm:pb-28 border-b border-slate-200/80 select-none">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(0,102,255,0.06),transparent_70%)] pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 z-10">
        {label && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-5 inline-flex items-center justify-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700"
          >
            {label}
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-balance text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl leading-[1.1]"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-balance text-base text-slate-600 sm:text-lg leading-relaxed font-normal"
          >
            {description}
          </motion.p>
        )}

        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-8 flex items-center justify-center gap-1.5 text-xs text-slate-500"
        >
          <Link href="/" className="hover:text-blue-600 transition-colors font-medium">Home</Link>
          <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">{title}</span>
        </motion.nav>
      </div>
    </section>
  );
}
