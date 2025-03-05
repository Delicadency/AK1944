import { Heading } from "@/components/shared/Heading/Heading";

interface Props {
  id: string;
  title: string;
  card: React.ReactNode;
  children: React.ReactNode;
}

export const SupportSection = ({ id, title, card, children }: Props) => (
  <section
    id={id}
    className="flex scroll-mt-20 flex-col gap-6 font-sourceSans text-base tablet:scroll-mt-36 desktop:flex-row desktop:items-center desktop:text-xl"
    aria-labelledby={`${id}-heading`}
  >
    <article className="flex w-full flex-col gap-6 text-left">
      <Heading
        id={`${id}-heading`}
        color="green"
        contrast="yellow"
        className="text-2xl desktop:text-3xl"
      >
        {title}
      </Heading>
      <div className="flex flex-col gap-6">{children}</div>
    </article>
    {card}
  </section>
);
