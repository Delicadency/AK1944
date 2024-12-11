import Link from "next/link";

export const FooterLegalInfo = () => {
  return (
    <div>
      <p>
        <Link href="/privatepolicy">Polityka prywatności</Link>

        <Link href="/regulations">Regulamin</Link>
      </p>
      <p>© 2023 . All rights reserved.</p>
    </div>
  );
};
