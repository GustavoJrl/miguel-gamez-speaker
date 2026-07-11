"use client";

import { useEffect, useState } from "react";

const enlaces = [
  { nombre: "Quién es", href: "#miguel" },
  { nombre: "Por qué Miguel", href: "#por-que-miguel" },
  { nombre: "Problemas", href: "#problemas" },
  { nombre: "Metodología", href: "#metodologia" },
  { nombre: "Conferencias", href: "#temas" },
  { nombre: "Testimonios", href: "#testimonios" },
  { nombre: "Galería", href: "#galeria" },
  { nombre: "Libros", href: "#libros" },
];

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [conScroll, setConScroll] = useState(false);

  useEffect(() => {
    const revisarScroll = () => {
      setConScroll(window.scrollY > 40);
    };

    revisarScroll();
    window.addEventListener("scroll", revisarScroll);

    return () => window.removeEventListener("scroll", revisarScroll);
  }, []);

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[9999] transition-all duration-500 ${
        conScroll || menuAbierto
          ? "border-b border-white/10 bg-[#071B2F]/95 shadow-xl backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 lg:px-8 ${
          conScroll ? "h-16" : "h-20"
        }`}
      >
        <a
          href="#inicio"
          onClick={cerrarMenu}
          className="text-lg font-bold tracking-[0.2em] text-white"
        >
          MIGUEL GÁMEZ
        </a>

        <div className="hidden items-center gap-5 lg:flex">
          {enlaces.map((enlace) => (
            <a
              key={enlace.href}
              href={enlace.href}
              className="text-sm text-white/75 transition hover:text-white"
            >
              {enlace.nombre}
            </a>
          ))}

          <a
            href="#contacto"
            className="rounded-full bg-[#C8A96A] px-6 py-3 font-semibold text-[#071B2F] transition hover:-translate-y-1 hover:shadow-xl"
          >
            Contratar
          </a>
        </div>

        <button
          type="button"
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="text-3xl text-white lg:hidden"
        >
          {menuAbierto ? "×" : "☰"}
        </button>
      </nav>

      {menuAbierto && (
        <div className="border-t border-white/10 bg-[#071B2F] lg:hidden">
          <div className="flex flex-col px-6 py-6">
            {enlaces.map((enlace) => (
              <a
                key={enlace.href}
                href={enlace.href}
                onClick={cerrarMenu}
                className="rounded-xl px-3 py-3 text-white/80 transition hover:bg-white/5 hover:text-white"
              >
                {enlace.nombre}
              </a>
            ))}

            <a
              href="#contacto"
              onClick={cerrarMenu}
              className="mt-4 rounded-full bg-[#C8A96A] px-6 py-4 text-center font-semibold text-[#071B2F]"
            >
              Contratar a Miguel
            </a>
          </div>
        </div>
      )}
    </header>
  );
}