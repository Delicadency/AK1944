"use client";

import { Heading } from "@/components/shared/Heading/Heading";
import { people } from "../data/peopleList";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function MorePeopleBiograms() {
  const params = useParams();
  const currentSlug = params?.slug;

  const filteredPeople = people.filter((person) => person.slug !== currentSlug);
  const randomPeople = [...filteredPeople]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <div className="p-4">
      <Heading variant="h2" contrast="black" color="green">
        Sprawdź też
      </Heading>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 pt-16 tablet:grid-cols-2 desktop:grid-cols-3 desktop:gap-14">
        {randomPeople.slice(0, 3).map(({ id, name, imageUrl, slug }) => (
          <div key={id} className="flex flex-col items-center rounded p-4">
            <Link href={`/biogramy/${slug}`}>
              <Image
                src={imageUrl}
                alt={name}
                width={300}
                height={200}
                className="h-[400px] w-96 cursor-pointer rounded object-cover transition-opacity hover:opacity-80 tablet:h-[500px]"
              />
            </Link>
            <Heading
              variant="h4"
              contrast="black"
              color="green"
              className="pt-5"
            >
              {name}
            </Heading>
          </div>
        ))}
      </div>
    </div>
  );
}
