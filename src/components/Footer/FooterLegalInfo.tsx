import Link from "next/link";

export const FooterLegalInfo = () => {
  return (
    <div className="mt-[30px] w-full text-center">
      <p className="mb-3 flex justify-center gap-[20px]">
        <Link
          href="/privatepolicy"
          className="text-sm transition-opacity hover:opacity-80 md:text-base"
          aria-label="Navigate to the private policy page"
          title="Go to the private policy page"
        >
          Polityka prywatności
        </Link>

        <Link
          href="/regulations"
          className="text-sm transition-opacity hover:opacity-80 md:text-base"
          aria-label="Navigate to the regulations page"
          title="Go to the regulations page"
        >
          Regulamin
        </Link>
      </p>
      <p className="mt-[20px] text-sm md:text-base">
        © 2023 . All rights reserved.
      </p>
      <p className="mt-[20px] text-sm md:text-base">
        Strona powstała dzięki pracy wolontariuszy.
      </p>
    </div>
  );
};
