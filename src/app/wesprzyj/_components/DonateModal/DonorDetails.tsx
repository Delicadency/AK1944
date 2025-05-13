import { FormField } from "@/components/shared/FormField";

interface Props {
  issues?: {
    signature?: string[];
    email?: string[];
  };
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
    />
    <FormField
      id="email"
      name="email"
      type="email"
      placeholder="Twój email"
      required
      autoComplete="email"
      issues={issues?.email}
    />
  </fieldset>
);
