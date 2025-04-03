import { historicalEventList } from "@/app/zwiazek/kalendarz/_components/Events/List";

export const GetEventForToday = () => {
  const today = new Date();
  const pad = (value: number) => value.toString().padStart(2, "0");
  const todayMonthDay = `${pad(today.getDate())}.${pad(today.getMonth() + 1)}`;

  // ToReconsider Return first event or array of events that matches today's date??

  const event = historicalEventList.find((card) =>
    card.date.startsWith(todayMonthDay),
  );
  return event;
};
