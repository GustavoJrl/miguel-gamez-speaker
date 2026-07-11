"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [ocultando, setOcultando] = useState(false);

  useEffect(() => {
    const iniciarSalida = window.setTimeout(() => {
      setOcultando(true);
    }, 1000);

    const quitarLoader = window.setTimeout(() => {
      setVisible(false);
    }, 1500);

    return () => {
      window.clearTimeout(iniciarSalida);
      window.clearTimeout(quitarLoader);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[20000] flex items-center justify-center bg-[#061523] transition-all duration-500 ${
        ocultando ? "pointer-events-none scale-105 opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center">
        <div className="absolute h-40 w-40 rounded-full bg-[#C8A96A]/15 blur-3xl" />

        <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-[#C8A96A]/30 bg-white/5 shadow-2xl backdrop-blur-xl">
          <span className="text-4xl font-bold tracking-[-0.08em] text-[#C8A96A]">
            MG
          </span>
        </div>

        <p className="mt-6 text-xs font-bold uppercase tracking-[0.4em] text-white/55">
          Miguel Gámez
        </p>

        <div className="mt-8 h-px w-32 overflow-hidden bg-white/10">
          <div className="h-full w-full origin-left animate-[loaderLine_1s_ease-in-out_forwards] bg-[#C8A96A]" />
        </div>
      </div>
    </div>
  );
}