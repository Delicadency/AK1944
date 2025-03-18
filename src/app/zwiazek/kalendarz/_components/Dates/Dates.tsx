export const addMonth = (date: Date, offset = 1) =>
  new Date(date.setMonth(date.getMonth() + offset));

export const daysOfWeek = ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Ndz"];
