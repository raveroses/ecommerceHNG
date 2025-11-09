"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ReactNode, useEffect, useState } from "react";
import { MyContext } from "./myContext";
import { ProductsTypes } from "@/_types/types";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
console.log(convex);
export function ConvexClientProvider({ children }: { children: ReactNode }) {
  const router = useRouter();

  const [cart, setCart] = useState<ProductsTypes[]>([]);

  const addToCart = (product: ProductsTypes, quantity: number) => {
    setCart((prev) => {
      const itemExit = prev.find((item) => item._id === product._id);
      if (itemExit) {
        return prev;
      }
      toast.success(`${product.name} added to cart successfully`);

      setTimeout(() => {
        router.push("/checkout");
      },2000);
      return [...prev, { ...product, price: product.price * quantity }];
    });
  };

  const [isCart, setIsCart] = useState(false);

  const handleOncart = () => {
    setIsCart((prev) => !prev);
  };

  console.log(cart);

  const handleRemoveAllCart = () => {
    if (cart.length > 0) {
      setCart([]);
    }
  };

  const [isNavBar, setIsNavBar] = useState<boolean>(false);

  const handleNavBar = () => {
    setIsNavBar(true);
  };

  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    const hamburger = document.querySelector(".hamburger");
    const cart = document.querySelector(".cart");

    const handleClickOutside = (e: MouseEvent) => {
      if (
        navbar &&
        !navbar.contains(e.target as Node) &&
        hamburger &&
        !hamburger.contains(e.target as Node)
      ) {
        setIsNavBar(false);
      }

      if (cart && !cart.contains(e.target as Node)) {
        setIsCart(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <ConvexProvider client={convex}>
      <MyContext.Provider
        value={{
          cart: cart,
          addToCart: addToCart,
          isCart: isCart,
          handleOnCart: handleOncart,
          handleRemoveAllCart: handleRemoveAllCart,
          handleNavBar: handleNavBar,
          isNavBar: isNavBar,
        }}
      >
        {children}
      </MyContext.Provider>
    </ConvexProvider>
  );
}
