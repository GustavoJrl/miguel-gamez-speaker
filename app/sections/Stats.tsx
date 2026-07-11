"use client";

import { useEffect, useRef, useState } from "react";

const estadisticas = [
  {
    valor: 5000,
    prefijo: "+",
    descripcion: "Profesionales capacitados",
  },
  {
    valor: 300,
    prefijo: "+",
    descripcion: "Conferencias y workshops",
  },
  {
    valor: 10,
    prefijo: "+",
    descripcion: "Años desarrollando vendedores",
  },
  {
    valor: 2,
    prefijo: "",
    descripcion: "Libros publicados",
  },
];

function AnimatedNumber({
  valor,
  prefijo,
  iniciar,
}: {
  valor: number;
  prefijo: string;
  iniciar: boolean;
}) {
  const [numero, setNumero] = useState(0);

  useEffect(() => {
    if (!iniciar) return;

    const duracion = 1800;
    const inicio = performance.now();

    const animar = (tiempoActual: number) => {
      const progreso = Math.min((tiempoActual - inicio) / duracion, 1);

      const progresoSuave = 1 - Math.pow(1 - progreso, 3);
      const valorActual = Math.floor(progresoSuave * valor);

      setNumero(valorActual);

      if (progreso < 1) {
        requestAnimationFrame(animar);
      }
    };

    requestAnimationFrame(animar);
  }, [iniciar, valor]);

  return (
    <span>
      {prefijo}
      {numero.toLocaleString("es-MX")}
    </span>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [iniciarAnimacion, setIniciarAnimacion] = useState(false);

  useEffect(() => {
    const elemento = sectionRef.current;

    if (!elemento) return;

    const observer = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setIniciarAnimacion(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(elemento);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#061523] px-6 py-24 text-white sm:py-28 lg:px-8"
    >
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#C8A96A]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#C8A96A]">
            Trayectoria en cifras
          </p>

          <h2 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
            Experiencia que se traduce en formación, metodología y resultados.
          </h2>
        </div>

        <div className="mt-16 grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
          {estadisticas.map((estadistica, index) => (
            <div
              key={estadistica.descripcion}
              className={`group relative p-8 text-center sm:p-10 ${
                index !== estadisticas.length - 1
                  ? "border-b border-white/10 sm:border-b-0 sm:border-r"
                  : ""
              }`}
            >
              <div className="absolute inset-0 bg-[#C8A96A]/0 transition duration-500 group-hover:bg-[#C8A96A]/10" />

              <div className="relative">
                <p className="text-5xl font-bold text-[#C8A96A] sm:text-6xl">
                  <AnimatedNumber
                    valor={estadistica.valor}
                    prefijo={estadistica.prefijo}
                    iniciar={iniciarAnimacion}
                  />
                </p>

                <p className="mx-auto mt-5 max-w-[12rem] text-base leading-7 text-white/65">
                  {estadistica.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}