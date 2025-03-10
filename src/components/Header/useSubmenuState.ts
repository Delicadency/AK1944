import { useState, useCallback } from "react";

export const useSubmenuState = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSubmenu = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  const closeSubmenu = useCallback(() => {
    setOpenIndex(null);
  }, []);

  return {
    toggleSubmenu,
    closeSubmenu,
    isSubmenuOpen: (index: number) => openIndex === index,
  };
};
