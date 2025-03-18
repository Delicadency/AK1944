import clsx from "clsx";
import { CalendarHeader } from "@/app/zwiazek/kalendarz/_components/CalendarHeader";
import { formatDate } from "@/utils";
import { cardsPlaceholder } from "@/app/zwiazek/kalendarz/_components/Events/List";
import { daysOfWeek } from "@/app/zwiazek/kalendarz/_components/Dates/Dates";

type CalendarTableProps = {
  currentDate: Date;
  prevMonth: () => void;
  nextMonth: () => void;
};

export const CalendarTable = ({
  currentDate,
  prevMonth,
  nextMonth,
}: CalendarTableProps) => {
  const calendarDays = generateCalendar(currentDate);

  const eventsDates = cardsPlaceholder.map((card) => card.date);

  return (
    <div className="flex flex-col items-center gap-5 font-lora tablet:rounded tablet:border-2 tablet:border-greenC tablet:px-16 tablet:py-10">
      <CalendarHeader
        className="w-full items-center justify-between px-1.5 text-24 text-white tablet:text-32"
        iconClassName="stroke-white tablet:w-8 tablet:h-8 "
        currentDate={currentDate}
        handlePrevMonth={prevMonth}
        handleNextMonth={nextMonth}
      />
      <table className="flex flex-col items-center gap-5">
        <thead>
          <tr className="flex items-center border-b-2 border-greenC text-greenC tablet:gap-6">
            {daysOfWeek.map((day) => (
              <td
                key={day}
                aria-label={day}
                className="h-10 w-10 text-center text-18 tablet:w-11 tablet:text-24"
              >
                {day}
              </td>
            ))}
          </tr>
        </thead>
        <tbody className="text-center">
          {calendarDays.map((week, weekIndex) => (
            <tr
              key={weekIndex}
              className="flex items-center gap-0.5 tablet:gap-6"
            >
              {week.map((day, dayIndex) => (
                <td
                  key={dayIndex}
                  aria-label={day}
                  className={clsx(
                    `flex h-10 w-10 items-center justify-center text-18 tablet:my-3 tablet:w-11 tablet:text-32`,
                    day.split(".")[1] ===
                      formatDate(currentDate.toString()).split(".")[1]
                      ? "text-white"
                      : "text-greenC",
                    day === formatDate(new Date().toString()) &&
                      "rounded border-2 border-yellowVintage",
                    eventsDates.find(
                      (date) =>
                        date.split(".")[0] === day.split(".")[0] &&
                        date.split(".")[1] === day.split(".")[1],
                    ) && "rounded border-2 border-backgroundMain",
                  )}
                >
                  {day.split(".")[0]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const generateCalendar = (date: Date) => {
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
