import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider, Result } from "antd";
import { createBrowserRouter, NavLink, RouterProvider } from "react-router-dom";
import { Home, About } from "./App";
import { Login } from "./component/Login";
import { AppProvider } from "./AppContext";

const SESSION_KEY = "AO_SESSION_1";
const password = import.meta.env.VITE_PASSWORD;

const NotFound404 = () => {
  return (
    <section className="p-8 w-1/2 m-auto">
      <Result title="404" status="404">
        <div className="text-center">
          <NavLink to="/">&larr; Back home</NavLink>
        </div>
      </Result>
    </section>
  );
};

// This determines the authentication status of the user
const AuthenticationWrapper = (props: any) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [inputPassword, setInputPassword] = React.useState("");

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
    return <AppProvider>{props.children}</AppProvider>;
  } else {
    return (
      <Login
        loginCallback={handleSubmit}
        setInputPassword={setInputPassword}
        inputPassword={inputPassword}
      />
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
    errorElement: <NotFound404 />,
  },
  {
    path: "/about",
    element: (
      <AuthenticationWrapper>
        <About />
      </AuthenticationWrapper>
    ),
    errorElement: <NotFound404 />,
  },
];

const customTheme = {
  token: {
    colorPrimary: "black",
  },
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider theme={customTheme}>
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
