import { IconGift } from "@/icons/IconGift";
import { SupportCard } from "../SupportCard";
import { CardHeader } from "../SupportCard/CardHeader";

export const VolunteerCard = () => (
  <SupportCard>
    <CardHeader>Zostań wolontariuszem:</CardHeader>
    <div className="mt-3 flex justify-center desktop:mt-4">
      <IconGift className="size-16 text-greenMain tablet:size-20 desktop:size-24" />
    </div>
  </SupportCard>
);
