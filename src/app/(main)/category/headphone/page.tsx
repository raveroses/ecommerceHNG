"use client";
import { useContext } from "react";
import Headphone from "./Headphone";
import { MyContext } from "@/custom-hooks/myContext";
const HeadphonePage = () => {
  const context = useContext(MyContext);
  if (!context) {
    console.log("invalid context");

    return;
  }
  const { isCart } = context;
  return (
    <section className="md:px-0 px-[10px]">
      <Headphone />
      <div
        className={`absolute inset-0 bg-black/50 ${isCart ? "block" : "hidden"}`}
      ></div>
    </section>
  );
};

export default HeadphonePage;
