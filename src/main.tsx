import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Button, ConfigProvider, Flex, Input, Result, Skeleton } from "antd";
import { createBrowserRouter, NavLink, RouterProvider } from "react-router-dom";
import { Home, About } from "./App";

const SESSION_KEY = "AO_SESSION_1";
const password = import.meta.env.VITE_PASSWORD;

const FourOh4 = () => {
  return (
    <section className="p-8 w-1/2 m-auto">
      <Result title="404" status="404">
        <div className="text-center">
          <NavLink to="/">&larr; Go back home</NavLink>
        </div>
      </Result>
    </section>
  );
};

// This determines the authentication status of the user
const AuthenticationWrapper = (props: any) => {
  const [inputPassword, setInputPassword] = React.useState("");
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  useEffect(() => {
    const storedAuth = sessionStorage.getItem(SESSION_KEY);
    if (storedAuth === password) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (inputPassword === password) {
      sessionStorage.setItem(SESSION_KEY, inputPassword);
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password, please try again.");
    }
  };

  if (isAuthenticated) {
    return <>{props.children}</>;
  } else {
    return (
      <div className="flex h-screen grow">
        <div className="grow bg-[url('/harold.jpeg')] bg-cover w-1/2 h-full" />
        <div className="grow bg-slate-50 w-1/2 items-center flex justify-center">
          <Flex
            vertical
            gap={16}
            className="w-2/3 bg-white p-8 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-bold block">Sign In</h2>
            <Skeleton paragraph={{ rows: 2 }} />
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <Input
                type="password"
                placeholder="Enter Password"
                className="mr-2"
                name="password"
                size="large"
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
                autoFocus
              />
              <Button htmlType="submit" type="primary" size="large">
                Continue
              </Button>
            </form>
          </Flex>
        </div>
      </div>
    );
  }
};

// Important:
// To avoid errors, you should always have at least one route in this array.
const routes = [
  {
    path: "/",
    element: (
      <AuthenticationWrapper>
        <Home />
      </AuthenticationWrapper>
    ),
    errorElement: <FourOh4 />,
  },
  {
    path: "/about",
    element: (
      <AuthenticationWrapper>
        <About />
      </AuthenticationWrapper>
    ),
    errorElement: <FourOh4 />,
  },
];

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider>
      {routes.length >= 1 ? (
        <RouterProvider router={createBrowserRouter(routes)} />
      ) : (
        <section className="p-8">
          <h1 className="text-3xl font-bold block mb-4 text-red-600">
            Error: You need at least 1 route defined.
          </h1>
          The <kbd>routes</kbd> array should have at least 1 route defined. See{" "}
          <kbd>src/main.tsx</kbd>
        </section>
      )}
    </ConfigProvider>
  </React.StrictMode>
);
