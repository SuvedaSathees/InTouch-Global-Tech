'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Ultra-fast GPU springs without React re-renders
  const springX = useSpring(mouseX, { stiffness: 800, damping: 35, mass: 0.1 });
  const springY = useSpring(mouseY, { stiffness: 800, damping: 35, mass: 0.1 });

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;
    setMounted(true);

    let rafId: number;
    const onMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      });
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
        willChange: 'transform',
      }}
      className="pointer-events-none fixed top-0 left-0 z-50 hidden md:block"
    >
      <div className="h-4 w-4 rounded-full border border-blue-600/60 bg-blue-500/20 backdrop-blur-[1px]" />
    </motion.div>
  );
}
