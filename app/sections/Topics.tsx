export default function Topics() {
  const temas = [
    {
      icono: "📈",
      titulo: "Estrategia Comercial",
      descripcion:
        "Construye procesos comerciales sólidos para vender con mayor consistencia y generar crecimiento sostenible.",
    },
    {
      icono: "🤝",
      titulo: "Negociación de Alto Impacto",
      descripcion:
        "Aprende técnicas de negociación que fortalecen la confianza, generan valor y mejoran los cierres.",
    },
    {
      icono: "👥",
      titulo: "Liderazgo Comercial",
      descripcion:
        "Forma líderes capaces de desarrollar equipos orientados al alto desempeño y a los resultados.",
    },
    {
      icono: "💼",
      titulo: "Metodología de Ventas",
      descripcion:
        "Una metodología práctica para prospectar, conectar, negociar y cerrar con mayor efectividad.",
    },
    {
      icono: "🎯",
      titulo: "29 Formas de Prospectar",
      descripcion:
        "Descubre estrategias para generar oportunidades comerciales todos los días, tanto de manera presencial como digital.",
    },
    {
      icono: "🚀",
      titulo: "Desarrollo Empresarial",
      descripcion:
        "Conferencias para empresarios y emprendedores que buscan acelerar el crecimiento de su organización.",
    },
  ];

  return (
    <section
      id="temas"
      className="relative overflow-hidden bg-[#071B2F] py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <p className="uppercase tracking-[0.35em] text-[#C8A96A] font-semibold">
            Conferencias
          </p>

          <h2 className="mt-6 text-5xl font-bold text-white leading-tight">
            Conferencias que generan resultados.
          </h2>

          <p className="mt-8 text-xl leading-9 text-white/70">
            Cada conferencia está diseñada para generar cambios reales en la
            forma en que las personas venden, negocian, lideran y desarrollan
            oportunidades comerciales.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {temas.map((tema) => (

            <div
              key={tema.titulo}
              className="group rounded-[30px] border border-white/10 bg-white/5 p-10 backdrop-blur-sm transition duration-500 hover:-translate-y-3 hover:bg-white hover:shadow-2xl"
            >

              <div className="text-5xl">
                {tema.icono}
              </div>

              <h3 className="mt-8 text-3xl font-bold text-white transition group-hover:text-[#071B2F]">
                {tema.titulo}
              </h3>

              <p className="mt-6 leading-8 text-white/70 transition group-hover:text-slate-600">
                {tema.descripcion}
              </p>

              <a
                href="#contacto"
                className="mt-10 inline-flex items-center gap-3 font-semibold text-[#C8A96A] transition group-hover:text-[#071B2F]"
              >
                Solicitar conferencia →

              </a>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}