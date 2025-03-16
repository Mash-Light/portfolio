"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const images = [
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", // Computer programming image
    "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", // Modern code editor
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", // Developer workspace
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", // Coding screen
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        <Paragraph className="mt-4">
          ¡Hola! Somos un equipo apasionado de desarrolladores con experiencia
          en diversas tecnologías. Bienvenido a nuestro espacio digital.
        </Paragraph>
        <Paragraph className="mt-4">
          Desde que iniciamos este proyecto, nos atrajo profundamente la
          creación de soluciones tecnológicas que resuelven problemas reales.
          Como equipo de desarrollo, disfrutamos convirtiendo líneas de código
          en aplicaciones funcionales, eficientes y bien estructuradas. Nuestro
          enfoque está en lograr la mejor calidad en cada proyecto, garantizando
          que cada detalle encaje perfectamente en el conjunto.
        </Paragraph>
        <Paragraph className="mt-4">
          A lo largo de nuestra trayectoria, hemos trabajado con múltiples
          herramientas y tecnologías, adaptándonos a diferentes necesidades y
          desafíos. Nos apasiona explorar nuevas soluciones y seguir creciendo
          como profesionales en este campo tan dinámico.
        </Paragraph>
        <Paragraph className="mt-4">
          Somos firmes creyentes de que un buen desarrollo no solo se trata de
          que el código funcione, sino de que la experiencia de uso sea
          intuitiva y agradable. El diseño, para nosotros, es una extensión
          natural del desarrollo, y nos esforzamos por asegurar que las
          aplicaciones no solo sean funcionales, sino también estéticamente
          atractivas.
        </Paragraph>
        <Paragraph className="mt-4">
          A través de este sitio web, buscamos compartir nuestros proyectos y
          experiencias en el mundo del desarrollo de software. Si eres un
          entusiasta de la tecnología o simplemente te apasiona el diseño y la
          programación, este es tu lugar.
        </Paragraph>
        <Paragraph className="mt-4">
          Te invitamos a unirte a nosotros en este recorrido donde la
          programación, el diseño y la innovación se encuentran. Estamos
          emocionados de continuar aprendiendo y desarrollando nuevas ideas en
          este fascinante mundo digital.
        </Paragraph>
        <Paragraph className="mt-4">
          Gracias por estar aquí, ¡esperamos que disfrutes del viaje con
          nosotros!
        </Paragraph>
      </div>
    </div>
  );
}
