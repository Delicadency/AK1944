"use client";
import Container from "../shared/Container";
import { BackgroundImage } from "../shared/BackgroundImage/BackgroundImage";
import { Heading } from "../shared/Heading/Heading";
import { historyData } from "@/data/historyData";
import Image from "next/image";
import { Button } from "../shared/Button/Button";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Routes } from "@/routes";

export const HistoryBiogramComponent = () => {
  const { title, content } = historyData.history.biograms;
  const isSmallScreen = useMediaQuery("(max-width: 1279px)");
  // ToDo: https://app.clickup.com/t/8698509d5
  return (
    <BackgroundImage
      alt=""
      src={
        isSmallScreen
          ? "/images/history/main/paper_mobile_bg.webp"
          : "/images/history/main/paper_desktop_bg.webp"
      }
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
          <p className="my-6 font-courier text-lg text-greenMain">{content}</p>
          <Image
            src="/images/history/main/veteran.webp"
            alt="Zdjęcie weterana Armii Krajowej"
            width={500}
            height={1920}
            className="m-auto"
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
};
