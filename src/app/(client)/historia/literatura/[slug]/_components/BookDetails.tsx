import type { Book } from "@/app/(client)/historia/literatura/_components/data";
import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";

export const BookDetails = (book: Book) => (
  <div className="flex flex-col items-start gap-6">
    <Heading variant="h3" contrast="yellow" color="green">
      Szczegóły wydania:
    </Heading>
    <ul className="flex flex-col gap-3 text-greenMain contrast:text-yellowContrast tablet:text-18 desktop:text-20">
      <li>Autor: {book.autor}</li>
      <li>Wydawca: {book.publisher}</li>
      <li>ISBN: {book.isbn}</li>
      <li>Format: {book.format}</li>
      <li>Liczba stron: {book.numberOfPages}</li>
      <li>Oprawa: {book.cover}</li>
      <li>Wydanie: {book.edition}</li>
      <li>Język: {book.language}</li>
      <li className="relative flex aspect-square w-64 items-center justify-center">
        <Image
          src={book.img ? book.img : "/images/placeholder_image.png"}
          alt={
            book.img
              ? `Okładka książki ${book.title} autorstwa ${book.autor}`
              : `Brak zdjęcia okładki książki ${book.title} autorstwa ${book.autor}`
          }
          fill
        />
      </li>
    </ul>
  </div>
);
