import Container from "@/components/shared/Container";
import { Navigation } from "./_components/Navigation";
import { Partnership } from "./_components/Partnership";
import { Thread } from "./_components/Thread";
import { ThankYou } from "./_components/ThankYou";

export default function PartnersPage() {
  return (
    <div className="bg-backgroundMain pb-20 text-greenMain">
      <Container as="main" className="space-y-20">
        <Navigation />
        <Partnership />
        <Thread />
        <ThankYou />
      </Container>
    </div>
  );
}
