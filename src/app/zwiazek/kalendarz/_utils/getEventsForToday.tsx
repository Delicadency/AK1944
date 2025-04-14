import { historicalEventList } from "@/app/zwiazek/kalendarz/_components/Events/List";

const pad = (value: number) => value.toString().padStart(2, "0");

export const getEventForToday = () => {
  const today = new Date();
  const todayMonthDay = `${pad(today.getDate())}.${pad(today.getMonth() + 1)}`;
  const event = historicalEventList.find((card) =>
    card.date.startsWith(todayMonthDay),
  );
  return event;
};
