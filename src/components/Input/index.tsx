import { InputHTMLAttributes } from "react";

interface IValidation       {
  regexType: RegExp,
  regexErrorCopy: string
}
interface InputProps extends InputHTMLAttributes<any> {
  label: string,
  isRequired: false,
  minCharactersAllowed: 1,
  maxCharactersAllowed: 100,
  validations?: Array<IValidation>
}
export default function Input({
  className,
  id,
  isRequired,
  label,
  minCharactersAllowed,
  maxCharactersAllowed,
  ...rest
}: InputProps) {
  return (
    <>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        {...rest}
        className={"form-control".concat(className ? ` ${className}` : '')}
      />
    </>
  )
}
