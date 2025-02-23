import Link from "next/link";
import { Place } from "@/types/index";
import { Button } from "@/components/shared/Button/Button";
import IconMapPin from "@/icons/IconMapPin";
import Image from "next/image";

interface Props {
  place: Place;
}

export const PlaceItem = ({ place }: Props) => (
  <article className="border-b md:border-b-4 border-greenMain flex flex-col gap-6 pb-8 font-lora w-full">

    {/* ✅ MOBILE (bez zmian) */}
    <div className="flex flex-col gap-6 md:hidden">
      <h2 className="text-[1.5rem] font-bold">{place.name}</h2>
      <div className="flex items-center gap-2 text-greenB">
        <IconMapPin name="pin" className="w-4 h-4" />
        <h4 className="text-[1.25rem]">{place.location}</h4>
      </div>
      <Image
        src={place.image}
        alt={place.name}
        width={288}
        height={191}
        className="rounded-lg object-cover w-full h-[191px] transition-all duration-300"
      />
      <p className="font-sourceSans text-xl text-black">{place.description}</p>
      <div className="w-full flex justify-center">
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

    {/* ✅ TABLET (Tekst po lewej, Zdjęcie + Button po prawej) */}
    <div className="hidden md:flex md:flex-row md:items-start lg:hidden">
      {/* ✅ LEWA KOLUMNA: TEKST */}
      <div className="flex-1 flex flex-col gap-6">
        <h2 className="text-[1.75rem] font-bold">{place.name}</h2>
        <div className="flex items-center gap-2 text-greenB">
          <IconMapPin name="pin" className="w-4 h-4" />
          <h4 className="text-[1.75rem]">{place.location}</h4>
        </div>
        <p className="font-sourceSans text-xl text-black">{place.description}</p>
      </div>

      {/* ✅ PRAWA KOLUMNA: ZDJĘCIE + BUTTON */}
      <div className="md:w-1/3 flex flex-col items-center md:items-end">
        <Image
          src={place.image}
          alt={place.name}
          width={288}
          height={191}
          className="rounded-lg object-cover
          w-full  
          h-[191px] 
          md:w-[151px] md:h-[151px]
          transition-all duration-300"
        />

        {/* ✅ BUTTON POD ZDJĘCIEM */}
        <div className="w-full flex justify-center md:justify-end mt-4">
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

    {/* ✅ DESKTOP (Zdjęcie po lewej, Tekst w środku, Button po prawej) */}
    <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6">

      {/* ✅ 1️⃣ ZDJĘCIE PO LEWEJ */}
      <div className="lg:w-full flex flex-col items-center lg:items-start">
        <Image
          src={place.image}
          alt={place.name}
          width={288}
          height={191}
          className="rounded-lg object-cover
          w-full  
          h-[191px] 
          lg:w-[200px] lg:h-[200px]
          transition-all duration-300"
        />
      </div>

      {/* ✅ 2️⃣ ŚRODKOWA KOLUMNA: TEKST */}
      <div className="flex flex-col gap-6">
        <h2 className="text-[1.75rem] lg:text-[2rem] font-bold">{place.name}</h2>
        <div className="flex items-center gap-2 text-greenB">
          <IconMapPin name="pin" className="w-4 h-4" />
          <h4 className="text-[1.75rem] lg:text-[1.5rem]">{place.location}</h4>
        </div>
        <p className="font-sourceSans text-xl text-black">{place.description}</p>
      </div>

      {/* ✅ 3️⃣ PRAWA KOLUMNA – BUTTON */}
      <div className="hidden lg:flex lg:justify-end">
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
  </article>
);
