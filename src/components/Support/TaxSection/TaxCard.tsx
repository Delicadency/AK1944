import { TaxDonationModal } from "@/components/shared/TaxDonationModal";
import LogoAK from "@/icons/LogoAK";
import { CardHeader } from "../CardHeader";
import { SupportCard } from "../SupportCard";

export const TaxCard = () => (
  <SupportCard className="gap-3.5 desktop:gap-6">
    <LogoAK className="h-auto w-1/2" />
    <CardHeader>Przekaż 1,5% swojego podatku</CardHeader>
    <TaxDonationModal />
  </SupportCard>
);
