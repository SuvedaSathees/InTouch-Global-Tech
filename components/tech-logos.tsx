'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { MapPin, Navigation, BellRing, Box, Radio, Layers, Database } from 'lucide-react';

// 22 Real PNG Logos imported from /app/_logo_copy/
import AngularLogo from '@/app/_logo_copy/Angular.png';
import BootstrapLogo from '@/app/_logo_copy/Bootstrap.png';
import CSS3Logo from '@/app/_logo_copy/CSS3.png';
import ExpressJSLogo from '@/app/_logo_copy/ExpressJS.png';
import FigmaLogo from '@/app/_logo_copy/Figma.png';
import FirebaseLogo from '@/app/_logo_copy/Firebase.png';
import GitLogo from '@/app/_logo_copy/Git.png';
import GitHubLogo from '@/app/_logo_copy/GitHub.png';
import HTML5Logo from '@/app/_logo_copy/HTML5.png';
import JavaScriptLogo from '@/app/_logo_copy/JavaScript.png';
import MongoDBLogo from '@/app/_logo_copy/MongoDB.png';
import MySQLLogo from '@/app/_logo_copy/MySQL.png';
import NextJSLogo from '@/app/_logo_copy/NextJS.png';
import NodeJSLogo from '@/app/_logo_copy/NodeJS.png';
import PostgreSQLLogo from '@/app/_logo_copy/PostgreSQL.png';
import PythonLogo from '@/app/_logo_copy/Python.png';
import RailwayLogo from '@/app/_logo_copy/Railway.png';
import ReactLogo from '@/app/_logo_copy/React.png';
import TailwindCSSLogo from '@/app/_logo_copy/TailwindCSS.png';
import TypeScriptLogo from '@/app/_logo_copy/TypeScript.png';
import VercelLogo from '@/app/_logo_copy/Vercel.png';
import JavaLogo from '@/app/_logo_copy/java.png';

export const techLogoMap: Record<string, StaticImageData> = {
  'Next.js 14 / 15': NextJSLogo,
  'Next.js 14': NextJSLogo,
  'Next.js': NextJSLogo,
  'NextJS': NextJSLogo,
  'React.js': ReactLogo,
  'React 18 / 19': ReactLogo,
  'React': ReactLogo,
  'React Native': ReactLogo,
  'React Native & Mobile': ReactLogo,
  'TypeScript': TypeScriptLogo,
  'JavaScript (ES6+)': JavaScriptLogo,
  'JavaScript': JavaScriptLogo,
  'Tailwind CSS': TailwindCSSLogo,
  'TailwindCSS': TailwindCSSLogo,
  'Tailwind': TailwindCSSLogo,
  'Node.js': NodeJSLogo,
  'NodeJS': NodeJSLogo,
  'NestJS': NodeJSLogo,
  'Express.js': ExpressJSLogo,
  'ExpressJS': ExpressJSLogo,
  'Express': ExpressJSLogo,
  'Python': PythonLogo,
  'Java Enterprise': JavaLogo,
  'Java': JavaLogo,
  'PostgreSQL': PostgreSQLLogo,
  'Postgres': PostgreSQLLogo,
  'MongoDB': MongoDBLogo,
  'Mongo': MongoDBLogo,
  'MySQL': MySQLLogo,
  'Firebase': FirebaseLogo,
  'Docker & Compose': RailwayLogo,
  'Docker': RailwayLogo,
  'Vercel Cloud': VercelLogo,
  'Vercel': VercelLogo,
  'Railway Cloud': RailwayLogo,
  'Railway Deployment': RailwayLogo,
  'Railway': RailwayLogo,
  'Git & GitHub': GitHubLogo,
  'GitHub': GitHubLogo,
  'Git': GitLogo,
  'Angular': AngularLogo,
  'Bootstrap': BootstrapLogo,
  'HTML5 & CSS3': HTML5Logo,
  'HTML5': HTML5Logo,
  'CSS3': CSS3Logo,
  'Figma Systems': FigmaLogo,
  'Figma UI/UX Studio': FigmaLogo,
  'Figma': FigmaLogo,
};

const customIconMap: Record<string, typeof Box> = {
  'Three.js': Box,
  'ThreeJS': Box,
  'Google Maps API': MapPin,
  'Google Maps': MapPin,
  'Geolocation': Navigation,
  'Firebase Cloud Messaging': BellRing,
  'FCM': BellRing,
  'WebSockets': Radio,
};

export function TechBadgeIcon({
  name,
  size = 'md',
  className = '',
}: {
  name: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  const logo = techLogoMap[name];
  const CustomIcon = customIconMap[name];

  const dimensions = {
    sm: { box: 'h-5 w-5 p-0.5', img: 16, icon: 'h-3.5 w-3.5' },
    md: { box: 'h-9 w-9 p-1.5', img: 26, icon: 'h-4 w-4' },
    lg: { box: 'h-11 w-11 p-2', img: 32, icon: 'h-5 w-5' },
  };

  const dim = dimensions[size];

  if (logo) {
    return (
      <div
        className={`inline-flex items-center justify-center rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs shrink-0 group-hover:scale-105 group-hover:border-blue-300 transition-all ${dim.box} ${className}`}
        title={name}
      >
        <Image
          src={logo}
          alt={name}
          width={dim.img}
          height={dim.img}
          className="object-contain max-h-full max-w-full"
        />
      </div>
    );
  }

  if (CustomIcon) {
    return (
      <div
        className={`inline-flex items-center justify-center rounded-xl bg-blue-50 border border-blue-200 text-blue-600 shadow-2xs shrink-0 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all ${dim.box} ${className}`}
        title={name}
      >
        <CustomIcon className={dim.icon} />
      </div>
    );
  }

  // Fallback
  return (
    <div
      className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-mono font-black shrink-0 ${dim.box} ${className}`}
      title={name}
    >
      {name.charAt(0)}
    </div>
  );
}

export const techLogos = techLogoMap;
