import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#262827",
        greenMain: "#163020",
        greenMain30: "rgba(22, 48, 32, 0.3)",
        greenMain10: "rgba(22, 48, 32, 0.1)",
        greenLight: "#D4E0D3",
        greenB: "#304D30",
        greenC: "#6F8E6E",
        backgroundMain: "#FFFCF5",
        backgroundB: "#FFF9ED",
        redMain: "#8F0000",
        redError: "#D31828",
        yellowVintage: "#F4DBBE",
        yellowContrast: "#FFF205",
        black00: "#000000",
        blue: "#0080FF",
        violet: "#C589F9",
        grayDate: "#8E8E8E",
      },
      fontFamily: {
        figtree: ["var(--font-figtree)", "sans-serif"],
        lora: ["var(--font-lora)", "serif"],
        sourceSans: ["var(--font-source-sans)", "sans-serif"],
        courier: ["Courier New", "Courier", "monospace"],
      },
      fontSize: {
        "12": "0.75rem",
        "14": "0.875rem",
        "16": "1rem",
        "18": "1.125rem",
        "20": "1.25rem",
        "22": "1.375rem",
        "24": "1.5rem",
        "26": "1.625rem",
        "28": "1.75rem",
        "30": "1.875rem",
        "32": "2rem",
        "34": "2.125rem",
        "36": "2.25rem",
        "38": "2.375rem",
        "40": "2.5rem",
        "42": "2.625rem",
        "44": "2.75rem",
        "46": "2.875rem",
        "48": "3rem",
        "50": "3.125rem",
        "96": "6rem",
      },
      scale: {
        mediumFont: "1.25",
        largeFont: "1.5",
      },
      screens: {
        tablet: "768px",
        desktop: "1280px",
      },
      borderRadius: {
        // niestandardowe zaokrąglenia
      },
      boxShadow: {
        // cienie
      },
      keyframes: {
        // animacje kluczowe
        modalFadeIn: {
          from: {
            opacity: "0",
            transform: "translateY(-50px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        // animacje
        modalAnimation: "modalFadeIn 0.3s ease-in",
      },
      objectPosition: {
        "center-100": "65% center",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("contrast", ".contrast &");
      addVariant("mediumFont", ".mediumFont &");
      addVariant("largeFont", ".largeFont &");
    }),
  ],
} satisfies Config;
