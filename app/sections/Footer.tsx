export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#030D17] px-6 pb-10 pt-20 text-white lg:px-8">
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#C8A96A]/10 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-14 border-b border-white/10 pb-14 lg:grid-cols-[1.1fr_0.9fr_0.8fr]">
          <div>
            <a
              href="#inicio"
              className="inline-flex text-2xl font-bold tracking-[0.22em] text-white"
            >
              MIGUEL GÁMEZ
            </a>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
              Conferencista internacional, autor y estratega comercial
              especializado en ventas, negociación, liderazgo y desarrollo de
              equipos.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#C8A96A]/25 bg-[#C8A96A]/10 px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#C8A96A]" />

              <p className="text-sm font-semibold text-[#C8A96A]">
                Conferencias, workshops y formación comercial
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#C8A96A]">
              Navegación
            </p>

            <div className="mt-6 grid gap-4 text-white/65">
              <a href="#miguel" className="transition hover:text-white">
                Quién es Miguel
              </a>

              <a
                href="#metodologia"
                className="transition hover:text-white"
              >
                El Reloj de Arena
              </a>

              <a href="#temas" className="transition hover:text-white">
                Conferencias
              </a>

              <a href="#testimonios" className="transition hover:text-white">
                Testimonios
              </a>

              <a href="#galeria" className="transition hover:text-white">
                Galería
              </a>

              <a href="#libros" className="transition hover:text-white">
                Libros
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#C8A96A]">
              Contacto
            </p>

            <div className="mt-6 grid gap-5">
              <a
                href="https://wa.me/529992430579?text=Hola,%20me%20gustaría%20recibir%20información%20sobre%20las%20conferencias%20de%20Miguel%20Gámez."
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <p className="text-sm text-white/40">WhatsApp</p>

                <p className="mt-1 font-semibold text-white/75 transition group-hover:text-[#C8A96A]">
                  +52 999 243 0579
                </p>
              </a>

              <a
                href="mailto:rh@sellingmethodologies.com"
                className="group"
              >
                <p className="text-sm text-white/40">Coordinación</p>

                <p className="mt-1 break-all font-semibold text-white/75 transition group-hover:text-[#C8A96A]">
                  rh@sellingmethodologies.com
                </p>
              </a>

              <a
                href="mailto:miguel.gamez@sellingmethodologies.com"
                className="group"
              >
                <p className="text-sm text-white/40">Contacto directo</p>

                <p className="mt-1 break-all font-semibold text-white/75 transition group-hover:text-[#C8A96A]">
                  miguel.gamez@sellingmethodologies.com
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 py-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#C8A96A]">
              ¿Listo para llevar esta experiencia a tu organización?
            </p>

            <p className="mt-3 max-w-2xl text-xl font-semibold leading-8 text-white">
              Consulta disponibilidad y recibe una propuesta adaptada a tu
              evento.
            </p>
          </div>

          <a
            href="#contacto"
            className="inline-flex shrink-0 justify-center rounded-full bg-[#C8A96A] px-8 py-4 font-bold text-[#071B2F] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
          >
            Contratar a Miguel
          </a>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Miguel Gámez. Todos los derechos
            reservados.
          </p>

          <p>
            Mérida, Yucatán, México
          </p>
        </div>
      </div>
    </footer>
  );
}