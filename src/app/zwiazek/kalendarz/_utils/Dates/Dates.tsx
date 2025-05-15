export const addMonth = (date: Date, offset: number) =>
  new Date(date.setMonth(date.getMonth() + offset));

export const weekdays = ["Pon", "Wt", "Śr", "Cz", "Pt", "Sb", "Ndz"];
