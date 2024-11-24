import { Button, Flex, Input, Skeleton } from "antd";
import React from "react";

export const Login = ({
  loginCallback,
  inputPassword,
  setInputPassword,
}: any) => {
  return (
    <div className="flex h-screen grow">
      <div className="grow bg-[url('/art.png')] bg-cover w-1/2 h-full" />
      <div className="grow bg-slate-50 w-1/2 items-center flex justify-center">
        <Flex
          vertical
          gap={16}
          className="w-2/3 bg-white p-8 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-bold block">Sign In</h2>
          <Skeleton paragraph={{ rows: 2 }} />
          <form onSubmit={loginCallback} className="flex flex-col gap-2">
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
            <span className="flex text-sm text-gray-500 justify-center text-center">
              Locate the password in the{" "}
              <code className="font-mono bg-yellow-200 text-black mx-1">
                .env
              </code>{" "}
              file.
            </span>
          </form>
        </Flex>
      </div>
    </div>
  );
};
