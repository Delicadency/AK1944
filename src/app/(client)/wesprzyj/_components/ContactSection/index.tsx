import { AK_DATA } from "@/data/akData";
import { SupportSection } from "../SupportSection";
import { ContactCard } from "./ContactCard";

export const ContactSection = () => (
  <SupportSection
    id="kontakt"
    title="Skontaktuj się z nami"
    card={<ContactCard />}
  >
    <p>
      Masz pytania? Chciałbyś pomóc w inny sposób lub dowiedzieć się więcej o
      naszej działalności?
    </p>
    <div>
      <p>Skontaktuj się z nami:</p>
      <p>
        E-mail: <strong>{AK_DATA.email}</strong>
      </p>
      <p>
        Telefon: <strong>{AK_DATA.phone}</strong>
      </p>
    </div>
    <p>
      Chętnie odpowiemy na wszystkie pytania i porozmawiamy o możliwościach
      współpracy!
    </p>
  </SupportSection>
);
