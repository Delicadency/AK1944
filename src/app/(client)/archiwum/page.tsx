import { ComingSoon } from "@/components/ComingSoon/ComingSoon";
import { MemorialPlace } from "@/components/MemorialPlace/MemorialPlace";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import Container from "@/components/shared/Container";
import { memorialPlaces } from "@/data/memorialPlacesData";

import { getPayload } from "payload";
import config from "@payload-config";
import { NewsTile } from "./_components/NewsTile";
import { Heading } from "@/components/shared/Heading/Heading";

const getNews = async (amount = 10) => {
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

export default async function ArchivePage() {
  // return <ComingSoon />;

  const [news, error] = await getNews(10);

  const noData = error || !news || news.length === 0;
  if (noData) return null;

  return (
    <Container className="mx-auto max-w-7xl p-4 pt-12 tablet:pb-20 desktop:pb-150">
      <Breadcrumbs />
      <div className="mb-10">
        <Heading
          variant="h1"
          contrast="black"
          color="green"
          className="text-greenDark mb-8 mt-16 text-3xl font-bold"
        >
          Archiwum
        </Heading>
      </div>
      <div className="mt-10 space-y-10">
        {news.map((n) => (
          <NewsTile key={n.id} news={n} />
        ))}
      </div>
    </Container>
  );
}

// slug: string;
// name: string;
// location: string;
// description: string;
// highlight?: string | { text: string; align: "left" | "center" | "right" }[];
// descriptionContinuation?: string;
// image?: string;
