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
        className={`flex md:w-[1110px] w-full md:h-[560px] items-center md:gap-[80px] flex-col md:text-left text-center ${
          index % 2 === 0 ? "md:flex-row " : "md:flex-row-reverse"
        } `}
        key={index}
      >
        <div className="md:w-[540px] md:h-[560px] w-full h-[350px] relative overflow-hidden bg-[#f1f1f1]">
          <Image
            src={product.image}
            alt={product.name}
           fill
            className=" object-contain py-[20px]"
          />
        </div>
        
        <div className="md:w-[445px] md:h-[343px] w-full flex flex-col gap-[20px]">
          <h2 className=" text-[56px] leading-[58px] tracking-[2px] font-[700] uppercase">
            {product.name}
          </h2>
          <p className="text-[15px] font-[400] leading-[25px] tracking-[0px]">
            {product.description}
          </p>
          <button
            className="w-[160px] h-[48px] bg-[#d87d4a] text-[13px] leading-[100%] tracking-[1px] text-white md:mx-0 mx-auto "
            onClick={() => handleRouting(product.category, product._id)}
          >
            SEE PRODUCTS
          </button>
        </div>
      </div>
    );
  });

  return (
    <section className="my-[200px] flex flex-col gap-[50px] md:mx-[200px]">
      {productListing}
    </section>
  );
};

export default ProductComponent;
