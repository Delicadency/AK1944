import Image from "next/image";
import { Heading } from "../Heading/Heading";
import { ReadMore } from "../ReadMore/ReadMore";
import { getImage } from "@/dataAccess/image";

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
    const apiUrl = `https://ak1944.pl/wp-json/wp/v2/media/${featured_media}`;
    const res = await getImage(apiUrl);
    if (res) {
      image = res;
    }
  } catch {
    //brak zdjecia nie jest błędem, dlatego wyłączyłem logowanie
  }

  return (
    <div className="flex flex-col items-start justify-start gap-3 tablet:grid tablet:gap-x-6 tablet:gap-y-3">
      <div className="flex flex-col items-start justify-start tablet:col-start-2 tablet:row-start-1 tablet:flex-row tablet:items-center tablet:gap-4">
        <Heading variant="h4" color="white" contrast="black">
          {heading}
        </Heading>
        <p className="text-20 text-grayDate contrast:text-black">{date}</p>
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
      <ReadMore
        id={id}
        excerpt={excerpt}
        amountOfWords={28}
        className="text-white contrast:text-black tablet:col-start-2 tablet:row-start-2"
      />
    </div>
  );
};
