import { pad } from "@/app/zwiazek/kalendarz/_utils/pad";
import { cn } from "@/utils";

interface Props {
  day: string;
  dayIndex: number;
  currentDate: Date;
  eventsDates: string[];
}

export const CalendarTableCell = ({
  day,
  dayIndex,
  currentDate,
  eventsDates,
}: Props) => {
  const today = new Date();
  const [days, month] = day.split(".");

  const isCurrentMonth = month === pad(currentDate.getMonth() + 1);
  // month === (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const isToday =
    today.getDate() === Number(days) && today.getMonth() + 1 === Number(month);

  const isEventDate = eventsDates.find((eventDate) => {
    const [eventDay, eventMonth] = eventDate.split(".");
    return eventDay === days && eventMonth === month;
  });

  return (
    <td
      key={dayIndex}
      aria-label={day}
      className={cn(
        `flex h-10 w-10 items-center justify-center text-18 tablet:my-3 tablet:w-11 tablet:text-32`,
        isCurrentMonth ? "text-white" : "text-greenC",
        isToday && "rounded border-2 bg-white text-greenMain",
        isEventDate && "rounded border-2 border-backgroundMain",
      )}
    >
      {days}
    </td>
  );
};
