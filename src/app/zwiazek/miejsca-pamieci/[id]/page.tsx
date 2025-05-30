import { memorialPlaces } from "@/data/memorialPlacesData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Container from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading/Heading";
import { IconMapPin } from "@/icons/IconMapPin";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import Link from "next/link";

export async function generateStaticParams() {
  return memorialPlaces.map((place) => ({
    id: place.id.toString(),
  }));
}

export default async function Page(props: { params: { id: string } }) {
  const { params } = props;
  const { id } = await params; // <-- WAŻNE: awaitujemy params!
  const numericId = Number(id);
  const place = memorialPlaces.find((p) => p.id === numericId);

  if (!place) {
    notFound();
  }

  const otherPlaces = memorialPlaces.filter((p) => p.id !== place.id);

  return (
    <Container className="mx-auto max-w-5xl p-4 pb-20 pt-12">
      <div className="mb-6">
        <Breadcrumbs currentPageLabel={place.name} />
      </div>
      <Heading
        variant="h1"
        contrast="black"
        color="green"
        className="text-greenDark mb-8 mt-4 text-3xl font-bold"
      >
        {place.name}
      </Heading>

      <div className="mb-8 flex items-center gap-2 text-greenB">
        <IconMapPin className="size-5" />
        <span className="text-lg font-medium">{place.location}</span>
      </div>

      <div className="grid grid-cols-1 gap-8 tablet:grid-cols-3">
        <div className="tablet:col-span-2">
          {place.description && (
            <p className="mb-4 font-sourceSans text-lg text-black">
              {place.description}
            </p>
          )}

          {place.highlight && (
            <div className="mx-auto mb-8 max-w-[510px] rounded-xl bg-greenLight p-4 text-center">
              <p
                className="text-[18px] font-bold text-greenB"
                style={{
                  fontFamily: "Courier New, Courier, monospace",
                  textTransform: "uppercase",
                }}
              >
                {place.highlight}
              </p>
            </div>
          )}

          {place.descriptionContinuation && (
            <p className="font-sourceSans text-lg text-black">
              {place.descriptionContinuation}
            </p>
          )}

          {!place.description &&
            !place.descriptionContinuation &&
            !place.highlight && (
              <p className="font-sourceSans text-lg text-black">
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
            <div className="rounded-desktop flex h-[200px] items-center justify-center bg-gray-200 text-gray-600">
              zdjęcie nie jest dostępne
            </div>
          )}
        </div>
      </div>

      <div className="mt-20 pt-14">
        <Heading
          variant="h2"
          contrast="black"
          color="green"
          className="mb-10 text-2xl font-bold"
        >
          Inne miejsca pamięci:
        </Heading>
        <div className="grid grid-cols-1 gap-6 tablet:grid-cols-3">
          {otherPlaces.slice(0, 3).map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="flex flex-col items-start gap-4 transition hover:opacity-80"
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
              <span className="text-base font-bold text-greenMain">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
