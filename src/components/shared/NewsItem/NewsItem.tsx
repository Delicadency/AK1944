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
      className="flex flex-col items-center gap-4 tablet:grid tablet:grid-cols-2 tablet:items-start"
      key={id}
    >
      {/* Header i content na mobile, a na tabletach razem w drugiej kolumnie */}
      <div className="order-1 flex flex-col gap-2 tablet:order-2">
        <NewsHeader title={title} date={date} />
        {/* Obrazek pomiędzy headerem a contentem na mobile */}
        <NewsImage src={image} className="tablet:hidden" />
        <NewsContent excerpt={truncatedExcerpt} />
      </div>

      {/* Obrazek – ukryty na mobile, widoczny na tabletach po lewej */}
      <NewsImage
        src={image}
        className="order-2 hidden tablet:order-1 tablet:block"
      />
    </article>
  );
};
