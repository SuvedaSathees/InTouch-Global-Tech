import { GitBranch, Boxes, Globe, Database, Lock } from 'lucide-react';

export function HomeIPGuarantee() {
  return (
    <section className="relative overflow-hidden bg-slate-50/80 text-slate-900 py-24 sm:py-32 select-none border-t border-slate-200">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 text-center">
        <div className="max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-mono font-bold text-blue-700 mb-4">
            <Lock className="h-3.5 w-3.5 text-blue-600" />
            <span>GUARANTEED IP OWNERSHIP</span>
          </span>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 leading-tight">
            100% Intellectual Property & Code Ownership
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            You own every single line of code, Docker container recipe, and database schema from day one. Zero vendor lock-in.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mx-auto mb-3 border border-blue-100">
              <GitBranch className="h-6 w-6" />
            </div>
            <h4 className="text-sm font-bold text-slate-950">GitHub Repos</h4>
            <p className="text-[11px] text-slate-500 font-mono mt-1">Full Admin & History</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mx-auto mb-3 border border-blue-100">
              <Boxes className="h-6 w-6" />
            </div>
            <h4 className="text-sm font-bold text-slate-950">Docker Containers</h4>
            <p className="text-[11px] text-slate-500 font-mono mt-1">Reproducible Builds</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mx-auto mb-3 border border-blue-100">
              <Globe className="h-6 w-6" />
            </div>
            <h4 className="text-sm font-bold text-slate-950">AWS / GCP Cloud</h4>
            <p className="text-[11px] text-slate-500 font-mono mt-1">Your Private Accounts</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mx-auto mb-3 border border-blue-100">
              <Database className="h-6 w-6" />
            </div>
            <h4 className="text-sm font-bold text-slate-950">Database Schemas</h4>
            <p className="text-[11px] text-slate-500 font-mono mt-1">Migration Scripts</p>
          </div>
        </div>

        <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 rounded-2xl border border-blue-200 bg-blue-50 px-6 py-2.5 text-xs font-mono font-bold text-blue-700">
          <span>YOUR CODE</span>
          <span className="text-slate-300">•</span>
          <span>YOUR INFRASTRUCTURE</span>
          <span className="text-slate-300">•</span>
          <span>YOUR DATA</span>
          <span className="text-slate-300">•</span>
          <span>YOUR IP</span>
        </div>
      </div>
    </section>
  );
}
