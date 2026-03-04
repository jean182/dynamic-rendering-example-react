import { type InputHTMLAttributes, useState } from "react";

interface IValidation {
  regexType: string;
  regexErrorCopy: string;
}

const regexMap: Record<string, RegExp> = {
  eightOrMoreCharacters: /^.{8,}$/,
};

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isRequired: boolean;
  minCharactersAllowed: number;
  maxCharactersAllowed: number;
  validations?: Array<IValidation>;
}

export default function Input({
  className,
  id,
  isRequired,
  label,
  minCharactersAllowed,
  maxCharactersAllowed,
  validations,
  ...rest
}: InputProps) {
  const [error, setError] = useState<string | null>(null);

  const validate = (value: string) => {
    if (isRequired && value.trim().length === 0)
      return "This field is required";

    if (value.length < minCharactersAllowed)
      return `Minimum ${minCharactersAllowed} characters`;

    if (value.length > maxCharactersAllowed)
      return `Maximum ${maxCharactersAllowed} characters`;

    for (const rule of validations ?? []) {
      const regex = regexMap[rule.regexType];
      if (!regex) continue;

      if (!regex.test(value)) {
        return rule.regexErrorCopy;
      }
    }

    return null;
  };

  return (
    <>
      <label htmlFor={id} className="form-label">
        {label}
      </label>

      <input
        {...rest}
        id={id}
        className={"form-control".concat(className ? ` ${className}` : "")}
        onBlur={(e) => {
          const err = validate(e.target.value);
          setError(err);
        }}
      />

      {error && <div className="text-danger mt-1">{error}</div>}
    </>
  );
}
