"use client";

import { useFont } from "@/context/FontProvider";

const FontSwitcher = () => {
  const fontContext = useFont();
  if (!fontContext) {
    return null; // or handle the null case appropriately
  }
  const { changeFont } = fontContext;

  return (
    <div className="flex items-center justify-center gap-10 text-white contrast:text-black">
      <button
        className="w-[33px] text-22 leading-9"
        onClick={() => changeFont("")}
      >
        A
      </button>
      <button
        className="w-[37px] text-28 leading-10"
        onClick={() => changeFont("mediumFont")}
      >
        A
      </button>
      <button
        className="w-[40px] text-30 leading-[60px]"
        onClick={() => changeFont("largeFont")}
      >
        A
      </button>
    </div>
  );
};

export default FontSwitcher;
