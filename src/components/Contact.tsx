"use client";
import React, { useState } from "react";

const estadoInicialFormulario = {
  nombre: {
    value: "",
    error: "",
  },
  correo: {
    value: "",
    error: "",
  },
  mensaje: {
    value: "",
    error: "",
  },
};

export const Contacto = () => {
  const [datosFormulario, setDatosFormulario] = useState(
    estadoInicialFormulario
  );

  const manejarEnvio = (e: any) => {
    e.preventDefault();

    // Construir el mensaje para enviar a través de WhatsApp
    const mensaje = `Nombre: ${datosFormulario.nombre.value}%0ACorreo: ${datosFormulario.correo.value}%0AMensaje: ${datosFormulario.mensaje.value}`;

    // El número de teléfono debe estar en formato internacional
    const numeroWhatsApp = "5930996535150"; // Reemplaza con tu número de WhatsApp

    // Crear el enlace para redirigir al usuario a WhatsApp con el mensaje prellenado
    const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

    // Redirigir al enlace de WhatsApp
    window.location.href = enlaceWhatsApp;
  };

  return (
    <form className="form" onSubmit={manejarEnvio}>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <input
          type="text"
          placeholder="Tu Nombre"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={datosFormulario.nombre.value}
          onChange={(e) => {
            setDatosFormulario({
              ...datosFormulario,
              nombre: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
        <input
          type="email"
          placeholder="Tu correo electrónico"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={datosFormulario.correo.value}
          onChange={(e) => {
            setDatosFormulario({
              ...datosFormulario,
              correo: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
      </div>
      <div>
        <textarea
          placeholder="Tu Mensaje"
          rows={10}
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 mt-4 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={datosFormulario.mensaje.value}
          onChange={(e) => {
            setDatosFormulario({
              ...datosFormulario,
              mensaje: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
      </div>
      <button
        className="w-full px-2 py-2 mt-4 bg-neutral-100 rounded-md font-bold text-neutral-500"
        type="submit"
      >
        Enviar
      </button>
    </form>
  );
};
