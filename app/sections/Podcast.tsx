import Image from "next/image";

const contenidos = [
  "Clases impartidas por Miguel Gámez",
  "Metodologías y técnicas de ventas",
  "Prospección, negociación y cierre",
  "Estrategia y desarrollo comercial",
];

const spotifyUrl =
  "https://open.spotify.com/show/0tTghhBtMOdXgEgoVip0yR?si=CN5W1_JkR2-2b6MtZLqxrw&utm_source=whatsapp";

export default function Podcast() {
  return (
    <section
      id="podcast"
      className="relative overflow-hidden bg-[#061523] px-6 py-24 text-white sm:py-32 lg:px-8"
    >
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#1ED760]/10 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#C8A96A]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Imagen del podcast */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-[#1ED760]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black p-3 shadow-2xl">
              <Image
                src="/images/podcast-selling-methodologies.JPG"
                alt="Podcast Instituto de Ventas Selling Methodologies en Spotify"
                width={900}
                height={1600}
                sizes="(max-width: 1024px) 100vw, 38vw"
                className="h-auto w-full rounded-[1.5rem] object-contain"
              />
            </div>
          </div>

          {/* Información */}
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-[#1ED760]/25 bg-[#1ED760]/10 px-5 py-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1ED760]">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-6 w-6 fill-black"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0Zm5.5 17.31a.75.75 0 0 1-1.03.25c-2.82-1.72-6.37-2.11-10.55-1.16a.75.75 0 1 1-.33-1.46c4.57-1.04 8.5-.59 11.66 1.34.35.21.46.67.25 1.03Zm1.47-3.27a.94.94 0 0 1-1.29.31c-3.23-1.98-8.15-2.55-11.97-1.4a.94.94 0 1 1-.54-1.8c4.37-1.32 9.8-.68 13.49 1.58.44.27.58.85.31 1.31Zm.13-3.4C15.23 8.34 8.84 8.13 5.14 9.25a1.13 1.13 0 1 1-.65-2.16c4.25-1.28 11.32-1.03 15.76 1.61a1.13 1.13 0 0 1-1.15 1.94Z" />
                </svg>
              </span>

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#72E99A]">
                Podcast en Spotify
              </p>
            </div>

            <h2 className="mt-7 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Escucha las clases de Miguel Gámez.
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70">
              Accede a contenidos del Instituto de Ventas Selling Methodologies
              impartidos por Miguel Gámez, con herramientas, conceptos y
              metodologías aplicables al trabajo comercial.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {contenidos.map((contenido) => (
                <div
                  key={contenido}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1ED760] text-sm font-bold text-black">
                    ✓
                  </span>

                  <p className="leading-7 text-white/75">{contenido}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href={spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#1ED760] px-8 py-4 font-bold text-black transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-white hover:shadow-xl"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-6 w-6 fill-current"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0Zm5.5 17.31a.75.75 0 0 1-1.03.25c-2.82-1.72-6.37-2.11-10.55-1.16a.75.75 0 1 1-.33-1.46c4.57-1.04 8.5-.59 11.66 1.34.35.21.46.67.25 1.03Zm1.47-3.27a.94.94 0 0 1-1.29.31c-3.23-1.98-8.15-2.55-11.97-1.4a.94.94 0 1 1-.54-1.8c4.37-1.32 9.8-.68 13.49 1.58.44.27.58.85.31 1.31Zm.13-3.4C15.23 8.34 8.84 8.13 5.14 9.25a1.13 1.13 0 1 1-.65-2.16c4.25-1.28 11.32-1.03 15.76 1.61a1.13 1.13 0 0 1-1.15 1.94Z" />
                </svg>

                Escuchar en Spotify
              </a>
            </div>

            <p className="mt-5 text-sm text-white/45">
              Instituto de Ventas Selling Methodologies® por Miguel Ángel Gámez
              Ugalde.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}