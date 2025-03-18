import { Heading } from "@/components/shared/Heading/Heading";

interface Props {
  title?: string;
  children: React.ReactNode;
}

const slufigy = (text?: string) => text?.replaceAll(/[^a-z0-9 ]/g, "");

export const Paragraph = ({ title, children }: Props) => {
  return (
    <section className="space-y-6" aria-labelledby={slufigy(title)}>
      {title ? (
        <Heading
          id="gratitude-heading"
          color="green"
          contrast="yellow"
          className="text-center text-2xl tablet:text-26 desktop:text-28"
          variant="h4"
        >
          {title}
        </Heading>
      ) : null}

      <p>{children}</p>
    </section>
  );
};
