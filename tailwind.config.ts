import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0D0D0D",
        cream: "#F2F0EB",
        accent: "#FF4C00",
        dark01: "#1A1A1A",
        dark02: "#2A2A2A",
      },
      fontFamily: {
        archivo: ["var(--font-archivo)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      letterSpacing: {
        tight2: "-0.02em",
        tight6: "-0.06em",
        wide16: "0.16em",
      },
    },
  },
  plugins: [],
};
export default config;
