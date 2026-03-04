import mockResponse from "./dynamic-rendering/dynamic-rendering.mock";
import { createPage } from "./dynamic-rendering";

function App() {
  const actionContext = {
    track: (event: string, props?: Record<string, unknown>) => {
      console.log("[track]", event, props);
      // Later: GA4 event here
    },
    log: (msg: string, data?: unknown) => console.log("[log]", msg, data),
  };

  return (
    <div className="my-3">
      <div className="ms-4 mb-3">
        <h1 className="display-3">
          All the items below this title are being dynamically rendered
        </h1>
      </div>
      {createPage(mockResponse, { actionContext })}
    </div>
  );
}

export default App;
