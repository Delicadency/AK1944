import { getPosts } from "@/dataAccess/posts";
import Calendar from "../Calendar/Calendar";
import { Button } from "../shared/Button/Button";
import Container from "../shared/Container";
import { Heading } from "../shared/Heading/Heading";
import { NewsItem } from "../shared/NewsItem/NewsItem";
import { Post } from "@/types";

const NewsLanding = async () => {
  let posts: Post[] = [];
  let errorMessage: string | null = null;

  try {
    posts = await getPosts("https://ak1944.pl/wp-json/wp/v2/posts?per_page=2");

    if (!posts || posts.length === 0) {
      errorMessage = "Brak danych";
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      errorMessage = `Wystąpił błąd podczas ładowania danych. ${error.message}`;
    } else {
      errorMessage = "Wystąpił nieznany błąd.";
    }
  }

  if (errorMessage) {
    return <p>{errorMessage}</p>;
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
          <div className="flex flex-col items-center justify-center gap-5 tablet:gap-10">
            {posts.map((post) => (
              <NewsItem
                key={post.id}
                id={post.id}
                heading={post.title}
                date={post.date}
                excerpt={post.excerpt}
                featured_media={post.featured_media}
              />
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
