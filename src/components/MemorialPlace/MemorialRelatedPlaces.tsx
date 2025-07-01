import Image from "next/image";
import Link from "next/link";
import { Heading } from "@/components/shared/Heading/Heading";
import type { PlaceDetails } from "@/types";

export const MemorialRelatedPlaces = ({
  places,
}: {
  places: PlaceDetails[];
}) => (
  <section className="mt-20 pt-14">
    <Heading
      variant="h2"
      contrast="yellow"
      color="green"
      className="mb-10 text-2xl font-bold"
    >
      Inne miejsca pamięci:
    </Heading>
    <div className="grid grid-cols-1 gap-6 tablet:grid-cols-3">
      {places.slice(0, 3).map((item) => (
        <Link
          key={item.slug}
          href={`/zwiazek/miejsca-pamieci/${item.slug}`}
          aria-label={`Przejdź do szczegółów miejsca: ${item.name}`}
          className="flex flex-col items-center gap-4 transition hover:opacity-80"
        >
          {item.image && (
            <Image
              src={item.image}
              alt={item.name}
              width={300}
              height={200}
              className="rounded-desktop w-full object-cover"
            />
          )}
          <h3 className="text-center font-lora font-bold text-textLightGreen">
            {item.name}
          </h3>
        </Link>
      ))}
    </div>
  </section>
);
