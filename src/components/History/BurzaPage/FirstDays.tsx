import { historyData } from "@/data/historyData";
import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";

export const FirstDays = () => {
  const { firstDaysTitle, firstDays1, firstDays2, firstDays3, firstDays4 } =
    historyData.burza ?? {};
  return (
    <section className="flex flex-col gap-6 desktop:flex-row">
      <div className="flex flex-col gap-6">
        <Heading variant="h4" color="green" contrast="yellow">
          {firstDaysTitle}
        </Heading>
        <p className="text-lg contrast:text-yellowContrast">{firstDays1}</p>
        <p className="text-lg contrast:text-yellowContrast">{firstDays2}</p>
        <p className="text-lg contrast:text-yellowContrast">{firstDays3}</p>
        <p className="text-lg contrast:text-yellowContrast">{firstDays4}</p>
      </div>
      <Image
        src="/images/history/burza/first-days.jpg"
        alt="debica"
        width={3500}
        height={2300}
        sizes="(max-width: 1279px) 35vw, 500px"
        className="m-auto"
      />
    </section>
  );
};
