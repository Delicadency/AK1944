import { formatDate } from "@/utils";
import { Heading } from "../Heading/Heading";

export const NewsHeader = ({
  heading,
  date,
}: {
  heading: string;
  date: string;
}) => {
  return (
    <div className="flex flex-col items-start justify-start tablet:col-start-2 tablet:row-start-1 tablet:flex-row tablet:items-center tablet:gap-4">
      <Heading variant="h4" color="white" contrast="black">
        {heading}
      </Heading>
      <p className="font-sourceSans text-grayDate contrast:text-black">
        <time dateTime={date}>{formatDate(date)}</time>
      </p>
    </div>
  );
};
