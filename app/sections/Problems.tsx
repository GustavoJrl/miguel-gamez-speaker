const problemas = [
  {
    titulo: "Prospección insuficiente",
    texto:
      "El equipo depende demasiado de recomendaciones, publicidad o clientes que llegan solos.",
  },
  {
    titulo: "Baja tasa de cierre",
    texto:
      "Existen oportunidades, pero no hay claridad para conducir la conversación hacia una decisión.",
  },
  {
    titulo: "Competencia por precio",
    texto:
      "La propuesta pierde valor cuando el vendedor no sabe comunicar diferencias ni generar confianza.",
  },
  {
    titulo: "Falta de un proceso comercial",
    texto:
      "Cada integrante vende de forma distinta y los resultados dependen demasiado de la improvisación.",
  },
  {
    titulo: "Negociaciones débiles",
    texto:
      "El equipo cede demasiado rápido, evita hablar de dinero o no identifica quién toma la decisión.",
  },
  {
    titulo: "Baja ejecución",
    texto:
      "Hay conocimiento, pero no existen hábitos, seguimiento ni acciones consistentes para convertirlo en resultados.",
  },
];

export default function Problems() {
  return (
    <section
      id="problemas"
      className="relative overflow-hidden bg-[#071B2F] px-6 py-24 text-white sm:py-32 lg:px-8"
    >
      <div className="absolute right-[-10rem] top-0 h-96 w-96 rounded-full bg-[#C8A96A]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#C8A96A]">
              Problemas que resuelve
            </p>

            <h2 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Cuando las ventas dependen de la improvisación, el crecimiento
              también.
            </h2>
          </div>

          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-lg leading-8 text-white/70">
              Las conferencias y workshops de Miguel ayudan a los equipos a
              identificar qué está frenando sus resultados y a convertir esos
              retos en acciones comerciales concretas.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {problemas.map((problema, index) => (
            <article
              key={problema.titulo}
              className="group bg-[#0A223A] p-8 transition duration-300 hover:bg-[#0D2C49] sm:p-10"
            >
              <p className="text-sm font-bold tracking-[0.25em] text-[#C8A96A]">
                {String(index + 1).padStart(2, "0")}
              </p>

              <h3 className="mt-8 text-2xl font-bold">
                {problema.titulo}
              </h3>

              <p className="mt-5 leading-7 text-white/65">
                {problema.texto}
              </p>

              <div className="mt-8 h-px w-12 bg-[#C8A96A] transition-all duration-300 group-hover:w-24" />
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-8 rounded-[2rem] border border-[#C8A96A]/30 bg-[#C8A96A]/10 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#C8A96A]">
              Del problema a la acción
            </p>

            <h3 className="mt-4 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
              Miguel convierte los retos comerciales en un proceso más claro,
              medible y sostenible.
            </h3>
          </div>

          <a
            href="#metodologia"
            className="inline-flex justify-center rounded-full bg-[#C8A96A] px-8 py-4 font-semibold text-[#071B2F] transition duration-300 hover:-translate-y-1"
          >
            Conocer la metodología
          </a>
        </div>
      </div>
    </section>
  );
}