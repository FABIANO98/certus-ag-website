"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Thermometer,
  FlaskConical,
  ShieldCheck,
  CircleDot,
  Info,
} from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import SectionHeading from "@/components/SectionHeading";

export default function WerkstoffePage() {
  const thermoplaste = [
    {
      name: "PE",
      fullName: "Polyethylen",
      properties: "Chemisch best\u00e4ndig, lebensmittelecht, leicht",
    },
    {
      name: "PP",
      fullName: "Polypropylen",
      properties: "Steif, s\u00e4urebest\u00e4ndig, gute Schweissbarkeit",
    },
    {
      name: "PVC",
      fullName: "Polyvinylchlorid",
      properties: "Flammwidrig, chemisch best\u00e4ndig, preiswert",
    },
    {
      name: "PTFE",
      fullName: "Polytetrafluorethylen",
      properties:
        "H\u00f6chste Chemikalienbest\u00e4ndigkeit, antihaftend, FDA-konform",
    },
    {
      name: "PEEK",
      fullName: "Polyetheretherketon",
      properties:
        "Hochtemperaturbest\u00e4ndig, extrem belastbar, sterilisierbar",
    },
    {
      name: "POM",
      fullName: "Polyoxymethylen",
      properties: "Hohe Steifigkeit, gute Gleiteigenschaften, masshaltig",
    },
    {
      name: "PA",
      fullName: "Polyamid",
      properties: "Verschleissfest, z\u00e4h, gute mechanische Eigenschaften",
    },
    {
      name: "PVDF",
      fullName: "Polyvinylidenfluorid",
      properties:
        "Chemisch hochbest\u00e4ndig, UV-best\u00e4ndig, hohe Reinheit",
    },
    {
      name: "PC",
      fullName: "Polycarbonat",
      properties: "Transparent, schlagfest, hohe Temperaturbeständigkeit",
    },
  ];

  const duroplaste = [
    {
      name: "Hartgewebe",
      fullName: "Baumwollgewebe-Phenolharz",
      properties:
        "Hohe mechanische Festigkeit, gute Gleiteigenschaften, verschleissfest",
    },
    {
      name: "Hartpapier",
      fullName: "Papier-Phenolharz",
      properties:
        "Gute elektrische Isolierung, leicht bearbeitbar, preiswert",
    },
    {
      name: "Pertinax",
      fullName: "Phenolharz-Schichtstoff",
      properties:
        "Elektrisch isolierend, w\u00e4rmebest\u00e4ndig, dimensionsstabil",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] py-28 md:py-36">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/3 h-96 w-96 rounded-full bg-blue-500 blur-[120px]" />
          <div className="absolute bottom-1/3 right-1/4 h-64 w-64 rounded-full bg-blue-400 blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                Werkstoffe
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-300 md:text-xl">
                Wir verarbeiten ein breites Spektrum technischer Kunststoffe.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Thermoplaste Section */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Thermoplaste"
            subtitle="Vielseitige Kunststoffe, die sich durch Erw\u00e4rmen umformen lassen."
          />

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {thermoplaste.map((material, index) => (
              <AnimateIn key={material.name} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0a1628] to-[#1e3a5f]">
                      <span className="text-sm font-bold text-white">
                        {material.name}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#0a1628]">
                        {material.fullName}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-500">
                        {material.properties}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Duroplaste Section */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Duroplaste"
            subtitle="Schichtpressstoffe mit hervorragenden mechanischen und elektrischen Eigenschaften."
          />

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {duroplaste.map((material, index) => (
              <AnimateIn key={material.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#1e3a5f] to-[#2563eb]">
                      <Layers className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#0a1628]">
                        {material.name}
                      </h3>
                      <p className="text-xs text-gray-400">
                        {material.fullName}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-gray-500">
                        {material.properties}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Leichtmetalle Section */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Leichtmetalle"
            subtitle="Erg\u00e4nzend zu Kunststoffen verarbeiten wir auch Leichtmetalle."
          />

          <div className="mt-16 mx-auto max-w-lg">
            <AnimateIn>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gray-400 to-gray-600">
                    <span className="text-lg font-bold text-white">Al</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0a1628]">
                      Aluminium
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">
                      Leicht, korrosionsbest\u00e4ndig und hervorragend zu bearbeiten.
                      Ideal f\u00fcr Konstruktionsteile, Halterungen und
                      Maschinenbaukomponenten.
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Special Materials */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Spezialwerkstoffe"
            subtitle="F\u00fcr besondere Anforderungen bieten wir zertifizierte Materialien."
          />

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <AnimateIn delay={0}>
              <div className="flex items-start gap-5 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50">
                  <ShieldCheck className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0a1628]">
                    FDA-zugelassene Kunststoffe
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    F\u00fcr den Einsatz in der Lebensmittel- und Pharmaindustrie
                    bieten wir FDA-konforme Materialien, die h\u00f6chste
                    Hygienestandards erf\u00fcllen.
                  </p>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <div className="flex items-start gap-5 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                  <CircleDot className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0a1628]">
                    Metalldetektierbare Kunststoffe
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    Speziell entwickelte Kunststoffe, die von
                    Metalldetektoren erkannt werden - unverzichtbar in der
                    Lebensmittelproduktion f\u00fcr maximale Sicherheit.
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Guidance Note */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn>
            <div className="mx-auto max-w-3xl rounded-2xl border border-blue-100 bg-blue-50/50 p-8 md:p-12">
              <div className="flex items-start gap-4">
                <Info className="h-6 w-6 shrink-0 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold text-[#0a1628]">
                    Werkstoffberatung
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    Die Werkstoffwahl richtet sich nach Einsatzgebiet, Temperatur-
                    und Medienbest\u00e4ndigkeit. Unser erfahrenes Team ber\u00e4t Sie
                    kompetent bei der Auswahl des optimalen Werkstoffs f\u00fcr Ihre
                    Anwendung.
                  </p>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
