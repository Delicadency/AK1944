"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useState } from "react";
import { FontProvider } from "./FontProvider";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div />;

  return (
    <NextThemesProvider
      attribute="class"
      value={{
        normal: "normal",
        contrast: "contrast",
        normalFont: "normalFont",
        mediumFont: "mediumFont",
        largeFont: "largeFont",
      }}
      defaultTheme="normal"
    >
      <FontProvider>{children}</FontProvider>
    </NextThemesProvider>
  );
};

export default ThemeProvider;
