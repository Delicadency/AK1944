// import Image from "next/image";
import { Place } from "../../data/memorialPlacesData";
import { Button } from "../shared/Button/Button";

export const PlaceItem: React.FC<{ miejsce: Place }> = ({ miejsce }) => (
  <div className="mb-8 border-b border-gray-300 pb-8">
    <div className="flex flex-col items-center md:flex-row md:items-start">
      {/* Zdjęcie */}
      <div className="mb-4 flex-shrink-0 md:mb-0 md:mr-4">
        {/* <Image
                src={miejsce.image}
                alt={miejsce.name}
                width={200}
                height={200}
                className="rounded-lg object-cover"
            /> */}
      </div>
      {/* Opis i button */}
      <div className="flex flex-1 flex-col items-start justify-between md:flex-row md:items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="mb-2 text-lg font-semibold">{miejsce.name}</h2>
          <h4 className="mb-4 text-sm text-gray-500">{miejsce.location}</h4>
          <p className="mb-4 text-gray-700">{miejsce.description}</p>
        </div>
        <Button
          href={miejsce.link}
          label="Czytaj dalej"
          ariaDescription={`Przejdź do szczegółów miejsca: ${miejsce.name}`}
          variant="secondary"
        />
      </div>
    </div>
  </div>
);
