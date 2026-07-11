export default function VideoSection() {
  return (
    <section
      id="video"
      className="relative overflow-hidden bg-white px-6 py-24 text-[#071B2F] sm:py-32 lg:px-8"
    >
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#C8A96A]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#B08A45]">
            Miguel en acción
          </p>

          <h2 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Una manera cercana, práctica y directa de comunicar.
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Miguel convierte situaciones cotidianas en aprendizajes comerciales
            claros. Su estilo combina experiencia, ejemplos reales, preguntas y
            participación para mantener a la audiencia conectada.
          </p>

          <div className="mt-10 space-y-4">
            <div className="flex items-start gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#C8A96A] font-bold">
                ✓
              </span>

              <p className="pt-1 text-lg text-slate-700">
                Comunicación clara y fácil de recordar.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#C8A96A] font-bold">
                ✓
              </span>

              <p className="pt-1 text-lg text-slate-700">
                Ejemplos prácticos conectados con la realidad comercial.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#C8A96A] font-bold">
                ✓
              </span>

              <p className="pt-1 text-lg text-slate-700">
                Interacción constante con la audiencia.
              </p>
            </div>
          </div>

          <a
            href="#contacto"
            className="mt-10 inline-flex rounded-full bg-[#071B2F] px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Llevar esta experiencia a mi evento
          </a>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-[#C8A96A]/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-black shadow-2xl">
            <video
              controls
              playsInline
              preload="metadata"
              className="aspect-[512/746] w-full object-cover"
            >
              <source
                src="/videos/miguel-en-accion.mp4"
                type="video/mp4"
              />

              Tu navegador no puede reproducir este video.
            </video>
          </div>

          <div className="relative z-10 mx-auto -mt-6 w-[88%] rounded-2xl bg-[#071B2F] p-5 text-center text-white shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C8A96A]">
              Speaker en escenario
            </p>

            <p className="mt-2 font-semibold">
              Ventas, prospección y estrategia comercial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}