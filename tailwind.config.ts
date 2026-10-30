import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{astro,html,js,ts}",
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
        sans: ["var(--font-sans)", "sans-serif"],
      },
      maxWidth: {
        content: "1080px",
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
