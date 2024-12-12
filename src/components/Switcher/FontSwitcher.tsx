"use client";

import { useFont } from "@/context/FontProvider";

const FontSwitcher = () => {
  const fontContext = useFont();
  if (!fontContext) {
    return null; // or handle the null case appropriately
  }
  const { font, changeFont } = fontContext;

  return (
    <div className="flex items-center justify-center gap-10">
      <button onClick={() => changeFont("")}>Normal Font {font}</button>
      <button
        className="mediumFont:text-2xl"
        onClick={() => changeFont("mediumFont")}
      >
        Medium Font {font}
      </button>
      <button
        className="largeFont:text-3xl"
        onClick={() => changeFont("largeFont")}
      >
        Large Font {font}
      </button>
    </div>
  );
};

export default FontSwitcher;
