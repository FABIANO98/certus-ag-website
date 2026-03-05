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
  Award,
  Factory,
  Building2,
  Package,
} from 'lucide-react';
import AnimateIn from '@/components/AnimateIn';
import SectionHeading from '@/components/SectionHeading';

/* ──────────────────────────────────────────────
   HERO SECTION
   ────────────────────────────────────────────── */

const headlineWords = 'Praezision in Kunststoff'.split(' ');

function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -top-[10%] -bottom-[10%]"
      >
        {/* Hero background image */}
        <Image
          src="/images/hero-cnc.png"
          alt="CNC-Maschine in der Werkstatt von Certus Kunststoff AG"
          fill
          className="object-cover"
          priority
        />

        {/* Decorative machinery-like geometric elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large circle  */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.06, scale: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
            className="absolute -right-40 top-1/4 h-[700px] w-[700px] rounded-full border border-white/20"
          />
          {/* Inner circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.04, scale: 1 }}
            transition={{ duration: 2.4, ease: 'easeOut', delay: 0.2 }}
            className="absolute -right-20 top-[30%] h-[500px] w-[500px] rounded-full border border-white/20"
          />
          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
          {/* Diagonal accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.6, ease: 'easeInOut', delay: 1 }}
            className="absolute top-[60%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent origin-left"
          />
          {/* Subtle blue glow */}
          <div className="absolute top-1/3 left-1/4 h-96 w-96 rounded-full bg-blue-500/[0.07] blur-[120px]" />
        </div>
      </motion.div>

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#0a1628]/90" />

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-base uppercase tracking-[0.35em] text-blue-300/80 mb-6 font-medium"
        >
          Certus Kunststoff AG &mdash; Seit 1973
        </motion.p>

        {/* Main headline - word by word reveal */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-none">
          {headlineWords.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
              <motion.span
                initial={{ y: '110%', rotateX: -30 }}
                animate={{ y: '0%', rotateX: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.5 + i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
              >
                {word === 'Praezision' ? (
                  <>Pr&auml;zision</>
                ) : (
                  word
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Accent line under headline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 h-[3px] w-24 bg-gradient-to-r from-blue-400 to-blue-600 origin-center"
        />

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          Seit &uuml;ber 50 Jahren Ihr zuverl&auml;ssiger Partner f&uuml;r
          technische Kunststoffteile und massgeschneiderten Apparatebau.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/dienstleistungen"
            className="group relative inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/25"
          >
            Unsere Leistungen
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="/kontakt"
            className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5"
          >
            Kontakt aufnehmen
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-gray-400">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   INTRO / ABOUT SECTION
   ────────────────────────────────────────────── */

function IntroSection() {
  const counterRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(counterRef, { once: true, amount: 0.5 });

  return (
    <section className="relative bg-white py-28 md:py-36 overflow-hidden">
      {/* Subtle top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Big number */}
          <div className="lg:col-span-4" ref={counterRef}>
            <AnimateIn direction="left">
              <div className="relative">
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.5 }
                  }
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="block text-[8rem] md:text-[10rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-800"
                >
                  50+
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="block text-xl md:text-2xl font-semibold text-gray-800 -mt-4"
                >
                  Jahre Erfahrung
                </motion.span>
                {/* Decorative accent */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="mt-4 h-[3px] w-16 bg-blue-600 origin-left"
                />
              </div>
            </AnimateIn>
          </div>

          {/* Right: Text */}
          <div className="lg:col-span-8">
            <AnimateIn direction="right" delay={0.2}>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                <span className="font-semibold text-gray-900">
                  Certus Kunststoff AG
                </span>{' '}
                ist seit 1973 Ihr verl&auml;sslicher Partner f&uuml;r technische
                Kunststoffkomponenten im Anlagen- und Maschinenbau. Von der
                Einzelteilfertigung bis zur Serie &ndash; wir fertigen
                Kunststoffteile nach Ihren Zeichnungen oder Mustern.
              </p>
            </AnimateIn>
            <AnimateIn direction="right" delay={0.4}>
              <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                Mit modernsten CNC-Maschinen, erfahrenen Fachkr&auml;ften und
                h&ouml;chsten Qualit&auml;tsanspr&uuml;chen liefern wir
                Pr&auml;zisionsteile, die begeistern &ndash; zuverl&auml;ssig,
                termingerecht und swiss made.
              </p>
            </AnimateIn>
            <AnimateIn direction="right" delay={0.6}>
              <Link
                href="/firma"
                className="group mt-8 inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Mehr &uuml;ber uns erfahren
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   SERVICES SECTION
   ────────────────────────────────────────────── */

const services = [
  {
    icon: Cog,
    title: 'CNC Fr\u00e4sen',
    description:
      'Hochpr\u00e4zise Fr\u00e4steile aus allen g\u00e4ngigen Kunststoffen. 3- und 5-Achs-Bearbeitung f\u00fcr komplexe Geometrien.',
  },
  {
    icon: CircleDot,
    title: 'CNC Drehen',
    description:
      'Drehteile von \u00D80.5 bis \u00D8500 mm. Pr\u00e4zise Fertigung in Einzel- und Serienfertigung.',
  },
  {
    icon: Wrench,
    title: 'Apparatebau',
    description:
      'Massgeschneiderte Apparate und Baugruppen f\u00fcr die Industrie. Von der Konstruktion bis zur Montage.',
  },
  {
    icon: Flame,
    title: 'Kunststoff-Schweissen',
    description:
      'Professionelles Schweissen von Thermoplasten. Heizwendel-, Heizelement- und Extrusionsschweissen.',
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const Icon = service.icon;

  return (
    <AnimateIn delay={index * 0.15}>
      <motion.div
        whileHover={{ y: -8, transition: { duration: 0.3, ease: 'easeOut' } }}
        className="group relative h-full bg-white rounded-2xl p-8 shadow-sm border border-gray-100 transition-shadow duration-500 hover:shadow-xl hover:shadow-blue-900/5"
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Icon */}
        <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
          <Icon className="w-6 h-6" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>

        {/* Description */}
        <p className="text-gray-500 leading-relaxed text-sm">
          {service.description}
        </p>

        {/* Arrow link */}
        <div className="mt-6 flex items-center text-blue-600 text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          Mehr erfahren
          <ArrowUpRight className="w-4 h-4 ml-1" />
        </div>
      </motion.div>
    </AnimateIn>
  );
}

function ServicesSection() {
  return (
    <section className="relative bg-[#f9fafb] py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          title="Unsere Dienstleistungen"
          subtitle="Hochpr&auml;zise Kunststoffbearbeitung mit modernster CNC-Technologie und &uuml;ber 50 Jahren Erfahrung."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        <AnimateIn delay={0.6}>
          <div className="mt-14 text-center">
            <Link
              href="/dienstleistungen"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-gray-900 px-8 py-4 text-sm font-semibold text-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white"
            >
              Alle Dienstleistungen
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   INDUSTRIES SECTION
   ────────────────────────────────────────────── */

const industries = [
  { icon: FlaskConical, name: 'Labor' },
  { icon: Pill, name: 'Pharma & Chemie' },
  { icon: UtensilsCrossed, name: 'Lebensmittelproduktion' },
  { icon: Settings, name: 'Maschinenbau' },
  { icon: Zap, name: 'Hochspannungstechnik' },
  { icon: Truck, name: 'Transporttechnik' },
  { icon: Package, name: 'F\u00f6rdertechnik' },
  { icon: Building2, name: 'Bau & Geb\u00e4udetechnik' },
];

function IndustriesSection() {
  return (
    <section className="relative bg-white py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          title="Branchen die wir bedienen"
          subtitle="Unsere Kunststoffteile kommen in den unterschiedlichsten Industrien zum Einsatz."
        />

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <AnimateIn key={industry.name} delay={i * 0.08}>
                <motion.div
                  whileHover={{
                    scale: 1.04,
                    transition: { duration: 0.25 },
                  }}
                  className="group flex flex-col items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50/50 p-6 md:p-8 text-center transition-all duration-300 hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-md cursor-default"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white text-gray-600 shadow-sm group-hover:text-blue-600 group-hover:shadow-md transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                    {industry.name}
                  </span>
                </motion.div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   CTA / QUALITY SECTION
   ────────────────────────────────────────────── */

const stats = [
  { value: '50+', label: 'Jahre Erfahrung' },
  { value: '1000+', label: 'Projekte realisiert' },
  { value: '100%', label: 'Swiss Made' },
];

function QualitySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="relative bg-[#0a1628] py-28 md:py-36 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-blue-500/[0.04] blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center"
      >
        <SectionHeading
          title="Qualit&auml;t die &uuml;berzeugt"
          subtitle="Jedes Teil, das unser Haus verl&auml;sst, erf&uuml;llt h&ouml;chste Qualit&auml;tsstandards &ndash; pr&auml;zise, zuverl&auml;ssig und termingerecht."
          light
        />

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{
                duration: 0.7,
                delay: 0.3 + i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col items-center"
            >
              <span className="text-5xl md:text-6xl font-black text-white tracking-tight">
                {stat.value}
              </span>
              <span className="mt-2 text-sm text-blue-300/70 font-medium uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-14"
        >
          <Link
            href="/kontakt"
            className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-10 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/25"
          >
            Projekt anfragen
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   REFERENZEN PREVIEW SECTION
   ────────────────────────────────────────────── */

const referenzen = [
  {
    title: 'Laborger\u00e4te-Komponenten',
    category: 'Labor & Pharma',
    gradient: 'from-blue-600 to-blue-800',
    image: '/images/referenz-pharma.png',
    alt: 'Pharmazeutischer Apparatebau aus Kunststoff',
  },
  {
    title: 'Industrieanlage-Baugruppe',
    category: 'Maschinenbau',
    gradient: 'from-slate-600 to-slate-800',
    image: '/images/workshop-overview.png',
    alt: 'Werkstattübersicht Certus Kunststoff AG',
  },
  {
    title: 'Hochspannungs-Isolatoren',
    category: 'Hochspannungstechnik',
    gradient: 'from-indigo-600 to-indigo-800',
    image: '/images/materials.png',
    alt: 'Kunststoff-Materialproben für Isolationstechnik',
  },
];

function ReferenzenSection() {
  return (
    <section className="relative bg-white py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          title="Ausgew&auml;hlte Referenzen"
          subtitle="Ein Auszug aus unseren erfolgreich realisierten Projekten."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {referenzen.map((ref, i) => (
            <AnimateIn key={ref.title} delay={i * 0.15}>
              <motion.div
                whileHover={{
                  y: -6,
                  transition: { duration: 0.3, ease: 'easeOut' },
                }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Project image */}
                <Image
                  src={ref.image}
                  alt={ref.alt}
                  fill
                  className="object-cover"
                />

                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${ref.gradient} opacity-40`}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/20 transition-colors duration-500" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-xs uppercase tracking-wider text-blue-300 font-semibold">
                    {ref.category}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-white">
                    {ref.title}
                  </h3>
                </div>

                {/* Hover arrow */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.5}>
          <div className="mt-14 text-center">
            <Link
              href="/referenzen"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-gray-900 px-8 py-4 text-sm font-semibold text-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white"
            >
              Alle Referenzen
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   PAGE EXPORT
   ────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <IndustriesSection />
      <QualitySection />
      <ReferenzenSection />
    </>
  );
}
