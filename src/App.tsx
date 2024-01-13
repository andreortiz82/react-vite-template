import { useState } from "react";
import clsx from "clsx";
import style from "./App.module.css";
import logo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={clsx(style["card"], "global-css-class")}>
        <div className={style["logo"]}>
          <img src={logo} alt="logo" />
        </div>
        <h1>React + Vite Template</h1>
        <div>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>

        <div className={style["swatches"]}>
          {[
            "red",
            "orange",
            "yellow",
            "green",
            "blue",
            "purple",
            "violet",
            "indigo",
            "pink",
            "gray",
            "slate",
            "brown",
            "amber",
            "tomato",
            "lime",
            "teal",
            "white",
            "black",
          ].map((color) => {
            return (
              <div
                className={clsx(style["swatch"], style[color])}
                key={color}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
