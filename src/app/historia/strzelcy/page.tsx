import Container from "@/components/shared/Container";
import { historyData } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";
import { GenesisSection } from "@/components/History/RegimentPage/GenesisSection";
import { RegimentSection } from "@/components/History/RegimentPage/RegimentSection";
import { CracowBrigadeSection } from "@/components/History/RegimentPage/CracowBrigadeSection";
import { SeparationSection } from "@/components/History/RegimentPage/SeparationSection";
import { WoznikiSection } from "@/components/History/RegimentPage/WoznikiSection";

export default function RegimentPage() {
  const { title } = historyData.regiment ?? {};

  return (
    <div className="contrast:bg-black">
      <Container as="article" className="flex flex-col gap-10 pb-6 pt-4">
        <Heading variant="h3" color="green" contrast="yellow">
          {title}
        </Heading>
        <GenesisSection />
        <RegimentSection />
        <CracowBrigadeSection />
        <SeparationSection />
        <WoznikiSection />
      </Container>
    </div>
  );
}
