import { Heading } from "../shared/Heading/Heading";
import { historyData } from "@/data/historyData";
import { BackgroundImage } from "../shared/BackgroundImage/BackgroundImage";
import Container from "../shared/Container";
import { Breadcrumbs } from "../shared/Breadcrumbs/Breadcrumbs";

const { title, description } = historyData.history;

export const HistoryBanner = () => (
  <BackgroundImage
    alt="Historyczne zdjęcie 5. Pułku Strzelców Konnych"
    src="/images/history/main/history_bg.webp"
    width="1920"
    height="912"
    className="absolute z-0 h-full w-full object-cover desktop:h-[912px] desktop:object-fill"
    priority
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
        {description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </Container>
  </BackgroundImage>
);
