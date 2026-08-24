'use client';

import { motion } from 'framer-motion';
import { Lock, GitBranch, Boxes, Globe, Database } from 'lucide-react';

export function HomeIPGuarantee() {
  return (
    <section className="relative overflow-hidden bg-white text-slate-900 py-24 sm:py-32 select-none border-t border-slate-200">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-8 sm:p-14 shadow-sm relative overflow-hidden text-center">
          <div className="relative z-10 max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 mb-4">
              <span>SOVEREIGN GUARANTEE</span>
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 leading-tight">
              You Own What We Build.
            </h2>

            <p className="mt-2 text-sm font-semibold text-blue-700 font-bold">
              100% Intellectual Property & Code Ownership
            </p>

            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              You receive full administrative access to GitHub repositories, Docker container configs, AWS/GCP cloud environments, and database migration scripts.
            </p>
          </div>

          {/* 4 Infrastructure Objects */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10 max-w-4xl mx-auto mb-10">
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs text-center group hover:border-blue-500 transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mx-auto mb-3 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <GitBranch className="h-6 w-6" />
              </div>
              <h4 className="text-sm font-bold text-slate-950">GitHub Repos</h4>
              <p className="text-[11px] text-slate-500 font-semibold mt-1">Full Admin & History</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs text-center group hover:border-blue-500 transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mx-auto mb-3 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Boxes className="h-6 w-6" />
              </div>
              <h4 className="text-sm font-bold text-slate-950">Docker Containers</h4>
              <p className="text-[11px] text-slate-500 font-semibold mt-1">Reproducible Builds</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs text-center group hover:border-blue-500 transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mx-auto mb-3 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Globe className="h-6 w-6" />
              </div>
              <h4 className="text-sm font-bold text-slate-950">AWS / GCP Cloud</h4>
              <p className="text-[11px] text-slate-500 font-semibold mt-1">Your Private Accounts</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs text-center group hover:border-blue-500 transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mx-auto mb-3 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Database className="h-6 w-6" />
              </div>
              <h4 className="text-sm font-bold text-slate-950">Database Schemas</h4>
              <p className="text-[11px] text-slate-500 font-semibold mt-1">Migration Scripts</p>
            </motion.div>
          </div>

          {/* Central Sovereign Seal */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 rounded-2xl border border-blue-200 bg-blue-50 px-6 py-2.5 text-xs font-semibold font-bold text-blue-700">
            <span>YOUR CODE</span>
            <span className="text-slate-300">•</span>
            <span>YOUR INFRASTRUCTURE</span>
            <span className="text-slate-300">•</span>
            <span>YOUR DATA</span>
            <span className="text-slate-300">•</span>
            <span>YOUR IP</span>
          </div>
        </div>
      </div>
    </section>
  );
}
