'use client';

import { useRef, useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type MagneticButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'default' | 'outline' | 'ghost' | 'secondary';
  size?: 'sm' | 'default' | 'lg';
  className?: string;
  style?: React.CSSProperties;
};

const variantClasses: Record<string, string> = {
  default: 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/20 border border-blue-500',
  outline: 'border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 shadow-sm',
  ghost: 'hover:bg-slate-100 text-slate-700',
  secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200',
};

const sizeClasses: Record<string, string> = {
  sm: 'h-9 px-4 text-xs font-semibold rounded-xl',
  default: 'h-11 px-5 text-sm font-bold rounded-xl',
  lg: 'h-12 px-7 text-base font-bold rounded-2xl',
};

export function MagneticButton({
  children,
  href,
  onClick,
  variant = 'default',
  size = 'default',
  className,
  style,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.25, y: y * 0.25 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const classes = cn(
    'inline-flex items-center justify-center whitespace-nowrap font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none active:scale-95',
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const motionProps = {
    animate: { x: position.x, y: position.y },
    transition: { type: 'spring' as const, stiffness: 250, damping: 20, mass: 0.1 },
  };

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link
          ref={ref as React.RefObject<HTMLAnchorElement>}
          href={href}
          className={classes}
          style={style}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={onClick}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div {...motionProps} className="inline-block">
      <button
        ref={ref as React.RefObject<HTMLButtonElement>}
        className={classes}
        style={style}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      >
        {children}
      </button>
    </motion.div>
  );
}
