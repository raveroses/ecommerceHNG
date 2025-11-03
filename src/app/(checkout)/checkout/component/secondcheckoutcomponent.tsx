"use client";
import { MyContext } from "@/custom-hooks/myContext";
import Image from "next/image";
import { useContext } from "react";
const SecondCheckouComponent = () => {
  const context = useContext(MyContext);
  if (!context) {
    console.log("invalid context");

    return;
  }
  const { cart, handleRemoveAllCart } = context;

  const catMapping = cart.map((item, index) => {
    return (
      <div className="flex justify-between items-center" key={index}>
        <div className="bg-[#f1f1f1] w-[64px] h-[64px] rounded flex flex-col justify-center px-[10px]">
          <div className="w-[45px] h-[45px] relative overflow-hidden z-[30px] ">
            <Image src={item.image} alt="speaker-image" fill />
          </div>
        </div>
        <div>
          <div className="text-[15px] leading-[25px] tracking-[0px] font-[700]">
            {item.name}
          </div>
          <div className="text-[14px] leading-[25px] tracking-[0px] font-[700]">
            $ {item.price}
          </div>
        </div>
        <div className="r">X1</div>
      </div>
    );
  });

  const totalPrice = cart.reduce((accum, item) => accum + item.price, 0);
  return (
    <section className=" rounded-xl p-[15px] md:w-[350px] w-full h-[612px] bg-[#f1f1f1]">
      <div className="md:w-[313px] w-full h-[25px] flex justify-between">
        <div className="text-[18px] leading-[100%] tracking-[1.29px] font-[700] uppercase">
          SUMMARY
        </div>
        <button
          className="text-[15px] leading-[25px] tracking-[0px] font-[400] text-[#D87D4A]"
          onClick={handleRemoveAllCart}
        >
          Remove all
        </button>
      </div>

      <div className="my-[20px]">{catMapping}</div>

      <div className="flex gap-[20px] flex-col ">
        <div className="md:w-[308px] w-full h-[25px] flex justify-between">
          <p className="text-[14px] leading-[25px] tracking-[0px] font-[400]">
            TOTAL
          </p>
          <h1 className="text-[18px] leading-[25px] tracking-[0px] font-[700]">
            ${totalPrice}
          </h1>
        </div>
        <div className="md:w-[308px] w-full h-[25px] flex justify-between">
          <p className="text-[14px] leading-[25px] tracking-[0px] font-[400]">
            SHIPPING
          </p>
          <h1 className="text-[18px] leading-[25px] tracking-[0px] font-[700]">
            $ 5,396
          </h1>
        </div>
        <div className="md:w-[308px] w-full h-[25px] flex justify-between">
          <p className="text-[14px] leading-[25px] tracking-[0px] font-[400]">
            VAT (INCLUDED)
          </p>
          <h1 className="text-[18px] leading-[25px] tracking-[0px] font-[700]">
            $ 5,396
          </h1>
        </div>
        <div className="md:w-[308px] w-full h-[25px] flex justify-between">
          <p className="text-[14px] leading-[25px] tracking-[0px] font-[400]">
            GRAND TOTAL
          </p>
          <h1 className="text-[18px] leading-[25px] tracking-[0px] font-[700] text-[#FBAF85]">
            $ 5,396
          </h1>
        </div>
      </div>
      <button className="md:w-[284px] w-full h-[48px] bg-[#FBAF85] text-[13px] leading-[100%] tracking-[1px] font-[700] text-align text-white mt-[20px] md:mx-[15px] mx-1">
        checkout
      </button>
      {/* <div
        className={`absolute inset-0 bg-black/50 ${isCart ? "block" : "hidden"}`}
      ></div> */}
    </section>
  );
};

export default SecondCheckouComponent;
