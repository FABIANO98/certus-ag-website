'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Linkedin, Instagram } from 'lucide-react';

const dienstleistungen = [
  { label: 'CNC Fräsen', href: '/dienstleistungen' },
  { label: 'CNC Drehen', href: '/dienstleistungen' },
  { label: 'Schweissen', href: '/dienstleistungen' },
  { label: 'Apparatebau', href: '/dienstleistungen' },
  { label: 'Kunststoffbearbeitung', href: '/dienstleistungen' },
];

const unternehmen = [
  { label: 'Über uns', href: '/firma' },
  { label: 'Referenzen', href: '/referenzen' },
  { label: 'Jobs', href: '/jobs' },
  { label: 'Impressum', href: '/impressum' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold tracking-tight text-white">
                CERTUS
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm max-w-xs">
              Ihr zuverlässiger Partner seit über 50 Jahren für technische
              Kunststoffteile und Apparatebau.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/certusplastics/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-gray-400 transition-all duration-200 hover:bg-white/10 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/certus_plastics"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-gray-400 transition-all duration-200 hover:bg-white/10 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Dienstleistungen */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Dienstleistungen
            </h3>
            <ul className="space-y-3">
              {dienstleistungen.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Unternehmen */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Unternehmen
            </h3>
            <ul className="space-y-3">
              {unternehmen.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Kontakt */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Kontakt
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  Certus Kunststoff AG
                  <br />
                  Sternenfeldstrasse 42
                  <br />
                  4127 Birsfelden
                </span>
              </li>
              <li>
                <Link
                  href="mailto:info@certus-ag.ch"
                  className="flex items-center gap-3 text-gray-400 text-sm hover:text-white transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  info@certus-ag.ch
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+41613130215"
                  className="flex items-center gap-3 text-gray-400 text-sm hover:text-white transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  +41 61 313 02 15
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Certus Kunststoff AG. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/datenschutz"
              className="text-gray-500 text-xs hover:text-gray-300 transition-colors duration-200"
            >
              Datenschutz
            </Link>
            <Link
              href="/agb"
              className="text-gray-500 text-xs hover:text-gray-300 transition-colors duration-200"
            >
              AGB
            </Link>
            <Link
              href="/impressum"
              className="text-gray-500 text-xs hover:text-gray-300 transition-colors duration-200"
            >
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
