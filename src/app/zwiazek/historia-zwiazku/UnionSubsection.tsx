import UnionListItem from "./UnionIconItem";
import { Subsection } from "./data";

export default function UnionSubsection({ subtitle, paragraph, bulletpoints }: Subsection) {
  return (
    <section className="pt-5">
      <h3 className="pb-4 font-lora text-24 font-bold leading-9 text-greenMain contrast:text-yellowContrast">
        {subtitle}
      </h3>
      <p className="pb-5">{paragraph}</p>
      {bulletpoints && (
        <ul>
          {bulletpoints.map((point, i) => (
            <UnionListItem key={i} text={point} />
          ))}
        </ul>
      )}
    </section>
  );
}

