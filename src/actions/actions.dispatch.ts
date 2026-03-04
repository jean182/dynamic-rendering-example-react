import type { Action, ActionContext } from "./actions.types";

export async function dispatchAction(
  action: Action | undefined,
  ctx: ActionContext = {}
): Promise<unknown> {
  if (!action) return;

  switch (action.type) {
    case "openUrl": {
      window.open(action.url, action.target ?? "_blank", "noopener,noreferrer");
      return;
    }

    case "track": {
      ctx.track?.(action.event, action.props);
      return;
    }

    case "log": {
      (ctx.log ?? console.log)(action.message, action.data);
      return;
    }

    case "call": {
      const method = action.method ?? "GET";
      if (ctx.request) {
        return ctx.request({ url: action.url, method, body: action.body });
      }

      // Default request for the demo if ctx.request isn't provided
      const res = await fetch(action.url, {
        method,
        headers: action.body
          ? { "Content-Type": "application/json" }
          : undefined,
        body: action.body ? JSON.stringify(action.body) : undefined,
      });

      // Return JSON when possible (nice for debugging)
      const contentType = res.headers.get("content-type") ?? "";
      if (contentType.includes("application/json")) return res.json();
      return res.text();
    }

    default: {
      // Exhaustiveness check
      const _never: never = action;
      return _never;
    }
  }
}
