"use client";
import { Heading } from "@/components/shared/Heading/Heading";
import { historyData } from "@/data/historyData";
import { Button } from "@/components/shared/Button/Button";
import { useState } from "react";
import { IconChevronDown } from "@/icons/IconChevronDown";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/utils";
import Image from "next/image";

interface PlacesProps {
  onToggle: (state: boolean) => void;
}

export const Places: React.FC<PlacesProps> = ({ onToggle }) => {
  const { placesTitle, places, places1 } = historyData.debica ?? {};
  const isMobile = useMediaQuery("(max-width: 767px)");

  const [openDescription, setOpenDescription] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleDescription = (id: string) => {
    setOpenDescription((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const [readMore, setReadMore] = useState(false);
  const handleClick = () => {
    const newState = !readMore;
    setReadMore(newState);
    onToggle(newState);
  };

  return (
    <section className="flex flex-col gap-6">
      <Heading variant="h4" color="green" contrast="yellow">
        {placesTitle}
      </Heading>
      <div className="flex flex-col gap-6 desktop:flex-row">
        <div>
          <ul className="flex flex-col gap-6">
            {places.map((place) => (
              <li key={place.id}>
                <button
                  type="button"
                  className="flex items-center gap-3 desktop:cursor-default desktop:items-baseline"
                  onClick={() => isMobile && toggleDescription(place.id)}
                  aria-label={`Rozwiń opis dla: ${place.name}`}
                  aria-expanded={openDescription[place.id] ? "true" : "false"}
                  aria-controls={`place-description-${place.id}`}
                >
                  <div className="h-4 w-4 flex-shrink-0 rounded-full bg-redMain" />
                  <p className="text-start text-lg contrast:text-yellowContrast">
                    {place.name}
                    {!isMobile && place.description}
                  </p>
                  <IconChevronDown
                    className={cn(
                      "size-7 transition-transform tablet:hidden desktop:hidden",
                      openDescription[place.id] ? "rotate-180" : "rotate-0",
                    )}
                    aria-hidden="true"
                  />
                </button>
                <p
                  className={cn(
                    "mt-2 text-lg contrast:text-yellowContrast",
                    isMobile && !openDescription[place.id] ? "hidden" : "block",
                  )}
                >
                  {isMobile && place.description}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-lg contrast:text-yellowContrast">{places1}</p>
          <Button
            label={readMore ? "Zwiń tekst" : "Czytaj więcej"}
            variant={"secondary"}
            className="m-auto desktop:hidden"
            onClick={handleClick}
            ariaDescription={readMore ? "Zwiń tekst" : "Czytaj więcej"}
            aria-expanded={readMore ? "true" : "false"}
            aria-controls="readMore-text"
          />
        </div>
        <div className="shrink-0">
          <Image
            src="/images/history/debica/people.webp"
            alt="Ewakuacja rannych żołnierzy II Zgrupowania 5. Pułku Strzelców Konnych AK po bitwie na Kałużówce. Sierpień 1944 r."
            width={500}
            height={810}
            className="m-auto"
          />
        </div>
      </div>
    </section>
  );
};
