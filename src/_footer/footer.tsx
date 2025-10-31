"use-client";
import NavBar from "@/_header/navbar";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="w-[1440px] h-[365px] bg-black text-white px-[120px] py-[80px] mt-[80px]">
      <div className="flex justify-between">
        <div>
          <h2 className="text-[20px] font-bold">audiophile</h2>
        </div>
        <NavBar />
      </div>
      <div className="flex justify-between items-center py-[60px]">
        <p className="text-[125x] leading-[25px] tracking-0 font-[500] w-[540px] h-[100px] ">
          Audiophile is an all in one stop to fulfill your audio needs. Were a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className="flex gap-[10px] text-[30px]">
          <FaFacebook />
          <FaTwitter />
          <FaSquareInstagram />
        </div>
      </div>
      <div className="text-[125x] leading-[25px] tracking-0 font-[500]">
        Copyright 2021. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
