"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  Monitor,
  GraduationCap,
  Award,
  Mail,
  ArrowRight,
  Briefcase,
} from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import SectionHeading from "@/components/SectionHeading";

export default function JobsPage() {
  const benefits = [
    {
      icon: Users,
      title: "Famili\u00e4res Arbeitsumfeld",
      description:
        "Ein kleines, eingespieltes Team, in dem jeder z\u00e4hlt. Flache Hierarchien und offene Kommunikation pr\u00e4gen unseren Arbeitsalltag.",
    },
    {
      icon: Monitor,
      title: "Moderne Infrastruktur",
      description:
        "Arbeiten Sie mit modernen CNC-Maschinen und zeitgem\u00e4sser Werkstattausr\u00fcstung in gut ausgestatteten R\u00e4umlichkeiten.",
    },
    {
      icon: GraduationCap,
      title: "Weiterbildungsm\u00f6glichkeiten",
      description:
        "Wir f\u00f6rdern die berufliche Weiterentwicklung unserer Mitarbeitenden durch gezielte Schulungen und Weiterbildungen.",
    },
    {
      icon: Award,
      title: "Attraktive Anstellungsbedingungen",
      description:
        "Faire Entlohnung, flexible Arbeitszeiten und weitere zeitgem\u00e4sse Anstellungsbedingungen erwarten Sie bei uns.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] py-28 md:py-36">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-blue-500 blur-[120px]" />
          <div className="absolute bottom-1/3 right-1/3 h-64 w-64 rounded-full bg-blue-400 blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                Karriere
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-300 md:text-xl">
                Werden Sie Teil unseres Teams.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#0a1628] md:text-4xl">
                Arbeiten bei Certus
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-500">
                Die Certus Kunststoff AG ist ein traditionsreiches Familienunternehmen
                mit Sitz in Birsfelden bei Basel. Seit \u00fcber 50 Jahren fertigen wir
                hochwertige Kunststoffprodukte f\u00fcr die Industrie. Bei uns erwartet
                Sie ein kollegiales Arbeitsumfeld, abwechslungsreiche Aufgaben und
                die M\u00f6glichkeit, Ihre F\u00e4higkeiten in einem spannenden
                Umfeld einzubringen.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Was wir bieten"
            subtitle="Gute Gr\u00fcnde, Teil unseres Teams zu werden."
          />

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <AnimateIn key={benefit.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-start gap-5 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0a1628] to-[#1e3a5f]">
                    <benefit.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0a1628]">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Offene Stellen"
            subtitle="Aktuelle Stellenangebote bei Certus Kunststoff AG."
          />

          <div className="mt-16 mx-auto max-w-2xl">
            <AnimateIn>
              <div className="rounded-2xl border border-gray-100 bg-white p-10 text-center shadow-sm">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-50">
                  <Briefcase className="h-8 w-8 text-gray-300" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-[#0a1628]">
                  Aktuell keine offenen Stellen
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  Aktuell keine offenen Stellen. Initiativbewerbungen sind
                  willkommen.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] px-8 py-16 text-center md:px-16">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-400 blur-[80px]" />
              </div>
              <div className="relative">
                <Mail className="mx-auto h-12 w-12 text-white/60" />
                <h2 className="mt-6 text-3xl font-bold text-white md:text-4xl">
                  Initiativbewerbung
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-gray-300">
                  Sie m\u00f6chten Teil unseres Teams werden? Senden Sie uns Ihre
                  Initiativbewerbung - wir freuen uns, von Ihnen zu h\u00f6ren.
                </p>
                <a
                  href="mailto:info@certus-ag.ch"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#0a1628] transition-all duration-200 hover:bg-blue-50 hover:gap-3"
                >
                  <Mail className="h-4 w-4" />
                  info@certus-ag.ch
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
