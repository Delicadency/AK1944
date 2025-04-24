"use client";
import { Heading } from "@/components/shared/Heading/Heading";
import { placesSection } from "@/data/historyData";
import { useState } from "react";
import { IconChevronDown } from "@/icons/IconChevronDown";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/utils";
import Image from "next/image";

export const PlacesSection = () => {
  const { placesTitle, places, paragraph } = placesSection;

  const isMobile = useMediaQuery("(max-width: 767px)");

  const [openDescription, setOpenDescription] = useState<Set<string>>(
    new Set(),
  );

  const toggleDescription = (id: string) => {
    setOpenDescription((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
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
                  aria-expanded={
                    openDescription.has(place.id) ? "true" : "false"
                  }
                  aria-controls={`place-description-${place.id}`}
                >
                  <div className="h-4 w-4 flex-shrink-0 rounded-full bg-redMain" />
                  <p className="text-start text-lg contrast:text-yellowContrast">
                    {place.name}
                    {!isMobile && " " + place.description}
                  </p>
                  <IconChevronDown
                    className={cn(
                      "size-7 transition-transform tablet:hidden desktop:hidden",
                      openDescription.has(place.id) ? "rotate-180" : "rotate-0",
                    )}
                    aria-hidden="true"
                  />
                </button>
                <p
                  className={cn(
                    "mt-2 text-lg contrast:text-yellowContrast",
                    isMobile && !openDescription.has(place.id)
                      ? "hidden"
                      : "block",
                  )}
                >
                  {isMobile && place.description}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-lg contrast:text-yellowContrast">
            {paragraph}
          </p>
        </div>
        <div className="shrink-0">
          <Image
            src="/images/history/debica/kaluzowka.webp"
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
