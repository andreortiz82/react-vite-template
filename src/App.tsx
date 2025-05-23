import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AppProvider, AppContext } from "./AppContext";
import { Button } from "@/components/ui/button";
import { UIMock } from "./views/Dashboard";

const logout = () => {
  sessionStorage.removeItem("AO_SESSION_1");
  window.location.reload();
};

const Header = () => {
  return (
    <header className="flex justify-between">
      <nav className="text-5xl text-black font-bold flex gap-8">
        <NavLink
          className={({ isActive }) =>
            isActive ? "opacity-100" : "opacity-50"
          }
          to="/"
        >
          Home Page
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "opacity-100" : "opacity-50"
          }
          to="/about"
        >
          About Page
        </NavLink>
      </nav>
      <Button onClick={logout}>Logout</Button>
    </header>
  );
};

const Layout = ({ children }: any) => {
  return <AppProvider>{children}</AppProvider>;
};

const Action = ({ count, incrementCount }: any) => {
  return (
    <div>
      <Button
        onClick={() => {
          incrementCount();
          console.log({ count });
        }}
      >
        Increment Count
      </Button>
      <code>{JSON.stringify({ count })}</code>
    </div>
  );
};

export function Home() {
  const { count, incrementCount } = useContext<any>(AppContext);
  useEffect(() => {}, [count]);
  return (
    <Layout>
      {/* <Action count={count} incrementCount={incrementCount} /> */}
      <UIMock title="Home Page" />
    </Layout>
  );
}

export function About() {
  const { count, incrementCount } = useContext<any>(AppContext);
  useEffect(() => {}, [count]);
  return (
    <Layout>
      {/* <Action count={count} incrementCount={incrementCount} /> */}
      <UIMock title="About Page" />
    </Layout>
  );
}
