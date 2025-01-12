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
      <div className="bg-greenMain py-10 contrast:bg-yellowContrast">
        <NewsItem
          heading="Lorem ipsum"
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
          heading="Lorem ipsum"
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
    </section>
  );
};

export default NewsLanding;
