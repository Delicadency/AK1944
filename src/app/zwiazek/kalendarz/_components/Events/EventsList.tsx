import { data } from "@/app/zwiazek/kalendarz/_components/Events/data";
import { EventCard } from "@/app/zwiazek/kalendarz/_components/Events/EventCard";
import { Button } from "@/components/shared/Button/Button";

interface Props {
  currentDate: Date;
  handleShowMore: () => void;
  postsToShow: number;
}

const getHistoricalEvents = (currentMonth: number) =>
  data.filter((card) => {
    const [, month] = card.date.split(".").map(Number);
    return month - 1 === currentMonth;
  });

export const EventsList = ({
  currentDate,
  handleShowMore,
  postsToShow,
}: Props) => {
  const historicalEvents = getHistoricalEvents(currentDate.getMonth());

  const showMoreButton = postsToShow < historicalEvents.length;

  return (
    <article className="flex w-full flex-col items-start gap-5 tablet:gap-10">
      {historicalEvents
        .slice(0, postsToShow)
        .map((card, index, filteredCards) => (
          <EventCard
            key={index}
            {...card}
            isLast={index === filteredCards.length - 1}
          />
        ))}
      {showMoreButton && (
        <Button
          className="self-center"
          label="Pokaż więcej"
          ariaDescription="Pokaż więcej"
          variant="inversion"
          onClick={handleShowMore}
        />
      )}
    </article>
  );
};
