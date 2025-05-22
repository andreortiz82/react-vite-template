import React from "react";
import { Button } from "@/components/ui/button";

export const Login = ({
  loginCallback,
  inputPassword,
  setInputPassword,
}: any) => {
  return (
    <div className="flex h-screen grow">
      <div
        style={{ backgroundPosition: "center top" }}
        className="grow bg-[url('/cover.png')] bg-cover w-1/2 h-full"
      />
      <div className="grow bg-slate-50 w-1/2 items-center flex justify-center">
        <h2 className="text-xl font-bold block">Sign In</h2>
        <form onSubmit={loginCallback} className="flex flex-col gap-2">
          <input
            type="password"
            placeholder="Enter Password"
            className="mr-2"
            name="password"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            autoFocus
          />

          <Button>Login</Button>
          <span className="flex text-sm text-gray-500 justify-center text-center">
            Locate the password in the{" "}
            <code className="font-mono bg-yellow-200 text-black mx-1">
              .env
            </code>{" "}
            file.
          </span>
        </form>
      </div>
    </div>
  );
};
