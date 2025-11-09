import { fetchQuery } from "convex/nextjs";
import { api } from "../../../../../../convex/_generated/api";
import Allsection from "../../_component/Allsection";
// import { ProductsTypes } from "@/_types/types";

// export async function generateStaticParams() {
//   try {
//     const products = await fetchQuery(api.product.getProducts);
//     console.log("Static params for", products.length, "products");
//     return products.map((p) => ({ category: p.category, id: p._id }));
//   } catch (error) {
//     console.error("Static params failed:", error);
//     return [];
//   }
// }

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const products = await fetchQuery(api.product.getProducts);
  console.log(products);
  const product = products.find((p) => p._id === id);
  console.log(id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <section className="relative flex items-center flex-col mx-auto md:px-0 px-[10px]">
      <Allsection product={product} />
    </section>
  );
}
