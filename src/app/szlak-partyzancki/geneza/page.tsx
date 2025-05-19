"use client";

import Image from "next/image";
import { paragraphs } from "./data/paragraphs";
import { sideImages } from "./data/images";
import { Section } from "./_components/Section";
import Container from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import { Heading } from "@/components/shared/Heading/Heading";

const getMobileOrderedImages = () => {
  return sideImages
    .filter(img => img.mobileOrder)
    .sort((a, b) => (a.mobileOrder! - b.mobileOrder!));
};

export default function GenezaPage() {
  const mobileImages = getMobileOrderedImages();

  return (
    <Container as="main" >
      <Breadcrumbs />
      <Heading contrast="yellow" color="green" className="pt-8">Geneza</Heading>

      <article className="hidden tablet:block">
        {paragraphs.map((section, index) => {
          const image = sideImages[index];

          return (
            <div
              key={section.title}
              className="flex flex-col tablet:flex-row gap-20 mb-16"
            >
              <div className="tablet:w-1/2">
                <Section {...section} />
              </div>
              {image && (
                <div className="tablet:w-1/2">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
            </div>
          );
        })}
      </article>

      <article className="tablet:hidden">
        {paragraphs.map((section, index) => {
          const matchingImage = mobileImages.find(
            (img) => img.mobileOrder === index + 1
          );

          return (
            <div key={section.title} className="mb-12">
              <Section {...section} />
              {matchingImage && (
                <div className="mt-4">
                  <Image
                    src={matchingImage.src}
                    alt={matchingImage.alt}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
            </div>
          );
        })}
      </article>
    </Container>
  );
}
