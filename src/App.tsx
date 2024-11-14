import { useState } from "react";
import { Button, Card } from "antd";
import { Link } from "react-router-dom";

const logout = () => {
  sessionStorage.removeItem("AO_SESSION_1");
  window.location.reload();
};

export function Home() {
  const [count, setCount] = useState(0);

  return (
    <section className="bg-red-500 flex justify-center items-center h-screen">
      <Card
        actions={[<Button onClick={logout}>Logout</Button>]}
        className="w-1/3"
        title="Home"
        extra={<Link to="/about">Go to About</Link>}
      >
        <div>
          <Button
            type="primary"
            onClick={() => setCount((count) => count + 1)}
          >{`count is ${count}`}</Button>
        </div>
      </Card>
    </section>
  );
}

export function About() {
  const [count, setCount] = useState(0);

  return (
    <section className="bg-blue-500 flex justify-center items-center h-screen">
      <Card
        actions={[<Button onClick={logout}>Logout</Button>]}
        className="w-1/3"
        title="About"
        extra={<Link to="/">Go Home</Link>}
      >
        <div>
          <Button
            type="primary"
            onClick={() => setCount((count) => count + 1)}
          >{`count is ${count}`}</Button>
        </div>
      </Card>
    </section>
  );
}
