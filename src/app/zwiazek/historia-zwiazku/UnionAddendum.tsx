interface AddendumSectionProps {
  addendum: { paragraph: string | string[] };
}

export default function UnionAddendum({ addendum }: AddendumSectionProps) {
  return (
    <section className="gap-4 pt-5 font-courier text-14 leading-5 tablet:mx-auto tablet:w-[710px] tablet:gap-8 tablet:py-[60px]">
      {(Array.isArray(addendum.paragraph)
        ? addendum.paragraph
        : [addendum.paragraph]
      ).map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </section>
  );
}
