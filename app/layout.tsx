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

  title: {
    default: "Miguel Gámez | Conferencista Internacional en Ventas",
    template: "%s | Miguel Gámez",
  },

  description:
    "Miguel Gámez es conferencista internacional, autor y creador de la metodología El Reloj de Arena. Especialista en ventas, negociación, liderazgo y estrategia comercial para empresas y organizaciones.",

  keywords: [
    "Miguel Gámez",
    "conferencista",
    "conferencista de ventas",
    "speaker de ventas",
    "ventas",
    "negociación",
    "liderazgo",
    "estrategia comercial",
    "capacitación empresarial",
    "conferencias empresariales",
    "workshops",
    "El Reloj de Arena",
    "Selling Methodologies",
    "Instituto de Ventas",
  ],

  authors: [
    {
      name: "Miguel Gámez",
      url: "https://miguel-gamez-speaker.vercel.app",
    },
  ],

  creator: "Miguel Gámez",
  publisher: "Selling Methodologies",

  alternates: {
    canonical: "https://miguel-gamez-speaker.vercel.app",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Miguel Gámez | Conferencista Internacional en Ventas",
    description:
      "Conferencias, workshops y experiencias para transformar equipos comerciales mediante metodología, estrategia y ejecución.",
    url: "https://miguel-gamez-speaker.vercel.app",
    siteName: "Miguel Gámez",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/images/miguel2.JPG",
        width: 1200,
        height: 630,
        alt: "Miguel Gámez impartiendo una conferencia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Miguel Gámez | Conferencista Internacional en Ventas",
    description:
      "Conferencias y workshops para potenciar equipos comerciales.",
    images: ["/images/miguel2.JPG"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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