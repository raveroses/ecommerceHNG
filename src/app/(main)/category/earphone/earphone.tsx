"use client";
import ProductComponent from "@/app/_product/productComponent";
import { api } from "../../../../../convex/_generated/api";
import { useQuery } from "convex/react";
const Earphone = () => {
  const products = useQuery(api.product.getProducts);

  if (!products) {
    return <div>Loading...</div>;
  }

  const earphone = products.filter(
    (product) => product.category === "earphone"
  );

  return (
    <section className="md:mx-auto mx-0">
      <ProductComponent product={earphone ?? []} />
    </section>
  );
};

export default Earphone;
