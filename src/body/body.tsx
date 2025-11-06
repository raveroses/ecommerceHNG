"use client";
import Image from "next/image";
import SecondtothelastPart from "@/secondtothelastPart/secondtothelastPart";
import Link from "next/link";
const Body = () => {
  return (
    <section className="">
      <SecondtothelastPart />

      <div
        className="md:h-[560px] md:w-[1110px] py-20 w-full bg-[#D87D4A] radius-[8px] mx-auto my-[100px] md:px-[80px] p-2 md:px-[150px] pt-[30px] text-white 
      flex md:flex-row flex-col md:justify-start justify-center items-center md:gap-[70px] gap-[50px]"
      >
        <div className="md:w-[410.23px] w-full max-w-full h-[493px] relative overflow-hidden">
          <Image src="/images/speaker2.jpg" alt="speaker-image" fill />
        </div>
        <div className="md:w-[349px] md:h-[303px] md:text-left text-center ">
          <h2 className=" text-[56px] leading-[58px] tracking-[2px] font-[700]">
            ZX9 SPEAKER
          </h2>
          <p className="text-[15px] font-[400] leading-[25px] tracking-[0px]">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link href="/category/speaker">
            <button className="w-[160px] h-[48px] text-[13px] leading-[100%] tracking-[1px] bg-black text-white mx-auto ">
              SEE PRODUCTS
            </button>
          </Link>
        </div>
      </div>

      <div
        className="md:w-[1110px] h-[320px] w-full bg-[#dddddd] flex justify-between items-center mx-auto pl-[100px]"
        style={{
          backgroundImage: `url("/images/stand.png")`,
          backgroundPosition: "right bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="w-[204px] h-[118px]">
          <h2 className="text-[28px] leading-[100%] font-[700] ">
            ZX7 SPEAKER
          </h2>
          <button className="w-[160px] h-[48px] text-[13px] font-[700] leading-[100%]  border border-black">
            SEE PRODUCTS
          </button>
        </div>
      </div>

      <section className="md:w-[1110px] md:h-[320px] w-[600px] w-full flex md:flex-row flex-col items-center mx-auto my-[100px]">
        <div className="md:w-[540px] md:h-[320px] w-full h-[400px] relative overflow-hidden z-[30px]">
          <Image src="/images/openearpord.jpg" alt="speaker-image" fill />
        </div>
        <div className="md:w-[540px] w-full md:h-[320px] h-[400px] bg-[#dddddd] flex flex-col gap-[30px] justify-center mx-auto text-center">
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
