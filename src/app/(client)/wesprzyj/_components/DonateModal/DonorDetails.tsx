import { FormField } from "@/components/shared/FormField";

type FieldName = "signature" | "email";
type FieldErrors = Record<FieldName, string[]>;

interface Props {
  issues?: Partial<FieldErrors>;
}

export const DonorDetails = ({ issues }: Props) => (
  <fieldset className="space-y-4">
    <FormField
      id="signature"
      name="signature"
      label="Wpłacający"
      placeholder="Wpłacający"
      required
      autoComplete="name"
      issues={issues?.signature}
      className="placeholder:text-greenMain"
    />
    <FormField
      id="email"
      name="email"
      type="email"
      placeholder="Twój email"
      required
      autoComplete="email"
      issues={issues?.email}
      className="placeholder:text-greenMain"
    />
  </fieldset>
);
