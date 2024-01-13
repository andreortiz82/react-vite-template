import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <h1>React + Vite Template</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div className="swatches">
          <div className="red" />
          <div className="orange" />
          <div className="yellow" />
          <div className="green" />
          <div className="blue" />
          <div className="purple" />
          <div className="pink" />
          <div className="gray" />
          <div className="slate" />
        </div>
      </div>
    </>
  );
}

export default App;
