"use client";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
const ProductView = () => {
  return (
    <section className="absolute right-[30px] rounded-xl p-[30px] top-0 z-[30] w-[377px] h-[488px] bg-white">
      <div className="w-[313px] h-[25px] flex justify-between">
        <div className="text-[18px] leading-[100%] tracking-[1.29px] font-[700] uppercase">
          Cart <span>(3)</span>
        </div>
        <button className="text-[15px] leading-[25px] tracking-[0px] font-[400] text-[#D87D4A]">
          Remove all
        </button>
      </div>

      <div className="my-[20px]">
        <div className="flex justify-between items-center">
          <div className="bg-[#f1f1f1] w-[64px] h-[64px] rounded flex flex-col justify-center px-[10px]">
            <div className="w-[45px] h-[45px] relative overflow-hidden z-[30px] ">
              <Image src="/images/headphone.jpg" alt="speaker-image" fill />
            </div>
          </div>
          <div>
            <div className="text-[15px] leading-[25px] tracking-[0px] font-[700]">
              XX99 MK II
            </div>
            <div className="text-[14px] leading-[25px] tracking-[0px] font-[700]">
              $ 2,999
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
      </div>

      <div className="w-[308px] h-[25px] flex justify-between">
        <p className="text-[14px] leading-[25px] tracking-[0px] font-[400]">
          TOTAL
        </p>
        <h1 className="text-[18px] leading-[25px] tracking-[0px] font-[700]">
          $ 5,396
        </h1>
      </div>

      <button className="w-[313px] h-[48px] bg-[#FBAF85] text-[13px] leading-[100%] tracking-[1px] font-[700] text-align text-white" >checkout</button>
    </section>
  );
};

export default ProductView;
