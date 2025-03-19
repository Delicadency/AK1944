interface Paragraph {
  paragraph: string[];
}
interface SubsectionWithTitle extends Paragraph {
  subtitle: string;
}

interface SubsectionWithBulletpoints extends SubsectionWithTitle {
  bulletpoints: string[];
}

interface ArticleStructure {
  mainArticle: Paragraph;
  subsections: {
    establishment: SubsectionWithTitle;
    goals: SubsectionWithBulletpoints;
    development: SubsectionWithTitle;
  };
  addendum: Paragraph;
}
const unionData: ArticleStructure = {
  mainArticle: {
    paragraph: [
      "Światowy Związek Żołnierzy Armii Krajowej (ŚZŻAK) powstał w 1990 roku w Polsce z inicjatywy byłych żołnierzy Armii Krajowej, którzy pragnęli upamiętnić działalność jednej z największych podziemnych armii II wojny światowej. Głównym impulsem do założenia organizacji była chęć ochrony pamięci o AK, dbania o jej dobre imię, a także potrzeba stworzenia przestrzeni do zrzeszania kombatantów i ich potomków.",
      "Po zakończeniu II wojny światowej i przejęciu władzy w Polsce przez komunistów, żołnierze AK byli często prześladowani, a ich działalność marginalizowana lub przedstawiana w negatywnym świetle. Armia Krajowa, będąca częścią Polskiego Państwa Podziemnego, stała się wrogiem dla nowego ustroju. Wielu jej członków było represjonowanych, więzionych, a niekiedy mordowanych przez władze komunistyczne. W takich warunkach przez wiele lat nie było możliwości swobodnego upamiętniania działalności AK. Dopiero w latach 80. XX wieku, w okresie stopniowego rozluźnienia systemu komunistycznego i powstania ruchu „Solidarność”, temat Armii Krajowej zaczął wracać do debaty publicznej. Przełom nastąpił po upadku komunizmu w 1989 roku, kiedy możliwe stało się założenie oficjalnej organizacji kombatanckiej.",
    ],
  },
  subsections: {
    establishment: {
      subtitle: "Założenie organizacji",
      paragraph: [
        "Światowy Związek Żołnierzy Armii Krajowej został powołany 12 marca 1990 roku. Na pierwszym zjeździe założycielskim przyjęto statut i określono główne cele organizacji. Była to pierwsza tego typu instytucja, która mogła działać legalnie, swobodnie rozwijając swoją działalność na terenie całego kraju i poza jego granicami.",
      ],
    },
    goals: {
      subtitle: "Cele i zadania związku",
      paragraph: ["Od samego początku Związek skupił się na:"],
      bulletpoints: [
        "Upamiętnianiu Armii Krajowej: poprzez organizację obchodów rocznicowych, opiekę nad miejscami pamięci, tablicami i pomnikami związanymi z AK.",
        "Edukacji patriotycznej: Związek prowadził działania w szkołach, publikował książki i wspomnienia żołnierzy AK oraz współpracował z instytucjami naukowymi i kulturalnymi.",
        "Ochronie praw kombatantów: organizacja dążyła do poprawy sytuacji życiowej byłych żołnierzy AK, zwłaszcza weteranów potrzebujących pomocy materialnej lub opieki medycznej.",
        "Budowaniu wspólnoty pamięci: Związek integrował środowisko kombatantów i ich rodzin oraz wspierał współpracę z młodzieżą.",
      ],
    },
    development: {
      subtitle: "Dalszy rozwój",
      paragraph: [
        "Z czasem Związek rozwinął strukturę regionalną, tworząc koła w różnych miastach Polski i zagranicą. Było to ważne, ponieważ wielu żołnierzy AK po wojnie wyemigrowało. W miarę starzenia się kombatantów priorytety organizacji zaczęły przesuwać się w stronę działalności edukacyjnej i dokumentacyjnej. Światowy Związek Żołnierzy AK współpracuje z Muzeum Powstania Warszawskiego, Instytutem Pamięci Narodowej oraz innymi instytucjami zajmującymi się historią II wojny światowej.",
      ],
    },
  },
  addendum: {
    paragraph: [
      "Dziś Światowy Związek Żołnierzy Armii Krajowej jest jednym z najważniejszych strażników pamięci o polskim ruchu oporu podczas II wojny światowej i Polskim Państwie Podziemnym. Działa na rzecz zachowania tej tradycji dla przyszłych pokoleń.i Krajowej jest jednym z najważniejszych strażników pamięci.",
    ],
  },
} as const;

export const { mainArticle, subsections, addendum } = unionData;
