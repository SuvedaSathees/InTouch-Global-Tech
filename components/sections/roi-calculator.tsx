'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowRight, DollarSign, Clock, TrendingUp } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { MagneticButton } from '@/components/magnetic-button';

export function ROICalculator() {
  const [teamSize, setTeamSize] = useState(35);
  const [saasTools, setSaasTools] = useState(5);
  const [manualHoursWeekly, setManualHoursWeekly] = useState(8);

  // Calculations
  const averageHourlyCost = 45;
  const annualManualCost = teamSize * manualHoursWeekly * 50 * averageHourlyCost;
  const annualSaasWaste = teamSize * saasTools * 45 * 12; // avg $45/seat/tool
  const totalAnnualInefficiency = annualManualCost + annualSaasWaste;
  const estimatedSavings = Math.round(totalAnnualInefficiency * 0.65);
  const hoursRecoveredAnnual = Math.round(teamSize * manualHoursWeekly * 50 * 0.7);

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-white border-t border-slate-200">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Value Estimator"
          title="Calculate Your Enterprise ROI & Recovered Hours"
          description="Estimate the operational capital and engineering hours you recover by replacing fragmented software sprawl with custom software."
        />

        <div className="mt-16 max-w-5xl mx-auto rounded-3xl border border-slate-200 bg-slate-50/70 p-8 sm:p-12 shadow-xl">
          <div className="grid gap-10 lg:grid-cols-12 items-center">
            {/* Sliders Column */}
            <div className="lg:col-span-6 space-y-6">
              {/* Team Size Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                    Active System Users (Employees)
                  </label>
                  <span className="text-sm font-bold text-blue-600 font-mono">{teamSize} Users</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={250}
                  step={5}
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>

              {/* Fragmented Tools Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                    Fragmented Tools / Spreadsheets in Use
                  </label>
                  <span className="text-sm font-bold text-blue-600 font-mono">{saasTools} Tools</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={15}
                  step={1}
                  value={saasTools}
                  onChange={(e) => setSaasTools(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>

              {/* Manual Hours Lost Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                    Weekly Manual Reconciliation Hours / User
                  </label>
                  <span className="text-sm font-bold text-blue-600 font-mono">{manualHoursWeekly} hrs/week</span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={20}
                  step={1}
                  value={manualHoursWeekly}
                  onChange={(e) => setManualHoursWeekly(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>
            </div>

            {/* Results Column */}
            <div className="lg:col-span-6 rounded-3xl border border-slate-200 bg-white p-7 shadow-lg text-center sm:text-left">
              <div className="flex items-center gap-2 mb-4 justify-center sm:justify-start">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                  <Calculator className="h-4 w-4" />
                </span>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
                  Estimated Operational Upside
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] font-mono uppercase text-slate-500 font-bold block">
                    Annual Capital Recovered
                  </span>
                  <p className="text-2xl sm:text-3xl font-black text-blue-600 font-mono mt-1">
                    ${estimatedSavings.toLocaleString()}
                  </p>
                  <span className="text-[10px] text-emerald-600 font-medium">Reduced Waste</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] font-mono uppercase text-slate-500 font-bold block">
                    Annual Productive Hours Gained
                  </span >
                  <p className="text-2xl sm:text-3xl font-black text-slate-900 font-mono mt-1">
                    {hoursRecoveredAnnual.toLocaleString()} hrs
                  </p>
                  <span className="text-[10px] text-blue-600 font-medium">Reinvested in Growth</span>
                </div>
              </div>

              <MagneticButton href="/contact" size="lg" className="w-full bg-blue-600 text-white hover:bg-blue-700 shadow-md">
                Unlock This Efficiency
                <ArrowRight className="ml-2 h-4 w-4" />
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
