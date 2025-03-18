import Container from "@/components/shared/Container";
import { Navigation } from "./_components/Navigation";
import { ThankYou } from "./_components/ThankYou";
import { PartnerIcon } from "@/icons/PartnerIcon";
import { ThreadIcon } from "@/icons/ThreadIcon";

export default function PartnersPage() {
  return (
    <div className="bg-backgroundMain pb-20 text-greenMain">
      <Container as="main" className="space-y-20">
        <Navigation />
        <PartnerIcon />
        <ThreadIcon />
        <ThankYou />
      </Container>
    </div>
  );
}
