import { cardsPlaceholder } from "@/app/zwiazek/kalendarz/_components/Events/List";
import { Card } from "@/app/zwiazek/kalendarz/_components/Events/Card";
import { Button } from "@/components/shared/Button/Button";

interface Props {
  currentDate: Date;
  handleShowMore: () => void;
  postsToShow: number;
}

// const currentMonthPosts = getPostsForCurrentMonth(args);
// const areMorePostsAvailable = postsToShow < currentMonthPosts.length;

// const displayedPosts = currentMonthPosts.slice(0, postsToShow);

// return <jsx />;

export const Posts = ({ currentDate, handleShowMore, postsToShow }: Props) => {
  const showMoreButton =
    postsToShow <
    cardsPlaceholder.filter((card) => {
      const [, month] = card.date.split(".").map(Number);
      return month - 1 === currentDate.getMonth();
    }).length;

  return (
    <article className="flex w-full flex-col items-start gap-5 tablet:gap-10">
      {cardsPlaceholder
        .filter((card) => {
          const [, month] = card.date.split(".").map(Number);
          return month - 1 === currentDate.getMonth();
        })
        .slice(0, postsToShow)
        .map((card, index, filteredCards) => (
          <Card
            key={index}
            title={card.title}
            image={card.image}
            date={card.date}
            description={card.description}
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
