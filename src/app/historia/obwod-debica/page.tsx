import Container from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading/Heading";
import { FortressSection } from "@/components/History/DebicaPage/FortressSection";
import { BeginningsSection } from "@/components/History/DebicaPage/BeginningsSection";
import { PlacesSection } from "@/components/History/DebicaPage/PlacesSection";
import { ReadinessSection } from "@/components/History/DebicaPage/ReadinessSection";
import { ExpansionSection } from "@/components/History/DebicaPage/ExpansionSection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";

export default function DebicaDistrictPage() {
  return (
    <div className="contrast:bg-black">
      <Container as="article" className="flex flex-col gap-10 pb-6 pt-4">
        <Breadcrumbs />
        <Heading variant="h3" color="green" contrast="yellow" className="mb-6">
          Obwód Dębica SZP-ZWZ-AK
        </Heading>
        <FortressSection />
        <BeginningsSection />
        <PlacesSection />
        <ReadinessSection />
        <ExpansionSection />
      </Container>
    </div>
  );
}
