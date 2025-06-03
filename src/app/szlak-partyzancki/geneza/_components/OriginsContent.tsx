import Image from "next/image";
import { Routes } from "@/routes";
import { paragraphs } from "../data/paragraphs";
import { OriginsSection } from "./OriginsSection";
import { Button } from "@/components/shared/Button/Button";
import { sideImages } from "../data/images";

export const OriginContent = () => {
  return (
    <article className="mb-[150px] hidden tablet:grid tablet:grid-cols-2 tablet:gap-20">
      <div className="flex flex-col gap-6">
        {paragraphs.map((section) => (
          <OriginsSection key={section.title} {...section} />
        ))}
        <Button
          ariaDescription="Kliknij, aby przejść do podstrony Rajdy"
          label="Weź udział w Rajdzie"
          href={Routes.RAIDS}
          variant="primaryBlue"
        />
      </div>

      <div className="flex flex-col gap-8">
        {sideImages.map((image) => (
          <Image
            key={image.id}
            src={image.src}
            alt={image.alt}
            priority
            width={600}
            height={600}
            className="aspect-square h-auto w-[600px] object-cover"
          />
        ))}
      </div>
    </article>
  );
};
