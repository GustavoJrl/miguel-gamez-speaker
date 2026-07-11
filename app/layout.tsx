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
    "Conferencista",
    "Conferencista de ventas",
    "Speaker de ventas",
    "Ventas",
    "Negociación",
    "Liderazgo",
    "Estrategia comercial",
    "Capacitación empresarial",
    "Conferencias empresariales",
    "Workshops",
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
        url: "/images/hero.jpg",
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

    images: ["/images/hero.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};