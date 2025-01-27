import Container from "../shared/Container";
import { BackgroundImage } from "../shared/BackgroundImage/BackgroundImage";
import { Heading } from "../shared/Heading/Heading";
import { historyData } from "@/data/historyData";
import Image from "next/image";
import { Button } from "../shared/Button/Button";

export default function HistoryBiogram() {
  const { title, content } = historyData.history.biograms;
  return (
    <BackgroundImage
      alt="tło imitujące kartkę"
      src="/images/history/main/paper_mobile_bg.png"
      width="1920"
      height="1080"
      className="absolute -top-5"
    >
      <Container className="relative justify-items-center py-10 contrast:bg-yellowContrast">
        <Heading variant="h3" contrast="yellow" color="green">
          {title}
        </Heading>
        <p className="my-6 text-greenMain">{content}</p>
        <Image
          src="/images/history/main/veteran.png"
          alt="Zdjęcie weterana Armii Krajowej"
          width={1920}
          height={1080}
        ></Image>
        <Button
          label="Sprawdź"
          ariaDescription="Sprawdź"
          className="mt-6"
        ></Button>
      </Container>
    </BackgroundImage>
  );
}
