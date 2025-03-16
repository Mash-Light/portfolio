import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { WorkHistory } from "@/components/WorkHistory";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading className="font-black">Experiencia Laboral</Heading>
      <Paragraph className="max-w-xl mt-4">
        Somos un equipo de desarrolladores full-stack apasionados por{" "}
        <Highlight>crear productos</Highlight> y aplicaciones web que pueden
        impactar positivamente millones de vidas
      </Paragraph>
      <WorkHistory />
    </Container>
  );
}
