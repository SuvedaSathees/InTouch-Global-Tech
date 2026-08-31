'use client';

import React from 'react';
import Image from 'next/image';
import companyLogo from '@/app/terms/logo intouch.png';
import { siteConfig } from '@/lib/site-config';

export function CompanyLogo({
  size = 68,
  className = '',
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center rounded-2xl bg-white shadow-md shadow-amber-700/10 border border-[#E8DFD1] overflow-hidden shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={companyLogo}
        alt={siteConfig.name}
        width={size * 2}
        height={size * 2}
        className="object-contain w-full h-full p-0.5 scale-110"
        priority
      />
    </div>
  );
}

export default CompanyLogo;
