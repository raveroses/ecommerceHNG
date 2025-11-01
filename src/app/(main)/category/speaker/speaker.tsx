"use client";
import { ProductsTypes } from "@/_types/types";
import { useState } from "react";
import ProductComponent from "@/app/_product/productComponent";
const Speaker = () => {
  const [speakerProduct] = useState<ProductsTypes[]>([
    {
      productImage: "/images/speaker.jpg",
      productHeading: "ZX9 SPEAKER",
      productDescription:
        "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    },
    {
      productImage: "/images/speaker3.jpg",
      productHeading: "ZX7 SPEAKER",
      productDescription:
        "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    },
  ]);
  return (
    <section className="mx-auto">
      <ProductComponent product={speakerProduct} />
    </section>
  );
};

export default Speaker;
