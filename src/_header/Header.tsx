"use client";
import Hersection from "@/herosection/herosection";
import HeaderComponent from "./headerComponent";
import { usePathname } from "next/navigation";
const Header = () => {
  const pathname = usePathname();
  const isPathName = pathname === "/";
  const retrievePathName = pathname.split("/");
  const checker= pathname.includes("category") &&
          retrievePathName[retrievePathName.length - 1]
  return (
    <header
      className={` w-full ${
        isPathName ? "h-[729px]" : "h-[97px]"
        // isPathName ? "h-[729px]" : "h-[300px]"
      }  bg-[#0E0E0E] items-center px-[100px] `}
    >
      <HeaderComponent />
      {isPathName && <Hersection />}
      <div className="uppercase text-white text-center my-[50px] text-[40px] leading-[44px] tracking-[1.43px] font-[700]">
        {checker}
      </div>
    </header>
  );
};

export default Header;
