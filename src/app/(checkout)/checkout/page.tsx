"use client";
import { MyContext } from "@/custom-hooks/myContext";
import CheckoutMother from "./component/checkoutMother";
import { useContext } from "react";
import { Bounce, ToastContainer } from "react-toastify";

const CheckoutPage = () => {
   const context = useContext(MyContext);
    if (!context) {
      console.log("invalid context");
  
      return;
    }
    const { isCart } = context;
  return (
    <section className="md:w-[1110px] w-full  md:h-[1126px] md:my-[150px] my-[10px] mx-auto relative ">
      <CheckoutMother />
      <div
        className={`absolute inset-0 bg-black/50 ${isCart ? "block" : "hidden"}`}
      ></div>
       <ToastContainer
        position="top-right"
        autoClose={5000}
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
    </section>
  );
};

export default CheckoutPage;
