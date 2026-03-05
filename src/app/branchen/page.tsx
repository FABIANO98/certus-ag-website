"use client";

import { motion } from "framer-motion";
import {
  FlaskConical,
  Pill,
  UtensilsCrossed,
  Cog,
  Zap,
  Truck,
  ArrowRightLeft,
  Building2,
} from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

export default function BranchenPage() {
  const industries = [
    {
      icon: FlaskConical,
      title: "Laborbau",
      description:
        "Laborm\u00f6bel, Schutzverkleidungen und Auffangwannen aus chemikalienbest\u00e4ndigen Kunststoffen f\u00fcr den modernen Laborbau.",
      color: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      icon: Pill,
      title: "Pharma & Chemie",
      description:
        "Medienbest\u00e4ndige Bauteile, Beh\u00e4lter und Apparate f\u00fcr die anspruchsvollen Anforderungen der pharmazeutischen und chemischen Industrie.",
      color: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: UtensilsCrossed,
      title: "Lebensmittelproduktion",
      description:
        "FDA-konforme Teile und F\u00f6rdertechnik-Komponenten, die h\u00f6chste Hygienestandards erf\u00fcllen und lebensmittelecht sind.",
      color: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      icon: Cog,
      title: "Maschinenbau",
      description:
        "Pr\u00e4zisionsteile, F\u00fchrungen und Lager aus technischen Kunststoffen f\u00fcr den allgemeinen Maschinen- und Anlagenbau.",
      color: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: Zap,
      title: "Hochspannungstechnik",
      description:
        "Isolationsteile und Schutzgeh\u00e4use aus elektrisch isolierenden Kunststoffen f\u00fcr die Hochspannungs- und Elektrotechnik.",
      color: "bg-yellow-50",
      iconColor: "text-yellow-600",
    },
    {
      icon: Truck,
      title: "Transporttechnik",
      description:
        "Verkleidungen und Abdeckungen aus leichten, widerstandsf\u00e4higen Kunststoffen f\u00fcr Fahrzeuge und Transportanlagen.",
      color: "bg-red-50",
      iconColor: "text-red-600",
    },
    {
      icon: ArrowRightLeft,
      title: "F\u00f6rdertechnik",
      description:
        "Gleitschienen, Kettenf\u00fchrungen und Verschleissteile f\u00fcr F\u00f6rderanlagen mit hervorragenden Gleiteigenschaften.",
      color: "bg-teal-50",
      iconColor: "text-teal-600",
    },
    {
      icon: Building2,
      title: "Bau & Geb\u00e4udetechnik",
      description:
        "Rohrleitungen, Formst\u00fccke und technische Bauteile aus langlebigen Kunststoffen f\u00fcr die Geb\u00e4udetechnik.",
      color: "bg-indigo-50",
      iconColor: "text-indigo-600",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] py-28 md:py-36">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/3 h-96 w-96 rounded-full bg-blue-500 blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/4 h-64 w-64 rounded-full bg-blue-400 blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                Branchen
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-300 md:text-xl">
                Wir liefern Kunststoffl\u00f6sungen f\u00fcr diverse Industrien.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Unsere Zielbranchen"
            subtitle="\u00dcber 50 Jahre Erfahrung in der Belieferung unterschiedlichster Industriezweige."
          />

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <AnimateIn key={industry.title} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl"
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${industry.color} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <industry.icon
                      className={`h-7 w-7 ${industry.iconColor}`}
                    />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-[#0a1628]">
                    {industry.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-500">
                    {industry.description}
                  </p>
                </motion.div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#0a1628] md:text-4xl">
                Ihre Branche ist nicht dabei?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-500">
                Kunststoff ist vielseitig einsetzbar. Kontaktieren Sie uns - wir
                finden auch f\u00fcr Ihre Branche die passende L\u00f6sung.
              </p>
              <Link
                href="/kontakt"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0a1628] px-8 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#1e3a5f]"
              >
                Jetzt anfragen
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
