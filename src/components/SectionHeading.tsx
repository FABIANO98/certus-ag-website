'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
  overline?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  light = false,
  centered = true,
  overline,
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className={centered ? 'text-center' : ''}>
      {/* Overline label */}
      {overline && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className={`inline-block text-xs font-semibold uppercase tracking-[0.25em] mb-4 ${
            light ? 'text-blue-400' : 'text-blue-600'
          }`}
        >
          {overline}
        </motion.span>
      )}

      {/* Animated accent bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`h-[3px] w-12 bg-gradient-to-r from-blue-600 to-blue-400 mb-5 origin-left ${
          centered ? 'mx-auto origin-center' : ''
        }`}
      />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] ${
          light ? 'text-white' : 'text-[#0a1628]'
        }`}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className={`text-lg md:text-xl mt-5 max-w-2xl leading-relaxed ${
            light ? 'text-gray-400' : 'text-gray-500'
          } ${centered ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
