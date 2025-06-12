type BoardData = {
  members: { title: string; names: string[] }[];
  note: string;
  announcement: string;
  electionInfo: string;
};

export const boardData: BoardData = {
  members: [
    { title: "Prezes Honorowy:", names: ["Wiesława Pawlus"] },
    { title: "Prezes:", names: ["Maciej Małozięć*"] },
    {
      title: "Skład zarządu:",
      names: [
        "Tomasz Czapla* – wiceprezes",
        "Małgorzata Grzybowska* – sekretarz",
        "Artur Lis* – skarbnik",
        "Elżbieta Jarzębska* – członek zarządu",
        "Stanisław Nylec - członek zarządu",
        "Andrzej Lis - członek zarządu",
        "Ewa Książek - członek zarządu",
        "Grzegorz Kloc - członek zarządu",
      ],
    },
    {
      title: "Delegaci na Walny Zjazd Okręgu:",
      names: [
        "Elżbieta Jarzębska* – delegat",
        "Małgorzata Grzybowska* – zastępca delegata",
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
