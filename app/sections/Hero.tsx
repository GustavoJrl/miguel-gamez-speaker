"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { estadisticasHero } from "../data/stats";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const temporizador = window.setTimeout(() => {
      setVisible(true);
    }, 180);

    return () => window.clearTimeout(temporizador);
  }, []);

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#061523] px-6 pb-20 pt-32 text-white lg:px-8"
    >
      <div className="absolute inset-0">
        <div className="absolute left-[-10rem] top-20 h-96 w-96 rounded-full bg-[#C8A96A]/10 blur-3xl" />

        <div className="absolute bottom-[-8rem] right-[-6rem] h-[32rem] w-[32rem] rounded-full bg-white/5 blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_32%,rgba(200,169,106,0.16),transparent_28%)]" />

        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
        <div
          className={`relative z-10 transition-all duration-1000 ease-out ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-md">
            <span className="h-2.5 w-2.5 rounded-full bg-[#C8A96A]" />

            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#C8A96A] sm:text-sm">
              Conferencista internacional
            </p>
          </div>

          <h1 className="mt-8 max-w-4xl text-5xl font-bold leading-[0.98] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            Las ventas no son suerte.

            <span className="mt-3 block text-[#C8A96A]">
              Son método, estrategia y ejecución.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl sm:leading-9">
            Miguel Gámez transforma equipos comerciales mediante conferencias,
            workshops y experiencias de aprendizaje enfocadas en ventas,
            negociación, liderazgo y estrategia comercial.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contacto"
              className="group relative overflow-hidden rounded-full bg-[#C8A96A] px-8 py-4 text-center font-bold text-[#071B2F] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(200,169,106,0.3)]"
            >
              <span className="relative z-10">
                Solicitar conferencia
              </span>

              <span className="absolute inset-0 translate-y-full bg-white transition duration-300 group-hover:translate-y-0" />
            </a>

            <a
              href="#metodologia"
              className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-center font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white hover:text-[#071B2F]"
            >
              Conocer la metodología
            </a>
          </div>

          <div className="mt-14 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-8 border-t border-white/10 pt-8 sm:grid-cols-4">
            {estadisticasHero.map((estadistica) => (
              <div key={estadistica.descripcion}>
                <p className="text-3xl font-bold text-[#C8A96A] xl:text-4xl">
                  {estadistica.prefijo}
                  {estadistica.valor.toLocaleString("es-MX")}
                </p>

                <p className="mt-2 text-sm leading-6 text-white/55">
                  {estadistica.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`relative mx-auto w-full max-w-2xl transition-all delay-200 duration-1000 ease-out ${
            visible
              ? "translate-x-0 scale-100 opacity-100"
              : "translate-x-14 scale-[0.98] opacity-0"
          }`}
        >
          <div className="absolute -inset-8 rounded-[3rem] bg-[#C8A96A]/10 blur-3xl" />

          <div className="relative min-h-[34rem] overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0B223A] shadow-[0_35px_100px_rgba(0,0,0,0.45)] sm:min-h-[42rem]">
            <Image
              src="/images/hero.jpg"
              alt="Miguel Gámez impartiendo una presentación empresarial"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-contain object-top p-3 transition duration-[1800ms] ease-out hover:scale-[1.015]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#061523]/80 via-transparent to-transparent" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#061523]/15 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C8A96A] sm:text-sm">
                Miguel Gámez
              </p>

              <p className="mt-3 max-w-lg text-2xl font-bold leading-tight sm:text-3xl">
                Conferencias que convierten ideas comerciales en acciones.
              </p>
            </div>
          </div>

          <div className="relative z-20 mx-auto -mt-7 flex w-[90%] flex-col justify-between gap-5 rounded-[1.75rem] border border-white/10 bg-[#0A2137]/95 p-6 shadow-2xl backdrop-blur-xl sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C8A96A]">
                Autor y creador
              </p>

              <p className="mt-2 text-lg font-bold text-white">
                El Reloj de Arena
              </p>
            </div>

            <div className="h-px bg-white/10 sm:h-10 sm:w-px" />

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C8A96A]">
                Especialidad
              </p>

              <p className="mt-2 text-lg font-bold text-white">
                Ventas y estrategia
              </p>
            </div>
          </div>

          <div className="absolute -right-2 top-10 hidden rounded-2xl border border-white/10 bg-white/10 px-5 py-4 shadow-xl backdrop-blur-xl sm:block lg:-right-6">
            <p className="text-2xl font-bold text-[#C8A96A]">
              Speaker
            </p>

            <p className="mt-1 text-sm text-white/65">
              Presencial · Virtual · Híbrido
            </p>
          </div>
        </div>
      </div>

      <a
        href="#miguel"
        aria-label="Bajar a la siguiente sección"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/45 transition hover:text-[#C8A96A] lg:flex"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.3em]">
          Descubre más
        </span>

        <span className="flex h-11 w-7 justify-center rounded-full border border-white/20 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-[#C8A96A]" />
        </span>
      </a>
    </section>
  );
}