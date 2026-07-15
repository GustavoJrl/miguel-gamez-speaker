"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const imagenes = [
  {
    src: "/images/conferencia1.JPG",
    alt: "Miguel Gámez impartiendo una capacitación comercial",
    clase: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/conferencia8.JPG",
    alt: "Miguel Gámez en una conferencia empresarial",
    clase: "",
  },
  {
    src: "/images/conferencia3.JPG",
    alt: "Miguel Gámez participando en un evento profesional",
    clase: "",
  },
  {
    src: "/images/conferencia9.JPG",
    alt: "Miguel Gámez frente a una audiencia",
    clase: "md:row-span-2",
  },
  {
    src: "/images/conferencia5.JPG",
    alt: "Miguel Gámez presentando El Diagrama del Vendedor",
    clase: "",
  },
  {
    src: "/images/conferencia6.JPG",
    alt: "Miguel Gámez compartiendo una charla con estudiantes",
    clase: "",
  },
  {
    src: "/images/conferencia10.JPG",
    alt: "Miguel Gámez durante una conferencia de ventas",
    clase: "md:col-span-2",
  },
  {
    src: "/images/grupo.JPG",
    alt: "Miguel Gámez con participantes de una experiencia formativa",
    clase: "",
  },
];

export default function Gallery() {
  const [imagenActiva, setImagenActiva] = useState<number | null>(null);

  const cerrarGaleria = () => {
    setImagenActiva(null);
  };

  const mostrarAnterior = () => {
    setImagenActiva((indiceActual) => {
      if (indiceActual === null) return null;

      return indiceActual === 0
        ? imagenes.length - 1
        : indiceActual - 1;
    });
  };

  const mostrarSiguiente = () => {
    setImagenActiva((indiceActual) => {
      if (indiceActual === null) return null;

      return indiceActual === imagenes.length - 1
        ? 0
        : indiceActual + 1;
    });
  };

  useEffect(() => {
    if (imagenActiva === null) return;

    document.body.style.overflow = "hidden";

    const controlarTeclado = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") {
        cerrarGaleria();
      }

      if (evento.key === "ArrowLeft") {
        mostrarAnterior();
      }

      if (evento.key === "ArrowRight") {
        mostrarSiguiente();
      }
    };

    window.addEventListener("keydown", controlarTeclado);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", controlarTeclado);
    };
  }, [imagenActiva]);

  return (
    <>
      <section
        id="galeria"
        className="relative scroll-mt-24 overflow-hidden bg-[#F5F2EA] px-6 py-24 text-[#071B2F] sm:py-32 lg:px-8"
      >
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#C8A96A]/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#B08A45]">
                Miguel en acción
              </p>

              <h2 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Experiencias que conectan, activan y dejan herramientas.
              </h2>
            </div>

            <p className="max-w-xl text-lg leading-8 text-slate-600">
              Conferencias, workshops y sesiones diseñadas para que cada
              audiencia participe, reflexione y transforme ideas en acciones
              comerciales.
            </p>
          </div>

          <div className="mt-16 grid auto-rows-[230px] grid-cols-1 gap-5 md:grid-cols-3">
            {imagenes.map((imagen, index) => (
              <button
                key={imagen.src}
                type="button"
                onClick={() => setImagenActiva(index)}
                className={`group relative overflow-hidden rounded-[2rem] bg-[#071B2F] text-left shadow-lg ${imagen.clase}`}
              >
                <Image
                  src={imagen.src}
                  alt={imagen.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071B2F]/80 via-[#071B2F]/10 to-transparent opacity-70 transition duration-500 group-hover:opacity-90" />

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C8A96A]">
                      Experiencia {String(index + 1).padStart(2, "0")}
                    </p>

                    <p className="mt-2 text-lg font-semibold">
                      Ventas, estrategia y desarrollo comercial
                    </p>
                  </div>

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-xl backdrop-blur-sm transition duration-300 group-hover:bg-[#C8A96A] group-hover:text-[#071B2F]">
                    +
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-start justify-between gap-8 rounded-[2rem] bg-[#071B2F] p-8 text-white sm:p-12 lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#C8A96A]">
                Lleva esta experiencia a tu organización
              </p>

              <h3 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                Una conferencia puede inspirar. Una metodología puede cambiar
                la forma de trabajar.
              </h3>
            </div>

            <a
              href="#contacto"
              className="shrink-0 rounded-full bg-[#C8A96A] px-8 py-4 font-semibold text-[#071B2F] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Consultar disponibilidad
            </a>
          </div>
        </div>
      </section>

      {imagenActiva !== null && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Visor de galería"
          onClick={cerrarGaleria}
        >
          <button
            type="button"
            onClick={cerrarGaleria}
            className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white transition hover:bg-white hover:text-black"
            aria-label="Cerrar imagen"
          >
            ×
          </button>

          <button
            type="button"
            onClick={(evento) => {
              evento.stopPropagation();
              mostrarAnterior();
            }}
            className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-3xl text-white transition hover:bg-[#C8A96A] hover:text-[#071B2F] sm:left-8"
            aria-label="Imagen anterior"
          >
            ‹
          </button>

          <div
            className="relative h-[78vh] w-full max-w-6xl"
            onClick={(evento) => evento.stopPropagation()}
          >
            <Image
              src={imagenes[imagenActiva].src}
              alt={imagenes[imagenActiva].alt}
              fill
              priority
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <button
            type="button"
            onClick={(evento) => {
              evento.stopPropagation();
              mostrarSiguiente();
            }}
            className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-3xl text-white transition hover:bg-[#C8A96A] hover:text-[#071B2F] sm:right-8"
            aria-label="Imagen siguiente"
          >
            ›
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-5 py-2 text-sm text-white/75 backdrop-blur-md">
            {imagenActiva + 1} / {imagenes.length}
          </div>
        </div>
      )}
    </>
  );
}