'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from 'framer-motion';
import {
  Cog,
  CircleDot,
  Wrench,
  Flame,
  FlaskConical,
  Pill,
  UtensilsCrossed,
  Settings,
  Zap,
  Truck,
  ArrowUpRight,
  ChevronDown,
  Package,
  Building2,
} from 'lucide-react';
import AnimateIn from '@/components/AnimateIn';
import SectionHeading from '@/components/SectionHeading';
import { useTranslation } from '@/i18n/LanguageContext';

/* ══════════════════════════════════════════════
   HERO SECTION — Full-screen cinematic
   ══════════════════════════════════════════════ */

function HeroSection() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  const headlineWords = (t('hero.headline') as string).split(' ');

  return (
    <section
      ref={ref}
      className="relative h-[100dvh] w-full overflow-hidden flex items-center justify-center"
    >
      {/* Parallax background with zoom */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 -top-[15%] -bottom-[15%]"
      >
        <Image
          src="/images/hero-cnc.png"
          alt="CNC-Maschine in der Werkstatt von Certus Kunststoff AG"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </motion.div>

      {/* Cinematic overlay — deeper, richer */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/80 via-[#0a1628]/50 to-[#0a1628]/95" />

      {/* Animated grain texture for premium feel */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
      }} />

      {/* Geometric accent elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Thin horizontal lines */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 1.5 }}
          className="absolute top-[35%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent origin-left"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 1.8 }}
          className="absolute top-[65%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/10 to-transparent origin-right"
        />
        {/* Subtle corner frames */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2 }}
          className="absolute top-[15%] left-[8%] w-20 h-20 border-l border-t border-white/10"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.2 }}
          className="absolute bottom-[15%] right-[8%] w-20 h-20 border-r border-b border-white/10"
        />
      </div>

      {/* Content */}
      <motion.div style={{ opacity, y: contentY }} className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Overline with animated border */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="inline-flex items-center gap-3 mb-8"
        >
          <span className="h-px w-8 bg-blue-400/60" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-blue-300/90 font-medium">
            {t('hero.overline')}
          </span>
          <span className="h-px w-8 bg-blue-400/60" />
        </motion.div>

        {/* Main headline — word-by-word reveal with clip */}
        <h1 className="text-[clamp(2.8rem,8vw,7rem)] font-bold tracking-[-0.03em] text-white leading-[0.95]">
          {headlineWords.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden mr-[0.2em] last:mr-0">
              <motion.span
                initial={{ y: '120%' }}
                animate={{ y: '0%' }}
                transition={{
                  duration: 1,
                  delay: 0.5 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Animated gradient line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-8 h-[2px] w-20 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 origin-center"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-8 text-base sm:text-lg md:text-xl text-gray-300/90 max-w-xl mx-auto leading-relaxed font-light"
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.9 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/dienstleistungen"
            className="group relative inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#0a1628] transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:scale-[1.02]"
          >
            {t('hero.cta_primary')}
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="/kontakt"
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/25 px-8 py-4 text-sm font-semibold text-white/90 transition-all duration-300 hover:border-white/50 hover:bg-white/[0.06] hover:text-white"
          >
            {t('hero.cta_secondary')}
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-medium">
          {t('hero.scroll')}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   INTRO SECTION — Asymmetric editorial layout
   ══════════════════════════════════════════════ */

function IntroSection() {
  const { t } = useTranslation();
  const counterRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(counterRef, { once: true, amount: 0.4 });

  return (
    <section className="relative bg-white py-32 md:py-44 overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50/80 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Big number with editorial treatment */}
          <div ref={counterRef}>
            <AnimateIn direction="left">
              <div className="relative">
                {/* Background decorative number */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 0.04, scale: 1 } : {}}
                  transition={{ duration: 1 }}
                  className="absolute -top-16 -left-8 text-[16rem] md:text-[20rem] font-black leading-none text-[#0a1628] select-none pointer-events-none"
                >
                  50
                </motion.div>

                {/* Foreground number */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <span className="block text-8xl md:text-9xl font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#0a1628] to-[#0a1628]/60">
                    {t('intro.years')}
                  </span>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="h-[3px] w-10 bg-blue-600 rounded-full" />
                    <span className="text-lg md:text-xl font-semibold text-[#0a1628]">
                      {t('intro.years_label')}
                    </span>
                  </div>
                </motion.div>
              </div>
            </AnimateIn>
          </div>

          {/* Right: Descriptive copy */}
          <div>
            <AnimateIn direction="right" delay={0.15}>
              <p className="text-lg md:text-xl text-gray-600 leading-[1.8] font-light">
                <span className="font-semibold text-[#0a1628]">
                  Certus Kunststoff AG
                </span>{' '}
                {t('intro.description_1')?.toString().replace('Certus Kunststoff AG ', '').replace('ist seit 1973 ', 'ist seit 1973 ')}
              </p>
            </AnimateIn>
            <AnimateIn direction="right" delay={0.3}>
              <p className="mt-6 text-lg md:text-xl text-gray-600 leading-[1.8] font-light">
                {t('intro.description_2')}
              </p>
            </AnimateIn>
            <AnimateIn direction="right" delay={0.45}>
              <Link
                href="/firma"
                className="group mt-10 inline-flex items-center gap-3 text-[#0a1628] font-semibold text-sm uppercase tracking-wider hover:text-blue-600 transition-colors duration-300"
              >
                <span className="h-px w-8 bg-current transition-all duration-300 group-hover:w-12" />
                {t('intro.link')}
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   SERVICES SECTION — Large image cards
   ══════════════════════════════════════════════ */

function ServicesSection() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Cog,
      titleKey: 'services.cnc_fraesen',
      descKey: 'services.cnc_fraesen_desc',
      image: '/images/cnc-fraesen.png',
      href: '/dienstleistungen',
    },
    {
      icon: CircleDot,
      titleKey: 'services.cnc_drehen',
      descKey: 'services.cnc_drehen_desc',
      image: '/images/cnc-drehen.png',
      href: '/dienstleistungen',
    },
    {
      icon: Wrench,
      titleKey: 'services.apparatebau',
      descKey: 'services.apparatebau_desc',
      image: '/images/apparatebau.png',
      href: '/dienstleistungen',
    },
    {
      icon: Flame,
      titleKey: 'services.schweissen',
      descKey: 'services.schweissen_desc',
      image: '/images/schweissen.png',
      href: '/dienstleistungen',
    },
  ];

  return (
    <section className="relative bg-[#fafafa] py-32 md:py-44">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#0a1628 1px, transparent 1px), linear-gradient(90deg, #0a1628 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          overline={t('services.title') as string}
          title={t('services.title') as string}
          subtitle={t('services.subtitle') as string}
        />

        {/* Service cards grid — 2x2 bento layout */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimateIn key={service.titleKey} delay={i * 0.1}>
                <Link href={service.href}>
                  <motion.div
                    whileHover={{ y: -4, transition: { duration: 0.35, ease: 'easeOut' } }}
                    className="group relative h-full min-h-[320px] md:min-h-[380px] rounded-2xl overflow-hidden cursor-pointer"
                  >
                    {/* Background image */}
                    <Image
                      src={service.image}
                      alt={t(service.titleKey) as string}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/60 to-[#0a1628]/20 transition-all duration-500 group-hover:from-[#0a1628]/95 group-hover:via-[#0a1628]/50" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                      {/* Icon */}
                      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm text-white border border-white/10 transition-all duration-300 group-hover:bg-blue-600 group-hover:border-blue-600">
                        <Icon className="w-5 h-5" />
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        {t(service.titleKey)}
                      </h3>

                      <p className="text-gray-300/80 leading-relaxed text-sm md:text-base max-w-md font-light">
                        {t(service.descKey)}
                      </p>

                      {/* Hover arrow */}
                      <div className="mt-5 flex items-center gap-2 text-white/70 text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        {t('common.more')}
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Top-right corner accent */}
                    <div className="absolute top-6 right-6 w-12 h-12 border-r-2 border-t-2 border-white/0 group-hover:border-white/20 transition-all duration-500 rounded-tr-lg" />
                  </motion.div>
                </Link>
              </AnimateIn>
            );
          })}
        </div>

        <AnimateIn delay={0.5}>
          <div className="mt-16 text-center">
            <Link
              href="/dienstleistungen"
              className="group inline-flex items-center gap-3 rounded-full border-2 border-[#0a1628] px-10 py-4 text-sm font-semibold text-[#0a1628] transition-all duration-300 hover:bg-[#0a1628] hover:text-white"
            >
              {t('common.all_services')}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   INDUSTRIES SECTION — Visual grid with color
   ══════════════════════════════════════════════ */

function IndustriesSection() {
  const { t } = useTranslation();

  const industries = [
    { icon: FlaskConical, key: 'industries.labor', color: 'from-violet-500 to-purple-600' },
    { icon: Pill, key: 'industries.pharma', color: 'from-emerald-500 to-teal-600' },
    { icon: UtensilsCrossed, key: 'industries.lebensmittel', color: 'from-orange-500 to-red-500' },
    { icon: Settings, key: 'industries.maschinenbau', color: 'from-blue-500 to-indigo-600' },
    { icon: Zap, key: 'industries.hochspannung', color: 'from-amber-500 to-orange-600' },
    { icon: Truck, key: 'industries.transport', color: 'from-cyan-500 to-blue-600' },
    { icon: Package, key: 'industries.foerder', color: 'from-rose-500 to-pink-600' },
    { icon: Building2, key: 'industries.bau', color: 'from-slate-500 to-gray-700' },
  ];

  return (
    <section className="relative bg-white py-32 md:py-44 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          title={t('industries.title') as string}
          subtitle={t('industries.subtitle') as string}
        />

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <AnimateIn key={industry.key} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="group relative flex flex-col items-center gap-5 rounded-2xl bg-white border border-gray-100 p-7 md:p-9 text-center transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/60 hover:border-gray-200 cursor-default"
                >
                  {/* Gradient icon circle */}
                  <div className={`flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${industry.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="w-6 h-6 md:w-7 md:h-7" />
                  </div>

                  <span className="text-sm md:text-base font-semibold text-[#0a1628] leading-tight">
                    {t(industry.key)}
                  </span>

                  {/* Bottom accent on hover */}
                  <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-blue-600/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </motion.div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   QUALITY STATS SECTION — Dark cinematic
   ══════════════════════════════════════════════ */

function QualitySection() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { value: '50+', labelKey: 'quality.years' },
    { value: '1000+', labelKey: 'quality.projects' },
    { value: '100%', labelKey: 'quality.swiss' },
  ];

  return (
    <section className="relative bg-[#0a1628] py-32 md:py-44 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full bg-blue-500/[0.03] blur-[120px]" />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />
        {/* Corner accents */}
        <div className="absolute top-12 left-12 w-24 h-24 border-l border-t border-white/5 hidden md:block" />
        <div className="absolute bottom-12 right-12 w-24 h-24 border-r border-b border-white/5 hidden md:block" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          title={t('quality.title') as string}
          subtitle={t('quality.subtitle') as string}
          light
        />

        {/* Stats — large and dramatic */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-8 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.labelKey}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.3 + i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col items-center text-center"
            >
              <span className="text-6xl sm:text-7xl md:text-8xl font-black text-white tracking-tighter leading-none">
                {stat.value}
              </span>
              <div className="mt-4 h-[2px] w-8 bg-blue-500/50 rounded-full" />
              <span className="mt-3 text-sm text-blue-300/60 font-medium uppercase tracking-[0.2em]">
                {t(stat.labelKey)}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-16 text-center"
        >
          <Link
            href="/kontakt"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-10 py-4 text-sm font-semibold text-[#0a1628] transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,255,255,0.12)] hover:scale-[1.02]"
          >
            {t('quality.cta')}
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   SHOWCASE / MATERIAL STRIP — Full-width image
   ══════════════════════════════════════════════ */

function ShowcaseStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section ref={ref} className="relative h-[50vh] md:h-[60vh] overflow-hidden">
      <motion.div style={{ y: imgY }} className="absolute inset-0 -top-[15%] -bottom-[15%]">
        <Image
          src="/images/workshop-overview.png"
          alt="Certus Kunststoff AG Werkstatt"
          fill
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/70 via-[#0a1628]/30 to-transparent" />

      {/* Floating label */}
      <AnimateIn className="absolute bottom-10 left-8 md:left-16">
        <div className="flex items-center gap-4">
          <div className="h-px w-12 bg-white/40" />
          <span className="text-xs uppercase tracking-[0.3em] text-white/70 font-medium">
            Swiss Precision Manufacturing
          </span>
        </div>
      </AnimateIn>
    </section>
  );
}

/* ══════════════════════════════════════════════
   REFERENZEN SECTION — Cinematic cards
   ══════════════════════════════════════════════ */

function ReferenzenSection() {
  const { t } = useTranslation();

  const referenzen = [
    {
      title: 'Laborger\u00e4te-Komponenten',
      category: 'Labor & Pharma',
      image: '/images/referenz-pharma.png',
      alt: 'Pharmazeutischer Apparatebau aus Kunststoff',
    },
    {
      title: 'Pr\u00e4zisions-Fr\u00e4steile',
      category: 'Maschinenbau',
      image: '/images/produkte-overview.png',
      alt: 'Pr\u00e4zisions-Kunststoffteile',
    },
    {
      title: 'Hochspannungs-Isolatoren',
      category: 'Hochspannungstechnik',
      image: '/images/materials.png',
      alt: 'Kunststoff-Materialien und Isolatoren',
    },
  ];

  return (
    <section className="relative bg-[#fafafa] py-32 md:py-44">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          title={t('referenzen.title') as string}
          subtitle={t('referenzen.subtitle') as string}
        />

        {/* Bento-style grid: 1 large + 2 stacked */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-5 gap-5">
          {/* Large featured card */}
          <AnimateIn className="md:col-span-3">
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.35 } }}
              className="group relative aspect-[4/3] md:aspect-auto md:h-full md:min-h-[480px] rounded-2xl overflow-hidden cursor-pointer"
            >
              <Image
                src={referenzen[0].image}
                alt={referenzen[0].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/30 to-transparent" />
              <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-500" />

              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-blue-300 font-semibold mb-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm">
                  {referenzen[0].category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {referenzen[0].title}
                </h3>
              </div>

              <div className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/10">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </div>
            </motion.div>
          </AnimateIn>

          {/* Two stacked cards */}
          <div className="md:col-span-2 flex flex-col gap-5">
            {referenzen.slice(1).map((ref, i) => (
              <AnimateIn key={ref.title} delay={0.15 + i * 0.1} className="flex-1">
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.35 } }}
                  className="group relative h-full min-h-[220px] rounded-2xl overflow-hidden cursor-pointer"
                >
                  <Image
                    src={ref.image}
                    alt={ref.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/40 to-[#0a1628]/10" />
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-500" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                    <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-blue-300 font-semibold mb-1.5 px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-sm">
                      {ref.category}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-white">
                      {ref.title}
                    </h3>
                  </div>

                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/10">
                    <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </motion.div>
              </AnimateIn>
            ))}
          </div>
        </div>

        <AnimateIn delay={0.4}>
          <div className="mt-16 text-center">
            <Link
              href="/referenzen"
              className="group inline-flex items-center gap-3 rounded-full border-2 border-[#0a1628] px-10 py-4 text-sm font-semibold text-[#0a1628] transition-all duration-300 hover:bg-[#0a1628] hover:text-white"
            >
              {t('common.all_references')}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   FINAL CTA SECTION — Elegant close
   ══════════════════════════════════════════════ */

function FinalCTA() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section className="relative bg-white py-28 md:py-36 overflow-hidden">
      <div ref={ref} className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mx-auto mb-6 h-[2px] w-12 bg-blue-600 rounded-full" />
          <h2 className="text-3xl md:text-5xl font-bold text-[#0a1628] tracking-tight leading-tight">
            {t('hero.cta_secondary')}
          </h2>
          <p className="mt-5 text-lg text-gray-500 max-w-lg mx-auto font-light leading-relaxed">
            {t('hero.subtitle')}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kontakt"
              className="group inline-flex items-center gap-3 rounded-full bg-[#0a1628] px-10 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0a1628]/90 hover:shadow-xl hover:shadow-[#0a1628]/10 hover:scale-[1.02]"
            >
              {t('common.contact')}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/dienstleistungen"
              className="group inline-flex items-center gap-3 text-[#0a1628] font-semibold text-sm hover:text-blue-600 transition-colors"
            >
              <span className="h-px w-6 bg-current transition-all duration-300 group-hover:w-10" />
              {t('common.all_services')}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   PAGE EXPORT
   ══════════════════════════════════════════════ */

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <IndustriesSection />
      <QualitySection />
      <ShowcaseStrip />
      <ReferenzenSection />
      <FinalCTA />
    </>
  );
}
