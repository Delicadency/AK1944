"use client";
import { useTheme } from "next-themes";

const ContrastSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "normal" ? "contrast" : "normal");
  };

  return (
    <button
      className="=bg-green-500 normal:bg-black normal:text-white text-black"
      onClick={toggleTheme}
    >
      <div className="relative flex h-[32px] w-[32px] items-center justify-center">
        <div className="absolute right-[4px] top-[-3px] h-[26px] w-[13px] -rotate-45 rounded-br-full rounded-tr-full bg-black"></div>
        <div className="absolute bottom-[-2px] left-[4px] h-[26px] w-[13px] -rotate-45 rounded-bl-full rounded-tl-full bg-[#FFF200]"></div>
      </div>
    </button>
  );
};

export default ContrastSwitcher;
