import { ErrorMessage } from "@/components/shared/ErrorMessage";
import { ExclamationIcon } from "@/icons/ExclamationIcon";
import { Input, type InputProps } from "../Input";
import { Label } from "../Label";

interface Props extends InputProps {
  issues?: string[];
}

export const FormField = ({ issues, name, id, ...rest }: Props) => {
  const inputId = id || `field-${name}`;
  const errorId = `${name}-error`;
  const hasIssues = !!issues?.length;

  return (
    <div className="w-full space-y-1">
      <Label
        htmlFor={inputId}
        color={hasIssues ? "error" : "primary"}
        className="capitalize"
      >
        {name}
      </Label>
      <Input
        id={inputId}
        name={name}
        color={hasIssues ? "error" : "primary"}
        aria-invalid={hasIssues}
        aria-errormessage={hasIssues ? errorId : undefined}
        aria-labelledby={`${inputId}-label`}
        trailingIcon={hasIssues ? ExclamationIcon : undefined}
        {...rest}
      />
      {hasIssues && (
        <ErrorMessage id={errorId} className="text-xs">
          {issues[0]}
        </ErrorMessage>
      )}
    </div>
  );
};
