import Image from "next/image";

const trayectoria = [
  "Licenciado en Administración de Empresas con especialidad en Finanzas por el ITESM.",
  "MBA con especialidad en Mercadotecnia y Diplomado D1 por el IPADE.",
  "Autor de dos libros: El Diagrama del Vendedor y Estrategia Comercial.",
  "Creador de la metodología de ventas El Reloj de Arena.",
];

export default function About() {
  return (
    <section
      id="miguel"
      className="relative scroll-mt-20 overflow-hidden bg-white px-6 pb-32 pt-16 text-[#071B2F] lg:px-8 lg:pt-20"
    >
      <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-[#C8A96A]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-start">
        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -inset-6 rounded-[40px] bg-[#C8A96A]/15 blur-3xl" />

          <div className="relative overflow-hidden rounded-[32px] shadow-2xl">
            <Image
              src="/images/miguel2.jpg"
              alt="Miguel Gámez, conferencista y estratega comercial"
              width={700}
              height={850}
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="relative z-10 mx-auto -mt-8 w-[88%] rounded-3xl bg-[#C8A96A] p-8 text-center shadow-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[#071B2F]/70">
              Su filosofía
            </p>

            <h3 className="mt-4 text-3xl font-bold leading-tight text-[#071B2F]">
              “No nací siendo vendedor.”
            </h3>

            <p className="mt-3 text-lg font-medium leading-7 text-[#071B2F]">
              Tuve que estudiar, aprender y mejorar.
            </p>
          </div>
        </div>

        <div className="pt-2">
          <p className="font-semibold uppercase tracking-[0.35em] text-[#C8A96A]">
            ¿Quién es Miguel Gámez?
          </p>

          <h2 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Un estratega comercial que convirtió la experiencia en una metodología.
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
            Miguel Gámez es conferencista internacional, consultor y autor
            especializado en ventas, negociación, liderazgo y estrategia
            comercial. Ha acompañado a empresas, instituciones y emprendedores
            en la construcción de procesos comerciales de alto desempeño.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
            Su metodología demuestra que vender no depende del talento innato,
            sino de contar con un proceso claro, disciplina y una estrategia
            comercial bien diseñada.
          </p>

          <div className="mt-12 space-y-5">
            {trayectoria.map((item) => (
              <div
                key={item}
                className="flex items-start gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C8A96A] font-bold text-[#071B2F]">
                  ✓
                </div>

                <p className="text-lg leading-8 text-slate-700">{item}</p>
              </div>
            ))}
          </div>

          <a
            href="#contacto"
            className="mt-12 inline-flex rounded-full bg-[#071B2F] px-9 py-5 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#0B2A47] hover:shadow-xl"
          >
            Llevar a Miguel a mi organización
          </a>
        </div>
      </div>
    </section>
  );
}