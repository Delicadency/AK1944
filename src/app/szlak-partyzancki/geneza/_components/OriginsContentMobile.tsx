import Image from "next/image";
import { Routes } from "@/routes";
import { sideImages } from "../data/images";
import { paragraphs } from "../data/paragraphs";
import { OriginsSection } from "./OriginsSection";
import { Button } from "@/components/shared/Button/Button";

const getMobileOrderedImages = () => {
  return sideImages
    .filter((img) => img.mobileOrder)
    .sort((a, b) => a.mobileOrder! - b.mobileOrder!);
};

export const OriginContentMobile = () => {
    const mobileImages = getMobileOrderedImages();

    return(
<article className="mb-[120px] tablet:hidden">
        {paragraphs.map((section, index) => {
          const matchingImage = mobileImages.find(
            (img) => img.mobileOrder === index + 1,
          );

          return (
            <div key={section.title}>
              <OriginsSection {...section} />
              {matchingImage && (
                <div className="mt-4">
                  <Image
                    src={matchingImage.src}
                    alt={matchingImage.alt}
                    priority
                    width={600}
                    height={600}
                    className="w-max-[600px] aspect-square h-auto object-cover"
                  />
                </div>
              )}
            </div>
          );
        })}
        <Button
          ariaDescription="Kliknij, aby przejść do podstrony Rajdy"
          label="Weź udział w Rajdzie"
          href={Routes.RAIDS}
          variant="primaryBlue"
          className="m-auto my-5"
        />
      </article>

    )
}