import { useContext, useEffect } from "react";
import { Button, Skeleton } from "antd";
import { NavLink } from "react-router-dom";
import { AppProvider, AppContext } from "./AppContext";

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
      <Button type="text" className="!text-white" onClick={logout}>
        Logout
      </Button>
    </header>
  );
};

const Layout = ({ children, color }: any) => {
  return (
    <AppProvider>
      <section className={`${color} flex gap-8 flex-col p-10 h-screen`}>
        <Header />
        {children}
        <Skeleton paragraph={{ rows: 10 }} />
      </section>
    </AppProvider>
  );
};

const Action = ({ count, incrementCount }: any) => {
  return (
    <div className="flex gap-4 items-center">
      <Button
        size="large"
        type="primary"
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
    <Layout color="bg-red-400">
      <Action count={count} incrementCount={incrementCount} />
    </Layout>
  );
}

export function About() {
  const { count, incrementCount } = useContext<any>(AppContext);
  useEffect(() => {}, [count]);
  return (
    <Layout color="bg-blue-400">
      <Action count={count} incrementCount={incrementCount} />
    </Layout>
  );
}
