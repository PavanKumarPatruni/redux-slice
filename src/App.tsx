import "./App.css";

import Counter from "./components/Counter";
import Posts from "./components/Posts";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Counter />
      <Posts />
    </div>
  );
}

export default App;
