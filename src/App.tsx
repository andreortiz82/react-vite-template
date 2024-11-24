import { useState } from "react";
import { Button, Skeleton } from "antd";
import { NavLink } from "react-router-dom";

const logout = () => {
  sessionStorage.removeItem("AO_SESSION_1");
  window.location.reload();
};

const Header = () => {
  const navStyle = {
    default: "opacity-50 cursor-pointer py-2",
    active: "opacity-1 cursor-default py-2 border-b-4 border-white",
  };

  return (
    <header className="flex justify-between">
      <nav className="text-5xl text-white font-bold flex gap-8">
        <NavLink
          className={({ isActive }) =>
            isActive ? navStyle.active : navStyle.default
          }
          to="/"
        >
          Home Page
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? navStyle.active : navStyle.default
          }
          to="/about"
        >
          About Page
        </NavLink>
      </nav>
      <Button type="text" onClick={logout}>
        Logout
      </Button>
    </header>
  );
};

const Layout = ({ children, color }: any) => {
  return (
    <section
      className={`${
        color === "green" ? "bg-green-500" : "bg-purple-500"
      } flex gap-8 flex-col p-10 h-screen`}
    >
      {children}
    </section>
  );
};

export function Home() {
  const [count, setCount] = useState(0);

  return (
    <Layout color="green">
      <Header />
      <div>
        <Button
          type="primary"
          onClick={() => setCount((count) => count + 1)}
        >{`count is ${count}`}</Button>
      </div>
      <Skeleton paragraph={{ rows: 10 }} />
    </Layout>
  );
}

export function About() {
  const [count, setCount] = useState(0);

  return (
    <Layout color="purple">
      <Header />
      <div>
        <Button
          type="primary"
          onClick={() => setCount((count) => count + 1)}
        >{`count is ${count}`}</Button>
      </div>
      <Skeleton paragraph={{ rows: 10 }} />
    </Layout>
  );
}
