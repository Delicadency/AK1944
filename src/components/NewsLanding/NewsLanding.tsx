import Container from "../shared/Container";
import { Button } from "../shared/Button/Button";
import { Heading } from "../shared/Heading/Heading";
import { NewsItem } from "../shared/NewsItem/NewsItem";
// import { getPosts } from "@/dataAccess/posts";
import { Routes } from "@/routes";
import { CalendarCard } from "@/components/shared/CalendarCard/CalendarCard";
// import { news } from "@/data/news";

import { getPayload } from "payload";
import config from "@payload-config";

const getNews = async (amount = 2) => {
  // return [news.slice(0, amount), null];

  try {
    const payload = await getPayload({ config });

    const news = await payload.find({
      collection: "news",
      limit: amount,
      sort: "-createdAt",
      where: { published: { equals: true } },
    });

    return [news.docs, null] as const;
  } catch (error) {
    console.error(error);
    return [null, error] as const;
  }
};

export const NewsLanding = async () => {
  // const [news, error] = await getPosts(2);
  const [news, error] = await getNews(2);

  const noData = error || !news || news.length === 0;
  if (noData) return null;

  return (
    <section>
      <div className="flex items-center justify-center bg-white py-10 contrast:bg-black00">
        <Heading variant="h2" color="green" contrast="yellow" underline>
          Aktualności
        </Heading>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 bg-greenMain py-10 contrast:bg-yellowContrast">
        <Container className="flex flex-col items-center justify-center gap-10 tablet:px-11 desktop:flex-row-reverse desktop:gap-36 desktop:px-44">
          <div>
            <CalendarCard withButton />
          </div>
          <div className="flex flex-col justify-center gap-5 tablet:gap-10">
            {news.map((n) => (
              <NewsItem key={n.id} post={n} />
            ))}
          </div>
        </Container>
        <Button
          variant="primaryBlue"
          label="Przejdź do archiwum"
          ariaDescription="Przejdź do archiwum"
          className="bg-transparent py-0 underline shadow-none contrast:bg-transparent contrast:text-black"
          href={Routes.ARCHIVE}
        />
      </div>
    </section>
  );
};

/*
news: [
    {
      createdAt: '2025-06-06T12:00:45.000Z',
      updatedAt: '2025-06-06T12:00:45.000Z',
      published: true,
      title: 'Jubileusz 35-lecia ŚZŻAK - Dębickie Obchody',
      content: [Object],
      createdAt_tz: 'Europe/Berlin',
      heroImage: [Object],
      id: '684b7554496457a92a75506b'
    }
  ]

  heroImage: {
    createdAt: '2025-06-13T00:47:27.521Z',
    updatedAt: '2025-06-13T00:47:27.521Z',
    alt: '35 lat ŚZŻAK',
    filename: 'szzak35.jpg',
    mimeType: 'image/jpeg',
    filesize: 308031,
    width: 1439,
    height: 2048,
    focalX: 50,
    focalY: 50,
    id: '684b751f496457a92a755055',
    url: '/api/asset/file/szzak35.jpg',
    thumbnailURL: null
  },
  content: {
    root: {
      children: [Array],
      direction: 'ltr',
      format: '',
      indent: 0,
      type: 'root',
      version: 1
    }
  }
*/
