"use client";
import Link from "next/link";
import { useState } from "react";
import { NavProps } from "@/_types/types";
const NavBar = () => {
  const [navs] = useState<NavProps[]>([
    { path: "/", navName: "HOMES" },
    { path: "/category/headphone", navName: "HEADPHONES" },
    { path: "/category/speaker", navName: "SPEAKERS" },
    { path: "/category/earphone", navName: "EARPHONES" },
  ]);

  const navMapping = navs.map((nav, index) => {
    return (
      <Link href={nav.path} key={index}>
        {nav.navName}
      </Link>
    );
  });

  return (
    <nav
      className={`text-[13px] flex md:flex-row flex-col gap-[30px] md:text-white text-black font-bold  `}
    >
      {navMapping}
    </nav>
  );
};

export default NavBar;
