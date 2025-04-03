export const addMonth = (date: Date, offset: number) =>
  new Date(date.setMonth(date.getMonth() + offset));

export const daysOfWeek = Array.from({ length: 7 }, (_, index) => {
  const date = new Date(2025, 0, 6 + index); // 6th January 2025 is a Monday
  const arrayOfDays = date.toLocaleDateString("default", {
    weekday: "short",
  });
  const shortenedDay = arrayOfDays.replace("niedz", "ndz").replace(".", "");
  return shortenedDay.charAt(0).toUpperCase() + shortenedDay.slice(1);
});
