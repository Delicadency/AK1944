import { Heading } from "@/components/shared/Heading/Heading";

type LIST_TYPE = (typeof LIST_TYPE)[keyof typeof LIST_TYPE];

export const LIST_TYPE = {
  NUMBER: "number",
  LETTER: "letter",
  DASH: "dash",
} as const;

interface SectionListProps {
  href?: string;
  title?: string;
  header?: string;
  items?: string[];
  listType?: LIST_TYPE;
}

export const SectionList: React.FC<SectionListProps> = ({
  href,
  title,
  header,
  items,
  listType,
}) => {
  const renderItem = (item: string, index: number) => {
    switch (listType) {
      case "number":
        return (
          <li key={index}>
            {index + 1}. {item}
          </li>
        );
      case "letter":
        return (
          <li key={index}>
            {String.fromCharCode(97 + index)}) {item}
          </li>
        );
      case "dash":
        return <li key={index}>- {item}</li>;
      default:
        return <li key={index}>{item}</li>;
    }
  };

  return (
    <div className="mb-3">
      <Heading id={href} variant="h3" color="green" contrast="yellow">
        {title}
      </Heading>
      {header && (
        <p className="py-3 font-sourceSans text-16 tablet:text-18">{header}</p>
      )}
      {items && (
        <ul className="list-none pl-0 pt-3 font-sourceSans text-16 tablet:text-18">
          {items.map(renderItem)}
        </ul>
      )}
    </div>
  );
};
