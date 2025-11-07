"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ReactNode, useState } from "react";
import { MyContext } from "./myContext";
import { ProductsTypes } from "@/_types/types";
import { useRouter } from "next/navigation";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  const router = useRouter();

  const [cart, setCart] = useState<ProductsTypes[]>([]);

  const addToCart = (product: ProductsTypes, quantity: number) => {
    console.log("Im clicked", quantity);

    setCart((prev) => {
      const itemExit = prev.find((item) => item._id === product._id);
      if (itemExit) {
        return prev;
      }
      return [...prev, { ...product, price: product.price * quantity }];
    });
    router.push("/checkout");
  };

  const [isCart, setIsCart] = useState(false);

  const handleOncart = () => {
    setIsCart((prev) => !prev);
  };


  const handleRemoveAllCart = () => {
    if (cart.length > 0) {
      setCart([]);
    }
  };
    const [isNavBar, setIsNavBar] = useState<boolean>(false);
  
    const handleNavBar = () => {
      setIsNavBar((prev) => !prev);
    };
  return (
    <ConvexProvider client={convex}>
      <MyContext.Provider
        value={{
          cart: cart,
          addToCart: addToCart,
          isCart: isCart,
          handleOnCart: handleOncart,
          handleRemoveAllCart: handleRemoveAllCart,
          handleNavBar:handleNavBar,
          isNavBar:isNavBar
        }}
      >
        {children}
      </MyContext.Provider>
    </ConvexProvider>
  );
}
