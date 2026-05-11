import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#fafafa",
        ink: "#0a0a0a",
        muted: "#525252",
        line: "#e5e5e5",
        accent: {
          DEFAULT: "#5b4dff",
          soft: "#ede9ff",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        measure: "42rem",
        wide: "72rem",
      },
      spacing: {
        section: "5.5rem",
      },
    },
  },
  plugins: [typography],
};

export default config;
