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
      <p>
        <time dateTime={date}>{formatDate(date)}</time>
      </p>
    </div>
  );
};
