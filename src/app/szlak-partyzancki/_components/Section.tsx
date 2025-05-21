import { Button } from "@/components/shared/Button/Button";
import { Heading } from "@/components/shared/Heading/Heading";
import { SectionType, sections } from "../data/sections";
import Image from "next/image";

type SectionProps = {
  sectionName: SectionType;
};

export const Section = ({ sectionName }: SectionProps) => {
  const { text, route, image, alt } = sections[sectionName];

  return (
    <section className="flex flex-col pb-10 desktop:pb-0">
      <Heading color="green" contrast="yellow" className="pb-2">
        {sectionName}
      </Heading>
      <p>{text}</p>
      <Button
        label="Sprawdź"
        ariaDescription={`Przejdź do strony ${sectionName}`}
        variant="secondary"
        href={route}
        className="my-6 self-center tablet:self-start"
      />
      <div className="relative h-[300px] w-full max-w-[592px] justify-center self-center tablet:self-start desktop:w-[592px]">
        <Image
          src={image}
          alt={alt}
          width={592}
          height={300}
          priority
          className="rounded-md object-cover"
        />
      </div>
    </section>
  );
};
