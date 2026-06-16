// ─────────────────────────────────────────────
//  Knockvision Featured Showcase — slide data
//  Used only in the Home carousel.
//  /proyectos keeps its own kvProjects array.
// ─────────────────────────────────────────────

export type ShowcaseLayout =
  | "single"      // one landscape image, centred, white bg
  | "split"       // left portrait (margin) + right full-bleed portrait
  | "splitFlip"   // right portrait (margin) + left full-bleed portrait
  | "centered"    // one image centred with lots of air, coloured bg
  | "dark";       // full-bleed landscape on very dark bg

export type ShowcaseSlide = {
  slug: string;
  title: string;
  category: string;
  layout: ShowcaseLayout;
  bg: string;           // CSS colour for the slide background
  textColor: string;    // "dark" | "light"
  // Primary image — landscape or portrait depending on layout
  primary: { src: string; alt: string };
  // Secondary image — only for split / splitFlip
  secondary?: { src: string; alt: string };
};

// Note: arena-penasco lives in the hero and villa-xero in the "By Knocklabs"
// section — kept out of here so no project image repeats across the homepage.
export const showcaseSlides: ShowcaseSlide[] = [
  {
    slug: "resort-wadi",
    title: "Resort Wadi",
    category: "Architecture",
    layout: "dark",
    bg: "#1C1008",
    textColor: "light",
    primary: {
      src: "/knockvision/proyectos/resort-wadi/09.webp",
      alt: "Resort Wadi — aerial render, desert canyon resort",
    },
  },
  {
    slug: "villa-petra",
    title: "Villa Petra",
    category: "Architecture",
    layout: "single",
    bg: "#EDE9E1",
    textColor: "dark",
    primary: {
      src: "/knockvision/proyectos/villa-petra/02.webp",
      alt: "Villa Petra — exterior render, Mediterranean villa with stone terraces",
    },
  },
  {
    slug: "selva-sancta",
    title: "Selva Sancta",
    category: "Architecture",
    layout: "dark",
    bg: "#14180F",
    textColor: "light",
    primary: {
      src: "/knockvision/proyectos/selva-sancta/01.webp",
      alt: "Selva Sancta — aerial render, tropical jungle villa resort",
    },
  },
  {
    slug: "torre-palma",
    title: "Torre Palma",
    category: "Architecture",
    layout: "single",
    bg: "#E8E6E2",
    textColor: "dark",
    primary: {
      src: "/knockvision/proyectos/torre-palma/02.webp",
      alt: "Torre Palma — exterior render, residential tower with palm-lined pool",
    },
  },
  {
    slug: "kimko-house",
    title: "Kimko House",
    category: "Architecture",
    layout: "single",
    bg: "#E8E4E0",
    textColor: "dark",
    primary: {
      src: "/knockvision/proyectos/kimko-house/01.webp",
      alt: "Kimko House — exterior render, Japanese lakeside retreat",
    },
  },
];
