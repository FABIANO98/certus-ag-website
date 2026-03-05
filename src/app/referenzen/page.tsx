"use client";

import { motion } from "framer-motion";
import {
  FlaskConical,
  Factory,
  Cpu,
  UtensilsCrossed,
  Cog,
  Wrench,
  Quote,
} from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import SectionHeading from "@/components/SectionHeading";

export default function ReferenzenPage() {
  const projects = [
    {
      icon: FlaskConical,
      category: "Laborbau",
      title: "Laborausstattung f\u00fcr Forschungsinstitut",
      description:
        "Komplette Laborausstattung mit Abzugshauben, Auffangwannen und Schutzverkleidungen aus PVC und PP f\u00fcr ein renommiertes Schweizer Forschungsinstitut.",
      gradient: "from-purple-900 to-purple-600",
    },
    {
      icon: Factory,
      category: "Apparatebau",
      title: "Chemische Aufbereitungsanlage",
      description:
        "Konstruktion und Fertigung einer kompletten Aufbereitungsanlage aus PVDF und PP f\u00fcr die chemische Industrie mit massgeschneiderten Beh\u00e4ltern und Rohrleitungen.",
      gradient: "from-blue-900 to-blue-600",
    },
    {
      icon: Cpu,
      category: "CNC-Fertigung",
      title: "Pr\u00e4zisionsteile f\u00fcr Medizintechnik",
      description:
        "Serienfertigung von hochpr\u00e4zisen PEEK- und PTFE-Komponenten f\u00fcr medizintechnische Ger\u00e4te mit Toleranzen im Hundertstelbereich.",
      gradient: "from-teal-900 to-teal-600",
    },
    {
      icon: UtensilsCrossed,
      category: "Lebensmittelindustrie",
      title: "F\u00f6rdertechnik-Komponenten",
      description:
        "FDA-konforme Gleitschienen, F\u00fchrungen und Verschleissteile aus metalldetektierbarem Kunststoff f\u00fcr eine grosse Lebensmittelproduktionsanlage.",
      gradient: "from-orange-900 to-orange-600",
    },
    {
      icon: Cog,
      category: "Maschinenbau",
      title: "Maschinenverkleidungen & Schutzh\u00e4uben",
      description:
        "Individuelle Schutzh\u00e4uben und Maschinenverkleidungen aus PC und PVC f\u00fcr einen f\u00fchrenden Schweizer Maschinenbauer.",
      gradient: "from-indigo-900 to-indigo-600",
    },
    {
      icon: Wrench,
      category: "Sonderbau",
      title: "Elektroisolationsteile Hochspannung",
      description:
        "Massanfertigung von Isolationsteilen und Schutzgeh\u00e4usen aus Hartgewebe und Pertinax f\u00fcr Hochspannungsanlagen eines Energieversorgers.",
      gradient: "from-red-900 to-red-600",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] py-28 md:py-36">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 right-1/4 h-96 w-96 rounded-full bg-blue-500 blur-[120px]" />
          <div className="absolute bottom-1/3 left-1/3 h-64 w-64 rounded-full bg-blue-400 blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                Referenzen
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-300 md:text-xl">
                Ausgew\u00e4hlte Projekte aus \u00fcber 50 Jahren Erfahrung.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Unsere Projekte"
            subtitle="Ein Auszug aus unseren erfolgreich umgesetzten Kundenprojekten."
          />

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <AnimateIn key={project.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
                >
                  {/* Gradient Image Placeholder */}
                  <div
                    className={`relative h-52 bg-gradient-to-br ${project.gradient}`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <project.icon className="h-16 w-16 text-white/30" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold text-[#0a1628] group-hover:text-blue-600 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-500">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Das sagen unsere Kunden"
            subtitle="Vertrauen und Zuverl\u00e4ssigkeit sind die Basis unserer langfristigen Kundenbeziehungen."
          />

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <AnimateIn delay={0}>
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <Quote className="h-8 w-8 text-blue-200" />
                <p className="mt-4 text-base leading-relaxed text-gray-600 italic">
                  &laquo;Certus Kunststoff AG ist seit \u00fcber 20 Jahren unser
                  zuverl\u00e4ssiger Partner f\u00fcr technische Kunststoffteile. Die
                  Qualit\u00e4t und Termintreue sind hervorragend.&raquo;
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#0a1628] to-[#1e3a5f]" />
                  <div>
                    <p className="text-sm font-semibold text-[#0a1628]">
                      Kundenreferenz
                    </p>
                    <p className="text-xs text-gray-400">
                      Pharmazeutische Industrie
                    </p>
                  </div>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.15}>
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <Quote className="h-8 w-8 text-blue-200" />
                <p className="mt-4 text-base leading-relaxed text-gray-600 italic">
                  &laquo;Die kompetente Beratung bei der Werkstoffwahl und die
                  pr\u00e4zise Umsetzung unserer Anforderungen machen Certus zu
                  einem unverzichtbaren Lieferanten.&raquo;
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#2563eb]" />
                  <div>
                    <p className="text-sm font-semibold text-[#0a1628]">
                      Kundenreferenz
                    </p>
                    <p className="text-xs text-gray-400">Maschinenbau</p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
