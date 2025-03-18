"use client";

import { CalendarHeader } from "@/app/zwiazek/kalendarz/_components/CalendarHeader";
import { CalendarTable } from "@/app/zwiazek/kalendarz/_components/CalendarTable";
import { addMonth } from "@/app/zwiazek/kalendarz/_components/Dates/Dates";
import { cardsPlaceholder } from "@/app/zwiazek/kalendarz/_components/Events/List";
import { Posts } from "@/app/zwiazek/kalendarz/_components/Events/Posts";
import { CalendarCard } from "@/components/shared/CalendarCard/CalendarCard";
import { useState } from "react";

export const CalendarMain = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [postsToShow, setPostsToShow] = useState(3);

  const handleNextMonth = () => {
    setCurrentDate(addMonth(currentDate, 1));
    setPostsToShow(3);
  };

  const handlePrevMonth = () => {
    setCurrentDate(addMonth(currentDate, -1));
    setPostsToShow(3);
  };

  const eventForToday = getEventForToday();
  console.log(eventForToday);

  return (
    <>
      <section className="flex w-full flex-col items-center gap-10 self-center bg-greenMain py-9 tablet:justify-center tablet:gap-52 tablet:px-10 desktop:flex-row">
        <CalendarTable
          currentDate={currentDate}
          prevMonth={handlePrevMonth}
          nextMonth={handleNextMonth}
        />
        <CalendarCard
          date={eventForToday?.date.split(".")[2]}
          description={eventForToday?.title}
        />
      </section>
      <section className="flex flex-col items-center gap-5 px-4 pb-10 tablet:gap-16 tablet:px-10 desktop:px-24">
        <CalendarHeader
          className="items-center justify-center text-24 text-greenMain tablet:w-full tablet:justify-between tablet:text-32"
          iconClassName="stroke-greenMain h-7 w-7 tablet:h-10 tablet:w-10"
          currentDate={currentDate}
          handleNextMonth={handleNextMonth}
          handlePrevMonth={handlePrevMonth}
        />
        <Posts
          currentDate={currentDate}
          handleShowMore={() => setPostsToShow(postsToShow + 3)}
          postsToShow={postsToShow}
        />
      </section>
    </>
  );
};

const getEventForToday = () => {
  const pad = (value: number) => value.toString().padStart(2, "0");
  const todayMonthDay = `${pad(new Date().getDate())}.${pad(new Date().getMonth() + 1)}`;

  // Return first event or array of events that matches today's date??

  const event = cardsPlaceholder.find((card) =>
    card.date.startsWith(todayMonthDay),
  );
  return event;
};
