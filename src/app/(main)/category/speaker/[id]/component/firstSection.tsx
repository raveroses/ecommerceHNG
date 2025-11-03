"use client";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import { independentProduct } from "@/_types/types";
import { useContext, useState } from "react";
import { MyContext } from "@/custom-hooks/myContext";
const FirstSection = ({ product }: independentProduct) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  // const totalPrice = product.price * quantity;
  console.log(quantity);

  const context = useContext(MyContext);
  if (!context) {
    console.log("invalid context");

    return;
  }
  const { cart, addToCart } = context;
  console.log(cart);
  const totalPrice = product.price * quantity;

  return (
    <section className="md:w-[1110px] md:h-[560px] w-full flex flex-col md:flex-row gap-[50px] my-[100px] items-center md:text-left text-center">
      <div className="md:w-[540px] w-full h-[560px] bg-[#f1f1f1]">
        <div className="w-[300px] h-[300px] relative overflow-hidden z-[30px] mx-auto my-[100px]">
          <Image src={product.image} alt="speaker-image" fill />
        </div>
      </div>

      <div className="md:w-[444.5px] md:h-[407px] w-full flex flex-col gap-[35px]">
        <h2 className=" text-[56px] leading-[58px] tracking-[2px] font-[700] uppercase">
          {product.name}
        </h2>
        <p className="text-[15px] font-[400] leading-[25px] tracking-[0px]">
          {product.description}
        </p>
        <div className="text-[18px] leading-[100%] tracking-[1.29px] font-[700]">
          $ {totalPrice}
        </div>

        <div className="buttons flex md:w-[296px] md:h-[48px] gap-[10px] md:mx-0 mx-auto">
          <div className="flex items-center justify-between w-[160px] h-[48px] text-[13px] leading-[100%] tracking-[1px] bg-[#f1f1f1] px-[5px] text-[20px] font-bold">
            <button onClick={handleDecrement}>
              <FiMinus />
            </button>
            <span>{quantity}</span>
            <button onClick={handleIncrement}>
              <FaPlus />
            </button>
          </div>
          <button
            className="w-[160px] h-[48px] text-[13px] leading-[100%] tracking-[1px] bg-[#D87D4A] text-white "
            onClick={() => addToCart(product, quantity)}
          >
            ADD PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
