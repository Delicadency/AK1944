import { AK_DATA } from "@/data/akData";
import { InfoItem } from "./InfoItem";
import { InfoList } from "./InfoList";
import { IconBriefcase } from "@/icons/IconBriefcase";
import { IconBook } from "@/icons/IconBook";
import { IconDollar } from "@/icons/IconDollar";

export const LegalInfo = () => (
  <section
    aria-labelledby="legal-info"
    className="mt-8 max-w-[260px] text-left tablet:mt-0"
  >
    <h2 id="legal-info" className="sr-only">
      Informacje prawne
    </h2>

    <InfoList className="font-source-sans text-lg text-textDarkGreen">
      <InfoItem icon={<IconBriefcase className="h-8 w-8" />} label="NIP:">
        {AK_DATA.NIP}
      </InfoItem>

      <InfoItem icon={<IconBook className="h-8 w-8" />} label="KRS:">
        {AK_DATA.taxDonation.krs}
      </InfoItem>

      <InfoItem
        icon={<IconDollar className="h-8 w-8" />}
        label="Nr konta bankowego:"
      >
        {
          <>
            <p className="font-medium tablet:hidden desktop:block">
              {AK_DATA.bank.name}
            </p>
            <p className="font-medium">{AK_DATA.bank.accountNumber}</p>
          </>
        }
      </InfoItem>
    </InfoList>
  </section>
);
