'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';

// 22 Real PNG Logos imported from /app/logo copy/
import AngularLogo from '@/app/logo copy/Angular.png';
import BootstrapLogo from '@/app/logo copy/Bootstrap.png';
import CSS3Logo from '@/app/logo copy/CSS3.png';
import ExpressJSLogo from '@/app/logo copy/ExpressJS.png';
import FigmaLogo from '@/app/logo copy/Figma.png';
import FirebaseLogo from '@/app/logo copy/Firebase.png';
import GitLogo from '@/app/logo copy/Git.png';
import GitHubLogo from '@/app/logo copy/GitHub.png';
import HTML5Logo from '@/app/logo copy/HTML5.png';
import JavaScriptLogo from '@/app/logo copy/JavaScript.png';
import MongoDBLogo from '@/app/logo copy/MongoDB.png';
import MySQLLogo from '@/app/logo copy/MySQL.png';
import NextJSLogo from '@/app/logo copy/NextJS.png';
import NodeJSLogo from '@/app/logo copy/NodeJS.png';
import PostgreSQLLogo from '@/app/logo copy/PostgreSQL.png';
import PythonLogo from '@/app/logo copy/Python.png';
import RailwayLogo from '@/app/logo copy/Railway.png';
import ReactLogo from '@/app/logo copy/React.png';
import TailwindCSSLogo from '@/app/logo copy/TailwindCSS.png';
import TypeScriptLogo from '@/app/logo copy/TypeScript.png';
import VercelLogo from '@/app/logo copy/Vercel.png';
import JavaLogo from '@/app/logo copy/java.png';

export const techLogoMap: Record<string, StaticImageData> = {
  'Next.js 14 / 15': NextJSLogo,
  'Next.js 14': NextJSLogo,
  'Next.js': NextJSLogo,
  'React 18 / 19': ReactLogo,
  'React': ReactLogo,
  'React Native': ReactLogo,
  'React Native & Mobile': ReactLogo,
  'TypeScript': TypeScriptLogo,
  'JavaScript (ES6+)': JavaScriptLogo,
  'JavaScript': JavaScriptLogo,
  'Tailwind CSS': TailwindCSSLogo,
  'Node.js': NodeJSLogo,
  'NestJS': NodeJSLogo,
  'Express.js': ExpressJSLogo,
  'Python': PythonLogo,
  'Java Enterprise': JavaLogo,
  'Java': JavaLogo,
  'PostgreSQL': PostgreSQLLogo,
  'MongoDB': MongoDBLogo,
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

  const dimensions = {
    sm: { box: 'h-5 w-5 p-0.5', img: 16 },
    md: { box: 'h-9 w-9 p-1.5', img: 26 },
    lg: { box: 'h-11 w-11 p-2', img: 32 },
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

  return (
    <div
      className={`inline-flex items-center justify-center rounded-xl bg-blue-600 text-white font-mono font-black shrink-0 ${dim.box} ${className}`}
      title={name}
    >
      {name.charAt(0)}
    </div>
  );
}

export const techLogos = techLogoMap;
