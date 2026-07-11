const opcionesWhatsApp = [
  {
    titulo: "Quiero contratar una conferencia",
    descripcion:
      "Consulta disponibilidad, formatos y propuesta para tu evento.",
    mensaje:
      "Hola, me gustaría recibir información para contratar una conferencia de Miguel Gámez. ¿Podrían compartirme disponibilidad, formatos y costos?",
  },
  {
    titulo: "Quiero información sobre los libros",
    descripcion:
      "Solicita información sobre ejemplares y compras institucionales.",
    mensaje:
      "Hola, me gustaría recibir información sobre los libros de Miguel Gámez y las opciones de compra.",
  },
  {
    titulo: "Quiero proponer una colaboración",
    descripcion:
      "Para alianzas, universidades, cámaras y proyectos especiales.",
    mensaje:
      "Hola, me gustaría proponer una colaboración con Miguel Gámez. ¿Podemos agendar una conversación?",
  },
  {
    titulo: "Quiero conocer la metodología",
    descripcion:
      "Solicita información sobre programas, workshops y formación comercial.",
    mensaje:
      "Hola, me gustaría conocer más sobre la metodología de ventas de Miguel Gámez y sus programas de formación.",
  },
];

function crearEnlaceWhatsApp(mensaje: string) {
  return `https://wa.me/529992430579?text=${encodeURIComponent(mensaje)}`;
}

export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative scroll-mt-24 overflow-hidden bg-[#071B2F] px-6 py-24 text-white sm:py-32 lg:px-8"
    >
      <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#C8A96A]/10 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#C8A96A]">
            Contacto
          </p>

          <h2 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Hablemos de tu próximo evento, proyecto o colaboración.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/70">
            Elige la opción que mejor describa lo que necesitas y abre una
            conversación directa por WhatsApp.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {opcionesWhatsApp.map((opcion, index) => (
            <a
              key={opcion.titulo}
              href={crearEnlaceWhatsApp(opcion.mensaje)}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[2rem] border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-[#C8A96A]/50 hover:bg-white hover:shadow-2xl sm:p-10"
            >
              <div className="flex items-start justify-between gap-6">
                <span className="text-sm font-bold tracking-[0.25em] text-[#C8A96A]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl transition duration-300 group-hover:border-[#C8A96A] group-hover:bg-[#C8A96A] group-hover:text-[#071B2F]">
                  ↗
                </span>
              </div>

              <h3 className="mt-10 text-2xl font-bold text-white transition group-hover:text-[#071B2F] sm:text-3xl">
                {opcion.titulo}
              </h3>

              <p className="mt-5 leading-8 text-white/65 transition group-hover:text-slate-600">
                {opcion.descripcion}
              </p>

              <p className="mt-8 font-semibold text-[#C8A96A] transition group-hover:text-[#071B2F]">
                Abrir WhatsApp
              </p>
            </a>
          ))}
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <a
            href="mailto:rh@sellingmethodologies.com?subject=Solicitud%20de%20información%20sobre%20Miguel%20Gámez"
            className="rounded-[2rem] bg-white p-8 text-[#071B2F] transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-10"
          >
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#B08A45]">
              Coordinación y disponibilidad
            </p>

            <h3 className="mt-4 text-2xl font-bold sm:text-3xl">
              rh@sellingmethodologies.com
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Para cotizaciones, fechas, logística, eventos y solicitudes
              generales.
            </p>
          </a>

          <a
            href="mailto:miguel.gamez@sellingmethodologies.com?subject=Contacto%20con%20Miguel%20Gámez"
            className="rounded-[2rem] border border-[#C8A96A]/30 bg-[#C8A96A] p-8 text-[#071B2F] transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-10"
          >
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#071B2F]/60">
              Contacto directo
            </p>

            <h3 className="mt-4 text-2xl font-bold sm:text-3xl">
              miguel.gamez@sellingmethodologies.com
            </h3>

            <p className="mt-4 leading-7 text-[#071B2F]/70">
              Para invitaciones especiales, colaboraciones y oportunidades
              estratégicas.
            </p>
          </a>
        </div>

        <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center sm:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#C8A96A]">
            Para agilizar tu solicitud
          </p>

          <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-white/75">
            Comparte ciudad, fecha tentativa, tipo de audiencia, número
            aproximado de asistentes y el tema de interés.
          </p>
        </div>
      </div>
    </section>
  );
}