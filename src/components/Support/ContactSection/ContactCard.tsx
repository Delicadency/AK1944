import { CardHeader } from "../CardHeader";
import { SupportCard } from "../SupportCard";
import { ContactItem } from "./ContactItem";

export const ContactCard = () => (
  <SupportCard>
    <CardHeader>Skontaktuj się:</CardHeader>

    <ul
      aria-label="Jak się z nami skontaktować"
      className="mt-2 flex flex-col gap-1 tablet:gap-2 desktop:mt-3 desktop:gap-3"
    >
      <ContactItem contactType="Adres siedziby" />
      <ContactItem contactType="E-mail" />
      <ContactItem contactType="Telefon" />
    </ul>
  </SupportCard>
);
