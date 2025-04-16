import { data } from "@/app/zwiazek/kalendarz/_components/Events/data";
import { pad } from "@/app/zwiazek/kalendarz/_utils/pad";

export const getEventForToday = () => {
  const today = new Date();
  const todayMonthDay = `${pad(today.getDate())}.${pad(today.getMonth() + 1)}`;
  const event = data.find((card) => card.date.startsWith(todayMonthDay));
  return event;
};
