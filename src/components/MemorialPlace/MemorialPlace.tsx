import Link from "next/link";
import { PlaceDetails } from "@/types/index";
import { Button } from "@/components/shared/Button/Button";
import IconMapPin from "@/icons/IconMapPin";
import Image from "next/image";

export const MemorialPlace = ({ place }: { place: PlaceDetails }) => (
  <article className="border-b md:border-b-4 border-greenMain pb-8 font-lora w-full flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="order-2 md:order-2 lg:order-1 w-full md:flex md:flex-col md:items-end lg:items-start lg:col-start-1">
      <Image
        src={place.image}
        alt={place.name}
        width={288}
        height={191}
        className="rounded-lg object-cover 
          w-full h-[191px] 
          md:w-[200px] md:h-[200px] 
          lg:w-[250px] lg:h-[250px] 
          transition-all duration-300"
      />
      {/* BUTTON */}
      <div className="w-full flex justify-center lg:hidden mt-4">
        <Link href={place.link} passHref>
          <Button
            label="Czytaj dalej"
            variant="secondary"
            className="rounded-lg min-w-[150px]"
            ariaDescription={`Przejdź do szczegółów miejsca: ${place.name}`}
          />
        </Link>
      </div>
    </div>
    <div className="order-1 md:order-1 lg:order-2 flex flex-col gap-4 text-center md:text-left lg:col-span-2 lg:text-left">
      <h2 className="text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] font-bold">{place.name}</h2>
      <div className="lg:grid lg:grid-cols-2 lg:gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-greenB">
            <IconMapPin name="pin" className="w-4 h-4" />
            <h4 className="text-[1.25rem] md:text-[1.75rem] lg:text-[1.5rem]">{place.location}</h4>
          </div>
          <p className="font-sourceSans text-xl text-black">{place.description}</p>
        </div>
        {/* BUTTON (DESKTOP ONLY) */}
        <div className="hidden lg:flex lg:justify-center lg:items-start mt-4">
          <Link href={place.link} passHref>
            <Button
              label="Czytaj dalej"
              variant="secondary"
              className="rounded-lg min-w-[150px]"
              ariaDescription={`Przejdź do szczegółów miejsca: ${place.name}`}
            />
          </Link>
        </div>
      </div>
    </div>
  </article>
);
