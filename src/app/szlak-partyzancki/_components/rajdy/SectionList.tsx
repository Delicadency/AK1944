interface SectionListProps {
  title?: string;
  items: string[];
  listType?: "number" | "letter" | "dash";
}

export const SectionList: React.FC<SectionListProps> = ({
  title,
  items,
  listType,
}) => {
  const renderItem = (item: string, index: number) => {
    switch (listType) {
      case "number":
        return <li key={index}>{index + 1}. {item}</li>;
      case "letter":
        return <li key={index}>{String.fromCharCode(97 + index)}. {item}</li>;
      case "dash":
        return <li key={index}>- {item}</li>;
      default:
        return <li key={index}>{item}</li>;
    }
  };

  return (
    <div className="mb-3">
      <p className="font-semibold mb-4 text-2xl">{title}</p>
      <ul className="list-none pl-0">
        {items.map(renderItem)}
      </ul>
    </div>
  );
};
