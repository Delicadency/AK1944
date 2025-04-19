import { Routes } from "@/routes";

export type SectionType = "Geneza" | "Rajdy";

export const sections: Record<
  SectionType,
  {
    text: string;
    route: string;
    image: string;
    alt: string;
  }
> = {
  Geneza: {
    text: "Jak powstały i gdzie wiodą ścieżki pamięci?",
    route: Routes.ORIGIN,
    image: "/images/trail-origin-image.jpg",
    alt: "Zdjęcie mapy Szlaku Partyzanckiego",
  },
  Rajdy: {
    text: "Pokonaj rowerem bojowy szlak i poczuj historię na własnej skórze.",
    route: Routes.RAIDS,
    image: "/images/trail-raid-image.jpg",
    alt: "Zdjęcie przedstawiające rowerzystów biorących udział w Rajdzie Rowerowym",
  },
} as const;
