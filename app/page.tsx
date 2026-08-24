'use client';

import { HomeHero } from '@/components/sections/home-hero';
import { HomeWhatWeBuild } from '@/components/sections/home-what-we-build';
import { HomeStats } from '@/components/sections/home-stats';
import { HomeClientJourney } from '@/components/sections/home-client-journey';

export default function HomePage() {
  return (
    <main className="bg-white text-slate-900">
      {/* 01 — HERO SECTION */}
      <HomeHero />

      {/* 02 — WHAT WE BUILD */}
      <HomeWhatWeBuild />

      {/* 03 — NUMBERS / STATS */}
      <HomeStats />

      {/* 04 — CLIENT JOURNEY */}
      <HomeClientJourney />
    </main>
  );
}
