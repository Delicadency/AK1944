import { Place } from "@/types/index";
import { Button } from "@/components/shared/Button/Button";
import IconMapPin from "@/icons/IconMapPin";
import Image from "next/image";


interface Props {
  place: Place;
}



export const PlaceItem = ({ place }: Props) => (
  <article className="border-b md:border-b-4 border-greenMain flex flex-col gap-8 pb-8 font-lora w-full md:flex-row md:items-start md:gap-6">
    {/* Sekcja obrazka - widoczna zawsze */}
    <div className="md:order-2 lg:order-1 flex-shrink-0">
      <Image
        src={place.image}
        alt={place.name}
        width={288}
        height={191}
        className="rounded-lg object-cover
        w-full  
        h-[191px] 
        md:w-[151px] md:h-[151px]  
        lg:w-[200px] lg:h-[200px]
        transition-all duration-300"
      />
    </div>

    {/* Główna treść */}
    <div className="md:order-1 lg:order-2 flex-1 flex flex-col gap-8">
      <h2 className="text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] font-bold">{place.name}</h2>
      <div className="flex items-center gap-2 text-greenB">
        <IconMapPin name="pin" className="w-4 h-4" />
        <h4 className="text-[1.25rem] md:text-[1.75rem] lg:text-[1.5rem]">{place.location}</h4>
      </div>
      <p className="font-sourceSans text-xl text-black">{place.description}</p>
    </div>

    {/* Kontener na przyciski */}
    <div className="flex flex-col gap-6 md:contents">
      {/* Przycisk dla tabletu (w kolumnie z obrazkiem) */}
      <div className="md:order-3 self-center md:self-start lg:hidden">
        <Button
          href={place.link}
          label="Czytaj dalej"
          variant="secondary"
          className="rounded-lg min-w-[150px]"
          ariaDescription={`Przejdź do szczegółów miejsca: ${place.name}`}
        />
      </div>
      {/* Przycisk dla desktopa */}
      <div className="hidden lg:block lg:order-3 lg:self-end">
        <Button
          href={place.link}
          label="Czytaj dalej"
          variant="secondary"
          className="rounded-lg min-w-[150px] "
          ariaDescription={`Przejdź do szczegółów miejsca: ${place.name}`}
        />
      </div>
    </div>
  </article>
);
