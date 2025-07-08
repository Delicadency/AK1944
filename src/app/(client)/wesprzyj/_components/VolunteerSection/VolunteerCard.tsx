import { VoluntaryIcon } from "@/icons/VoluntaryIcon";
import { SupportCard } from "../SupportCard";
import { Button } from "@/components/shared/Button/Button";
import { Routes } from "@/routes";

export const VolunteerCard = () => (
  <SupportCard className="space-y-4">
    <VoluntaryIcon />
    <Button
      href={Routes.VOLUNTEERS}
      label="Zostań wolontariuszem"
      ariaDescription="Zostań wolontariuszem"
    />
  </SupportCard>
);
