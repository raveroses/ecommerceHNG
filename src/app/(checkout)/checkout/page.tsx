"use client";
import { MyContext } from "@/custom-hooks/myContext";
import CheckoutMother from "./component/checkoutMother";
import { useContext } from "react";

const CheckoutPage = () => {
   const context = useContext(MyContext);
    if (!context) {
      console.log("invalid context");
  
      return;
    }
    const { isCart } = context;
  return (
    <section className="md:w-[1110px] w-full  md:h-[1126px] md:my-[50px] my-[10px] mx-auto relative ">
      <CheckoutMother />
      <div
        className={`absolute inset-0 bg-black/50 ${isCart ? "block" : "hidden"}`}
      ></div>
    </section>
  );
};

export default CheckoutPage;
