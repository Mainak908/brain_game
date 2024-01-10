"use client";
import React, { createContext, useEffect, useState } from "react";
interface lvl {
  level: number;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
}
export const levelcontext = createContext<lvl>({
  level: 1,
  setLevel: () => {},
});

export const Level = ({ children }: { children: React.ReactNode }) => {
  const [level, setLevel] = useState(1);

  return (
    <levelcontext.Provider value={{ level, setLevel }}>
      {children}
    </levelcontext.Provider>
  );
};
