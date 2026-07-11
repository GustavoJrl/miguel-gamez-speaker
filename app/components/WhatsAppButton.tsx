export default function WhatsAppButton() {
  const mensaje =
    "Hola, me gustaría recibir información sobre las conferencias de Miguel Gámez.";

  const enlace = `https://wa.me/529992430579?text=${encodeURIComponent(
    mensaje
  )}`;

  return (
    <a
      href={enlace}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="group fixed bottom-6 right-6 z-[9000] flex items-center gap-3 rounded-full border border-white/10 bg-[#071B2F] px-4 py-3 text-white shadow-2xl transition duration-300 hover:-translate-y-1 hover:bg-[#C8A96A] hover:text-[#071B2F] sm:px-5"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition duration-300 group-hover:scale-105">
        <svg
          viewBox="0 0 32 32"
          aria-hidden="true"
          className="h-6 w-6 fill-current"
        >
          <path d="M19.11 17.21c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.26 0 1.33.97 2.62 1.11 2.8.14.18 1.91 2.92 4.63 4.09.65.28 1.16.45 1.55.58.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.29.23-.63.23-1.17.16-1.29-.07-.11-.25-.18-.52-.32Z" />
          <path d="M16.04 3.2c-7.08 0-12.83 5.75-12.83 12.83 0 2.26.59 4.47 1.71 6.42L3.1 29l6.72-1.76a12.82 12.82 0 0 0 6.21 1.57h.01c7.08 0 12.83-5.75 12.83-12.83S23.12 3.2 16.04 3.2Zm0 23.45h-.01c-1.91 0-3.79-.51-5.43-1.48l-.39-.23-3.99 1.05 1.06-3.89-.25-.4a10.63 10.63 0 1 1 9.01 4.95Z" />
        </svg>
      </span>

      <span className="hidden pr-1 text-left sm:block">
        <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#C8A96A] transition group-hover:text-[#071B2F]/70">
          ¿Necesitas información?
        </span>

        <span className="mt-1 block font-bold">
          Escríbenos por WhatsApp
        </span>
      </span>
    </a>
  );
}