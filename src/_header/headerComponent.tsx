"use client";
import { IoCartOutline } from "react-icons/io5";
import NavBar from "./navbar";
const HeaderComponent = () => {
  return (
    <section>
      <div className="flex text-white justify-between py-[30px]">
        <div>
          <h2 className="text-[25px] font-bold">audiophile </h2>
        </div>
        <div>
          <NavBar />
        </div>
        <div className="carticon text-[30px]">
          <IoCartOutline />
        </div>
      </div>

      <div className="w-[1110px] h-px bg-[#FFFFFF] opacity-20 mx-auto"></div>
    </section>
  );
};

export default HeaderComponent;
