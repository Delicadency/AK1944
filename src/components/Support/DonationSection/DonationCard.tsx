import { CardHeader } from "../CardHeader";
import { SupportCard } from "../SupportCard";

export const DonationCard = () => (
  <SupportCard>
    <CardHeader>Wpłać darowiznę:</CardHeader>
    <div className="mt-2 space-y-2 desktop:mt-4">
      <p>Nr konta bankowego:</p>
      <p>
        <strong>Santander Bank Polska</strong>
      </p>
      <p>
        <strong>41 1090 2590 0000 0001 5299 0666</strong>
      </p>
    </div>
  </SupportCard>
);
