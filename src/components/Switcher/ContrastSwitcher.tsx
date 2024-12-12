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
      Toggle Contrast {theme === "normal" ? "on" : "off"}
    </button>
  );
};

export default ContrastSwitcher;
