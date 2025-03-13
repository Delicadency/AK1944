interface AddendumSectionProps {
 paragraph: string[] };

export const UnionAddendum = ({ paragraph }: AddendumSectionProps) => (
  <section className="gap-4 pt-5 font-courier text-16 leading-5 tablet:mx-auto tablet:w-[710px] tablet:gap-8 tablet:py-[60px]">
    {paragraph.map((p, i) => (
      <p key={i}>{p}</p>
    ))}
  </section>
);
