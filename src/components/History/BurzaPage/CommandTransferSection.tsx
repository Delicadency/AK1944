import { historyData } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";

export const CommandTransferSection = () => {
  const {
    commandTransferTitle,
    commandTransfer1,
    commandTransfer2,
    commandTransfer3,
  } = historyData.burza ?? {};
  return (
    <section className="flex flex-col gap-6 text-lg contrast:text-yellowContrast">
      <Heading variant="h4" color="green" contrast="yellow">
        {commandTransferTitle}
      </Heading>
      <p>{commandTransfer1}</p>
      <p>{commandTransfer2}</p>
      <p>{commandTransfer3}</p>
    </section>
  );
};
