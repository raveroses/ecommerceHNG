"use client"
import { useContext } from "react";
import { MyContext } from "./myContext";

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context)
    throw new Error("useMyContext must be used within ConvexClientProvider");
  return context;
};
