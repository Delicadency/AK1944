import Container from "@/components/shared/Container";
import { Navigation } from "./_components/Navigation";
import { Partnership } from "./_components/Partnership";
import { Thread } from "./_components/Thread";
import { OurPartners } from "./_components/OurPartners";
import { ThankYou } from "./_components/ThankYou";
import { BulletList } from "./_components/BulletList/BulletList";

export default function PartnersPage() {
  return (
    <div className="bg-backgroundMain pb-20 text-greenMain">
      <Container as="main" className="space-y-20">
        <Navigation />
        <BulletList
          points={[
            "Lorem ipsum twoja stara",
            "Lorem ipsum wasza stara",
            "Lorem ipsum nie zduplikowana stara",
            "Lorem ipsum unikalna stara z kluczem",
            "Lorem ipsum unikalna stara z klapkiem",
          ]}
        />
        <Partnership />
        <Thread />
        <OurPartners />
        <ThankYou />
      </Container>
    </div>
  );
}
