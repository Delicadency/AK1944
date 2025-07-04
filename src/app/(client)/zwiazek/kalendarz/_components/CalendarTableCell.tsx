import { pad } from "@/app/(client)/zwiazek/kalendarz/_utils/pad";
import { cn } from "@/utils";
import Link from "next/link";

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
  const isToday =
    today.getDate() === Number(days) && today.getMonth() + 1 === Number(month);

  const isEventDate = eventsDates.find((eventDate) => {
    const [eventDay, eventMonth] = eventDate.split(".");
    return eventDay === days && eventMonth === month && isCurrentMonth;
  });

  return (
    <td
      key={dayIndex}
      aria-label={day}
      className={cn(
        `desktop: flex h-10 w-10 items-center justify-center text-18 tablet:w-11 tablet:text-32`,
        isCurrentMonth ? "text-textLight" : "text-textLightGreen",
        isToday &&
          "rounded border-2 bg-white text-textDarkGreen contrast:text-black00",
        isEventDate && "rounded border-2 border-textLight",
      )}
    >
      {isEventDate ? (
        <Link
          href={`#event-${days}-${month}`}
          aria-label={`Przejdź do wydarzenia z dnia ${days}.${month}`}
          tabIndex={0}
        >
          {days}
        </Link>
      ) : (
        days
      )}
    </td>
  );
};
