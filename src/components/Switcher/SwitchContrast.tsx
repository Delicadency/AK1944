"use client";
import { useContrastStore } from "@/zustand/useContrastStore";
import { useEffect } from "react";

const SwitchContrast = () => {
  const { isHighContrast, toggleContrast } = useContrastStore();

  useEffect(() => {
    const elements = document.querySelectorAll(
      "[class*='greenMain'], [class*='black']",
    );
    elements.forEach((element) => {
      const classList = Array.from(element.classList);
      classList.forEach((className) => {
        if (className.includes("greenMain")) {
          element.classList.replace(
            className,
            className.replace("greenMain", "black"),
          );
        } else if (className.includes("black")) {
          element.classList.replace(
            className,
            className.replace("black", "greenMain"),
          );
        }
      });
    });
  }, [isHighContrast]);

  return (
    <button
      onClick={toggleContrast}
      className={
        isHighContrast ? "bg-black text-greenMain" : "bg-greenMain text-black"
      }
    >
      Toggle Contrast
    </button>
  );
};

export default SwitchContrast;
