import Image from "next/image";
import type { PlaceDetails } from "@/types";

export const MemorialContentSection = ({ place }: { place: PlaceDetails }) => (
  <section className="mt-8 grid grid-cols-1 gap-8 font-sourceSans text-16 tablet:grid-cols-3">
    <div className="tablet:col-span-2">
      {place.description && (
        <p className="mb-4 font-sourceSans text-lg">{place.description}</p>
      )}

      {Array.isArray(place.highlight) && (
        <div className="mx-auto mb-1.5 max-w-[510px] space-y-8 rounded-md bg-greenLight p-4 px-8 py-5 contrast:bg-black00">
          {place.highlight.map((block, idx) => (
            <p
              key={idx}
              className={`whitespace-pre-line text-18 font-bold text-textLightGreen ${
                block.align === "left"
                  ? "text-left"
                  : block.align === "right"
                    ? "text-right"
                    : "text-center"
              }`}
              style={{
                fontFamily: "Courier New, Courier, monospace",
                textTransform: "uppercase",
              }}
            >
              {block.text}
            </p>
          ))}
        </div>
      )}

      {place.descriptionContinuation && (
        <p className="font-sourceSans text-lg text-textDarkGreen">
          {place.descriptionContinuation}
        </p>
      )}

      {!place.description &&
        !place.descriptionContinuation &&
        !place.highlight && (
          <p className="text-4 font-lora text-textDarkGreen">
            Opis zostanie uzupełniony wkrótce.
          </p>
        )}
    </div>

    <div className="w-full">
      {place.image ? (
        <Image
          src={place.image}
          alt={place.name}
          width={300}
          height={200}
          className="rounded-desktop w-full object-cover"
        />
      ) : (
        <figure className="rounded-desktop bg-gray-200 text-gray-600 flex h-[200px] items-center justify-center">
          <figcaption className="text-center text-sm italic">
            zdjęcie nie jest dostępne
          </figcaption>
        </figure>
      )}
    </div>
  </section>
);
