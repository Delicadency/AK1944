"use client";
import { createContext, useContext, useEffect, useState } from "react";

interface FontContextType {
  font: string;
  changeFont: (fontClass: string) => void;
}

const FontContext = createContext<FontContextType | null>(null);

export const FontProvider = ({ children }: { children: React.ReactNode }) => {
  const [font, setFont] = useState<string>("normalFont");

  useEffect(() => {
    // Ustawienie domyślnego fontu
    document.documentElement.classList.add(font);
  }, [font]);

  const changeFont = (fontClass: string) => {
    // Usuwanie poprzedniego fontu
    document.documentElement.classList.remove("mediumFont", "largeFont");
    if (fontClass === "mediumFont" || fontClass === "largeFont") {
      document.documentElement.classList.add(fontClass);
      setFont(fontClass);
    }
  };

  return (
    <FontContext.Provider value={{ font, changeFont }}>
      {children}
    </FontContext.Provider>
  );
};

export const useFont = () => useContext(FontContext);
