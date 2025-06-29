"use client";
import Container from "../shared/Container";
import { BackgroundImage } from "../shared/BackgroundImage/BackgroundImage";
import { Heading } from "../shared/Heading/Heading";
import { history } from "@/data/historyData";
import Image from "next/image";
import { Button } from "../shared/Button/Button";
import { Routes } from "@/routes";

const { title, content } = history.biograms;

export const HistoryBiogramComponent = () => (
  <BackgroundImage
    alt=""
    src="/images/history/main/paper_bg.webp"
    width="768"
    height="948"
    className="absolute object-fill contrast:hidden"
    aria-hidden="true"
  >
    <Container className="relative py-10">
      <Heading variant="h3" contrast="yellow" color="green">
        {title}
      </Heading>
      <div className="md:flex">
        <p className="my-6 font-courier text-lg md:w-2/3">{content}</p>
        <div className="relative m-auto aspect-[0.89] w-[300px] max-w-[300px]">
          <Image
            src="/images/history/main/veteran.webp"
            alt="Zdjęcie weterana Armii Krajowej"
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className="object-cover"
          />
        </div>
      </div>
      <Button
        variant="primaryBlue"
        label="Sprawdź"
        ariaDescription="Sprawdź"
        className="m-auto mt-6"
        href={Routes.BIOGRAMS}
      />
    </Container>
  </BackgroundImage>
);
