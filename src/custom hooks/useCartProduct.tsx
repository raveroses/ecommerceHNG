import { ProductsTypes } from "@/_types/types";
import { useState } from "react";
const UseCartProduct = () => {
  const [cart, setCart] = useState<ProductsTypes[]>([]);

  // const addToCart = (product: ProductsTypes) => {
  //   setCart((prev) => [...prev, product]);
  // };

  const addToCart = (product: ProductsTypes) => {
    console.log("Im clicked", cart, product);

    setCart((prev) => {
      const itemExit = prev.find((item) => item._id === product._id);
      if (itemExit) {
        return prev;
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  console.log("Array", cart);

  return { cart, addToCart };
};

export default UseCartProduct;
