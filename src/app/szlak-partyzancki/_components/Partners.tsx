import { Heading } from "@/components/shared/Heading/Heading";
import { partners } from "../data";

export const Partners = () => {
  return (
    <article className="pb-16 desktop:pb-[80px]">
      <Heading color="green" contrast="yellow" className="text-28 desktop:text-40 pb-6">
        Partnerzy projektu
      </Heading>
      <ul>
        {partners.map((partner) => (
          <li key={partner} className="leading-6 text-16 desktop:leading-7 desktop:text-18">{partner}</li>
        ))}
      </ul>
    </article>
  );
};
