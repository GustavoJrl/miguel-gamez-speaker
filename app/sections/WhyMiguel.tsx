const razones = [
  {
    numero: "01",
    titulo: "Metodología aplicable",
    descripcion:
      "Cada conferencia entrega herramientas, procesos y acciones concretas que pueden utilizarse desde el primer día.",
  },
  {
    numero: "02",
    titulo: "Experiencia comercial",
    descripcion:
      "Los contenidos parten de situaciones reales de ventas, negociación, prospección y desarrollo de equipos.",
  },
  {
    numero: "03",
    titulo: "Participación de la audiencia",
    descripcion:
      "Las sesiones combinan reflexión, preguntas, ejemplos y ejercicios para mantener a las personas conectadas.",
  },
];

export default function WhyMiguel() {
  return (
    <section
      id="por-que-miguel"
      className="relative scroll-mt-24 overflow-hidden bg-[#F5F2EA] px-6 py-24 text-[#071B2F] sm:py-32 lg:px-8"
    >
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#C8A96A]/15 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-white blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#B08A45]">
            ¿Por qué escuchar a Miguel Gámez?
          </p>

          <h2 className="mt-8 text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
            Si buscas capacitación
            <span className="block text-[#E86F3A]">
              en ventas
            </span>
          </h2>

          <div className="mx-auto mt-10 max-w-4xl text-xl leading-9 text-slate-700 sm:text-2xl sm:leading-10">
            <p>
              Que, en vez de hablarte solo de teoría y motivación,
            </p>

            <p className="mt-5 font-bold text-[#071B2F]">
              logre que los asistentes
            </p>

            <p className="mx-auto mt-4 inline-block bg-[#071B2F] px-5 py-3 font-bold uppercase tracking-[0.04em] text-white">
              realmente cierren ventas
            </p>

            <p className="mt-5 font-bold text-[#071B2F]">
              CONTÁCTAME!
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {razones.map((razon) => (
            <article
              key={razon.numero}
              className="group rounded-[2rem] border border-[#071B2F]/10 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold tracking-[0.25em] text-[#B08A45]">
                  {razon.numero}
                </span>

                <span className="h-3 w-3 rounded-full bg-[#C8A96A] transition duration-300 group-hover:scale-150" />
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                {razon.titulo}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {razon.descripcion}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}