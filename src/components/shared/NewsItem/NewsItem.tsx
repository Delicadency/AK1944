import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";

import { Heading } from "../Heading/Heading";
import { getImage } from "@/dataAccess/image";
import { BASE_API_URL } from "@/utils/constans";
import { formatDate } from "@/utils";

interface NewsProps {
  id: string;
  heading: string;
  date: string;
  excerpt: string;
  featured_media: string;
}

export const NewsItem = async ({
  heading,
  date,
  id,
  featured_media,
  excerpt,
}: NewsProps) => {
  let image: string = "/images/news_placeholder.png";

  try {
    const apiUrl = `${BASE_API_URL}/media/${featured_media}`;
    const res = await getImage(apiUrl);
    if (res) {
      image = res;
    }
  } catch {
    // Brak zdjęcia nie jest błędem, dlatego wyłączyłem logowanie
  }

  // Parsowanie HTML do tekstu za pomocą regularnego wyrażenia
  const cleandExcerpt = excerpt.replace(/<[^>]+>/g, "").trim();

  const decodedCleanExcerpt = parse(cleandExcerpt).toString();

  // Skrócenie tekstu do 230 znaków
  const truncatedExcerpt =
    decodedCleanExcerpt.length > 230
      ? `${decodedCleanExcerpt.substring(0, 227)}...`
      : decodedCleanExcerpt;

  return (
    <div
      id={id}
      className="flex flex-col items-start justify-start gap-3 text-20 tablet:grid tablet:gap-x-6 tablet:gap-y-3"
    >
      <div className="flex flex-col items-start justify-start tablet:col-start-2 tablet:row-start-1 tablet:flex-row tablet:items-center tablet:gap-4">
        <Heading variant="h4" color="white" contrast="black">
          {heading}
        </Heading>
        <p className="font-sourceSans text-grayDate contrast:text-black">
          {formatDate(date)}
        </p>
      </div>

      <div className="h-[191px] w-[288px] tablet:col-start-1 tablet:row-span-2 tablet:row-start-1 tablet:h-[169px] tablet:w-[262px]">
        <Image
          alt="news image"
          src={image}
          width="400"
          height="300"
          className="object-cover"
        />
      </div>

      <p className="w-[395px] font-sourceSans text-backgroundMain contrast:text-black">
        {truncatedExcerpt}{" "}
        <Link
          href="/"
          className="text-greenLight underline contrast:text-black tablet:col-start-2 tablet:row-start-2"
        >
          czytaj więcej.
        </Link>
      </p>
    </div>
  );
};
