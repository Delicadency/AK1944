"use client";

import { useDisclosure } from "@/hooks/useDisclosure";

interface ReadMoreProps {
  id: string;
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
  const { isOpen, onToggle } = useDisclosure();

  const splittedText = excerpt.split(" ");
  const itCanOverflow = splittedText.length > amountOfWords;
  const beginText = itCanOverflow
    ? splittedText.slice(0, amountOfWords - 1).join(" ")
    : excerpt;
  const endText = splittedText.slice(amountOfWords - 1).join(" ");

  const handleKeyboard = (e: React.KeyboardEvent) => {
    if (e.code === "Space" || e.code === "Enter") {
      onToggle();
    }
  };

  return (
    <p id={id} className={className}>
      {beginText}
      {itCanOverflow && (
        <>
          {!isOpen && <span>... </span>}
          <span className={`${!isOpen && "hidden"}`} aria-hidden={!isOpen}>
            {endText}
          </span>
          <span
            className="ml-2 underline"
            role="button"
            tabIndex={0}
            aria-expanded={isOpen}
            aria-controls={id}
            onKeyDown={handleKeyboard}
            onClick={onToggle}
          >
            {isOpen ? "ukryj" : "czytaj więcej."}
          </span>
        </>
      )}
    </p>
  );
};
