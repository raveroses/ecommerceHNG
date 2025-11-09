"use client";
import { IoCartOutline } from "react-icons/io5";
import NavBar from "./navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import ProductView from "@/app/_productview/productView";
import { useContext } from "react";
import { MyContext } from "@/custom-hooks/myContext";
const HeaderComponent = () => {
  const context = useContext(MyContext);
  if (!context) {
    console.log("invalid context");

    return;
  }
  const { handleOnCart, handleNavBar, isNavBar } = context;

  return (
    <section className="relative lg:static">
      <div className="flex text-white justify-between items-center py-[0px]">
        <div
          className=" hamburger md:block lg:hidden text-[30px] text-white"
          onClick={handleNavBar}
        >
          <GiHamburgerMenu />
        </div>

        <div>
          <h2 className="text-[25px] font-bold">audiophile </h2>
        </div>

        <div
          className={`navbar ${isNavBar ? "block" : "hidden"} md:block bg-white md:bg-transparent md:w-auto w-[220px] md:h-auto h-[900px] md:static absolute left-[0px] top-[60px] md:p-auto p-5 `}
        >
          <NavBar />
        </div>

        <div className="cart carticon text-[30px]" onClick={handleOnCart}>
          <IoCartOutline />
        </div>
      </div>
      <ProductView />
    </section>
  );
};

export default HeaderComponent;
