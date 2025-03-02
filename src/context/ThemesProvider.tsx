"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useState } from "react";

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
      }}
      defaultTheme="normal"
    >
      {children}
    </NextThemesProvider>
  );
};

export default ThemeProvider;
