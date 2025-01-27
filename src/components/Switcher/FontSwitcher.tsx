"use client";

import { useFont } from "@/context/FontProvider";

const FontSwitcher = () => {
  const fontContext = useFont();
  if (!fontContext) {
    return null; // or handle the null case appropriately
  }
  const { changeFont } = fontContext;

  return (
    <div className="flex w-[110px] items-center justify-center gap-1 text-white contrast:text-black">
      <button
        className="w-[27px] text-16 desktop:w-[30px] desktop:text-22 desktop:leading-9"
        onClick={() => changeFont("")}
      >
        A
      </button>
      <button
        className="w-[27px] text-20 desktop:w-[30px] desktop:text-28 desktop:leading-10"
        onClick={() => changeFont("mediumFont")}
      >
        A
      </button>
      <button
        className="w-[27px] text-22 desktop:w-[30px] desktop:text-30 desktop:leading-[60px]"
        onClick={() => changeFont("largeFont")}
      >
        A
      </button>
    </div>
  );
};

export default FontSwitcher;
