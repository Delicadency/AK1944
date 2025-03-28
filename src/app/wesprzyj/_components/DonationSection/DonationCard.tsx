import { AK_DATA } from "@/data/akData";
import { CardHeader } from "../SupportCard/CardHeader";
import { SupportCard } from "../SupportCard";

export const DonationCard = () => (
  <SupportCard>
    <CardHeader>Wpłać darowiznę:</CardHeader>
    <div className="mt-2 space-y-2 desktop:mt-4">
      <p>Nr konta bankowego:</p>
      <p>
        <strong>{AK_DATA.bank.name}</strong>
      </p>
      <p>
        <strong>{AK_DATA.bank.accountNumber}</strong>
      </p>
    </div>
  </SupportCard>
);
