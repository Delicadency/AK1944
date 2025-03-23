import { AK_DATA } from "@/data/akData";
import { InfoItem } from "@/app/kontakt/components/InfoItem";
import { InfoList } from "@/app/kontakt/components/InfoList";
import { IconMapPin } from "@/icons/IconMapPin";
import { IconMail } from "@/icons/IconMail";
import { IconPhone } from "@/icons/IconPhone";

export const ContactInfo = () => (
    <section
        aria-labelledby="contact-info"
        className="font-source-sans mb-10 text-lg text-greenMain"
    >
        <h2 id="contact-info" className="sr-only">
            Informacje kontaktowe
        </h2>

        <InfoList>
            <InfoItem
                icon={<IconMapPin className="h-8 w-8" />}
                label="Adres siedziby:"
                content={AK_DATA.address}
            />

            <InfoItem
                icon={<IconMail className="h-8 w-8" />}
                label="E-mail:"
                content={
                    <a href={`mailto:${AK_DATA.email}`} className="font-medium">
                        {AK_DATA.email}
                    </a>
                }
            />

            <InfoItem
                icon={<IconPhone className="h-8 w-8" />}
                label="Telefon:"
                content={
                    <a
                        href={`tel:${AK_DATA.phone.replace(/\s+/g, "")}`}
                        className="font-medium"
                    >
                        {AK_DATA.phone}
                    </a>
                }
            />
        </InfoList>
    </section>
);
