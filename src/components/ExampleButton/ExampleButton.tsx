import clsx from "clsx";

export interface ExampleButtonProps {
  variant: "primary" | "inversion" | "secondary";
  label: string;
}

export const ExampleButton = ({ variant, label }: ExampleButtonProps) => {
  const variants = {
    primary: "bg-redMain text-backgroundMain hover:bg-[#7A0003] active:bg-[#520103]",
    inversion: "bg-backgroundMain text-redMain hover:bg-backgroundB active:bg-[#e8e3da]",
    secondary: "bg-greenLight text-black hover:bg-greenC active:bg-greenB",
  };

  return (
    <button
    type="button"
      className={clsx(
        "font-sourceSans button-outline h-fit w-[160px] rounded px-8 py-3 text-lg",
        variants[variant],
      )}
    >
      {label}
    </button>
  );
};
