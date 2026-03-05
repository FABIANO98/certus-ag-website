import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Certus Kunststoff AG | Kunststoffverarbeitung & Apparatebau",
    template: "%s | Certus Kunststoff AG",
  },
  description:
    "Ihr zuverlässiger Partner seit über 50 Jahren für technische Kunststoffteile, CNC-Bearbeitung und Apparatebau in der Schweiz.",
  keywords: [
    "Kunststoffverarbeitung",
    "Apparatebau",
    "CNC Fräsen",
    "CNC Drehen",
    "Kunststoffteile",
    "Schweiz",
    "Birsfelden",
    "Basel",
  ],
  openGraph: {
    title: "Certus Kunststoff AG",
    description:
      "Ihr zuverlässiger Partner seit über 50 Jahren für technische Kunststoffteile.",
    url: "https://www.certus-ag.ch",
    siteName: "Certus Kunststoff AG",
    locale: "de_CH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="antialiased">
        <ScrollToTop />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
