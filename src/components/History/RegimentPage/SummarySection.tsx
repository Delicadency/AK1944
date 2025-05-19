import { historyData } from "@/data/historyData";

const { summary1, summary2 } = historyData.regiment;

export const SummarySection = () => {
  return (
    <div className="mt-8 contrast:text-yellowContrast desktop:mt-24">
      <div className="flex flex-col gap-6">
        <p>{summary1}</p>
        <p>{summary2}</p>
      </div>
      <p className="mt-6 justify-self-end font-courier">
        Autor: Maciej Małozięć
      </p>
    </div>
  );
};
