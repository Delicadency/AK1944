import { ComingSoon } from "@/components/ComingSoon/ComingSoon";
import { participationInRallyRulesData } from "../data/participationInRallyRulesData";
import { ParticipationRules } from "../_components/ParticipationRules";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return participationInRallyRulesData.map((rally) => ({
    slug: rally.slug,
  }));
}
export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const rally = participationInRallyRulesData.find((r) => r.slug === slug);

  // Jeśli brak danych, ale ścieżka istnieje => pokaż ComingSoon
  if (!rally) {
    return <ComingSoon />;
  }

  return <ParticipationRules rally={rally} />;
}
