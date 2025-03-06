"use client";

import { IconArrowCircle } from "@/icons/IconArrowCircle";
import { addMonth, months } from "@/components/Calendar/Dates/Dates";
import { useState } from "react";
import clsx from "clsx";

interface CalendarHeaderProps {
  date: Date;
  className?: string;
  iconClassName?: string;
}

export const CalendarHeader = ({
  date,
  className,
  iconClassName,
}: CalendarHeaderProps) => {
  const [currentDate, setCurrentDate] = useState(date);
  const [, setPostsToShow] = useState(3);

  const handleNextMonth = () => {
    setCurrentDate(addMonth(currentDate, 1));
    setPostsToShow(3);
  };

  const handlePrevMonth = () => {
    setCurrentDate(addMonth(currentDate, -1));
    setPostsToShow(3);
  };

  return (
    <div className={clsx("flex items-center gap-5", className)}>
      <button onClick={handlePrevMonth} aria-label="Poprzedni miesiąc">
        <IconArrowCircle className={clsx("rotate-180", iconClassName)} />
      </button>
      <h2 className="font-bold">{`${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`}</h2>
      <button onClick={handleNextMonth} aria-label="Następny miesiąc">
        <IconArrowCircle className={iconClassName} />
      </button>
    </div>
  );
};
