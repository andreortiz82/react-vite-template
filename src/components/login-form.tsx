import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function LoginForm({
  className,
  onSubmit,
  ...props
}: React.ComponentProps<"form">) {
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.(e);
  };

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      onSubmit={handleSubmit}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your password below to login
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Input
            placeholder="Enter password"
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
        <span className="flex text-sm text-muted-foreground justify-center text-center">
          Locate the password in the{" "}
          <code className="font-mono bg-yellow-200 text-black mx-1">.env</code>{" "}
          file.
        </span>
      </div>
    </form>
  );
}
