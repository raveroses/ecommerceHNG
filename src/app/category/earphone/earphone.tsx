"use client";
import ProductComponent from "@/app/_product/productComponent";
import { ProductsTypes } from "@/_types/types";
import { useState } from "react";
const Earphone = () => {
  const [earphoneProduct] = useState<ProductsTypes[]>([
    {
      productImage: "/images/ear.jpg",
      productHeading: "YX1 WIRELESS EARPHONES",
      productDescription:
        "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    },
  ]);
  return (
    <section className="mx-auto">
      <ProductComponent product={earphoneProduct} />
    </section>
  );
};

export default Earphone;
