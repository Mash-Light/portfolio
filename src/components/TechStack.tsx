import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const tecnologias = [
    {
      titulo: "Next.js",
      src: "/images/logos/next.png",
      className: "h-10 w-14",
    },
    {
      titulo: "AWS",
      src: "/images/logos/aws.webp",
      className: "h-10 w-10",
    },
    {
      titulo: "Figma",
      src: "/images/logos/figma.png",
      className: "h-10 w-8",
    },
    {
      titulo: "Framer Motion",
      src: "/images/logos/framer.webp",
      className: "h-10 w-10",
    },
    {
      titulo: "Node",
      src: "/images/logos/node.png",
      className: "h-10 w-12",
    },
    {
      titulo: "Tailwind",
      src: "/images/logos/tailwind.png",
      className: "h-10 w-24",
    },
    {
      titulo: "Vercel",
      src: "/images/logos/vercel.png",
      className: "h-10 w-24",
    },
    {
      titulo: "MUI",
      src: "/images/logos/MUI.png",
      className: "h-10 w-12",
    },
    {
      titulo: "React",
      src: "/images/logos/react.png",
      className: "h-10 w-24",
    },
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tecnologías
      </Heading>
      <div className="flex flex-wrap">
        {tecnologias.map((elemento) => (
          <Image
            src={elemento.src}
            key={elemento.src}
            width={`200`}
            height={`200`}
            alt={elemento.titulo}
            className={twMerge("object-contain mr-4 mb-4", elemento.className)}
          />
        ))}
      </div>
    </div>
  );
};
