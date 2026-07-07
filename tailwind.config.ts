import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FDFCFB",
        creamdark: "#F0EDE8",
        ink: "#3E3D3E",
        muted: "#7A7775",
        paper: "#FFFFFF",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      maxWidth: {
        content: "1400px",
      },
      fontSize: {
        // Bump the base scale up ~1 step for a more comfortable read
        xs: ["0.8125rem", { lineHeight: "1.25rem" }],
        sm: ["0.9375rem", { lineHeight: "1.5rem" }],
        base: ["1.0625rem", { lineHeight: "1.75rem" }],
        lg: ["1.1875rem", { lineHeight: "1.875rem" }],
        xl: ["1.3125rem", { lineHeight: "1.875rem" }],
        "2xl": ["1.5625rem", { lineHeight: "2rem" }],
        "3xl": ["1.9375rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.3125rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1.05" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        ticker: "ticker 28s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;

