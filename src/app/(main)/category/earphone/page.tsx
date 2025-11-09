"use client";
import { useContext } from "react";
import Earphone from "./earphone";
import { MyContext } from "@/custom-hooks/myContext";
const EarphonePage = () => {
  const context = useContext(MyContext);
  if (!context) {
    console.log("invalid context");

    return;
  }
  const { isCart } = context;
  return (
    <section className="md:px-0 px-[10px]">
      <Earphone />
      <div
        className={`absolute inset-0 bg-black/50 ${isCart ? "block" : "hidden"}`}
      ></div>
    </section>
  );
};

export default EarphonePage;
