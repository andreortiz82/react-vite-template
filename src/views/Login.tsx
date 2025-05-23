import React from "react";
import { LoginForm } from "@/components/login-form";

export const Login = ({
  loginCallback,
}: {
  loginCallback: (e: React.FormEvent<HTMLFormElement>) => void;
}) => {
  return (
    <div className="flex h-screen grow">
      <div
        style={{ backgroundPosition: "center top" }}
        className="grow bg-[url('/cover.png')] bg-cover w-1/2 h-full"
      />
      <div className="grow bg-slate-50 w-1/2 items-center flex justify-center">
        <div className="w-full max-w-[350px]">
          <LoginForm onSubmit={loginCallback} />
        </div>
      </div>
    </div>
  );
};
