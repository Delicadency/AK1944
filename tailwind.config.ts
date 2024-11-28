import type { Config } from "tailwindcss";

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
        black: "#000000",
        greenMain: "#163020",
        greenMain30: "rgba(22, 48, 32, 0.3)",
        greenMain10: "rgba(22, 48, 32, 0.1)",
        greenLight: "#6F8E6E",
        greenB: "#304D30",
        greenC: "#6F8E6E",
        backgroundMain: "#FFFCF5",
        backgroundB: "#FFF9ED",
        redMain: "#8F0000",
        redError: "#D31828",
        yellowVintage: "#F4DBBE",
      },
      fontFamily: {
        figtree: ["var(--font-figtree)", "sans-serif"],
        lora: ["var(--font-lora)", "serif"],
        sourceSans: ["var(--font-source-sans)", "sans-serif"],
        courier: ["Courier New", "Courier", "monospace"],
      },
      fontSize: {
        "12": "12px",
        "14": "14px",
        "16": "16px",
        "18": "18px",
        "20": "20px",
        "22": "22px",
        "24": "24px",
        "26": "26px",
        "28": "28px",
        "30": "30px",
        "32": "32px",
        "34": "34px",
        "36": "36px",
        "48": "48px",
        "44": "44px",
        "50": "50px",
      },
      screens: {
        // rozdzielczości do zdefiniowania na podstawie projektu
      },
      borderRadius: {
        // niestandardowe zaokrąglenia
      },
      boxShadow: {
        // cienie
      },
      keyframes: {
        // animacje kluczowe
      },
      animation: {
        // animacje
      },
    },
  },
  plugins: [],
} satisfies Config;
