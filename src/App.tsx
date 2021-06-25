import mockResponse from './dynamic-rendering/dynamic-rendering.mock';
import { createPage } from './dynamic-rendering';
import "./styles/index.scss"

function App() {
  return (
    <div className="my-3">
      <div className="ms-4 mb-3">
        <h1 className="display-3">
          All the items below this title are being dynamically rendered
        </h1>
      </div>
      {createPage(mockResponse)}
    </div>
  );
}

export default App;
