import Container from "@/components/shared/Container";
import { Navigation } from "./_components/Navigation";
import { Partnership } from "./_components/Partnership";
import { Thread } from "./_components/Thread";
import { OurPartners } from "./_components/OurPartners";
import { ThankYou } from "./_components/ThankYou";
import { BulletList } from "./_components/BulletList/BulletList";

const points = [
  "Wsparcie wydarzeń edukacyjnych i historycznych.",
  "Patronaty medialne i promowanie inicjatyw związanych z historią AK.",
  "Wspólne projekty badawcze i publikacje.",
  "Wsparcie finansowe lub rzeczowe na cele upamiętnienia i edukacji.",
];

export default function PartnersPage() {
  return (
    <div className="bg-backgroundMain pb-20 text-greenMain">
      <Container as="main" className="space-y-20">
        <Navigation />
        <BulletList points={points} />
        <Partnership />
        <Thread />
        <OurPartners />
        <ThankYou />
      </Container>
    </div>
  );
}
