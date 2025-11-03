"use client";
import { MyContext } from "@/custom-hooks/myContext";
import Image from "next/image";
import { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import Link from "next/link";
const ProductView = () => {
  const context = useContext(MyContext);
  if (!context) {
    console.log("invalid context");

    return;
  }
  const { cart, isCart, handleRemoveAllCart } = context;
  console.log(cart);

  const productMap = cart.map((event, index) => {
    return (
      <div className="flex justify-between items-center " key={index}>
        <div className="bg-[#f1f1f1] w-[64px] h-[64px] rounded flex flex-col justify-center px-[10px]">
          <div className="w-[45px] h-[45px] relative overflow-hidden z-[30px] ">
            <Image src={event.image} alt="speaker-image" fill />
          </div>
        </div>
        <div>
          <div className="text-[15px] leading-[25px] tracking-[0px] font-[700]">
            {event.name}
          </div>
          <div className="text-[14px] leading-[25px] tracking-[0px] font-[700]">
            ${event.price}
          </div>
        </div>
        <div className="w-[96px] h-[32px] flex items-center justify-between  rounded bg-[#f1f1f1] p-3 cursor-pointer">
          <button>
            <FaPlus />
          </button>
          <span>1</span>
          <button>
            <FiMinus />
          </button>
        </div>
      </div>
    );
  });

  const totalPrice = cart.reduce((accum, item) => accum + item.price, 0);
  return (
    <section
      className={`absolute md:right-[300px] rounded-xl p-[30px] md:top-[100px] z-[30] md:w-[377px] md:h-[488px] w-full bg-white shadow ${isCart ? "block" : "hidden"}`}
    >
      <div className="md:w-[313px] md:h-[25px] flex justify-between">
        <div className="text-[18px] leading-[100%] tracking-[1.29px] font-[700] uppercase">
          Cart <span>({cart.length})</span>
        </div>
        <button
          className="text-[15px] leading-[25px] tracking-[0px] font-[400] text-[#D87D4A]"
          onClick={handleRemoveAllCart}
        >
          Remove all
        </button>
      </div>

      <div className="my-[20px]">
        {/* <div className="flex justify-between items-center"></div> */}
        {productMap}
      </div>

      <div className="w-[308px] h-[25px] flex justify-between">
        <p className="text-[14px] leading-[25px] tracking-[0px] font-[400]">
          TOTAL
        </p>
        <h1 className="text-[18px] leading-[25px] tracking-[0px] font-[700]">
          $ {totalPrice}
        </h1>
      </div>

      <Link href="/checkout">
        <button className="w-[313px] h-[48px] bg-[#FBAF85] text-[13px] leading-[100%] tracking-[1px] font-[700] text-align text-white">
          checkout
        </button>
      </Link>
    </section>
  );
};

export default ProductView;
