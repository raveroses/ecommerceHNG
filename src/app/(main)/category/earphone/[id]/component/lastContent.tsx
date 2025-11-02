"use client";
import { useState } from "react";
import { HeroCardProps } from "@/_types/types";
import Image from "next/image";
const LastContent = () => {
  const [cards] = useState<HeroCardProps[]>([
    {
      cardname: "XX99 MARK I",
      cardImage: "/images/headphone2.jpg",
      shopLink: "/",
      top: -30,
      left: 120,
      mobileTop: -10,
      mobileLeft: 150,
    },
    {
      cardname: "ZX9 SPEAKER",
      cardImage: "/images/speaker.jpg",
      shopLink: "/",
      top: -30,
      left: 120,
      mobileTop: -10,
      mobileLeft: 150,
    },
    {
      cardname: "XX59",
      cardImage: "/images/whiteheadphone.jpg",
      shopLink: "/",
      top: -30,
      left: 120,
      mobileTop: -10,
      mobileLeft: 150,
    },
  ]);

  const cardmap = cards.map((card, index) => {
    return (
      <div
        key={index}
        className="flex justify-center flex-col gap-[50px] md:bg-transparent bg-[#F1F1F1] md:my-0 my-5 md:py-0 py-10"
      >
        <div className="md:w-[350px] md:h-[318px] w-full md:bg-[#F1F1F1]  bg-transparent md:px-[90px] md:mx-[10px] justify-center flex flex-col rounded-[8px] py-[40px]">
          <div className="w-[200px] h-[200px] mx-auto overflow-hidden relative">
            <Image
              src={card.cardImage}
              alt="gadgetimage"
              fill
              className="object-contain w-"
            />
          </div>
        </div>

        <div className=" flex flex-col gap-[20px] mx-auto text-center ">
          <h2 className="text-[18px] font-bold tracking-[1.29px] leading-[100%]">
            {card.cardname}
          </h2>
          <button className="w-[160px] h-[48px] text-[13px] leading-[100%] tracking-[1px] bg-[#D87D4A] text-white ">
            ADD PRODUCTS
          </button>
        </div>
      </div>
    );
  });
  return (
    <div className="threeCards flex md:w-[1110px] md:h-[284px] w-full md:justify-between justify-center md:flex-row flex-col  mx-auto my-[250px]">
      {cardmap}
    </div>
  );
};

export default LastContent;
