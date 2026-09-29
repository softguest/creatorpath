// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
//   darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#FFFFFF",
        card: "#111113",
        "card-foreground": "#FFFFFF",
        primary: {
          DEFAULT: "#D4AF37",
          foreground: "#050505",
        },
        secondary: {
          DEFAULT: "#0B0B0D",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#A1A1AA",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#D4AF37",
          foreground: "#050505",
        },
        destructive: {
          DEFAULT: "#C62828",
          foreground: "#FFFFFF",
        },
        border: "rgba(255, 255, 255, 0.08)",
      },
      borderRadius: {
        lg: "1rem",
        md: "0.75rem",
        sm: "0.5rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;