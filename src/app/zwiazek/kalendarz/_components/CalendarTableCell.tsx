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
  const [days, month] = day.split(".");

  const isCurrentMonth =
    month === (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const isToday = currentDate.getDate().toString() === days;

  const isEventDate = eventsDates.find((eventDate) => {
    const [eventDay, eventMonth] = eventDate.split(".");
    return eventDay === days && eventMonth === month;
  });

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
      {days}
    </td>
  );
};
