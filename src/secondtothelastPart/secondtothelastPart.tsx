"use client";
import { useState } from "react";
import { HeroCardProps } from "@/_types/types";
import { RxCaretRight } from "react-icons/rx";
import Image from "next/image";
const SecondtothelastPart = () => {
      const [cards] = useState<HeroCardProps[]>([
        {
          cardname: "HEADPHONES",
          cardImage: "/images/headphone2.jpg",
          shopLink: "/",
          top: -30,
          left: 120,
        },
        {
          cardname: "SPEAKERS",
          cardImage: "/images/speaker.jpg",
          shopLink: "/",
          top: -30,
          left: 120,
        },
        {
          cardname: "EARPHONES",
          cardImage: "/images/earphone.jpg",
          shopLink: "/",
          top: -30,
          left: 120,
        },
      ]);
    
      const cardmap = cards.map((card, index) => {
        return (
          <div
            key={index}
            className="w-[350px] h-[263px] relative bg-[#F1F1F1] flex gap-[350px] flex-col mx-auto text-center rounded-[8px] "
          >
            <div
              className={`image absolute w-[125px] h-[126px]  `}
              style={{ top: card.top, left: card.left }}
            >
              <Image
                src={card.cardImage}
                alt="gadgetimage"
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-[130px] flex flex-col gap-[20px] mx-auto text-center">
              <h2 className="text-[18px] font-bold tracking-[1.29px] leading-[100%]">
                {card.cardname}
              </h2>
              <div className="shpsLink flex items-center text-[13px] tracking-[1px] leading-[100%] text-center gap-[12px] m-0">
                <h2>Shop</h2>
                <div>
                  <RxCaretRight />
                </div>
              </div>
            </div>
          </div>
        );
      });
  return (
  <div className="threeCards flex w-[1110px] h-[284px] justify-between mx-auto">
        {cardmap}
      </div>
  );
};

export default SecondtothelastPart;
