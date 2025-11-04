"use client";
import Body from "@/body/body";
import { MyContext } from "@/custom-hooks/myContext";
import { useContext } from "react";
export default function Home() {
  const context = useContext(MyContext);
  if (!context) {
    console.log("invalid context");

    return;
  }
  // const { isCart } = context;
  return (
    <div className="bg-white">
      <div className="mt-[100px]">
        <Body />
        {/* <div
          className={`absolute inset-0 bg-black/50 ${isCart ? "block" : "hidden"}`}
        ></div> */}
      </div>
    </div>
  );
}
