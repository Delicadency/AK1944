"use client";

import { CalendarHeader } from "@/app/(client)/zwiazek/kalendarz/_components/CalendarHeader";
import { CalendarTable } from "@/app/(client)/zwiazek/kalendarz/_components/CalendarTable";
import { EventsList } from "@/app/(client)/zwiazek/kalendarz/_components/Events/EventsList";
import { addMonth } from "@/app/(client)/zwiazek/kalendarz/_utils/Dates/Dates";
import { CalendarCard } from "@/components/shared/CalendarCard/CalendarCard";
import { useState } from "react";

export const CalendarMain = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleNextMonth = () => {
    setCurrentDate(addMonth(currentDate, 1));
  };

  const handlePrevMonth = () => {
    setCurrentDate(addMonth(currentDate, -1));
  };

  return (
    <>
      <section className="flex w-full items-center justify-center bg-greenMain">
        <div className="flex w-full max-w-[1440px] flex-col items-center gap-10 py-9 tablet:justify-center tablet:px-10 lg:flex-row desktop:justify-between desktop:px-28">
          <CalendarTable
            currentDate={currentDate}
            prevMonth={handlePrevMonth}
            nextMonth={handleNextMonth}
          />
          <CalendarCard />
        </div>
      </section>
      <section className="flex w-full max-w-[1440px] flex-col items-center gap-5 px-4 pb-10 tablet:gap-16 tablet:px-10 desktop:px-28">
        <CalendarHeader
          className="items-center justify-center text-24 tablet:w-full tablet:justify-between tablet:text-32"
          iconClassName="stroke-greenMain contrast:stroke-yellowContrast h-7 w-7 tablet:h-10 tablet:w-10"
          currentDate={currentDate}
          handleNextMonth={handleNextMonth}
          handlePrevMonth={handlePrevMonth}
        />
        <EventsList currentDate={currentDate} />
      </section>
    </>
  );
};
