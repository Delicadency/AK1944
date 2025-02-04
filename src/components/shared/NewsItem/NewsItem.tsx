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
    <article key={id}>
      <NewsHeader title={title} date={date} />
      <NewsImage src={image} />
      <NewsContent excerpt={truncatedExcerpt} />
    </article>
  );
};
