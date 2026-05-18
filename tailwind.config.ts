import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: "#f5f0e8",
        dark: "#1c1a17",
        mid: "#6b6455",
        accent: "#2a6b5e",
        "accent-light": "#3d8a7a",
        warm: "#c4845a",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        dm: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      borderColor: {
        line: "rgba(28,26,23,0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
