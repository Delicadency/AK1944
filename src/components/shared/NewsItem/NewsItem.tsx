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

export const NewsItem = async ({ post }: Props) => {
  const { title, date, id, featured_media, excerpt } = post;
  const image = await getImage(featured_media);
  const cleanedExcerpt = cleanHTML(excerpt);
  const decodedCleanExcerpt = parse(cleanedExcerpt).toString();
  const truncatedExcerpt = truncateText(decodedCleanExcerpt, 230);

  return (
    <article
      id={id}
      className="flex flex-col items-start justify-start gap-3 text-20 tablet:grid tablet:gap-x-6 tablet:gap-y-3"
    >
      <NewsHeader heading={title} date={date} />
      <NewsImage src={image} />
      <NewsContent excerpt={truncatedExcerpt} />
    </article>
  );
};
