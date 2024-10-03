import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: ["var(--font-anton)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        "sf-pro-display": ["var(--font-sf-pro-display)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#000D12",
        gray: "#030303",
        yellow: "#FFF000",
        "dark-yellow": "#FEC752",
        "dark-pink": "#D5786D",
        orange: "#FF7D1E",
        red: "#F03642",
        pink: "#D25990",
        purple: "#A35CE3",
        "blue-purple": "#675DE1",
        blue: "#0CABF2",
        "light-green": "#87D059",
      },
      boxShadow: {
        whyShadow: "0px 3.75px 3.75px 0px #FFAC00 inset",
      },
    },
  },
  plugins: [
    require("tailwindcss-animated"),
  ],
};
export default config;
