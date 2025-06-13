import { ComingSoon } from "@/components/ComingSoon/ComingSoon";
import { RallyRelation } from "../../_components/RallyRelation";
import { relationFromRallyData } from "../../data/reportFromRallyData";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return relationFromRallyData.map((rally) => ({
    slug: rally.slug,
  }));
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const rally = relationFromRallyData.find((r) => r.slug === slug);

  if (!rally) {
    return <ComingSoon />;
  }

  return <RallyRelation rally={rally} />;
}
