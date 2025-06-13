import { notFound } from "next/navigation";
import Container from "@/components/shared/Container";

import { getPayload } from "payload";
import config from "@payload-config";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";

import { Asset } from "../../../../../payload-types";
import { Heading } from "@/components/shared/Heading/Heading";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { formatDate } from "@/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

const getAllNewsId = async () => {
  try {
    const payload = await getPayload({ config });

    const news = await payload.find({ collection: "news" });
    const ids = news.docs.map((n) => n.id);
    return [ids, null];
  } catch (error) {
    console.error(error);
    return [null, error] as const;
  }
};

const getNewsById = async (id: string) => {
  // return [news.slice(0, amount), null];

  try {
    const payload = await getPayload({ config });

    const news = await payload.find({
      collection: "news",
      limit: 1,
      where: { id: { equals: id } },
    });

    return [news.docs, null] as const;
  } catch (error) {
    console.error(error);
    return [null, error] as const;
  }
};

export async function generateStaticParams() {
  const [ids, error] = await getAllNewsId();

  if (!ids || error) return [];
  return ids.map((slug) => ({ slug }));
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  //   const place = memorialPlaces.find((p) => p.slug === slug);
  const [news, error] = await getNewsById(slug);

  const noData = error || !news || news.length === 0;

  if (noData) {
    notFound();
  }

  const article = news[0];

  //   const otherPlaces = memorialPlaces.filter((p) => p.slug !== place.slug);

  const img = article.heroImage as Asset;

  console.log(img.url);

  return (
    <Container className="mx-auto max-w-5xl p-4 pb-20">
      <div className="mb-10 mt-10">
        <Breadcrumbs currentPageLabel={article.title} />
      </div>
      <div className="mb-10">
        <Heading
          variant="h1"
          contrast="black"
          color="green"
          className="text-greenDark mb-8 mt-16 text-3xl font-bold"
        >
          {article.title}
        </Heading>
        <p className="font-sourceSans text-lg text-grayDate contrast:text-black">
          Opublikowano{" "}
          <time dateTime={article.createdAt}>
            {formatDate(article.createdAt)}
          </time>
        </p>
      </div>

      <main className="min-h-screen w-full">
        <div className="float-right max-w-[45%] px-4">
          <Img src={img.url!} alt={img.alt} />
        </div>
        <RichText data={article.content} />
      </main>
    </Container>
  );
}

const Img = ({ src, alt }: { src: string; alt: string }) => (
  <div className="max-w-[500px] overflow-hidden">
    <img src={src} alt={alt} />
  </div>
);
