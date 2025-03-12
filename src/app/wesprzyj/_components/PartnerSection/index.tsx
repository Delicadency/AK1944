import { SupportSection } from "../SupportSection";
import { PartnerCard } from "./PartnerCard";

export const PartnerSection = () => (
  <SupportSection
    id="partner-section"
    title="Zostań naszym partnerem"
    card={<PartnerCard />}
  >
    <p>
      Jeśli reprezentujesz firmę, instytucję lub organizację, możesz wesprzeć
      nasze działania jako partner. Oferujemy możliwość współorganizacji
      wydarzeń, promocji pamięci historycznej oraz innych form współpracy.
    </p>
    <p id="list-heading">Dlaczego warto zostać partnerem?</p>
    <ul aria-labelledby="list-heading" className="-mt-6 list-disc pl-6">
      <li>Współtworzysz inicjatywy patriotyczne i edukacyjne,</li>
      <li>Wzmacniasz swój wizerunek jako społecznie odpowiedzialnej firmy,</li>
      <li>Dajesz przykład zaangażowania w kultywowanie polskiej historii.</li>
    </ul>
  </SupportSection>
);
