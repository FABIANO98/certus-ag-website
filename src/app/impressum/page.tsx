"use client";

import AnimateIn from "@/components/AnimateIn";

export default function ImpressumPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] py-28 md:py-36">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/2 h-96 w-96 rounded-full bg-blue-500 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                Impressum
              </h1>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <AnimateIn>
            <div className="space-y-12">
              {/* Company Info */}
              <div>
                <h2 className="text-2xl font-bold text-[#0a1628]">
                  Certus Kunststoff AG
                </h2>
                <div className="mt-4 space-y-1 text-base leading-relaxed text-gray-600">
                  <p>Sternenfeldstrasse 42</p>
                  <p>4127 Birsfelden</p>
                  <p>Schweiz</p>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-lg font-semibold text-[#0a1628]">
                  Kontakt
                </h3>
                <div className="mt-4 space-y-2 text-base text-gray-600">
                  <p>
                    E-Mail:{" "}
                    <a
                      href="mailto:info@certus-ag.ch"
                      className="text-blue-600 underline decoration-blue-200 underline-offset-2 transition-colors duration-200 hover:text-blue-800 hover:decoration-blue-400"
                    >
                      info@certus-ag.ch
                    </a>
                  </p>
                  <p>
                    Telefon:{" "}
                    <a
                      href="tel:+41613130215"
                      className="text-blue-600 underline decoration-blue-200 underline-offset-2 transition-colors duration-200 hover:text-blue-800 hover:decoration-blue-400"
                    >
                      +41 61 313 02 15
                    </a>
                  </p>
                </div>
              </div>

              {/* Legal Details */}
              <div>
                <h3 className="text-lg font-semibold text-[#0a1628]">
                  Handelsregisterangaben
                </h3>
                <div className="mt-4 space-y-3 text-base text-gray-600">
                  <div className="flex flex-col sm:flex-row sm:gap-2">
                    <span className="font-medium text-gray-700 sm:min-w-[260px]">
                      Unternehmens-Identifikationsnummer (UID):
                    </span>
                    <span>CHE-102.667.204</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-2">
                    <span className="font-medium text-gray-700 sm:min-w-[260px]">
                      Inhaberin:
                    </span>
                    <span>Elisabeth K\u00f6lliker</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-2">
                    <span className="font-medium text-gray-700 sm:min-w-[260px]">
                      Vertretungsberechtigte Person:
                    </span>
                    <span>Daniel K\u00f6lliker</span>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div>
                <h3 className="text-lg font-semibold text-[#0a1628]">
                  Haftungsausschluss
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-500">
                  Der Autor \u00fcbernimmt keine Gew\u00e4hr f\u00fcr die Richtigkeit,
                  Genauigkeit, Aktualit\u00e4t, Zuverl\u00e4ssigkeit und
                  Vollst\u00e4ndigkeit der Informationen. Haftungsanspr\u00fcche gegen
                  den Autor wegen Sch\u00e4den materieller oder immaterieller Art,
                  welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der
                  ver\u00f6ffentlichten Informationen, durch Missbrauch der
                  Verbindung oder durch technische St\u00f6rungen entstanden sind,
                  werden ausgeschlossen.
                </p>
              </div>

              {/* Copyright */}
              <div>
                <h3 className="text-lg font-semibold text-[#0a1628]">
                  Urheberrecht
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-500">
                  Die auf dieser Website enthaltenen Inhalte und Werke sind
                  urheberrechtlich gesch\u00fctzt. Jede Verwertung ausserhalb der
                  Grenzen des Urheberrechts bedarf der schriftlichen Zustimmung
                  der Certus Kunststoff AG.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
