import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hola, somos Devs Team</Heading>
      <Paragraph className="max-w-xl mt-4">
        Somos un equipo de desarrolladores full stack apasionados por crear
        soluciones tecnológicas. <Highlight>Desarrollamos productos</Highlight>{" "}
        y aplicaciones web que pueden influir en millones de vidas.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        Somos un equipo de ingenieros de software con{" "}
        <Highlight>amplia experiencia</Highlight> desarrollando aplicaciones web
        escalables, de alto rendimiento y visualmente atractivas.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        En qué hemos estado trabajando
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
