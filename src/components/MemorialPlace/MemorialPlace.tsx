import { PlaceDetails } from "@/types/index";
import { Button } from "@/components/shared/Button/Button";
import IconMapPin from "@/icons/IconMapPin";
import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";

export const MemorialPlace = ({ place }: { place: PlaceDetails }) => (
  <article className="border-b tablet:border-b-4 border-greenMain pb-8 font-lora w-full flex flex-col tablet:grid tablet:grid-cols-2 desktop:grid-cols-3 gap-6">
    <div className="order-2 tablet:order-2 desktop:order-1 w-full tablet:flex tablet:flex-col tablet:items-end desktop:items-start desktop:col-start-1">
      <Image
        src={place.image}
        alt={place.name}
        width={288}
        height={191}
        className="rounded-desktop object-cover 
          w-full h-[191px] 
          tablet:w-[200px] tablet:h-[200px] 
          desktop:w-[250px] desktop:h-[250px] 
          transition-all duration-300"
      />
      {/* BUTTON */}
      <div className="w-full flex justify-center desktop:hidden mt-4">
        <Button
          label="Czytaj dalej"
          variant="secondary"
          className="rounded-desktop min-w-[150px]"
          ariaDescription={`Przejdź do szczegółów miejsca: ${place.name}`}
          href={place.link}
        />
      </div>
    </div>
    <div className="order-1 tablet:order-1 desktop:order-2 flex flex-col gap-4 text-center tablet:text-left desktop:col-span-2 desktop:text-left">
      <Heading
        variant="h2"
        contrast="black"
        color="green"
        className="text-[1.5rem] tablet:text-[1.75rem] desktop:text-[2rem] font-bold">
        {place.name}
      </Heading>
      <div className="desktop:grid desktop:grid-cols-2 desktop:gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-greenB">
            <IconMapPin name="pin" className="w-4 h-4" />
            <Heading
              variant="h4"
              className="text-[1.25rem] tablet:text-[1.75rem] desktop:text-[1.5rem]"
              contrast="black"
              color="green" >
              {place.location}
            </Heading>
          </div>
          <p className="font-sourceSans text-xl text-black">{place.description}</p>
        </div>
        {/* BUTTON (DESKTOP ONLY) */}
        <div className="hidden desktop:flex desktop:justify-center desktop:items-start mt-4">
          <Button
            label="Czytaj dalej"
            variant="secondary"
            className="rounded-desktop min-w-[150px]"
            ariaDescription={`Przejdź do szczegółów miejsca: ${place.name}`}
            href={place.link}
          />

        </div>
      </div>
    </div>
  </article>
);
