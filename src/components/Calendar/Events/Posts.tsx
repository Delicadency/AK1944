"use client";
import { useState } from "react";
import { cardsPlaceholder } from "@/components/Calendar/Events/List";
import { Card } from "@/components/Calendar/Events/Card";
import { Button } from "@/components/shared/Button/Button";

export const Posts = () => {
 const [postsToShow, setPostsToShow] = useState(3);

  const handleShowMore = () => {
    setPostsToShow((prev) => prev + 3);
  };

  const showMoreButton =
    postsToShow <
    cardsPlaceholder.filter((card) => {
      const [, month] = card.date.split(".").map(Number);
      return month - 1 === currentDate.getMonth();
    }).length;

  return (
    <article className="flex w-full flex-col items-center gap-5">
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
          label="Pokaż więcej"
          ariaDescription="Pokaż więcej"
          variant="inversion"
          onClick={handleShowMore}
        />
      )}
    </article>
  );
};
