"use client";
import Image from "next/image";
import { ProductComponentProps } from "@/_types/types";
import { useRouter } from "next/navigation";
const ProductComponent = ({ product }: ProductComponentProps) => {
  console.log(product);

  const router = useRouter();
  const handleRouting = (category: string, id: string) => {
    router.push(`/category/${category}/${id}`);
  };
  const productListing = product.map((product, index) => {
    return (
      <div
        className={`flex w-[1110px] h-[560px] items-center gap-[80px] ${
          index % 2 === 0 ? "flex-row" : "flex-row-reverse"
        } `}
        key={index}
      >
        <div className="w-[540px] h-[560px] relative overflow-hidden z-[30px] bg-[#f1f1f1]">
          <Image
            src={product.image}
            alt={product.name}
            width={540}
            height={560}
            className="object-cover"
          />
        </div>
        <div className="w-[445px] h-[343px] flex flex-col gap-[20px]">
          <h2 className=" text-[56px] leading-[58px] tracking-[2px] font-[700] uppercase">
            {product.name}
          </h2>
          <p className="text-[15px] font-[400] leading-[25px] tracking-[0px]">
            {product.description}
          </p>
          <button
            className="w-[160px] h-[48px] bg-[#d87d4a] text-[13px] leading-[100%] tracking-[1px] text-white "
            onClick={() => handleRouting(product.category, product._id)}
          >
            SEE PRODUCTS
          </button>
        </div>
      </div>
    );
  });

  return (
    <section className="my-[200px] flex flex-col gap-[50px] mx-[200px]">
      {productListing}
    </section>
  );
};

export default ProductComponent;
