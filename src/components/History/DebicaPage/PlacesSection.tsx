import { Heading } from "@/components/shared/Heading/Heading";
import { placesSection } from "@/data/historyData";
import Image from "next/image";
import { PlaceItem } from "./PlaceItem";

const { placesTitle, places, paragraph } = placesSection;

export const PlacesSection = () => {
  return (
    <section className="flex flex-col gap-6">
      <Heading variant="h4" color="green" contrast="yellow">
        {placesTitle}
      </Heading>
      <div className="flex flex-col gap-6 desktop:flex-row">
        <div>
          <ul className="flex flex-col gap-6">
            {places.map((place, index) => (
              <PlaceItem key={index} place={place} />
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
