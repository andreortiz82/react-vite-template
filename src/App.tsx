import { useState } from "react";
import clsx from "clsx";
import style from "./App.module.css";
import logo from "./assets/react.svg";

import { Button } from "antd";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={clsx(style["card"])}>
      <div className={style["logo"]}>
        <img src={logo} alt="logo" />
      </div>
      <h1>React + Vite Template</h1>
      <p>
        This project also uses{" "}
        <a href="https://github.com/andreortiz82/ao-design-tokens">
          AO Design Tokens
        </a>{" "}
        and <a href="https://github.com/andreortiz82/ao-ui-lib">AO UI Lib</a>
      </p>
      <p>
        👋 Made by hand. <a href="http://andreortiz.com">AO</a>
      </p>
      <div>
        <Button
          type="primary"
          onClick={() => setCount((count) => count + 1)}
        >{`count is ${count}`}</Button>
      </div>
    </div>
  );
}

export default App;
