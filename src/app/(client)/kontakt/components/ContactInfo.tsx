import { AK_DATA } from "@/data/akData";
import { InfoItem } from "@/app/(client)/kontakt/components/InfoItem";
import { InfoList } from "@/app/(client)/kontakt/components/InfoList";
import { IconMapPin } from "@/icons/IconMapPin";
import { IconMail } from "@/icons/IconMail";
import { IconPhone } from "@/icons/IconPhone";

export const ContactInfo = () => (
  <section
    aria-labelledby="contact-info"
    className="font-source-sans mb-10 text-lg"
  >
    <h2 id="contact-info" className="sr-only">
      Informacje kontaktowe
    </h2>

    <InfoList>
      <InfoItem
        icon={<IconMapPin className="h-8 w-8" />}
        label="Adres siedziby:"
      >
        {AK_DATA.address}
      </InfoItem>

      <InfoItem icon={<IconMail className="h-8 w-8" />} label="E-mail:">
        {
          <a href={`mailto:${AK_DATA.email}`} className="font-medium">
            {AK_DATA.email}
          </a>
        }
      </InfoItem>

      <InfoItem icon={<IconPhone className="h-8 w-8" />} label="Telefon:">
        {
          <a
            href={`tel:${AK_DATA.phone.replace(/\s+/g, "")}`}
            className="font-medium"
          >
            {AK_DATA.phone}
          </a>
        }
      </InfoItem>
    </InfoList>
  </section>
);
