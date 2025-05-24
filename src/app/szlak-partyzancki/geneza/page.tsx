"use client";

import React from "react";
import Image from "next/image";
import { paragraphs } from "./data/paragraphs";
import { sideImages } from "./data/images";
import { OriginsSection } from "./_components/OriginsSection";
import Container from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import { Heading } from "@/components/shared/Heading/Heading";

const getMobileOrderedImages = () => {
  return sideImages
    .filter((img) => img.mobileOrder)
    .sort((a, b) => a.mobileOrder! - b.mobileOrder!);
};

export default function GenezaPage() {
  const mobileImages = getMobileOrderedImages();

  return (
    <Container
      as="main"
      className="text-16 leading-6 tablet:text-18 tablet:leading-7"
    >
      <Breadcrumbs color="green" />
      <Heading
        contrast="yellow"
        color="green"
        className="pt-8 !text-28 tablet:!text-32"
      >
        Geneza
      </Heading>

      <article className="mb-20 hidden tablet:grid tablet:grid-cols-2 tablet:gap-20">
        <div className="flex flex-col gap-6">
          {paragraphs.map((section) => (
            <OriginsSection key={section.title} {...section} />
          ))}
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

      <article className="tablet:hidden">
        {paragraphs.map((section, index) => {
          const matchingImage = mobileImages.find(
            (img) => img.mobileOrder === index + 1,
          );

          return (
            <div key={section.title} className="mb-12">
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
      </article>
    </Container>
  );
}
