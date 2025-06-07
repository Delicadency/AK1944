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
  {
    id: "2",
    title: "Cień zwycięstwa",
    autor: "Norman Davies",
    aboutAutor:
      "Norman Davies (ur. 8 czerwca 1939 r. w Bolton, Wielka Brytania) to wybitny brytyjski historyk, profesor Uniwersytetu Londyńskiego, specjalizujący się w historii Polski i Europy Środkowo-Wschodniej. Autor licznych publikacji, w tym monumentalnych dzieł o dziejach Polski, znany z popularyzowania polskiej historii na świecie.",
    publisher: "Znak",
    isbn: "978-83-240-4338-2",
    format: "15x21.5cm",
    cover: "Twarda",
    edition: "1",
    language: "Polski",
    numberOfPages: 480,
    chapters: [
      "Wstęp",
      "Bitwa o Anglię",
      "Kampania wrześniowa",
      "Powstanie warszawskie",
      "Zakończenie",
    ],
  },
  {
    id: "3",
    title: "Człowiek w poszukiwaniu sensu",
    autor: "Viktor E. Frankl",
    aboutAutor:
      "Viktor E. Frankl (ur. 26 marca 1905 r. w Wiedniu, zm. 2 września 1997 r. w Wiedniu) był austriackim psychiatrą, psychoterapeutą i profesorem neurologii. Twórca logoterapii, przeżył obozy koncentracyjne podczas II wojny światowej, a swoje doświadczenia opisał w licznych książkach, inspirując miliony ludzi na całym świecie.",
    publisher: "Wydawnictwo Czarna Owca",
    isbn: "978-83-7554-166-9",
    format: "13x20cm",
    cover: "Miękka",
    img: "/images/placeholder_image.png",
    edition: "2",
    language: "Polski",
    numberOfPages: 200,
    chapters: [
      "Przedmowa",
      "Obóz koncentracyjny",
      "Psychologia więźnia",
      "Logoterapia",
      "Podsumowanie",
    ],
  },
  {
    id: "4",
    title: "Dziennik Anny Frank",
    autor: "Anne Frank",
    aboutAutor:
      "Anne Frank (ur. 12 czerwca 1929 r. we Frankfurcie nad Menem, zm. luty 1945 r. w Bergen-Belsen) była żydowską dziewczynką, która podczas okupacji niemieckiej ukrywała się wraz z rodziną w Amsterdamie. Jej dziennik, prowadzony w latach 1942–1944, stał się jednym z najważniejszych świadectw Holokaustu i symbolem losów dzieci w czasie wojny.",
    publisher: "Wydawnictwo Marginesy",
    isbn: "978-83-66140-12-6",
    format: "14x21cm",
    cover: "Twarda",
    img: "/images/placeholder_image.png",
    edition: "1",
    language: "Polski",
    numberOfPages: 320,
    chapters: [
      "Wprowadzenie",
      "Ukrywanie się",
      "Codzienne życie",
      "Nadzieje i obawy",
      "Zakończenie",
    ],
  },
  {
    id: "5",
    title: "Na Zachód od Wolgi",
    autor: "Antony Beevor",
    aboutAutor:
      'Antony Beevor (ur. 14 grudnia 1946 r. w Londynie) to brytyjski historyk wojskowości, autor bestsellerowych książek o II wojnie światowej, takich jak "Stalingrad" czy "Berlin 1945". Jego prace wyróżniają się rzetelnością, szeroką perspektywą i przystępnym stylem, dzięki czemu zdobyły uznanie czytelników na całym świecie.',
    publisher: "Znak",
    isbn: "978-83-240-4123-4",
    format: "15x23cm",
    cover: "Miękka",
    img: "/images/placeholder_image.png",
    edition: "1",
    language: "Polski",
    numberOfPages: 560,
    chapters: [
      "Wstęp",
      "Bitwa pod Stalingradem",
      "Oblężenie Leningradu",
      "Front wschodni",
      "Zakończenie",
    ],
  },
  {
    id: "6",
    title: "Powstanie '44",
    autor: "Norman Davies",
    aboutAutor:
      "Norman Davies (ur. 8 czerwca 1939 r. w Bolton, Wielka Brytania) to wybitny brytyjski historyk, profesor Uniwersytetu Londyńskiego, specjalizujący się w historii Polski i Europy Środkowo-Wschodniej. Autor licznych publikacji, w tym monumentalnych dzieł o dziejach Polski, znany z popularyzowania polskiej historii na świecie.",
    publisher: "Znak",
    isbn: "978-83-240-0718-6",
    format: "17x24cm",
    cover: "Twarda",
    img: "/images/placeholder_image.png",
    edition: "3",
    language: "Polski",
    numberOfPages: 944,
    chapters: [
      "Wprowadzenie",
      "Przygotowania",
      "Przebieg powstania",
      "Reakcje międzynarodowe",
      "Epilog",
    ],
  },
  {
    id: "7",
    title: "Armia Andersa",
    autor: "Evan McGilvray",
    aboutAutor:
      "Evan McGilvray (ur. 1968 r. w Wielkiej Brytanii) jest brytyjskim historykiem i publicystą, specjalizującym się w historii wojskowości oraz dziejach Europy Środkowo-Wschodniej. Autor licznych publikacji na temat II wojny światowej, w tym monografii poświęconych polskim formacjom zbrojnym.",
    publisher: "Bellona",
    isbn: "978-83-111-2345-6",
    format: "14x20cm",
    cover: "Miękka",
    img: "/images/placeholder_image.png",
    edition: "1",
    language: "Polski",
    numberOfPages: 320,
    chapters: [
      "Wstęp",
      "Formowanie armii",
      "Szlak bojowy",
      "Bitwa o Monte Cassino",
      "Podsumowanie",
    ],
  },
  {
    id: "8",
    title: "Oświęcim. Naziści i 'ostateczne rozwiązanie'",
    autor: "Laurence Rees",
    aboutAutor:
      "Laurence Rees (ur. 1957 r. w Wielkiej Brytanii) to brytyjski historyk, dziennikarz i autor filmów dokumentalnych, specjalizujący się w tematyce II wojny światowej i Holokaustu. Jego książki i filmy zdobyły liczne nagrody i uznanie za rzetelność oraz przystępność przekazu.",
    publisher: "Prószyński i S-ka",
    isbn: "978-83-7648-123-0",
    format: "16x24cm",
    cover: "Twarda",
    img: "/images/placeholder_image.png",
    edition: "2",
    language: "Polski",
    numberOfPages: 400,
    chapters: [
      "Wprowadzenie",
      "Budowa obozu",
      "Życie w obozie",
      "Zagłada",
      "Wyzwolenie",
    ],
  },
  {
    id: "9",
    title: "Wojna totalna",
    autor: "Chris Bellamy",
    aboutAutor:
      "Chris Bellamy (ur. 1955 r. w Wielkiej Brytanii) jest brytyjskim historykiem wojskowości, profesorem na University of Greenwich, specjalistą w zakresie historii konfliktów zbrojnych XX wieku. Autor licznych publikacji naukowych i popularnonaukowych dotyczących II wojny światowej.",
    publisher: "Wydawnictwo Magnum",
    isbn: "978-83-89607-29-2",
    format: "17x24cm",
    cover: "Miękka",
    img: "/images/placeholder_image.png",
    edition: "1",
    language: "Polski",
    numberOfPages: 800,
    chapters: [
      "Wstęp",
      "Fronty wojny",
      "Technika i taktyka",
      "Społeczeństwo w czasie wojny",
      "Zakończenie",
    ],
  },
  {
    id: "10",
    title: "Pianista",
    autor: "Władysław Szpilman",
    aboutAutor:
      'Władysław Szpilman (ur. 5 grudnia 1911 r. w Sosnowcu, zm. 6 lipca 2000 r. w Warszawie) był wybitnym polskim pianistą, kompozytorem i autorem wspomnień z okresu II wojny światowej. Jego przeżycia z getta warszawskiego i okupowanej Warszawy stały się kanwą słynnej książki oraz filmu "Pianista".',
    publisher: "Świat Książki",
    isbn: "978-83-7391-012-2",
    format: "13x20cm",
    cover: "Twarda",
    img: "/images/placeholder_image.png",
    edition: "2",
    language: "Polski",
    numberOfPages: 240,
    chapters: [
      "Wprowadzenie",
      "Getto warszawskie",
      "Ukrywanie się",
      "Wyzwolenie",
      "Epilog",
    ],
  },
  {
    id: "11",
    title: "Czas pogardy",
    autor: "Władysław Bartoszewski",
    aboutAutor:
      "Władysław Bartoszewski (ur. 19 lutego 1922 r. w Warszawie, zm. 24 kwietnia 2015 r. w Warszawie) był polskim historykiem, działaczem społecznym, uczestnikiem ruchu oporu, więźniem Auschwitz, a po wojnie dyplomatą i ministrem spraw zagranicznych. Autor licznych publikacji dotyczących historii Polski i II wojny światowej.",
    publisher: "Znak",
    isbn: "978-83-240-0123-4",
    format: "14x21cm",
    cover: "Miękka",
    img: "/images/placeholder_image.png",
    edition: "1",
    language: "Polski",
    numberOfPages: 350,
    chapters: [
      "Wstęp",
      "Ruch oporu",
      "Konspiracja",
      "Represje",
      "Podsumowanie",
    ],
  },
];

export const bookMap = new Map(
  data.map((book) => [book.title.toLowerCase(), book]),
);
