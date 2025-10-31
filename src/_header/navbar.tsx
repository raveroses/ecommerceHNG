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
    <nav className="text-[13px] flex gap-[20px] font-bold">{navMapping}</nav>
  );
};

export default NavBar;
