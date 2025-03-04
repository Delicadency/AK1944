import { AK_DATA } from "@/data/akData";
import { IconMapPin } from "@/icons/IconMapPin";
import { IconMail } from "@/icons/IconMail";
import { IconPhone } from "@/icons/IconPhone";

const enum ContactType {
  ADDRESS = "Adres siedziby",
  EMAIL = "E-mail",
  PHONE = "Telefon",
}

type ContactTypeLiteral = `${ContactType}`;

interface Props {
  contactType: ContactTypeLiteral;
}

export const ContactItem = ({ contactType }: Props) => {
  const { label, value, icon: Icon } = contacts[contactType];

  const formattedLabel = formatLabel(label);
  const href = getHref(contactType, value);

  return (
    <li className="flex items-center gap-x-6">
      <Icon className="size-6 tablet:size-7 desktop:size-8" />

      <div className="text-sm tablet:text-base desktop:text-lg">
        <p id={formattedLabel}>{label}:</p>

        <p aria-labelledby={formattedLabel}>
          {href ? (
            <a href={href}>
              <strong>{value}</strong>
            </a>
          ) : (
            <strong>{value}</strong>
          )}
        </p>
      </div>
    </li>
  );
};

const formatLabel = (label: string) =>
  `contact-${label.replaceAll(/[^a-z0-9]/gi, "-").toLowerCase()}`;

const getHref = (contactType: ContactTypeLiteral, value: string) => {
  switch (contactType) {
    case ContactType.EMAIL:
      return `mailto:${value}`;

    case ContactType.PHONE:
      return `tel:${value.replace(/\s/g, "")}`;

    case ContactType.ADDRESS:
    default:
      return null;
  }
};

const contacts = {
  [ContactType.ADDRESS]: {
    label: ContactType.ADDRESS,
    value: AK_DATA.address,
    icon: IconMapPin,
  },
  [ContactType.EMAIL]: {
    label: ContactType.EMAIL,
    value: AK_DATA.email,
    icon: IconMail,
  },
  [ContactType.PHONE]: {
    label: ContactType.PHONE,
    value: AK_DATA.phone,
    icon: IconPhone,
  },
} as const;
