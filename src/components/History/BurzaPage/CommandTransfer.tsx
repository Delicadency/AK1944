import { historyData } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";

export const CommandTransfer = () => {
  const {
    commandTransferTitle,
    commandTransfer1,
    commandTransfer2,
    commandTransfer3,
  } = historyData.burza ?? {};
  return (
    <section className="flex flex-col gap-6">
      <Heading variant="h4" color="green" contrast="yellow">
        {commandTransferTitle}
      </Heading>
      <p className="text-lg contrast:text-yellowContrast">{commandTransfer1}</p>
      <p className="text-lg contrast:text-yellowContrast">{commandTransfer2}</p>
      <p className="text-lg contrast:text-yellowContrast">{commandTransfer3}</p>
    </section>
  );
};
