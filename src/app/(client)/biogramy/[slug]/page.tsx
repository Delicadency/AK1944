import { ComingSoon } from "@/components/ComingSoon/ComingSoon";
import { allBiograms } from "../data/biogramsData";
import { BiogramHistoryPage } from "../components/biogramHistory";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return allBiograms.map((biogram) => ({
    slug: biogram.slug,
  }));
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const biogram = allBiograms.find((r) => r.slug === slug);

  if (!biogram) {
    return <ComingSoon />;
  }

  return <BiogramHistoryPage biogram={biogram} />;
}
