"use client";
import React, { useContext } from "react";
import FirstSection from "./firstSection";
import SecondSection from "./secondSection";
import ThirdSection from "./thirdSection";
import LastContent from "./lastContent";
import { Bounce, ToastContainer } from "react-toastify";
import { ProductsTypes } from "@/_types/types";
import { MyContext } from "@/custom-hooks/myContext";

function Allsection({ product }: { product: ProductsTypes }) {
  const context = useContext(MyContext);
  if (!context) {
    console.log("invalid context");

    return;
  }
  const { isCart } = context;
  return (
    <div>
      <FirstSection product={product} />
      <SecondSection />
      <ThirdSection />
      <LastContent />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
        limit={1}
      />

      <div
        className={`absolute inset-0 bg-black/50 ${isCart ? "block" : "hidden"}`}
      ></div>
    </div>
  );
}

export default Allsection;
