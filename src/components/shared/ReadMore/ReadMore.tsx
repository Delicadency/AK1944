"use client";
import { useState } from "react";

interface ReadMoreProps {
  id: number;
  excerpt: string;
  amountOfWords?: number;
  className?: string;
}

export const ReadMore = ({
  id,
  excerpt,
  amountOfWords = 30,
  className,
}: ReadMoreProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const splittedText = excerpt.split(" ");
  const itCanOverflow = splittedText.length > amountOfWords;
  const beginText = itCanOverflow
    ? splittedText.slice(0, amountOfWords - 1).join(" ")
    : excerpt;
  const endText = splittedText.slice(amountOfWords - 1).join(" ");

  const handleKeyboard = (e: React.KeyboardEvent) => {
    if (e.code === "Space" || e.code === "Enter") {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <p id={id} className={className}>
      {beginText}
      {itCanOverflow && (
        <>
          {!isExpanded && <span>... </span>}
          <span
            className={`${!isExpanded && "hidden"}`}
            aria-hidden={!isExpanded}
          >
            {endText}
          </span>
          <span
            className="ml-2 underline"
            role="button"
            tabIndex={0}
            aria-expanded={isExpanded}
            aria-controls={id}
            onKeyDown={handleKeyboard}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "ukryj" : "czytaj więcej."}
          </span>
        </>
      )}
    </p>
  );
};
