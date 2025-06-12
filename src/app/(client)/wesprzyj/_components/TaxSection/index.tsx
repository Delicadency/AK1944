import { Heading } from "@/components/shared/Heading/Heading";
import { DonationInstructions } from "@/components/shared/DonationInstructions";
import { SupportSection } from "../SupportSection";
import { TaxCard } from "../../../../../components/shared/TaxCard/TaxCard";

export const TaxSection = () => (
  <SupportSection
    title="Przekaż 1,5% swojego podatku"
    id="tax-section"
    card={<TaxCard />}
  >
    <p>
      Każdy z nas może przyczynić się do zachowania pamięci o walce i
      poświęceniu żołnierzy Armii Krajowej. Dzięki Twojemu wsparciu możemy:
    </p>

    <ul className="-mt-6 list-disc pl-6">
      <li>Organizować wydarzenia upamiętniające,</li>
      <li>Dbać o miejsca pamięci i groby bohaterów,</li>
      <li>Prowadzić działania edukacyjne,</li>
      <li>
        Kontynuować misję przekazywania wiedzy o historii kolejnym pokoleniom.
      </li>
    </ul>

    <p>
      Przekazanie 1,5% podatku to prosty gest, który robi wielką różnicę. Nie
      kosztuje Cię nic – to część Twojego podatku, którą możesz zdecydować się
      przekazać na ważny cel.
    </p>

    <Heading variant="h4" color="green" contrast="black">
      Jak przekazać 1,5%?
    </Heading>
    <DonationInstructions />
  </SupportSection>
);
