import { formatDate } from "@/utils";

export const generateCalendar = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const currentDate = new Date(year, month, 1);
  const calendarDays = [];
  const dayOfWeek = currentDate.getDay(); // Numer dnia tygodnia
  const daysToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  currentDate.setDate(currentDate.getDate() + daysToMonday);
  const rowsNumber = 6;
  const daysInWeek = 7;

  for (let i = 0; i < rowsNumber; i++) {
    const week = [];
    for (let j = 0; j < daysInWeek; j++) {
      week.push(formatDate(currentDate.toString()));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    calendarDays.push(week);
  }

  return calendarDays;
};
