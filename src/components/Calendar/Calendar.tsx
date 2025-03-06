"use client";
import { useState } from "react";
import { CalendarHeader } from "@/components/Calendar/CalendarHeader";
import { daysOfWeek, today } from "@/components/Calendar/Dates/Dates";
import { formatDate } from "@/utils";
import clsx from "clsx";

export const Calendar = ({ date }: { date: Date }) => {
  const [currentDate, setCurrentDate] = useState(date);
  const [, setPostsToShow] = useState(3);

  const generateCalendar = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const currentDate = new Date(year, month, 1);
    const calendarDays = [];
    const dayOfWeek = currentDate.getDay(); // Numer dnia tygodnia
    const daysToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    currentDate.setDate(currentDate.getDate() + daysToMonday);

    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        week.push(formatDate(currentDate.toString()));
        currentDate.setDate(currentDate.getDate() + 1);
      }
      calendarDays.push(week);
    }

    return calendarDays;
  };

  const calendarDays = generateCalendar(currentDate);

  return (
    <div className="flex flex-col items-center gap-5">
      <CalendarHeader
        className="w-full items-center justify-between px-1.5 text-24 text-white"
        iconClassName="stroke-white"
        date={currentDate}
      />
      <table className="flex flex-col items-center gap-5">
        <thead>
          <tr className="border-b-2 border-greenC text-greenC">
            {daysOfWeek.map((day) => (
              <td
                key={day}
                aria-label={day}
                className="h-10 w-10 text-center text-18"
              >
                {day}
              </td>
            ))}
          </tr>
        </thead>
        <tbody className="text-center">
          {calendarDays.map((week, weekIndex) => (
            <tr key={weekIndex} className="flex items-center gap-0.5">
              {week.map((day, dayIndex) => (
                <td
                  key={dayIndex}
                  aria-label={day}
                  className={clsx(
                    `flex h-10 w-10 items-center justify-center text-18`,
                    day.split(".")[1] ===
                      formatDate(currentDate.toString()).split(".")[1]
                      ? "text-white"
                      : "text-greenC",
                    day === formatDate(today.toString()) &&
                      "rounded border-2 border-yellowVintage",
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
