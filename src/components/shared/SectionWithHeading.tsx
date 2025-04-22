import { Heading } from "./Heading/Heading";

interface Props {
  heading: string;
  children: React.ReactNode;
}
// todo: add as prop
export const SectionWithHeading = ({ heading, children }: Props) => (
  <section className="flex flex-col gap-6 desktop:flex-row">
    <div className="flex flex-col gap-6 text-lg contrast:text-yellowContrast">
      <Heading variant="h4" color="green" contrast="yellow">
        {heading}
      </Heading>

      {children}
    </div>
  </section>
);
