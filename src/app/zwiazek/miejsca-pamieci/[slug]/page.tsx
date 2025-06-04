import { memorialPlaces } from "@/data/memorialPlacesData";
import { notFound } from "next/navigation";
import Container from "@/components/shared/Container";
import { MemorialHeadingSection } from "@/components/MemorialPlace/MemorialHeadingSection";
import { MemorialContentSection } from "@/components/MemorialPlace/MemorialContentSection";
import { MemorialRelatedPlaces } from "@/components/MemorialPlace/MemorialRelatedPlaces";

type PageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return memorialPlaces.map((place) => ({
    slug: place.slug,
  }));
}

export default async function Page({ params }: PageProps) {
  const place = memorialPlaces.find((p) => p.slug === params.slug);

  if (!place) {
    notFound();
  }
  const otherPlaces = memorialPlaces.filter((p) => p.slug !== place.slug);

  return (
    <Container className="mx-auto max-w-5xl p-4 pb-20">
      <MemorialHeadingSection name={place.name} location={place.location} />
      <MemorialContentSection place={place} />
      {otherPlaces.length > 0 && <MemorialRelatedPlaces places={otherPlaces} />}
    </Container>
  );
}
