'use client';

import { ConferenceTable3D } from '@/components/sections/conference-table-3d';
import { MagneticButton } from '@/components/magnetic-button';
import { ArrowRight } from 'lucide-react';

export function HomeTeamPreview() {
  return (
    <div className="relative border-t border-slate-200">
      <ConferenceTable3D />
      <div className="bg-slate-50/60 text-center pb-20 -mt-6">
        <MagneticButton href="/team" size="sm" className="bg-blue-600 text-white hover:bg-blue-700 font-bold shadow-md shadow-blue-500/20">
          Meet Our Complete Team
          <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
        </MagneticButton>
      </div>
    </div>
  );
}
