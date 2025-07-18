import { data } from "@/app/(client)/historia/literatura/_components/data";
import { Card } from "@/app/(client)/historia/literatura/_components/Card";

export const List = () => (
  <ul className="flex flex-col items-center gap-10">
    {data.map((book) => (
      <Card key={book.id} book={book} />
    ))}
  </ul>
);
