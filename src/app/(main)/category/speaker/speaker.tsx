"use client";
import ProductComponent from "@/app/_product/productComponent";
import { useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import { Spinner } from "@/components/ui/spinner";

const Speaker = () => {
  const products = useQuery(api.product.getProducts);

  console.log(products);
  if (!products) {
    return <Spinner />;
  }

  const speakers = products.filter((product) => product.category === "speaker");

  return (
    <section className="mx-auto ">
      <ProductComponent product={speakers} />
    </section>
  );
};

export default Speaker;
