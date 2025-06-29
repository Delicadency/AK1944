import type { Book } from "@/app/(client)/historia/literatura/_components/data";
import { Button } from "@/components/shared/Button/Button";
import Image from "next/image";

export const Card = ({ book }: { book: Book }) => (
  <li className="flex flex-col items-center gap-4 border-b-4 border-greenLight pb-10 last:border-b-0 tablet:flex-row tablet:items-start tablet:gap-10">
    <div className="relative flex aspect-square w-72 items-center justify-center">
      <Image
        src={book.img ? book.img : "/images/placeholder_image.png"}
        alt={
          book.img
            ? `Okładka książki ${book.title} autorstwa ${book.autor}`
            : `Brak zdjęcia okładki książki ${book.title} autorstwa ${book.autor}`
        }
        fill
        className="h-full w-full object-cover"
      />
    </div>
    <div className="flex flex-col items-center gap-4 tablet:w-3/4 tablet:items-end">
      <div className="flex flex-col items-center gap-2 text-start tablet:items-start tablet:gap-4 desktop:gap-6">
        <h2 className="font-lora text-28 font-bold leading-none tablet:text-32">
          {book.title} - {book.autor}
        </h2>
        <p className="tablet:text-18">{book.aboutAutor}</p>
      </div>
      <Button
        variant="secondary"
        href={`/historia/literatura/${book.title.toLocaleLowerCase()}`}
        label="Czytaj dalej"
        ariaDescription="Czytaj dalej"
      >
        Czytaj dalej
      </Button>
    </div>
  </li>
);
