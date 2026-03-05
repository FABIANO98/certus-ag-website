'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimateIn from '@/components/AnimateIn';
import SectionHeading from '@/components/SectionHeading';

export default function FirmaPage() {
  return (
    <>
      {/* ───────────────────────── PAGE HERO ───────────────────────── */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#122444] to-[#1e3a5f]">
        {/* Subtle grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Decorative gradient orb */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="mb-6 inline-block text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
              Certus Kunststoff AG
            </span>
            <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
              Über uns
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
              Seit 1973 steht Certus Kunststoff AG für Qualität, Präzision und
              Zuverlässigkeit.
            </p>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ───────────────────────── COMPANY STORY ───────────────────────── */}
      <section className="bg-white py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Text column */}
            <AnimateIn direction="left">
              <div>
                <div className="mb-4 h-[3px] w-[60px] bg-blue-600" />
                <h2 className="text-4xl font-bold tracking-tight text-[#0a1628] md:text-5xl">
                  Unsere Geschichte
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-gray-600">
                  Was 1973 als kleine Werkstatt begann, ist heute ein moderner
                  Fertigungsbetrieb mit umfassendem Know-how in der
                  Kunststoffverarbeitung. Die Certus Kunststoff AG hat sich über
                  die Jahrzehnte als zuverlässiger Partner für technische
                  Kunststoffteile in der Schweiz etabliert.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  Wir sind spezialisiert auf technische Kunststoffkomponenten für
                  den Anlagen- und Maschinenbau — vom Prototyp bis zur
                  Serienproduktion. Unsere Kunden aus der Region Basel und der
                  Nordwestschweiz sowie aus den Kantonen Aargau, Bern, Solothurn
                  und Zürich vertrauen auf unsere Erfahrung und Kompetenz.
                </p>
              </div>
            </AnimateIn>

            {/* Image placeholder */}
            <AnimateIn direction="right" delay={0.15}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#0a1628] via-[#1e3a5f] to-blue-600 shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                      <svg
                        className="h-8 w-8 text-white/60"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                        />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-white/40">
                      Firmenbild
                    </p>
                  </div>
                </div>
                {/* Decorative glow */}
                <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-blue-400/20 blur-[80px]" />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ───────────────────────── VALUES ───────────────────────── */}
      <section className="bg-[#f9fafb] py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionHeading
            title="Unsere Werte"
            subtitle="Drei Grundpfeiler, die unser Handeln seit über 50 Jahren leiten."
          />

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Präzision',
                description: 'Höchste Genauigkeit in jedem Fertigungsschritt',
                icon: (
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                title: 'Qualität',
                description:
                  'Kompromisslose Qualität seit über 50 Jahren',
                icon: (
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                ),
              },
              {
                title: 'Zuverlässigkeit',
                description: 'Termingerecht und partnerschaftlich',
                icon: (
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                ),
              },
            ].map((value, index) => (
              <AnimateIn key={value.title} delay={index * 0.1}>
                <div className="group rounded-2xl border border-gray-100 bg-white p-10 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-100">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-[#0a1628]">
                    {value.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-gray-500">
                    {value.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── TEAM ───────────────────────── */}
      <section className="bg-white py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionHeading
            title="Unser Team"
            subtitle="Die Menschen hinter Certus Kunststoff AG."
          />

          <div className="mx-auto mt-16 grid max-w-3xl gap-12 md:grid-cols-2">
            {[
              {
                name: 'Elisabeth Kölliker',
                role: 'Inhaberin',
              },
              {
                name: 'Daniel Kölliker',
                role: 'Geschäftsleitung',
              },
            ].map((member, index) => (
              <AnimateIn key={member.name} delay={index * 0.12}>
                <div className="flex flex-col items-center text-center">
                  {/* Photo placeholder */}
                  <div className="relative mb-8 h-48 w-48 overflow-hidden rounded-full bg-gradient-to-br from-[#0a1628] via-[#1e3a5f] to-blue-600 shadow-xl">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        className="h-20 w-20 text-white/20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold tracking-tight text-[#0a1628]">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-base font-medium text-blue-600">
                    {member.role}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── LOCATION ───────────────────────── */}
      <section className="bg-[#f9fafb] py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Map placeholder */}
            <AnimateIn direction="left">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
                      <svg
                        className="h-8 w-8 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-gray-400">
                      Kartenansicht
                    </p>
                  </div>
                </div>
              </div>
            </AnimateIn>

            {/* Address & text */}
            <AnimateIn direction="right" delay={0.15}>
              <div>
                <div className="mb-4 h-[3px] w-[60px] bg-blue-600" />
                <h2 className="text-4xl font-bold tracking-tight text-[#0a1628] md:text-5xl">
                  Standort
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-gray-600">
                  Strategisch in Birsfelden bei Basel gelegen, im Herzen der
                  Nordwestschweiz.
                </p>

                <div className="mt-10 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[#0a1628]">Adresse</p>
                      <p className="mt-1 leading-relaxed text-gray-500">
                        Certus Kunststoff AG
                        <br />
                        Sternenfeldstrasse 42
                        <br />
                        4127 Birsfelden
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[#0a1628]">Region</p>
                      <p className="mt-1 leading-relaxed text-gray-500">
                        Nordwestschweiz, Region Basel, Aargau, Bern, Solothurn,
                        Zürich
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2 rounded-full bg-[#0a1628] px-8 py-4 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:bg-[#122444] hover:shadow-lg"
                  >
                    Kontakt aufnehmen
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
