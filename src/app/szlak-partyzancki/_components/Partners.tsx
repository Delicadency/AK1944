import { Heading } from "@/components/shared/Heading/Heading";
import { partners } from "../data/partners";

export const Partners = () => {
  return (
    <article className="pb-16 desktop:pb-[80px]">
      <Heading
        color="green"
        contrast="yellow"
        className="pb-6 text-28 desktop:text-40"
      >
        Partnerzy projektu
      </Heading>
      <ul>
        {partners.map((partner) => (
          <li
            key={partner}
            className="text-16 leading-6 desktop:text-18 desktop:leading-7"
          >
            {partner}
          </li>
        ))}
      </ul>
    </article>
  );
};
