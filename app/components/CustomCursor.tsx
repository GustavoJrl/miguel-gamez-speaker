"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [posicion, setPosicion] = useState({ x: -100, y: -100 });
  const [sobreInteractivo, setSobreInteractivo] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const moverCursor = (evento: MouseEvent) => {
      setPosicion({
        x: evento.clientX,
        y: evento.clientY,
      });

      setVisible(true);

      const elemento = evento.target as HTMLElement;

      const esInteractivo = Boolean(
        elemento.closest("a, button, video, [role='button']")
      );

      setSobreInteractivo(esInteractivo);
    };

    const ocultarCursor = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", moverCursor);
    window.addEventListener("mouseleave", ocultarCursor);

    return () => {
      window.removeEventListener("mousemove", moverCursor);
      window.removeEventListener("mouseleave", ocultarCursor);
    };
  }, []);

  return (
    <>
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-[30000] hidden h-3 w-3 rounded-full bg-[#C8A96A] transition-opacity duration-200 lg:block ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: `translate3d(${posicion.x - 6}px, ${posicion.y - 6}px, 0)`,
        }}
      />

      <div
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-[29999] hidden rounded-full border border-[#C8A96A]/70 transition-[width,height,opacity,border-color,background-color] duration-200 lg:block ${
          sobreInteractivo
            ? "h-14 w-14 border-[#C8A96A] bg-[#C8A96A]/10"
            : "h-9 w-9 bg-transparent"
        } ${visible ? "opacity-100" : "opacity-0"}`}
        style={{
          transform: `translate3d(${
            posicion.x - (sobreInteractivo ? 28 : 18)
          }px, ${posicion.y - (sobreInteractivo ? 28 : 18)}px, 0)`,
        }}
      />
    </>
  );
}