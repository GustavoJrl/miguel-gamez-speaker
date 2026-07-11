"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [error, setError] = useState("");

  function enviarPorWhatsApp(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setError("");

    const formulario = evento.currentTarget;
    const datos = new FormData(formulario);

    const nombre = String(datos.get("nombre") || "").trim();
    const empresa = String(datos.get("empresa") || "").trim();
    const cargo = String(datos.get("cargo") || "").trim();
    const correo = String(datos.get("correo") || "").trim();
    const telefono = String(datos.get("telefono") || "").trim();
    const ubicacion = String(datos.get("ubicacion") || "").trim();
    const fecha = String(datos.get("fecha") || "").trim();
    const asistentes = String(datos.get("asistentes") || "").trim();
    const tipoEvento = String(datos.get("tipoEvento") || "").trim();
    const tema = String(datos.get("tema") || "").trim();
    const mensaje = String(datos.get("mensaje") || "").trim();

    if (!nombre || !correo || !telefono || !tipoEvento || !mensaje) {
      setError("Completa los campos obligatorios antes de continuar.");
      return;
    }

    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!correoValido.test(correo)) {
      setError("Ingresa un correo electrónico válido.");
      return;
    }

    const textoWhatsApp = [
      "Hola, me gustaría solicitar información para contratar una conferencia de Miguel Gámez.",
      "",
      `Nombre: ${nombre}`,
      `Empresa: ${empresa || "No especificada"}`,
      `Cargo: ${cargo || "No especificado"}`,
      `Correo: ${correo}`,
      `Teléfono: ${telefono}`,
      `Ciudad / País: ${ubicacion || "No especificada"}`,
      `Fecha tentativa: ${fecha || "Por definir"}`,
      `Número de asistentes: ${asistentes || "No especificado"}`,
      `Tipo de evento: ${tipoEvento}`,
      `Tema de interés: ${tema || "Por definir"}`,
      "",
      "Mensaje:",
      mensaje,
    ].join("\n");

    const enlace = `https://wa.me/529992430579?text=${encodeURIComponent(
      textoWhatsApp
    )}`;

    window.open(enlace, "_blank", "noopener,noreferrer");
  }

  const campo =
    "mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-[#071B2F] outline-none transition placeholder:text-slate-400 focus:border-[#C8A96A] focus:bg-white focus:ring-4 focus:ring-[#C8A96A]/10";

  return (
    <section
      id="contacto"
      className="relative scroll-mt-24 overflow-hidden bg-[#071B2F] px-6 py-24 text-white sm:py-32 lg:px-8"
    >
      <div className="absolute -left-40 top-12 h-96 w-96 rounded-full bg-[#C8A96A]/10 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#C8A96A]">
            Contratación y disponibilidad
          </p>

          <h2 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Lleva una conferencia de Miguel Gámez a tu organización.
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-white/70">
            Comparte los datos de tu evento y abre una conversación directa por
            WhatsApp con toda la información preparada.
          </p>

          <div className="mt-10 grid gap-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C8A96A]">
                Formatos
              </p>

              <p className="mt-3 leading-7 text-white/75">
                Conferencias, workshops, capacitaciones y sesiones ejecutivas.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C8A96A]">
                Modalidades
              </p>

              <p className="mt-3 leading-7 text-white/75">
                Presencial, virtual o híbrida.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-[#C8A96A]/25 bg-[#C8A96A]/10 p-6">
            <p className="font-semibold text-[#C8A96A]">
              También puedes escribir directamente
            </p>

            <a
              href="https://wa.me/529992430579?text=Hola,%20me%20interesa%20contratar%20una%20conferencia%20de%20Miguel%20Gámez."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex rounded-full bg-[#C8A96A] px-7 py-4 font-bold text-[#071B2F] transition hover:-translate-y-1 hover:bg-white"
            >
              Abrir WhatsApp
            </a>
          </div>
        </div>

        <form
          onSubmit={enviarPorWhatsApp}
          className="rounded-[2rem] bg-white p-7 text-[#071B2F] shadow-2xl sm:p-10"
        >
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#B08A45]">
              Solicitar propuesta
            </p>

            <h3 className="mt-4 text-3xl font-bold sm:text-4xl">
              Cuéntanos sobre tu evento.
            </h3>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <label>
              <span className="font-semibold">Nombre completo *</span>
              <input
                name="nombre"
                type="text"
                required
                autoComplete="name"
                placeholder="Tu nombre"
                className={campo}
              />
            </label>

            <label>
              <span className="font-semibold">Empresa</span>
              <input
                name="empresa"
                type="text"
                autoComplete="organization"
                placeholder="Nombre de la organización"
                className={campo}
              />
            </label>

            <label>
              <span className="font-semibold">Cargo</span>
              <input
                name="cargo"
                type="text"
                autoComplete="organization-title"
                placeholder="Tu puesto"
                className={campo}
              />
            </label>

            <label>
              <span className="font-semibold">Correo electrónico *</span>
              <input
                name="correo"
                type="email"
                required
                autoComplete="email"
                placeholder="nombre@empresa.com"
                className={campo}
              />
            </label>

            <label>
              <span className="font-semibold">Teléfono *</span>
              <input
                name="telefono"
                type="tel"
                required
                autoComplete="tel"
                placeholder="+52 999 000 0000"
                className={campo}
              />
            </label>

            <label>
              <span className="font-semibold">Ciudad / País</span>
              <input
                name="ubicacion"
                type="text"
                placeholder="Mérida, México"
                className={campo}
              />
            </label>

            <label>
              <span className="font-semibold">Fecha tentativa</span>
              <input name="fecha" type="date" className={campo} />
            </label>

            <label>
              <span className="font-semibold">Número de asistentes</span>
              <input
                name="asistentes"
                type="number"
                min="1"
                placeholder="Ej. 150"
                className={campo}
              />
            </label>

            <label>
              <span className="font-semibold">Tipo de evento *</span>
              <select name="tipoEvento" required className={campo}>
                <option value="">Selecciona una opción</option>
                <option value="Conferencia">Conferencia</option>
                <option value="Workshop">Workshop</option>
                <option value="Capacitación empresarial">
                  Capacitación empresarial
                </option>
                <option value="Evento universitario">
                  Evento universitario
                </option>
                <option value="Congreso o convención">
                  Congreso o convención
                </option>
                <option value="Otro">Otro</option>
              </select>
            </label>

            <label>
              <span className="font-semibold">Tema de interés</span>
              <select name="tema" className={campo}>
                <option value="">Por definir</option>
                <option value="Estrategia Comercial">
                  Estrategia Comercial
                </option>
                <option value="Negociación de Alto Impacto">
                  Negociación de Alto Impacto
                </option>
                <option value="Liderazgo Comercial">
                  Liderazgo Comercial
                </option>
                <option value="Metodología de Ventas">
                  Metodología de Ventas
                </option>
                <option value="29 Formas de Prospectar">
                  29 Formas de Prospectar
                </option>
                <option value="Desarrollo Empresarial">
                  Desarrollo Empresarial
                </option>
              </select>
            </label>
          </div>

          <label className="mt-6 block">
            <span className="font-semibold">Mensaje *</span>
            <textarea
              name="mensaje"
              required
              rows={6}
              placeholder="Describe el objetivo del evento, audiencia y cualquier información relevante."
              className={`${campo} resize-y`}
            />
          </label>

          <button
            type="submit"
            className="mt-8 w-full rounded-full bg-[#C8A96A] px-8 py-5 text-lg font-bold text-[#071B2F] transition hover:-translate-y-1 hover:bg-[#071B2F] hover:text-white"
          >
            Continuar por WhatsApp
          </button>

          {error && (
            <div
              role="alert"
              className="mt-6 rounded-2xl bg-red-50 p-5 text-sm font-semibold text-red-700"
            >
              {error}
            </div>
          )}

          <p className="mt-5 text-center text-sm leading-6 text-slate-500">
            Al continuar, se abrirá WhatsApp con la información capturada.
          </p>
        </form>
      </div>
    </section>
  );
}