import {
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";

export const socials = [
  {
    href: "https://www.workana.com/freelancer/115f79a730a9a4dc2b1d3d0d0778032b",
    label: "Workana",
    icon: () => (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/in/favio-davila-645581254",
    label: "LinkedIn",
    icon: IconBrandLinkedin,
  },
  {
    href: "https://youtube.com/",
    label: "YouTube",
    icon: IconBrandYoutube,
  },
];
