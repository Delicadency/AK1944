export type Images = {
  id: string;
  src: string;
  alt: string;
  mobileOrder?: number;
};

// ToDo: images and alts to update - https://app.clickup.com/t/8698wcd0t
export const sideImages: Images[] = [
  {
    id: "map",
    src: "/images/trail-origin-image.jpg",
    alt: "Zdjęcie mapy Szlaku Partyzanckiego",
    mobileOrder: 1,
  },
  {
    id: "placeholder-1",
    src: "/images/placeholder_image.png",
    alt: "Placeholder",
    mobileOrder: 2,
  },
  {
    id: "placeholder-2",
    src: "/images/placeholder_image.png",
    alt: "Placeholder",
    mobileOrder: 3,
  },
  {
    id: "placeholder-3",
    src: "/images/placeholder_image.png",
    alt: "Placeholder",
    mobileOrder: 4,
  },
  {
    id: "placeholder-4",
    src: "/images/placeholder_image.png",
    alt: "Placeholder",
  },
  {
    id: "placeholder-5",
    src: "/images/placeholder_image.png",
    alt: "Placeholder",
  },
];
