type Quote = {
  id: string;
  content: string;
  emphasis?: string;
};

export const quotes: Quote[] = [
  {
    id: "intro",
    content:
      "Natomiast pamięć o poległych i pomordowanych żołnierzach Armii Krajowej, przekazuję w opiece młodzieży Polskiej niech uporządkowane pomniki i cmentarze przypominają potomności o heroicznych walkach ich Ojców o wolność i niepodległość Polski.",
    emphasis: "Antoni Stańko, ps. „Pożoga”",
  },
  {
    id: "outro",
    content:
      "wsłuchaj się w ciszę drzew, tak wiele pamiętają… szepczą liśćmi na leśnych polanach o bohaterach co odeszli, posłuchaj wiatru – czasem nuci stare partyzanckie pieśni, o których dawno czas zapomniał, a brzezina wtóruje mu na otwartych strunach jak na harfie. Spójrz na wioskę w dolinie, jak spoczywa utulona w rozłożystych ramionach pól. Przejrzyj się też w kropli z potoku: Cóż masz czego być nie otrzymał?",
    emphasis: "Prośba:",
  },
] as const;
