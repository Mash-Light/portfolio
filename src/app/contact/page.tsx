import { Contacto } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contacto | Devs Team",
  description:
    "Somos un equipo de desarrolladores apasionados creando soluciones innovadoras. Contáctanos para discutir tu próximo proyecto.",
};

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">✉️</span>
      <Heading className="font-black mb-2">Contáctanos</Heading>
      <Paragraph className="mb-10 max-w-xl">
        ¿Tienes un proyecto en mente? ¡Nos encantaría escucharlo! Comunícate con
        nuestro equipo por correo electrónico o completa el formulario de
        contacto a continuación. Nuestro equipo se pondrá en contacto contigo lo
        antes posible.{" "}
      </Paragraph>
      <Contacto />
    </Container>
  );
}
