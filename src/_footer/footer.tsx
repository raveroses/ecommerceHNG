import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="w-full  bg-black text-white md:px-[50px] px-5 py-[80px] mt-[0px] md:mt-[80px] flex flex-col gap-[30px] md:text-left text-center">
      <div className="flex md:justify-between justify-center md:flex-row flex-col">
        <div>
          <h2 className="text-[20px] font-bold">audiophile</h2>
        </div>
      </div>
      <div className="flex md:justify-between flex-col md:flex-row justify-center items-center py-[60px] md:gap-0 gap-[90px]">
        <p className="text-[125x] leading-[25px] tracking-0 font-[500] md:w-[540px] w-full h-[100px] ">
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
