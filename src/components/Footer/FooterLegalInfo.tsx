import Link from "next/link";

export const FooterLegalInfo = () => {
  return (
    <div className="mt-[30px] w-full text-center">
      <p className="mb-3 flex justify-center gap-[20px]">
        <Link
          href="/polityka-prywatnosci"
          className="text-sm transition-opacity hover:opacity-80 md:text-base"
          aria-label="Przejdź do strony Polityka prywatności"
          title="Przejdź do strony Polityka prywatności"
        >
          Polityka prywatności
        </Link>

        <Link
          href="/regulamin"
          className="text-sm transition-opacity hover:opacity-80 md:text-base"
          aria-label="Przejdź do strony Regulamin"
          title="Przejdź do strony Regulamin"
        >
          Regulamin
        </Link>
      </p>
      <p className="mt-[20px] text-16">© 2023 . All rights reserved.</p>
      <p className="mt-[20px] text-16">
        Strona powstała dzięki pracy wolontariuszy.
      </p>
    </div>
  );
};
