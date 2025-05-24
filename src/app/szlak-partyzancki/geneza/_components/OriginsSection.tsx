import React from "react";
import { Heading } from "@/components/shared/Heading/Heading";
import { Paragraph } from "../data/paragraphs";
import clsx from "clsx";

export const OriginsSection = ({ title, content }: Paragraph) => {
  return (
    <section key={title} className="flex flex-col">
      <Heading
        contrast="yellow"
        color="green"
        className="py-6 !text-28 tablet:!text-32"
      >
        {title}
      </Heading>

      {content.map((block, i) => {
        if (block.type === "paragraph") {
          return (
            <React.Fragment key={`paragraph-wrap-${i}`}>
              <p key={`paragraph-${i}`}>{block.text}</p>
              {block.spacerAfter && <div key={`spacer-${i}`} className="h-4" />}
            </React.Fragment>
          );
        }

        if (block.type === "list") {
          const ListTag = block.ordered ? "ol" : "ul";

          if (!block.ordered && block.dashBullet === true) {
            return (
              <ul key={i} className="mb-4">
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
              key={i}
              className={clsx(
                "mb-4 pl-5",
                block.ordered ? "list-decimal" : "list-disc",
              )}
            >
              {block.items.map((item, index) => (
                <li key={index} className="mb-1">
                  {item}
                </li>
              ))}
            </ListTag>
          );
        }

        return null;
      })}
    </section>
  );
};
