import { formatDate } from "@/utils";
import clsx from "clsx";

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
  const today = formatDate(new Date().toString());
  const dayNumber = day.split(".")[0];
  const monthNumber = day.split(".")[1];
  const isToday = day === today;

  const isCurrentMonth =
    monthNumber === formatDate(currentDate.toString()).split(".")[1];

  const isEventDate = eventsDates.find(
    (date) =>
      date.split(".")[0] === dayNumber && date.split(".")[1] === monthNumber,
  );

  return (
    <td
      key={dayIndex}
      aria-label={day}
      className={clsx(
        `flex h-10 w-10 items-center justify-center text-18 tablet:my-3 tablet:w-11 tablet:text-32`,
        isCurrentMonth ? "text-white" : "text-greenC",
        isToday && "rounded border-2 border-yellowVintage",
        isEventDate && "rounded border-2 border-backgroundMain",
      )}
    >
      {dayNumber}
    </td>
  );
};
