"use client";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import { independentProduct } from "@/_types/types";
import { useState } from "react";
const FirstSection = ({ product }: independentProduct) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };
  // prev - 1
  console.log(quantity);
  return (
    <section className="w-[1110px] h-[560px] flex gap-[50px] my-[100px] items-center">
      <div className="w-[540px] h-[560px] bg-[#f1f1f1]">
        <div className="w-[300px] h-[300px] relative overflow-hidden z-[30px] mx-auto my-[100px]">
          <Image src={product.image} alt="speaker-image" fill />
        </div>
      </div>

      <div className="w-[444.5px] h-[407px] flex flex-col gap-[35px]">
        <h2 className=" text-[56px] leading-[58px] tracking-[2px] font-[700] uppercase">
          {product.name}
        </h2>
        <p className="text-[15px] font-[400] leading-[25px] tracking-[0px]">
          {product.description}
        </p>
        <div className="text-[18px] leading-[100%] tracking-[1.29px] font-[700]">
          $ {product.price}
        </div>

        <div className="buttons flex w-[296px] h-[48px] gap-[10px]">
          <div className="flex items-center justify-between w-[160px] h-[48px] text-[13px] leading-[100%] tracking-[1px] bg-[#f1f1f1] px-[5px] text-[20px] font-bold">
            <button onClick={handleDecrement}>
              <FiMinus />
            </button>
            <span>{quantity}</span>
            <button onClick={handleIncrement}>
              <FaPlus />
            </button>
          </div>
          <button className="w-[160px] h-[48px] text-[13px] leading-[100%] tracking-[1px] bg-[#D87D4A] text-white ">
            ADD PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
