import Container from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading/Heading";
import { DistrictSection } from "@/components/History/BurzaPage/DistrictSection";
import { FirstDaysSection } from "@/components/History/BurzaPage/FirstDaysSection";
import { HeroicDefenceSection } from "@/components/History/BurzaPage/HeroicDefenceSection";
import { CommandTransferSection } from "@/components/History/BurzaPage/CommandTransferSection";
import { BattlesSection } from "@/components/History/BurzaPage/BattlesSection";
import { PartisanSection } from "@/components/History/BurzaPage/PartisanSection";
import { EvacuationSection } from "@/components/History/BurzaPage/EvacuationSection";
import { EpilogSection } from "@/components/History/BurzaPage/EpilogSection";
import { FootnotesSection } from "@/components/History/BurzaPage/FootnotesSection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";

export default function OperationBurzaPage() {
  return (
    <div className="contrast:bg-black00">
      <Container
        as="article"
        className="flex flex-col gap-10 pb-6 tablet:gap-14 tablet:pb-20 desktop:pb-150"
      >
        <Breadcrumbs />
        <Heading variant="h3" color="green" contrast="yellow" className="mb-6">
          Akcja „Burza”
        </Heading>
        <DistrictSection />
        <FirstDaysSection />
        <HeroicDefenceSection />
        <CommandTransferSection />
        <BattlesSection />
        <PartisanSection />
        <EvacuationSection />
        <EpilogSection />
        <FootnotesSection />
      </Container>
    </div>
  );
}
