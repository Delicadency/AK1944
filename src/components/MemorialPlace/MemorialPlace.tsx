import { PlaceDetails } from "@/types/index";
import { Button } from "@/components/shared/Button/Button";
import { IconMapPin } from "@/icons/IconMapPin";
import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";

export const MemorialPlace = ({ place }: { place: PlaceDetails }) => (
  <article className="flex w-full flex-col gap-6 border-b border-textDarkGreen pb-8 font-lora tablet:grid tablet:grid-cols-2 tablet:border-b-4 desktop:grid-cols-3">
    <div className="order-2 w-full tablet:order-2 tablet:flex tablet:flex-col tablet:items-end desktop:order-1 desktop:col-start-1 desktop:items-start">
      {place.image ? (
        <Image
          src={place.image}
          alt={place.name}
          width={288}
          height={191}
          className="rounded-desktop size-[191px] w-full object-cover transition-all duration-300 tablet:size-[200px] desktop:size-[250px]"
        />
      ) : (
        <figure className="rounded-desktop bg-gray-200 text-gray-600 flex h-[200px] items-center justify-center contrast:bg-yellowContrast contrast:text-yellowContrast">
          <figcaption className="text-center text-sm italic">
            zdjęcie nie jest dostępne
          </figcaption>
        </figure>
      )}
      {/* BUTTON */}
      <div className="mt-4 flex w-full justify-center desktop:hidden">
        <Button
          label="Czytaj więcej"
          variant="secondary"
          className="rounded-desktop min-w-[150px]"
          ariaDescription={`Przejdź do szczegółów miejsca: ${place.name}`}
          href={`/zwiazek/miejsca-pamieci/${place.slug}`}
        />
      </div>
    </div>
    <div className="order-1 flex flex-col gap-4 text-center tablet:order-1 tablet:text-left desktop:order-2 desktop:col-span-2 desktop:text-left">
      <Heading
        variant="h2"
        contrast="yellow"
        color="green"
        className="text-[1.5rem] font-bold tablet:text-[1.75rem] desktop:text-[2rem]"
      >
        {place.name}
      </Heading>
      <div className="desktop:grid desktop:grid-cols-2 desktop:gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-textLightGreen">
            <IconMapPin className="size-4" aria-hidden="true" />
            <Heading
              variant="h4"
              className="text-[1.25rem] tablet:text-[1.75rem] desktop:text-[1.5rem]"
              contrast="yellow"
              color="green"
            >
              {place.location}
            </Heading>
          </div>
          <p className="line-clamp-3 font-sourceSans text-xl">
            {place.description}
          </p>
        </div>
        {/* BUTTON (DESKTOP ONLY) */}
        <div className="mt-4 hidden desktop:flex desktop:items-start desktop:justify-center">
          <Button
            label="Czytaj więcej"
            variant="secondary"
            className="rounded-desktop min-w-[150px]"
            ariaDescription={`Przejdź do szczegółów miejsca: ${place.name}`}
            href={`/zwiazek/miejsca-pamieci/${place.slug}`}
          />
        </div>
      </div>
    </div>
  </article>
);
