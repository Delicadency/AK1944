import Container from "@/components/shared/Container";
import { historyData } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";
import { District } from "@/components/History/BurzaPage/District";
import { FirstDays } from "@/components/History/BurzaPage/FirstDays";
import { HeroicDefence } from "@/components/History/BurzaPage/HeroicDefence";
import { CommandTransfer } from "@/components/History/BurzaPage/CommandTransfer";
import { Battles } from "@/components/History/BurzaPage/Battles";
import { Partisan } from "@/components/History/BurzaPage/Partisan";
import { Evacuation } from "@/components/History/BurzaPage/Evacuation";
import { Epilog } from "@/components/History/BurzaPage/Epilog";
import { Footnotes } from "@/components/History/BurzaPage/Footnotes";

export default function OperationBurzaPage() {
  const { title } = historyData.burza ?? {};
  return (
    <div className="contrast:bg-black">
      <Container as="article" className="flex flex-col gap-10 pb-6 pt-4">
        <Heading variant="h3" color="green" contrast="yellow" className="mb-6">
          {title}
        </Heading>
        <District />
        <FirstDays />
        <HeroicDefence />
        <CommandTransfer />
        <Battles />
        <Partisan />
        <Evacuation />
        <Epilog />
        <Footnotes />
      </Container>
    </div>
  );
}
