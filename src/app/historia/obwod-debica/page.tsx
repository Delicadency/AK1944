"use client";
import Container from "@/components/shared/Container";
import { historyData } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";
import { Button } from "@/components/shared/Button/Button";
import { useState } from "react";
import { IconChevronDown } from "@/icons/IconChevronDown";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/utils";

export default function DebicaDistrictPage() {
  const {
    title,
    fortressTitle,
    fortress1,
    fortress2,
    beginningsTitle,
    beginnings1,
    beginnings2,
    placesTitle,
    places,
    places1,
    readinessTitle,
    readiness1,
    readiness2,
    expansionTitle,
    expansion1,
    expansion2,
    expansion3,
    expansion4,
    expansion5,
    expansion6,
    expansion7,
  } = historyData.debica ?? {};

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
  console.log(openDescription);

  return (
    <Container as="article" className="contrast:bg-black">
      <Heading
        variant="h3"
        color="green"
        contrast="yellow"
        className="mb-6 mt-4"
      >
        {title}
      </Heading>
      <section className="mb-6 flex flex-col gap-6">
        <Heading variant="h4" color="green" contrast="yellow">
          {fortressTitle}
        </Heading>
        <p className="text-18 contrast:text-yellowContrast">{fortress1}</p>
        <p className="text-18 contrast:text-yellowContrast">{fortress2}</p>
        <Image
          src="/images/history/debica/horses.jpg"
          alt="debica"
          width={500}
          height={1080}
          className="m-auto"
        />
      </section>
      <section className="mb-6 flex flex-col gap-6">
        <Heading variant="h4" color="green" contrast="yellow">
          {beginningsTitle}
        </Heading>
        <p className="text-18 contrast:text-yellowContrast">{beginnings1}</p>
        <p className="text-18 contrast:text-yellowContrast">{beginnings2}</p>
      </section>
      <section className="mb-6 flex flex-col gap-6">
        <Heading variant="h4" color="green" contrast="yellow">
          {placesTitle}
        </Heading>
        <ul className="flex flex-col gap-6">
          {places.map((place) => (
            <li key={place.id}>
              <div
                className="flex items-center gap-3"
                onClick={() => isMobile && toggleDescription(place.id)}
              >
                <div className="h-4 w-4 rounded-full bg-redMain" />
                <p className="text-18 contrast:text-yellowContrast">
                  {place.name}
                </p>
                {isMobile && (
                  <button type="button" className="ml-auto">
                    <IconChevronDown
                      className={cn(
                        "h-7 w-7 transition-transform",
                        openDescription[place.id] ? "rotate-180" : "rotate-0",
                      )}
                    />
                  </button>
                )}
              </div>
              <p
                className={cn(
                  "mt-2 text-18 contrast:text-yellowContrast",
                  window.innerWidth >= 768 || openDescription[place.id]
                    ? "block"
                    : "hidden",
                )}
              >
                {place.description}
              </p>
            </li>
          ))}
        </ul>
        <p className="text-18 contrast:text-yellowContrast">{places1}</p>
        {/* button todo */}
        <Button
          label="Czytaj więcej"
          ariaDescription="Czytaj więcej"
          variant={"secondary"}
          className="m-auto"
        />
      </section>
      <section className="mb-6 flex flex-col gap-6">
        <Image
          src="/images/history/debica/people.jpg"
          alt="debica"
          width={500}
          height={1080}
          className="m-auto"
        />
        <Heading variant="h4" color="green" contrast="yellow">
          {readinessTitle}
        </Heading>
        <p className="text-18 contrast:text-yellowContrast">{readiness1}</p>
        <p className="text-18 contrast:text-yellowContrast">{readiness2}</p>
      </section>
      <section className="mb-6 flex flex-col gap-6">
        <Heading variant="h4" color="green" contrast="yellow">
          {expansionTitle}
        </Heading>{" "}
        <Image
          src="/images/history/debica/officer-school.jpg"
          alt="debica"
          width={500}
          height={1080}
          className="m-auto"
        />
        <p className="text-18 contrast:text-yellowContrast">{expansion1}</p>
        <p className="text-18 contrast:text-yellowContrast">{expansion2}</p>
        <p className="text-18 contrast:text-yellowContrast">{expansion3}</p>
        <Image
          src="/images/history/debica/attention.jpg"
          alt="debica"
          width={500}
          height={1080}
          className="m-auto"
        />
        <p className="text-18 contrast:text-yellowContrast">{expansion4}</p>
        <p className="text-18 contrast:text-yellowContrast">{expansion5}</p>
        <p className="text-18 contrast:text-yellowContrast">{expansion6}</p>
        <p className="text-18 contrast:text-yellowContrast">{expansion7}</p>
      </section>
    </Container>
  );
}
