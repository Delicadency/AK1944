import { PartnerIcon } from "@/icons/PartnerIcon";

export const Partnership = () => (
  <section className="m-auto flex max-w-lg flex-col items-center p-4">
    <PartnerIcon
      className="p-4 mobile:max-w-xs tablet:max-w-none"
      width={429}
      height={286}
    />

    <p className="text-center font-courier text-lg/5">
      Po nitce wspólnej pamięci – razem zadbajmy, aby historia Armii Krajowej
      nigdy nie zostanie zapomniana!
    </p>
  </section>
);
