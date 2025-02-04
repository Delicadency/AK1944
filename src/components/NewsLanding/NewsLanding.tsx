import Calendar from "../Calendar/Calendar";
import Container from "../shared/Container";
import { Button } from "../shared/Button/Button";
import { Heading } from "../shared/Heading/Heading";
import { NewsItem } from "../shared/NewsItem/NewsItem";
import { getPosts } from "@/dataAccess/posts";

const NewsLanding = async () => {
  const [posts, error] = await getPosts(2);

  if (error) {
    return <p>{`Wystąpił błąd podczas ładowania danych. ${error.message}`}</p>;
  }

  if (!posts || posts.length === 0) {
    return <p>Brak danych</p>;
  }

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
          <div className="flex flex-col items-center justify-center gap-[30px]">
            {posts.map((post) => (
              <NewsItem key={post.id} post={post} />
            ))}
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
