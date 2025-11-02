"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ReactNode } from "react";
import { MyContext } from "./myContext";
import UseCartProduct from "./useCartProduct";
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  const data = UseCartProduct();

  return (
    <ConvexProvider client={convex}>
      <MyContext.Provider value={data}>{children}</MyContext.Provider>
    </ConvexProvider>
  );
}
