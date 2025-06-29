import clsx from "clsx";
import { QuoteSection } from "../../_components/QuoteSection";
import { quotes } from "../../data/quotes";

type Block =
  | { type: "paragraph"; text: string; spacerAfter?: boolean }
  | { type: "list"; items: string[]; ordered?: boolean; dashBullet?: boolean }
  | { type: "quote" };

type Props = {
  block: Block;
};

export const BlockSwitch = ({ block }: Props) => {
  switch (block.type) {
    case "paragraph":
      return (
        <div>
          <p>{block.text}</p>
          {block.spacerAfter && <div className="h-4" />}
        </div>
      );

    case "list": {
      const ListTag = block.ordered ? "ol" : "ul";

      if (!block.ordered && block.dashBullet) {
        return (
          <ul className="mb-4">
            {block.items.map((item, i) => (
              <li key={i} className="relative pl-4">
                <span className="absolute left-0">–</span> {item}
              </li>
            ))}
          </ul>
        );
      }

      return (
        <ListTag
          className={clsx(
            "mb-4 pl-5",
            block.ordered ? "list-decimal" : "list-disc",
          )}
        >
          {block.items.map((item, i) => (
            <li key={i} className="mb-1">
              {item}
            </li>
          ))}
        </ListTag>
      );
    }

    case "quote": {
      const quote = quotes.find((q) => q.id === "intro");
      if (!quote) return null;
      return (
        <QuoteSection
          quote={quote}
          layout="no-emphasis"
          className="my-5 max-w-full"
        />
      );
    }

    default:
      return null;
  }
};
