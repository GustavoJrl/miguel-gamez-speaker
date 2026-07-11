import Image from "next/image";

const libros = [
  {
    titulo: "Estrategia Comercial",
    descripcion:
      "Una guía para estructurar la forma de vender, definir prioridades y construir una estrategia comercial más clara y ejecutable.",
  },
  {
    titulo: "El Diagrama del Vendedor",
    descripcion:
      "Una metodología que conecta identidad, estrategia, acción y resultados dentro de un proceso comercial práctico.",
  },
];

export default function Books() {
  return (
    <section
      id="libros"
      className="relative scroll-mt-24 overflow-hidden bg-white px-6 py-24 text-[#071B2F] sm:py-32 lg:px-8"
    >
      <div className="absolute -right-36 top-16 h-96 w-96 rounded-full bg-[#C8A96A]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-[#C8A96A]/15 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[#F5F2EA] shadow-2xl">
            <Image
              src="/images/libros.JPG"
              alt="Libros Estrategia Comercial y El Diagrama del Vendedor de Miguel Gámez"
              width={1200}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="relative z-10 mx-auto -mt-8 w-[88%] rounded-3xl bg-[#071B2F] p-7 text-center text-white shadow-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#C8A96A]">
              Conocimiento aplicado
            </p>

            <p className="mt-3 text-xl font-semibold">
              Dos libros para transformar la manera de vender y dirigir.
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#B08A45]">
            Autor y creador de metodología
          </p>

          <h2 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Ideas que continúan después de la conferencia.
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Los libros de Miguel Gámez profundizan en los principios que
            comparte en sus conferencias y programas: estrategia, identidad,
            ejecución, confianza y desarrollo comercial.
          </p>

          <div className="mt-12 space-y-6">
            {libros.map((libro, index) => (
              <article
                key={libro.titulo}
                className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#C8A96A] text-sm font-bold text-[#071B2F]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-2xl font-bold">{libro.titulo}</h3>

                    <p className="mt-4 leading-7 text-slate-600">
                      {libro.descripcion}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
<div className="mt-10 flex flex-col gap-4 sm:flex-row">

  <a
    href="https://www.amazon.com.mx/stores/author/B0CJFZZTSN"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full bg-[#071B2F] px-8 py-4 text-center font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#0B2A47] hover:shadow-xl"
  >
    Comprar en Amazon
  </a>

  <a
    href="https://wa.me/529992430579?text=Hola,%20me%20interesan%20los%20libros%20de%20Miguel%20Gámez."
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full bg-[#C8A96A] px-8 py-4 text-center font-semibold text-[#071B2F] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
  >
    Pedir por WhatsApp
  </a>

</div>
        </div>
      </div>
    </section>
  );
}