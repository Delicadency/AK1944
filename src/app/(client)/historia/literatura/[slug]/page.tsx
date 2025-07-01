import { BookDetails } from "@/app/(client)/historia/literatura/[slug]/_components/BookDetails";
import { Chapters } from "@/app/(client)/historia/literatura/[slug]/_components/Chapters";
import { bookMap } from "@/app/(client)/historia/literatura/_components/data";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import Container from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function LiteraturePage({ params }: Props) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const book = bookMap.get(decodedSlug);

  if (!book) {
    return (
      <div>
        <Container>
          <Heading variant="h2" contrast="yellow" color="green">
            Nie znaleziono książki
          </Heading>
        </Container>
      </div>
    );
  }
  return (
    <div>
      <Container className="relative flex flex-col gap-10 pb-10 tablet:px-10 desktop:px-24 desktop:pb-36">
        <Image
          src="/images/literature/literature-bg.png"
          alt="Stos różnych książek o różnych kolorach okładek."
          width={476}
          height={566}
          className="aria-hidden: absolute bottom-0 right-0 -z-10 contrast:hidden"
        />

        <div className="flex flex-col gap-6">
          <Breadcrumbs />
          <Heading variant="h2" contrast="yellow" color="green">
            {book.title}
          </Heading>
        </div>
        <div className="flex flex-col gap-20 tablet:flex-row desktop:gap-28">
          <Chapters chapters={book.chapters} />
          <BookDetails {...book} />
        </div>
      </Container>
    </div>
  );
}
