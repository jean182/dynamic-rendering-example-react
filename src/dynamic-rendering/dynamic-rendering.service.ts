import React from "react";
import type { ActionContext } from "../actions/actions.types";
import { Components } from "./dynamic-rendering.constants";
import type { IComponent } from "./dynamic-rendering.interfaces";

export function createPage(
  data?: IComponent,
  options?: { actionContext?: ActionContext }
): React.ReactNode {
  if (!data) return null;

  const actionContext = options?.actionContext;

  function createComponent(item: IComponent): React.ReactNode {
    const { data, type } = item;
    const { items, embeddedView, id, ...rest } = data;

    // Inject actionContext for any component that can use it (Button today, maybe more later)
    const props = {
      ...rest,
      key: id,
      ...(type === "Button" && actionContext ? { actionContext } : null),
    };

    const Component = Components[type];
    return React.createElement(
      Component,
      props,
      Array.isArray(items)
        ? items.map(renderer)
        : renderer(embeddedView ?? null)
    );
  }

  function renderer(config: IComponent | null): React.ReactNode {
    if (!config) return null;
    return createComponent(config);
  }

  return renderer(data);
}
