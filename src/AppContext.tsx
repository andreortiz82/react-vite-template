import React, { createContext, useState, useMemo } from "react";

type AppContextType = {
  count: number;
  incrementCount: () => void;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Memoize the value to prevent unnecessary re-renders
  const value = useMemo(() => ({ count, incrementCount }), [count]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
