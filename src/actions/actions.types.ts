export type Action =
  | { type: "call"; url: string; method?: "GET" | "POST"; body?: unknown }
  | { type: "openUrl"; url: string; target?: "_blank" | "_self" }
  | { type: "track"; event: string; props?: Record<string, unknown> }
  | { type: "log"; message: string; data?: unknown };

// Small “capability” object the app provides.
// Keep it minimal for the demo; expand later.
export type ActionContext = {
  request?: (args: {
    url: string;
    method: "GET" | "POST";
    body?: unknown;
  }) => Promise<unknown>;
  track?: (event: string, props?: Record<string, unknown>) => void;
  log?: (message: string, data?: unknown) => void;
};
