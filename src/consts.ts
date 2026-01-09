import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "neroot",
  EMAIL: "hifrommail@proton.me",
  NUM_POSTS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 2,
};

export const HOME: Metadata = {
  TITLE: "home",
  DESCRIPTION: "blog personal de neroot basado en Astro Nano",
};

export const BLOG: Metadata = {
  TITLE: "blog",
  DESCRIPTION: "cosas de las que me gusta hablar",
};

export const PROJECTS: Metadata = {
  TITLE: "proyectos",
  DESCRIPTION: "algunos de mis proyectos personales",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/nerooot",
  },
  {
    NAME: "codeberg",
    HREF: "https://codeberg.org/Neroot",
  },
];
