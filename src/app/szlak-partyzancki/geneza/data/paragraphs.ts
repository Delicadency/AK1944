type ContentElement =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean };

export type Paragraph = {
  title: string;
  content: ContentElement[];
};

export const paragraphs: Paragraph[] = [
  {
    title: "I etap: pomysł",
    content: [
      {
        type: "paragraph",
        text: "Pomysł na wytyczenie Szlaku Partyzanckiego zrodził się w 2003 roku. Pierwotnie Szlak miał połączyć miejsca związane z działalnością AK w powiecie dębickim (od Pustkowa, przez Dębicę po Kałużówkę). Idea przeszła jednak szereg przeobrażeń, głównie pod wpływem środowiska weteranów AK i w ostatecznym kształcie wytyczona została ścieżka II Zgrupowania AK Obwodu Dębica. Inicjatorem przedsięwzięcia był Maciej Małozięć, który zachęcił harcerzy z 13. Drużyny Harcerzy Wędrowników ”Kałużacy”, aby włączyli się w realizację projektu.",
      },
      {
        type: "paragraph",
        text: "W 2015 roku Katolickie Centrum Edukacji KANA otrzymało dofinansowanie z programu “Tu mieszkam, tu zmieniam” Fundacji Banku Zachodniego WBK na realizację projektu “Szlak Partyzancki — historia utrwalona w czasie i przestrzeni”. Projekt ten zakładał ponowne wytyczenie Szlaku, jego oznakowanie oraz utworzenie wariantu rowerowego.",
      },
    ],
  },
  {
    title: "II etap: organizacja działań",
    content: [
      {
        type: "paragraph",
        text: "Etap ten trwał najdłużej i składał się z kilku faz:",
      },
      {
        type: "paragraph",
        text: "– sprecyzowanie tematu Szlaku i określenie zasięgu: kwestia ta była przedmiotem licznych dyskusji w środowisku weteranów AK oraz wśród harcerzy 13. Drużyny Harcerzy Wędrowników “Kałużacy”. Ostatecznie ustalono, że Szlak przebiega przez teren działań II Rejonu AK Obwodu Dębica w granicach gmin Dębica i Pilzno, a jego pełna nazwa brzmi: Szlak Partyzancki II Zgrupowania Armii Krajowej Obwodu Dębica.",
      },
      {
        type: "paragraph",
        text: "– pozyskanie partnerów: w Księdze Mądrości Syracha napisano: „Wierny przyjaciel potężną obroną, kto go znalazł, skarb znalazł”. Przy realizacji pomysłu Szlaku udało się spotkać wielu życzliwych ludzi, którzy wsparli tą ideę cenną radą, pomocą merytoryczną oraz finansową.",
      },
      { type: "paragraph", text: "Główni mecenasi projektu to:" },
      {
        type: "list",
        items: [
          "Lasy Państwowe – Nadleśnictwo Dębica (osobisty wkład Nadleśniczego Wacława Pankiewicza oraz leśniczych Bogdana Puty i Ryszarda Lejawki)",
          "Zespół Szkół w Gumniskach (pomoc ze strony dyrektora szkoły Włodzimierza Jaźwińskiego oraz nauczycieli: śp. Lucyny Bomby i Eugeniusza Bomby)",
          "lokalne samorządy: powiat dębicki, gmina Dębica, miasto i gmina Pilzno",
          "organizacja kombatancka Środowisko 5. Pułku Strzelców Konnych AK (nieocenione rady ze strony mjra Mariana Więcka, Andrzeja Strumskiego, Tadeusza Kubicy i in.)",
          "dębicki Hufiec Związku Harcerstwa Polskiego im. Dębickich Szarych Szeregów; oraz osoby prywatne, właściciele posesji i punktów przez które przechodzi szlak.",
        ],
      },
      {
        type: "paragraph",
        text: "Odnowienie Szlaku Partyzanckiego było możliwe dzięki realizacji przez Katolickie Centrum Edukacji KANA w Dębicy projektu “Szlak Partyzancki – historia utrwalona w przestrzeni” w ramach programu Fundacji Banku Zachodniego WBK.",
      },
      {
        type: "paragraph",
        text: "Dlaczego wytypowane zostały właśnie te punkty? Aby „ocalić od zapomnienia” oraz upamiętnić miejsca historycznych wydarzeń związanych z działalnością II Zgrupowania AK Obwodu Dębica. To także społeczna odpowiedź na apel Antoniego Stańko, żołnierza AK i historyka Komendy Obwodu „Deser”. Powody są następujące:",
      },
      {
        type: "list",
        items: [
          "koordynacja działań: w realizację pomysłu Szlaku sensu stricto w 2004 roku zaangażowali się harcerze 13. Drużyny Harcerzy Wędrowników „Kałużacy”.",
          "opracowanie projektu technicznego dotyczącego przebiegu Szlaku w terenie: audyt historyczny w konsultacji z partnerami projektu.",
          "zaprojektowanie trasy Szlaku: połączenie wytypowanych punktów z zachowaniem spójności i użyteczności trasy.",
        ],
      },
    ],
  },
  {
    title: "III etap: wizualizacja szlaku",
    content: [
      {
        type: "paragraph",
        text: "Etap ten, podobnie jak poprzedzający go etap II, składał się również z kilku faz:",
      },
      {
        type: "list",
        items: [
          "pozyskanie środków finansowych: pomoc Lasów Państwowych, Nadleśnictwa Dębica – pokrycie kosztów tablic i słupków.",
          "uzyskanie pozwoleń: przeprowadzenie Szlaku przez tereny prywatne i publiczne.",
          "oznakowanie Szlaku: oznaczenia białymi lilijkami, tablice informacyjne, fragmenty poezji.",
          "opieka nad Szlakiem: najpierw 13. Drużyna Harcerzy Wędrowników „Kałużacy”, później Środowisko 5. Pułku Strzelców Konnych AK.",
        ],
      },
    ],
  },
  {
    title: "IV etap: promocja produktu turystycznego",
    content: [
      {
        type: "paragraph",
        text: "Od samego początku prowadzone były działania promocyjne w zakresie popularyzacji Szlaku, a także wydarzeń historycznych z którymi jest on związany.",
      },
      {
        type: "paragraph",
        text: "Wszelkiego rodzaju wcześniejsze, kontynuowane lub przyszłe inicjatywy powinny być zbieżne z podstawowymi celami misji: troska o historię, tradycję i dziedzictwo Armii Krajowej oraz upamiętnienie miejsc historycznych.",
      },
      {
        type: "paragraph",
        text: "Do celów strategicznych zalicza się natomiast:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "służbę na rzecz środowiska weteranów Armii Krajowej",
          "ukazanie ciekawych form przeżycia historii regionalnej oraz umocnienie międzypokoleniowych więzi",
          "kształtowanie u młodzieży postaw opartych na wartościach duchowych",
          "ukazanie piękna krajobrazu ziemi dębickiej",
          "zachęta do zdrowego, aktywnego spędzania czasu",
        ],
      },
      {
        type: "paragraph",
        text: "Szeroko pojęta promocja produktu, wiąże się zatem z realizacją tych celów. Do głównych działań należą:",
      },
      {
        type: "list",
        items: [
          "organizacja imprez historyczno-turystycznych",
          "przygotowanie i dystrybucja materiałów informacyjno-promocyjnych",
          "organizacja wystaw, spotkań, prelekcji i pokazów związanych ze Szlakiem",
        ],
      },
    ],
  },
];
