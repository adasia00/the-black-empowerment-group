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
        black: "#000000",
        gold: "#7F6000",
        platinum: "#D9D9D9",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "gradient-gold": "linear-gradient(135deg, #7F6000 0%, #7F6000 100%)",
        "gradient-dark": "linear-gradient(135deg, #000000 0%, #000000 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-in-out",
        "slide-up": "slideUp 0.8s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
