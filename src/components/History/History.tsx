import { Heading } from "../shared/Heading/Heading";
import { historyData } from "@/data/historyData";
import { BackgroundImage } from "../shared/BackgroundImage/BackgroundImage";
import Container from "../shared/Container";
import { Breadcrumbs } from "../shared/Breadcrumbs/Breadcrumbs";

const { title, description1, description2, description3, description4 } =
  historyData.history;

export const HistoryBanner = () => (
  <BackgroundImage
    alt="Historyczne zdjęcie 5. Pułku Strzelców Konnych"
    src="/images/history/main/history_bg.webp"
    width="1920"
    height="912"
    className="absolute z-0 w-full object-cover desktop:h-[912px] desktop:object-fill"
  >
    <Container className="pb-36 pt-5 desktop:h-[912px]" as="section">
      <Breadcrumbs />
      <Heading
        variant="h3"
        contrast="yellow"
        color="green"
        className="mb-10 mt-5"
      >
        {title}
      </Heading>
      <div className="max-w-[700px] font-sourceSans text-lg text-white desktop:flex desktop:flex-col desktop:gap-6">
        <p>{description1}</p>
        <p>{description2}</p>
        <p className="mobile:mt-6 desktop:mt-0">{description3}</p>
        <p>{description4}</p>
      </div>
    </Container>
  </BackgroundImage>
);
