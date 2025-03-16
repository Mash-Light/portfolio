import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { SingleProduct } from "@/components/Product";
import { Products } from "@/components/Products";
import { products } from "@/constants/products";
import { Product } from "@/types/products";
import { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const producto = products.find((p) => p.slug === slug) as Product | undefined;
  if (producto) {
    return {
      title: producto.title,
      description: producto.description,
    };
  } else {
    return {
      title: "Proyectos | Equipo de Desarrollo",
      description:
        "Somos un equipo de desarrolladores apasionados dedicados a crear soluciones digitales y trabajar de forma remota en diversos proyectos tecnológicos.",
    };
  }
}

export default function PaginaProyectoIndividual({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const producto = products.find((p) => p.slug === slug);

  if (!producto) {
    redirect("/projects");
  }
  return (
    <Container>
      <SingleProduct product={producto} />
    </Container>
  );
}
