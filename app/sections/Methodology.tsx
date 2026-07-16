const etapas = [
  {
    numero: "01",
    titulo: "Zona Cero",
    descripcion:
      "El vendedor habla menos y escucha más. Mediante preguntas bien ejecutadas busca que el prospecto comparta información valiosa y revele su verdadero motivador de compra.",
  },
  {
    numero: "02",
    titulo: "Venta Inversa",
    descripcion:
      "En lugar de apresurarse a presentar una solución, el vendedor utiliza preguntas estratégicas para comprender mejor la situación y las necesidades del prospecto.",
  },
  {
    numero: "03",
    titulo: "Influenciadores",
    descripcion:
      "Permite identificar a las personas que participan o influyen en la decisión de compra, incluso cuando no se tiene contacto directo con todas ellas.",
  },
  {
    numero: "04",
    titulo: "Propuesta",
    descripcion:
      "La propuesta se enfoca en los puntos previamente acordados con el prospecto y en la solución concreta que ofrece el producto o servicio.",
  },
  {
    numero: "05",
    titulo: "Presupuesto",
    descripcion:
      "El precio se presenta de manera estratégica, en el momento correcto y dentro de una conversación comercial correctamente conducida.",
  },
  {
    numero: "06",
    titulo: "Quinto Elemento",
    descripcion:
      "Busca mantener la certeza después de un acuerdo, anticipo, reunión o cierre, evitando que la relación comercial quede en incertidumbre.",
  },
];

const pilares = [
  {
    titulo: "Certeza",
    texto:
      "Reduce la incertidumbre durante cada etapa del proceso comercial.",
  },
  {
    titulo: "Confianza",
    texto:
      "Fortalece la relación y facilita que el prospecto avance en su decisión.",
  },
];

export default function Methodology() {
  return (
    <section
      id="metodologia"
      className="relative scroll-mt-24 overflow-hidden bg-[#061523] px-6 py-24 text-white sm:py-32 lg:px-8"
    >
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#C8A96A]/10 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#C8A96A]">
            Metodología de ventas
          </p>

          <h2 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            El Reloj de Arena
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/70">
            Una metodología creada para generar certeza y confianza durante
            todo el proceso comercial mediante técnicas, preguntas y acciones
            aplicadas en cada etapa de la venta.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-8 rounded-full bg-[#C8A96A]/10 blur-3xl" />

            <div className="relative rounded-[2.5rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm sm:p-10">
              <div className="mx-auto flex max-w-sm flex-col items-center">
                <div className="h-5 w-52 rounded-t-full bg-[#C8A96A]" />

                <div className="relative mt-2 flex h-28 w-56 items-center justify-center overflow-hidden border-x-[18px] border-[#283A57] sm:h-40">
                  <div className="absolute top-0 h-0 w-0 border-l-[82px] border-r-[82px] border-t-[65px] border-l-transparent border-r-transparent border-t-[#C8A96A]/85" />

                  <div className="relative z-10 rounded-full bg-[#071B2F] px-5 py-3 text-center shadow-xl">
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C8A96A]">
                      Zona Cero
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                      Venta Inversa
                    </p>
                  </div>
                </div>

                <div className="relative flex h-32 w-56 items-center justify-center overflow-hidden border-x-[18px] border-[#283A57] sm:h-44">
                  <div className="absolute bottom-0 h-0 w-0 border-b-[65px] border-l-[82px] border-r-[82px] border-b-[#C8A96A]/85 border-l-transparent border-r-transparent" />

                  <div className="relative z-10 space-y-1.5 text-center text-sm font-semibold text-white">
                    <p className="rounded-full bg-[#071B2F] px-4 py-2">
                      Influenciadores
                    </p>

                    <p className="rounded-full bg-[#071B2F] px-4 py-2">
                      Propuesta
                    </p>

                    <p className="rounded-full bg-[#071B2F] px-4 py-2">
                      Quinto Elemento
                    </p>
                  </div>
                </div>

                <div className="h-5 w-52 rounded-b-full bg-[#C8A96A]" />
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                {pilares.map((pilar) => (
                  <div
                    key={pilar.titulo}
                    className="rounded-2xl border border-[#C8A96A]/25 bg-[#C8A96A]/10 p-5 text-center"
                  >
                    <p className="text-xl font-bold text-[#C8A96A]">
                      {pilar.titulo}
                    </p>

                    <p className="mt-3 text-sm leading-6 text-white/65">
                      {pilar.texto}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#C8A96A]">
              Una metodología estructurada
            </p>

            <h3 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
              Cada etapa prepara la siguiente y mantiene el control del proceso.
            </h3>

            <p className="mt-6 text-lg leading-8 text-white/70">
              El objetivo no es presionar al prospecto, sino comprenderlo,
              generar confianza, presentar una solución relevante y conservar
              la certeza incluso después de llegar a un acuerdo.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {etapas.map((etapa) => (
                <article
                  key={etapa.numero}
                  className="group rounded-[2rem] border border-white/10 bg-white/5 p-7 transition duration-300 hover:-translate-y-2 hover:border-[#C8A96A]/40 hover:bg-white/10"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold tracking-[0.25em] text-[#C8A96A]">
                      {etapa.numero}
                    </span>

                    <span className="h-2.5 w-2.5 rounded-full bg-[#C8A96A] transition duration-300 group-hover:scale-150" />
                  </div>

                  <h4 className="mt-7 text-2xl font-bold">
                    {etapa.titulo}
                  </h4>

                  <p className="mt-4 leading-7 text-white/65">
                    {etapa.descripcion}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 rounded-[2rem] border border-[#C8A96A]/30 bg-[#C8A96A]/10 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#C8A96A]">
              Del conocimiento a la ejecución
            </p>

            <h3 className="mt-4 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl">
              La metodología se complementa con estrategia comercial,
              formatos preestablecidos y ejercicios de prospección.
            </h3>
          </div>

          <a
            href="#contacto"
            className="inline-flex shrink-0 justify-center rounded-full bg-[#C8A96A] px-8 py-4 font-semibold text-[#071B2F] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Conocer el programa
          </a>
        </div>
      </div>
    </section>
  );
}