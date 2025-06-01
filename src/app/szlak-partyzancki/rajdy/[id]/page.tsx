import { ParticipationRules } from "@/app/szlak-partyzancki/_components/rajdy/ParticipationRules";
import { notFound } from "next/navigation";
import { participationInRallyRulesData } from "../../data/participationInRallyRulesData";

type PageProps = {
  params: Promise<{ id: string }>
};

export async function generateStaticParams() {
  return participationInRallyRulesData.map((rally) => ({
    id: rally.id.toString(),
  }));
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const numericId = Number(id);
  const rally = participationInRallyRulesData.find((r) => r.id === numericId);

  if (!rally) {
    notFound();
  }

  return <ParticipationRules rally={rally} />;
}
