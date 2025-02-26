import { IconMail } from "@/icons/IconMail";
import IconMapPin from "@/icons/IconMapPin";
import { IconPhone } from "@/icons/IconPhone";
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
      {contactItems.map((item) => (
        <ContactItem key={item.label} {...item} />
      ))}
    </ul>
  </SupportCard>
);

const contactItems = [
  {
    icon: (
      <IconMapPin name="pin" className="size-6 tablet:size-7 desktop:size-8" />
    ),
    label: "Adres siedziby:",
    value: "39-200 Dębica, ul. Rzeszowska 15",
  },
  {
    icon: <IconMail className="size-6 tablet:size-7 desktop:size-8" />,
    label: "E-mail:",
    value: "ak.debica@gmail.com",
  },
  {
    icon: <IconPhone className="size-6 tablet:size-7 desktop:size-8" />,
    label: "Telefon:",
    value: "+48 505 248 666",
  },
] as const;
