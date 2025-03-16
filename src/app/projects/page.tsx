import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Proyectos | Equipo Dev",
  description:
    "Somos un equipo de desarrolladores apasionados por crear soluciones innovadoras y efectivas para nuestros clientes.",
};

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">⚡</span>
      <Heading className="font-black mb-10">
        {" "}
        Nuestros Proyectos en Desarrollo
      </Heading>

      <Products />
    </Container>
  );
}
