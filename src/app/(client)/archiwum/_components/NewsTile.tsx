import { PlaceDetails } from "@/types/index";
import { Button } from "@/components/shared/Button/Button";
import { IconInfo } from "@/icons/IconInfo";
import { Heading } from "@/components/shared/Heading/Heading";
import Image from "next/image";
import type { Asset, News } from "@/../payload-types";
import { formatDate } from "@/utils";

interface Props {
  news: News;
}

const Img = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative aspect-[500/300] max-h-[194px] min-w-[400px] overflow-hidden">
    <Image src={src} alt={alt} layout="responsive" width={300} height={194} />
  </div>
);

export const NewsTile = ({
  news: { id, title, teaser, heroImage, createdAt },
}: Props) => {
  const image = heroImage as Asset;

  return (
    <article className="flex w-full flex-col gap-6 border-b border-greenMain pb-8 font-lora tablet:grid tablet:grid-cols-2 tablet:border-b-4 desktop:grid-cols-3">
      <div className="order-2 w-full tablet:order-2 tablet:flex tablet:flex-col tablet:items-end desktop:order-1 desktop:col-start-1 desktop:items-start">
        <Img src={image.url!} alt={image.alt} />

        <div className="mt-4 flex w-full justify-center desktop:hidden">
          <Button
            label="Czytaj dalej"
            variant="secondary"
            className="rounded-desktop min-w-[150px]"
            ariaDescription={`Przejdź do artykułu: ${title}`}
            href={`/archiwum/${id}`}
          />
        </div>
      </div>

      <div className="order-1 flex flex-col gap-4 text-center tablet:order-1 tablet:text-left desktop:order-2 desktop:col-span-2 desktop:text-left">
        <Heading
          variant="h2"
          contrast="black"
          color="green"
          className="text-[1.5rem] font-bold tablet:text-[1.75rem] desktop:text-[2rem]"
        >
          {title}
        </Heading>
        <div className="desktop:grid desktop:grid-cols-2 desktop:gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-greenB">
              <IconInfo className="size-4" aria-hidden="true" />
              <Heading
                variant="h4"
                className="text-[1.25rem] tablet:text-[1.75rem] desktop:text-[1.5rem]"
                contrast="black"
                color="green"
              >
                Opublikowano {formatDate(createdAt)}
              </Heading>
            </div>
            <p className="line-clamp-3 font-sourceSans text-xl text-black">
              {teaser}
            </p>
          </div>
          {/* BUTTON (DESKTOP ONLY) */}
          <div className="mt-4 hidden desktop:flex desktop:items-start desktop:justify-center">
            <Button
              label="Czytaj dalej"
              variant="secondary"
              className="rounded-desktop min-w-[150px]"
              ariaDescription={`Przejdź do artykułu: ${title}`}
              href={`/archiwum/${id}`}
            />
          </div>
        </div>
      </div>
    </article>
  );
};
