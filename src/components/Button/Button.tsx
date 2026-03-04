import type { ButtonHTMLAttributes } from "react";
import type { Action, ActionContext } from "../../actions/actions.types";
import { dispatchAction } from "../../actions/actions.dispatch";

type AnyProps = Record<string, unknown>;

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  action?: Action;
  actionContext?: ActionContext;
}

type BtnPropsForRenderer = BtnProps & AnyProps;

export default function Button({
  className,
  children,
  title,
  action,
  actionContext,
  type = "button",
  ...rest
}: BtnPropsForRenderer) {
  const onClick = async () => {
    try {
      const result = await dispatchAction(action, actionContext);
      // Optional: for demo feedback
      if (result !== undefined) console.log("Action result:", result);
    } catch (e) {
      console.error("Action failed:", e);
    }
  };

  return (
    <button
      {...rest}
      type={type}
      className={"btn".concat(className ? ` ${className}` : "")}
      onClick={onClick}
    >
      {title}
      {children}
    </button>
  );
}
