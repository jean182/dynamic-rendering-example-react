import type { Action } from "../actions/actions.types";
import type { ComponentType } from "./dynamic-rendering.constants";

export interface IComponent {
  type: ComponentType;
  data: {
    id: string;
    embeddedView?: IComponent;
    items?: Array<IComponent>;

    // Optional generic action support (mainly for Button, but could be others later)
    action?: Action;

    // Any other props pass-through
    [key: string]: unknown;
  };
}
