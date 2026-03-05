"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/firma", label: "Firma" },
  { href: "/dienstleistungen", label: "Dienstleistungen" },
  { href: "/produkte", label: "Produkte" },
  { href: "/branchen", label: "Branchen" },
  { href: "/referenzen", label: "Referenzen" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setHasScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          hasScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
            : "bg-white/70 backdrop-blur-md"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <Link href="/" className="group relative z-10 flex flex-col">
            <span className="text-xl font-bold uppercase tracking-[0.2em] text-[#0a1628] transition-colors duration-200 group-hover:text-[#2563eb] lg:text-2xl">
              CERTUS
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#6b7280] lg:text-xs">
              Kunststoff AG
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`group relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
                    isActive(href)
                      ? "text-[#0a1628]"
                      : "text-[#6b7280] hover:text-[#0a1628]"
                  }`}
                >
                  {label}
                  {/* Active underline */}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-[2px] origin-left bg-[#0a1628] transition-transform duration-300 ease-out ${
                      isActive(href)
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-10 flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-200 hover:bg-[#0a1628]/5 lg:hidden"
            aria-label={isOpen ? "Menu schliessen" : "Menu oeffnen"}
            aria-expanded={isOpen}
          >
            <div className="flex w-5 flex-col items-center gap-[5px]">
              <span
                className={`block h-[2px] w-full bg-[#0a1628] transition-all duration-300 ease-out ${
                  isOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-full bg-[#0a1628] transition-all duration-300 ease-out ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-full bg-[#0a1628] transition-all duration-300 ease-out ${
                  isOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
              className="flex h-full flex-col items-center justify-center"
            >
              <ul className="flex flex-col items-center gap-2">
                {navLinks.map(({ href, label }, index) => (
                  <motion.li
                    key={href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 16 }}
                    transition={{
                      duration: 0.35,
                      delay: 0.15 + index * 0.05,
                      ease: "easeOut",
                    }}
                  >
                    <Link
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-6 py-3 text-2xl font-light tracking-wide transition-colors duration-200 ${
                        isActive(href)
                          ? "text-[#0a1628]"
                          : "text-[#9ca3af] hover:text-[#0a1628]"
                      }`}
                    >
                      {label}
                      {isActive(href) && (
                        <motion.div
                          layoutId="mobile-active-indicator"
                          className="mx-auto mt-1 h-[2px] w-8 bg-[#0a1628]"
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        />
                      )}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to offset fixed header */}
      <div className="h-[72px] lg:h-[80px]" />
    </>
  );
}
