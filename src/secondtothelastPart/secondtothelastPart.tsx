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

    },
    {
      cardname: "SPEAKERS",
      cardImage: "/images/speaker.jpg",
      shopLink: "/category/speaker",
    },
    {
      cardname: "EARPHONES",
      cardImage: "/images/earphone.jpg",
      shopLink: "/category/earphone",

    },
  ]);

  const cardmap = cards.map((card, index) => {
    return (
      <div
        key={index}
        className="relative  w-[100%] md:h-[263px] h-[250px] bg-[#F1F1F1] flex gap-[50px] my-10 flex-col  md:text-left text-center rounded-[8px]  "
      >
    

        <Image
          src={card.cardImage}
          alt="gadgetimage"
          width={105}
          height={105}
          className={`object-contain object-center absolute top-[-20%] left-[35%]`}
        />
        <div className=" mt-[160px] flex flex-col gap-[20px]  justify-center mx-auto text-center">
          <h2 className="text-[18px] font-bold tracking-[1.29px] leading-[100%]">
            {card.cardname}
          </h2>
          <Link href={card.shopLink}>
            <div className="shpsLink flex items-center justify-center text-[13px] tracking-[1px] leading-[100%] text-center gap-[12px] m-0">
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
    <div className="threeCards flex md:w-[1110px] w-full md:h-[284px] md:flex-row flex-col justify-between md:gap-[40px] mx-auto md:px-0 px-[10px]">
      {cardmap}
    </div>
  );
};

export default SecondtothelastPart;
