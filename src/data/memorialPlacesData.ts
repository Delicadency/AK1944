export interface Place {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
  link: string;
}

export const memorialPlaces: Place[] = [
  {
    id: 1,
    name: "Metalowy krzyż upamiętniający żołnierzy 5. Pułku Strzelców Konnych",
    location: "Cmentarz Parafialny w Dębicy",
    description:
      "Krzyż upamiętniający zakończenie II wojny światowej oraz rozwiązanie Armii Krajowej. Poświęcony w 1975 roku, z okazji 30. rocznicy tych wydarzeń.",
    image: "/images/place1.jpg",
    link: "/miejsce-1",
  },
  {
    id: 2,
    name: "Miejsce 2",
    location: "Lokalizacja miejsca 2",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tristique purus vehicula a mollis condimentum non.",
    image: "/images/place2.jpg",
    link: "/miejsce-2",
  },
  {
    id: 3,
    name: "Miejsce 3",
    location: "Lokalizacja miejsca 3",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vitae ornare odio et ullamcorper arcu cursus.",
    image: "/images/place3.jpg",
    link: "/miejsce-3",
  },
  {
    id: 4,
    name: "Miejsce 4",
    location: "Lokalizacja miejsca 3",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vitae ornare odio et ullamcorper arcu cursus.",
    image: "/images/place4.jpg",
    link: "/miejsce-4",
  },
  {
    id: 5,
    name: "Miejsce 5",
    location: "Lokalizacja miejsca 5",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vitae ornare odio et ullamcorper arcu cursus.",
    image: "/images/place5.jpg",
    link: "/miejsce-5",
  },
  {
    id: 6,
    name: "Miejsce 6",
    location: "Lokalizacja miejsca 6",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vitae ornare odio et ullamcorper arcu cursus.",
    image: "/images/place6.jpg",
    link: "/miejsce-6",
  },
];
