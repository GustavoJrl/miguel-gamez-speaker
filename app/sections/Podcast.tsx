import Image from "next/image";

const beneficios = [
  "Entrevistas con empresarios y especialistas",
  "Casos reales y experiencias comerciales",
  "Herramientas prácticas para vendedores",
  "Estrategias de ventas, negociación y liderazgo",
];

export default function Podcast() {
  return (
    <section
      id="podcast"
      className="relative overflow-hidden bg-[#061523] px-6 py-24 text-white sm:py-32 lg:px-8"
    >
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#C8A96A]/10 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-red-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-[#C8A96A]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-black">
                <Image
                  src="/images/podcast-selling-methodologies.png"
                  alt="Canal oficial de YouTube del Instituto de Ventas Selling Methodologies"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-contain object-center"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-red-500/20 bg-red-500/10 px-5 py-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-5 w-5 fill-white"
                >
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z" />
                </svg>
              </span>

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-300">
                Podcast oficial
              </p>
            </div>

            <h2 className="mt-7 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Escucha el podcast del Instituto.
            </h2>

            <p className="mt-7 text-lg leading-8 text-white/70">
              Explora entrevistas, conversaciones y contenidos sobre ventas,
              negociación, liderazgo, estrategia comercial y desarrollo
              empresarial en el canal oficial de Selling Methodologies.
            </p>

            <div className="mt-9 grid gap-4">
              {beneficios.map((beneficio) => (
                <div
                  key={beneficio}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C8A96A] text-sm font-bold text-[#071B2F]">
                    ✓
                  </span>

                  <p className="leading-7 text-white/75">{beneficio}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://www.youtube.com/@Sellingmethodologies"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-red-600 px-8 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-red-500 hover:shadow-xl"
              >
                Ver canal en YouTube
              </a>

              <a
                href="https://www.youtube.com/@Sellingmethodologies"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#071B2F]"
              >
                @Sellingmethodologies
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}