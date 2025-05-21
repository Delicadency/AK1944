import { Heading } from "@/components/shared/Heading/Heading";
import { Paragraph } from "../data/paragraphs";
import clsx from "clsx";

export const Section = ({ title, content }: Paragraph) => {
  return (
    <section className="mb-8 flex flex-col">
      <Heading contrast="yellow" color="green" className="py-6">
        {title}
      </Heading>

      {content.map((block, index) => {
        if (block.type === "paragraph") {
          return (
            <p key={index}>
              {block.text}
            </p>
          );
        }
        if (block.type === "list") {
          const ListTag = block.ordered ? "ol" : "ul";
          return (
            <ListTag
              key={index}
              className={clsx(
                "pl-5",
                block.ordered ? "list-decimal" : "list-disc",
              )}
            >
              {block.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ListTag>
          );
        }
        return null;
      })}
    </section>
  );
};
