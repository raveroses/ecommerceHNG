"use client";
import { useState } from "react";
import CheckoutComponent from "./checkoutComponent";
import Overlay from "./overlay";
import SecondCheckouComponent from "./secondcheckoutcomponent";

const CheckoutMother = () => {
  const [isOverLay, setIsOverLay] = useState<boolean>(false);

  return (
    <div>
      <section className="flex justify-between md:flex-row flex-col items-start">
        <CheckoutComponent setIsOverLay={setIsOverLay} />
        <SecondCheckouComponent />
      </section>
      <Overlay isOverLay={isOverLay} />
      {/* <div className="absolute inset-0 bg-black/50"></div> */}
    </div>
  );
};

export default CheckoutMother;
