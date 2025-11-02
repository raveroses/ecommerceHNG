"use client";
import { IoCartOutline } from "react-icons/io5";
// import NavBar from "./navbar";
import { GiHamburgerMenu } from "react-icons/gi";
const HeaderComponent = () => {
  return (
    <section className="md:relative relative lg:static">
      <div className="flex text-white justify-between py-[30px]">
        <div className="md:block lg:hidden text-[30px] text-white">
          <GiHamburgerMenu />
        </div>
        <div>
          <h2 className="text-[25px] font-bold">audiophile </h2>
        </div>

        <div className="carticon text-[30px]">
          <IoCartOutline />
        </div>
      </div>

    </section>
  );
};

export default HeaderComponent;
