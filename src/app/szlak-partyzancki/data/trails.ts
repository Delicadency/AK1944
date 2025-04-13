export type TrailSlug = "pierwszy" | "drugi" | "trzeci";
//slugs may change, still waiting for detailed data from Maciej

export type Paragraph = {
  title: string;
  content: string;
};

type TrailPoint = {
  point: string;
  description: string;
};

type MapData = {
  iframeUrl: string;
  externalUrl: string;
};

type TrailData = {
  name: string;
  displayName: string;
  enabled: boolean;
  paragraphs: Paragraph[];
  trailPoints: TrailPoint[];
  map: MapData;
};

export const trails: Record<TrailSlug, TrailData> = {
  pierwszy: {
    name: "Szlak Pierwszy",
    displayName:
      "Szlak Partyzancki II Zgrupowania Armii Krajowej Obwodu Dębica",
    enabled: true,
    paragraphs: [
      {
        title: "Ścieżka wiedzie malowniczym wzgórzami na terenie gmin:",
        content:
          "Dębica, Pilzno w powiecie dębickim, zataczając pętlę nad miejscowościami Gumniska i Braciejowa. Szlak wyznacza 10 punktów oznakowanych tablicami, a przez 9 z nich wiedzie oznakowana białymi lilijkami trasa marszowa długości około 16 km, przechodząca przez leśnictwa Berdech oraz Gumniska. Jest propozycją dla wszystkich rozmiłowanych w pieszych wędrówkach i historii regionu dębickiego, a także cenną pomocą dydaktyczną dla nauczycieli i rodziców w wychowaniu patriotycznym dzieci i młodzieży.",
      },
      {
        title:
          "O walorach szlaku decyduje nie tylko wartość historyczna miejsc...",
        content:
          "...ale również urzekające krajobrazy i osobowości geograficzne ziemi dębickiej. Nie brakuje tu otwartych przestrzeni i polnych dróg, a prawdziwe bogactwo przyrodnicze szlaku stanowią lasy, wysrebrzone karpacką buczyną, urocze polany i strumienie wijące się serpentynami wśród przepastnych jarów. Wszystko to sprawia, że Szlak Partyzancki jest propozycją nie tylko dla miłośników historii, ale również dla amatorów mocniejszych wyzwań terenowych.",
      },
    ],
    trailPoints: [
      {
        point: "Punkt Szkoła",
        description:
          'Wędrówkę Szlakiem Partyzanckim rozpoczynamy przed szkołą w Gumniskach. Tu w czasie II wojny światowej mieściła się siedziba komendy Obwodu ZWZ-AK Dębica krypt. "Dziekania", "Deser". Położenie oraz warunki terenowe, a zwłaszcza patriotyzm mieszkańców Gumnisk i Braciejowej, stwarzały dobre warunki do działalności konspiracyjnej. Komendantem Obwodu od 1940 r., był kierownik szkoły w Gumniskach, Adam Lazarowicz ps. "Klarma". W szkole odbywały się więc odprawy dowódcze, szkolenia, egzaminy podchorążych oraz kursy tajnego nauczania. Od kilku lat szkoła gromadzi zdjęcia oraz pamiątki związane z walkami II Zgrupowania AK Obwodu Dębica. Zbiory przechowywane są w szkolnej Izbie Pamięci.',
      },
      {
        point: "Punkt Kościół",
        description:
          'W sąsiadującym ze szkołą kościele parafialnym pw. św. Mikołaja, tętniło życie duchowe i patriotyczne mieszkańców Braciejowej i Gumnisk. W czasie wojny tutejsci księża włączali się w pracę konspiracyjną. Udostępniali plebanię i zabudowania gospodarcze do przechowywania sprzętu wojskowego, ważnych dokumentów i map. Tutejszy wikary, ks. ppor. Stanisław Bartosz "Mieczyk", był kapelanem Obwodu AK Dębica. W czasie akcji "Burza" towarzyszył żołnierzom w najcięższych momentach walk. Udzielał sakramentów i podtrzymywał morale w oddziałach. Drewniany budynek starego kościoła spłonął w czasie działań frontowych. W jego miejscu stoi dziś nowa dzwonnica, a obecna parafia pw. Wniebowzięcia NMP, troszczy się o pamięć poległych obrońców ziemi dębickiej.',
      },
      {
        point: "Punkt Cmentarz",
        description:
          'Na cmentarzu w Gumniskach podczas okupacji znajdował się ukryty magazyn broni. Dziś w tym miejscu, pośrodku cmentarza znajduje się grobowiec poległych w czasie akcji "Burza" partyzantów Armii Krajowej, których ciała ekshumowano tutaj po wojnie. Na cmentarzu warto poświęcoć czas mna chwilę zadumy przy pięknej drewnianej kapliczce katyńskiej, wykonanej przez miejscowego rzeźbiarza, Stanisława Nylca.',
      },
      {
        point: "Punkt Leśniczówka Berdech",
        description:
          'W tym miejscu rozpoczyna się drugi etap naszego szlaku. Na terenie leśniczówki, 28 lipca 1944 r., miała miejsce koncentracja oddziałów II Zgrupowania AK Obwodu Dębica do akcji "Burza\. W tym czasie - pisał Antoni Stańko, leśnictwo zamieniło się w warowny obóz. Rozstawione posterunki i lotne patrole broniły obcym dostępu. Budynki i dziedziniec pełne były broni i oporządzenia, materiałów wojskowych, żywności... Dziś na Berdechu znajduje się nowa leśniczówka, która chętnie gości weteranów Armii Krajowej oraz młodzież.',
      },
      {
        point: "Punkt Gajówka Wł. Klabachy",
        description:
          "Po wyjściu z berdechowskiego lasu szlak wiedzie piękną polną drogą w kierunku Południka. Wokół nas roztacza się niesamowita panorama łąk i pól. Dochodzimy do miejsca w którym niegdyś mieściła się gajówka Władysława Klabachy, miejsce spotkań łączników i magazyn broni. Z uwagi na zagrożenie dekonspiracją leśniczówki na Berdechu, dowództwo zdecydowało się przenieść na krótki czas, sztab II Zgrupowania do gajówki Władysława Klabachy na Południku. Obecnie po zabudowaniach gajówki nie ma już śladu, wokół znajdują się tylko dzikie drzewa, niektóre zapewne pamiętają jeszcze tamte dni. Szlak tymczasem zanurza się w las w kierunku jaru.",
      },
      {
        point: "Punkt Jar",
        description:
          "Po bitwie na Kałużówce zgrupowanie przeniosło się do wąwozu w miejscu zwanym przez miejscowych Pieczowiskami. Tu zmarł z wycieńczenia, ranny w boju na Kałużówce strz. Bronisław Zima „Taras”. Miejsce to obrazuje dramat oraz bezsilność całego zgrupowania po bitwie na Kałużówce. Bez jedzenia, dachu nad głową oraz pod psychiczną presją niemieckiej obławy, partyzanci (często ranni i wymagający opieki medycznej) kryli się w jarze przez kilka dni, po czym wyruszyli ostrożnie w kierunku lasów Jaworza. 29 sierpnia nastąpiło pierwsze, częściowe rozwiązanie oddziałów AK, natomiast ostatni żołnierze opuścili lasy dopiero na przełomie października i listopada 1944 roku. W tym czasie II Zgrupowanie poniosło najdotkliwsze straty - blisko 50 zabitych, wielu rannych.",
      },
      {
        point: "Punkt Krzyż Jabłonowskiego",
        description:
          "Bitwa na Kałużówce zakończyła się wycofaniem oddziałów niemieckich oraz żołnierzy II Zgrupowania, którzy przez całą noc z 24/25 sierpnia próbowali wydostać się z lasu, który już wtedy był szczelnie zamknięty przez pierścień oddziałów niemieckich. Jak się okazało front niemiecko-sowiecki zatrzymał się na linii Wisłoki na okres blisko pół roku (do stycznia 1945 r.). Rano 25 sierpnia w czasie pokonywania drogi Braciejowa-Południk zgrupowanie natrafiło na niemieckie stanowisko ogniowe w skutek czego poległo dwóch żołnierzy: Andrzej Jabłonowski „Śmigło” oraz transportowany przez niego Tadeusz Ciszek „Jahura”, który jako ciężko ranny w boju na Kałużówce, nie mógł poruszać się o własnych siłach.",
      },
      {
        point: "Punkt Kałużówka",
        description:
          'Polana Kałużówka jest centralnym punktem Szlaku Partyzanckiego. Tu miała miejsce dwudniowa bitwa żołnierzy II Zgrupowania z oddziałami niemieckimi. Przez cały dzień 23 sierpnia Niemcy prowadzili silny ostrzał artylerysjki skierowany na stanowiska AK na Kałużówce. Rankiem następnego dnia przystąpili do głównego uderzenia oddziałami piechoty na wzgórze (426 m.n.p.m.), gdzie skoncentrowali się partyzanci. Żołnierze II Zgrupowania cofali się stopniowo w głąb lasu, by kilkakrotnie przejść do kontrnatarcia. Kiedy śmiertelnie ranny został dowódca niemiecki w randze majora, Niemcy rozpoczęli ewakuację z rejonu Kałużówki. Swoje obozowisko opuścili także żołnierze II Zgrupowania. Walki na Kałużówce całkowicie ustały około godziny 19. Pomnik na polanie (zbudowany w 1984 r.) upamiętnia wszystkich żołnierzy II Zgrupowania Obwodu Dębica, którzy polegli w okresie akcji "Burza".',
      },
      {
        point: "Punkt Zborżilówka",
        description:
          "Punkt ten znajduje się w Gołęczynie, poza znakowaną trasą szlaku. W czasie wojny znajdowały się tutaj zabudowania leśniczówki Stanisława Zborżila „Sosny”. Tam stacjonował sztab III Zgrupowania AK Obwodu Dębica. Rankiem, 20 sierpnia 1944 r. zabudowania Zborżilówki zostały otoczone przez duży oddział niemiecki. Wywiązała się walka w czasie której zginęło wielu żołnierzy III Zgrupowania. Śmiertelnie raniony został także kpt. Józef Lutak „Dyzma”, oficer dywersji Inspektoratu AK Rzeszów, uważany za najdzielniejszego partyzanta na Rzeszowszczyźnie. Jego pogrzeb, z honorami wojskowymi, odbył się dwa dni później na Kałużówce.",
      },
      {
        point: "Punkt Krzyż „Miecza”",
        description:
          'Miejsce to upamiętnia najsłynniejszą akcję dywersyjną przeprowadzoną w czasie "Burzy" w Obwodzie Dębica. 12 sierpnia 1944 r. oddział niemiecki w sile batalionu przystąpił do pacyfikacji mieszkańców Braciejowej i Gumnisk. Na pomoc bezbronnej ludności wyruszyła z lasów grupa dywersyjna Władysława Strumskiego pod dowództwem kpt. Józefa Lutaka „Dyzmy”. Dynamicznie przeprowadzona akcja zakończyła się spektakularnym sukcesem. Niemcy pomimo kilkukrotnej przewagi liczebnej, musieli ratować się ucieczką. W czasie tych działań zginął żołnierz oddziału dyspozycyjnego, Stanisław Mroczka ps. „Miecz”. Krzyż w Gumniskach upamiętnia brawurową akcję żołnierzy dębickiej dywersji, a punkt ten kończy trasę Szlaku Partyzanckiego.',
      },
    ],
    map: {
      iframeUrl: "https://traseo.pl/mapa/14679/m/0/hd/1/",
      externalUrl:
        "https://traseo.pl/trasa/szlak-partyzantow-ii-zgrupowania-ak-obwodu-debica",
    },
  },
  drugi: {
    name: "Szlak Drugi",
    displayName:
      "Drugi Szlak Partyzancki II Zgrupowania Armii Krajowej Obwodu Dębica",
    enabled: false,
    paragraphs: [],
    trailPoints: [],
    map: { iframeUrl: "", externalUrl: "" },
  },
  trzeci: {
    name: "Szlak Trzeci",
    displayName:
      "Trzeci Szlak Partyzancki II Zgrupowania Armii Krajowej Obwodu Dębica",
    enabled: false,
    paragraphs: [],
    trailPoints: [],
    map: { iframeUrl: "", externalUrl: "" },
  },
} as const;
