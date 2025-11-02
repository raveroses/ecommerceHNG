"use client";
import Link from "next/link";
import { useState } from "react";
import { NavProps } from "@/_types/types";
const NavBar = () => {
  const [navs] = useState<NavProps[]>([
    { path: "/home", navName: "HOMES" },
    { path: "/headphones", navName: "HEADPHONES" },
    { path: "/speakers", navName: "SPEAKERS" },
    { path: "/earphones", navName: "EARPHONES" },
  ]);

  const navMapping = navs.map((nav, index) => {
    return (
      <Link href={nav.path} key={index}>
        {nav.navName}
      </Link>
    );
  });

  return (
    <nav className="text-[13px] flex md:flex-col flex-col lg:flex-row md:bg-white bg-white lg:bg-transparent lg:w-auto md:w-[200px] lg:h-auto md:h-full  
    lg:gap-[20px] md:gap-[30px] gap-[30px] md:text-black text-black md:absolute lg:static left-0 top-[150px]  lg:text-white font-bold md:p-10 p-10 lg:p-auto hidden ">
      {navMapping}
    </nav>
  );
};

export default NavBar;
