import { Heading } from "@/components/shared/Heading/Heading";
import { slugify } from "@/utils";

interface Props {
  title?: string;
  children: React.ReactNode;
}

export const Paragraph = ({ title, children }: Props) => {
  const slug = slugify(title);
  const id = slug ? `${slug}-heading` : undefined;

  return (
    <article className="space-y-6" aria-labelledby={id}>
      {title ? (
        <Heading
          id={id}
          color="green"
          contrast="yellow"
          className="text-center text-2xl tablet:text-26 desktop:text-28"
          variant="h4"
        >
          {title}
        </Heading>
      ) : null}

      <p>{children}</p>
    </article>
  );
};
