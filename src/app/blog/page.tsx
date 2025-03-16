import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { getAllBlogs } from "../../../lib/getAllBlogs";
import { Blogs } from "@/components/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Equipo de Desarrollo",
  description:
    "Somos un equipo de desarrolladores apasionados por crear soluciones tecnológicas innovadoras y compartir conocimiento.",
};

export default async function Blog() {
  const blogs = await getAllBlogs();
  const data = blogs.map(({ component, ...meta }) => meta);

  return (
    <Container>
      <span className="text-4xl">📝</span>
      <Heading className="font-black pb-4">Escribimos sobre tecnología</Heading>
      <Paragraph className="pb-10">
        Desde que éramos <Highlight>pequeños</Highlight>, nos ha fascinado la
        tecnología.
      </Paragraph>
      <Blogs blogs={data} />
    </Container>
  );
}
