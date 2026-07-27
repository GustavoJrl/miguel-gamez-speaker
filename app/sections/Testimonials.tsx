const testimonios = [
  {
    nombre: "Luis Ochoa",
    texto:
      "Lo recomiendo ampliamente. Es una metodología renovada y muy fresca que te ayudará a crecer tanto en lo personal como en lo profesional.",
  },
  {
    nombre: "Víctor Huitrón",
    texto:
      "De los pocos entrenamientos especializados en ventas donde realmente te enseñan hábitos, orden y una estrategia comercial clara.",
  },
  {
    nombre: "Hitzel López Villanueva",
    texto:
      "Miguel es un excelente coach de ventas. Combina la teoría con la práctica y siempre busca explicar todo de la forma más clara posible. Si quieres aprender a vender cualquier producto, Miguel es una gran opción.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="relative scroll-mt-24 overflow-hidden bg-[#F5F2EA] px-6 py-24 text-[#071B2F] sm:py-32 lg:px-8"
    >
      <div className="absolute -right-40 top-12 h-96 w-96 rounded-full bg-[#C8A96A]/15 blur-3xl" />
      <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-white blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#B08A45]">
            Testimonios
          </p>

          <h2 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Lo que dicen quienes han aprendido con Miguel Gámez.
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Experiencias reales de personas que han participado en sus
            entrenamientos y procesos de formación comercial.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonios.map((testimonio) => (
            <article
              key={testimonio.nombre}
              className="group flex h-full flex-col justify-between rounded-[2rem] border border-[#071B2F]/10 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-10"
            >
              <div>
                <div className="flex gap-1 text-2xl text-[#C8A96A]">
                  ★★★★★
                </div>

                <p className="mt-8 text-lg leading-8 text-slate-700">
                  “{testimonio.texto}”
                </p>
              </div>

              <div className="mt-10 border-t border-slate-200 pt-6">
                <p className="text-lg font-bold text-[#071B2F]">
                  {testimonio.nombre}
                </p>

                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#B08A45]">
                  Testimonio real
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] bg-[#071B2F] p-8 text-center text-white sm:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#C8A96A]">
            Resultados que trascienden la conferencia
          </p>

          <h3 className="mx-auto mt-5 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl">
            Una metodología práctica combierte más oportunidades en ventas cerradas, fortaleciendo la negociación y la relación con el cliente.
          </h3>

          <a
            href="#contacto"
            className="mt-8 inline-flex rounded-full bg-[#C8A96A] px-8 py-4 font-semibold text-[#071B2F] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Solicitar una conferencia
          </a>
        </div>
      </div>
    </section>
  );
}