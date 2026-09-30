import type { Metadata, Viewport } from "next";
import type { CSSProperties } from "react";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";

const texte = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
});

const titre = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: "800",
  display: "swap",
});

const titreSite = "Ardoise : relancez vos devis sans y penser";
const descriptionSite =
  "Ardoise relance automatiquement vos devis restés sans réponse, et vous prévient dès qu'un client les ouvre.";

export const metadata: Metadata = {
  title: titreSite,
  description: descriptionSite,
  openGraph: {
    title: titreSite,
    description: descriptionSite,
    type: "website",
    locale: "fr_FR",
    siteName: "Ardoise",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1f2933",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const polices = {
    "--font-sans": texte.style.fontFamily,
    "--font-titre": titre.style.fontFamily,
  } as CSSProperties;

  return (
    <html lang="fr" style={polices}>
      <body>{children}</body>
    </html>
  );
}
