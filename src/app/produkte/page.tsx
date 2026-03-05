"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Shield,
  Container,
  Cpu,
  CircleDot,
  Factory,
  Wrench,
  ArrowRight,
} from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import SectionHeading from "@/components/SectionHeading";

export default function ProduktePage() {
  const products = [
    {
      icon: Shield,
      title: "Schutzh\u00e4uben & Abdeckungen",
      description:
        "Massgeschneiderte Schutzh\u00e4uben und Abdeckungen aus hochwertigen Kunststoffen f\u00fcr den Maschinen- und Anlagenbau.",
    },
    {
      icon: Container,
      title: "Beh\u00e4lter & Wannen",
      description:
        "Chemikalien- und medienbest\u00e4ndige Beh\u00e4lter, Auffangwannen und Tanks in verschiedenen Gr\u00f6ssen.",
    },
    {
      icon: Cpu,
      title: "CNC-Fr\u00e4steile",
      description:
        "Pr\u00e4zisionsteile gefertigt auf modernen CNC-Fr\u00e4smaschinen mit h\u00f6chster Genauigkeit.",
    },
    {
      icon: CircleDot,
      title: "CNC-Drehteile",
      description:
        "Rotationssymmetrische Teile in Einzel- und Serienfertigung auf CNC-Drehmaschinen.",
    },
    {
      icon: Factory,
      title: "Apparate & Anlagen",
      description:
        "Komplette Apparate und Anlagen aus Kunststoff f\u00fcr die chemische und pharmazeutische Industrie.",
    },
    {
      icon: Wrench,
      title: "Sonderanfertigungen",
      description:
        "Individuelle L\u00f6sungen nach Ihren spezifischen Anforderungen und Zeichnungen.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0a1628] py-28 md:py-36">
        <Image
          src="/images/produkte-overview.png"
          alt="Übersicht verschiedener Kunststoffprodukte von Certus AG"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/80 to-[#1e3a5f]/80" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                Produkte
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-300 md:text-xl">
                Massgeschneiderte Kunststoffprodukte f\u00fcr jeden Einsatzbereich.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Unsere Produktkategorien"
            subtitle="Von Einzelteilen bis zu kompletten Baugruppen - alles aus einer Hand."
          />

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <AnimateIn key={product.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
                >
                  {/* Gradient Image Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-[#0a1628] to-[#1e3a5f]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <product.icon className="h-16 w-16 text-white/40" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-semibold text-[#0a1628] group-hover:text-blue-600 transition-colors duration-200">
                      {product.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-500">
                      {product.description}
                    </p>
                  </div>
                </motion.div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Manufacturing */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn>
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
                <Wrench className="h-4 w-4" />
                Individuelle Fertigung
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-[#0a1628] md:text-4xl">
                Massarbeit f\u00fcr Ihre Anforderungen
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-500">
                Alle Produkte werden individuell nach Kundenzeichnung oder Muster
                gefertigt. Unser erfahrenes Team ber\u00e4t Sie gerne bei der
                Werkstoffwahl und Konstruktion.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] px-8 py-16 text-center md:px-16">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-blue-400 blur-[80px]" />
              </div>
              <div className="relative">
                <h2 className="text-3xl font-bold text-white md:text-4xl">
                  Haben Sie ein Projekt?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-gray-300">
                  Kontaktieren Sie uns f\u00fcr eine unverbindliche Beratung. Wir finden
                  die passende L\u00f6sung f\u00fcr Ihre Anforderungen.
                </p>
                <Link
                  href="/kontakt"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#0a1628] transition-all duration-200 hover:bg-blue-50 hover:gap-3"
                >
                  Kontakt aufnehmen
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
