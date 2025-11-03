"use client";
import Link from "next/link";
import { useState } from "react";
import { NavProps } from "@/_types/types";
const NavBar = ({ isNavBar }: { isNavBar: boolean }) => {
  const [navs] = useState<NavProps[]>([
    { path: "/", navName: "HOMES" },
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
    <div className={`${isNavBar ? "block" : "hidden"}`}>
      <nav
        className={`text-[13px] flex md:flex-row flex-col bg-white md:bg-transparent md:w-auto w-[150px] md:h-auto h-[400px]  
    md:gap-[30px] gap-[30px] md:text-white text-black md:static absolute left-[0px] top-[60px] font-bold md:p-auto p-10  `}
      >
        {navMapping}
      </nav>
    </div>
  );
};

export default NavBar;
