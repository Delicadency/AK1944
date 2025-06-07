import { Heading } from "@/components/shared/Heading/Heading";

interface Props {
  title: string;
  date: string;
}

export const PhotoGallery = ({ title, date }: Props) => (
  <article className="w-full">
    <header className="space-y-4">
      <Heading
        color="green"
        contrast="yellow"
        className="text-2xl tablet:text-26 desktop:text-28"
        variant="h3"
      >
        {title}
      </Heading>
      <p className="font-lora text-2xl text-greenMain">{date}</p>
    </header>
  </article>
);
