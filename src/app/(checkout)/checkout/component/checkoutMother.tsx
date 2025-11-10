"use client";
import { useContext, useState } from "react";
import CheckoutComponent from "./checkoutComponent";
import Overlay from "./overlay";
import SecondCheckouComponent from "./secondcheckoutcomponent";
import { MyContext } from "@/custom-hooks/myContext";

const CheckoutMother = () => {
  // const [isOverLay, setIsOverLay] = useState<boolean>(false);
  const context = useContext(MyContext);
  if (!context) {
    console.log("invalid context");

    return;
  }
  const { isBackDrop } = context;
  return (
    <div>
      <section className="flex justify-between md:flex-row flex-col items-start  ">
        <CheckoutComponent />
        <SecondCheckouComponent />
      </section>
      <Overlay />
      <div
        className={`${isBackDrop ? "block" : "hidden"} absolute inset-0 bg-black/50`}
      ></div>
    </div>
  );
};

export default CheckoutMother;
