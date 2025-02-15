// import Image from "next/image";
import { Place } from "@/types/index";
import { Button } from "@/components/shared/Button/Button";

interface Props {
  place: Place;
}



export const PlaceItem = ({ place }: Props) => (
  <article className="border-b border-gray-300 flex flex-col gap-8 pb-8">
    <div className="flex flex-col md:flex-row items-start gap-6">
      {/* Zdjęcie */}
      <div className="flex-shrink-0">
        {/* <Image
                src={place.image}
                alt={place.name}
                width={200}
                height={200}
                className="rounded-lg object-cover"
            /> */}
      </div>
      {/* Opis i button */}
      <div className="flex flex-1 flex-col items-start justify-between md:flex-row md:items-center">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold">{place.name}</h2>
          <h4 className="text-sm text-gray-500">{place.location}</h4>
          <p className="text-gray-700">{place.description}</p>
        </div>
        <Button
          href={place.link}
          label="Czytaj dalej"
          ariaDescription={`Przejdź do szczegółów miejsca: ${place.name}`}
          variant="secondary"
        />
      </div>
    </div>
  </article>
);
