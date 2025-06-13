import { data } from "@/app/(client)/zwiazek/kalendarz/_components/Events/data";
import { EventCard } from "@/app/(client)/zwiazek/kalendarz/_components/Events/EventCard";

interface Props {
  currentDate: Date;
}

const getHistoricalEvents = (currentMonth: number) =>
  data.filter((card) => {
    const [, month] = card.date.split(".").map(Number);
    return month - 1 === currentMonth;
  });

export const EventsList = ({ currentDate }: Props) => {
  const historicalEvents = getHistoricalEvents(currentDate.getMonth());

  return (
    <article className="flex w-full flex-col items-center gap-10">
      {historicalEvents.map((card, index, filteredCards) => {
        const [day, month] = card.date.split(".");
        return (
          <EventCard
            key={index}
            anchorId={`event-${day}-${month}`}
            {...card}
            isLast={index === filteredCards.length - 1}
          />
        );
      })}
    </article>
  );
};
