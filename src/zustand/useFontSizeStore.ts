import { create } from "zustand";

type FontSizeState = {
  fontSize: number | null;
  setFontSize: (fontSize: number) => void;
};

export const useFontSizeStore = create<FontSizeState>((set) => ({
  fontSize: null,
  setFontSize: (fontSize) => set({ fontSize }),
}));
