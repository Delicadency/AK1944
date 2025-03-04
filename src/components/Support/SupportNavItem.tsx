import { Button } from "../shared/Button/Button";

interface Props {
  label: string;
  icon: JSX.Element;
  href: string;
}

export const SupportNavItem = ({ label, icon, href }: Props) => (
  <li className="flex flex-col items-center justify-center gap-y-3">
    {icon}
    <Button
      href={href}
      variant="secondary"
      size="large"
      label={label}
      ariaDescription={`Przejdź do sekcji ${label}`}
      className="font-courier font-bold"
    />
  </li>
);
