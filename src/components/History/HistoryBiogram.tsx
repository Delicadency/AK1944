"use client";
import Container from "../shared/Container";
// import { BackgroundImage } from "../shared/BackgroundImage/BackgroundImage";
import { Heading } from "../shared/Heading/Heading";
import { historyData } from "@/data/historyData";
import Image from "next/image";
import { Button } from "../shared/Button/Button";
import { Routes } from "@/routes";
// import { useMediaQuery } from "@/hooks/useMediaQuery";

// ToDo: https://app.clickup.com/t/8698509d5

export default function HistoryBiogram() {
  const { title, content } = historyData.history.biograms;
  // const isDesktop = useMediaQuery("(max-width: 1280px)");
  return (
    // <BackgroundImage
    //   alt="tło imitujące kartkę"
    //   src={
    //     isDesktop
    //       ? "/images/history/main/paper_mobile_bg.png"
    //       : "/images/history/main/paper_desktop_bg.png"
    //   }
    //   width="768"
    //   height="948"
    //   className="absolute -top-5"
    // >
    <Container className="relative justify-items-center py-10 contrast:bg-yellowContrast">
      <Heading variant="h3" contrast="yellow" color="green">
        {title}
      </Heading>
      <div className="desktop:flex">
        <p className="my-6 text-greenMain">{content}</p>
        <Image
          src="/images/history/main/veteran.png"
          alt="Zdjęcie weterana Armii Krajowej"
          width={500}
          height={1920}
        ></Image>
      </div>
      <Button
        label="Sprawdź"
        ariaDescription="Sprawdź"
        className="mt-6"
        href={Routes.BIOGRAMS}
      ></Button>
    </Container>
    // </BackgroundImage>
  );
}
