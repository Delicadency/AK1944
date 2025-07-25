import { BulletpointList } from "./BulletpointList";

interface Subsection {
  subtitle: string;
  paragraph: string[];
  bulletpoints?: string[];
}

export const UnionSubsection = ({
  subtitle,
  paragraph,
  bulletpoints,
}: Subsection) => (
  <section className="pt-5">
    <h3 className="pb-4 font-lora text-24 font-bold leading-9">{subtitle}</h3>
    {paragraph.map((text, index) => (
      <p key={index} className="pb-5">
        {text}
      </p>
    ))}
    {bulletpoints ? <BulletpointList bulletpoints={bulletpoints} /> : null}
  </section>
);
