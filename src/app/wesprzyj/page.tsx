import Container from "@/components/shared/Container";
import { TaxDonationModal } from "@/components/shared/TaxDonationModal";

export default function SupportPage() {
  return (
    <Container className="bg-backgroundMain pb-20 pt-10">
      <TaxDonationModal />
    </Container>
  );
}
