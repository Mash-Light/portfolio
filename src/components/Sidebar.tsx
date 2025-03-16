"use client";
import { navlinks } from "@/constants/navlinks";
import { Navlink } from "@/types/navlink";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { Heading } from "./Heading";
import { socials } from "@/constants/socials";
import { Badge } from "./Badge";
import { AnimatePresence, motion } from "framer-motion";
import { IconLayoutSidebarRightCollapse } from "@tabler/icons-react";
import { isMobile } from "@/lib/utils";

// Updated collaborator data as of December 2023
const collaborators = [
  {
    imageSrc: "/images/perfil.jpg",
    name: "Favio Davila",
    role: "Full Stack Developer",
  },
  {
    imageSrc: "/images/perfil2.jpg",
    name: "Michael Alava",
    role: "Full Stack Developer",
  },
];

export const Sidebar = () => {
  const [open, setOpen] = useState(isMobile() ? false : true);
  const [scrollIndex, setScrollIndex] = useState(0);
  const collaboratorsRef = useRef<HTMLDivElement>(null);

  // Enhanced profile rotation with modern animation timing
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollIndex((prev) =>
        prev + 1 >= collaborators.length ? 0 : prev + 1
      );
    }, 2500); // Slightly longer interval for better UX

    return () => clearInterval(interval);
  }, []);

  const handleWheel = (event: WheelEvent) => {
    if (event.deltaY > 0) {
      setScrollIndex((prev) =>
        prev + 1 >= collaborators.length ? 0 : prev + 1
      );
    } else {
      setScrollIndex((prev) =>
        prev - 1 < 0 ? collaborators.length - 1 : prev - 1
      );
    }
  };

  useEffect(() => {
    const element = collaboratorsRef.current;
    if (element) {
      element.addEventListener("wheel", handleWheel);
      return () => element.removeEventListener("wheel", handleWheel);
    }
  }, []);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            exit={{ x: -200 }}
            className="px-6 z-[100] py-10 bg-neutral-100/95 backdrop-blur-sm max-w-[14rem] lg:w-fit fixed lg:relative h-screen left-0 flex flex-col justify-between"
          >
            <div className="flex-1 overflow-hidden">
              <div ref={collaboratorsRef} className="flex flex-col gap-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={scrollIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <SidebarHeader
                      imageSrc={collaborators[scrollIndex].imageSrc}
                      name={collaborators[scrollIndex].name}
                      role={collaborators[scrollIndex].role}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              <Navigation setOpen={setOpen} />
            </div>
            <div onClick={() => isMobile() && setOpen(false)}>
              <Badge href="/resume" text="Ver CV 2025" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        className="fixed lg:hidden bottom-4 right-4 h-8 w-8 border border-neutral-200 rounded-full backdrop-blur-sm flex items-center justify-center z-50 hover:bg-white/50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <IconLayoutSidebarRightCollapse className="h-4 w-4 text-secondary" />
      </button>
    </>
  );
};

export const Navigation = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <div className="flex flex-col space-y-1 my-10 relative z-[100]">
      {navlinks.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => isMobile() && setOpen(false)}
          className={twMerge(
            "text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm",
            isActive(link.href) && "bg-white shadow-lg text-primary"
          )}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-sky-500"
            )}
          />
          <span>{link.label}</span>
        </Link>
      ))}

      <Heading as="p" className="text-sm md:text-sm lg:text-sm pt-10 px-2">
        Redes 2024
      </Heading>
      {socials.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          className={twMerge(
            "text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm"
          )}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-sky-500"
            )}
          />
          <span>{link.label}</span>
        </Link>
      ))}
    </div>
  );
};

const SidebarHeader = ({
  imageSrc,
  name,
  role,
}: {
  imageSrc: string;
  name: string;
  role: string;
}) => {
  return (
    <div className="flex space-x-2">
      <Image
        src={imageSrc}
        alt="Avatar"
        height="40"
        width="40"
        className="object-cover object-top rounded-full flex-shrink-0 border-2 border-neutral-200"
      />
      <div className="flex text-sm flex-col">
        <p className="font-bold text-primary">{name}</p>
        <p className="font-light text-secondary">{role}</p>
      </div>
    </div>
  );
};
