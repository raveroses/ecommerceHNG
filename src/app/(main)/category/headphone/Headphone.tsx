"use client";
import ProductComponent from "@/app/_product/productComponent";
import { useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import { Spinner } from "@/components/ui/spinner";
const Headphone = () => {
  const products = useQuery(api.product.getProducts);
  if (!products) {
    return <Spinner />;
  }
  const headphone = products.filter(
    (product) => product.category === "headphone"
  );

  return (
    <section className="mx-auto">
      <ProductComponent product={headphone ?? []} />
    </section>
  );
};

export default Headphone;
