import Calendar from "../Calendar/Calendar";
import { Button } from "../shared/Button/Button";
import Container from "../shared/Container";
import { Heading } from "../shared/Heading/Heading";
import { NewsItem } from "../shared/NewsItem/NewsItem";

const NewsLanding = () => {
  return (
    <section>
      <div className="flex items-center justify-center bg-white py-10 contrast:bg-black">
        <Heading variant="h2" color="green" contrast="yellow" underline>
          Aktualności
        </Heading>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 bg-greenMain py-10 contrast:bg-yellowContrast">
        <Container className="flex flex-col items-center justify-center gap-10 tablet:px-11 desktop:flex-row-reverse desktop:gap-36 desktop:px-44">
          <div>
            <Calendar
              date={1942}
              description="Związek Walki Zbrojnej (ZWZ) został przekształcony w Armię Krajową (AK)"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-5 tablet:gap-10">
            <NewsItem
              heading="Nagłówek jakiegoś wydarzenia"
              date="12.12.2024"
              image={{
                src: "/images/news_placeholder.png",
                alt: "news image",
                width: 400,
                height: 300,
              }}
              text="Lorem ipsum dolor sit amet consectetur. Imperdiet est libero faucibus sed nullam nibh tempus massa ipsum. Vel commodo urna praesent justo convallis vel duis justo. Placerat ut egestas volutpat tincidunt sed. Diam pharetra sed ultricies mi eget mauris pharetra et ultrices. Eget nunc scelerisque viverra mauris in aliqu amet. Eget nunc scelerisque viverra mauris in aliqu amet. Eget nunc scelerisque viverra maur in aliqu amet."
              id="1"
            />
            <NewsItem
              heading="Nagłówek jakiegoś wydarzenia"
              date="12.12.2024"
              image={{
                src: "/images/news_placeholder.png",
                alt: "news image",
                width: 400,
                height: 300,
              }}
              text="Lorem ipsum dolor sit amet consectetur. Imperdiet est libero faucibus sed nullam nibh tempus massa ipsum. Vel commodo urna praesent justo convallis vel duis justo. Placerat ut egestas volutpat tincidunt sed. Diam pharetra sed ultricies mi eget mauris pharetra et ultrices. Eget nunc scelerisque viverra mauris in aliqu amet. Eget nunc scelerisque viverra mauris in aliqu amet. Eget nunc scelerisque viverra maur in aliqu amet."
              id="1"
            />
          </div>
        </Container>
        <Button
          label="Przejdź do archiwum"
          ariaDescription="Przejdź do archiwum"
          className="bg-transparent py-0 underline shadow-none contrast:bg-transparent contrast:text-black"
        />
      </div>
    </section>
  );
};

export default NewsLanding;
