import parse from "html-react-parser";

import { NewsHeader } from "../NewsHeader/NewsHeader";
import { NewsImage } from "../NewsImage/NewsImage";
import { NewsContent } from "../NewsContent/NewsContent";

import { getImage } from "@/dataAccess/image";
import { cleanHTML, truncateText } from "@/utils";
import { Post } from "@/types";

interface Props {
  post: Post;
}

export const NewsItem = async ({
  post: { id, title, date, featured_media, excerpt },
}: Props) => {
  const image = await getImage(featured_media);
  const cleanedExcerpt = cleanHTML(excerpt);
  const decodedCleanExcerpt = parse(cleanedExcerpt).toString();
  const truncatedExcerpt = truncateText(decodedCleanExcerpt, 230);

  return (
    <article
      className="flex flex-col tablet:flex-row tablet:items-start tablet:gap-4"
      key={id}
    >
      {/* Obrazek na mobile niżej, na md+ przesuwa się na lewo */}
      <NewsImage src={image} />

      {/* Nagłówek i treść w jednym divie na tablet+ */}
      <div className="flex flex-1 flex-col">
        <NewsHeader title={title} date={date} />
        <NewsContent excerpt={truncatedExcerpt} />
      </div>
    </article>
  );
};
