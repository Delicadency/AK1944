import { historyData } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";

const {
  regroupTitle,
  regroup1,
  regroup2,
  regroup3,
  regroup4,
  regroup5,
  regroup6,
  regroup7,
} = historyData.regiment;

export const RegroupSection = () => (
  <section className="flex flex-col gap-6 text-lg contrast:text-yellowContrast">
    <Heading variant="h4" color="green" contrast="yellow">
      {regroupTitle}
    </Heading>
    <div className="flex flex-col gap-6 desktop:flex-row">
      <div className="flex flex-col gap-6 desktop:w-1/2">
        <p>{regroup1}</p>
        <p>{regroup2}</p>
        <p>{regroup3}</p>
      </div>
      <div className="flex flex-col gap-6 desktop:w-1/2">
        <p>{regroup4}</p>
        <p>{regroup5}</p>
        <p>{regroup6}</p>
        <p>{regroup7}</p>
      </div>
    </div>
  </section>
);
