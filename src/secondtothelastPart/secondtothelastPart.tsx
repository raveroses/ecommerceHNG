"use client";
import { useState } from "react";
import { HeroCardProps } from "@/_types/types";
import { RxCaretRight } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";
const SecondtothelastPart = () => {
  const [cards] = useState<HeroCardProps[]>([
    {
      cardname: "HEADPHONES",
      cardImage: "/images/headphone2.jpg",
      shopLink: "/category/headphone",
      top: -30,
      left: 120,
      mobileTop: -10,
      mobileLeft: 150,
    },
    {
      cardname: "SPEAKERS",
      cardImage: "/images/speaker.jpg",
      shopLink: "/category/speaker",
      top: -30,
      left: 120,
      mobileTop: -10,
      mobileLeft: 150,
    },
    {
      cardname: "EARPHONES",
      cardImage: "/images/earphone.jpg",
      shopLink: "/category/earphone",
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
        className="relative md:w-[350px] md:h-[263px] h-[250px] w-full bg-[#F1F1F1] flex md:gap-[350px] my-10 flex-col mx-auto md:text-left text-center rounded-[8px] "
      >
        <div
          className={`image absolute w-[125px] h-[126px]  `}
          // style={{
          //   top: card.top,
          //   left: card.left,
          // }}
          style={
            window.innerWidth > 768
              ? { top: card.top, left: card.left }
              : { top: card.mobileTop, left: card.mobileLeft }
          }
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
          <Link href={card.shopLink}>
            <div className="shpsLink flex items-center text-[13px] tracking-[1px] leading-[100%] text-center gap-[12px] m-0">
              <h2>Shop</h2>
              <div>
                <RxCaretRight />
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  });
  return (
    <div className="threeCards flex md:w-[1110px] w-full md:h-[284px]  md:flex-row flex-col justify-between mx-auto">
      {cardmap}
    </div>
  );
};

export default SecondtothelastPart;
