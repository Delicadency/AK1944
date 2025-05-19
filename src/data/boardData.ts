type BoardData = {
  members: { title: string; names: string[] }[];
  note: string;
  announcement: string;
  electionInfo: string;
};

export const boardData: BoardData = {
  members: [
    { title: "Prezes Honorowy:", names: ["kpt. Edmund Książek"] },
    { title: "Prezes:", names: ["Maciej Małozięć*"] },
    {
      title: "Skład zarządu:",
      names: [
        "Elżbieta Jarzębska* – wiceprezes",
        "Tomasz Czapla* – wiceprezes",
        "Małgorzata Grzybowska* – sekretarz",
        "Artur Lis* – skarbnik",
        "Stanisława Książek* – księgowa",
        "Wiesława Pawlus",
        "Bronisław Ćwik",
        "Stanisław Garstka",
      ],
    },
    {
      title: "Komisja Rewizyjna:",
      names: [
        "Andrzej Żylicz – przewodniczący KR",
        "Tadeusz Garstka – członek KR",
        "Stanisław Nylec* – członek KR",
        "Grzegorz Kloc* – zastępca członka KR",
        "Krystian Tumiński* – zastępca członka KR",
      ],
    },
    {
      title: "Delegaci na Walny Zjazd Okręgu:",
      names: [
        "Bronisław Ćwik – delegat",
        "Elżbieta Jarzębska* – delegat",
        " Małgorzata Grzybowska* – zastępca delegata",
        "Andrzej Lis* – zastępca delegata",
      ],
    },
  ],
  note: "* członkowie zwyczajni bez uprawnień kombatanckich",

  announcement:
    "Zgodnie z § 43 Statutu ŚZŻAK, Zarząd Koła zwołuje Walne Zebranie Członków Środowiska 5. PSK AK ŚZŻAK w Dębicy.",

  electionInfo:
    "Władze Koła wybrano w trakcie Walnego Zebrania dnia 30 marca 2019 roku.",
} as const;
