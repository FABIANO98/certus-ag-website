"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
} from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import SectionHeading from "@/components/SectionHeading";

export default function KontaktPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] py-28 md:py-36">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/3 h-96 w-96 rounded-full bg-blue-500 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-blue-400 blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                Kontakt
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-300 md:text-xl">
                Wir freuen uns auf Ihre Anfrage.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Contact Form */}
            <AnimateIn direction="left">
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm md:p-10">
                <h2 className="text-2xl font-bold text-[#0a1628]">
                  Nachricht senden
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  F\u00fcllen Sie das Formular aus und wir melden uns bei Ihnen.
                </p>

                <form className="mt-8 space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      placeholder="Ihr Name"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                        placeholder="ihre@email.ch"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="telefon"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="telefon"
                        name="telefon"
                        className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                        placeholder="+41 ..."
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="betreff"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Betreff *
                    </label>
                    <input
                      type="text"
                      id="betreff"
                      name="betreff"
                      required
                      className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      placeholder="Worum geht es?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="nachricht"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nachricht *
                    </label>
                    <textarea
                      id="nachricht"
                      name="nachricht"
                      rows={5}
                      required
                      className="mt-2 block w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      placeholder="Ihre Nachricht..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#0a1628] px-8 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#1e3a5f] sm:w-auto"
                  >
                    <Send className="h-4 w-4" />
                    Nachricht senden
                  </motion.button>
                </form>
              </div>
            </AnimateIn>

            {/* Right: Contact Info & Map */}
            <AnimateIn direction="right">
              <div className="space-y-8">
                {/* Contact Info Cards */}
                <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0a1628]">
                    Kontaktdaten
                  </h3>

                  <div className="mt-6 space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                        <MapPin className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#0a1628]">
                          Adresse
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-gray-500">
                          Certus Kunststoff AG
                          <br />
                          Sternenfeldstrasse 42
                          <br />
                          4127 Birsfelden
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                        <Mail className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#0a1628]">
                          E-Mail
                        </p>
                        <a
                          href="mailto:info@certus-ag.ch"
                          className="mt-1 block text-sm text-gray-500 transition-colors duration-200 hover:text-blue-600"
                        >
                          info@certus-ag.ch
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                        <Phone className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#0a1628]">
                          Telefon
                        </p>
                        <a
                          href="tel:+41613130215"
                          className="mt-1 block text-sm text-gray-500 transition-colors duration-200 hover:text-blue-600"
                        >
                          +41 61 313 02 15
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                        <Clock className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#0a1628]">
                          \u00d6ffnungszeiten
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Mo-Fr 07:30 – 12:00, 13:00 – 17:30
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Google Maps Embed */}
                <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.8!2d7.6236!3d47.5527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791b9a8a0d6f6b7%3A0x0!2sSternenfeldstrasse%2042%2C%204127%20Birsfelden!5e0!3m2!1sde!2sch!4v1"
                    width="100%"
                    height="256"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Certus Kunststoff AG Standort"
                    className="h-64 w-full"
                  />
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
