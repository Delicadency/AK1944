interface Props {
  icon: React.ReactNode;
  label: string;
  value: string;
}

export const ContactItem = ({ icon, label, value }: Props) => {
  const formattedLabel = label.replace(/[^a-z0-9]/gi, "").toLowerCase();

  const renderValue = () => {
    if (label.includes("E-mail")) {
      return (
        <a href={`mailto:${value}`}>
          <strong>{value}</strong>
        </a>
      );
    }

    if (label.includes("Telefon")) {
      return (
        <a href={`tel:${value.replace(/\s/g, "")}`}>
          <strong>{value}</strong>
        </a>
      );
    }

    return <strong>{value}</strong>;
  };

  return (
    <li className="flex items-center gap-x-6">
      {icon}
      <div className="text-sm tablet:text-base desktop:text-lg">
        <p id={`contact-${formattedLabel}`}>{label}</p>
        <p aria-labelledby={`contact-${formattedLabel}`}>{renderValue()}</p>
      </div>
    </li>
  );
};
