"use client";

import { CalendarHeader } from "@/app/zwiazek/kalendarz/_components/CalendarHeader";
import { CalendarTable } from "@/app/zwiazek/kalendarz/_components/CalendarTable";
import {
  addMonth,
  today,
} from "@/app/zwiazek/kalendarz/_components/Dates/Dates";
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

  const getEventForToday = () => {
    const todayMonthDay = `${today.getDate().toString().padStart(2, "0")}.${(today.getMonth() + 1).toString().padStart(2, "0")}`;
    const event = cardsPlaceholder.find((card) =>
      card.date.startsWith(todayMonthDay),
    );
    return event
      ? { year: event.date.split(".")[2], title: event.title }
      : null;
  };

  const eventForToday = getEventForToday();

  return (
    <>
      <section className="flex w-full flex-col items-center gap-10 self-center bg-greenMain py-9 tablet:flex-row tablet:justify-center tablet:gap-52 tablet:px-10">
        <CalendarTable
          currentDate={currentDate}
          prevMonth={handlePrevMonth}
          nextMonth={handleNextMonth}
        />
        <CalendarCard
          date={eventForToday ? eventForToday.year : "1234"}
          description={eventForToday ? eventForToday.title : ""}
          hideButton
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
