import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://miguel-gamez-speaker.vercel.app"),
  title: "Miguel Gámez | Conferencista en Ventas y Estrategia Comercial",
  description:
    "Miguel Gámez es conferencista internacional, autor y estratega comercial especializado en ventas, negociación, liderazgo y desarrollo de equipos.",
  keywords: [
    "Miguel Gámez",
    "conferencista de ventas",
    "speaker de ventas",
    "estrategia comercial",
    "negociación",
    "liderazgo comercial",
    "capacitación de ventas",
    "conferencias empresariales",
  ],
  authors: [{ name: "Miguel Gámez" }],
  openGraph: {
    title: "Miguel Gámez | Conferencista y Estratega Comercial",
    description:
      "Conferencias, workshops y experiencias para transformar equipos comerciales.",
    type: "website",
    locale: "es_MX",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Miguel Gámez impartiendo una conferencia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miguel Gámez | Conferencista y Estratega Comercial",
    description:
      "Conferencias y workshops sobre ventas, negociación y estrategia comercial.",
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${manrope.variable} ${playfair.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}