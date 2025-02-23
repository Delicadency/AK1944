import { Heading } from "@/components/shared/Heading/Heading";
import { historyData } from "@/data/historyData";
import { Button } from "@/components/shared/Button/Button";
import { useState } from "react";
import { IconChevronDown } from "@/icons/IconChevronDown";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/utils";
import Image from "next/image";

export const Places = () => {
  const { placesTitle, places, places1 } = historyData.debica ?? {};
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [openDescription, setOpenDescription] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleDescription = (id: string) => {
    setOpenDescription((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
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
                <div
                  className="flex items-center gap-3"
                  onClick={() => isMobile && toggleDescription(place.id)}
                >
                  <div className="h-4 w-4 rounded-full bg-redMain" />
                  <p className="text-lg contrast:text-yellowContrast">
                    {place.name}
                  </p>
                  {isMobile && (
                    <button
                      type="button"
                      className="ml-auto"
                      aria-label="Rozwiń opis"
                    >
                      <IconChevronDown
                        className={cn(
                          "size-7 transition-transform",
                          openDescription[place.id] ? "rotate-180" : "rotate-0",
                        )}
                      />
                    </button>
                  )}
                </div>
                <p
                  className={cn(
                    "mt-2 text-lg contrast:text-yellowContrast",
                    isMobile && !openDescription[place.id] ? "hidden" : "block",
                  )}
                >
                  {place.description}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-lg contrast:text-yellowContrast">{places1}</p>
        </div>
        {/* button todo */}
        {isMobile && (
          <Button
            label="Czytaj więcej"
            ariaDescription="Czytaj więcej"
            variant={"secondary"}
            className="m-auto"
          />
        )}
        <div className="shrink-0">
          <Image
            src="/images/history/debica/people.jpg"
            alt="debica"
            width={500}
            height={810}
            className="m-auto"
          />
        </div>
      </div>
    </section>
  );
};
