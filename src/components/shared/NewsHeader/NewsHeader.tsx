import { formatDate } from "@/utils";
import { Heading } from "../Heading/Heading";

interface Props {
  title: string;
  date: string;
}

export const NewsHeader = ({ title, date }: Props) => (
  <div className="flex flex-col items-start justify-start gap-2 space-y-2">
    <Heading variant="h4" color="white" contrast="black">
      {title}
    </Heading>

    <p className="font-sourceSans text-grayDate contrast:text-black">
      <time dateTime={date}>{formatDate(date)}</time>
    </p>
  </div>
);
