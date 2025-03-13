import clsx from "clsx";
import { IconArrowCircle } from "@/icons/IconArrowCircle";
import { months } from "@/app/zwiazek/kalendarz/_components/Dates/Dates";

interface CalendarHeaderProps {
  currentDate: Date;
  className?: string;
  iconClassName?: string;
  handlePrevMonth: () => void;
  handleNextMonth: () => void;
}

export const CalendarHeader = ({
  currentDate,
  className,
  iconClassName,
  handlePrevMonth,
  handleNextMonth,
}: CalendarHeaderProps) => {
  return (
    <div className={clsx("flex items-center gap-5 font-lora", className)}>
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
