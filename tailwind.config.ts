import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // The "Inkwell" Palette
        obsidian: "#0a0a0a",
        "aged-gold": "#c5a059",
        burgundy: "#4a0404",
        "pale-ash": "#d1d1d1",
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        playfair: ["Playfair Display", "serif"],
        lora: ["Lora", "serif"],
      },
      animation: {
        "candle-flicker": "flicker 3s ease-in-out infinite",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
