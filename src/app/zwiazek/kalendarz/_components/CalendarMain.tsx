"use client";

import { CalendarHeader } from "@/app/zwiazek/kalendarz/_components/CalendarHeader";
import { CalendarTable } from "@/app/zwiazek/kalendarz/_components/CalendarTable";
import { addMonth } from "@/app/zwiazek/kalendarz/_components/Dates/Dates";
import { getEventForToday } from "@/app/zwiazek/kalendarz/_utils/getEventsForToday";
import { Posts } from "@/app/zwiazek/kalendarz/_components/Events/Posts";
import { CalendarCard } from "@/components/shared/CalendarCard/CalendarCard";
import { useState } from "react";

const DEFAULT_NUMBER_OF_POSTS = 3;

export const CalendarMain = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [postsToShow, setPostsToShow] = useState(DEFAULT_NUMBER_OF_POSTS);

  const handleNextMonth = () => {
    setCurrentDate(addMonth(currentDate, 1));
    setPostsToShow(DEFAULT_NUMBER_OF_POSTS);
  };

  const handlePrevMonth = () => {
    setCurrentDate(addMonth(currentDate, -1));
    setPostsToShow(DEFAULT_NUMBER_OF_POSTS);
  };

  const eventForToday = getEventForToday();

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
      <section className="flex max-w-[1440px] flex-col items-center gap-5 px-4 pb-10 tablet:gap-16 tablet:px-10 desktop:px-24">
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
