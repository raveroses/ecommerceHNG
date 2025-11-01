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
    },
    {
      cardname: "ZX9 SPEAKER",
      cardImage: "/images/speaker.jpg",
      shopLink: "/",
      top: -30,
      left: 120,
    },
    {
      cardname: "XX59",
      cardImage: "/images/whiteheadphone.jpg",
      shopLink: "/",
      top: -30,
      left: 120,
    },
  ]);

  const cardmap = cards.map((card, index) => {
    return (
      <div key={index} className="flex justify-center flex-col gap-[50px]">
        <div className="w-[350px] h-[318px] bg-[#F1F1F1] px-[90px] mx-[10px] justify-center flex flex-col rounded-[8px] py-[40px]">
          <div className="w-[200px] h-[200px]  overflow-hidden relative">
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
    <div className="threeCards flex w-[1110px] h-[284px] justify-between mx-auto my-[250px]">
      {cardmap}
    </div>
  );
};

export default LastContent;
