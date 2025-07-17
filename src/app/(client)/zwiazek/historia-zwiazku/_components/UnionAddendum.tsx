interface Props {
  paragraph: string[];
}

export const UnionAddendum = ({ paragraph }: Props) => (
  <section className="gap-4 pt-5 font-courier text-14 leading-5 tablet:mx-auto tablet:w-[710px] tablet:gap-8 tablet:py-[60px] tablet:text-16 desktop:text-18">
    {paragraph.map((p, i) => (
      <p key={i}>{p}</p>
    ))}
  </section>
);
