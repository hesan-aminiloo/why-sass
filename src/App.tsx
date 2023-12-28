import { Functions, JSExports, LoopsAndMixins, Mixins } from "./components";

import "./styles/global.css";

function App() {
  return (
    <div className="container">
      <h1>Why SASS?</h1>
      <p>Here's why I love SCSS</p>

      <Mixins />

      <LoopsAndMixins />

      <JSExports />

      <Functions />
    </div>
  );
}

export default App;
