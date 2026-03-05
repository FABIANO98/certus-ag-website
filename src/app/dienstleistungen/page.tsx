'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimateIn from '@/components/AnimateIn';
import SectionHeading from '@/components/SectionHeading';
import {
  Cog,
  CircleDot,
  Flame,
  Container,
  Wrench,
  Factory,
  MessageSquare,
  Users,
  Settings,
  Truck,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const services = [
  {
    id: 'cnc-fraesen',
    title: 'CNC Frasen',
    icon: Cog,
    description:
      'Prazise CNC-Frasteile aus allen gangigen Kunststoffen. Unsere modernen 3- und 5-Achs-Bearbeitungszentren ermoglichen die Fertigung komplexer Geometrien mit hochster Genauigkeit und Oberflachenqualitat.',
    capabilities: [
      '3-Achs- und 5-Achs-Simultanbearbeitung',
      'Toleranzen bis +/- 0.01 mm',
      'Alle technischen Kunststoffe (PE, PP, POM, PEEK, PVDF u.v.m.)',
      'Prototypen und Serienteile',
      'CAD/CAM-gestutzte Programmierung',
    ],
    gradient: 'from-blue-600 to-blue-800',
  },
  {
    id: 'cnc-drehen',
    title: 'CNC Drehen',
    icon: CircleDot,
    description:
      'Hochprazise Drehteile aus technischen Kunststoffen. Von der Einzelteilanfertigung bis zur Serienproduktion liefern wir Drehteile in gleichbleibend hoher Qualitat.',
    capabilities: [
      'Durchmesser von 5 mm bis 500 mm',
      'Hochprazise Rundlaufgenauigkeit',
      'Innen- und Aussenbearbeitung',
      'Gewinde, Nuten und Einstiche',
      'Einzelteile und Serien',
    ],
    gradient: 'from-indigo-600 to-indigo-800',
  },
  {
    id: 'kunststoff-schweissen',
    title: 'Kunststoff-Schweissen',
    icon: Flame,
    description:
      'Fachgerechtes Verschweissen von thermoplastischen Kunststoffen. Wir beherrschen alle gaengigen Schweissverfahren und garantieren dichte, belastbare Verbindungen.',
    capabilities: [
      'Heizelementschweissen',
      'Heissgasschweissen',
      'Extrusionsschweissen',
      'Pruefung nach DVS-Richtlinien',
      'Zertifizierte Schweisser',
    ],
    gradient: 'from-orange-500 to-red-600',
  },
  {
    id: 'apparatebau',
    title: 'Apparatebau',
    icon: Container,
    description:
      'Massgeschneiderte Apparate und Behalter aus Kunststoff. Ob fur Chemie, Pharma oder Industrie -- wir planen, konstruieren und fertigen nach Ihren Anforderungen.',
    capabilities: [
      'Behalter, Tanks und Wannen',
      'Rohrleitungssysteme',
      'Abluft- und Absauganlagen',
      'Galvanikanlagen',
      'Individuelle Sonderkonstruktionen',
    ],
    gradient: 'from-emerald-600 to-teal-700',
  },
  {
    id: 'kunststoffbearbeitung',
    title: 'Kunststoffbearbeitung',
    icon: Wrench,
    description:
      'Alle klassischen Bearbeitungsverfahren fur Kunststoffe. Von einfachen Zuschnitten bis zu komplexen Baugruppen -- wir setzen Ihre Anforderungen prazise um.',
    capabilities: [
      'Sagen, Bohren, Biegen',
      'Kleben und Fugen',
      'Warmumformung',
      'Polieren und Glanzbearbeitung',
      'Baugruppenmontage',
    ],
    gradient: 'from-violet-600 to-purple-800',
  },
  {
    id: 'lohnfertigung',
    title: 'Lohnfertigung',
    icon: Factory,
    description:
      'Flexible Lohnfertigung und Ersatzteilservice. Vom Prototyp bis zur Serie -- wir sind Ihr verlasslicher Partner fur die Auslagerung Ihrer Kunststoffbearbeitung.',
    capabilities: [
      'Prototypenfertigung',
      'Klein- und Grossserien',
      'Ersatzteilservice',
      'Just-in-time-Lieferung',
      'Lager- und Logistikservice',
    ],
    gradient: 'from-slate-600 to-slate-800',
  },
];

const processSteps = [
  {
    icon: MessageSquare,
    title: 'Anfrage',
    description: 'Sie schildern uns Ihr Projekt -- per Telefon, E-Mail oder mit Ihren CAD-Daten.',
  },
  {
    icon: Users,
    title: 'Beratung',
    description:
      'Unsere Fachspezialisten beraten Sie zu Material, Verfahren und Machbarkeit.',
  },
  {
    icon: Settings,
    title: 'Fertigung',
    description:
      'Prazise Umsetzung mit modernsten Maschinen und laufender Qualitatskontrolle.',
  },
  {
    icon: Truck,
    title: 'Lieferung',
    description: 'Termingerechte Lieferung -- zuverlassig und sorgfaltig verpackt.',
  },
];

export default function DienstleistungenPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#111d35] to-[#0a1628]">
        {/* Subtle grid pattern overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* Radial glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center">
          <AnimateIn>
            <div className="mx-auto mb-6 h-[3px] w-[60px] bg-blue-500" />
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Unsere Dienstleistungen
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              Von der Einzelteilfertigung bis zur Serienproduktion -- wir bieten
              das komplette Spektrum der Kunststoffverarbeitung.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── SERVICES DETAIL (alternating layout) ── */}
      <section className="bg-white">
        {services.map((service, index) => {
          const isReversed = index % 2 !== 0;
          const Icon = service.icon;

          return (
            <div
              key={service.id}
              className={`border-b border-gray-100 last:border-b-0 ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'
              }`}
            >
              <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
                <div
                  className={`flex flex-col items-center gap-12 lg:gap-20 ${
                    isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
                  }`}
                >
                  {/* Image placeholder */}
                  <AnimateIn
                    className="w-full lg:w-1/2"
                    direction={isReversed ? 'right' : 'left'}
                    delay={0.1}
                  >
                    <div
                      className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br ${service.gradient} shadow-xl`}
                    >
                      {/* Decorative elements inside placeholder */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon className="h-24 w-24 text-white/20" strokeWidth={1} />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  </AnimateIn>

                  {/* Text content */}
                  <AnimateIn
                    className="w-full lg:w-1/2"
                    direction={isReversed ? 'left' : 'right'}
                    delay={0.2}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${service.gradient} shadow-sm`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-[#0a1628] sm:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
                      {service.description}
                    </p>
                    <ul className="mt-8 space-y-3">
                      {service.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                          <span className="text-sm text-gray-700 sm:text-base">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </AnimateIn>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ── PROCESS SECTION ── */}
      <section className="bg-gray-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading
            title="Unser Prozess"
            subtitle="Von der ersten Anfrage bis zur Lieferung -- vier Schritte zu Ihrem fertigen Kunststoffteil."
          />

          <div className="relative mt-20">
            {/* Connecting line (desktop) */}
            <div className="absolute left-0 right-0 top-[52px] hidden h-[2px] bg-gradient-to-r from-transparent via-blue-200 to-transparent lg:block" />

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {processSteps.map((step, index) => {
                const StepIcon = step.icon;
                return (
                  <AnimateIn key={step.title} delay={index * 0.15}>
                    <div className="relative flex flex-col items-center text-center">
                      {/* Step number circle */}
                      <div className="relative z-10 mb-6 flex h-[104px] w-[104px] items-center justify-center">
                        <div className="absolute inset-0 rounded-full bg-white shadow-md" />
                        <motion.div
                          className="absolute inset-[3px] rounded-full border-2 border-blue-600"
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.3 + index * 0.15, duration: 0.4 }}
                          viewport={{ once: true }}
                        />
                        <div className="relative flex flex-col items-center">
                          <StepIcon className="h-7 w-7 text-blue-600" />
                          <span className="mt-1 text-xs font-bold text-gray-400">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                      </div>

                      {/* Vertical connector (mobile) */}
                      {index < processSteps.length - 1 && (
                        <div className="absolute -bottom-5 left-1/2 h-10 w-[2px] -translate-x-1/2 bg-blue-200 sm:hidden" />
                      )}

                      <h3 className="text-lg font-semibold text-[#0a1628]">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-[240px] text-sm leading-relaxed text-gray-500">
                        {step.description}
                      </p>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#111d35] to-[#0a1628] py-24 lg:py-32">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-indigo-600/10 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <AnimateIn>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Projekt besprechen?
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-gray-300">
              Kontaktieren Sie uns fur eine unverbindliche Beratung. Wir freuen
              uns, Ihr nachstes Projekt gemeinsam zu realisieren.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/kontakt"
                className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-600/30"
              >
                Kontakt aufnehmen
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="tel:+41614011818"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5"
              >
                +41 61 401 18 18
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
