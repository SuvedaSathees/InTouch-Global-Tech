'use client';

import { HomeHero } from '@/components/sections/home-hero';
import { HomeWhatWeBuild } from '@/components/sections/home-what-we-build';
import { HomeFeaturedWork } from '@/components/sections/home-featured-work';
import { HomeStats } from '@/components/sections/home-stats';
import { HomeClientJourney } from '@/components/sections/home-client-journey';

export default function HomePage() {
  return (
    <main className="bg-[#F8FAFC] text-slate-900 min-h-screen">
      {/* 01 — HERO SECTION */}
      <HomeHero />

      {/* 02 — WHAT WE BUILD */}
      <HomeWhatWeBuild />

      {/* 03 — FEATURED PROJECTS & CASE STUDIES */}
      <HomeFeaturedWork />

      {/* 04 — NUMBERS / STATS */}
      <HomeStats />

      {/* 05 — CLIENT JOURNEY */}
      <HomeClientJourney />
    </main>
  );
}


