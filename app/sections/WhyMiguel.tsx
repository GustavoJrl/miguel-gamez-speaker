const razones = [
  {
    numero: "01",
    titulo: "Método aplicable",
    texto:
      "Miguel no se limita a inspirar. Convierte conceptos comerciales en herramientas que los asistentes pueden aplicar desde el primer día.",
  },
  {
    numero: "02",
    titulo: "Experiencia práctica",
    texto:
      "Integra casos reales, ejercicios y situaciones comerciales para conectar el contenido con los retos cotidianos de cada organización.",
  },
  {
    numero: "03",
    titulo: "Contenido adaptable",
    texto:
      "Cada conferencia puede ajustarse al perfil de la audiencia, al sector y a los objetivos comerciales de la empresa o institución.",
  },
  {
    numero: "04",
    titulo: "Participación activa",
    texto:
      "El público no solo escucha. Reflexiona, participa y descubre nuevas formas de vender, negociar y generar confianza.",
  },
  {
    numero: "05",
    titulo: "Enfoque en resultados",
    texto:
      "Las sesiones están orientadas a mejorar la prospección, la comunicación, la negociación, el cierre y la ejecución comercial.",
  },
  {
    numero: "06",
    titulo: "Credibilidad y trayectoria",
    texto:
      "Su experiencia como autor, consultor, formador y creador de una metodología propia fortalece cada mensaje que comparte.",
  },
];

export default function WhyMiguel() {
  return (
    <section
      id="por-que-miguel"
      className="relative overflow-hidden bg-[#F5F2EA] px-6 py-24 text-[#071B2F] sm:py-32 lg:px-8"
    >
      <div className="absolute left-[-10rem] top-24 h-96 w-96 rounded-full bg-[#C8A96A]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#B08A45]">
            ¿Por qué escuchar a Miguel Gámez?
          </p>

          <h2 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Porque una buena conferencia debe generar algo más que aplausos.
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Debe provocar reflexión, entregar herramientas y motivar a las
            personas a actuar de una forma diferente cuando regresan a su
            trabajo.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {razones.map((razon) => (
            <article
              key={razon.numero}
              className="group rounded-[2rem] border border-[#071B2F]/10 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold tracking-[0.25em] text-[#B08A45]">
                  {razon.numero}
                </span>

                <span className="h-2.5 w-2.5 rounded-full bg-[#C8A96A] transition duration-300 group-hover:scale-150" />
              </div>

              <h3 className="mt-10 text-2xl font-bold">
                {razon.titulo}
              </h3>

              <p className="mt-5 leading-7 text-slate-600">
                {razon.texto}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-8 rounded-[2rem] bg-[#071B2F] p-8 text-white sm:p-12 lg:flex-row lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#C8A96A]">
              Una experiencia para tu audiencia
            </p>

            <h3 className="mt-4 text-3xl font-bold sm:text-4xl">
              Contenido diseñado para transformar la manera de vender,
              negociar y conectar.
            </h3>
          </div>

          <a
            href="#contacto"
            className="shrink-0 rounded-full bg-[#C8A96A] px-8 py-4 font-semibold text-[#071B2F] transition duration-300 hover:-translate-y-1"
          >
            Consultar disponibilidad
          </a>
        </div>
      </div>
    </section>
  );
}