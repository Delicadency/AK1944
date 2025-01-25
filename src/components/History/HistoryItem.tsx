import { Heading } from "../shared/Heading/Heading";
import { Button } from "../shared/Button/Button";

interface HeadingProps {
  title: string;
  description: string;
  images: string[];
}
export default function HistoryItem({
  title,
  description,
  images,
}: HeadingProps) {
  return (
    <li>
      <Heading variant="h4" color="green" contrast="yellow">
        {title}
      </Heading>
      <p>{description}</p>
      <div>{images}</div>
      <Button label="Zobacz więcej" ariaDescription="Zobacz więcej">
        Zobacz więcej
      </Button>
    </li>
  );
}
