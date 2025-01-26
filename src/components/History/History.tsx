import { Heading } from "../shared/Heading/Heading";
import { historyData as txt } from "@/data/historyData";
import { BackgroundImage } from "../shared/BackgroundImage/BackgroundImage";
import Container from "../shared/Container";
export default function History() {
  const { title, description1, description2, description3, description4 } =
    txt.history;
  return (
    <BackgroundImage
      alt="Historyczne zdjęcie 5. Pułku Strzelców Konnych"
      src="/images/history/main/history_bg.jpg"
      width="1920"
      height="1080"
    >
      <Container className="pb-36 pt-5" as="section">
        <button>{`Domek :)`}</button>
        <Heading
          variant="h3"
          contrast="yellow"
          color="green"
          className="mb-10 mt-5"
        >
          {title}
        </Heading>
        <div className="max-w-[709px] text-white">
          <p>{description1}</p>
          <p>{description2}</p>
          <p className="mobile:mt-6">{description3}</p>
          <p>{description4}</p>
        </div>
      </Container>
    </BackgroundImage>
  );
}
