"use client";
import Image from "next/image";
import SecondtothelastPart from "@/secondtothelastPart/secondtothelastPart";
const Body = () => {
  return (
    <section className="">
      <SecondtothelastPart />

      <div className="h-[560px] w-[1110px] bg-[#D87D4A] radius-[8px] mx-auto my-[100px] px-[30px] pt-[30px] text-white flex justify-between items-center">
        <div className="w-[410.23px] h-[493px] relative overflow-hidden">
          <Image src="/images/speaker2.jpg" alt="speaker-image" fill />
        </div>
        <div className="w-[349px] h-[303px]">
          <h2 className=" text-[56px] leading-[58px] tracking-[2px] font-[700]">
            ZX9 SPEAKER
          </h2>
          <p className="text-[15px] font-[400] leading-[25px] tracking-[0px]">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button className="w-[160px] h-[48px] text-[13px] leading-[100%] tracking-[1px] bg-black text-white ">
            SEE PRODUCTS
          </button>
        </div>
      </div>

      <div className="w-[1110px] h-[320px] bg-[#dddddd] flex justify-between items-center mx-auto pl-[100px]">
        <div className="w-[204px] h-[118px]">
          <h2 className="text-[28px] leading-[100%] font-[700] ">
            ZX7 SPEAKER
          </h2>
          <button className="w-[160px] h-[48px] text-[13px] font-[700] leading-[100%]  border border-black">
            SEE PRODUCTS
          </button>
        </div>

        <div className="w-[410.23px] h-[300px] relative overflow-hidden z-[30px]">
          <Image src="/images/speaker2.jpg" alt="speaker-image" fill />
        </div>
      </div>

      <section className="w-[1110px] h-[320px] flex items-center mx-auto my-[100px]">
        <div className="w-[540px] h-[320px] relative overflow-hidden z-[30px]">
          <Image src="/images/openearpord.jpg" alt="speaker-image" fill />
        </div>
        <div className="w-[540px] h-[320px] bg-[#dddddd] flex flex-col gap-[30px] justify-center mx-auto text-center">
          <h2 className="text-[28px] leading-[100%] font-[700] ">
            YX1 EARPHONES
          </h2>
          <button className="w-[160px] h-[48px] text-[13px] font-[700] leading-[100%]  border border-black mx-auto">
            SEE PRODUCTS
          </button>
        </div>
      </section>
    </section>
  );
};

export default Body;
