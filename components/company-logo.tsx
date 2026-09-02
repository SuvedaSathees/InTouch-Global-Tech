'use client';

import React from 'react';
import Image from 'next/image';
import companyLogo from '@/app/terms/logo intouch.png';
import { siteConfig } from '@/lib/site-config';

export function CompanyLogo({
  width = 175,
  height = 45,
  theme = 'light',
  className = '',
  imgClassName = '',
}: {
  width?: number;
  height?: number;
  theme?: 'light' | 'dark';
  className?: string;
  imgClassName?: string;
}) {
  const isDark = theme === 'dark';

  return (
    <div
      className={`relative flex items-center justify-start shrink-0 transition-transform duration-300 ${className}`}
      style={{ width, height }}
    >
      <Image
        src={companyLogo}
        alt={siteConfig.name}
        width={width * 2}
        height={height * 2}
        className={`object-contain object-left w-full h-full transition-all duration-300 ${
          isDark
            ? 'filter invert hue-rotate-180 mix-blend-screen brightness-125 contrast-125'
            : 'mix-blend-multiply'
        } ${imgClassName}`}
        priority
      />
    </div>
  );
}

export default CompanyLogo;
