"use client";
import Container from "../shared/Container";
import { BackgroundImage } from "../shared/BackgroundImage/BackgroundImage";
import { Heading } from "../shared/Heading/Heading";
import { historyData } from "@/data/historyData";
import Image from "next/image";
import { Button } from "../shared/Button/Button";
import { Routes } from "@/routes";

const { title, content } = historyData.history.biograms;

export const HistoryBiogramComponent = () => (
  <BackgroundImage
    alt=""
    src="/images/history/main/paper_desktop_bg.webp"
    width="768"
    height="948"
    className="absolute object-fill"
    aria-hidden="true"
  >
    <Container className="relative py-10 contrast:bg-yellowContrast">
      <Heading variant="h3" contrast="black" color="green">
        {title}
      </Heading>
      <div className="desktop:flex">
        <p className="my-6 font-courier text-lg text-greenMain desktop:w-2/3">
          {content}
        </p>
        <Image
          src="/images/history/main/veteran.webp"
          alt="Zdjęcie weterana Armii Krajowej"
          width={290}
          height={354}
          className="m-auto w-[300px] max-w-[300px]"
        ></Image>
      </div>
      <Button
        label="Sprawdź"
        ariaDescription="Sprawdź"
        className="m-auto mt-6"
        href={Routes.BIOGRAMS}
      />
    </Container>
  </BackgroundImage>
);
