"use client";
import ProductComponent from "@/app/_product/productComponent";
import { ProductsTypes } from "@/_types/types";
import { useState } from "react";
const Headphone = () => {
  const [headphoneProduct] = useState<ProductsTypes[]>([
    {
      productImage: "/images/headphone.jpg",
      productHeading: "XX99 Mark II Headphones",
      productDescription:
        "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    },
    {
      productImage: "/images/headphone2.jpg",
      productHeading: "XX99 Mark I Headphones",
      productDescription:
        "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    },
    {
      productImage: "/images/whiteheadphone.jpg",
      productHeading: "XX59 Headphones",
      productDescription:
        "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    },
  ]);
  return (
    <section className="mx-auto">
      <ProductComponent product={headphoneProduct} />
    </section>
  );
};

export default Headphone;
