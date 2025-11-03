"use client";
import { IoCartOutline } from "react-icons/io5";
import NavBar from "./navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import ProductView from "@/app/_productview/productView";
import { useContext, useState } from "react";
import { MyContext } from "@/custom-hooks/myContext";
const HeaderComponent = () => {
  const [isNavBar, setIsNavBar] = useState<boolean>(false);

  const context = useContext(MyContext);
  if (!context) {
    console.log("invalid context");

    return;
  }
  const { handleOnCart } = context;

  const handleNavBar = () => {
    setIsNavBar((prev) => !prev);
  };
  return (
    <section className="md:relative relative lg:static">
      <div className="flex text-white justify-between items-center py-[0px]">
        <div
          className="md:block lg:hidden text-[30px] text-white"
          onClick={handleNavBar}
        >
          <GiHamburgerMenu />
        </div>
        <div>
          <h2 className="text-[25px] font-bold">audiophile </h2>
        </div>
        <NavBar isNavBar={isNavBar} />
        <div className="carticon text-[30px]" onClick={handleOnCart}>
          <IoCartOutline />
        </div>
      </div>
      <ProductView />
    </section>
  );
};

export default HeaderComponent;
