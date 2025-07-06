export interface Book {
  id: string;
  title: string;
  autor: string;
  aboutAutor: string;
  publisher: string;
  isbn: string;
  format: string;
  cover: string;
  img?: string;
  edition: string;
  language: string;
  numberOfPages: number;
  chapters: string[];
}

export const data: Book[] = [
  {
    id: "1",
    title: "Dziesiątka w akcji",
    autor: "Władysław Strumski",
    aboutAutor:
      'Władysław Strumski (ur. 23 czerwca 1922 r. w Przybyszówce k. Rzeszowa, zm. 1 października 1990 r. w Rzeszowie) był żołnierzem Armii Krajowej, działaczem podziemia niepodległościowego oraz pisarzem i publicystą. Podczas II wojny światowej, pod pseudonimem "Brutus", pełnił funkcję dowódcy bojówki dyspozycyjnej w Obwodzie AK Dębica, biorąc udział w licznych akcjach dywersyjnych, w tym w operacji "Burza" na polanie Kałużówka.',
    publisher: "Towarzystwo Przyjaciół Ziemi Dębickiej",
    isbn: "83-921333-0-7",
    format: "15x21.5cm",
    cover: "Twarda",
    img: "/images/placeholder_image.png",
    edition: "II Dębica, 2004r.",
    language: "Polski",
    numberOfPages: 280,
    chapters: [
      "Przedmowa do wydania drugiego",
      "Biografia autora",
      "Rozdział I",
      "Rozdział II",
      "Rozdział III",
      "Rozdział IV",
      "Rozdział V",
      "Rozdział VI",
      "Rozdział VII",
      "Rozdział VIII",
      "Rozdział IX",
      "Rozdział X",
      "Żołnierze dywersji na fotografii",
      "Skrócony indeks nazwisk i pseudonimów",
      "Biogramy bohaterów książki i ludzi dywersji",
    ],
  },
];

export const bookMap = new Map(
  data.map((book) => [book.title.toLowerCase(), book]),
);
