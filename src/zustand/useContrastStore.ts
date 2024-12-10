import { create } from "zustand";

interface ContrastState {
  isHighContrast: boolean;
  toggleContrast: () => void;
}

export const useContrastStore = create<ContrastState>((set) => ({
  isHighContrast: false,
  toggleContrast: () =>
    set((state) => ({ isHighContrast: !state.isHighContrast })),
}));
