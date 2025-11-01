"use client";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
const FirstSection = () => {
  return (
    <section className="w-[1110px] h-[560px] flex gap-[50px] my-[100px] items-center">
      <div className="w-[540px] h-[560px] bg-[#f1f1f1]">
        <div className="w-[300px] h-[300px] relative overflow-hidden z-[30px] mx-auto my-[100px]">
          <Image src="/images/openearpord.jpg" alt="speaker-image" fill />
        </div>
      </div>

      <div className="w-[444.5px] h-[407px] flex flex-col gap-[35px]">
        <h2 className=" text-[56px] leading-[58px] tracking-[2px] font-[700] uppercase">
          XX99 Mark II Headphones
        </h2>
        <p className="text-[15px] font-[400] leading-[25px] tracking-[0px]">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <div className="text-[18px] leading-[100%] tracking-[1.29px] font-[700]">
          $ 2,999
        </div>

        <div className="buttons flex w-[296px] h-[48px] gap-[10px]">
          <div className="flex items-center justify-between w-[160px] h-[48px] text-[13px] leading-[100%] tracking-[1px] bg-[#f1f1f1] px-[5px] text-[20px] font-bold">
            <button>
              <FiMinus />
            </button>
            <span>1</span>
            <button>
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
