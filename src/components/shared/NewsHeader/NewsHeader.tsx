import { formatDate } from "@/utils";
import { Heading } from "../Heading/Heading";

export const NewsHeader = ({
  title,
  date,
}: {
  title: string;
  date: string;
}) => {
  return (
    <div>
      <Heading variant="h4" color="white" contrast="black">
        {title}
      </Heading>
      <p className="my-[10px] font-sourceSans text-20 text-[#8e8e8e] tablet:my-0">
        <time dateTime={date}>{formatDate(date)}</time>
      </p>
    </div>
  );
};
